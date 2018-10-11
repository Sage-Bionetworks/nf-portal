import React, { Component } from "react"
import SynapseCards from "./SynapseCards"
import { getStaticJSON } from "../queries/queryForData"

class NIH extends Component {
  state = {
    syn16858699_fundingAgency_NIHNCI: "",
    syn16787123_fundingAgency_NIHNCI: "",
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
      <section className="row organizations">
        <div className="container">
          <div className="row">
            <h2>The Developmental and Hyperactive RAS Tumor SPORE</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16858699_fundingAgency_NIHNCI} cardType="FUNDER" />

        <div className="container">
          <div className="row">
            <h2>Funded Studies</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16787123_fundingAgency_NIHNCI} limit={50} cardType="STUDY" />

      </section>
    )
  }
}

export default NIH
