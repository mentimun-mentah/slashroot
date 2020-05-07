import { useState, useCallback } from "react";
import { Modal, Delete, Table, Tab } from "rbx";

const ModalContainer = React.memo(({ closeService, showService, data }) => {
  const [tab, setTab] = useState(true);

  const tabHandler = useCallback(() => {
    setTab(!tab);
  }, [tab]);

  const { name, category, links, score, description, author, hint } = data;

  let hintShow = "No hint added!";
  if (hint && !tab) {
    hintShow = (
      <Table.Row>
        <Table.Cell>{hint}</Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Modal closeOnBlur={true} closeOnEsc={true} active={showService}>
      <Modal.Background />
      <Modal.Card>
        <Modal.Card.Head radiusless>
          <Modal.Card.Title>Challenge Details</Modal.Card.Title>
          <Delete onClick={closeService} />
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Tab.Group kind="boxed">
            <Tab active={tab} onClick={tabHandler}>
              Details
            </Tab>
            <Tab active={!tab} onClick={tabHandler}>
              Hint
            </Tab>
          </Tab.Group>
          <Table fullwidth>
            <Table.Body>
              {tab && (
                <>
                  <Table.Row>
                    <Table.Heading>Name</Table.Heading>
                    <Table.Cell>{name}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Heading>Category</Table.Heading>
                    <Table.Cell>{category}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Heading>Score</Table.Heading>
                    <Table.Cell>{score}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Heading>Links</Table.Heading>
                    <Table.Cell>
                      <a href={links} target="_blank">
                        {links}
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Heading>Description</Table.Heading>
                    <Table.Cell>{description}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Heading>Author</Table.Heading>
                    <Table.Cell>{author}</Table.Cell>
                  </Table.Row>
                </>
              )}

              {!tab && hintShow}
            </Table.Body>
          </Table>
        </Modal.Card.Body>
      </Modal.Card>
    </Modal>
  );
});

export default ModalContainer;
