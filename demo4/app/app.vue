<script setup lang="ts">
</script>

<template>
  <UContainer>
    <Test/>
    <div class="flex justify-start w-full gap-4 mt-4">
      <UButton
        variant="outline"
        class="rounded"
        label="Cancel"
        @click="open = false"
      />
      <UButton
        variant="outline"
        class="rounded"
        label="Middle"
        @click="open = false"
      />
      <UButton
        type="submit"
        class="rounded"
        label="Confirm"
        color="primary"
        @click="open = false"
      />
    </div>
  </UContainer>
</template>
