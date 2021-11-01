// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotification = () => {
  const renderWarning = () => (
    <Notification>
      <MdWarning className="icon-warning" />
      <div className="message-container">
        <h1 className="heading-warning">Warning</h1>
        <p className="discription">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="icon-error" />
      <div className="message-container">
        <h1 className="heading-error">Error</h1>
        <p className="discription">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <MdInfo className="icon-info" />
      <div className="message-container">
        <h1 className="heading-info">Info</h1>
        <p className="discription">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="icon-success" />
      <div className="message-container">
        <h1 className="heading-success">Success</h1>
        <p className="discription">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )
  return (
    <div className="alert-container">
      <div className="al-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccess()}
        {renderError()}
        {renderWarning()}
        {renderInfo()}
      </div>
    </div>
  )
}
export default AlertNotification
