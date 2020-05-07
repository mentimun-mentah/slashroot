import { Column, Title, Tag, Box, Field, Input, Control, Button } from "rbx";
import { Fade } from "../../components/Transition";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import style from "../../components/Style.module.css";
import util from "../../components/Utility.module.css";

const SubmitFlag = () => {
  const renderAttacker = () => {
    let attacker = [];
    for (let i = 0; i < 5; i++) {
      attacker.push(
        <li key={i}>
          [2020-04-24 14:17:57]{" "}
          <span className="has-text-weight-semibold">Airavata</span> has stolen
          your flag.
        </li>
      );
    }
    for (let i = 6; i < 11; i++) {
      attacker.push(
        <li key={i}>
          [2020-04-24 14:17:57]{" "}
          <span className="has-text-weight-semibold">Overseas Someday</span> has
          stolen your flag.
        </li>
      );
    }
    return attacker;
  };

  return (
    <Sidebar>
      <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
        <Column>
          <Title size={4} className={util.mb_8}>
            Team Information
          </Title>
          <hr className={style.c_hr} />
          <Column.Group className={`${util.mt_8} ${util.mb_8}`}>
            <Column>
              <Title subtitle size="6">
                Team ID: <Tag size="medium">T01</Tag>
              </Title>
            </Column>
            <Column>
              <Title subtitle size="6">
                Team Name: <Tag size="medium">mentimun_mentah</Tag>
              </Title>
            </Column>
          </Column.Group>
          <hr className={style.c_hr} />

          <Column.Group className={util.mt_8}>
            <Column size="half">
              <Box>
                <p className={util.fs_14}>
                  Copy paste the below token to cookie x-flagger-token to share
                  your current session with others. The token is a JWT token,
                  reflecting current session that you have
                </p>
                <pre className="SubmitFlag__pre">
                  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODcxOTE0NTAsIm5iZiI6MTU4NzE5MTQ1MCwianRpIjoiNjg3ZDk3ZTAtYjUzYi00ZTI0LThhZDQtYWNjNzIxMTg0NzViIiwiZXhwIjoxNTg3MTkyMzUwLCJpZGVudGl0eSI6NCwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.ZTDpZvnrtmS3mp2PrMuK7rAfxc1J8z8WVIp9_KPduL0
                </pre>
              </Box>
            </Column>
            <Column size="half">
              <Box>
                <Title size="3" className={util.mb_12}>
                  Submit Flag
                </Title>
                <p className={`${util.mt_52}`}>Submit all flags here</p>
                <Title subtitle textWeight="semibold" size="6">
                  Current Round / Tick: <Tag size="medium">R09</Tag>
                </Title>
                <Field>
                  <Control>
                    <Input type="text" placeholder="Flag" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Button color="dark" fullwidth>
                      Submit
                    </Button>
                  </Control>
                </Field>
              </Box>
            </Column>
          </Column.Group>

          <Title size="4" className={util.mb_12}>
            Attacker logs
          </Title>
          <Column.Group>
            <Column>
              <Box className={style.history__box}>
                <ul className={style.history__ul}>{renderAttacker()}</ul>
              </Box>
            </Column>
          </Column.Group>
          <Title size="4">Unlocked Services</Title>
          <Title subtitle italic size="6">
            There is no unlocked service yet!
          </Title>
        </Column>
        <style jsx>
          {`
            :global(.SubmitFlag__pre) {
              margin-top: 10px !important;
              white-space: pre-wrap;
              word-break: break-word;
            }
          `}
        </style>
      </motion.div>
    </Sidebar>
  );
};

export default SubmitFlag;
