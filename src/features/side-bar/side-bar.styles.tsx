// Import libraries
import {
  styled,
  Typography,
  Drawer,
  Link,
  type DrawerProps,
  type TypographyProps,
} from '@mui/material';

// Import types
import { TNavLink } from './side-bar.types';

export const SideBarContainer = styled(Drawer)<DrawerProps>(() => ({
  '& .MuiPaper-root': {
    width: 230,
    height: '100vh',
    borderRight: '1px solid #ebebeb',
    backgroundColor: '#f6f6f6',
    paddingTop: '80px',
  },
}));

export const SectionTitle = styled(Typography)<TypographyProps>(
  () => ({
    textTransform: 'capitalize',
    padding: '0 15px',
    fontSize: '12px',
    fontWeight: 700,
    margin: '15px 0 25px',
  })
);

export const NavLink = styled(Link)<TNavLink>(
  ({ disabled, isactivelink }) => ({
    padding: '0px 25px',
    marginBottom: '20px',
    color: disabled ? '#ddd' : 'black',
    fontSize: 14,
    fontWeight: isactivelink ? 700 : 'normal',
    borderLeft: isactivelink ? '3px solid #cc00ff' : 'none',
    pointerEvents: disabled ? 'none' : 'auto',
  })
);
