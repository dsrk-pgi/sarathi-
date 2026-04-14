import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const requestNotificationPermissions = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#1E3A8A',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  return finalStatus === 'granted';
};

export const scheduleDocumentExpiryNotification = async (documentType, expiryDate) => {
  const notificationDate = new Date(expiryDate);
  notificationDate.setDate(notificationDate.getDate() - 15);

  if (notificationDate > new Date()) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Document Expiring Soon! 📄',
        body: `Your ${documentType} will expire in 15 days. Please renew it.`,
        data: { type: 'document', documentType },
      },
      trigger: {
        date: notificationDate,
      },
    });
  }
};

export const scheduleBillReminder = async (billType, dueDate, amount) => {
  const notificationDate = new Date(dueDate);
  notificationDate.setDate(notificationDate.getDate() - 3);

  if (notificationDate > new Date()) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Bill Payment Reminder 💡',
        body: `${billType} bill of ₹${amount} is due in 3 days.`,
        data: { type: 'bill', billType },
      },
      trigger: {
        date: notificationDate,
      },
    });
  }
};

export const scheduleMedicineReminder = async (medicineName, time) => {
  const timeMap = {
    morning: { hour: 8, minute: 0 },
    afternoon: { hour: 14, minute: 0 },
    evening: { hour: 18, minute: 0 },
    night: { hour: 21, minute: 0 },
  };

  const { hour, minute } = timeMap[time] || timeMap.morning;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Medicine Reminder 💊',
      body: `Time to take ${medicineName}`,
      data: { type: 'medicine', medicineName },
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    },
  });
};

export const cancelAllNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
