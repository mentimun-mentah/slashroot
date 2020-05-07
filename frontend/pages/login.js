import {
  Section,
  Column,
  Image,
  Box,
  Field,
  Label,
  Control,
  Input,
  Button,
} from "rbx";
import Link from "next/link";
import axios from "axios";

const Login = () => {
  return (
    <Section>
      <Column.Group breakpoint="tablet" centered>
        <Column size={4}>
          <Image.Container>
            <Image
              src="/static/images/slashroot_logo.png"
              className="login__logo"
            />
          </Image.Container>
          <Box>
            <Field>
              <Label>Username</Label>
              <Control>
                <Input type="text" placeholder="Username" />
              </Control>
            </Field>

            <Field>
              <Label>Password</Label>
              <Control>
                <Input type="password" placeholder="password" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Link href={("/scoreboard", "/scoreboard")}>
                  <Button color="dark" fullwidth>
                    Login
                  </Button>
                </Link>
              </Control>
            </Field>
          </Box>
        </Column>
      </Column.Group>

      <style jsx>{`
        :global(.login__logo) {
          width: 250px !important;
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </Section>
  );
};

export default Login;
