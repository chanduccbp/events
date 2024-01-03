// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {regStatus} = props

  const renderRegStatus = () => {
    switch (regStatus) {
      case 'YET_TO_REGISTER':
        return (
          <div className="ytr">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="ytr-img"
            />
            <p>
              A live performance brings so much to your relationship with
              dance.Seeing dance live will totally make you fall in love with
              that art form.
            </p>
            <button type="button" className="ytr-butt">
              Register Here
            </button>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="reg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
              className="reg-img"
            />
            <h2>You have already registered for the event</h2>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="reg-c">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
              className="reg-c-img"
            />
            <h2>Registrations Are Closed Now!</h2>
            <p>Stay tuned. We will reopen</p>
          </div>
        )
      default:
        return (
          <p className="initial">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return <div className="reg-status">{renderRegStatus()}</div>
}

export default ActiveEventRegistrationDetails
