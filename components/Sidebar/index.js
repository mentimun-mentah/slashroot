import Link from "../Link";
import { Column, Menu, Image, Container, Section, Tag } from "rbx";
import { AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const serviceState = [
  {
    name: "S01 - Firmware",
    status: "up",
    hint: "especially of a traditional, anecdotal, or popular nature",
  },
  {
    name: "S02 - Sandbox",
    status: "down",
  },
  {
    name: "S03 - Image Manipulator",
    status: "up",
  },
  {
    name: "S04 - Code Runner",
    status: "down",
  },
  {
    name: "S05 - Crypto",
    status: "up",
  },
  {
    name: "S06 - Hades",
    status: "up",
  },
  {
    name: "S07 - Exif Reader",
    status: "down",
  },
];

const Sidebar = (props) => {
  const [serviceData, setServiceData] = useState({});

  const router = useRouter();

  const serviceHandler = useCallback(
    (data) => {
      setServiceData(data);
      router.push(`/services/[serviceName]`, `/services/${data.name}`);
    },
    [serviceData]
  );

  const renderService = () => {
    return serviceState.map((s, i) => {
      return (
        <Menu.List.Item
          key={i}
          onClick={() => {
            serviceHandler(s);
          }}
        >
          {s.name}
          {s.status === "up" && (
            <Tag
              color="success"
              radiusless
              style={{ height: "5px", marginLeft: "4px" }}
            ></Tag>
          )}
          {s.status === "down" && (
            <Tag
              color="danger"
              radiusless
              style={{ height: "5px", marginLeft: "4px" }}
            ></Tag>
          )}
        </Menu.List.Item>
      );
    });
  };

  return (
    <Container>
      <Section>
        <Column.Group centered>
          <Column size={3}>
            <Menu className="sidebar__menu">
              <Image.Container>
                <Image
                  src="/static/images/slashroot_logo.png"
                  className="sidebar__logo"
                />
              </Image.Container>
              <Menu.List>
                <Link href="/scoreboard" as="/scoreboard">
                  <Menu.List.Item>
                    <span className="icon pr-10">
                      <i className="fa fa-table"></i>
                    </span>
                    Scoreboard
                  </Menu.List.Item>
                </Link>
                <Link href="/patching-guide" as="/patching-guide">
                  <Menu.List.Item>
                    <span className="icon pr-10">
                      <i className="fa fa-info-square"></i>
                    </span>
                    Patching Guide
                  </Menu.List.Item>
                </Link>
              </Menu.List>
              <Menu.List>
                <Menu.List.Item
                  className="no-hover"
                  menu={
                    <Menu.List>
                      <Link
                        href="/flagger/submit-flag"
                        as="/flagger/submit-flag"
                      >
                        <Menu.List.Item>Submit Flag</Menu.List.Item>
                      </Link>
                      <Link
                        href="/flagger/accepted-flag"
                        as="/flagger/accepted-flag"
                      >
                        <Menu.List.Item>Accepted Flag</Menu.List.Item>
                      </Link>
                    </Menu.List>
                  }
                >
                  <span className="icon pr-10">
                    <i className="fa fa-pennant"></i>
                  </span>
                  Flagger
                </Menu.List.Item>
              </Menu.List>
              <Menu.List>
                <Menu.List.Item
                  className="no-hover"
                  menu={<Menu.List>{renderService()}</Menu.List>}
                >
                  <span className="icon pr-10">
                    <i className="fa fa-cogs"></i>
                  </span>
                  Services{" "}
                  <Tag color="success" radiusless textWeight="bold">
                    UP
                  </Tag>
                  <Tag color="danger" radiusless textWeight="bold">
                    DOWN
                  </Tag>
                </Menu.List.Item>
                <Link href="/login" as="/login">
                  <Menu.List.Item name="logout">
                    <span className="icon pr-10">
                      <i className="far fa-sign-out-alt fa-flip-horizontal"></i>
                    </span>
                    Logout
                  </Menu.List.Item>
                </Link>
              </Menu.List>
            </Menu>
          </Column>
          <AnimatePresence exitBeforeEnter>{props.children}</AnimatePresence>
          <style jsx>{`
            .pr-10 {
              padding-right: 10px;
            }
            :global(.sidebar__menu) {
              position: sticky;
              top: 30px;
            }
            :global(.sidebar__logo) {
              margin-bottom: 30px;
              width: 150px !important;
              margin-left: auto;
              margin-right: auto;
            }
            :global(.menu-list a.is-active) {
              background-color: hsl(0, 0%, 48%);
              color: #fff;
            }
            :global(.menu-list a.no-hover:hover) {
              background-color: unset;
              cursor: default;
            }
          `}</style>
        </Column.Group>
      </Section>
    </Container>
  );
};

export default Sidebar;
