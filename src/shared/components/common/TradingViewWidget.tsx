import React, { useEffect, useRef } from 'react'

interface TradingViewWidgetProps {
  symbol?: string
  interval?: string
  width?: number | string
  height?: number | string
  autosize?: boolean
}

const TradingViewWidget = ({
  symbol = 'NASDAQ:AAPL',
  interval = 'D',
  width = '100%',
  height = 450,
  autosize = true
}: TradingViewWidgetProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const tvScriptId = 'tradingview-widget-script'

    const createWidget = () => {
      try {
        // TradingView exposes a global `TradingView` when tv.js loads
        const TV = (window as any).TradingView
        if (!TV || !containerRef.current) return

        // ensure a unique container id
        const id = containerRef.current.id
        containerRef.current.innerHTML = ''

        // create widget
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        new TV.widget({
          container_id: id,
          symbol,
          interval,
          timezone: 'exchange',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          autosize,
          width: autosize ? '100%' : width,
          height: autosize ? '100%' : height
        })
      } catch (e) {
        // swallow errors to avoid breaking parent layout
        // but log for developer visibility
        // eslint-disable-next-line no-console
        console.error('TradingView widget error', e)
      }
    }

    const appendScript = () => {
      if (document.getElementById(tvScriptId)) {
        // script already present, just create the widget
        createWidget()
        return
      }

      const script = document.createElement('script')
      script.id = tvScriptId
      script.src = 'https://s3.tradingview.com/tv.js'
      script.async = true
      script.onload = createWidget
      document.head.appendChild(script)
    }

    // ensure container has an id for the widget
    if (containerRef.current && !containerRef.current.id) {
      containerRef.current.id = `tv-widget-${Math.random().toString(36).substr(2, 9)}`
    }

    appendScript()

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = ''
    }
    // recreate when symbol/interval change
  }, [symbol, interval, width, height, autosize])

  const style: React.CSSProperties = {
    width: '100%',
    height: typeof height === 'number' ? `${height}px` : (height as string),
    minHeight: 300
  }

  return <div ref={containerRef} style={style} />
}

export default TradingViewWidget
