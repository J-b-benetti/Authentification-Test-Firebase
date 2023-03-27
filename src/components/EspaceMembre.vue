<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter();

const auth = getAuth();
function logOut() {

    signOut(auth)
        .then(() => {
            // Sign-out successful.
            router.push("/");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
}
</script>

<template>
    <h1>Bienvenue sur l'espace membre</h1>
    <button @click="logOut" class="logOut">Déconnexion</button>
</template>

<style scoped>
.logOut {
    border-radius: 10px;
}
</style>