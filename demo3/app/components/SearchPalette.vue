<script setup lang="ts">

const groups = ref([
  {
    id: 'Routes',
    label: 'Routes',
    items: [
      {
        label: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        to: '/admin/dashboard',
        kbds: [
          'G',
          '1'
        ]
      },
      {
        label: 'Table',
        icon: 'i-lucide-file-text',
        to: '/admin/table',
        kbds: [
          'G',
          '2'
        ]
      }
    ]
  }
])

const value = ref({})
const isOpen = ref(false)

const onClosePalette = (value: boolean) => {
  if (!value) {
    isOpen.value = false
  }
}
</script>

<template>
  <UModal v-model:open="isOpen">
    <UInput
      class="w-full"
      size="sm"
      icon="i-lucide-search"
      placeholder="Search..."
      @click="isOpen = true"
    >
      <template #trailing>
        <UKbd value="shift" />
        <UKbd value="G" />
      </template>
    </UInput>
    <template #content>
      <UCommandPalette
        v-model="value"
        close
        :groups="groups"
        class="flex-1"
        @update:open="onClosePalette"
      />
    </template>
  </UModal>
</template>
