<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { general } = useSettings();
</script>
<template>
  <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form class="space-y-4 mx-auto w-full max-w-2xl">
      <div>
        <label class="mb-1">Username</label>
        <input type="text" v-model="general.username" />
      </div>
      <div>
        <label class="mb-1">Email</label>
        <input type="email" v-model="general.email" />
      </div>
      <div>
        <label class="mb-1">About me</label>
        <textarea v-model="general.about"></textarea>
      </div>
      <div>
        <label class="mb-1">Gender</label>
        <label>
          <input type="radio" name="gender" value="male" v-model="general.gender" />
          <span>Male</span>
        </label>
        <label>
          <input type="radio" name="gender" value="female" v-model="general.gender" />
          <span>Female</span>
        </label>
        <label>
          <input type="radio" name="gender" value="other" v-model="general.gender" />
          <span>Other</span>
        </label>
      </div>
      <div>
        <label class="mb-1">Country</label>
        <select v-model="general.country">
          <option value="mm">Myanmar</option>
          <option value="cn">China</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>
