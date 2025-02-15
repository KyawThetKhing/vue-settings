import { ref } from 'vue';

interface Notification {
  id: number;
  message: string;
}

const notifications = ref<Notification[]>([]);

const addNotification = (message: string, timeout = 5000) => {
  const id = Date.now();
  notifications.value.push({ id, message });

  setTimeout(() => removeNotification(id), timeout);
};

const removeNotification = (id: number) => {
  notifications.value = notifications.value.filter((notification) => notification.id !== id);
};

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification
  };
}
