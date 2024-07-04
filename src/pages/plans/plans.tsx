// Import libraries
import {
  Typography,
  Divider,
  Checkbox,
  FormGroup,
  useTheme,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStars,
  faArrowUpFromBracket,
  faUserBountyHunter,
  faLockKeyhole,
  faEnvelope,
  faCircle,
  faCircleDot,
} from '@fortawesome/pro-regular-svg-icons';
import Grid from '@mui/material/Grid';

// Import components
import { Title } from './plans.styles';

const Plans = () => {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        spacing={4}
        style={{ maxWidth: 600, paddingBottom: 80 }}
      >
        <Grid item xs={12}>
          <Title>Workspace plans</Title>
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default Plans;
