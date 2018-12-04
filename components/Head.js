import Head from "next/head";
import Navbar from './Navbar';

export default () => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Michael Schmidgall</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
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
