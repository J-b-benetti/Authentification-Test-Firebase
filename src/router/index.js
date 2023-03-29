import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: () => import('../components/Signin.vue')
    },
    {
      path: '/espace-membre',
      name: 'espace-membre',
      component: () => import('../components/EspaceMembre.vue'),
      meta: {
        requieresAuth: true
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(),
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requieresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Vous n'avez pas accès à cette page");
      next("/");
    }
  } else {
    next();
  }
})

export default router;
