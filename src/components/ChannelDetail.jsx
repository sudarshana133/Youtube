import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import {Videos,ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import zIndex from "@mui/material/styles/zIndex";

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);
  // console.log(channelDetail);
  // console.log(videos);
  useEffect(()=>{
    fetchFromAPI(`channels?part="snippet"&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(63,212,251,1) 0%, rgba(83,111,235,1) 39%, rgba(189,70,252,1) 100%)',
          zIndex:10,
          height:'300px'
      }}/>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p='2'>
        <Box sx={{
          mr:{sm:'100px'}
        }}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
