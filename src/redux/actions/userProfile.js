import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import { UPDATE_NAME, UPDATE_USER_INFO } from './types';



const toastrOptions = {
  timeOut: 6000, 
  showCloseButton: true, 
}

// handle password update
export const handleUpdatePassword = (passwordObject) => async (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token
  const url = 'https://scalable-commerce-backend.herokuapp.com/api/v1/userPassword'
  const config = {
    method: 'put',
    url: url,
    headers: { 
      'x-access-token': accessToken,
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(passwordObject)
  };

  try {
    const response = await axios(config)
    if (response.status === 200) {
      const { data: {message}} = response;
      if (message === 'User password updated successfully') {
        toastr.success('', 'password has been updated successfully', toastrOptions)
        return 'done'
      }
    }
  } catch (error) {
    console.error(error)
    toastr.error('Your current password is incorrect', toastrOptions)
  }
}


export const handleUpdateemail = async (emailObject, accessToken) => {
  const url = 'https://scalable-commerce-backend.herokuapp.com/api/v1/userEmail'
  const config = {
    method: 'put',
    url: url,
    headers: { 
      'x-access-token': accessToken,
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(emailObject)
  };

  try {
    const response = await axios(config)
    console.log(response)
    if (response.status === 200) {
      const { data: {message}} = response;
      if (message === 'User email updated successfully') {
        console.log(response)
        return response.data
      }
    }
  } catch (error) {
    console.error(error)
    return error
  }
}

// handle firstname and lastname update only
export const handleOnlyNameUpdate = (nameObject) => async (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token
  const url = 'https://scalable-commerce-backend.herokuapp.com/api/v1/users'
  const config = {
    method: 'put',
    url: url,
    headers: { 
      'x-access-token': accessToken,
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(nameObject)
  };

  try {
    const response = await axios(config)
    console.log(response)
    if (response.status === 200) {
      const { data: {message}} = response;
      if (message === 'User updated successfully') {
        dispatch({
          type: UPDATE_NAME,
          payload: nameObject
        })
        toastr.success('', 'Your name has been updated', toastrOptions)
        return 'done'
      }
    }
  } catch (error) {
    console.error(error)
    toastr.error('An error has occurred', toastrOptions)
  }
}

// handle firstname and lastname update 
export const handleNameUpdate = async (nameObject, accessToken) => {
  const url = 'https://scalable-commerce-backend.herokuapp.com/api/v1/users'
  const config = {
    method: 'put',
    url: url,
    headers: { 
      'x-access-token': accessToken,
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(nameObject)
  };

  try {
    const response = await axios(config)
    console.log(response)
    if (response.status === 200) {
      const { data: {message}} = response;
      if (message === 'User updated successfully') {
        return response.data
      }
    }
  } catch (error) {
    console.error(error)
    alert('error reveived')
    return error;
  }
}



export const handleProfileUpdate = (profileObject) => (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token
  const { firstName, lastName, email} = profileObject

  return Promise.all([handleNameUpdate({firstName, lastName}, accessToken), handleUpdateemail({email}, accessToken)])
    .then(res => {
      if (res[0].message === 'User updated successfully' && res[1].message === 'User email updated successfully') {
        toastr.success('', 'Your profile has been updated successfully', toastrOptions)
        dispatch({
          type: UPDATE_USER_INFO,
          payload: {
            firstName, 
            lastName,
            email
          }
        })
        return 'done';
      } else {
        toastr.error('This email is already in use', toastrOptions)
        return;
      }
    })
    .catch(error => {
      console.log(error)
      toastr.error('An error occured', toastrOptions)
    })
}