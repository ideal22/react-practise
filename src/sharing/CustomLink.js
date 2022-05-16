import { NavLink, useMatch } from 'react-router-dom'
function CustomLink({ children, to, ...props }) {
  const math = useMatch({
    path: to,
    end: to.length === 1,
  })
  const styles = { marginLeft: 10 }

  return (
    <NavLink
      to={to}
      {...props}
      style={() => ({
        ...styles,
        color: math ? 'chocolate' : 'white',
      })}
    >
      {children}
    </NavLink>
  )
}

export default CustomLink
