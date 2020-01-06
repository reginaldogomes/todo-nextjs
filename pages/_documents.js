import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styles}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=10"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument