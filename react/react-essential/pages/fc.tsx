import Link from "next/link"
import Layout from "../components/Layout"
import Clock from "../components/Clock"

import { useState } from "react"

const FCPage = () => {
  const [date, setDate] = useState(new Date())
  const onDateChangeHandler = (e) => {
    const newDate = new Date(e.target.value)
    setDate(newDate)
  }
  return (
    <Layout title="Functional Component Example page">
      <Clock targetDate={date} />
      <input type="date" onChange={onDateChangeHandler} />
      <p>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default FCPage
