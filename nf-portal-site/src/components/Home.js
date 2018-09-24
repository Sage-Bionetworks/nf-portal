import React from "react"
import PropTypes from "prop-types"
import NewPublications from "./Home-newPublications"
import NewStudies from "./Home-newStudies"
import NewDatasets from "./Home-newDatasets"
import ExploreContent from "./Home-exploreContent"
import Tools from "./Home-tools"
import Organizations from "./Home-organizations"

const Home = (props) => {
  return (
    <div>
      <section className="row home-hero center-xs middle-xs">
        <div className="col-xs-12">
          <div className="row">
            <h2>Home</h2>
          </div>
        </div>
      </section>

      <ExploreContent />
      <NewStudies />
      <NewPublications />
      <NewDatasets />
      <Tools />
      <Organizations />
    </div>
  )
}

Home.propTypes = {}

export default Home
