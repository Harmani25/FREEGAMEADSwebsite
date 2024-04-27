import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import React from 'react'

import { Flex } from '@chakra-ui/react'
import { Slider } from '@chakra-ui/react'
import { SliderThumb, SliderTrack,SliderFilledTrack } from '@chakra-ui/react'


function SliderInput() {
  const [value, setValue] = React.useState(50)
  const handleChange = (value) => setValue(value)

  return (
    <Flex>
      <NumberInput maxW='50px' mr='2rem' value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex='3'
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize='sm' boxSize='15px' child={value} />
      </Slider>
    </Flex>
  )
}

export default SliderInput