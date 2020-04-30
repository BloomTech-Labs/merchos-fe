import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ToastList = styled.ul`
  position: fixed;
  right: 15px;
  top: 125px;
  font-size: 2rem;

  li {
    transition: 0.2s;
    background: gray;
    padding: 10px 20px;
    margin: 20px 0px;
    border-radius: 5px;
    color: white;
    animation: 1s fade;
  }

  @keyframes fade {
    0% {
      opacity: 0.0;
    }

    100% {
      opacity: 1.0;
    }
  }
`;

const Toasts = () => {
  const toasts = useSelector((state) => state.toastController.toasts);
  if (toasts.length > 0) {
    return (
      <ToastList>
        {toasts.length > 0 &&
          toasts.map((toast) => (
            <li key={toast.id}>
              <p>{toast.message}</p>
            </li>
          ))}
      </ToastList>
    );
  } else {
    return null;
  }
};

export default Toasts;
