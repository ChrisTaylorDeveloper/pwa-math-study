import * as React from 'react'
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Chris Taylor developer PWA demo.</p>
            <p>Web engineering for business.</p>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage