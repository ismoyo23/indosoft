import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Container,
  Card,
  Button,
  CardTitle,
} from "reactstrap";
import "font-awesome/css/font-awesome.min.css";
import styles from "./Style.module.css";
import axios from "axios";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let [data, setData] = useState([]);

  useEffect(() => {
    user();
    getUsers();
  }, []);

  let user = () => {
    axios({
      method: "GET",
      url: "https://api.github.com/users",
    }).then((response) => {
      console.log(response);
    });
  };

  let getUsers = () => {
    axios({
      method: "GET",
      url: "https://api.github.com/users",
    }).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <span style={{ color: "white", fontFamily: "Roboto" }}>Social</span>
          </NavbarBrand>
          <NavbarToggler style={{ color: "white" }} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Container>
      </Navbar>

      <Container>
        {data.map((rslt) => {
          return (
            <Card
              style={{ flexDirection: "row", marginTop: 30 }}
              body
              outline
              color="secondary"
            >
              <img
                className={styles.image}
                src={rslt.avatar_url}
                alt="this is car image"
              />
              <CardTitle style={{ marginLeft: 9, width: 200 }}>
                {rslt.login}
              </CardTitle>

              <p style={styles.Text}>{rslt.login}</p>

              <p>
                <i class="fa fa-github" aria-hidden="true"></i>
              </p>

              <Button style={{ marginLeft: "auto" }}>X</Button>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;
