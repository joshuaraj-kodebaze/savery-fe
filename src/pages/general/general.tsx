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
import {
  CustomFormControlLabel,
  InputLabel,
  Title,
  UserAvatar,
  UploadButtonContainer,
} from './general.styles';

const UserProps = {
  name: 'Neal Drasback',
};

const General = () => {
  const theme = useTheme();

  const TempInputField = () => {
    return (
      <input
        style={{
          height: 32,
          width: '100%',
          border: `1px solid ${theme.palette.divider}`,
        }}
      ></input>
    );
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        style={{ maxWidth: 600, paddingBottom: 80 }}
      >
        <Grid item xs={12}>
          <div style={{ display: 'flex' }}>
            <FontAwesomeIcon
              icon={faStars}
              style={{ fontSize: 14 }}
            />{' '}
            <Title>Workspace</Title>
          </div>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Workspace name</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '12px',
              marginBottom: '10px',
            }}
          >
            You can upload images up to 256x256
          </Typography>
          <div style={{ display: 'flex', gap: 10 }}>
            <UserAvatar>{UserProps.name.charAt(0)}</UserAvatar>
            <UploadButtonContainer>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                style={{ fontSize: 12 }}
              />{' '}
              <Typography
                sx={{
                  fontSize: '12px',
                  marginLeft: '5px',
                  marginTop: '-2px',
                  fontWeight: 600,
                  color: theme.palette.common.white,
                }}
              >
                Upload
              </Typography>
            </UploadButtonContainer>
          </div>
        </Grid>

        {/* Account info */}
        <Grid item xs={12}>
          <Divider />
          <div style={{ display: 'flex', marginTop: 30 }}>
            <FontAwesomeIcon
              icon={faUserBountyHunter}
              style={{ fontSize: 14 }}
            />{' '}
            <Title>Account info</Title>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel> First name</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel> Last name</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel> Email</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel> Phone</InputLabel>
          <TempInputField />
        </Grid>

        {/* Authentication info */}
        <Grid item xs={12}>
          <Divider />
          <div style={{ display: 'flex', marginTop: 30 }}>
            <FontAwesomeIcon
              icon={faLockKeyhole}
              style={{ fontSize: 14 }}
            />{' '}
            <Title>Authentication</Title>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>SAML Authentication</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>Microsoft Authentication</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>Google Authentication</InputLabel>
          <TempInputField />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>Github Authentication</InputLabel>
          <TempInputField />
        </Grid>

        {/* Email notifications */}
        <Grid item xs={12}>
          <Divider />
          <div style={{ display: 'flex', marginTop: 30 }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: 14 }}
            />{' '}
            <Title>Email notifications</Title>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <CustomFormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  icon={
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: 14,
                        color: theme.palette.text.disabled,
                      }}
                    />
                  }
                  checkedIcon={
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      style={{
                        fontSize: 14,
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                />
              }
              label="Billing and account"
            />
            <CustomFormControlLabel
              control={
                <Checkbox
                  icon={
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: 14,
                        color: theme.palette.text.disabled,
                      }}
                    />
                  }
                  checkedIcon={
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      style={{
                        fontSize: 14,
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                />
              }
              label="Announcements"
            />
            <CustomFormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  icon={
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{
                        fontSize: 14,
                        color: theme.palette.text.disabled,
                      }}
                    />
                  }
                  checkedIcon={
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      style={{
                        fontSize: 14,
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                />
              }
              label="Newsletter"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default General;
