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

interface SelectInputProps {
  fieldName: string;
  selectableOptions: string[];
  isMultiSelect?: boolean;
}

const StyledFormControlWrapper = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginRight: theme.spacing(1),
  minWidth: 150,
}));

const StyledSelect = styled(Select)(() => ({
  borderRadius: 50,
}));

const SelectInput = ({
  fieldName,
  selectableOptions,
  isMultiSelect = false,
}: SelectInputProps) => {
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
          data-testid={TEST_IDS.SELECT_INPUT.ROOT(fieldName)}
          id={`select-${fieldName}`}
          multiple={isMultiSelect}
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label={fieldName} />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {selectableOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              data-testid={TEST_IDS.SELECT_INPUT.MENU_ITEM(fieldName, option)}
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

export default SelectInput;
