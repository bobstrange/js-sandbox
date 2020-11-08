import React from "react"

type Props = {
  left: React.ReactNode
  right: React.ReactNode
}

export const SpritPane: React.FC<Props> = ({ left, right }) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{left}</div>
      <div className="SplitPane-right">{right}</div>
    </div>
  )
}
