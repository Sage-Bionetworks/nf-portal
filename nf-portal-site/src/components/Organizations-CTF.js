import React, { Component } from "react"
import SynapseCards from "./SynapseCards"
import { getStaticJSON } from "../queries/queryForData"

class CTF extends Component {
  state = {
    syn16858699_fundingAgency_CTF: "",
    syn16787123_fundingAgency_CTF: "",
    syn16857542_fundingAgency_CTF: "",
    syn16859580_fundingAgency_CTF: "",
  }

  componentDidMount() {
    getStaticJSON("syn16858699_fundingAgency_CTF", this.handleChanges)
    getStaticJSON("syn16787123_fundingAgency_CTF", this.handleChanges)
    getStaticJSON("syn16857542_fundingAgency_CTF", this.handleChanges)
    getStaticJSON("syn16859580_fundingAgency_CTF", this.handleChanges)
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
            <h2>Childrens Tumor Foundation</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16858699_fundingAgency_CTF} cardType="FUNDER" />

        <div className="container">
          <div className="row">
            <h2>Funded Studies</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16787123_fundingAgency_CTF} limit={50} cardType="STUDY" />

        <div className="container">
          <div className="row">
            <h2>New Publications</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16857542_fundingAgency_CTF} limit={10} cardType="PUBLICATION" />

        <div className="container">
          <div className="row">
            <h2>Datasets</h2>
          </div>
        </div>
        <SynapseCards json={this.state.syn16859580_fundingAgency_CTF} cardType="DATASET" />
      </section>
    )
  }
}

export default CTF
