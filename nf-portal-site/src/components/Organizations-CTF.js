import React, { Component } from "react"
import PropTypes from "prop-types"
import SynapseCards from "./SynapseCards"
import { getStaticJSON } from "../queries/queryForData"

class CTF extends Component {
  state = {
    syn16858699_fundingAgency_CTF: "",
    stories: "",
    publications: "",
    datasets: "",
  }

  componentDidMount() {
    getStaticJSON("syn16858699_fundingAgency_CTF", this.handleChanges)
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  render() {
    return (
      <section className="row organizations">
        <div className="container">
          <div className="row">
            <h2>Organizations</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16858699_fundingAgency_CTF} cardType="FUNDER" />
      </section>
    )
  }
}

CTF.propTypes = {
  organizations: PropTypes.object.isRequired,
}

export default CTF
