import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 0.5rem 0 0.5rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 0 1rem;
  }
`;

export const Content = styled.p`
  padding: 0.5rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
