import React from "react"
import PropTypes from "prop-types"
import Hero from "./Home-hero"
import ExploreContent from "./ExploreContent.jsx"
import NewCardContent from "./NewCardContent"

const Home = (props) => {
  return (
    <div className="home">
      <Hero />
      <ExploreContent token={props.token} />

      <NewCardContent
        token={props.token}
        url="Explore/Studies"
        name="Studies"
        tableName="studies"
      />

      <NewCardContent
        token={props.token}
        url="Explore/Publications"
        name="Publications"
        tableName="publications"
      />

      <NewCardContent
        token={props.token}
        url="Explore/Datasets"
        name="Studies"
        tableName="studies"
      />

      <NewCardContent
        token={props.token}
        url="Explore/Publications"
        tableName="publications"
      />

      <NewCardContent
        token={props.token}
        url="Explore/Tools"
        tableName="tools"
      />

      <NewCardContent
        token={props.token}
        url="Explore/Organization"
        tableName="funders"
        hideViewAll
      />
    </div>
  )
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Home
