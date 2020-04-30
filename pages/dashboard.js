import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import navButtons from '../config/buttons'
import Navbar from '../components/Navbar'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Store from '../components/StoreData'
import styled from 'styled-components'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { createStore } from '../store/actions/storeActions'
import Router from 'next/router'

const Dashlayout = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding-bottom: 150px;
`

const Container = styled.div`
  width: 85%;
  padding-right: 3%;
  margin-right: 5%;
  background: #f3f3ff;
  box-shadow: inset -2px -2px 6px 2px #fff, inset 2px 2px 6px 2px #787878;
  border-radius: 75px 75px 75px 75px;
  padding-bottom: 150px;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding-top: 2%;
  color: #0047ff;
  text-decoration: underline;
`

const AddNewBtn = styled.button`
  height: 160px;
  width: 150px;
  margin-left: 20%;
  margin-top: 5%;
  border: solid #0047ff 3px;
  border-radius: 25px;
  background: #f3f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: "'Roboto', sans-serif";
  font-size: 2rem;
  cursor: pointer;
`

const StoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export default function dashboard() {
  const dispatch = useDispatch()

  const [store, setStore] = useState()

  // onclick function for add a store button
  function addStore(e) {
    dispatch(createStore())
    Router.push('/shopbuilder')
  }

  useEffect(() => {
    axiosWithAuth()
      .get('/store')
      .then((response) => setStore(response.data))
      .catch((error) => {})
  }, [])

  return (
    <div style={{ background: '#f3f3ff' }}>
      <Navbar />

      <Dashlayout>
        <SideBar navButtons={navButtons} />
        <Container>
          <Title>Stores:</Title>
          <StoresContainer>
            {!store
              ? null
              : store.map((data) => {
                  return (
                    <Store
                      key={data.id}
                      props={data}
                      setStore={setStore}
                      allStores={store}
                    />
                  )
                })}
            <AddNewBtn onClick={addStore}>
              <IoIosAddCircle cursor='pointer' size='4rem' color='#0047FF' />
              New Store
            </AddNewBtn>
          </StoresContainer>
        </Container>
      </Dashlayout>
    </div>
  )
}
