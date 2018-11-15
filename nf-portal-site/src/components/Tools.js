import React from "react"
import PropTypes from "prop-types"
import ButtonViewAll from "./Button.js"
import SynapseCards from "./SynapseCards"

const Tools = (props) => {
  const marginTop = () => {
    return ({
      marginTop: window.location.hash.includes("/Explore/") ? "-80px" : "0px",
    })
  }

  const ViewAll = () => {
    if (window.location.hash.includes("/Explore/")) {
      return <div />
    }
    return <ButtonViewAll url="Explore/Tools" />
  }

  return (
    <section className="row tools" style={marginTop()}>
      <div className="container">
        <div className="row">
          <h2 className="header">{window.location.hash.includes("/Explore") ? "" : "Tools"}</h2>
        </div>
        <div className="synapse-cards-col">
          <SynapseCards json={props.tools} cardType="TOOL" />
        </div>
        <ViewAll />
      </div>
    </section>
  )
}

Tools.propTypes = {
  tools: PropTypes.object.isRequired,
}

export default Tools
