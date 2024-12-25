<script setup lang="ts">
const open = defineModel('open', { default: false })
</script>

<template>
  <UButtonGroup>
    <UModal
      :close="true"
      v-model:open="open"
      title="Test"
    >
      <UButton
        variant="outline"
        color="neutral"
        @click="open = true"
      >
       Modal Button
      </UButton>
      <template #body>
        Body
      </template>
      <template #footer>
        <div class="flex justify-start w-full gap-4">
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
      </template>
    </UModal>
    <UButton
      variant="outline"
      color="neutral"
      @click=""
    >
     Other Button
    </UButton>
  </UButtonGroup>
</template>
