import React from 'react';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const WithThatInMind: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const { isOpen: isOpenOriginal, onToggle: onToggleOriginal } =
    useDisclosure();
  const { isOpen: isOpenLyric, onToggle: onToggleLyric } = useDisclosure();
  const { isOpen: isOpenVisualizer, onToggle: onToggleVisualizer } =
    useDisclosure();
  const { isOpen: isOpenTeaser, onToggle: onToggleTeaser } = useDisclosure();

  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 5,
      subStep: 1,
      prevSubStep: 11,
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        With that in mind, please select all the types of promo videos that can
        be created for &quot;Here Comes the Sun&quot;:
      </Text>
      <ChartaFormButton
        mt="30px"
        onClick={onToggleOriginal}
        isSelected={isOpenOriginal}
      >
        Original Music Video
      </ChartaFormButton>
      <ChartaFormButton
        mt="30px"
        onClick={onToggleLyric}
        isSelected={isOpenLyric}
      >
        Lyric Video
      </ChartaFormButton>
      <ChartaFormButton
        mt="30px"
        onClick={onToggleVisualizer}
        isSelected={isOpenVisualizer}
      >
        Visualizer Video
      </ChartaFormButton>
      <ChartaFormButton
        mt="30px"
        onClick={onToggleTeaser}
        isSelected={isOpenTeaser}
      >
        Teaser videos of 1 min or less
      </ChartaFormButton>
      <Box h="8rem" display={{ md: 'none' }} />
      <ChartaContinueButton
        px="4rem"
        py="1rem"
        mt={{ md: '40px' }}
        mb={{ base: '40px', md: '0px' }}
        onClick={() => {
          onNextStep();
        }}
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        w={{ base: '83vw', md: 'auto' }}
        mx="auto"
      >
        Continue
      </ChartaContinueButton>
    </>
  );
};

export default WithThatInMind;
