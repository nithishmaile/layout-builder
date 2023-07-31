// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickShowContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onClickShowLeftContent = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onClickShowRightContent = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="checkbox-controller-container">
            <h1>Layout</h1>
            <div>
              <input
                checked={showContent}
                type="checkbox"
                id="content"
                onChange={onClickShowContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="left navbar"
                onChange={onClickShowLeftContent}
              />
              <label htmlFor="content">Left Navbar</label>
            </div>
            <div>
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="right navbar"
                onChange={onClickShowRightContent}
              />
              <label htmlFor="content">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
