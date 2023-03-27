<script setup>
import { auth } from "firebase/auth";
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';
const router = useRouter();
const authListener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) { // not logged in
        alert("Vous devez être connecté avant de pouvoir accéder à cette page");
        router.push('/');
    }
});
onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
</script>


<template>
    <h1>Bienvenue sur l'espace membre</h1>
</template>

<style setup></style>