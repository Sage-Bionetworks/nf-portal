import React from "react"
import PropTypes from "prop-types"

const NewPublications = (props) => {
  return (
    <section className="row new-publications">
      <div className="container">
        <div className="row">
          <h2>New Publications</h2>
        </div>
      </div>
    </section>
  )
}

NewPublications.propTypes = {
  token: PropTypes.string.isRequired,
}

export default NewPublications
