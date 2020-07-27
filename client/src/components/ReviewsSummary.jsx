import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component'

// import PreviewEntry from './PreviewEntry.jsx'
const PreviewEntry = loadable(() => import('./PreviewEntry.jsx'));

const ReviewSummaryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin: 0 auto;
`
const ReviewsSummary = (props) => {
  const { reviews } = props;

  return (
    <ReviewSummaryStyle>
      {reviews.map((review, idx) => (
        <div key={`${review.date}${idx}`}>
          <PreviewEntry review={review} idx={idx}/>
        </div>
      ))}   
    </ReviewSummaryStyle>
  )
}

export default ReviewsSummary;
