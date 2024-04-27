import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'


  
  /* import { Text } from '@chakra-ui/react' */
import { useDisclosure } from '@chakra-ui/react'
/* import React from 'react'
import  { useState } from 'react'; */


function BasicModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button  onClick={onOpen}>submit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Amazing Gamer!!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div> <h1> Your input has been noted</h1></div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicModal