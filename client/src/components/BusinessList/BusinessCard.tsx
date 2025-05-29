import {
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { Launch, LocationPin } from '@mui/icons-material';

import RatingStars from '../common/RatingStars';
import { BoldTitle } from '../../styles/common';
import { metersToMiles } from '../../utils/common';
import type { YelpBusiness, YelpBusinessCategory } from '../../interfaces/yelp';

interface BusinessCardProps extends YelpBusiness {
  index: number;
}

const StyledCard = styled(Card)(() => ({
  width: '100%',
  maxWidth: 700, 
}));

const Image = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: 150,
  height: 150,
  objectFit: 'cover',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 200,
    marginBottom: theme.spacing(2),
  },
}));

export const RatingValue = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: 15,
}));

export const ReviewText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 14,
}));

export const Row = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
}));

const StyledLocationPinIcon = styled(LocationPin)(() => ({
  fontSize: 15,
}));

const StyledExternalLinkIcon = styled(Launch)(() => ({
  fontSize: 15,
}));

const BusinessCard = ({
  index,
  name,
  rating,
  reviewCount,
  price,
  distance,
  imageUrl,
  websiteUrl,
  categories,
}: BusinessCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          <Image src={imageUrl} alt={`Image of ${name}`} />

          <Stack spacing={1} flex={1}>
            <BoldTitle variant='h6'>{`${index}. ${name}`}</BoldTitle>

            <Row>
              <RatingStars rating={rating} />
              <RatingValue>{rating}</RatingValue>
              <ReviewText>({reviewCount} reviews)</ReviewText>
              {price && <Typography variant='caption'>{price}</Typography>}
            </Row>

            <Row>
              <StyledLocationPinIcon />
              <Typography>{metersToMiles(distance)} miles away</Typography>
              <IconButton href={websiteUrl} target='_blank'>
                <StyledExternalLinkIcon />
              </IconButton>
            </Row>

            <Stack direction='row' spacing={1} flexWrap='wrap'>
              {categories.map((category: YelpBusinessCategory) => (
                <Chip key={category.alias} label={category.title} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default BusinessCard;
