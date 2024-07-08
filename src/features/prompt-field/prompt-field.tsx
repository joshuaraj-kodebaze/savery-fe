// Import components
import {
  PromptInputContainer,
  PromptInputField,
} from './prompt-field.styles';
import Button from 'components/button/button';

// Import assets
import SaveryIcon from '../../assets/icons/savery-icon.svg';

const PromptField = () => {
  return (
    <PromptInputContainer>
      <PromptInputField placeholder="Type your prompt Item here..." />
      <Button
        variant="contained"
        startIcon={<img src={SaveryIcon} alt="Button Icon" />}
        style={{ minWidth: 120 }}
      >
        Save my day
      </Button>
    </PromptInputContainer>
  );
};

export default PromptField;
