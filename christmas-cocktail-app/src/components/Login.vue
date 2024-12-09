<template>
    <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" id="username" placeholder="Username"/>
        <input v-model="password" type="password" id="password" placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      username: '',
      password: '', // Define the password property
      errorMessage: '', // Define the errorMessage property
    };
  },
  setup() {
    const router = useRouter(); // Access Vue Router
    return { router };
  },
  methods: {
    handleLogin() {
      const users: { [key: string]: { password: string; redirectTo: string } } = {
        admin: { password: '1234', redirectTo: '/admin' },
        // user1: { password: 'password1', redirectTo: '/user1' },
        // user2: { password: 'password2', redirectTo: '/user2' },
        // guest: { password: 'guest123', redirectTo: '/guest' },
      };

      const user = users[this.username];

      if (user && user.password === this.password) {
        alert('Login successful!');
        this.router.push(user.redirectTo); // Redirect to the target page
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
}

input {
  background: #999999;
  color: #fff;
  border-radius: 16px;
  padding: 20px 15px;
  width: auto;
  margin-bottom: 12px;
  border: none;
  &::placeholder {
    color: #fff;
  }
}

button {
  margin-top: 25px;
  border: none;
  background: #c62118;
  color: #fff;
  font-size: 22px;
  border-radius: 16px;
  padding: 15px;
}
</style>
