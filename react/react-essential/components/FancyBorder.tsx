import React, { CSSProperties } from "react"

type Props = {
  color: CSSProperties["color"]
}

export const FancyBorder: React.FC<Props> = ({ color, children }) => {
  return <div className={`FancyBorder FancyBorder-${color}`}>{children}</div>
}
