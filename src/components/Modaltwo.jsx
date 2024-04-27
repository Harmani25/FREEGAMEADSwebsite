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


function GameupdatetosModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
         <Button className='terms'  onClick={onOpen}>Read terms of service </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Amazing Gamer!!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div> <h1> Transparency and User Consent:
•	Data Collection: We are upfront about what data we collect from both forms (feedback and marketing). The information (names, comments, ratings, gamer ID, email, age, preferences) will be used for marketing purpose only.

Data Security and Privacy:
•	Data Storage: We Implement secure storage practices for user information. This includes encryption and protection against unauthorized access.
•	Data Usage: Freegameads Clearly outline how the collected data will be used. For marketing purposes, only use data from users who have opted-in.
•	Data Retention: Establish a clear data retention policy. How long will you store user information? Consider offering users the ability to request their data be deleted.
Responsible Marketing:
•	Targeted Communication: We use data for marketing, personalize communications based on user preferences (favorite games, console type) to avoid spammy practices.
•	Opt-Out Mechanism: Users are provided with an easy way to opt-out of receiving marketing emails or communications at any time.
Additional Considerations:
•	Age Verification: We cater to a general audience, some contents are not suitable to some age ranges . This helps protect children from inappropriate content and marketing.
•	Content Disclaimer: Freegameads links to  external stores that sell age-restricted games, Disclaimer external store would verify age before purchasing.
•	

Note:
•	Optional Forms: Having optional forms is a good start. Highlight that filling them out is voluntary and does not affect website use.
By following these ethical practices, you can build trust with your users and ensure your website operates responsibly.
share
more_vert





Front page text

Tired of scouring the web for your next gaming adventure? Welcome to [Your Website Name], your one-stop shop for discovering and downloading all your favorite titles!

Start Your Adventure Now
</h1></div>
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

  export default GameupdatetosModal