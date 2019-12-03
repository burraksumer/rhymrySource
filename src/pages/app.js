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
            title="Mobile App"
            description="Mobile app of Rhymry."
        />
        <h1>
            Mobile app of Rhymry.
            <p style={pStyle}>
            <small style={smallStyle}>
            (it's lightweight.)
            </small>
            </p>
        </h1>
        <p style={pStyle}>There are many ways to that but we suggest installing the app onyour phone by clicking "Add to home screen" button on your browser. This way you can open the app from your phone and easily access to it. You may also get notifications if we ever do that.(we don't for now.) </p>

        <p style={pStyle}>Images will be here</p>
        <p style={pStyle}>Images will be here</p>
        <p style={pStyle}>Images will be here</p>
        <p style={pStyle}>Images will be here</p>


    </Layout>
)
}