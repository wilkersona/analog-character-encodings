<!-- src/App.vue -->
<script setup>
import { ref } from 'vue';
import { categories, getEncodingsByCategory } from './data/encodings';

const openCategory = ref(null);

const toggleCategory = categoryId => {
  openCategory.value = openCategory.value === categoryId ? null : categoryId;
};

const closeMenu = () => {
  openCategory.value = null;
};
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="site-header-inner">
        <router-link class="site-title" to="/" @click="closeMenu">Analog Character Encodings</router-link>
        <nav class="site-nav" aria-label="Main navigation">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <div
            v-for="category in categories"
            :key="category.id"
            class="nav-dropdown"
            :class="{ open: openCategory === category.id }"
          >
            <button
              class="nav-dropdown-toggle"
              :aria-expanded="openCategory === category.id"
              :aria-controls="`menu-${category.id}`"
              @click="toggleCategory(category.id)"
            >
              {{ category.label }}
            </button>
            <div :id="`menu-${category.id}`" class="nav-dropdown-menu">
              <router-link
                v-for="encoding in getEncodingsByCategory(category.id)"
                :key="encoding.id"
                :to="`/encoding/${encoding.id}`"
                @click="closeMenu"
              >
                {{ encoding.name }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="app">
      <router-view />
    </main>
  </div>
</template>
