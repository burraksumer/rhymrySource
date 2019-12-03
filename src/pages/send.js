import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"


export default ({ data }) => {
    console.log(data)

    const pStyle = {
        fontWeight: 300,
        fontSize: 20,
        marginTop: 0,
        marginBottom: '0.5em',
        };

    const smallStyle ={
        marginTop: 0,
        fontWeight: 300,
        fontSize: 20,
    }
    

return(
    <Layout>
        <Seo
            title="Send A Poem"
            description="Send a poem to Rhymry, we may share it."
        />
        <h1>
            Send us a poem
            <p style={pStyle}>
            <small style={smallStyle}>
            (we may share it.)
            </small>
            </p>
        </h1>
        <p style={pStyle}>This is the part of Rhymry that you (mostly readers) take part. If you'd like to share something and want it to be special like we do, just send it to us trough e-mail with your details and start to wait for an answer cause we'll be mailing to each other more and more as you share. </p>
        <hr></hr>
        <p style={pStyle}><a className="btn" href="mailto: poem@rhymry.com">Send us a poem, prose or anything you want!</a></p>

    </Layout>
)
}