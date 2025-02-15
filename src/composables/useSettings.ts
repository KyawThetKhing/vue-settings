import { ref, watch } from 'vue';

interface SettingsMap {
  general: GeneralSettings;
  privacy: PrivacySettings;
  notifications: NotificationsSettings;
}

type SettingsKey = keyof SettingsMap;
interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

type Visibility = 'public' | 'private' | 'only me';

interface PrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key);
  return stored !== null ? JSON.parse(stored) : defaults;
};

/**
 * NOTE: this is the curried function
 * return value is another function that takes
 * the value and save to local storage
 */
const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

const general = ref<GeneralSettings>(
  init('general', {
    username: '',
    email: '',
    about: '',
    gender: 'male',
    country: 'USA'
  })
);

watch(general, watcher('general'), {
  deep: true
});

const notifications = ref<NotificationsSettings>(
  init('notifications', { email: false, sms: false })
);
watch(notifications, watcher('notifications'), { deep: true });

const privacy = ref<PrivacySettings>(
  init('privacy', { visibility: 'public', searchEngineIndexing: true })
);
watch(privacy, watcher('privacy'), { deep: true });

export function useSettings() {
  return {
    general,
    notifications,
    privacy
  };
}
