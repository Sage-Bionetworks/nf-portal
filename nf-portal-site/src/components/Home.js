import React from "react"
import PropTypes from "prop-types"
import Hero from "./Home-hero"
import ExploreContent from "./ExploreContent.jsx"
import NewCardContent from "./NewCardContent"

const Home = (props) => {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <div className="row">
          <ExploreContent token={props.token} />
          <NewCardContent
            url="Explore/Studies"
            name="New Studies"
            tableName="Studies"
          />

          <NewCardContent
            url="Explore/Publications"
            name="New Publications"
            tableName="Publications"
          />

          <NewCardContent
            url="Explore/Datasets"
            name="New Datasets"
            tableName="Datasets"
          />

          <NewCardContent
            url="Explore/Tools"
            name="Tools"
            tableName="Tools"
          />

          <NewCardContent
            url="Explore/Organization"
            tableName="Funders"
            name="organizations"
            hideViewAll
          />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Home
