import React from 'react';
import Head from 'next/head';

import App from '../containers/App';

export default class Index extends React.Component {
  render() {
    return (
      <div id="container">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"/>
          <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
        </Head>

        <App/>

        <style jsx>{`
        `}</style>
        <style jsx global>{`
          html, body {
            height: 100%;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}