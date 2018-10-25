import React from "react"
import PropTypes from "prop-types"

import SynapseCards from "./SynapseCards"
import ButtonViewAll from "./Button.js"

const NewDatasets = (props) => {
  return (
    <section className="row new-datasets">
      <div className="container">
        <div className="row">
          <h2 className="header">New Datasets</h2>
        </div>
        <SynapseCards json={props.datasets} cardType="DATASET" />
        <ButtonViewAll url="Explore/Datasets" />
      </div>
    </section>
  )
}

NewDatasets.propTypes = {
  datasets: PropTypes.object.isRequired,
}

export default NewDatasets
