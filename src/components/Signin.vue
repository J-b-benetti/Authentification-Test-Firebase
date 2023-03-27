<script setup>
import { reactive, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';// import router
let email = ref("");
let password = ref("");
let errMsg = ref(); // ERROR MESSAGE
const router = useRouter(); // get a reference to our vue router

function signIn() { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(auth, email.value, password.value) // THIS LINE CHANGED
      .then((data) => {
        console.log('Connexion avec succès');
        console.log(auth.currentUser);
        router.push('/espace-membre') // redirect to the member space
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
  }
</script>

<template>
    <form>
        <!-- Email input -->
        <div class="form-outline mb-4">
            <p class="title">Veuillez vous connecter</p>
            <input type="email" id="form2Example1" class="form-control" placeholder="Entrer votre E-mail" v-model="email" />
            <p v-if="errMsg">{{ errMsg }}</p>
            <label class="form-label" for="form2Example1">Adresse mail</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" placeholder="Entrer votre mot de passe" v-model="password" />
            <label class="form-label" for="form2Example2">Mot de passe</label>
        </div>
        <p v-if="errMsg">{{ errMsg }}</p>
        <!-- Submit button -->
        <button @click="singIn" id="button-auth" class="btn btn-primary btn-block mb-4">Connexion</button>

        <!-- Register buttons -->
        <div class="text-center">
            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
            </button>
        </div>
    </form>
</template>

<style scoped>
.form-control {
    margin-top: 3%;
    margin-left: 35%;
    justify-content: center;
    width: 30%;
}

.title {
    padding-top: 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
    text-align: center;
    justify-content: center;
    font-weight: bold;
}

.form-label {
    margin-left: 35%;
    margin-top: 0.3rem;
}

#button-auth {
    width: 30%;
    margin-left: 35%;
}
</style>