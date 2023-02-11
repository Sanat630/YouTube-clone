import { useState } from 'react';
import {Box, Container, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import { colors } from '../../constants/colors';

const Main = () => {
  const [selectCategory, setselectCategory] = useState("New")
  return (
    <Stack>
      Category
      <Box p={2} sx={{ height:'90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={"bold"} mb={2}>
            {selectCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main;