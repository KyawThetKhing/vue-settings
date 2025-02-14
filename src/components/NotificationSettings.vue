<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Notification</h2>

    <form class="space-y-4 mx-auto w-full max-w-2xl">
      <div class="flex items-center space-x-2">
        <input type="checkbox" v-model="notifications.email" />
        <label>Email Notification</label>
      </div>

      <div class="flex items-center space-x-2">
        <input type="checkbox" v-model="notifications.sms" />
        <label>SMS Notification</label>
      </div>

      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>
