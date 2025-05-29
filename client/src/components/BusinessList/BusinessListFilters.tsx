import { Box, Typography, styled } from '@mui/material';
import SelectInput from '../common/SelectInput';
import {
  NETFLIX_OFFICE_LABEL,
  NETFLIX_OFFICE_LOCATIONS,
  SORT_OPTIONS,
  SORT_LABEL_BY_VALUE,
} from '../../constants/businessFilters';
import type { YelpSortBy } from '../../types/yelp';
import { UI_TEXT } from '../../constants/common';

interface BusinessListFiltersProps {
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  sortBy: YelpSortBy;
  setSortBy: (value: YelpSortBy) => void;
}

const StyledFilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const StyledSortBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const BusinessListFilters = ({
  selectedLocation,
  setSelectedLocation,
  sortBy,
  setSortBy,
}: BusinessListFiltersProps) => {
  return (
    <StyledFilterContainer>
      <Box>
        <SelectInput
          fieldName={NETFLIX_OFFICE_LABEL}
          selectableOptions={NETFLIX_OFFICE_LOCATIONS}
          isMultiSelect={false}
          value={selectedLocation}
          onChange={(val) => setSelectedLocation(val as string)}
          uiVariant='filter'
        />
      </Box>

      <StyledSortBox>
        <Typography>{UI_TEXT.SORT_LABEL}</Typography>
        <SelectInput<YelpSortBy>
          fieldName=''
          selectableOptions={SORT_OPTIONS.map(
            (option) => option.value as YelpSortBy
          )}
          value={sortBy}
          onChange={(val) => setSortBy(val as YelpSortBy)}
          uiVariant='sort'
          labelMapper={(val) => SORT_LABEL_BY_VALUE[val]}
        />
      </StyledSortBox>
    </StyledFilterContainer>
  );
};

export default BusinessListFilters;
