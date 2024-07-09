// Import libraries
import { useRef, useEffect } from 'react';

// Import styled components
import { SectionContainer, ChatContainer } from './agent.styles';
import PromptChat from '../../components/prompt-chat/prompt-chat';
import PromptField from 'features/prompt-field/prompt-field';
import PromptHtml from 'components/prompt-html/prompt-html';

const dummyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <div id="face-recognition">
            <button id="face-recognition-btn">Login with Face</button>
            <video id="video" width="300" height="200" autoplay></video>
        </div>
        <div id="fallback-login">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button id="login-btn">Login</button>
        </div>
        <div id="error-message" class="hidden">Invalid login attempt. Please try again.</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
`;

const Agent = () => {
  // const chatContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log('chatContainerRef ->', chatContainerRef);
  // }, [chatContainerRef]);

  // const disableScrolling = () => {
  //   if (chatContainerRef.current) {
  //     setTimeout(() => {
  //       // @ts-expect-error
  //       chatContainerRef.current.style.overflow = 'hidden';
  //     }, 1000);
  //   }
  // };

  // const enableScrolling = () => {
  //   // @ts-expect-error
  //   chatContainerRef.current.style.overflow = '';
  // };

  return (
    <SectionContainer>
      <ChatContainer
      // ref={chatContainerRef}
      // onScroll={disableScrolling}
      // onMouseMove={enableScrolling}
      // onClick={enableScrolling}
      >
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
        <PromptHtml content={dummyHtml} />
      </ChatContainer>
      <PromptField />
    </SectionContainer>
  );
};

export default Agent;
