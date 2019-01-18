import React from "react"
import PropTypes from "prop-types"

const getButtonClass = (activeButtonId, id) => {
  return `btn-control ${activeButtonId === id ? "active" : ""}`
}

const Selectors = ({ activeTableName, handleButtonPress }) => {
  return (
    <div className="selectors">
      <button
        className={getButtonClass(activeTableName, "Datasets")}
        type="button"
        onClick={() => handleButtonPress("Datasets")
        }
      >
        <h5>DATASETS</h5>
      </button>
      <button
        className={getButtonClass(activeTableName, "Files")}
        type="button"
        onClick={() => handleButtonPress("Files")
        }
      >
        <h5>FILES</h5>
      </button>
      <button
        className={getButtonClass(activeTableName, "Studies")}
        type="button"
        onClick={() => handleButtonPress("Studies")
        }
      >
        <h5>STUDIES</h5>
      </button>
      <button
        className={getButtonClass(activeTableName, "Publications")}
        type="button"
        onClick={() => handleButtonPress("Publications")
        }
      >
        <h5>PUBLICATIONS</h5>
      </button>
    </div>

  )
}

Selectors.propTypes = {
  handleButtonPress: PropTypes.func.isRequired,
  activeTableName: PropTypes.string.isRequired,
}

export default Selectors
