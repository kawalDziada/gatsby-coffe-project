import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => <React.Fragment>{children}</React.Fragment>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
