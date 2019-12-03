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

const h5Style = {
    marginTop: '2em',
    marginBottom: 4,
}

const smallStyle ={
    marginTop: 0,
    fontWeight: 300,
    fontSize: 20,
}

return(
    <Layout>
        <Seo
            title="Contact"
            description="Contact the writers of this site via e-mail."
        />
        <h1>
            Contact
            <p style={pStyle}>
            <small style={smallStyle}>
            (we make sure to check mails everyday.)
            </small>
            </p>
        </h1>

        <h5 id='burki' style={h5Style}>Burak Sümer</h5>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus lacus eu felis sagittis scelerisque. Sed lacus quam, luctus et augue et, finibus suscipit enim. Curabitur porttitor vehicula rutrum. Donec at tellus risus. Donec egestas sapien nec euismod condimentum.</p>
        <p style={pStyle}><a className="btn" href="mailto: me@buraksumer.com">Send me a mail!</a></p>

        <h5 id='oolcan' style={h5Style}>Ogulcan Cetin</h5>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus lacus eu felis sagittis scelerisque. Sed lacus quam, luctus et augue et, finibus suscipit enim. Curabitur porttitor vehicula rutrum. Donec at tellus risus. Donec egestas sapien nec euismod condimentum.</p>
        <p style={pStyle}><a className="btn" href="mailto: ogulcancetin00@gmail.com">Send me a mail!</a></p>

    </Layout>
)
}