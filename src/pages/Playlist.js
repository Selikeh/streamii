import { useState } from "react";
import { useLocation } from "react-router-dom"
import { useEffectOnce } from "../custom_hooks/useEffectOnce";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";

function Playlist({ userProfile, setUserProfile,currentTrackInfo, setCurrentTrackInfo, playListTracksData, setPlayListTracksData, setInPlayList, setIsSameTrack}){

    const [noError, setNoError] = useState(true)

    const location = useLocation()
    // console.log(location.state.trackIds)

    useEffectOnce(()=>{
        setPlayListTracksData([])
        location.state.trackIds.map((trackId=>(
            //Fetch track data from api with the track id and APPEND to ~playListTracksData~ to form an array of arrays of objects (long, I know)
            fetch(`/.netlify/functions/trackApiCalls?trackId=${trackId}`)
                .then(response => response.json())
                .then(response => {
                     console.log(response)
                     setPlayListTracksData(prevState=>[...prevState,response])
                    }) //I need to figure out why this is inverting the contents of playListTracksData
                .catch(err => /* console.error(err) */ setNoError(false))  
        )))
    })

    const logTracksData = ()=>{
        console.log(playListTracksData)
        // console.log(location.state.trackIds.length)
    }

    function handleLikeIconClick(e, trackId){
        e.stopPropagation()
        console.log('like clicked')
        setUserProfile(prev=>(prev.likedTrackIds.includes(trackId)?{...prev, likedTrackIds: prev.likedTrackIds.filter(id=>id!==trackId)}:{...prev, likedTrackIds: [...prev.likedTrackIds,trackId]}))
    }



    return(
        <>
            {
            noError?
            <>  
                <div className="flex sticky top-0 bg-slate-800">
                    <img className=" w-1/6" src={location.state.playListData.playListImg} alt="" />
                    <div className=" bg-slate-800 text-3xl p-4 self-center">{location.state.playListData.playListTitle}</div>
                </div>
                <div className="hidden bg-slate-800 lg:sticky lg:top-28 lg:grid lg:grid-cols-6 lg:gap-4 lg:w-full justify-between px-3 border-b border-slate-600">
                    <div className="hidden lg:block lg:col-span-3 lg:pl-10">Title</div>
                    <div className="hidden lg:block lg:col-span-2">Duration</div>
                    <div><FavoriteBorderRounded/></div>
                </div>
                <div className="flex flex-col gap-4">
                    {playListTracksData.length !== 0? playListTracksData.map((trackData)=>(
                        <div className="flex gap-2 rounded-sm hover:bg-slate-600 hover:cursor-pointer" key={trackData.data.tracks[0].id} onClick={()=>{
                            // setCurrentTrackInfo('')
                            if(currentTrackInfo !== '' && currentTrackInfo.tracks[0].id === trackData.data.tracks[0].id){
                                setIsSameTrack(prev=>!prev)
                            }else{
                                setIsSameTrack(false)
                                setCurrentTrackInfo(trackData.data)
                            }
                            setInPlayList(true)
                        }}> 
                        <div className=" w-full flex justify-between px-3 lg:grid lg:grid-cols-6 lg:gap-4 lg:w-full">
                            <div className=" lg:col-span-3 flex gap-2">
                                <img src={trackData.data.tracks[0].album.images[2].url} alt="" />
                                <div className="flex flex-col justify-center">
                                    <h3 className=" text-2xl font-semibold">{trackData.data.tracks[0].name}</h3>
                                    <div>
                                        {trackData.data.tracks[0].artists.map((artist, index)=>(
                                            (index >= 1)?<span key={artist.id}>, {artist.name}</span>:<span key={artist.id}>{artist.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:col-span-2 py-4">{Math.floor(trackData.data.tracks[0].duration_ms/60000)}:{Math.floor(Math.floor(trackData.data.tracks[0].duration_ms/1000)%60)}</div>
                            <div className="py-4">{userProfile.likedTrackIds.includes(trackData.data.tracks[0].id)? <FavoriteRoundedIcon className=" text-orange-500" onClick={(e)=>handleLikeIconClick(e, trackData.data.tracks[0].id)}/> : <FavoriteBorderRoundedIcon className=" hover:text-orange-400" onClick={(e)=>handleLikeIconClick(e, trackData.data.tracks[0].id)}/>}</div>
                        </div>
                        </div>
                    )): null}
                </div>
            </>
            : <div>Error!!!!!!!!!!!!!!</div>
            }
            <button onClick={logTracksData}>Log</button>
            <button onClick={()=>console.log(currentTrackInfo)}>LogCurrent</button>
            <button onClick={()=>console.log(playListTracksData) }>Log playListTracksData</button>
        </>
    )
}

export default Playlist