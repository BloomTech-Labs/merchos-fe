import React from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Container = styled.div`
position: absolute;
left: 12.19%;
right: 3.18%;
top: 7.51%;
bottom: -2.72%;

background: #E2EBFE;
box-shadow: -21.1979px -21.1979px 42.3958px #FFFFFF, 21.1979px 21.1979px 42.3958px rgba(170, 170, 204, 0.5), 10.599px 10.599px 21.1979px rgba(170, 170, 204, 0.25), -10.599px -10.599px 21.1979px rgba(255, 255, 255, 0.5);
border-radius: 75px 75px 0px 0px;

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
        <Container>
            <StoreName>
                ${data.props.store_name}
                {/* We need to send them to already built store so user can edit*/}
                <button className="edit-store" onClick={() => window.location = "/storebuilder"}
                />
                <button className="delete-store" onClick={deleteStore} >x</button>

            </StoreName>
        </Container>
    )
}
