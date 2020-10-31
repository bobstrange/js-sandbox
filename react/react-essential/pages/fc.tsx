import Link from "next/link"
import Layout from "../components/Layout"

const FCPage = () => (
  <Layout title="Functional Component Example page">
    <h1>Functional Component</h1>
    <p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </p>
  </Layout>
)

export default FCPage
