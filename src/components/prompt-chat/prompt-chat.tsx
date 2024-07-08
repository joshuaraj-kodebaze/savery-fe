// Import libraries
import { Box, Typography, type InputProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/pro-regular-svg-icons';

// Import components
import { TextContainer, Username } from './prompt-chat.styles';

type PromptChatProps = {
  username: string;
  text: string;
  backgroundColor: string;
  position?: string;
};

const PromptChat = (props: PromptChatProps) => {
  const {
    username,
    text,
    backgroundColor,
    position = 'left',
  } = props;

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
        >
          <FontAwesomeIcon
            icon={faRobot}
            style={{
              fontSize: 12,
              backgroundColor: backgroundColor,
              padding: 4,
              borderRadius: '100px',
            }}
          />
          <Username>{username}</Username>
        </Box>
        <TextContainer style={{ backgroundColor: backgroundColor }}>
          {text}
        </TextContainer>
      </Box>
    </div>
  );
};

export default PromptChat;
