// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <ul className="left-navbar-menu-container">
              <h1 className="left-navbar-menu-heading">Left Navbar Menu</h1>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-navbar-menu-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                eiusmod tempor incididuct at labore et dolore magna aliqua.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-menu-container">
              <h1 className="left-navbar-menu-heading">Right Navbar</h1>
              <div className="ad-container">
                <p>Ad 1</p>
              </div>
              <div className="ad-container">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
