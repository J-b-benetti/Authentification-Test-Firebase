<script setup>
import { ref } from 'vue';
//import firebase from "firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';// import router
let email = ref("");
let password = ref("");
let errMsg = ref(); // ERROR MESSAGE
const router = useRouter(); // get a reference to our vue router
const auth = getAuth();

function login() { // we also renamed this method
    signInWithEmailAndPassword(auth, email.value, password.value) // THIS LINE CHANGED
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Connexion avec succès');
            console.log(userCredential);
            router.push('/espace-membre');// redirect to the member space
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'E-mail invalide'
                    break;
                case 'auth/user-not-found':
                    errMsg.value = 'Aucun compte trouvé avec cet E-mail'
                    break;
                case 'auth/wrong-password':
                    errMsg.value = 'Mot de passe incorrect'
                    break;
                default:
                    errMsg.value = 'E-mail ou mot de passe incorrect'
                    break;
            }
        });
}
</script>

<template>
    <form @submit.prevent="login">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <p class="title">Veuillez vous connecter</p>
            <input type="email" id="form2Example1" class="form-control" placeholder="Entrer votre E-mail" v-model="email" />
            <p v-if="errMsg">{{ errMsg }}</p>
            <label class="form-label" for="form2Example1">Adresse mail</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" placeholder="Entrer votre mot de passe"
                v-model="password" />
            <label class="form-label" for="form2Example2">Mot de passe</label>
        </div>
        <p v-if="errMsg">{{ errMsg }}</p>

        <!-- Submit button -->
        <button type="submit" id="button-auth" class="btn btn-primary btn-block mb-4">Connexion</button>
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