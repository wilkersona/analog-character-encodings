<!-- src/components/CharacterGrid.vue -->
<script setup>
defineProps({
  characters: {
    type: Array,
    required: true,
  },
  limit: {
    type: Number,
    default: 0,
  },
  showDownload: {
    type: Boolean,
    default: true,
  },
  showMeta: {
    type: Boolean,
    default: true,
  },
});

const getSvgUrl = (svgFile) => `${process.env.BASE_URL}svg/${svgFile}`;
</script>

<template>
  <div class="character-grid">
    <div
      v-for="char in limit ? characters.slice(0, limit) : characters"
      :key="char.symbol + char.type"
      class="character-card"
    >
      <div v-if="showMeta" class="character-header">
        <span class="symbol">{{ char.symbol }}</span>
        <span v-if="char.value" class="value">{{ char.value }}</span>
        <span class="type">{{ char.type }}</span>
      </div>

      <div class="character-svg" :aria-label="`${char.symbol} visual encoding`">
        <img
          v-if="char.svgFile"
          :src="getSvgUrl(char.svgFile)"
          :alt="`${char.symbol} encoding`"
        />
        <span v-else class="character-text">{{ char.value || char.symbol }}</span>
      </div>

      <a
        v-if="showDownload && char.svgFile"
        class="download-link"
        :href="getSvgUrl(char.svgFile)"
        :download="`${char.symbol}-${char.type}.svg`"
      >
        Download SVG
      </a>
    </div>
  </div>
</template>
