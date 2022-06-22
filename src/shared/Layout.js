import React from "react";
import { Helmet } from "react-helmet";
// import SkipToContent from "../A11y/SkipToContent";

const Layout = ({ page, children }) => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`Money Matters - ${page}`}</title>
                <meta
                    name="title"
                    content="Econnectnp —We provide traveling service that is seamless to access via technology"
                />
                <meta
                    name="description"
                    content="Econnectnp is a company vast in technology. We are creating the next seamless products accessible for everyone"
                ></meta>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                ></meta>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="./apple-touch-icon.png"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;1,400;1,500&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&display=swap" rel="stylesheet"></link>
            </Helmet>
            {/* <SkipToContent content="main"></SkipToContent> */}
            {children}
        </React.Fragment>
    );
};

export default Layout;
