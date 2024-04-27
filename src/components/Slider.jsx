import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'

  import { Textarea } from '@chakra-ui/react'
  


const Slider = () =>{

  
  return(

  <div>
    <Textarea placeholder='Here is a sample placeholder' /> <h1> 1 2 3 4 </h1>
<RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
<RangeSliderTrack>
  <RangeSliderFilledTrack />
</RangeSliderTrack>
<RangeSliderThumb index={1} />
<RangeSliderThumb index={1} />
</RangeSlider>

</div>


  )
}

export default Slider 
  