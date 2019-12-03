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
            title="Privacy Policy"
            description="Privacy Policy of Rhymry, we do NOT track anything."
        />
        <h1>
            Privacy Policy
            <p style={pStyle}>
            <small style={smallStyle}>
            (we don't track anything)
            </small>
            </p>
        </h1>

        <p style={pStyle}>Your privacy is important to us. It is <a target="_blank" rel="noopener noreferrer" href="https://buraksumer.com">burki</a>'s policy to respect your privacy regarding any information we may collect from you across our website, <a target="_blank" rel="noopener noreferrer" href="https://Rhymry.com">Rhymry.com</a>, and other sites we own and operate.</p>
        <p style={pStyle}>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <p style={pStyle}>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
        <p style={pStyle}>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <p style={pStyle}>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p style={pStyle}>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <p style={pStyle}>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        <h4>
            TL;DR
        </h4>
        <p style={pStyle}>Under no circumstances we do not track you as we are too strict about our own data. We only use data to keep a traffic analytic of our website. </p>

    </Layout>
)
}