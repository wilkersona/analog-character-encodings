<!-- src/components/EncodingList.vue -->
<script setup>
import EncodingCard from './EncodingCard.vue';

defineProps({
  encodings: {
    type: Array,
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
</script>

<template>
  <section class="encoding-list">
    <EncodingCard
      v-for="encoding in encodings"
      :key="encoding.id"
      :encoding="encoding"
      :compact="compact"
      :preview="preview"
      :index-preview="indexPreview"
    />
  </section>
</template>
