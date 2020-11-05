import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './context/auth'

interface Props {
  children: JSX.Element
  path: string
  exact?: boolean
}

const PrivateRoute: FC<Props> = ({ children, path, exact }): JSX.Element => {
  const { authToken } = useAuth()
  return authToken ? (
    <Route path={path} exact={exact || false}>
      {children}
    </Route>
  ) : (
    <Redirect to="/login" />
  )
}

export default PrivateRoute
