import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

// actions
import { saveStore } from '../../store/actions/shopServerConnection/shopServerConnection'
import { closeStoreMetaEditor } from '../../store/actions/userInterface/storeMetaInterface'

const FormWrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 15px 25px 15px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  color: #82daff;
`

const CloseButton = styled.button`
  background: transparent;
  position: absolute;
  color: #82daff;
  font-size: 2rem;
  top: 5px;
  right: 5px;
  cursor: pointer;
  transition: 0.2s;
  padding: 2px 4px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px;
  font-size: 2.25rem;

  label {
    padding-top: 15px;
    padding-bottom: 5px;
  }

  input {
    font-size: 2.5rem;
    padding: 5px 15px 3px;
    border-radius: 10px;
    border: 1.75px solid #9be1ff;

    &:focus {
      outline: none;
    }
  }
`

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 2rem;
  margin: 15px 0px 10px;
  cursor: pointer;
  border-radius: 10px;
  background: #82daff;
  border: none;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const Errors = styled.p`
  text-align: center;
  padding: 15px 0px 0px;
  font-size: 2rem;
  color: red;
`

const StoreMetadataForm = (props) => {
  const modalData = useSelector((state) => state.storeMetaInterface)
  const dispatch = useDispatch()

  const [storeName, setStoreName] = useState('')
  const [storeUrl, setStoreUrl] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')

  const changeHandler = (e) => {
    if (e.target.name === 'store_name') {
      setStoreName(e.target.value)
    }

    if (e.target.name === 'store_url') {
      setStoreUrl(e.target.value)
      setGeneratedUrl(e.target.value)
    }
  }

  const closeModal = () => {
    dispatch(closeStoreMetaEditor())
  }

  const genUrl = (name) => name.toLowerCase().replace(/[^a-z0-9_]/gi, '')

  // generate url using store name
  useEffect(() => {
    setGeneratedUrl(genUrl(storeName))
  }, [storeName])

  const clickHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveStore({
        ...props.workspace,
        storeName,
        storeUrl: !storeUrl ? generatedUrl : storeUrl,
      })
    )
  }

  if (modalData.interfaceActive) {
    return (
      <FormWrapper>
        <CloseButton type='button' onClick={closeModal}>
          X
        </CloseButton>
        <Form>
          <InputWrapper>
            <label htmlFor='store_name'>Store Name:</label>
            <input
              type='text'
              name='store_name'
              onChange={changeHandler}
              value={storeName}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor='store_url'>Store URL:</label>
            <input
              type='text'
              name='store_url'
              onChange={changeHandler}
              value={!storeUrl ? generatedUrl : storeUrl}
            />
          </InputWrapper>
          {modalData.errors && modalData.errors !== '' && (
            <Errors>{modalData.errors}</Errors>
          )}
          <SubmitButton type='submit' onClick={clickHandler}>
            Submit
          </SubmitButton>
        </Form>
      </FormWrapper>
    )
  }

  return null
}

export default StoreMetadataForm
