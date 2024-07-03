import { Typography } from '@mui/material';

// Import components
import {
  ContactContainer,
  Container,
  SamlButtonContainer,
} from './saml.styles';

const Saml = () => {
  return (
    <Container>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        Create your free account
      </Typography>

      <ContactContainer>
        Contact your admin to get your Organization ID
      </ContactContainer>

      <SamlButtonContainer
        onClick={() => console.log('SAML SSO button clicked')}
      >
        Continue with SAML SSO
      </SamlButtonContainer>
    </Container>
  );
};

export default Saml;
