import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "react-dropdown/style.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion"

import "react-accessible-accordion/dist/minimal-example.css"

const logoImage = require("../images/rectangle.svg")

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      About: false,
      Organizations: false,
      Home: false,
      Open: false,
      activeUnderBar: "",
    }
  }

  componentDidMount() {
    this.handleLocalChanges("activeUnderBar", this.props.hash)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hash !== this.props.hash) {
      this.handleLocalChanges("activeUnderBar", this.props.hash)
    }
  }

  closeNavigation = (location) => {
    if (location !== undefined) {
      this.props.handleChanges("hash", location)
    }
    this.setState(
      {
        Organizations: false,
        Option2: false,
        Option3: false,
        Home: false,
        Open: false,
        activeUnderBar: this.props.hash,
      },
      () => {
        const body = document.querySelector("html")
        body.classList.remove("noScroll")
      },
    )
  };

  setOpenAccordion = (event) => {
    const accordionItems = document.querySelectorAll(
      ".top-level-accordion-item",
    )

    this.handleLocalChanges("activeUnderBar", event.target.innerHTML)

    accordionItems.forEach((element) => {
      if (
        event.target.innerHTML
        !== element.querySelector(".main-nav-item").innerHTML
      ) {
        this.setState({
          [element.querySelector(".main-nav-item").innerHTML]: false,
          Open: true,
        })
      } else {
        const newState = this.state[element.querySelector(".main-nav-item").innerHTML]
          !== true
        this.setState(prevState => ({
          ...prevState,
          [element.querySelector(".main-nav-item").innerHTML]: newState,
          Open: true,
        }))
      }
    })
  };

  dropdownMenuAction = (event) => {
    event.preventDefault()
    this.setOpenAccordion(event)

    if (this.state.Open === true) {
      this.closeNavigation()
    }
  };

  handleLocalChanges = (key, value) => {
    this.setState({
      [key]: value,
    })
  };

  mouseLeaveBehavior = () => {
    const behavior = this.state.Open === false
      ? () => this.handleLocalChanges("activeUnderBar", this.props.hash)
      : () => {}
    return behavior
  };

  Option1Dropdown = () => (
    <Accordion>
      <AccordionItem className="top-level-accordion-item">
        <AccordionItemTitle
          className="accordion-title top-level-accordion"
          aria-selected={this.state.Organizations}
        >
          <a
            href="/"
            className={
              this.props.hash.includes("/Organizations")
                ? "nav-item main-nav-item active"
                : "nav-item main-nav-item"
            }
            onClick={this.dropdownMenuAction}
            onMouseEnter={() => this.handleLocalChanges("activeUnderBar", "Organizations")
            }
            onMouseLeave={this.mouseLeaveBehavior()}
          >
            Organizations
          </a>
          <div
            className={
              this.props.hash.includes("/Organizations")
              && this.state.activeUnderBar.includes("Organizations")
                ? "under-bar active"
                : "under-bar"
            }
          />
        </AccordionItemTitle>
        <AccordionItemBody
          aria-hidden={this.state.Organizations !== true}
          className={
            this.state.Option1 === true
              ? "accordion-body top-level-accordion"
              : "accordion-body top-level-accordion accordion__body--hidden"
          }
        >
          <AccordionItem className="accordion-row row">
            <AccordionItemTitle className="accordion__title link">
              <div className="row between-xs">
                <div className="col-xs-12 accordion-sub-title">
                  <Link
                    name="CTF"
                    to="/Organizations/CTF"
                    onClick={() => {
                      this.closeNavigation("/Organizations")
                    }}
                  >
                    CTF
                  </Link>
                </div>
              </div>
            </AccordionItemTitle>
          </AccordionItem>
          <AccordionItem className="accordion-row row">
            <AccordionItemTitle className="accordion__title link">
              <div className="row between-xs">
                <div className="col-xs-12 accordion-sub-title">
                  <Link
                    name="NTAP"
                    to="/Organizations/NTAP"
                    onClick={() => {
                      this.closeNavigation("/Organizations")
                    }}
                  >
                    NTAP
                  </Link>
                </div>
              </div>
            </AccordionItemTitle>
          </AccordionItem>
          <AccordionItem className="accordion-row row">
            <AccordionItemTitle className="accordion__title link">
              <div className="row between-xs">
                <div className="col-xs-12 accordion-sub-title">
                  <Link
                    name="NIH"
                    to="/Organizations/NIH"
                    onClick={() => {
                      this.closeNavigation("/Organizations")
                    }}
                  >
                    NIH
                  </Link>
                </div>
              </div>
            </AccordionItemTitle>
          </AccordionItem>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );

  render() {
    return (
      <header className="row between-xs header center-xs middle-xs">
        <div className="col-xs-12">
          <div
            className="nav-row row between-xs center-xs middle-xs"
            style={{ backgroundColor: "#fff" }}
          >
            <button
              className={!this.state.Open ? "menu-wall hidden" : "menu-wall"}
              type="button"
              onClick={() => {
                this.closeNavigation(this.props.hash)
              }}
            />
            <div className="col-xs-12 col-sm-3">
              <Link
                to="/"
                onClick={() => {
                  this.closeNavigation("#/")
                }}
              >
                <img
                  className="logo-header"
                  src={logoImage}
                  alt="amp_ad_logo"
                />
              </Link>
            </div>
            <div className="nav-buttons col-xs-12 col-sm-7 col-md-8">
              <ul className="nav row end-sm center-xs">
                <li>
                  <Link
                    to="/"
                    className={
                      this.props.hash === "#/"
                        ? "home nav-item main-nav-item active"
                        : "home nav-item main-nav-item"
                    }
                    onClick={() => {
                      this.closeNavigation("#/")
                    }}
                    onMouseEnter={() => this.handleLocalChanges("activeUnderBar", "Home")
                    }
                    onMouseLeave={() => this.handleLocalChanges("activeUnderBar", this.props.hash)
                    }
                  >
                    Home
                  </Link>
                  <div
                    className={
                      this.props.hash === "#/"
                      && this.state.activeUnderBar.includes("#/")
                        ? "under-bar active"
                        : "under-bar"
                    }
                  />
                </li>
                <li>{this.Option1Dropdown()}</li>
                <li>
                  <Link
                    to="/About"
                    className={
                      this.props.hash.includes("/About")
                        ? "home nav-item main-nav-item active"
                        : "home nav-item main-nav-item"
                    }
                    onClick={() => {
                      this.closeNavigation("/About")
                    }}
                    onMouseEnter={() => this.handleLocalChanges("activeUnderBar", "About")
                    }
                    onMouseLeave={() => this.handleLocalChanges("activeUnderBar", this.props.hash)
                    }
                  >
                    About
                  </Link>
                  <div
                    className={
                      this.props.hash.includes("/About")
                      && this.state.activeUnderBar.includes("About")
                        ? "under-bar active"
                        : "under-bar"
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  handleChanges: PropTypes.func.isRequired,
  hash: PropTypes.string.isRequired,
}

export default Header
