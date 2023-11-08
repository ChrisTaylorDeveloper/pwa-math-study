import * as React from 'react'
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Chris Taylor developer PWA demo.</p>
            <p>Web engineering for business.</p>
            <p>Below should be a StaticImage:</p>
            <StaticImage
                alt="What can I build with .NET"
                src="https://christaylordeveloper.co.uk/wp-content/uploads/2023/01/uses-of-dotnet.png"
            />
            <StaticImage
                alt="Gatsby control."
                src="../images/example.png"
            />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage