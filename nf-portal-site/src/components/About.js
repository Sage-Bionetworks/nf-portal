import React, { Component } from "react"
import PropTypes from "prop-types"
import { SynapseComponents } from "synapse-react-client"
import { BarLoader } from "react-spinners"

class About extends Component {
  state = {
    isLoading: true,
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  };

  render() {
    return (
      <section className="page about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>About</h2>
              <BarLoader color="#4DB7AD" loading={this.state.isLoading} />
              <SynapseComponents.Markdown
                token={this.props.token.sessionToken}
                ownerId="syn5702691"
                wikiId="583906"
                updateLoadState={() => this.handleChange("isLoading", false)}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

About.propTypes = {
  token: PropTypes.object.isRequired,
}

export default About
