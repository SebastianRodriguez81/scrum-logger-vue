<template>
  <div class="login">
    <h4 class="title">PLEASE LOGIN</h4>
    <form @submit.prevent="Login" class="form">
      <label class="form-label" for="#email">Email:</label>
      <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
      <input class="form-submit" type="submit" value="Login">
      <p class="register-link">Not a user yet? Register <router-link to="/register"><span><b>here</b></span></router-link></p>
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

    
    const Login = () => {
      firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(data => console.log(data))
          .catch(err => alert(err.message))
       
    }

    return {
        Login,
        email,
        password
    }   
  }
}
</script>

<style scoped>
.login {
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
.register-link {
  margin-top: 20px;
  margin-bottom: 0%;
  color: #ED61A6;
}
span :hover {
  font-size: larger;  
}
</style>