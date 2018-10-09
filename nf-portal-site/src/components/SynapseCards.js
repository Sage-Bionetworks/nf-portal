import React from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"

const SynapseCards = (props) => {
  return (
    <SynapseComponents.StaticQueryWrapper
      json={props.json}
    >
      <SynapseComponents.SynapseTableCardView
        type={SynapseConstants[props.cardType]}
        limit={props.limit ? props.limit : 3}
      />
    </SynapseComponents.StaticQueryWrapper>
  )
}

SynapseCards.propTypes = {
  json: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
}

export default SynapseCards
