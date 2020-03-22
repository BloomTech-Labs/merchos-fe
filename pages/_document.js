import Document, { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import Layout from "../components/Layout";

class MyDocument extends Document {
  render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito&Roboto&display=swap"
            rel="stylesheet"
          />
          {/* Output the styles in the head  */}
          {styleTags}
        </Head>
        <body>
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = ({ renderPage }) => {
  resetServerContext();
  // Create an instance of ServerStyleSheet
  const sheet = new ServerStyleSheet();

  // Retrieve styles from components in the page
  const page = renderPage(App => props =>
    sheet.collectStyles(<App {...props} />)
  );

  // Extract the styles as <style> tags
  const styleTags = sheet.getStyleElement();

  // Pass styleTags as a prop
  return { ...page, styleTags };
};

export default MyDocument;
