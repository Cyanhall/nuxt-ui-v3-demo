<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { actionColumn } from './utils/columns'

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
    accessorKey: 'actions',
    header: ' ',
    cell: ({ row }: any) => actionColumn(row, getRowItems)
  }
]

const data = ref<Array<any>>([
  {id: 1, name: 'Record 1'},
  {id: 2, name: 'Record 2'},
])


function getRowItems(row: Row<any>) {
  return [
    {
      type: 'label',
      label: 'Actions'
    },
    {
      type: 'separator'
    }
  ]
}
</script>

<template>
  <UApp>
    <UTable
      ref="table"
      :columns="columns"
      :data="data"
      sticky
      size="sm"
      class="max-h-[calc(100vh-140px)]"
    />
  </UApp>
</template>
