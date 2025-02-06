import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/path-to-your-background-image.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  animation: ${fadeIn} 2s ease-in-out;

  &:hover {
    background: #0056b3;
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
  animation: ${fadeIn} 2.5s ease-in-out;
`;

const Home = () => {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git'];

  return (
    <HomeContainer>
      <Title>Welcome Home</Title>
      <Paragraph>Explore my portfolio to see my projects and learn more about me.</Paragraph>
      <CTAButton onClick={() => window.location.href = '/projects'}>View Projects</CTAButton>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </SkillsContainer>
    </HomeContainer>
  );
};

export default Home;
