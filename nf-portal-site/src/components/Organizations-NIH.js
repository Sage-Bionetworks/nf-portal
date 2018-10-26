import React, { Component } from "react"
import SynapseCards from "./SynapseCards"
import { getStaticJSON } from "../queries/queryForData"

class NIH extends Component {
  state = {
    syn16858699_fundingAgency_NIHNCI: {},
    syn16787123_fundingAgency_NIHNCI: {},
  }

  componentDidMount() {
    getStaticJSON("syn16858699_fundingAgency_NIHNCI", this.handleChanges, "syn16858699_fundingAgency_NIHNCI")
    getStaticJSON("syn16787123_fundingAgency_NIHNCI", this.handleChanges, "syn16787123_fundingAgency_NIHNCI")
    getStaticJSON("syn16857542_fundingAgency_NIHNCI", this.handleChanges, "syn16857542_fundingAgency_NIHNCI")
    getStaticJSON("syn16859580_fundingAgency_NIHNCI", this.handleChanges, "syn16859580_fundingAgency_NIHNCI")
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  render() {
    return (
      <section className="page row organizations">
        <div className="container">
          <div className="row">
            <h1 className="header">The Developmental and Hyperactive RAS Tumor SPORE</h1>
          </div>
          <SynapseCards json={this.state.syn16858699_fundingAgency_NIHNCI} cardType="FUNDER" />
        </div>

        <div className="container">
          <div className="row">
            <h2 className="header">Funded Studies</h2>
          </div>
          <SynapseCards json={this.state.syn16787123_fundingAgency_NIHNCI} limit={50} cardType="STUDY" />
        </div>
      </section>
    )
  }
}

export default NIH
