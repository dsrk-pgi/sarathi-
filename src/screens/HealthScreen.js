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

const HealthScreen = () => {
  const { t } = useLanguage();
  const { medicines, addMedicine, updateMedicine, deleteMedicine } = useData();
  const [modalVisible, setModalVisible] = useState(false);
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('morning');

  const handleAddMedicine = () => {
    if (!medicineName || !dosage) {
      Alert.alert(t('common.error'), 'Please fill all fields');
      return;
    }

    addMedicine({
      name: medicineName,
      dosage: dosage,
      time: time,
      taken: false,
    });

    setModalVisible(false);
    setMedicineName('');
    setDosage('');
    setTime('morning');
  };

  const toggleMedicineTaken = (id, currentStatus) => {
    updateMedicine(id, { taken: !currentStatus });
  };

  const timeOptions = [
    { key: 'morning', icon: 'sunny' },
    { key: 'afternoon', icon: 'partly-sunny' },
    { key: 'evening', icon: 'moon' },
    { key: 'night', icon: 'moon-outline' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>{t('health.subtitle')}</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.healthScoreCard}>
          <Ionicons name="heart" size={40} color={COLORS.danger} />
          <View style={styles.scoreInfo}>
            <Text style={styles.scoreLabel}>{t('health.healthScore')}</Text>
            <Text style={styles.scoreValue}>85/100</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('health.medicines')}</Text>

        {medicines.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="medical-outline" size={64} color={COLORS.textSecondary} />
            <Text style={styles.emptyText}>{t('health.noMedicines')}</Text>
          </View>
        ) : (
          medicines.map(med => (
            <View key={med.id} style={styles.medicineCard}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => toggleMedicineTaken(med.id, med.taken)}
              >
                <Ionicons
                  name={med.taken ? 'checkmark-circle' : 'ellipse-outline'}
                  size={28}
                  color={med.taken ? COLORS.success : COLORS.textSecondary}
                />
              </TouchableOpacity>
              
              <View style={styles.medicineInfo}>
                <Text style={[styles.medicineName, med.taken && styles.medicineTaken]}>
                  {med.name}
                </Text>
                <Text style={styles.medicineDosage}>{med.dosage}</Text>
                <View style={styles.timeTag}>
                  <Ionicons
                    name={timeOptions.find(t => t.key === med.time)?.icon || 'time'}
                    size={14}
                    color={COLORS.primary}
                  />
                  <Text style={styles.timeText}>{t(`health.${med.time}`)}</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => deleteMedicine(med.id)}
                style={styles.deleteButton}
              >
                <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
              </TouchableOpacity>
            </View>
          ))
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
            <Text style={styles.modalTitle}>{t('health.addMedicine')}</Text>

            <Text style={styles.label}>{t('health.medicineName')}</Text>
            <TextInput
              style={styles.input}
              value={medicineName}
              onChangeText={setMedicineName}
              placeholder="Enter medicine name"
            />

            <Text style={styles.label}>{t('health.dosage')}</Text>
            <TextInput
              style={styles.input}
              value={dosage}
              onChangeText={setDosage}
              placeholder="e.g., 1 tablet, 5ml"
            />

            <Text style={styles.label}>{t('health.time')}</Text>
            <View style={styles.timeGrid}>
              {timeOptions.map(option => (
                <TouchableOpacity
                  key={option.key}
                  style={[
                    styles.timeButton,
                    time === option.key && styles.timeButtonSelected,
                  ]}
                  onPress={() => setTime(option.key)}
                >
                  <Ionicons
                    name={option.icon}
                    size={24}
                    color={time === option.key ? COLORS.white : COLORS.primary}
                  />
                  <Text
                    style={[
                      styles.timeButtonText,
                      time === option.key && styles.timeButtonTextSelected,
                    ]}
                  >
                    {t(`health.${option.key}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleAddMedicine}
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
  healthScoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.lg,
    marginBottom: SIZES.lg,
    ...SHADOWS.medium,
  },
  scoreInfo: {
    marginLeft: SIZES.md,
  },
  scoreLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  scoreValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.md,
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
  medicineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.md,
    marginBottom: SIZES.md,
    ...SHADOWS.small,
  },
  checkbox: {
    marginRight: SIZES.md,
  },
  medicineInfo: {
    flex: 1,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  medicineTaken: {
    textDecorationLine: 'line-through',
    color: COLORS.textSecondary,
  },
  medicineDosage: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  timeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary + '20',
    paddingHorizontal: SIZES.sm,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  timeText: {
    fontSize: 12,
    color: COLORS.primary,
    marginLeft: 4,
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
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SIZES.md,
    fontSize: 16,
    color: COLORS.text,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: SIZES.md,
  },
  timeButton: {
    width: '48%',
    padding: SIZES.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    marginRight: '4%',
    marginBottom: SIZES.sm,
  },
  timeButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  timeButtonText: {
    fontSize: 12,
    color: COLORS.text,
    marginTop: 4,
  },
  timeButtonTextSelected: {
    color: COLORS.white,
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

export default HealthScreen;
