import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ResponsiveModalProps {
  title: ReactNode;
  body: ReactNode;
  footer: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  padding?: any;
  minH?: any;
  minW?: any;
}

const ResponsiveModal: React.FC<ResponsiveModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  padding = {},
  minH = {},
  minW = {},
}) => {
  const modalSize = useBreakpointValue({ base: 'full', md: 'md' });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
      <ModalOverlay />
      <ModalContent
        minW={{ base: '100vw', md: '542px', ...minW }}
        p={{ base: '20px', md: '50px', ...padding }}
        minH={{ base: '100vh', md: '528px', ...minH }}
      >
        <ModalHeader fontSize="24px" fontWeight="700" lineHeight="32px">
          {title}
        </ModalHeader>
        <ModalCloseButton
          fontSize={{ base: '17px', md: '18px' }}
          m={{ base: '10px', md: '20px' }}
        />
        <ModalBody>{body}</ModalBody>
        <ModalFooter mt="30px">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResponsiveModal;
