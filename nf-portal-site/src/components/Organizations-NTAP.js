import React, { Component } from "react"
import PropTypes from "prop-types"
import SynapseCards from "./SynapseCards"
import { getStaticJSON } from "../queries/queryForData"

class NTAP extends Component {
  state = {
    syn16858699_fundingAgency_NTAP: "",
    syn16787123_fundingAgency_NTAP: "",
    syn16857542_fundingAgency_NTAP: "",
    syn16859580_fundingAgency_NTAP: "",
  }

  componentDidMount() {
    getStaticJSON("syn16858699_fundingAgency_NTAP", this.handleChanges, "syn16858699_fundingAgency_NTAP")
    getStaticJSON("syn16787123_fundingAgency_NTAP", this.handleChanges, "syn16787123_fundingAgency_NTAP")
    getStaticJSON("syn16857542_fundingAgency_NTAP", this.handleChanges, "syn16857542_fundingAgency_NTAP")
    getStaticJSON("syn16859580_fundingAgency_NTAP", this.handleChanges, "syn16859580_fundingAgency_NTAP")
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
            <h2>The Neurofibromatosis Therapeutic Acceleration Program</h2>
          </div>
          <SynapseCards json={this.state.syn16858699_fundingAgency_NTAP} cardType="FUNDER" />

          <div className="container">
            <div className="row">
              <h2>Funded Studies</h2>
            </div>
          </div>
          <SynapseCards json={this.state.syn16787123_fundingAgency_NTAP} limit={50} cardType="STUDY" />

          <div className="container">
            <div className="row">
              <h2>New Publications</h2>
            </div>
          </div>
          <SynapseCards json={this.state.syn16857542_fundingAgency_NTAP} limit={10} cardType="PUBLICATION" />

          <div className="container">
            <div className="row">
              <h2>Datasets</h2>
            </div>
          </div>
          <SynapseCards json={this.state.syn16859580_fundingAgency_NTAP} cardType="DATASET" />
        </div>
      </section>
    )
  }
}

NTAP.propTypes = {
  organizations: PropTypes.object.isRequired,
}

export default NTAP
