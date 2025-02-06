import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

// Define light and dark themes
const lightTheme = {
  background: '#ffffff',
  color: '#000000',
  buttonBackground: '#007bff',
  buttonHoverBackground: '#0056b3'
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff',
  buttonBackground: '#555555',
  buttonHoverBackground: '#333333'
};

// Define styled components with theme properties
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  text-align: center;
  padding: 2rem;
  transition: background 0.3s ease, color 0.3s ease;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: ${props => props.theme.color};
  background: ${props => props.theme.buttonBackground};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${props => props.theme.buttonHoverBackground};
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Skill = styled.div`
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #ffd700;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git'];

  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <ToggleButton onClick={toggleTheme}>
          {theme === lightTheme ? 'Dark Mode' : 'Light Mode'}
        </ToggleButton>
        <Title>
          <Typewriter
            words={['Welcome to My Portfolio', 'Discover My Projects', 'Let\'s Create Something Amazing']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Title>
        <Paragraph>Explore my portfolio to see my projects and learn more about me.</Paragraph>
        <CTAButton onClick={() => window.location.href = '/projects'}>View Projects</CTAButton>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsContainer>
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
