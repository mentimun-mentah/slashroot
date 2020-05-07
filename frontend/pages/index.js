import Router from "next/router";

const Home = () => null;

Home.getInitialProps = (ctx) => {
  process.browser
    ? Router.replace("/login")
    : ctx.res.writeHead(302, { Location: "/login" });
  ctx.res.end();
};

export default Home;
