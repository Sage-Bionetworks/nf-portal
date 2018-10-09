import React from "react"
import PropTypes from "prop-types"

import SynapseCards from "./SynapseCards"

const NewDatasets = (props) => {
  return (
    <section className="row new-datasets">
      <div className="container">
        <div className="row">
          <h2>New Datasets</h2>
        </div>
        <SynapseCards json={props.datasets} cardType="DATASET" />
      </div>
    </section>
  )
}

NewDatasets.propTypes = {
  datasets: PropTypes.object.isRequired,
}

export default NewDatasets
