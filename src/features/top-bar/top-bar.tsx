// Import libraries
import { Box } from '@mui/material';

// Import components
import { HeaderContainer } from './top-bar.styles';
import Logo from 'components/logo/logo';

const TopBar = () => {
  return (
    <HeaderContainer>
      <Box
        component={'div'}
        style={{ width: 200, borderRight: '1px solid #ebebeb' }}
      ></Box>
      <Box
        component={'div'}
        style={{
          width: 'calc(100% - 250px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: ' center',
          padding: '0 25px',
          backgroundColor: '#fff',
        }}
      >
        test <Logo />
      </Box>
    </HeaderContainer>
  );
};

export default TopBar;
