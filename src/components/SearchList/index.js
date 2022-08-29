import './index.css'

const SearchList = props => {
  const {Items, deleteBtn} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = Items
  const delBtn = () => {
    deleteBtn(id)
  }
  return (
    <li className="list-card">
      <p className="paragraph">{timeAccessed}</p>
      <div className="container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="card">
          <div className="title-card">
            <p className="title-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            className="button"
            type="button"
            testid="delete"
            onClick={delBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default SearchList
