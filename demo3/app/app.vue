<script setup lang="ts">
</script>

<template>
  <UContainer class="pt-10">
    <UInput
      class="w-full mb-4"
      size="sm"
      icon="i-lucide-search"
      placeholder="Search..."
    >
      <template #trailing>
        <UKbd value="shift" />
        <UKbd value="G" />
      </template>
    </UInput>
    <SearchPalette/>
  </UContainer>
</template>
