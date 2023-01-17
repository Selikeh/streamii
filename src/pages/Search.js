import { useState, useEffect } from "react";

function Search({setCurrentTrackInfo, setInPlayList}){
    const [searchQuery,setSearchQuery] = useState('')

    const [returnedSearchTracks, setReturnedSearchTracks] = useState([])

    useEffect(()=>{
        console.log(searchQuery)
        setTimeout(()=>{
            if(searchQuery !== ''){
                fetch(`/.netlify/functions/searchApiCalls?searchQuery=${searchQuery}`)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response)
                        setReturnedSearchTracks(response.data.tracks.items)
                    })
                    .catch(err => console.error(err));
            }        
        },3000)
    }, [searchQuery])

    useEffect(()=>{
        console.log(returnedSearchTracks)
    }, [returnedSearchTracks])

    // const logQuery =()=>{
    //     console.log(searchQuery)
    // }

    const handleTrackClick =(id)=>{
        // fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${id}`, options)
        fetch(`/.netlify/functions/trackApiCalls?trackId=${id}`)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setCurrentTrackInfo(response.data)
                setInPlayList(false)
            })
            .catch(err => console.error(err));
    }

    return(
        <>  
            <div className="sticky top-0 bg-slate-800 lg:min-w-full">
                <h1 className="px-4 py-2 text-3xl font-bold">Search</h1>
                <div className="flex justify-center py-4 lg:block pl-5">
                    <input className=" h-9 w-[93%] rounded-md lg:w-1/2 px-5 text-zinc-900" value={searchQuery} type="search" name="" id=""  placeholder="Search for Songs" onInput={(e)=>setSearchQuery(e.target.value)}/>
                </div>
            </div>
            <div>
                {returnedSearchTracks !== []&& returnedSearchTracks.map((returnedItem)=>(
                    <div className="flex py-2 px-4" key={returnedItem.data.id} onClick={()=>{handleTrackClick(returnedItem.data.id)}}>
                        <img src={returnedItem.data.albumOfTrack.coverArt.sources[1].url} alt="" />
                        <div className=" px-5 my-auto">
                            <h4 className=" text-lg font-bold">{returnedItem.data.name}</h4>
                            {returnedItem.data.artists.items.map((item, index)=>(
                                (index >= 1)?<span key={item.uri.replace('spotify:artist:','')}>, {item.profile.name}</span>:<span key={item.uri.replace('spotify:artist:','')}>{item.profile.name}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* For debugging purposes */}
            {/* <button onClick={()=>console.log(searchQuery)}>log search query</button> */}
        </>
    )
}

export default Search