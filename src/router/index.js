// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import EncodingPage from '../pages/EncodingPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/encoding/:id', name: 'encoding', component: EncodingPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
