import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from 'context/auth'

const Logout: FC = () => {
  const history = useHistory()
  const { removeAuthToken } = useAuth()

  useEffect(() => {
    setTimeout(() => {
      removeAuthToken()
      history.push('/login')
    }, 1000)
  }, [])

  return (
    <div className="container-center">
      <p>Logging out...</p>
    </div>
  )
}

export default Logout
