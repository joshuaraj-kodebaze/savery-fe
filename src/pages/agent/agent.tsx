// Import styled components
import { SectionContainer } from './agent.styles';
import PromptChat from '../../components/prompt-chat/prompt-chat';

const Agent = () => {
  return (
    <SectionContainer>
      <PromptChat
        username="Agent P."
        text="Hey, I'm Agent. P.
I will be your Project Manager on Project X"
        backgroundColor="#E9EEFF"
        position="left"
      />
      <PromptChat
        username="Agent R."
        text="Hey, I'm Agent R.
I will be your researcher on Project X"
        backgroundColor="#FFEED0"
        position="right"
      />
      <PromptChat
        username="Agent E."
        text="Hey, I'm Agent. E.
I will be your Engineer on Project X"
        backgroundColor="#E7FFB4"
        position="left"
      />
      <PromptChat
        username="Agent T."
        text="Hey, I'm DR T.
I will be your Tester on Project X"
        backgroundColor="#FFE3E3"
        position="right"
      />
      <PromptChat
        username="Agent P."
        text="Looking forward to seeing what we can help you with..."
        backgroundColor="#E9EEFF"
        position="left"
      />
    </SectionContainer>
  );
};

export default Agent;
