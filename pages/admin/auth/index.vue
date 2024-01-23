<template>
  <div class="admin-auth">
    <section class="auth-container">
      <form @submit.prevent="onSubmit">
        <h1>
          <span>{{ isLogin ? "Log-in" : "Sign-in" }}</span>
        </h1>
        Email : <input type="email" v-model="email" /> <br />
        Password : <input type="password" v-model="password" /><br />
        <button type="submit">{{ isLogin ? "Log-in" : "Sign-in" }}</button
        ><br />
        <button type="button" @click="isLogin = !isLogin">
          Switch To {{ isLogin ? "Sign-in" : "Log-in" }}
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          console.log("redirect to admin");
          this.$router.push("/admin");
        });
    },
  },
  head: {
    title: "Authentication",
  },
  layout: "admin",
};
</script>
<style scoped>
form {
  line-height: 2.5em;
  text-align: center;
  padding: 30px;
  margin: 10%;
  border: solid 2px black;
}
</style>
