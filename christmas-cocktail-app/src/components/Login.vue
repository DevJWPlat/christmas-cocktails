<template>
    <form @submit.prevent="handleLogin">
      <input v-model="teamName" placeholder="Team name" class="team-input" />
      <button @click="login" class="login-button">Log in</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      teamName: '',
    };
  },
  methods: {
    login() {
      if (this.teamName.trim()) {
        this.$router.push({ name: 'Vote', query: { team: this.teamName } });
      }
    },
  },
};
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
