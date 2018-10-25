import React from "react"
import PropTypes from "prop-types"

import SynapseCards from "./SynapseCards"
import ButtonViewAll from "./Button.js"

const NewPublications = (props) => {
  return (
    <section className="row new-publications">
      <div className="container">
        <div className="row">
          <h2 className="header">New Publications</h2>
        </div>
        <div className="synapse-cards-col">
          <SynapseCards json={props.publications} cardType="PUBLICATION" />
          <ButtonViewAll url="Explore/Publications" />
        </div>
      </div>
    </section>
  )
}

NewPublications.propTypes = {
  publications: PropTypes.object.isRequired,
}

export default NewPublications
