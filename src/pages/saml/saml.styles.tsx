// Import libraries
import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  marginLeft: 0,
  flexDirection: 'column',
  gap: 12,
  fontFamily: 'Titillium Web',
}));

export const ContactContainer = styled('div')(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  width: 327,
  marginTop: 10,
  marginBottom: 10,
  fontWeight: 400,
  fontSize: 12,
  lineHeight: '18px',
  color: '#767676',
  textAlign: 'center',
}));

export const SamlButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  gap: 10,
  width: 327,
  marginTop: 15,
  height: 40,
  backgroundColor: '#152023',
  borderRadius: 100,
  fontWeight: 600,
  fontSize: 14,
  color: '#FFFFFF',
  cursor: 'pointer',
}));
