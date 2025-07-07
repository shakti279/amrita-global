
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends React.Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload fonts or images here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// This file is used to customize the HTML document structure in Next.js.
// It allows you to add custom elements to the <head> or modify the <body> content. 