import React, { useState } from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { IoIosSettings, IoIosAddCircle } from 'react-icons/io'
import { createStore, editStore } from '../store/actions/storeActions'
import { useDispatch } from 'react-redux'

const StoreName = styled.h2`
  font-size: 2rem;
  font-style: bold;
  font-weight: 400;
  color: #000000;
  padding-bottom: 2%;
`

const CardHolder = styled.div`
  height: 300px;
  width: 360px;
  margin: 5% 10%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #f3f3ff;
`

const Card = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-left: 20px;
  // margin-left: 10px;
  width: 360px;
  height: 280px;
  background-color: #000000;

  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 8px 2px #787878;

  .menu-active {
    display: block;
    background: red;
  }
`

const EditBtn = styled.button`
  height: 50px;
  width: 100px;
  color: #565656;
`

const ShareBtn = styled.button`
  height: 50px;
  width: 100px;
  color: #565656;
`

const DeleteBtn = styled.button`
  height: 50px;
  width: 100px;
  color: #565656;
`

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 10%;
  margin: 3%;
  cursor: pointer;
`

const MenuItems = styled.div`
  display: none;

  li {
    cursor: pointer;

    button {
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background: lightgray;
      }
    }
  }
`

export default function StoreData(data) {
  const dispatch = useDispatch()

  function deleteStore() {
    const bool = confirm(
      'Are you sure that you would like to delete your store?'
    )
    if (bool == true) {
      axiosWithAuth()
        .delete(`/store/${data.props.store_url}`)
        .then(() => {
          const newStores = data.allStores.filter(
            (store) => store.store_url !== data.props.store_url
          )
          data.setStore(newStores)
        })
        .catch((error) => {
        })
    } else {
      return null
    }
  }

  function updateStore(e) {
    dispatch(
      editStore({
        storeName: data.props.store_name,
        storeUrl: data.props.store_url,
      })
    )
    Router.push('/shopbuilder')
  }

  const [menuActive, setMenuActive] = useState(false)
  function DisplayMenuItems() {
    setMenuActive(!menuActive)
  }

  return (
    <CardHolder>
      <StoreName>
        {data.props.store_name}
        {/* We need to send them to already built store so user can edit*/}
      </StoreName>
      <Card>
        <Menu onClick={DisplayMenuItems}>
          <IoIosSettings size='4rem' color='#fff' />
          <MenuItems
            id='menu-items'
            className={menuActive ? 'menu-active' : ''}
          >
            <li>
              <EditBtn onClick={updateStore}>Edit</EditBtn>
            </li>
            <li>
              <ShareBtn>Share</ShareBtn>
            </li>
            <li>
              <DeleteBtn onClick={deleteStore}>Delete</DeleteBtn>
            </li>
          </MenuItems>
        </Menu>
      </Card>
    </CardHolder>
  )
}
