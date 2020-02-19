import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">INICIO</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/escuela">AGRICULTURA</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/escuela">ESCUELA</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/escuela">INDUSTRIA</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/escuela">COMUNICACIONES</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/escuela">INVESTIGACIÓN</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/escuela">NATURALEZA</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
