import { useState, useEffect} from 'react';
import { Box, Container, Typography, Stack} from '@mui/material';
import { colors } from '../../constants/colors';
import { Category, Videos } from "../";
import { ApiService, BASE_URI } from "../../service/api.service";


const Main = () => {
  const [selectedCategory, setselectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setselectedCategory(category)

  useEffect(() => {
    // const data = ApiService.fetch('search').then(data => console.log())
    // fetch(`https://youtube-v31.p.rapidapi.com`, {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [])
  

  return (
    <Stack>
      <Category 
      selectedCategoryHandler={selectedCategoryHandler}
      selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height:'90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main;