import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

// actions
import { saveStore } from '../../store/actions/shopServerConnection/shopServerConnection'
import { closeStoreMetaEditor } from '../../store/actions/userInterface/storeMetaInterface'

const FormWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Form = styled.form``

const StoreMetadataForm = () => {
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

  if (modalData.interfaceActive) {
    return (
      <FormWrapper>
        <button type='button' onClick={closeModal}>
          X
        </button>
        <Form>
          <div>
            <label htmlFor='store_name'>Store Name:</label>
            <input
              type='text'
              name='store_name'
              onChange={changeHandler}
              value={storeName}
            />
          </div>
          <div>
            <label htmlFor='store_url'>Store URL:</label>
            <input
              type='text'
              name='store_url'
              onChange={changeHandler}
              value={!storeUrl ? generatedUrl : storeUrl}
            />
          </div>
          <button type='button'>Submit</button>
        </Form>
      </FormWrapper>
    )
  }

  return null
}

export default StoreMetadataForm
