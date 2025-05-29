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

import { type SelectUiVariant } from '../../types/common';
import { TEST_IDS } from '../../constants/testIds';

interface SelectInputProps<T extends string> {
  fieldName: string;
  selectableOptions: T[];
  onChange: (value: T | T[]) => void;
  value: T | T[];
  displayCheckBox?: boolean;
  isMultiSelect?: boolean;
  labelMapper?: (val: T) => string;
  uiVariant?: SelectUiVariant;
}

const StyledFormControlWrapper = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== 'uiVariant',
})<{ uiVariant: SelectUiVariant }>(({ theme, uiVariant }) => {
  const baseStyles = {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
  };

  const variantStyles = {
    filter: {
      minWidth: 150,
    },
    sort: {},
  };

  const variantStyle =
    uiVariant === 'filter' ? variantStyles.filter : variantStyles.sort;

  return { ...baseStyles, ...variantStyle };
});

const StyledSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ uiVariant: SelectUiVariant }>(({ uiVariant }) => {
  const variantStyles = {
    filter: {
      borderRadius: 50,
    },
    sort: {
      border: 'none',
      fontSize: 15,
      fontWeight: 600,
      padding: 0,
      '& fieldset': {
        border: 'none',
      },
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      },
    },
  };

  const styles =
    uiVariant === 'filter' ? variantStyles.filter : variantStyles.sort;

  return {
    ...styles,
  };
});

const SelectInput = <T extends string>({
  fieldName,
  selectableOptions,
  onChange,
  value,
  displayCheckBox = false,
  isMultiSelect = false,
  labelMapper,
  uiVariant = 'filter',
}: SelectInputProps<T>) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;

    if (isMultiSelect) {
      onChange(value as T[]);
    } else {
      onChange(value as T);
    }
  };

  return (
    <Box>
      <StyledFormControlWrapper size='small' uiVariant={uiVariant}>
        {uiVariant == 'filter' && (
          <InputLabel id={`input-${fieldName}`}>{fieldName}</InputLabel>
        )}
        <StyledSelect
          data-testid={TEST_IDS.SELECT_INPUT.ROOT(fieldName)}
          id={`select-${fieldName}`}
          uiVariant={uiVariant}
          multiple={isMultiSelect}
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={fieldName} />}
          renderValue={(selected) => {
            if (Array.isArray(selected)) {
              return selected
                .map((val) => labelMapper?.(val) ?? val)
                .join(', ');
            }
            return labelMapper?.(selected as T) ?? (selected as T);
          }}
        >
          {selectableOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              data-testid={TEST_IDS.SELECT_INPUT.MENU_ITEM(fieldName, option)}
            >
              {displayCheckBox && (
                <Checkbox
                  checked={
                    Array.isArray(value)
                      ? value.includes(option)
                      : value === option
                  }
                />
              )}
              <ListItemText primary={labelMapper?.(option) ?? option} />
            </MenuItem>
          ))}
        </StyledSelect>
      </StyledFormControlWrapper>
    </Box>
  );
};

export default SelectInput;
