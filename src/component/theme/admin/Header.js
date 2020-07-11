import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Col,
} from "reactstrap";
import "font-awesome/css/font-awesome.min.css";
import style from "../../../styles/Admin/Sidebar.module.css";
import img from "../../../image/image.jpg";
import $ from "jquery";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    let handleDropdown = () => {
      $(".Dropdown").addClass(style.DropShow);
    };

    let handleDropdownSettings = () => {
      $(".Dropdown").removeClass(style.DropShow);
    };
    return (
      <>
        {/* side bar */}
        {/* <Col md='2' xs="1"> */}
        <Nav vertical id="sidebar">
          <header>Library App</header>
          <div className={style.imgBar}>
            <img className={style.ImgHeader} src={img} />
            <p className={style.username}>
              <strong>Admin</strong>
            </p>
            <p className={style.position}>
              <strong>Librarian App</strong>
            </p>
          </div>

          <NavItem>
            <NavLink
              onClick={handleDropdownSettings}
              className={style.NavLink}
              href="#"
            >
              <Link style={{ color: "white" }} to="/Admin">
                <i className="fa fa-home"></i>
                <span className={style.title}>Dashboard</span>
              </Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              onClick={handleDropdown}
              className={style.NavLink}
              href="#"
            >
              <i className="fa fa-cog" aria-hidden="true"></i>
              <span className={style.title}>Content</span>
            </NavLink>
            <div className={`${style.Dropdown} Dropdown`}>
              <NavLink href="#">
                <Link to="/books">
                  <span className={style.titleDropdown}>Books</span>
                </Link>
              </NavLink>

              <NavLink href="#">
                <Link to="/author">
                  <span className={style.titleDropdown}>Author</span>
                </Link>
              </NavLink>
              <NavLink href="#">
                <Link to="/genre">
                  <span className={style.titleDropdown}>Genre</span>
                </Link>
              </NavLink>
            </div>
          </NavItem>

          <NavItem>
            <NavLink
              onClick={handleDropdownSettings}
              className={style.NavLink}
              href="#"
            >
              <i className="fa fa-tasks" aria-hidden="true"></i>
              <span className={style.title}>User Page</span>
            </NavLink>
          </NavItem>
        </Nav>
        {/* </Col> */}
      </>
    );
  }
}

export default Header;
