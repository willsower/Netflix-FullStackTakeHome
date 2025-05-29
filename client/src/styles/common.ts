import { Typography, styled } from '@mui/material';

export const BoldTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

export const LightTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '200',
  color: theme.palette.text.secondary,
}));
