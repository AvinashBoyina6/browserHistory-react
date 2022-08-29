import {Component} from 'react'

import './index.css'

import SearchList from '../SearchList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {
    searchInput: '',
    initialList: initialHistoryList,
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteBtn = id => {
    const {initialList} = this.state
    const updatedHistoryList = initialList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({initialList: updatedHistoryList})
  }

  render() {
    const {initialList, searchInput} = this.state

    const searchResults = initialList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let result

    if (searchResults.length !== 0) {
      result = true
    } else {
      result = false
    }

    return (
      <div className="bg">
        <nav className="history-nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-img"
            alt="app logo"
          />
          <div className="history-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="history search"
              className="search-img"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search History"
              onChange={this.onChange}
            />
          </div>
        </nav>
        <div className="cards-container">
          {result ? (
            <ul className="card-list">
              {searchResults.map(each => (
                <SearchList
                  key={each.id}
                  Items={each}
                  deleteBtn={this.deleteBtn}
                />
              ))}
            </ul>
          ) : (
            <h1 className="heading">There is no history to show</h1>
          )}
        </div>
      </div>
    )
  }
}
export default History
