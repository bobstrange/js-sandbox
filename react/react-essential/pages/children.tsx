import Layout from "../components/Layout"
import { SpritPane } from "../components/SpritPane"
import { WelcomeDialog } from "../components/WelcomeDialog"

const ChildrenPage = () => {
  return (
    <Layout title="Use children props">
      <WelcomeDialog />
      <SpritPane left={<h2>This is left</h2>} right={<h2>THis is right</h2>} />
    </Layout>
  )
}

export default ChildrenPage
