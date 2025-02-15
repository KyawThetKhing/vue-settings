<script setup lang="ts">
import { ref, computed } from 'vue';
import TabLink from '@/components/TabLink.vue';
import GeneralSettings from '@/components/GeneralSettings.vue';
import NotificationSettings from '@/components/NotificationSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import NotificationList from '@/components/NotificationList.vue';
import type { Tab, TabKey } from '@/types';

const tabs: Tab[] = [
  { key: 'General', label: 'General', component: GeneralSettings },
  { key: 'Notification', label: 'Notification', component: NotificationSettings },
  { key: 'Privacy', label: 'Privacy', component: PrivacySettings }
];

const currentTab = ref<TabKey>('General');
const currentComponent = computed(() => {
  const tab = tabs.find((t) => t.key === currentTab.value);
  return tab?.component;
});
</script>

<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key" class="mr-4">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>

    <FadeTransition>
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </FadeTransition>

    <NotificationList />
  </main>
</template>
