<<<<<<< HEAD
import React, { FC, Suspense, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import PrivateRoute from 'PrivateRoute'
import { router } from 'constants/router.root'
import { AuthContext } from 'context/auth'
import { getToken, setToken, removeToken } from 'services/caches'
=======
import React, { FC, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import { router } from 'constants/router.root'
>>>>>>> e1c6f20097641c7c3c1bdc0a54c7cb0bef4f5667

import AppLayout from 'components/layout/AppLayout'
import CircleFullscreen from 'components/loader/CircleFullscreen'

<<<<<<< HEAD
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

=======
const App: FC = () => (
  <Router>
    <Switch>
      <AppLayout>
        <Suspense fallback={<CircleFullscreen />}>
          {router.map((route) => (
            <Route key={route.path} exact={route.exact || false} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Suspense>
      </AppLayout>
    </Switch>
  </Router>
)

>>>>>>> e1c6f20097641c7c3c1bdc0a54c7cb0bef4f5667
export default App
