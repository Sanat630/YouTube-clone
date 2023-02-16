import React from 'react'
import { useParams } from 'react-router-dom';
import { ApiService } from '../../service/api.service';
import { useEffect, useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { colors } from '../../constants/colors'
import { Videos } from "../";

const Search = () => {
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        console.log(data);
        setVideos(data.items)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [id])

  return (
    <Box p={2} sx={{ height: '90vh' }}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h5'} fontWeight={'bold'} mb={2}>
          Search result for <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  )
}

export default Search;