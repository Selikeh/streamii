import { useState,useRef,useEffect } from "react"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

function Player({ userProfile, setUserProfile, currentTrackInfo, setCurrentTrackInfo, inPlayList, playListTracksData, isSameTrack}){
    const audioElement = useRef()
    const [audioDuration, setAudioDuration] = useState(0)
    const [audioCurrentTime, setAudioCurrentTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    function deepCheck(arr, obj){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].data.tracks[0].id === obj){
                return i    
            }
        }
        return -1
    }

    useEffect(()=>{
        if(currentTrackInfo !== '' && !isSameTrack){
            audioElement.current.src = currentTrackInfo.tracks[0].preview_url
            audioElement.current.play()
            setAudioDuration(audioElement.current.duration)
        }else if(currentTrackInfo !== '' && isSameTrack){
            audioElement.current.pause()
            audioElement.current.currentTime = 0
            audioElement.current.play()
        }else{
            !audioElement.current.paused&& audioElement.current.pause()
            setAudioDuration(0)
        }
    },[currentTrackInfo, isSameTrack])

    const handlePlayPause = ()=>{
        audioElement.current.paused? (audioElement.current.play()) : (audioElement.current.pause())
    }

    const handleNextClick = ()=>{    
        if(inPlayList && (deepCheck(playListTracksData, currentTrackInfo.tracks[0].id) < (playListTracksData.length - 1))){
            audioElement.current.pause() 
            setCurrentTrackInfo(playListTracksData[deepCheck(playListTracksData, currentTrackInfo.tracks[0].id) + 1].data)
            audioElement.current.currentTime = 0
            // audioElement.current.play()
        }else if(inPlayList && (deepCheck(playListTracksData, currentTrackInfo.tracks[0].id) >= (playListTracksData.length - 1))){
            audioElement.current.pause() 
            setCurrentTrackInfo(playListTracksData[0].data)
            audioElement.current.currentTime = 0
            // audioElement.current.play()
        }else if(!inPlayList){
            audioElement.current.pause()
            audioElement.current.currentTime = 0
            audioElement.current.play()
        }
    }

    const handlePrevClick = ()=>{
        if(inPlayList && (deepCheck(playListTracksData, currentTrackInfo.tracks[0].id) <= 0)){
            audioElement.current.pause() 
            setCurrentTrackInfo(playListTracksData[playListTracksData.length - 1].data)
            audioElement.current.currentTime = 0
            // audioElement.current.play()
        }else if(inPlayList && (deepCheck(playListTracksData, currentTrackInfo.tracks[0].id) > 0)){
            audioElement.current.pause() 
            setCurrentTrackInfo(playListTracksData[deepCheck(playListTracksData, currentTrackInfo.tracks[0].id) - 1].data)
            audioElement.current.currentTime = 0
            // audioElement.current.play()
        }
    }

    function handleLikeIconClick(e, trackId){
        e.stopPropagation()
        console.log('like clicked')
        setUserProfile(prev=>(prev.likedTrackIds.includes(trackId)?{...prev, likedTrackIds: prev.likedTrackIds.filter(id=>id!==trackId)}:{...prev, likedTrackIds: [...prev.likedTrackIds,trackId]}))
    }

    return(
        <div className="fixed w-[99.8%] bottom-8 px-3 text-slate-50 lg:bottom-0 lg:px-0">
            <div className=" w-full bg-slate-500 my-5 p-4 rounded-md lg:my-0 lg:rounded-none lg:bg-slate-800 lg:border-t lg:border-t-slate-600">
                <audio ref={audioElement} onLoadedMetadata={(e)=>setAudioDuration(e.target.duration)} onTimeUpdate={(e)=>setAudioCurrentTime(e.target.currentTime)} onEnded={handleNextClick} onPlay={()=>setIsPlaying(true)} onPause={()=>setIsPlaying(false)}></audio>
                <div>
                    <div className="w-full flex justify-between pr-3">
                        <div className="flex justify-items-start gap-5">
                            {currentTrackInfo !== ''? <img className="h-20 max-h-20 aspect-square " src={currentTrackInfo.tracks[0].album.images[2].url} />: null}
                                <div className="pt-3">
                                    {currentTrackInfo !== ''? <h4 className=" text-lg font-bold">{currentTrackInfo.tracks[0].name}</h4>: null}
                                    {currentTrackInfo !== ''? currentTrackInfo.tracks[0].artists.map((artist, index)=>(
                                                (index >= 1)?<span key={artist.id}>, {artist.name}</span>:<span key={artist.id}>{artist.name}</span>
                                            )): null}
                                </div>
                        </div>
                        {/* {console.log(currentTrackInfo.tracks[0].id)} */}
                        {currentTrackInfo!==''&&<div className=" place-self-center">{userProfile.likedTrackIds.includes(currentTrackInfo.tracks[0].id)? <FavoriteRoundedIcon className=" text-orange-500" onClick={(e)=>handleLikeIconClick(e, currentTrackInfo.tracks[0].id)}/> : <FavoriteBorderRoundedIcon className=" hover:text-orange-400" onClick={(e)=>handleLikeIconClick(e, currentTrackInfo.tracks[0].id)}/>}</div>}
                    </div>
                    <div className="flex justify-around px-16 my-5">
                        <button onClick={handlePrevClick}><SkipPreviousRoundedIcon className="text-orange-500 hover:text-orange-400"/></button>
                        <button onClick={handlePlayPause}>{isPlaying?<PauseRoundedIcon className=" text-orange-500 hover:text-orange-400" fontSize="large"/>:<PlayArrowRoundedIcon className="text-orange-500 hover:text-orange-400" fontSize="large"/>}</button>
                        <button onClick={handleNextClick}><SkipNextRoundedIcon className="text-orange-500 hover:text-orange-400"/></button>
                    </div>
                    <div className="flex px-4">
                        <span> {Math.floor(audioCurrentTime/60)}:{(Math.floor(audioCurrentTime) < 10? '0' + Math.floor(audioCurrentTime) : Math.floor(audioCurrentTime))}</span>
                        <input className="grow w-4 mx-5 accent-orange-500" type="range" onChange={(e)=>audioElement.current.currentTime = (e.target.value)} step={1} value={audioCurrentTime} max={isNaN(audioDuration) ? 0: audioDuration} />
                        <span>{isNaN(audioDuration)? '0': Math.floor(audioDuration/60)}:{isNaN(audioDuration)? '00': Math.floor(audioDuration)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player