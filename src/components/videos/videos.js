import React from 'react'
import { Box, Stack } from '@mui/system';
import { VideoCard, ChannelCard, Loader} from '../'

const Videos = ({ videos }) => {

  if(!videos.length) return <Loader />
  return (
    <Stack 
    width={'100%'} 
    direction={'row'} 
    flexWrap={'wrap'} 
    justifyContent={'start'} 
    alignItems={'center'} 
    gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;
