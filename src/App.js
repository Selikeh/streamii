import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Player from "./components/Player";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import flow from "./playlist_images/flow-1440x900.jpg"
import lake from './playlist_images/lake_1280x1024.jpg'
import floral from "./playlist_images/floral_1280x1024.jpg"
import dj from "./playlist_images/dj_1280x1024.jpg"
import virus from './playlist_images/abstract-virus_1280x1024.jpg'
import jagged from "./playlist_images/2007.03_1440x900.jpg"
import bear from './playlist_images/20090108164631206.jpg'
import fall from "./playlist_images/fall-scene_1280x1024.jpg"



function App() {
  const [currentTrackInfo, setCurrentTrackInfo] = useState('')
  const [playListTracksData, setPlayListTracksData] = useState([])
  const [inPlayList, setInPlayList] = useState(true)
  const [isSameTrack, setIsSameTrack] = useState(false)
  const [userProfile, setUserProfile] = useState({
    userName: 'Duta',
    likedTrackIds: ['2c5Isyd07hWsl7AQia2Dig','65rRB2mspD309xE6YimZTl'], 
    playListSets:[
      {
        playListSetName: "Top Mixes",
        playLists: [
          {
            id: 1,
            playListTitle: 'Chill Mix',
            playListImg: flow,
            playListTracksIds:['4WNcduiCmDNfmTEz7JvmLv', '65rRB2mspD309xE6YimZTl']
          },
          {
            id: 2,
            playListTitle: 'Drill Mix',
            playListImg: dj,
            playListTracksIds:['123', '987']
          },
          {
            id: 3,
            playListTitle: 'Rock Mix',
            playListImg: jagged,
            playListTracksIds:['456', '654']
          },
          {
            id:4,
            playListTitle: 'Funk Mix',
            playListImg: virus,
            playListTracksIds:['789', '321']
          },
          {
            id:5,
            playListTitle: 'Game Playlist',
            playListImg: bear,
            playListTracksIds:['2c5Isyd07hWsl7AQia2Dig', '6vegnfDS8DAEaCqWaPYGPy']
          },
          {
            id: 6,
            playListTitle: 'Chill Mix',
            playListImg: fall,
            playListTracksIds:['4WNcduiCmDNfmTEz7JvmLv', '65rRB2mspD309xE6YimZTl']
          }
        ]
      },
      {
        playListSetName: "Today's Hits",
        playLists: [
          {
            id: 1,
            playListTitle: 'Grime Mix',
            playListImg: lake,
            playListTracksIds:['4WNcduiCmDNfmTEz7JvmLv', '65rRB2mspD309xE6YimZTl']
          },
          {
            id: 2,
            playListTitle: 'Drill Mix',
            playListImg: dj,
            playListTracksIds:['123', '987']
          },
          {
            id: 3,
            playListTitle: 'Rock Mix',
            playListImg: floral,
            playListTracksIds:['456', '654']
          },
          {
            id:4,
            playListTitle: 'Funk Mix',
            playListImg: fall,
            playListTracksIds:['789', '321']
          },
          {
            id:5,
            playListTitle: 'Game Playlist',
            playListImg: virus,
            playListTracksIds:['2c5Isyd07hWsl7AQia2Dig', '6vegnfDS8DAEaCqWaPYGPy']
          }
        ]
      },
      {
        playListSetName: "Your Genre Mixes",
        playLists: [
          {
            id: 1,
            playListTitle: 'Power Workout',
            playListImg: fall,
            playListTracksIds:['4WNcduiCmDNfmTEz7JvmLv', '65rRB2mspD309xE6YimZTl']
          },
          {
            id: 2,
            playListTitle: 'Drill Mix',
            playListImg: dj,
            playListTracksIds:['123', '987']
          },
          {
            id: 3,
            playListTitle: 'Rock Mix',
            playListImg: jagged,
            playListTracksIds:['456', '654']
          },
          {
            id:4,
            playListTitle: 'Funk Mix',
            playListImg: virus,
            playListTracksIds:['789', '321']
          },
          {
            id:5,
            playListTitle: 'Hip Hop Mix',
            playListImg: bear,
            playListTracksIds:['2c5Isyd07hWsl7AQia2Dig', '6vegnfDS8DAEaCqWaPYGPy']
          }
        ]
      }
    ]
  })


//   async function testAxios(){
//     const options = {
//         method: 'GET',
//         url: 'https://spotify23.p.rapidapi.com/tracks/',
//         params: {ids:'2c5Isyd07hWsl7AQia2Dig'},
//         headers: {
//           'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
//           'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//       };

//       const response = await axios.request(options)
//       console.log(response)
// }

  return (
    <div className=" bg-slate-800 min-h-screen h-fit pb-56 text-slate-300 relative lg:pb-0">
      <div>
        <BrowserRouter>
          <div className=" min-h-full lg:flex">
            <nav className="fixed bottom-0 w-[100vw] h-6 py-10 bg-gradient-to-b from-slate-800/50 to-neutral-900 lg:static lg:bg-neutral-900 lg:min-h-screen lg:h-full lg:pb-5 lg:pt-28 lg:w-64 lg:max-w-xs lg:flex-shrink-0">
              <ul className="flex w-[100%] justify-around lg:flex-col lg:pl-7 lg:text-2xl lg:font-semibold">
                <li><NavLink className={({ isActive }) => isActive?"text-orange-500": "hover:text-white"} to = '/'><HomeRoundedIcon fontSize="large"/><span className=" hidden lg:inline">Home</span></NavLink></li>
                <li><NavLink className={({ isActive }) => isActive?"text-orange-500": "hover:text-white"} to= '/search'><SearchRoundedIcon fontSize="large" /><span className=" hidden lg:inline">Search</span></NavLink></li>
              </ul>
              <section className=" hidden lg:flex lg:flex-col lg:border-t lg:pl-7">
                {userProfile.playListSets.map(playlistSet=>(
                  <Link className="hover:text-white" key={playlistSet.playLists[0].playListTitle} to="/PlayList" state={{trackIds: playlistSet.playLists[0].playListTracksIds, playListData:playlistSet.playLists[0]}}>{playlistSet.playLists[0].playListTitle}</Link>
                  // <div>{playlistSet.playLists[0].playListTitle}</div>
                  ))}
              </section>
            </nav>
            <div className=" pb-14 lg:max-h-screen lg:h-screen lg:overflow-y-scroll lg:scrollbar lg:pb-56 lg:flex-grow">
              <Routes>
                <Route path="/" element={<Home userProfile = {userProfile}/>}/>
                <Route path="/search" element={<Search userProfile={userProfile} setUserProfile={setUserProfile} setCurrentTrackInfo = {setCurrentTrackInfo} setInPlayList={setInPlayList}/>}/>
                <Route path="/playlist" element={<Playlist userProfile={userProfile} setUserProfile={setUserProfile}  currentTrackInfo={currentTrackInfo} setCurrentTrackInfo = {setCurrentTrackInfo} playListTracksData = {playListTracksData} setPlayListTracksData = {setPlayListTracksData} setInPlayList= {setInPlayList} setIsSameTrack = {setIsSameTrack} />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
      {currentTrackInfo!==''&&<Player userProfile={userProfile} setUserProfile={setUserProfile} currentTrackInfo= {currentTrackInfo} setCurrentTrackInfo ={setCurrentTrackInfo} inPlayList = {inPlayList} setInPlayList = {setInPlayList} playListTracksData = {playListTracksData} isSameTrack = {isSameTrack}/>}
    </div>
  );
}

export default App;
