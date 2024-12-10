<template>
  <div class="default-page-wrapper">
    <h3>Welcome Admin to secret santa christmas cocktails!</h3>
    <p>To begin please click the team who are currently presenting their cocktail. </p>
    <div class="button-container">
      <button @click="navigateTo('/hlj')">Hannah, Louis & Jack</button>
      <button @click="navigateTo('/vote')">test</button>
    </div>
  </div>
</template>

<style lang="scss">
  .default-page-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>

<script lang="ts">
import { useRouter } from 'vue-router';
export default {
  name: 'AdminPage',
  setup() {
    const router = useRouter();

    const navigateTo = (path: string) => {
      router.push(path);
    };

    return {
      navigateTo,
    };
  },
};

</script>
