import React from "react"
import PropTypes from "prop-types"
import SynapseCards from "./SynapseCards"

const Organizations = (props) => {
  return (
    <section className="row organizations">
      <div className="container">
        <div className="row">
          <h2 className="header">Organizations</h2>
        </div>
        <SynapseCards json={props.organizations} cardType="FUNDER" hideOrganizationLink />
      </div>
    </section>
  )
}

Organizations.propTypes = {
  organizations: PropTypes.object.isRequired,
}

export default Organizations
