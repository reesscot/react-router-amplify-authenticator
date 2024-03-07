import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


import { Loader } from '@aws-amplify/ui-react'

const MyPage = () => {
    const location = useLocation()
    const [showLoading, setLoading] = useState(true)
    console.log(showLoading, 'showLoading')

    useEffect(() => {
        console.log('MyPage useEffect')
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [location.pathname])


    return (
        <div>
            {showLoading && <Loader />}
            {!showLoading && (
                <p>not loading</p>
            )}
        </div>
    )
}

export default MyPage