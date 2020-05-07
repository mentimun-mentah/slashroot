import { Column, Title, Tag, Box, Table, Message, Content } from "rbx";
import { Fade } from "../../components/Transition";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import util from "../../components/Utility.module.css";

const ServiceContent = (props) => {
  const renderHeadTable = () => {
    return (
      <>
        <Table.Heading>#</Table.Heading>
        <Table.Heading>Team Name</Table.Heading>
        <Table.Heading>Time</Table.Heading>
      </>
    );
  };
  const renderTable = () => {
    let table = [];
    for (let i = 1; i < 11; i++) {
      table.push(
        <Table.Row key={i}>
          <Table.Heading>{i}</Table.Heading>
          <Table.Cell>mentimun_mentah</Table.Cell>
          <Table.Cell>2020-04-24 09:04</Table.Cell>
        </Table.Row>
      );
    }
    return table;
  };

  return (
    <Sidebar>
      <Column>
        <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
          <Column.Group vcentered>
            <Column>
              <Title size={4} className={util.mb_8}>
                S01 - Firmware{" "}
                <Tag size="medium" color="dark" radiusless>
                  1000 PTS
                </Tag>
              </Title>
              <Title subtitle size="5" textColor="grey">
                by Someone
              </Title>
            </Column>
            <Column>
              <Title
                size={4}
                className={util.mb_8}
                textAlign="right"
                textColor="success"
              >
                Exploit
              </Title>
            </Column>
          </Column.Group>

          <Message color="dark" className={`${util.mt_8}`}>
            <Message.Body radiusless>
              <Content>
                <Title subtitle size="4" marginless>
                  Description:
                </Title>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida,
                </p>

                <Title subtitle size="4" marginless>
                  Links:
                </Title>
                <p>
                  <a href="#" target="_blank">
                    google.com
                  </a>
                </p>

                <Title subtitle size="4" marginless>
                  Connection:
                </Title>
                <p>nc 78.47.89.248 1952</p>

                <Title subtitle size="4" marginless>
                  Hint:
                </Title>
                <p>-</p>
              </Content>
            </Message.Body>
          </Message>

          <Box radiusless>
            <Title size={4} className="box__title">
              Solved by:
            </Title>
            <Table hoverable fullwidth className="table">
              <Table.Head>
                <Table.Row>{renderHeadTable()}</Table.Row>
              </Table.Head>
              <Table.Body>{renderTable()}</Table.Body>
            </Table>
          </Box>
        </motion.div>
      </Column>
    </Sidebar>
  );
};

export default ServiceContent;
