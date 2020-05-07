import { Hero, Container, Title, Navbar } from "rbx";
import Link from "next/link";
import style from "../components/Style.module.css";

export default function Home() {
  return (
    <Hero size="fullheight" color="dark">
      <Hero.Head>
        <Navbar>
          <Navbar.Burger />
          <Navbar.Menu>
            <Navbar.Segment align="end">
              <Link href="/login" as="/login">
                <Navbar.Link arrowless className={style.logo__login}>
                  Login
                </Navbar.Link>
              </Link>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>
      </Hero.Head>
      <Hero.Body>
        <Container textAlign="centered">
          <Title size={1} className={style.logo__text}>
            Slashroot CTF<span className={style.logo__cursor}></span>
          </Title>
          <Title
            as="h3"
            subtitle
            textColor="grey"
            className={style.logo__subtitle}
          >
            Pwn, Rev, Web, Crypto, Forensics, Stego, etc...
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
}
