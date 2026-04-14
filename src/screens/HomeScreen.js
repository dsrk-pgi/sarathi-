import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { COLORS, SIZES } from '../constants/theme';
import ActionCard from '../components/ActionCard';
import StatusCard from '../components/StatusCard';
import VoiceButton from '../components/VoiceButton';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const { t } = useLanguage();
  const { documents, bills, medicines } = useData();

  const upcomingTasks = useMemo(() => {
    const tasks = [];
    const today = new Date();
    const fifteenDaysFromNow = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000);

    documents.forEach(doc => {
      if (doc.expiryDate) {
        const expiryDate = new Date(doc.expiryDate);
        const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysUntilExpiry <= 15 && daysUntilExpiry >= 0) {
          tasks.push({
            id: doc.id,
            type: 'document',
            title: `${doc.type} ${t('home.documentExpiring')}`,
            subtitle: `${t('home.dueIn')} ${daysUntilExpiry} ${t('home.days')}`,
            icon: 'document-text',
            urgent: daysUntilExpiry <= 7,
            color: COLORS.warning,
          });
        }
      }
    });

    bills.forEach(bill => {
      if (bill.dueDate && !bill.paid) {
        const dueDate = new Date(bill.dueDate);
        const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysUntilDue <= 7 && daysUntilDue >= 0) {
          tasks.push({
            id: bill.id,
            type: 'bill',
            title: `${bill.type} ${t('bills.title')}`,
            subtitle: `₹${bill.amount} - ${t('home.dueIn')} ${daysUntilDue} ${t('home.days')}`,
            icon: 'flash',
            urgent: daysUntilDue <= 3,
            color: COLORS.danger,
          });
        }
      }
    });

    medicines.forEach(med => {
      if (!med.taken) {
        tasks.push({
          id: med.id,
          type: 'medicine',
          title: t('home.takeMedicine'),
          subtitle: med.name,
          icon: 'medical',
          urgent: true,
          color: COLORS.success,
        });
      }
    });

    return tasks.sort((a, b) => b.urgent - a.urgent);
  }, [documents, bills, medicines, t]);

  const handleVoicePress = () => {
    Alert.alert(
      t('voice.speak'),
      t('voice.tapToSpeak'),
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.slogan}>{t('common.slogan')}</Text>
        </View>

        <View style={styles.statusSection}>
          <StatusCard
            title={t('home.upcomingTasks')}
            value={upcomingTasks.length}
            icon={<Ionicons name="calendar" size={60} color={COLORS.white} />}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('home.currentStatus')}</Text>
          
          {upcomingTasks.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="checkmark-circle" size={64} color={COLORS.success} />
              <Text style={styles.emptyText}>{t('home.noPendingTasks')}</Text>
            </View>
          ) : (
            upcomingTasks.map(task => (
              <ActionCard
                key={task.id}
                icon={task.icon}
                title={task.title}
                subtitle={task.subtitle}
                color={task.color}
                urgent={task.urgent}
                onPress={() => {}}
              />
            ))
          )}
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      <View style={styles.voiceButtonContainer}>
        <VoiceButton onPress={handleVoicePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: SIZES.lg,
    paddingTop: SIZES.md,
  },
  slogan: {
    fontSize: 18,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  statusSection: {
    padding: SIZES.md,
    paddingTop: SIZES.lg,
  },
  section: {
    padding: SIZES.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.md,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.xxxl,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: SIZES.md,
  },
  voiceButtonContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
  bottomPadding: {
    height: 100,
  },
});

export default HomeScreen;
