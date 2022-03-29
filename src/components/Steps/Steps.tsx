import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import GetStarted from './GetStarted';

const stepsComponents: Record<any, any> = {
  'getting-started': <GetStarted />,
};

const Steps: React.FC = () => {
  const match = useRouteMatch('/step-through/:slug');
  const stepNumber = Number((match?.params as any)?.slug) || 0;

  return (
    <Box mt={{ md: '36px' }}>
      <Text as="span">
        {React.cloneElement(stepsComponents[stepNumber] || <Box />)}
      </Text>
    </Box>
  );
};

export default Steps;
