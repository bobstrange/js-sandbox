import { useRef, useEffect } from 'react'

export const useRenderCount = () => {
  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current += 1
  })
  return renderCount
}
