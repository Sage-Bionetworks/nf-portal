import React from "react"
import PropTypes from "prop-types"
import Hero from "./Home-hero"
import NewPublications from "./NewPublications"
import NewStudies from "./NewStudies"
import NewDatasets from "./NewDatasets"
import ExploreContent from "./ExploreContent.jsx"
import Tools from "./Tools"
import Organizations from "./Organizations"

const Home = (props) => {
  return (
    <div className="home">
      <Hero />
      <ExploreContent token={props.token} />
      <NewStudies
        token={props.token}
        handleChanges={props.handleChanges}
        studies={props.studies}
      />
      <NewPublications token={props.token} publications={props.publications} />
      <NewDatasets token={props.token} datasets={props.datasets} />
      <Tools token={props.token} tools={props.tools} />
      <Organizations token={props.token} organizations={props.organizations} />
    </div>
  )
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
  studies: PropTypes.object.isRequired,
  publications: PropTypes.object.isRequired,
  datasets: PropTypes.object.isRequired,
  tools: PropTypes.object.isRequired,
  organizations: PropTypes.object.isRequired,
}

export default Home
