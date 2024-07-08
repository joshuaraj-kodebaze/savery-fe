// Import libraries
import { Box } from '@mui/material';
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
          gap: '8px',
          marginBottom: '10px',
          justifyContent:
            position === 'left' ? 'flex-start' : 'flex-end',
        }}
      >
        <div>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              marginBottom: '8px',
            }}
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
        </div>
      </Box>
    </div>
  );
};

export default PromptChat;
