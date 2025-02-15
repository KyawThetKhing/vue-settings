<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import useNotifications from '@/composables/useNotifications';

const { privacy } = useSettings();
const { addNotification } = useNotifications();

const save = () => {
  addNotification('Privacy Settings were saved successfully!');
};
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Privacy</h2>

    <form class="space-y-4 mx-auto w-full max-w-2xl" @submit.prevent="save">
      <div class="flex items-center space-x-2">
        <input type="checkbox" v-model="privacy.searchEngineIndexing" />
        <label>Search Engine Indexing</label>
      </div>

      <div>
        <label class="mb-1">Visibility</label>
        <select v-model="privacy.visibility">
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>
