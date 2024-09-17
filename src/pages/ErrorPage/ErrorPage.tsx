import React from 'react';
import CenteredContainer from '../../styles/CenteredContainer.tsx'

interface ErrorPageProps {
  errorMessage?: string;
}

export const ErrorPage: React.FunctionComponent<ErrorPageProps> = ({
  errorMessage,
}) => (
  <CenteredContainer>
    Oops, there was an error: {errorMessage}
  </CenteredContainer>
);
