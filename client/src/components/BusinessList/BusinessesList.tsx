import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import BusinessCard from './BusinessCard';
import BusinessListFilters from './BusinessListFilters';
import { DEFAULT_SEARCH_KEY_BOBA } from '../../constants/defaults';
import { BoldTitle, LightTitle } from '../../styles/common';
import { useBusinesses } from '../../hooks/useBusinesses';
import { type YelpSortBy } from '../../types/yelp';
import {
  NETFLIX_OFFICE_LOCATIONS,
  SORT_OPTIONS,
} from '../../constants/businessFilters';
import { UI_TEXT } from '../../constants/common';

const StyledStickyFiltersWrapper = styled(Stack)(({ theme }) => ({
  position: 'sticky',
  top: 60, // Size of the appbar/toolbar we have
  zIndex: 1000,
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.text.secondary}`,
}));

const BusinessesList = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    NETFLIX_OFFICE_LOCATIONS[0]
  );
  const [sortBy, setSortBy] = useState<YelpSortBy>(SORT_OPTIONS[0].value);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchKey, setSearchKey] = useState<string>(DEFAULT_SEARCH_KEY_BOBA);

  const {
    data: businesses,
    loadMore,
    loading,
    hasMore,
    error,
    total,
  } = useBusinesses({ location: selectedLocation, sortBy });

  return (
    <Container sx={{ my: 3 }}>
      <StyledStickyFiltersWrapper spacing={2}>
        <Box>
          <BoldTitle variant='h5'>
            "{searchKey}" restaurants near {selectedLocation}
          </BoldTitle>
          <LightTitle variant='caption'>
            {total ? total : 0} - {UI_TEXT.DISCLAIMER_QUERY_LIMIT}
          </LightTitle>
        </Box>

        <BusinessListFilters
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </StyledStickyFiltersWrapper>

      <Box px={1}>
        {error && <Typography color='error'>{error.message}</Typography>}

        <List>
          {businesses.map((business, idx) => (
            <ListItem key={business.id} sx={{ paddingLeft: 0 }}>
              <BusinessCard index={idx + 1} {...business} />
            </ListItem>
          ))}
        </List>

        {hasMore && (
          <Button
            variant='contained'
            onClick={loadMore}
            disabled={loading || !hasMore}
          >
            {loading ? UI_TEXT.LOADING : UI_TEXT.LOAD_MORE}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default BusinessesList;
