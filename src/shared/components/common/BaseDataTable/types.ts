export type SortOrder = 'asc' | 'desc'
export type FilterOperator = '=' | '!=' | '>' | '<' | 'blank' | 'notblank'
export type FilterValue = { operator: FilterOperator; value?: string }

export interface BaseTableColumn {
  field: string
  label: string
  renderCell?: (value: any) => React.ReactNode
  sortable?: boolean
  filterable?: boolean
  width?: string | number
}

export interface BaseTableProps<T> {
  data: T[]
  columns: BaseTableColumn[]
  title: string
  symbol: string
  loading?: boolean
  error?: string | null
  defaultSortField?: string
  defaultSortOrder?: SortOrder
  containerHeight?: number | string
  onFilterChange?: (filters: Record<string, FilterValue>) => void
  onSortChange?: (field: string, order: SortOrder) => void
}
