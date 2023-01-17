import { useNavigate } from "react-router-dom"

function Home({userProfile}){
    const navigate = useNavigate()

    const handlePlaylistClick = (playList)=>{
        navigate('/Playlist', {state:{trackIds: playList.playListTracksIds, playListData:playList}})
        // console.log(playList.playListTracksIds)

    }
    return(
        <>
            <h1 className="text-3xl">Home</h1>
            <div>
                {userProfile.playListSets.map((playListSet, index)=>(
                    <div className=" mb-5 lg:mb-1" key={playListSet.playListSetName}>
                        <div className=" text-xl font-semibold my-5 ml-5">{playListSet.playListSetName}</div>
                        <div className= {index ===0? " grid grid-cols-2 gap-5 content-start px-5 hover:cursor-pointer lg:grid-cols-3" : " flex overflow-x-scroll gap-5 px-5 scrollbar hover:cursor-pointer"}>
                            {playListSet.playLists.map((playList)=>(
                                <div className={index ===0? " bg-slate-700 rounded-sm w-full flex flex-row items-center gap-2 hover:text-orange-500" : " w-1/5 flex-shrink-0 hover:text-orange-500 lg:w-1/5"} key={playList.id} onClick={()=> handlePlaylistClick(playList)}>
                                    <img className={index ===0? " rounded-l-sm aspect-square w-1/2" :"aspect-square w-full rounded-md"} src={playList.playListImg} alt="" />
                                    <div className="text-center">{playList.playListTitle}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home