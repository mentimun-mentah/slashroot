import { useState } from "react";
import { Column, Title, Tag, Box, Tab, Table } from "rbx";
import { Fade } from "../../components/Transition";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import util from "../../components/Utility.module.css";
import style from "../../components/Style.module.css";

const AcceptedFlag = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderHeadTable = () => {
    return (
      <>
        <Table.Heading>Services</Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading></Table.Heading>
        <Table.Heading>Last Submit</Table.Heading>
      </>
    );
  };

  const renderTable = () => {
    let table = [];
    for (let i = 1; i < 8; i++) {
      table.push(
        <Table.Row key={i}>
          <Table.Heading>{`S0${i}`}</Table.Heading>
          <Table.Cell>
            <span>
              <Tag color="primary" radiusless textWeight="bold">
                {" "}
                ACCEPTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>
            <span>
              <Tag color="danger" radiusless textWeight="bold">
                {" "}
                REJECTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>
            <span>
              <Tag color="primary" radiusless textWeight="bold">
                {" "}
                ACCEPTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>
            <span>
              <Tag color="primary" radiusless textWeight="bold">
                {" "}
                ACCEPTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>
            <span>
              <Tag color="danger" radiusless textWeight="bold">
                {" "}
                REJECTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>
            <span>
              <Tag color="danger" radiusless textWeight="bold">
                {" "}
                REJECTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>
            <span>
              <Tag color="primary" radiusless textWeight="bold">
                {" "}
                ACCEPTED{" "}
              </Tag>
            </span>
          </Table.Cell>
          <Table.Cell>01:54:23</Table.Cell>
        </Table.Row>
      );
    }
    return table;
  };

  const renderTab = () => {
    let tab = [];
    for (let i = 1; i < 8; i++) {
      tab.push(
        <Tab
          key={i}
          active={activeTab === i ? true : false}
          className="active__tab"
          onClick={() => {
            setActiveTab(i);
          }}
        >
          <span>R0{i}</span>
        </Tab>
      );
    }
    return tab;
  };

  return (
    <Sidebar>
      <Column>
        <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
          <Title size={4} className={util.mb_8}>
            Accepted Flag
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
          <Box className={util.mt_20}>
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

export default AcceptedFlag;
