import React, { FC, Suspense, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import PrivateRoute from 'PrivateRoute'
import { router } from 'constants/router.root'
import { AuthContext } from 'context/auth'
import { getToken, setToken, removeToken } from 'services/caches'

import AppLayout from 'components/layout/AppLayout'
import CircleFullscreen from 'components/loader/CircleFullscreen'

const App: FC = () => {
  const existingToken = getToken()
  const [authToken, setAuthToken] = useState(existingToken)

  const handleSetToken = (token) => {
    setToken(token)
    setAuthToken(token)
  }

  const handleRemoveToken = () => {
    removeToken()
    setAuthToken('')
  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: handleSetToken, removeAuthToken: handleRemoveToken }}>
      <Router>
        <Switch>
          <AppLayout>
            <Suspense fallback={<CircleFullscreen />}>
              {router.map((route) => {
                if (route.path === '/login') {
                  return (
                    <Route key={route.path} path={route.path}>
                      {route.component}
                    </Route>
                  )
                } else {
                  return (
                    <PrivateRoute key={route.path} exact={route.exact || false} path={route.path}>
                      {route.component}
                    </PrivateRoute>
                  )
                }
              })}
            </Suspense>
          </AppLayout>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
