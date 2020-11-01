import Link from "next/link"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <ul style={{ listStyle: "none" }}>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/fc">
          <a>FC</a>
        </Link>
      </li>
      <li>
        <Link href="/form">
          <a>Form</a>
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
