import './index.css'

const BrowserHistory = props => {
  const {history, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history
  onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-card-container">
      <p className="time">{timeAccessed}</p>
      <div className="hist-container">
        <img src={logoUrl} alt="pic" />
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <p className="url">{domainUrl}</p>
        </div>
        <button className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
