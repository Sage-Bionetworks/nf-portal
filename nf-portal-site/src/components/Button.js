import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"

class Button extends Component {
  state = {}

  changeRoute = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
      <div className="row flex justify-end">
        <button type="button" className="btn-basic" onClick={() => this.changeRoute(this.props.url)}>View All</button>
      </div>
    )
  }
}

Button.propTypes = {
  url: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
}

export default withRouter(Button)
