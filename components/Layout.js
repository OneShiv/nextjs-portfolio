import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const H1 = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 1.5;
  margin: 10px;
  padding: 2px;
`;

const Header = styled.header`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;
const Nav = styled.nav`
  width: 100%;
  padding: 8px;
`;

const Ul = styled.ul`
  margin: 0;
  display: flex;
  background-color: orange;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  background-color: transparent;
  vertical-align: middle;
  border-radius: 3px;
  list-styled-type: none;
  padding: 4px;
  margin: 8px;
  height: 26px;
  color: white;
  &:hover {
    color: black;
    background-color: white;
    border-bottom: 1px solid #ccc;
  }
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  vertical-align: middle;
`;
const Layout = ({ children, title }) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />

      {title && <title>{title}</title>}
    </Head>
    <Header>
      <Nav>
        <Ul>
          <Li>
            <Link href="/">
              <A>Home</A>
            </Link>
          </Li>
          <Li>
            <Link href="/about">
              <A>About</A>
            </Link>
          </Li>
          <Li>
            <Link href="/hireme">
              <A>Hire Me</A>
            </Link>
          </Li>
          <Li>
            <Link href="/blog">
              <A>Blog</A>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Header>
    <H1>{title}</H1>
    {children}
    <footer>footer</footer>
  </div>
);

export default Layout;
