import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const SettingsScreen = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const SettingItem = ({ icon, title, value, onPress, showArrow = true }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={24} color={COLORS.primary} />
        </View>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      <View style={styles.settingRight}>
        {value && <Text style={styles.settingValue}>{value}</Text>}
        {showArrow && <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />}
      </View>
    </TouchableOpacity>
  );

  const SettingSwitch = ({ icon, title, value, onValueChange }) => (
    <View style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={24} color={COLORS.primary} />
        </View>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: COLORS.border, true: COLORS.primary }}
        thumbColor={COLORS.white}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
          
          <TouchableOpacity
            style={[styles.languageButton, language === 'hi' && styles.languageButtonActive]}
            onPress={() => changeLanguage('hi')}
          >
            <Text style={[styles.languageText, language === 'hi' && styles.languageTextActive]}>
              हिंदी
            </Text>
            {language === 'hi' && (
              <Ionicons name="checkmark-circle" size={24} color={COLORS.white} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.languageButton, language === 'en' && styles.languageButtonActive]}
            onPress={() => changeLanguage('en')}
          >
            <Text style={[styles.languageText, language === 'en' && styles.languageTextActive]}>
              English
            </Text>
            {language === 'en' && (
              <Ionicons name="checkmark-circle" size={24} color={COLORS.white} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.notifications')}</Text>
          <SettingSwitch
            icon="notifications"
            title={t('settings.enableNotifications')}
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.about')}</Text>
          <SettingItem
            icon="information-circle"
            title={t('settings.version')}
            value="1.0.0"
            showArrow={false}
          />
          <SettingItem
            icon="shield-checkmark"
            title={t('settings.privacy')}
            onPress={() => {}}
          />
          <SettingItem
            icon="document-text"
            title={t('settings.terms')}
            onPress={() => {}}
          />
        </View>

        <View style={styles.appInfo}>
          <Text style={styles.appName}>{t('common.appName')}</Text>
          <Text style={styles.slogan}>{t('common.slogan')}</Text>
        </View>
      </ScrollView>
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
  section: {
    marginTop: SIZES.lg,
    paddingHorizontal: SIZES.md,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: SIZES.md,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.md,
    marginBottom: SIZES.sm,
    ...SHADOWS.small,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.md,
  },
  settingTitle: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginRight: SIZES.sm,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.lg,
    marginBottom: SIZES.sm,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  languageButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  languageText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  languageTextActive: {
    color: COLORS.white,
  },
  appInfo: {
    alignItems: 'center',
    padding: SIZES.xxxl,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.sm,
  },
  slogan: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default SettingsScreen;
