import Link from "next/link"
import { useState } from "react"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import objectSupport from "dayjs/plugin/objectSupport"
dayjs.extend(timezone)
dayjs.extend(objectSupport)

import Layout from "../components/Layout"
import Clock from "../components/Clock"

const FCPage = () => {
  const [datetime, setDatetime] = useState(
    dayjs(new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }))
  )

  const onDateChangeHandler = (e) => {
    const [year, month, day] = e.target.value.split("-")
    const newDate = datetime.set({
      year,
      month,
      day,
    })

    newDate.isValid() && setDatetime(newDate)
  }

  const onTimeChangeHandler = (e) => {
    const [hour, minute, second] = e.target.value.split(":")
    const newDate = datetime.set({
      hour,
      minute,
      second,
    })

    newDate.isValid() && setDatetime(newDate)
  }

  return (
    <Layout title="Functional Component Example page">
      <Clock targetDate={datetime} />
      <input
        type="date"
        onChange={onDateChangeHandler}
        defaultValue={datetime.format("YYYY-MM-DD")}
      />

      <input
        type="time"
        onChange={onTimeChangeHandler}
        step="1"
        defaultValue={datetime.format("hh:mm:ss")}
      />

      <p>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default FCPage
