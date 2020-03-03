import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Store from '../components/Store'



export default function dashboard() {
    const [store, setStore] = useState()

    useEffect(() => {
        axiosWithAuth()
            .get('/store')
            .then(response => setStore(response.data))
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <Navbar />
            hello world
          <button className="create-store" onClick={() => window.location = "/storebuilder"} />
            {!store ? console.log(store) : store.map(data => { return <Store props={data} /> })}
        </div>
    )
}
