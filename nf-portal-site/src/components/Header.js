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

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      About: false,
      Funders: false,
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

    let activeUnderBar = window.location.hash

    if (this.state.Open && location === undefined) {
      activeUnderBar = this.state.activeUnderBar
    }

    this.setState(
      {
        Funders: false,
        Option2: false,
        Option3: false,
        Home: false,
        Open: false,
        activeUnderBar,
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
    let hash
    if (this.state.Open === true) {
      if (window.location.hash === "#/") {
        hash = "Home"
      }
      console.log(event.target.href)
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

  handleOpenMouse

  Option1Dropdown = () => (
    <Accordion>
      <AccordionItem className="top-level-accordion-item">
        <AccordionItemTitle
          className="accordion-title top-level-accordion"
          aria-selected={this.state.Funders}
        >
          <a
            href="/Funders"
            className={
              this.props.hash.includes("/Funders")
                ? "nav-item main-nav-item active"
                : "nav-item main-nav-item"
            }
            onClick={this.dropdownMenuAction}
            onMouseEnter={() => this.handleLocalChanges("activeUnderBar", "Funders")
            }
            onMouseLeave={this.mouseLeaveBehavior()}
          >
            Funders
          </a>
          <div
            className={
              this.props.hash.includes("/Funders")
              && this.state.activeUnderBar.includes("Funders")
                ? "under-bar active"
                : "under-bar"
            }
          />
        </AccordionItemTitle>
        <AccordionItemBody
          aria-hidden={this.state.Funders !== true}
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
                    to="/Funders-CTF"
                    onClick={() => {
                      this.closeNavigation("/Funders")
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
                    to="/Funders-NTAP"
                    onClick={() => {
                      this.closeNavigation("/Funders")
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
                    to="/Funders-NIH"
                    onClick={() => {
                      this.closeNavigation("/Funders")
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
      <header className="header">
        <div className="container">
          <div className="nav-row nav row">
            <button
              className={!this.state.Open ? "menu-wall hidden" : "menu-wall"}
              type="button"
              onClick={() => {
                this.closeNavigation(window.location.hash)
              }}
            />
            <div className="logo col-md-9 col-sm-10 col-xs-12">
              <Link
                to="/"
                onClick={() => {
                  this.closeNavigation("#/")
                }}
              >
                NFPortal
              </Link>
            </div>
            <div className="nav-buttons col-md-3 flex justify-end">
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
                <li>
                  <this.Option1Dropdown />
                </li>
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
