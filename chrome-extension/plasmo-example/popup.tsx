import { useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h1>Popup</h1>
      <button
        onClick={async () => {
          console.log("button clicked")
          const res = await sendToBackground({
            name: "ping",
            body: {
              name: "John"
            }
          })
          console.log(res)
          setData(res.message)
        }}>
        {data ? "Data is set" : "Set data"}
      </button>

      <div>{data ? data : "No data"}</div>
    </div>
  )
}

export default IndexPopup
