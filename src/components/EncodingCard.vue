<!-- src/components/EncodingCard.vue -->
<script setup>
import { ref } from 'vue';
import CharacterGrid from './CharacterGrid.vue';

defineProps({
  encoding: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  indexPreview: {
    type: Boolean,
    default: false,
  },
});

const showDescription = ref(false);
</script>

<template>
  <article
    class="encoding-card"
    :class="{
      'encoding-card-compact': compact,
      'encoding-card-preview': preview,
      'encoding-card-index': indexPreview,
    }"
  >
    <header class="encoding-header">
      <h2><router-link :to="`/encoding/${encoding.id}`">{{ encoding.name }}</router-link></h2>
      <CharacterGrid
        v-if="indexPreview"
        :characters="encoding.characters"
        :limit="5"
        :show-download="false"
        :show-meta="false"
      />
      <button
        v-if="!compact && !preview"
        :aria-expanded="showDescription"
        :aria-controls="`description-${encoding.id}`"
        @click="showDescription = !showDescription"
      >
        {{ showDescription ? 'Hide description' : 'Show description' }}
      </button>
    </header>

    <transition v-if="!compact && !preview" name="collapse">
      <p
        v-if="showDescription"
        :id="`description-${encoding.id}`"
        class="encoding-description"
      >
        {{ encoding.description }}
      </p>
    </transition>

    <CharacterGrid
      v-if="!compact || preview"
      :characters="encoding.characters"
      :limit="preview ? 5 : 0"
      :show-download="!preview"
    />
  </article>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.2s ease, opacity 0.2s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}
.collapse-enter-to,
.collapse-leave-from {
  max-height: 200px; /* adjust as needed */
  opacity: 1;
}
</style>
