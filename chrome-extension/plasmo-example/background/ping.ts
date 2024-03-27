import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("ping request received")

  const name = await Promise.resolve(req.body.name)

  console.log(`name: ${name}`)

  res.send({
    message: "pong"
  })
}
