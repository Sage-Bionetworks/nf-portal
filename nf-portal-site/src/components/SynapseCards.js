import React from "react"
import PropTypes from "prop-types"
import { SynapseComponents, SynapseConstants } from "synapse-react-client"

const SynapseCards = (props) => {
  return (
    <SynapseComponents.StaticQueryWrapper
      json={props.json}
    >
      <SynapseComponents.CardContainer
        type={SynapseConstants[props.cardType]}
        limit={props.limit ? props.limit : 3}
        hideOrganizationLink={props.hideOrganizationalLink}
      />
    </SynapseComponents.StaticQueryWrapper>
  )
}

SynapseCards.propTypes = {
  json: PropTypes.object.isRequired,
  cardType: PropTypes.string.isRequired,
  hideOrganizationLink: PropTypes.bool,
}

SynapseCards.defaultProps = {
  hideOrganizationLink: false,
}

export default SynapseCards
