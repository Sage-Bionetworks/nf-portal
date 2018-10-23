import React, { Component } from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"

import ButtonViewAll from "./Button.js"

class NewStudies extends Component {
  componentDidMount() {
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

  render() {
    return (
      <section className="row new-studies">
        <div className="container">
          <div className="row">
            <h2>New Studies</h2>
          </div>
          <div className="row">
            {this.returnNewStudies(this.props.studies)}
          </div>
          <ButtonViewAll url="Explore/Studies" />
        </div>
      </section>
    )
  }
}

NewStudies.propTypes = {
  studies: PropTypes.object.isRequired,
}

export default NewStudies
