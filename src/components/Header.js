import PropTyps from 'prop-types'
import Button from './Button'
const Header = ({ title ,showAddTaskForm,showAdd }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd?'red':'green'}  text={showAdd?'Close':'Add'} onClick={showAddTaskForm}></Button>

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
