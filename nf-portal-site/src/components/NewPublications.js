import React from "react"
import PropTypes from "prop-types"
import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { publications } from "../library"
import ButtonViewAll from "./Button.js"

const NewPublications = ({ token }) => {
  return (
    <section className="row new-publications">
      <div className="container">
        <div className="row">
          <h2 className="header">New Publications</h2>
        </div>
        <div className="synapse-cards-col">
          <SynapseComponents.StaticQueryWrapper
            sql={publications.sql}
            token={token}
          >
            <SynapseComponents.CardContainer
              type={SynapseConstants.PUBLICATION}
              limit={3}
            />
          </SynapseComponents.StaticQueryWrapper>
          <ButtonViewAll url="Explore/Publications" />
        </div>
      </div>
    </section>
  )
}

NewPublications.propTypes = {
  token: PropTypes.string.isRequired,
}

export default NewPublications
