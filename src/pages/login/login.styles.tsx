// Import libraries
import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  flexDirection: 'column',
  gap: 12,
  fontFamily: 'Titillium Web',
}));

export const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  borderRadius: '100px',
  border: '1px solid #EBEBEB',
  backgroundColor: '#FFFFFF',
  padding: '9.5px, 24px, 9.5px, 24px',
  width: 327,
  height: 40,
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const ButtonText = styled('div')(() => ({
  fontWeight: 600,
  fontSize: 14,
  color: '#152023',
  marginLeft: 8,
}));

export const TermsTextContainer = styled('div')(() => ({
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

export const ContinueText = styled('div')(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: 10,
  width: 327,
  fontWeight: 400,
  fontSize: 14,
  color: '#767676',
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
