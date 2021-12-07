import PropTypes from 'prop-types'
import React from 'react'

function Header({text}) {
    return (
        <header>
            <div className="Container">
                <h1>{text}</h1>
            </div>

        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
}
Header.propTypes = {
    text: PropTypes.string
}
export default Header
