import React, { Component } from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { staticTableQuery } from "../queries/queryForData"

class NewStudies extends Component {
  componentDidMount() {
    staticTableQuery("syn16858331", this.handleChanges).then(() => {
      this.setState({
        loading: false,
        activeButton: "syn16858331",
      })
    })
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  returnNewStudies = (json) => {
    return (
      <SynapseComponents.StaticQueryWrapper
        json={json}
      >
        <SynapseComponents.SynapseTableCardView
          type={SynapseConstants.STUDY}
          limit={3}
        />
      </SynapseComponents.StaticQueryWrapper>
    )
  }

  //{this.returnNewStudies()}
  render() {
    return (
      <section className="row new-studies">
        <div className="container">
          <div className="row">
            <h2>New Studies</h2>
          </div>
          <div className="row" />
        </div>
      </section>
    )
  }
}

NewStudies.propTypes = {
  token: PropTypes.string.isRequired,
}

export default NewStudies
