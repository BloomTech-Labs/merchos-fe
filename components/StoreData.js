import React from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const StoreCard = styled.div`

`
const StoreName = styled.h2`

`


export default function StoreData(data) {


    function deleteStore() {
        const bool = confirm("Are you sure that you would like to delete your store?")
        if (bool == true) {
            console.log(data.props.id)
            axiosWithAuth()
                .delete(`/store/${data.props.store_name}`)
                .catch(error => {
                    console.log(error)
                })

        } else {
            return null
        }


    }

    return (
        <StoreCard>
            <StoreName>
                ${data.props.store_name}
                {/* We need to send them to already built store so user can edit*/}
                <button className="edit-store" onClick={() => window.location = "/storebuilder"}
                />
                <button className="delete-store" onClick={deleteStore} >x</button>

            </StoreName>
        </StoreCard>
    )
}
