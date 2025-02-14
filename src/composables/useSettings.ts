import { ref } from 'vue';
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

const general = ref<GeneralSettings>({
  username: '',
  email: '',
  about: '',
  gender: 'male',
  country: 'USA'
});

const notifications = ref<NotificationsSettings>({
  email: false,
  sms: false
});

const privacy = ref<PrivacySettings>({
  visibility: 'public',
  searchEngineIndexing: true
});

export function useSettings() {
  return {
    general,
    notifications,
    privacy
  };
}
