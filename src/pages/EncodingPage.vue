<!-- src/pages/EncodingPage.vue -->
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getEncodingById } from '../data/encodings';
import CharacterGrid from '../components/CharacterGrid.vue';

const route = useRoute();
const encoding = computed(() => getEncodingById(route.params.id));
</script>

<template>
  <article v-if="encoding" class="page-section encoding-page">
    <p class="eyebrow"><router-link to="/">All encodings</router-link> / Entry</p>
    <h1>{{ encoding.name }}</h1>

    <p class="page-intro">{{ encoding.description }}</p>

    <CharacterGrid :characters="encoding.characters" />
  </article>
  <section v-else class="page-section">
    <h1>Encoding not found</h1>
    <p class="page-intro">That entry does not exist in this collection.</p>
    <router-link class="text-link" to="/">Return to all encodings</router-link>
  </section>
</template>
