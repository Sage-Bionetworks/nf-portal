import React from "react"

const Hero = (props) => {
  return (
    <section className="row hero">
      <div className="container flex">
        <div className="row hero-message">
          <div className="col-sm-9">
            <h1>NF Data Portal: A knowledge portal specifically focused on NF data</h1>
            <p>
              This portal is intended to unite the results of experimental data
              collected across Neurofibromatosis Type 1, Neurofibromatosis Type
              2 and Schwannomatosis-related research. The goal is to help the
              research community more share and identify important discoveries
              about these diseases to help accelerate the development of new
              treatments.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-background" />
    </section>
  )
}

export default Hero
