import React from 'react'
import { Box, Stack } from '@mui/system';
import { VideoCard, ChannelCard} from '../'

const Videos = ({ videos }) => {
  return (
    <Stack 
    width={'100%'} 
    direction={'row'} 
    flexWrap={'wrap'} 
    justifyContent={'start'} 
    alignItems={'center'} 
    gap={2}
    >
      {videos.map(item => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;
