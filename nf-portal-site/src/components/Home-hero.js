import React from "react"

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="hero-message">
        <h1>A home for Neurofibromatosis research resources</h1>
        <p>
          The NF Data Portal is a conduit for ongoing and published research activity related to Neurofibromatosis and Schwannomatosis. It contains data, analysis tools, and publications with the goal of accelerating the development of new treatments for NF.
          {" "}
          <a href="https://staging.nf.synapse.org/#/About">Learn more here.</a>
        </p>
      </div>
      <div className="hero-background" />
    </section>
  )
}

export default Hero
