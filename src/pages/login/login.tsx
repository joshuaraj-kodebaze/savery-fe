import MicrosoftIcon from '../../assets/icons/microsoft-icon.svg';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import GithubIcon from '../../assets/icons/github-icon.svg';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

// Import components
import {
  ButtonContainer,
  ButtonText,
  Container,
  TermsTextContainer,
  ContinueText,
  SamlButtonContainer,
} from './login.styles';

interface LoginButtonProps {
  icon: string;
  text: string;
}

const Login = () => {
  const navigate = useNavigate();

  const LoginButton = ({ icon, text }: LoginButtonProps) => {
    return (
      <ButtonContainer
        onClick={() => console.log(`${text} button clicked`)}
      >
        <img src={icon} style={{ height: 16, width: 16 }} />
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    );
  };
  return (
    <Container>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          fontFamily: 'Titillium Web',
          marginBottom: 4,
        }}
      >
        Create your free account
      </Typography>
      <LoginButton
        icon={MicrosoftIcon}
        text="Sign in with Microsoft"
      />
      <LoginButton icon={GoogleIcon} text="Sign in with Google" />
      <LoginButton icon={GithubIcon} text="Sign in with GitHub" />

      <TermsTextContainer>
        By clicking continue, you agree to our
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#152023', textDecoration: 'none' }}
        >
          {' '}
          Terms of Service{' '}
        </a>
        and
        <a
          href="/policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#152023', textDecoration: 'none' }}
        >
          {' '}
          Privacy Policy{' '}
        </a>
      </TermsTextContainer>

      <ContinueText>
        <Divider> or continue with</Divider>
      </ContinueText>

      <SamlButtonContainer
        onClick={() => {
          console.log('SAML SSO button clicked');
          navigate('/saml');
        }}
      >
        SAML SSO
      </SamlButtonContainer>
    </Container>
  );
};

export default Login;
