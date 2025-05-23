import type { Row } from '@tanstack/vue-table'
import { UButton } from '#components'

// TS Lint Error, but it works
import { UDropdownMenu } from '#components'

//  WARN  [Vue warn]: resolveComponent can only be used in render() or setup().
// const UDropdownMenu = resolveComponent('UDropdownMenu')

export const actionColumn = (row: Row<any>, getRowItems: (row: Row<any>) => any[]) => {
  return h(
    'div',
    { class: 'text-right' },
    h(
      UDropdownMenu,
      {
        content: {
          align: 'end'
        },
        items: getRowItems(row)
      },
      () => h(UButton, {
        icon: 'i-lucide-ellipsis-vertical',
        color: 'neutral',
        variant: 'ghost',
        class: 'ml-auto'
      })
    )
  )
}
