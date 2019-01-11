import React from "react"
import PropTypes from "prop-types"

const getButtonClass = (activeButtonId, id) => {
  return `btn-control ${activeButtonId === id ? "active" : ""}`
}

const Selectors = ({ activeSynapseTableName, handleButtonPress }) => {
  return (
    <div className="selectors">
      <button
        className={getButtonClass(activeSynapseTableName, "datasets")}
        type="button"
        onClick={() => handleButtonPress("datasets")
        }
      >
        <h5>DATASETS</h5>
      </button>
      <button
        className={getButtonClass(activeSynapseTableName, "files")}
        type="button"
        onClick={() => handleButtonPress("files")
        }
      >
        <h5>FILES</h5>
      </button>
      <button
        className={getButtonClass(activeSynapseTableName, "studies")}
        type="button"
        onClick={() => handleButtonPress("studies")
        }
      >
        <h5>STUDIES</h5>
      </button>
      <button
        className={getButtonClass(activeSynapseTableName, "publications")}
        type="button"
        onClick={() => handleButtonPress("publications")
        }
      >
        <h5>PUBLICATIONS</h5>
      </button>
    </div>

  )
}

Selectors.propTypes = {
  handleButtonPress: PropTypes.func.isRequired,
  activeSynapseTableName: PropTypes.string.isRequired,
}

export default Selectors
