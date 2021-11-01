// Write your code here

import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="notification-content">{children}</div>
      <GrFormClose className="icon-close" />
    </div>
  )
}

export default Notification
