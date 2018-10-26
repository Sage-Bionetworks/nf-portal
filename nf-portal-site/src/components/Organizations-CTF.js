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
            <h1 className="header">Childrens Tumor Foundation</h1>
          </div>
          <SynapseCards json={this.state.syn16858699_fundingAgency_CTF} cardType="FUNDER" />
        </div>

        <div className="container">
          <div className="row">
            <h2 className="header">Funded Studies</h2>
          </div>
          <SynapseCards json={this.state.syn16787123_fundingAgency_CTF} limit={50} cardType="STUDY" />
        </div>

        <div className="container">
          <div className="row">
            <h2 className="header">New Publications</h2>
          </div>
          <SynapseCards json={this.state.syn16857542_fundingAgency_CTF} limit={10} cardType="PUBLICATION" />
        </div>

        <div className="container">
          <div className="row">
            <h2 className="header">Datasets</h2>
          </div>
          <SynapseCards json={this.state.syn16859580_fundingAgency_CTF} cardType="DATASET" />
        </div>
      </section>
    )
  }
}

export default CTF
