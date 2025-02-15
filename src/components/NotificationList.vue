<script setup lang="ts">
import useNotifications from '@/composables/useNotifications';

const { notifications, removeNotification } = useNotifications();
</script>

<template>
  <Teleport to="body">
    <ol class="notification-list">
      <li v-for="noti in notifications" :key="noti.id" class="notification-item">
        <div class="text-sm font-semibold">
          {{ noti.message }}
        </div>
        <button @click="removeNotification(noti.id)" class="notification-ack-button">OK</button>
      </li>
    </ol>
  </Teleport>
</template>
