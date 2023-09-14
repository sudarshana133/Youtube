import {Stack,Box} from "@mui/material"
import {VideoCard,ChannelCard} from "./"

const Videos = ({videos,direction}) => {
  // console.log(videos);
  if(!videos?.length) return 'loading...'
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap="2">
      {
        videos.map((item,idx)=>(
          <Box key={idx} sx={{
            padding:"5px 5px 0 5px"
          }}>
            {
              item.id.videoId && <VideoCard video={item}/>
            }
            {
              item.id.channelId && <ChannelCard channelDetail={item}/>
            }
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos
