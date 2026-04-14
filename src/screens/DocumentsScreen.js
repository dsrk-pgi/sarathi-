import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const DOCUMENT_TYPES = [
  { key: 'aadhaar', icon: 'card' },
  { key: 'pan', icon: 'card-outline' },
  { key: 'drivingLicense', icon: 'car' },
  { key: 'insurance', icon: 'shield-checkmark' },
  { key: 'passport', icon: 'airplane' },
  { key: 'voterID', icon: 'finger-print' },
];

const DocumentsScreen = () => {
  const { t } = useLanguage();
  const { documents, addDocument, deleteDocument } = useData();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleAddDocument = () => {
    if (!selectedType || !documentNumber) {
      Alert.alert(t('common.error'), 'Please fill all fields');
      return;
    }

    addDocument({
      type: t(`documents.${selectedType}`),
      number: documentNumber,
      expiryDate: expiryDate,
    });

    setModalVisible(false);
    setSelectedType('');
    setDocumentNumber('');
    setExpiryDate('');
  };

  const getDaysUntilExpiry = (expiryDate) => {
    if (!expiryDate) return null;
    const today = new Date();
    const expiry = new Date(expiryDate);
    const days = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    return days;
  };

  const getExpiryStatus = (days) => {
    if (days === null) return { text: '', color: COLORS.textSecondary };
    if (days < 0) return { text: t('documents.expired'), color: COLORS.danger };
    if (days <= 15) return { text: `${t('documents.expiresIn')} ${days} ${t('home.days')}`, color: COLORS.warning };
    return { text: `${t('documents.expiresIn')} ${days} ${t('home.days')}`, color: COLORS.success };
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>{t('documents.subtitle')}</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {documents.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={64} color={COLORS.textSecondary} />
            <Text style={styles.emptyText}>{t('documents.noDocuments')}</Text>
          </View>
        ) : (
          documents.map(doc => {
            const days = getDaysUntilExpiry(doc.expiryDate);
            const status = getExpiryStatus(days);
            
            return (
              <View key={doc.id} style={styles.documentCard}>
                <View style={styles.documentHeader}>
                  <View style={styles.documentIcon}>
                    <Ionicons name="document-text" size={24} color={COLORS.primary} />
                  </View>
                  <View style={styles.documentInfo}>
                    <Text style={styles.documentType}>{doc.type}</Text>
                    <Text style={styles.documentNumber}>{doc.number}</Text>
                    {doc.expiryDate && (
                      <Text style={[styles.expiryText, { color: status.color }]}>
                        {status.text}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() => deleteDocument(doc.id)}
                    style={styles.deleteButton}
                  >
                    <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={28} color={COLORS.white} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('documents.addDocument')}</Text>

            <Text style={styles.label}>Document Type</Text>
            <View style={styles.typeGrid}>
              {DOCUMENT_TYPES.map(type => (
                <TouchableOpacity
                  key={type.key}
                  style={[
                    styles.typeButton,
                    selectedType === type.key && styles.typeButtonSelected,
                  ]}
                  onPress={() => setSelectedType(type.key)}
                >
                  <Ionicons
                    name={type.icon}
                    size={24}
                    color={selectedType === type.key ? COLORS.white : COLORS.primary}
                  />
                  <Text
                    style={[
                      styles.typeText,
                      selectedType === type.key && styles.typeTextSelected,
                    ]}
                  >
                    {t(`documents.${type.key}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>{t('documents.documentNumber')}</Text>
            <TextInput
              style={styles.input}
              value={documentNumber}
              onChangeText={setDocumentNumber}
              placeholder="Enter document number"
            />

            <Text style={styles.label}>{t('documents.expiryDate')} (YYYY-MM-DD)</Text>
            <TextInput
              style={styles.input}
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholder="2025-12-31"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleAddDocument}
              >
                <Text style={styles.saveButtonText}>{t('common.save')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: SIZES.md,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
    padding: SIZES.md,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.xxxl * 2,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: SIZES.md,
  },
  documentCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.md,
    marginBottom: SIZES.md,
    ...SHADOWS.small,
  },
  documentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  documentIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.md,
  },
  documentInfo: {
    flex: 1,
  },
  documentType: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  documentNumber: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  expiryText: {
    fontSize: 12,
    fontWeight: '600',
  },
  deleteButton: {
    padding: SIZES.sm,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.large,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: SIZES.lg,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.lg,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.sm,
    marginTop: SIZES.md,
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: SIZES.md,
  },
  typeButton: {
    width: '48%',
    padding: SIZES.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    marginRight: '4%',
    marginBottom: SIZES.sm,
  },
  typeButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  typeText: {
    fontSize: 12,
    color: COLORS.text,
    marginTop: 4,
    textAlign: 'center',
  },
  typeTextSelected: {
    color: COLORS.white,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SIZES.md,
    fontSize: 16,
    color: COLORS.text,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.lg,
  },
  button: {
    flex: 1,
    padding: SIZES.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.background,
    marginRight: SIZES.sm,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    marginLeft: SIZES.sm,
  },
  cancelButtonText: {
    color: COLORS.text,
    fontWeight: '600',
  },
  saveButtonText: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default DocumentsScreen;
