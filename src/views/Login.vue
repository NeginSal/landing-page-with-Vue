<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input required v-model="email" />
    <div v-if="EmailError" class="error">{{ EmailError }}</div>
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="PasswordError" class="error">{{ PasswordError }}</div>
    <button>LOGIN</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      EmailError: "",
      PasswordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.EmailError =
        this.email.length > 5
          ? ""
          : "The entered email must be at least 5 characters.";
      this.PasswordError =
        this.password.length > 8
          ? ""
          : "The password entered must have at least 8 digits.";
      let flag = this.NameError || this.EmailError || this.PasswordError;
      if (!flag) {
        let result = await axios.get(
          `https://reqres.in/api/users?email=${this.email}&password=${this.password}`
        );
        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "FirstPage" });
        }
        console.log(result.data);
        console.log(this.email, this.password);
        console.log(result);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "FirstPage" });
    }
  },
};
</script>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #bbb;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>