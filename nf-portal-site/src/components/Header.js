import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { slide as Menu } from "react-burger-menu"

import "react-dropdown/style.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion"

import "react-accessible-accordion/dist/minimal-example.css"

const logo = require("../images/nf-portal-logo.svg")

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      About: false,
      Organizations: false,
      Home: false,
      Open: false,
      activeUnderBar: "",
      isOpen: false,
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
        Organizations: false,
        Explore: false,
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
      <AccordionItem
        className="top-level-accordion-item"
        onMouseEnter={() => this.handleLocalChanges("activeUnderBar", "Organizations")
        }
        onMouseLeave={this.mouseLeaveBehavior()}
      >
        <AccordionItemTitle
          className="accordion-title top-level-accordion"
          aria-selected={this.state.Organizations}
        >
          <a
            href="/Organizations"
            className={
              this.props.hash.includes("/Organizations")
                ? "nav-item main-nav-item active"
                : "nav-item main-nav-item"
            }
            onClick={this.dropdownMenuAction}
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
                    to="/Organizations-CTF"
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
                    to="/Organizations-NTAP"
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
                    name="DHART SPORE"
                    to="/Organizations-DHART-SPORE"
                    onClick={() => {
                      this.closeNavigation("/Organizations")
                    }}
                  >
                    DHART SPORE
                  </Link>
                </div>
              </div>
            </AccordionItemTitle>
          </AccordionItem>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );

  returnExploreNav = () => {
    return (
      <li>
        <Link
          to="/Explore"
          className={
            this.props.hash.includes("/Explore")
              ? "home nav-item main-nav-item active"
              : "home nav-item main-nav-item"
          }
          onClick={() => {
            this.closeNavigation("/Explore")
          }}
          onMouseEnter={() => this.handleLocalChanges("activeUnderBar", "Explore")
          }
          onMouseLeave={() => this.handleLocalChanges("activeUnderBar", this.props.hash)
          }
        >
                    Explore
        </Link>
        <div
          className={
            this.props.hash.includes("/Explore")
                      && this.state.activeUnderBar.includes("Explore")
              ? "under-bar active"
              : "under-bar"
          }
        />
      </li>
    )
  }

  closeHamburger = () => {
    this.setState({ menuOpen: false })
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  render() {
    return (
      <header className="header">
        <Menu className="burger-menu" isOpen={this.state.menuOpen} styles={styles} onStateChange={state => this.handleStateChange(state)}>
          <Link to="/" onClick={() => this.closeHamburger()}>Home</Link>
          <h4>Organizations</h4>
          <Link className="inset" to="/Organizations-CTF" onClick={() => this.closeHamburger()}>CTF</Link>
          <Link className="inset" to="/Organizations-NTAP" onClick={() => this.closeHamburger()}>NTAP</Link>
          <Link className="inset" to="/Organizations-DHART-SPORE" onClick={() => this.closeHamburger()}>DHART SPORE</Link>
          <Link to="/About" onClick={() => this.closeHamburger()}>About</Link>
        </Menu>

        <div className="container">
          <div className="nav-row nav row">
            <button
              className={!this.state.Open ? "menu-wall hidden" : "menu-wall"}
              type="button"
              onClick={() => {
                this.closeNavigation(window.location.hash)
              }}
            />
            <div className="logo col-md-2 col-sm-3 col-xs-12">
              <Link
                to="/"
                onClick={() => {
                  this.closeNavigation("#/")
                }}
              >
                <img src={logo} alt="nf portal logo" />
              </Link>
            </div>
            <div className="nav-buttons col-md-10 flex justify-end">
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
