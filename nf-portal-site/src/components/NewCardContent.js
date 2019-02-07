import React from "react"
import PropTypes from "prop-types"
import { SynapseComponents } from "synapse-react-client"
import * as synapseObjects from "../library"
import ButtonViewAll from "./Button.js"

const NewCardContent = (
  {
    token, url, tableName, name, hideViewAll = false,
  },
) => {
  const { sql, type } = synapseObjects[tableName]
  return (
    <section className="row new-studies">
      <div className="container">
        <div className="row">
          <h2 className="header">
            {name}
          </h2>
        </div>
        <div className="row">
          <SynapseComponents.CardContainerLogic
            sql={sql}
            type={type}
            limit={3}
          />
          {!hideViewAll && <ButtonViewAll url={url} />}
        </div>
      </div>
    </section>
  )
}

NewCardContent.propTypes = {
  token: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hideViewAll: PropTypes.bool,
}

NewCardContent.defaultProps = {
  hideViewAll: false,
}

export default NewCardContent
