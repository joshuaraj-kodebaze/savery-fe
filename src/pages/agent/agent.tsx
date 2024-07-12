// Import libraries
import { useState } from 'react';

// Import styled components
import {
  SectionContainer,
  ChatContainer,
  SectionInnerContainer,
} from './agent.styles';
import PromptChat from 'components/prompt-chat/prompt-chat';
import PromptField from 'features/prompt-field/prompt-field';
import TaskBar from 'features/task-bar/task-bar';

const CHAT_HISTORY = [
  {
    name: 'Agent P.',
    text: "Hey, I'm Agent. P. I will be your Project Manager on Project X",
    backgroundColor: '#E9EEFF',
    code: {},
  },
];

const Agent = () => {
  const [isTaskBarOpen, setIsTaskBarOpen] = useState(false);

  const handlePromptSubmit = (prompt: string) => {
    setIsTaskBarOpen(true);
    console.log('prompt ->', prompt);
  };

  return (
    <SectionContainer taskBar={isTaskBarOpen}>
      <SectionInnerContainer>
        <ChatContainer taskBar={isTaskBarOpen}>
          <PromptChat
            username="Agent P."
            text="Hey, I'm Agent. P. I will be your Project Manager on Project X"
            backgroundColor="#E9EEFF"
            position="left"
          />
          <PromptChat
            username="Agent R."
            text="Hey, I'm Agent R. I will be your researcher on Project X"
            backgroundColor="#FFEED0"
            position="right"
          />
          <PromptChat
            username="Agent E."
            text="Hey, I'm Agent. E. I will be your Engineer on Project X"
            backgroundColor="#E7FFB4"
            position="left"
            isPreviewHtml
            isPreviewCss
            isPreviewJs
          />
          <PromptChat
            username="Agent T."
            text="Hey, I'm DR T. I will be your Tester on Project X"
            backgroundColor="#FFE3E3"
            position="right"
          />
          <PromptChat
            username="Agent P."
            text="Looking forward to seeing what we can help you with..."
            backgroundColor="#E9EEFF"
            position="left"
            isPreviewHtml
            isPreviewCss
            isPreviewJs
          />
          <PromptChat
            username="Agent T."
            text="Hey, I'm DR T. I will be your Tester on Project X"
            backgroundColor="#FFE3E3"
            position="right"
          />
          <PromptChat
            username="Agent P."
            text="Looking forward to seeing what we can help you with..."
            backgroundColor="#E9EEFF"
            position="left"
          />
          <PromptChat
            username="Agent T."
            text="Hey, I'm DR T. I will be your Tester on Project X"
            backgroundColor="#FFE3E3"
            position="right"
          />
          <PromptChat
            username="Agent P."
            text="Looking forward to seeing what we can help you with..."
            backgroundColor="#E9EEFF"
            position="left"
          />
          <PromptChat
            username="Agent T."
            text="Hey, I'm DR T. I will be your Tester on Project X"
            backgroundColor="#FFE3E3"
            position="right"
          />
          <PromptChat
            username="Agent P."
            text="Looking forward to seeing what we can help you with..."
            backgroundColor="#E9EEFF"
            position="left"
          />
          <PromptChat
            username="Agent T."
            text="Hey, I'm DR T. I will be your Tester on Project X"
            backgroundColor="#FFE3E3"
            position="right"
          />
          <PromptChat
            username="Agent P."
            text="Looking forward to seeing what we can help you with..."
            backgroundColor="#E9EEFF"
            position="left"
            hasTaskList={true}
          />
          <PromptChat
            username="Agent T."
            text="Hey, I'm DR T. I will be your Tester on Project X"
            backgroundColor="#FFE3E3"
            position="right"
          />
          <PromptChat
            username="Agent P."
            text="Looking forward to seeing what we can help you with..."
            backgroundColor="#E9EEFF"
            position="left"
          />
        </ChatContainer>
        {!isTaskBarOpen ? (
          <PromptField onButtonClick={handlePromptSubmit} />
        ) : null}
      </SectionInnerContainer>
      <TaskBar open={isTaskBarOpen} />
    </SectionContainer>
  );
};

export default Agent;
