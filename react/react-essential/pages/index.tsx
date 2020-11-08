import Link from "next/link"
import Layout from "../components/Layout"

const PageLink: React.FC<{ linkTo: string; text: string }> = ({
  linkTo,
  text,
}) => {
  return (
    <li>
      <Link href={linkTo}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <ul style={{ listStyle: "none" }}>
      <PageLink linkTo="/about" text="About" />
      <PageLink linkTo="/fc" text="FC" />
      <PageLink linkTo="/form" text="Form" />
      <PageLink linkTo="/state" text="State" />
      <PageLink linkTo="/children" text="Children" />
      <PageLink linkTo="/context" text="Context" />
    </ul>
  </Layout>
)

export default IndexPage
