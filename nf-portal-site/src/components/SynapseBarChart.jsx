import React, { Component } from "react"
import PropTypes from "prop-types"
import { SynapseComponents } from "synapse-react-client"
import { BarLoader } from "react-spinners"

class SynapseBarChart extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <SynapseComponents.QueryWrapperMenu
          menuConfig={this.props.menuConfig}
          token={this.props.token}
          type={this.props.type}
          rgbIndex={this.props.rgbIndex !== undefined ? this.props.rgbIndex : ""}
          loadingScreen={<div className="bar-loader"><BarLoader color="#4DB7AD" loading /></div>}
        />
      </div>
    )
  }
}

SynapseBarChart.propTypes = {
  token: PropTypes.string.isRequired,
  rgbIndex: PropTypes.number.isRequired,
  menuConfig: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
}
export default SynapseBarChart
