import { useMemo } from 'react'
import { sum } from '../../utils/math'
import { Row } from './Row'
import { themes } from './themes'
import { NoResults } from './NoResults'

export type Value = {
  value: number
  id: string
  label: string
  createdAt: Date
}

export type ChartData = {
  id: string
  label: string
  details?: string
  values: Value[]
}

export type ChartProps = {
  data: ChartData[]
}

export const Chart = ({ data }: ChartProps) => {
  const maxValue = useMemo((): number => Math.max(...data.map(row => sum(...row.values.map(d => d.value)))), [data])
  return (
      <div className={'flex flex-col gap-2'}>
        {data.length > 0 ? data.map((row, index) => (
          <Row key={row.id} {...row} maxValue={maxValue} className={'animate-appear timeline-view animation-range-entry-cover'} themeClass={themes[index % themes.length]} />
        )) : <NoResults />}
      </div>
  );
}
