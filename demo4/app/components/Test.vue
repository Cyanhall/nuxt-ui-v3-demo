<script setup lang="ts">
const open = defineModel('open', { default: false })
</script>

<template>
  <UButtonGroup>
    <UButton
      variant="outline"
      color="neutral"
      trailing-icon="i-lucide-pipette"
      @click="open = true"
    >
     Button
    </UButton>
    <UModal
      :close="true"
      v-model:open="open"
      title="Test"
    >
      <template #body>
        Body
      </template>
      <template #footer>
        <div class="flex justify-end w-full gap-4">
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
  </UButtonGroup>
</template>
