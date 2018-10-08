import React from "react"
import PropTypes from "prop-types"

import SynapseCards from "./SynapseCards"

const Tools = (props) => {
  return (
    <section className="row tools">
      <div className="container">
        <div className="row">
          <h2>Tools</h2>
        </div>
        <SynapseCards json={props.tools} cardType="TOOL" />
      </div>
    </section>
  )
}

Tools.propTypes = {
  tools: PropTypes.object.isRequired,
}

export default Tools
