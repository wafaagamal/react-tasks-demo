import PropTyps from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom"

const Header = ({ title ,showAddTaskForm,showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
     { location.pathname ==='/' && <Button color={showAdd?'red':'green'}  text={showAdd?'Close':'Add'} onClick={showAddTaskForm}></Button>
     }
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}


Header.propTyps = {
  title: PropTyps.string.isRequired
}

export default Header
