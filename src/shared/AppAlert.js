import React from 'react';
// import { ToastContainer } from 'react-bootstrap';
import ToastBody from 'react-bootstrap/ToastBody'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from '../redux/actions/notification';
// import { clearMessage } from '../redux/reducers/notification';
import './AppAlert.css';


const AppAlert = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    console.log({notification})

    const clearError = () => {
        dispatch(clearMessage());
    }

    return (
        <>
            <MainAlert notification={notification} clearError={clearError} />
        </>
    );
}

export default AppAlert;

const MainAlert = ({ notification, clearError }) => {
    if (notification?.success) {
        toast.success(notification?.success)
    }
    if (notification?.warning) {
        toast.warn(notification?.warning)
    }
    if (notification?.error) {
        toast.error(notification?.error)
    }
    // if (notification.error) {
    //     toast.info(notification.error)
    // }

    // return <ToastContainer />
    return <ToastBody/>
}