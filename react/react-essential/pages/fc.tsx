import Link from "next/link"
import { useState } from "react"
import dayjs from "dayjs"

import Layout from "../components/Layout"
import Clock from "../components/Clock"

const FCPage = () => {
  const [datetime, setDatetime] = useState(dayjs())

  const onDateChangeHandler = (e) => {
    console.log(e.target.value)
    const newDate = dayjs(e.target.value)

    setDatetime(newDate)
  }
  return (
    <Layout title="Functional Component Example page">
      <Clock targetDate={datetime} />
      <input
        type="date"
        onChange={onDateChangeHandler}
        defaultValue={datetime.format("YYYY-MM-DD")}
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
