import React from 'react';
import styled from 'styled-components';

import AllReviews from './AllReviews.jsx';
import Rating from './Rating.jsx'

const ModalWrapper = styled.div`
  width: 800px;
  maxWidth: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  zIndex: 999;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`

const ExitButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  border: 1px solid black;
  background-color: white;
`

const ReviewsWrapper = styled.div`
  display: flex
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <ModalWrapper>
        <ExitButton>X</ExitButton>
        <ReviewsWrapper>
          <Rating />
          <AllReviews />
        </ReviewsWrapper>
      </ModalWrapper>
    )
  }
}

export default Modal;