import React from 'react'

import './Loader.css'
import LoaderImg from '../../assets/img/loader.gif'

const Loader = ({ loading }) => {
    return (
        <div className={`loader-container ${!loading && 'hide'}`}>
            <div className="loader-asset">
                <img src={LoaderImg} />
            </div>
        </div>
    )
}

export default Loader