'use client'

import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend)

type FocusChartProps = {
  className?: string
}

// Custom plugin to annotate a specific point (Week 8)
const annotationPlugin = (indexToMark: number): Plugin<'line'> => ({
  id: 'focus-annotation',
  afterDatasetsDraw(chart) {
    const { ctx } = chart
    const dataset = chart.getDatasetMeta(1) // second line (indigo)
    const pt = dataset?.data?.[indexToMark] as { x: number; y: number } | undefined
    if (!pt) return

    const x = pt.x
    const y = pt.y

    // point halo
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(99, 102, 241, 0.25)'
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fill()

    // outer circle
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = 'rgb(99, 102, 241)'
    ctx.arc(x, y, 7, 0, Math.PI * 2)
    ctx.stroke()



    ctx.restore()
  },
})

export default function FocusChart({ className }: FocusChartProps) {
  const labels = useMemo(
    () => ['Aug', '', '', '', '', '', '', 'Week 8', '', '', '', '', '', 'Sep', '', '', '', '', 'Oct'],
    []
  )

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Maximum of focus',
          data: [40, 42, 38, 41, 50, 62, 58, 44, 35, 30, 28, 40, 55, 62, 65, 60, 58, 52, 48],
          borderColor: 'rgb(244, 63, 94)', // rose-500
          backgroundColor: 'rgba(244, 63, 94, 0.12)',
          tension: 0.45,
          fill: false,
          pointRadius: 0,
          borderWidth: 3,
        },
        {
          label: 'Min or lack of focus',
          data: [42, 46, 48, 45, 40, 32, 28, 55, 60, 58, 46, 40, 36, 30, 28, 32, 38, 44, 50],
          borderColor: 'rgb(99, 102, 241)', // indigo-500
          backgroundColor: 'rgba(99, 102, 241, 0.12)',
          tension: 0.45,
          fill: false,
          pointRadius: 0,
          borderWidth: 3,
        },
      ],
    }),
    [labels]
  )

  const options: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true, displayColors: false },
      },
      elements: { line: { capBezierPoints: true } },
      scales: {
        x: {
          display: false,
          grid: { display: false, drawBorder: false },
        },
        y: {
          display: false,
          grid: { display: false, drawBorder: false },
          beginAtZero: true,
          suggestedMax: 80,
        },
      },
    }),
    []
  )

  return (
    <div className={className}>
      <Line height={208} data={data} options={options} plugins={[annotationPlugin(7)]} />
    </div>
  )
}


