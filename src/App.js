
import React from 'react'
import { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AuthLayout from './components/Common/AuthLayout';
import Loader from './components/Loader/index';
import Loading from './components/Loader/Loading';
import PageLoader from './components/PageLoader';
import "./App.css";
import AppAlert from './shared/AppAlert';

import { getCurrentUser } from './redux/actions/auth'

const FlightPaymentPage = React.lazy(() => import('./pages/Payment/Payment'))
const FlightInsurancePage = React.lazy(() => import('./pages/FlightInsurancePage'))
const FlightSearchPage = React.lazy(() => import('./pages/FlightSearchPage'));
const OnTheGoPage = React.lazy(() => import('./pages/OnTheGoPage'));
const Success = React.lazy(() => import('./pages/success/SuccessPage'));
// import FlightPaymentPage from './pages/FlightPaymentPage'
// import FlightInsurancePage from './pages/FlightInsurancePage'
// import FlightSearchPage from './pages/FlightSearchPage'
// import OnTheGoPage from './pages/OnTheGoPage'

const token = localStorage.authToken;

function App() {
  const searching = useSelector(state => state.flight.searching)
  const loading = useSelector(state => state.flight.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      console.log('token here')
      dispatch(getCurrentUser())
    }
  }, [token])

  return (

    <>
      <Suspense fallback={<PageLoader />}>
        <AppAlert/>
        <Switch>
          <AuthLayout path='/' exact component={OnTheGoPage} />
          <AuthLayout exact path='/flightsearch' component={FlightSearchPage} />
          <AuthLayout exact path='/success' component={Success} />
          <AuthLayout exact path="/flightinsurance" component={FlightInsurancePage} />
          <AuthLayout exact path="/flightpayment" component={FlightPaymentPage} />
        </Switch>

      </Suspense>
      <Loading loading={searching} />
    </>

  );
}

export default App;
