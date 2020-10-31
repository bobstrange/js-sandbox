import React, { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"

type ClockProps = {
  targetDate: Dayjs
}

const Clock: React.FC<ClockProps> = ({ targetDate }) => {
  const [date, setDate] = useState(targetDate)
  useEffect(() => {
    setDate(targetDate)
  }, [targetDate])
  const time = () => date.format("YYYY/MM/DD HH:mm:ss")
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
