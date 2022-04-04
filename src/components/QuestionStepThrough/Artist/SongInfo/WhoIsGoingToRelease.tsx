import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ResponsiveModal from '../../../common/ResponsiveModal';
import ChartaButton from '../../../common/ChartaButton';

const WhoIsGoingToRelease: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        Who is going to release records of [song name] for your listeners to
        stream and purchase?
      </Text>
      <ChartaFormButton
        mt="30px"
        onClick={() => {
          onNext();
        }}
      >
        My label
      </ChartaFormButton>
      <ChartaFormButton
        mt="20px"
        onClick={() => {
          onNext();
        }}
      >
        My distributor
      </ChartaFormButton>
      <ChartaFormButton mt="20px" onClick={onOpen}>
        Me
      </ChartaFormButton>
      <ResponsiveModal
        isOpen={isOpen}
        onClose={onClose}
        title="Self-releasing"
        body={
          <>
            <Text as="p" lineHeight="24px">
              Self-releasing records can be time consuming because you will have
              to upload your song onto every single digital streaming provider
              (&quot;DSP&quot;), for example Spotify, Apple Music and Tidal.
            </Text>
            <Text as="p" mt={{ base: '1.5rem', md: '2rem' }} lineHeight="24px">
              You may want to consider giving your song to a digital distributor
              like TuneCore, DistroKid or BandCamp.
            </Text>
            <Text as="p" mt={{ base: '1.5rem', md: '2rem' }} lineHeight="24px">
              You&apos;ll have to pay them around 15% of your gross sales to
              help you out, but you&apos;ll save a lot of time.
            </Text>
          </>
        }
        footer={
          <ChartaButton
            px="4rem"
            w={{ base: 'full', md: 'auto' }}
            onClick={() => {
              onNext();
            }}
            mx="auto"
          >
            Got it, thanks!
          </ChartaButton>
        }
      />
    </>
  );
};

export default WhoIsGoingToRelease;
