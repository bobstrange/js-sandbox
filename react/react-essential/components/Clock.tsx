import React, { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import objectSupportPlugin from "dayjs/plugin/objectSupport"
import timezonePlugin from "dayjs/plugin/timezone"
dayjs.extend(objectSupportPlugin)
dayjs.extend(timezonePlugin)

type ClockProps = {
  targetDate: Dayjs
}

const Clock: React.FC<ClockProps> = ({ targetDate }) => {
  const [date, setDate] = useState(targetDate)
  const [timerId, setTimerId] = useState<number>()

  const tick = () => {
    setDate((prevDate) => {
      console.log(prevDate)
      return prevDate.add({ second: 1 })
    })
  }

  useEffect(() => {
    const timeout = window.setInterval(tick, 1000)
    setTimerId(timeout)
    return () => {
      if (timerId) {
        window.clearInterval(timerId)
      }
    }
  }, [])

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
