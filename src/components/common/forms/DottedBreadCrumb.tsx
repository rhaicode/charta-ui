import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { ReactNode } from 'react';
import { BsCheck } from 'react-icons/bs';

import { onboardedUserAtomPersist } from '../../../atoms';

const DottedBreadCrumb: React.FC<
  FlexProps & {
    steps: Record<
      number,
      { name: string; alternateName?: string; component: ReactNode }
    >;
  }
> = ({ steps, ...props }) => {
  const [onboardedUser] = useAtom(onboardedUserAtomPersist);
  const entries = Object.entries(steps);
  return (
    <Flex justifyContent="center" minH="42px" {...props}>
      {entries.map((s, i) => {
        const isInitial = onboardedUser.step === i + 1 && i === 0;
        const isCurrent = onboardedUser.step === i + 1 && i !== 0;
        const isPast = onboardedUser.step > i + 1;

        const isValidBreadcrumb = i < entries.length - 1;

        const preferredLeft: Record<number, string> = {
          0: '-22px',
          1: '-18px',
          2: '-17px',
          3: '-20px',
          4: '-24px',
          5: '-8px',
        };

        const preferredBaseLeft: Record<number, string> = {
          0: '-20px',
          1: '-16px',
          2: '-14px',
          3: '-16px',
          4: '-18px',
          5: '-5px',
        };

        return (
          <Box pos="relative">
            <Flex maxW="max-content" alignItems="center">
              <Flex direction="column" maxW="max-content" alignItems="center">
                {isValidBreadcrumb && (
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    h="16px"
                    w="16px"
                    backgroundColor="#ECECF1"
                    {...((isPast || isInitial) && {
                      backgroundColor: 'base-gold',
                    })}
                    {...(isCurrent && {
                      border: '2px solid',
                      borderColor: 'base-gold',
                      backgroundColor: 'white',
                    })}
                    rounded="full"
                  >
                    {isPast && <BsCheck fontSize="16px" color="white" />}
                  </Flex>
                )}
              </Flex>
              {isValidBreadcrumb && s[1].name !== 'Legal' && (
                <Box
                  w={{ base: '40px', md: '70px', lg: '86px' }}
                  h="2px"
                  backgroundColor={isPast ? 'base-gold' : '#ECECF1'}
                />
              )}
            </Flex>
            {isValidBreadcrumb && (
              <Text
                as="span"
                display="block"
                fontWeight={isCurrent || isInitial ? '500' : '400'}
                color={
                  isCurrent || isInitial ? 'base-primary-green' : 'base-gray-2'
                }
                fontSize={{ base: '10px', md: '12px' }}
                mt="7px"
                pos="absolute"
                left={{ base: preferredBaseLeft[i], md: preferredLeft[i] }}
              >
                {s[1].alternateName ?? s[1].name}
              </Text>
            )}
          </Box>
        );
      })}
    </Flex>
  );
};

export default DottedBreadCrumb;
