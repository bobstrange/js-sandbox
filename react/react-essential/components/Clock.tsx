import React, { useState, useEffect } from "react"

type ClockProps = {
  targetDate: Date
}

const Clock: React.FC<ClockProps> = ({ targetDate }) => {
  const [date, setDate] = useState(targetDate)
  useEffect(() => {
    console.log("targetDate: " + targetDate)
    setDate(targetDate)
  }, [targetDate])
  const time = () => date.toLocaleTimeString()
  return (
    <>
      <h2>Tick, Tack</h2>
      <h3>
        It is <span style={{ color: "red" }}>{time()}</span>.
      </h3>
    </>
  )
}

export default Clock
