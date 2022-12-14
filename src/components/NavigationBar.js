import React from "react";
import {Dropdown, Nav, Navbar} from "react-bootstrap";
import { NavLink, Link } from "react-router-i18n";
import "./NavigationBar.css";
import I18n from "../I18n";

const stripLocale = (pathname, locale) => {
    if (!locale) {
        return pathname;
    }
    return pathname.replace(`/${locale}`, "");
};
const NavigationBar = ({location,
                        match: { params: { locale } },
                       }) => {
    return(
        <>
            <Navbar as="header" className="navigation" variant="dark">
                <Nav>
                    <NavLink exact to="/"
                             className="nav-link"
                            ><I18n t="navbar.tab1" /></NavLink>
                    <NavLink exact to="/Directors"
                             className="nav-link"><I18n t="navbar.tab2" /></NavLink>
                </Nav>
                <Dropdown className="ms-auto d-inline me-3">
                    <Dropdown.Toggle className="lang-btn"
                                     id="dropdown-autoclose-true"
                                     variant="secondary"
                                     title={I18n.getTranslation(location, 'navbar.toggleTitle')}>
                        <i className="bi-globe-central-south-asia lang"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item ignoreLocale
                                       as={Link}
                                       to={`/ru${stripLocale(location.pathname, locale)}`}
                                       className="lang">Русский</Dropdown.Item>
                        <Dropdown.Item  as={Link}
                                        ignoreLocale
                                        to={`/en${stripLocale(location.pathname, locale)}`}
                                        className="lang">English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </>
    )
}
export default NavigationBar;