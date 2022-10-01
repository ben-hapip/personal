import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
        <svg xmlns="http://www.w3.org/2000/svg%22%3E" style={{visibility:'hidden', display:'none'}}>
            <filter id="svgTint">
              <feColorMatrix
                type="matrix"
                values="0.12549019607843137 0.12549019607843137 0.12549019607843137  0 0 0.23529411764705882 0.23529411764705882 0.23529411764705882  0 0 0.1607843137254902 0.1607843137254902 0.1607843137254902  0 0  0 0 0 1 0"
              />
            </filter>
          </svg>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}