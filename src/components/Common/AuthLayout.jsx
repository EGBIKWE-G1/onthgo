import React, { Component, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { getCurrentUser, loginUser } from './../../redux/actions/auth'
import axios from '../../axios'
import { Route } from 'react-router-dom'

import CustomNavbar from '../CustomNavbar'    

const DashboardLayout = ({ children, ...rest }) => {
  return (
    <>
      <CustomNavbar />

      {children}
    </>
  )
}

const AuthLayout = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  console.log('env', process.env.NODE_ENV)

  const paramsMatch = window.location.href.match(/\?.+/)
  if (paramsMatch) {
    const params = new URLSearchParams(paramsMatch[0])
    const authToken = params.get('token')
    if (authToken) {
      // axios.Auth.logout()
      console.log('generatedToken', authToken)
      dispatch(loginUser({ authToken }))
      dispatch(getCurrentUser())
    }
  }

  if (axios.Auth.isAuth()) {
    return (
      <>
        <Route
          {...rest}
          render={(matchProps) => (
            <DashboardLayout>
              <Component {...matchProps} />
            </DashboardLayout>
          )}
        />
      </>
    )
  } else {
    return (window.location.href =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'woozeee.com?redirectTo=http://3.140.36.43:4991/')
  }
}

export default AuthLayout
