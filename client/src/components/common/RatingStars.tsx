import { Rating } from '@mui/material';

interface RatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  return <Rating name='rating' value={rating} precision={0.25} readOnly />;
};

export default RatingStars;
