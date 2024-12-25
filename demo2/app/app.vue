<script setup lang="ts">
const columns = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'action',
    header: '',
  }
]

const data = ref<Array<any>>([
  {id: 1, name: 'Record 1', action: 'action1'},
  {id: 2, name: 'Record 2', action: 'action2'},
])

</script>

<template>
  <UTable
    ref="table"
    :columns="columns"
    :data="data"
    sticky
    size="sm"
  />
</template>
