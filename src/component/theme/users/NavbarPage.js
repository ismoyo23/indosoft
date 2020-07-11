import React, { useState, useEffect } from "react";
import style from "../../../styles/Users/Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css/swiper.css";
import UserBeforeLogin from "./DropdownUsers";
import { Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";

function NavbarPage(props) {
  let history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let [allGenre, setAllGenre] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    getAllGenre();
  }, []);

  let getAllGenre = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}books/genre/`,
    })
      .then((response) => {
        setAllGenre(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let handleSearch = (event) => {
    event.preventDefault();
    history.push(`/search/${search}`);
  };

  return (
    <>
      <Navbar light className={style.NavBar} expand="md">
        <Container>
          <NavbarBrand className={style.NavBrand}>
            loyal book be your friend
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <NavbarText>
              <Nav className="mr-auto" navbar>
                <UserBeforeLogin />

                <NavItem>
                  <form onSubmit={handleSearch}>
                    <InputGroup onSubmit={handleSearch}>
                      <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search.."
                        style={{ width: "180px" }}
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="light">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </form>
                </NavItem>
              </Nav>
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>

      <Navbar className={style.CardHeader} color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <span className={style.FontTitle}>
              <i class="fa fa-book" aria-hidden="true"></i>
              Setya
            </span>{" "}
            <span className={style.TitleLib}>Library</span>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <NavbarText>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to="/">
                    <NavLink className={style.NavItem}>Home</NavLink>
                  </Link>
                </NavItem>
                <FormGroup style={{ width: "10px !important" }}>
                  <Input
                    value={props.ValGenre}
                    onChange={(e) => props.genre(e.target.value)}
                    type="select"
                    name="select"
                    id="exampleSelect"
                  >
                    <option value="">All</option>
                    {allGenre.map((allGenre) => {
                      return (
                        <option value={allGenre.id_genre}>
                          {allGenre.name_genre}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>

                <FormGroup style={{ width: "10px !important" }}>
                  <Input
                    value={props.ValSort}
                    onChange={(e) => props.sort(e.target.value)}
                    type="select"
                    name="select"
                    id="exampleSelect"
                  >
                    <option value="ASC">A-Z</option>
                    <option value="DESC">Z-A</option>
                  </Input>
                </FormGroup>

                <NavItem>
                  <Link to="/borowerbooks">
                    <NavLink className={style.NavItem}>Books Borrowed</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;
