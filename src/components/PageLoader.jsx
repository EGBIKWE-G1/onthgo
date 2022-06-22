import React from 'react'
import Spinner from './../assets/img/Spinner.gif'
import loadingGif from './../assets/loader/loader.gif'


export default () => {
    console.log('I am page loadger')
    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* <img src={Spinner} /> */}
            <img src={loadingGif} />
        </div>
    )
}