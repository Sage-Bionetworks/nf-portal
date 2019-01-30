import React from "react"
import { SynapseComponents, SynapseClient } from "synapse-react-client"

export default class LoginExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: "",
      showMarkdown: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
    // try to read in token
    SynapseClient.getSessionTokenFromCookie().then(
      (sessionToken) => {
        this.setState({ token: sessionToken })
      },
    ).catch((_err) => { console.log("no token from cookie could be fetched ", _err) })
  }

  /**
 * Updates internal state with the event that was triggered
 *
 * @param {*} event Form update
 */
  handleChange(newState) {
    this.setState(newState)
  }


  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState(
      {
        showMarkdown: true,
      },
    )
  }

  render() {
    const redirectUrl = "https://staging.nf.synapse.org/#/Login"
    // const redirectUrlLocal = "http://localhost:3000/#/Login"

    return (
      <div className="container" style={{ marginTop: "150px" }}>
        <SynapseComponents.Login
          onTokenChange={this.handleChange}
          theme="light"
          icon
          buttonText="Sign in with Google"
          authProvider="GOOGLE_OAUTH_2_0"
          redirectURL={redirectUrl}
        />
        <div>
          <a href="https://www.synapse.org/#!Synapse:syn17100797/wiki/587923"> Take me to Synapse with credentials!</a>
        </div>

        <div>
          <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>
            Load Markdown!
          </button>
        </div>

        {
          this.state.token
            && (
              <p>
                <strong>
                  {" "}
                    Token has been set from login component
                  {" "}
                </strong>
              </p>
            )
        }
        {this.state.showMarkdown
         && (
           <div>
             <SynapseComponents.Markdown
               token={this.state.token}
               wikiId="588330"
               ownerId="syn18105775"
             />
           </div>
         )}
      </div>
    )
  }
}
