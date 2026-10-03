// Gestionnaire des notifications actives pour Kaay Jang

export interface NotificationStatus {
  isSupported: boolean;
  permission: NotificationPermission;
  isEnabled: boolean;
}

const STORAGE_KEY = 'kaay_jang_notifications_enabled';

export function getNotificationStatus(): NotificationStatus {
  const isSupported = typeof window !== 'undefined' && 'Notification' in window;
  if (!isSupported) {
    return {
      isSupported: false,
      permission: 'denied',
      isEnabled: false,
    };
  }

  const savedEnabled = localStorage.getItem(STORAGE_KEY) === 'true';
  return {
    isSupported: true,
    permission: Notification.permission,
    isEnabled: savedEnabled && Notification.permission === 'granted',
  };
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      localStorage.setItem(STORAGE_KEY, 'true');
      sendStudyNotification(
        'Kaay Jang 📚 Notifications Actives',
        'Félicitations ! Tu recevras tes rappels de révision quotidiens pour réussir tes examens (BFEM & Baccalauréat).'
      );
      return true;
    } else {
      localStorage.setItem(STORAGE_KEY, 'false');
      return false;
    }
  } catch (error) {
    console.error('Erreur demande permission notification:', error);
    return false;
  }
}

export function toggleNotifications(enable: boolean): boolean {
  if (typeof window === 'undefined') return false;

  if (enable) {
    localStorage.setItem(STORAGE_KEY, 'true');
    return true;
  } else {
    localStorage.setItem(STORAGE_KEY, 'false');
    return false;
  }
}

export function sendStudyNotification(title: string, body: string) {
  if (typeof window === 'undefined' || !('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'kaay-jang-study-reminder',
      });
    } catch (e) {
      console.error('Impossible d’émettre la notification:', e);
    }
  }
}

export const STUDY_MOTIVATIONAL_REMINDERS = [
  '🎯 Objectif Réussite : Prends 20 minutes aujourd’hui pour relire une leçon clé !',
  '💡 Le secret de la mention au Bac & BFEM : la régularité quotidienne.',
  '📐 Un théorème de Mathématiques ou une notion de PC révisé chaque jour fait toute la différence.',
  '🌍 Géographie et Histoire : Révise les schémas et concepts pour cartonner aux examens.',
  '🧬 SVT : Un schéma bien maîtrisé vaut 10 pages de cours !',
];

export function sendRandomMotivationalNotification() {
  const reminder =
    STUDY_MOTIVATIONAL_REMINDERS[
      Math.floor(Math.random() * STUDY_MOTIVATIONAL_REMINDERS.length)
    ];
  sendStudyNotification('Kaay Jang 🎓 Motivation du jour', reminder);
}
