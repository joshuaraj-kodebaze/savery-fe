// Import styled components
import { SectionContainer } from './agent.styles';
import PromptChat from '../../components/prompt-chat/prompt-chat';

const Agent = () => {
  return (
    <SectionContainer>
      <div>
        <PromptChat
          username="Agent P."
          text="Hey, I'm Agent. P.
I will be your Project Manager on Project X"
          backgroundColor="#E9EEFF"
          position="left"
        />
        <PromptChat
          username="Agent E."
          text="Hey, I'm Agent. E.
I will be your Engineer on Project X"
          backgroundColor="#E7FFB4"
          position="right"
        />
      </div>
    </SectionContainer>
  );
};

export default Agent;
