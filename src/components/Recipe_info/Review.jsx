import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="review">
            <div className="review-header">
                <div className="review-name">{review.name}</div>
                <div className="review-rating">{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</div>
            </div>
            <div className="review-comment">{review.comment}</div>
        </div>
    );
};

export default Review;
