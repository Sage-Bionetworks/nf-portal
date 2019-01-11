import React from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { studies } from "../library"

import ButtonViewAll from "./Button.js"

const NewStudies = ({ token }) => {
  return (
    <section className="row new-studies">
      <div className="container">
        <div className="row">
          <h2 className="header">New Studies</h2>
        </div>
        <div className="row">
          <SynapseComponents.StaticQueryWrapper
            sql={studies.sql}
            token={token}
          >
            <SynapseComponents.SynapseTableCardView
              type={SynapseConstants.STUDY}
              limit={3}
            />
          </SynapseComponents.StaticQueryWrapper>
        </div>
        <ButtonViewAll url="Explore/Studies" />
      </div>
    </section>
  )
}

NewStudies.propTypes = {
  token: PropTypes.string.isRequired,
}

export default NewStudies
