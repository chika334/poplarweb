import { connect } from 'react-redux'
import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.token ? 
    <Component {...props} />
    :
    <Redirect to={{
        pathname: '/poplarpower/signin',
        state: {
          from: props.location
        }
      }}
    />
  )}
  />
)

const mapStateToProps = state => ({
  isAuthenticated: state.authUser.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateRoute)