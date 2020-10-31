import React, { ReactNode } from "react"
import Link from "next/link"
import Head from "next/head"

type Props = {
  children?: ReactNode
  title?: string
  footer?: {
    text: string
  }
}

const Layout = ({
  children,
  title = "This is the default title",
  footer = { text: "Default footer" },
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>{footer.text}</span>
    </footer>
  </div>
)

export default Layout
