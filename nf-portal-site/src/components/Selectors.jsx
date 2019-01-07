import React from "react"
import PropTypes from "prop-types"

const getButtonClass = (activeButtonId, id) => {
  return `btn-control ${activeButtonId === id ? "active" : ""}`
}

const Selectors = ({ activeButtonId, handleButtonPress }) => {
  return (
    <div className="selectors">
      <button
        className={getButtonClass(activeButtonId, "syn16858699")}
        type="button"
        onClick={() => handleButtonPress("syn16858699")
        }
      >
        <h5>FUNDERS</h5>
      </button>
      <button
        className={getButtonClass(activeButtonId, "syn16859580")}
        type="button"
        onClick={() => handleButtonPress("syn16859580")
        }
      >
        <h5>DATASETS</h5>
      </button>
      <button
        className={getButtonClass(activeButtonId, "syn16858331")}
        type="button"
        onClick={() => handleButtonPress("syn16858331")
        }
      >
        <h5>FILES</h5>
      </button>
      <button
        className={getButtonClass(activeButtonId, "syn16787123")}
        type="button"
        onClick={() => handleButtonPress("syn16787123")
        }
      >
        <h5>STUDIES</h5>
      </button>
      <button
        className={getButtonClass(activeButtonId, "syn16858699")}
        type="button"
        onClick={() => handleButtonPress("")
        }
      >
        <h5>ANALYSIS</h5>
      </button>
      <button
        className={getButtonClass(activeButtonId, "syn16857542")}
        type="button"
        onClick={() => handleButtonPress("syn16857542")
        }
      >
        <h5>PUBLICATIONS</h5>
      </button>
    </div>

  )
}

Selectors.propTypes = {
  handleButtonPress: PropTypes.func.isRequired,
  activeButtonId: PropTypes.string.isRequired,
}

export default Selectors
