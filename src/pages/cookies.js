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
            title="Cookies"
            description="Cooekie policy of Rhymery"
        />
        <h1>
        Cookies
            <p style={pStyle}>
            <small style={smallStyle}>
            (we eat 'em.)
            </small>
            </p>
        </h1>

        <h4>What are cookies?</h4>

        <p style={pStyle}>Cookies are a small text files that are stored in your web browser that allows <span class="website_name">Rhymery</span> or a third party to recognize you. Cookies can be used to collect, store and share bits of information about your activities across websites, including on <span class="website_name">Rhymery</span> website.</p>

        <p style={pStyle}>Cookies might be used for the following purposes:</p>

        <ul>
        <li>To enable certain functions</li>
        <li>To provide analytics</li>
        <li>To store your preferences</li>
        <li>To enable ad delivery and behavioral advertising</li>
        </ul>

        <p style={pStyle}><span class="website_name">Rhymery</span> uses both session cookies and persistent cookies.</p>

        <p style={pStyle}>A session cookie is used to identify a particular visit to our Website. These cookies expire after a short time, or when you close your web browser after using our Website. We use these cookies to identify you during a single browsing session, such as when you log into our Website.</p>

        <p style={pStyle}>A persistent cookie will remain on your devices for a set period of time specified in the cookie. We use these cookies where we need to identify you over a longer period of time. For example, we would use a persistent cookie if you asked that we keep you signed in.</p>

        <h4>How do third parties use cookies on the <span class="website_name">Rhymery</span> Website?</h4>

        <p style={pStyle}>Third party companies like analytics companies and ad networks generally use cookies to collect user information on an anonymous basis. They may use that information to build a profile of your activities on the <span class="website_name">Rhymery</span> Website and other websites that you've visited.</p>

        <h4>What are your cookies options?</h4>

        <p style={pStyle}>If you don't like the idea of cookies or certain types of cookies, you can change your browser's settings to delete cookies that have already been set and to not accept new cookies. To learn more about how to do this, visit the help pages of your browser.</p>

        <p style={pStyle}>Please note, however, that if you delete cookies or do not accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>

        <h4>Where can I find more information about cookies?</h4>

        <p style={pStyle}>You can learn more about cookies by visiting the following third party websites:</p>

        <ul>
        <li><a className="btn" target="_blank" rel="noopener noreferrer" href="http://browsers.about.com/od/faq/tp/delete-cookies.htm">About.com Browser Guide</a></li>
        <li><a className="btn" target="_blank" rel="noopener noreferrer" href="http://allaboutcookies.org/">All About Cookies.org</a></li>
        <li><a className="btn" target="_blank" rel="noopener noreferrer" href="http://www.networkadvertising.org/">Network Advertising Initiative</a></li>
        </ul>

        <h4>
            TL;DR
        </h4>
        <p style={pStyle}>We only use cookies for analytics and (in the future) for the night mode. Other than that, the only cookies we know is the ones we eat. </p>

    </Layout>
)
}