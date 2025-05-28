import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
  styled,
} from '@mui/material';

import { TEST_IDS } from '../../constants/testIds';

interface MultiSelectInputProps {
  fieldName: string;
  selectableOptions: string[];
}

const StyledFormControlWrapper = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginRight: theme.spacing(1),
  minWidth: 100,
}));

const StyledSelect = styled(Select)(() => ({
  borderRadius: 50,
}));

const MultiSelectInput = ({
  fieldName,
  selectableOptions,
}: MultiSelectInputProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;

    const values = value as string;
    setSelectedOptions(typeof values === 'string' ? values.split(',') : values);
  };

  return (
    <Box>
      <StyledFormControlWrapper size='small'>
        <InputLabel id='fieldName'>{fieldName}</InputLabel>
        <StyledSelect
          data-testid={TEST_IDS.MULTI_SELECT.ROOT(fieldName)}
          id={`multiselect-${fieldName}`}
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label={fieldName} />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {selectableOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              data-testid={TEST_IDS.MULTI_SELECT.MENU_ITEM(fieldName, option)}
            >
              <Checkbox checked={selectedOptions.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </StyledSelect>
      </StyledFormControlWrapper>
    </Box>
  );
};

export default MultiSelectInput;
