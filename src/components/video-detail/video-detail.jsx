import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/api.service";
import { Box } from '@mui/system';
import ReactPlayer from 'react-player';
import { Chip, Typography } from '@mui/material';
import { Tag } from '@mui/icons-material';
import Loader from '../loader/loader';



const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await  ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        setVideoDetail(data.items[0])
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />

  return (
    <Box minHeight={"90vh"} mb={"10"}>
      <Box display={'flex'}>
        <Box width={'75%'}>
          <ReactPlayer url={`https: //www.youtube.com/watch?v=${id}`} classname="react-player" controls/>
          {videoDetail.snippet.tags.map((item, idx) => (
            <Chip
              label = {item}
              key = {idx}
              sx={{ marginTop: "10px", cursor: 'pointer', ml: '10px'}}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
              />
          ))}
          <Typography variant='h5' fontWeight={'bold'} p={2}>
            {videoDetail.snippet.title}
          </Typography>
          <Typography variant='subtitle' p={2} sx={{ opacity: '.7'}}>
            {(videoDetail.snippet.description)}
          </Typography>
        </Box>
        <Box width={'25%'}>Suggested videos</Box>
      </Box>
    </Box>
  )
}

export default VideoDetail;