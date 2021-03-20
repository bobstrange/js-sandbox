import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = (): { title: string; description: string } => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return data.site.siteMetadata
}
