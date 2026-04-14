import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    console.log('SplashScreen mounted');
    const timer = setTimeout(() => {
      console.log('SplashScreen finishing...');
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LinearGradient
      colors={[COLORS.primary, '#2563EB']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Ionicons name="navigate-circle" size={100} color={COLORS.secondary} />
        </View>
        <Text style={styles.appName}>सारथी</Text>
        <Text style={styles.appNameEn}>Sarathi</Text>
        <Text style={styles.slogan}>हाथ में फ़ोन, हर काम डन!</Text>
        <Text style={styles.sloganEn}>Phone in hand, every task done!</Text>
      </View>
      <Text style={styles.footer}>Made with ❤️ for India</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: SIZES.xl,
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SIZES.sm,
  },
  appNameEn: {
    fontSize: 24,
    color: COLORS.white,
    opacity: 0.8,
    marginBottom: SIZES.xl,
  },
  slogan: {
    fontSize: 20,
    color: COLORS.secondary,
    fontWeight: '600',
    marginBottom: SIZES.sm,
  },
  sloganEn: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.7,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
  },
});

export default SplashScreen;
