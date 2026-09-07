<!-- src/pages/HomePage.vue -->
<script setup>
import { categoryCollections, encodings } from '../data/encodings';
import EncodingList from '../components/EncodingList.vue';
</script>

<template>
  <section class="home">
    <p class="eyebrow">Reference collection</p>
    <h1>Analog character encodings</h1>
    <p class="page-intro">A visual dictionary of systems used to communicate letters, numbers, and signals without digital screens. Alphabetic systems show their letter set; numeric notation is included only when the encoding defines it.</p>
    <div class="results-meta">{{ encodings.length }} {{ encodings.length === 1 ? 'encoding' : 'encodings' }}</div>
    <details
      v-for="category in categoryCollections"
      :key="category.id"
      class="home-category"
      open
    >
      <summary>{{ category.label }} <span>({{ category.encodings.length }})</span></summary>
      <EncodingList :encodings="category.encodings" compact index-preview />
    </details>
  </section>
</template>
