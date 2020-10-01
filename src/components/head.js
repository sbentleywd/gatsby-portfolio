import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({title}) => {
    // gets site title from graphql api
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    // renders Helmet with page title combined with site title
    return (
        <Helmet title={`${title} |  ${data.site.siteMetadata.title}`}/>

    )
}

export default Head