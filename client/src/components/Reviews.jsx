import React from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'

import { Wrapper, ModalButton, MainOverviewWrapper, MainOverviewText} from './styles/staticStyles.style';
import { FaStar } from "react-icons/fa";

// import ReviewsSummary from './ReviewsSummary.jsx'
// import PreviewRating from './PreviewRating.jsx'
// import Modal from './Modal.jsx'

const ReviewsSummary = loadable(() => import('./ReviewsSummary.jsx'));
const PreviewRating = loadable(() => import('./PreviewRating.jsx'));
const Modal = loadable(() => import('./Modal.jsx'));

const Reviews = (props) => {
  const { data, modalOpen } = props;
  const { reviews, ...rest } = data;

  return (
    <Wrapper>
      <Modal overview={rest} reviews={reviews} modalOpen={modalOpen} />
      <MainOverviewWrapper><FaStar size='1em' color='#FF585D'/><MainOverviewText>{rest.avg} ({rest.reviewSize} reviews)</MainOverviewText></MainOverviewWrapper>
      <PreviewRating overview={rest} />
      <ReviewsSummary reviews={reviews.slice(0, 6)} />
      <Link to='/reviews'><ModalButton> Show all {rest.reviewSize} reviews</ModalButton></Link>
    </Wrapper>
  )
}

Reviews.defaultProps = {modalOpen: false};

export default Reviews;
