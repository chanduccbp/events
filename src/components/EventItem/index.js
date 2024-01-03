// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, onClickEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickingEvent = () => {
    onClickEvent(id)
  }

  const buttClass = isActive ? 'aButt' : 'butt'

  return (
    <li className="e-card">
      <button onClick={onClickingEvent} className={buttClass} type="button">
        <img src={imageUrl} alt="event" className="e-img" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
