import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Ricos Portfolio</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default IndexPage;
