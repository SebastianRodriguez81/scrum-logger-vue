<template>
  <div class="register">
    <h4 class="title">PLEASE REGISTER</h4>
    <form @submit.prevent="Register" class="form">
      <label class="form-label" for="#email">Email:</label>
      <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
      <input class="form-submit" type="submit" value="Register">
      <p class="login-link">Already have an account? <router-link to="/login"><span><b>Login</b></span></router-link></p>

    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'

export default {
  setup() {
    const email = ref("")
    const password = ref("")

    
    const Register = () => {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(user => {
            alert(user)
          })
          .catch(err => {
            alert(err.message)
          })
       
    }

    return {
      Register,
      email,
      password
    }   
  }
}
</script>

<style scoped>
.register {
  padding: 2rem;
  background-color: #3B82F6;
  height: 100vh;
}
.title {
  text-align: center;
  color: white;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;  
}
.form-submit {
  background: #ED61A6;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;  
}
.login-link {
  margin-top: 20px;
  margin-bottom: 0%;
  color: #ED61A6;
}
span :hover {
  font-size: larger;  
}
</style>