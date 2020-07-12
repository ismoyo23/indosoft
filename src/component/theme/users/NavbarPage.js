import React, { useState, useEffect } from "react";
import style from "../../../styles/Users/Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css/swiper.css";
import UserBeforeLogin from "./DropdownUsers";
import { Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { genreGet } from "../../../redux/actions/genre";
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
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
} from "reactstrap";

function NavbarPage(props) {
  let history = useHistory();
  let toggleNavbar = () => setIsOpen(!isOpen);
  let [isOpen, setIsOpen] = useState(false);
  let [allGenre, setAllGenre] = useState([]);
  let [search, setSearch] = useState("");
  let [dropdownOpen, setDropdownOpen] = useState(false);
  let toggle = () => setDropdownOpen(!dropdownOpen);
  let [category, setCategory] = useState("");

  useEffect(() => {
    getAllGenre();
  }, []);

  let getAllGenre = () => {
    let data = {
      ConUrl: process.env.REACT_APP_URL,
      Search: "",
    };
    props.genreGet(data);
  };

  let handleSearch = (event) => {
    event.preventDefault();
    history.push(`/search/${search}`);
    window.location.reload();
  };

  let handleCategory = (category) => (event) => {
    event.preventDefault();
    if (category == "All") {
      history.push("/");
      window.location.reload();
    } else {
      history.push(`/category/${category}`);
      window.location.reload();
    }
  };

  let handleSort = (sort) => (event) => {
    event.preventDefault();
    if (sort == "A-Z") {
      history.push("/");
      window.location.reload();
    } else {
      history.push(`sort/${sort}`);
      window.location.reload();
    }
  };

  let handle;

  return (
    <>
      <Navbar light className={style.NavBar} expand="md">
        <Container>
          <NavbarBrand className={style.NavBrand}>
            loyal book be your friend
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
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
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className={style.NavItem} nav caret>
                    Category
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <span onClick={handleCategory("All")}>All</span>
                    </DropdownItem>
                    {props.AllGenre.data.map((data) => {
                      return (
                        <DropdownItem header>
                          <span onClick={handleCategory(data.name_genre)}>
                            {data.name_genre}
                          </span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className={style.NavItem} nav caret>
                    Sort
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={handleSort("A-Z")}>A-Z</DropdownItem>
                    <DropdownItem onClick={handleSort("Z-A")}>Z-A</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

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

const mapStateToProps = (state) => ({
  AllGenre: state.genreGet,
});
const mapDispatchToProp = { genreGet };

export default connect(mapStateToProps, mapDispatchToProp)(NavbarPage);
