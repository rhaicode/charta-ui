import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { defaultOnboardedUser, onboardedUserAtomPersist } from '../../atoms';
import ChartaButton from '../common/ChartaButton';

const ChooseUserType: React.FC = () => {
  const [, setOnboardedUser] = useAtom(onboardedUserAtomPersist);
  return (
    <Box>
      <Text
        as="span"
        display="block"
        maxW="max-content"
        mx="auto"
        color="base-primary-green"
        fontWeight="700"
        fontSize={{ base: '2xl', md: '3xl' }}
        mt={{ base: '25px', md: '50px' }}
        mb="20px"
      >
        Welcome!
      </Text>
      <Text
        as="p"
        textAlign="center"
        color="base-primary-green"
        display={{ md: 'none' }}
        mb="30px"
      >
        First, let us know whether you&apos;re the artist or the producer for
        this song.
      </Text>
      <Box maxW="max-content" mx="auto">
        <Image
          src="/assets/artist-button.png"
          cursor="pointer"
          border="2px solid"
          borderColor="transparent"
          borderRadius="5px"
          _active={{ borderColor: 'base-secondary-green' }}
          display={{ base: 'none', md: 'block' }}
          onClick={() => {
            setOnboardedUser({
              ...defaultOnboardedUser,
              type: 'ARTIST',
              step: 0,
            });
          }}
        />
        <Image
          src="/assets/artist-button-mobile.png"
          cursor="pointer"
          border="2px solid"
          borderColor="transparent"
          borderRadius="5px"
          _active={{ borderColor: 'base-secondary-green' }}
          display={{ md: 'none' }}
          onClick={() => {
            setOnboardedUser({
              ...defaultOnboardedUser,
              type: 'ARTIST',
              step: 0,
            });
          }}
        />
        <Image
          src="/assets/producer-button.png"
          mt="20px"
          cursor="pointer"
          border="2px solid"
          borderColor="transparent"
          borderRadius="5px"
          _active={{ borderColor: 'base-secondary-green' }}
          display={{ base: 'none', md: 'block' }}
          onClick={() => {
            setOnboardedUser({
              ...defaultOnboardedUser,
              type: 'PRODUCER',
              step: 0,
            });
          }}
        />
        <Image
          src="/assets/producer-button-mobile.png"
          cursor="pointer"
          mt="20px"
          border="2px solid"
          borderColor="transparent"
          borderRadius="5px"
          _active={{ borderColor: 'base-secondary-green' }}
          display={{ md: 'none' }}
          onClick={() => {
            setOnboardedUser({
              ...defaultOnboardedUser,
              type: 'PRODUCER',
              step: 0,
            });
          }}
        />
      </Box>
    </Box>
  );
};

const HeresHowItWorks: React.FC = () => {
  const history = useHistory();
  const [onboardedUser, setOnBoardedUser] = useAtom(onboardedUserAtomPersist);
  return (
    <Box mt={{ base: '30px', md: '50px' }}>
      {onboardedUser.type === 'ARTIST' && (
        <Flex
          direction="column"
          mx="auto"
          color="base-primary-green"
          maxW="max-content"
          alignItems="center"
        >
          <Image
            src="/assets/musical-notes-1.png"
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src="/assets/musical-notes-1-mobile.png"
            display={{ md: 'none' }}
          />
          <Text
            as="p"
            fontSize="20px"
            lineHeight="28px"
            fontWeight={{ base: '700', md: '500' }}
            mt={{ base: '30px', md: '25px' }}
            mb={{ base: '20px' }}
          >
            Great! You&apos;re the artist. Here&apos;s how it works.
          </Text>
          <Text as="p">
            We&apos;ve built a platform that will let you easily create, send,
            and negotiate an offer with your producer, all in plain English, all
            for $25.
          </Text>
          <Text as="p" mt={{ base: '2rem', md: '1.5rem' }}>
            Once you and your producer have agreed on everything, we&apos;ll
            create the contract, and all you&apos;ll have to do is sign it in
            Charta. That&apos;s moving at the speed of agreement!
          </Text>
          <ChartaButton
            mt={{ base: '174px', md: '30px' }}
            w={{ base: 'full', md: '223px' }}
            py="1.5rem"
            onClick={() => {
              setOnBoardedUser({ ...onboardedUser, step: 1, subStep: 1 });
              history.push('/step-through');
            }}
          >
            Continue
          </ChartaButton>
        </Flex>
      )}
      {onboardedUser.type === 'PRODUCER' && <Box />}
    </Box>
  );
};

const GetStarted: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  return (
    <Box p={{ base: '30px', md: '40px' }}>
      <Flex alignItems="center" justifyContent="center" pos="relative">
        <Text
          as="span"
          display="block"
          maxW="max-content"
          alignSelf="center"
          color="base-gray-2"
          fontWeight="500"
          fontSize={{ base: '12px', md: '14px' }}
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          Get Started
        </Text>
        {onboardedUser.type !== 'NONE' && (
          <Box
            position="absolute"
            left="-8px"
            color="base-primary-green"
            mb="2px"
            onClick={() => {
              setOnboardedUser(defaultOnboardedUser);
            }}
          >
            <FiChevronLeft fontSize="20px" cursor="pointer" />
          </Box>
        )}
      </Flex>
      {onboardedUser.type && onboardedUser.type === 'NONE' && (
        <ChooseUserType />
      )}
      {onboardedUser.type && onboardedUser.type !== 'NONE' && (
        <HeresHowItWorks />
      )}
    </Box>
  );
};

export default GetStarted;
