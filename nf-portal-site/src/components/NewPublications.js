import React from "react"
import PropTypes from "prop-types"

import SynapseCards from "./SynapseCards"

const NewPublications = (props) => {
  return (
    <section className="row new-publications">
      <div className="container">
        <div className="row">
          <h2>New Publications</h2>
        </div>
        <SynapseCards json={props.publications} cardType="PUBLICATION" />
      </div>
    </section>
  )
}

NewPublications.propTypes = {
  publications: PropTypes.object.isRequired,
}

export default NewPublications
