import Head from "next/head";
import Navbar from "./Navbar";

export default () => (
  <div>
    <Head>
      <title>Michael Schmidgall</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta charSet="UTF-8" />
      <meta name="author" content="Michael Schmidgall" />
      <meta
        name="keywords"
        content="Michael Schmidgall, React, Next.js, Server Side React, mongodb, express, getInitialProps, Javascript"
      />
      <meta
        name="description"
        content="Server Side React Portfolio for Michael Schmidgall"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/static/nprogress.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
      />
      <link
        rel="stylehseet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"
      />
      <script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossOrigin="anonymous"
      />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" />
    </Head>
    <Navbar />
  </div>
);
