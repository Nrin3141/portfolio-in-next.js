import Head from "next/head";

function Header() {
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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
          line-height: calc(
            1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300))
          );
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Header;
