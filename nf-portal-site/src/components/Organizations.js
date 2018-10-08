import React from "react"
import PropTypes from "prop-types"
import SynapseCards from "./SynapseCards"

const Organizations = (props) => {
  return (
    <section className="row organizations">
      <div className="container">
        <div className="row">
          <h2>Organizations</h2>
        </div>
      </div>
      <SynapseCards json={props.organizations} cardType="FUNDER" />
    </section>
  )
}

Organizations.propTypes = {
  organizations: PropTypes.object.isRequired,
}

export default Organizations
