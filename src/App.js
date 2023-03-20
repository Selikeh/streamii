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
            playListTitle: 'Queen Mix',
            playListImg: flow,
            playListTracksIds:['7hQJA50XrCWABAu5v6QZ4i', '11IzgLRXV7Cgek3tEgGgjw' ,'54flyrjcdnQdco7300avMJ',  '7tFiyTwD0nx5a1eklYtX2J' ,'7h2yhVxcZOGyQdOwD4Hu8J'/*,'7GqWnsKhMtEW0nzki5o0d8' ,'6cFZ4PLC19taNlpl9pbGMf','57JVGBtBLCfHw2muk5416J','7h2yhVxcZOGyQdOwD4Hu8J','7ccI9cStQbQdystvc6TvxD','1HmzAZUvhQLhLo2z3ocpZI','2HPvr5vD9rjbc0tejSmkkp' */]
          },
          {
            id: 2,
            playListTitle: 'Eminem Mix',
            playListImg: dj,
            playListTracksIds:['5Z01UMMf7V1o0MzF86s6WJ','6or1bKJiZ06IlK0vFvY75k','0qcjuYtMWhBjXg0Xwt5SzS','4UMTp91LHhvW33ol9ZQH0Q','4xkOaSrkexMciUUogZKVTS'/* ,'3yfqSUWxFvZELEM4PmlwIR','2gsNpSn7VvvJuSrIDfRoYy','561jH07mF1jHuk7KlaeF0s','3UmaczJpikHgJFyBTAJVoz','7zl7kehxesNEo2pYkKXTSe','7Ie9W94M7OjPoZVV216Xus','4gXdMZkBN1neE9nX6yRALa' */]
          },
          {
            id: 3,
            playListTitle: 'Rock Mix',
            playListImg: jagged,
            playListTracksIds:['7jwDuO7UZvWs77KNj9HbvF','04aAxqtGp5pv12UXAg4pkq', '4Yf5bqU3NK4kNOypcrLYwU','4o74y4XY1ypNZkZtZkK8Wi','60a0Rd6pjrkxjPbaKzXjfq'/* ,'0UFDKFqW2oGspYeYqo9wjA','4wzjNqjKAKDU82e8uMhzmr','1lgN0A2Vki2FTON5PYq42m','2nLtzopw4rPReszdYBJU6h','2Z8WuEywRWYTKe1NybPQEW', '49nmsafpkJp2lDj9b4jkxh','4G8gkOterJn0Ywt6uhqbhp' */]
          },
          {
            id:4,
            playListTitle: 'Kanye Mix',
            playListImg: virus,
            playListTracksIds:['2Im64pIz6m0EJKdUe6eZ8r','4EWCNWgDS8707fNSZ1oaA5', '22L7bfCiAkJo5xGSQgmiIO','6etwirSInfuJrSOlogS6Sh','5Pt83OUaK3K9C2if4C5JOk'/* ,'2dxjKgT0li4qBI3QwuN9Ih','3A4cpTBPaIQdtPFb5JxtaX','3nAq2hCr1oWsIU54tS98pL','6vegnfDS8DAEaCqWaPYGPy','722tgOgdIbNe3BEyLnejw4','4qikXelSRKvoCqFcHLB2H2','2dxjKgT0li4qBI3QwuN9Ih' */]
          },
          {
            id:5,
            playListTitle: 'Top Gaming Tracks',
            playListImg: bear,
            playListTracksIds:['2c5Isyd07hWsl7AQia2Dig', '6vegnfDS8DAEaCqWaPYGPy','0kUz4NuENHYVUChlthlNaB','0VO8gYVDSwM1Qdd2GsMoYK','6Ole34qqbgkZ60IyrcVm7e'/* ,'3F5CgOj3wFlRv51JsHbxhe','0O6u0VJ46W86TxN9wgyqDj','0HqZX76SFLDz2aW8aiqi7G','40uMIn2zJLAQhNXghRjBed','2JvzF1RMd7lE3KmFlsyZD8','3GdWfmQBiiJrDUvSZS1bGv','68Dni7IE4VyPkTOH9mRWHr' */]
          },
          {
            id: 6,
            playListTitle: 'Chill Mix',
            playListImg: fall,
            playListTracksIds:['4WNcduiCmDNfmTEz7JvmLv', '65rRB2mspD309xE6YimZTl','0Fs9cdPDhptWEDJmiCbkEW','5IgjP7X4th6nMNDh4akUHb','4hTErxf8ZqFNGH0hZqEoAI'/* ,'7oDd86yk8itslrA9HRP2ki','5CM4UuQ9Gnd6K2YyKGPMoK','2HhJ0b1AwX5Vgcnf3zzx1p','7rbECVPkY5UODxoOUVKZnA','2dHHgzDwk4BJdRwy9uXhTO','2g6tReTlM2Akp41g0HaeXN','4tqcoej1zPvwePZCzuAjJd' */]
          }
        ]
      },
      {
        playListSetName: "Today's Hits",
        playLists: [
          {
            id: 1,
            playListTitle: 'R&B Mix',
            playListImg: lake,
            playListTracksIds:['4PhsKqMdgMEUSstTDAmMpg', '2fQ6sBFWaLv2Gxos4igHLy','08uGhvS5MfBk7crUCpnjva','6bnF93Rx87YqUBLSgjiMU8','3fLXPbXiezgmbJEEOkT8ve'/* ,'04KTF78FFg8sOHC1BADqbY','7t2bFihaDvhIrd2gn2CWJO','0XO2hckt5aHvvwH7FFdVYF','6HfOzLLjsaXsehIFEsrxTk','7MXVkk9YMctZqd1Srtv4MB','1IIKrJVP1C9N7iPtG6eOsK','6jG2YzhxptolDzLHTGLt7S' */]
          },
          {
            id: 2,
            playListTitle: 'Locked In',
            playListImg: dj,
            playListTracksIds:['01Lr5YepbgjXAWR9iOEyH1', '1xzBco0xcoJEDXktl7Jxrr','7LR85XLWw2yXqKBSI5brbG','1jaTQ3nqY3oAAYyCTbIvnM','42zd6DYQ4o4SECmTITrM1U'/* ,'5SWnsxjhdcEDc7LJjq9UHk','2IRZnDFmlqMuOrYOLnZZyc','2I9foKseoFQh07p6sD2voE','6ScJMrlpiLfZUGtWp4QIVt','0nbXyq5TXYPCO7pr3N8S4I','3hQCHzkE5oSA3F1xM8bpcM','2BcMwX1MPV6ZHP4tUT9uq6' */]
          },
          {
            id: 3,
            playListTitle: 'Rock Mix',
            playListImg: floral,
            playListTracksIds:['7jwDuO7UZvWs77KNj9HbvF','04aAxqtGp5pv12UXAg4pkq', '4Yf5bqU3NK4kNOypcrLYwU','4o74y4XY1ypNZkZtZkK8Wi','60a0Rd6pjrkxjPbaKzXjfq'/* ,'0UFDKFqW2oGspYeYqo9wjA','4wzjNqjKAKDU82e8uMhzmr','1lgN0A2Vki2FTON5PYq42m','2nLtzopw4rPReszdYBJU6h','2Z8WuEywRWYTKe1NybPQEW', '49nmsafpkJp2lDj9b4jkxh','4G8gkOterJn0Ywt6uhqbhp' */]
          },
          {
            id:4,
            playListTitle: 'Power Workout',
            playListImg: fall,
            playListTracksIds:['1bDbXMyjaUIooNwFE9wn0N', '1EJIcDYXwSqipW5dFe4uJz', '3w1WjD2zJqjBjDz5fwqQPJ','02kDW379Yfd5PzW5A6vuGt','4A8cWXxKfIL3lAyUDzXbCF'/* ,'7KXjTSCq5nL1LoYtL7XAwS','0vjeOZ3Ft5jvAi9SBFJm1j','527k23H0A4Q0UJN3vGs0Da','6gBFPUFcJLzWGx4lenP6h2','3QFInJAm9eyaho5vBzxInN','3XOalgusokruzA5ZBA2Qcb','4Li2WHPkuyCdtmokzW2007' */]
          },
          {
            id:5,
            playListTitle: '2004 Hits',
            playListImg: virus,
            playListTracksIds:['5rb9QrpfcKFHM1EUbSIurX', '2PpruBYCo4H7WOBJ7Q2EwM','4dvQg9sD8k9y4qiEURuj8v','0YUrjFy4qFKOO5NhM9tYdV','4mmkhcEm1Ljy1U9nwtsxUo'/* ,'2NBQmPrOEEjA8VbeWOQGxO','7wBThXx7BGZHJJ3aN3OPvv','5g1vtHqi9uV7xtYeCcFOBx','4hfIVhq0F0zFUcrbecsYmo','0qcjuYtMWhBjXg0Xwt5SzS','68vgtRHr7iZHpzGpon6Jlo','0RmXtDH1cBMGImRrmn5xL6' */]
          }
        ]
      },
      {
        playListSetName: "Your Genre Mixes",
        playLists: [
          {
            id: 1,
            playListTitle: 'RnB Mix',
            playListImg: fall,
            playListTracksIds:['4PhsKqMdgMEUSstTDAmMpg', '2fQ6sBFWaLv2Gxos4igHLy','08uGhvS5MfBk7crUCpnjva','6bnF93Rx87YqUBLSgjiMU8','3fLXPbXiezgmbJEEOkT8ve'/* ,'04KTF78FFg8sOHC1BADqbY','7t2bFihaDvhIrd2gn2CWJO','0XO2hckt5aHvvwH7FFdVYF','6HfOzLLjsaXsehIFEsrxTk','7MXVkk9YMctZqd1Srtv4MB','1IIKrJVP1C9N7iPtG6eOsK','6jG2YzhxptolDzLHTGLt7S' */]
          },
          {
            id: 2,
            playListTitle: 'HipHop Mix',
            playListImg: dj,
            playListTracksIds:['69bHJ9qs5FrUJbKP8xU8uZ', '2xLMifQCjDGFmkHkpNLD9h','2c5Isyd07hWsl7AQia2Dig', '6vegnfDS8DAEaCqWaPYGPy','1Ser4X0TKttOvo8bgdytTP'/* ,'4UQMOPSUVJVicIQzjAcRRZ', '6lbhWl34Il0WXm5pX1fM9E','6ws54n2IzyrIxxyzlG2bVJ','33gwZOGJWEZ7dRWPqPxBEZ','7bHT9osSq1rwT2yaImzqCi','0Fs9cdPDhptWEDJmiCbkEW','2XHzzp1j4IfTNp1FTn7YFg', */]
          },
          {
            id: 3,
            playListTitle: 'Rock',
            playListImg: jagged,
            playListTracksIds:['7jwDuO7UZvWs77KNj9HbvF','04aAxqtGp5pv12UXAg4pkq', '4Yf5bqU3NK4kNOypcrLYwU','4o74y4XY1ypNZkZtZkK8Wi','60a0Rd6pjrkxjPbaKzXjfq'/* ,'0UFDKFqW2oGspYeYqo9wjA','4wzjNqjKAKDU82e8uMhzmr','1lgN0A2Vki2FTON5PYq42m','2nLtzopw4rPReszdYBJU6h','2Z8WuEywRWYTKe1NybPQEW', '49nmsafpkJp2lDj9b4jkxh','4G8gkOterJn0Ywt6uhqbhp' */]
          },
          {
            id:4,
            playListTitle: 'Drill Mix',
            playListImg: virus,
            playListTracksIds:['6uvMKqNlrSvcC4NaKnrwjZ', '2zxEc1GCSCxbHIXTfhraRC','6mSzsSdu0CWIV70jEjWMhI',]
          },
          {
            id:5,
            playListTitle: 'Pop Mix',
            playListImg: bear,
            playListTracksIds:['3PXaV1mMx4Yff79iQivEkQ','4rHZZAmHpZrA3iH5zx8frV','4gbVRS8gloEluzf0GzDOFc','4LRPiXqCikLlN15c3yImP7','0O6u0VJ46W86TxN9wgyqDj'/* ,'1PnAx788sAvcI3ZxTlEyX8','4jbmgIyjGoXjY01XxatOx6','4NeOWqHmlrGRuBvsLJC9rL','4KTtYhxFtFL7mBwnjkKfLm','0KKkJNfGyhkQ5aFogxQAPU','00Blm7zeNqgYLPtW6zg8cj','37FXw5QGFN7uwwsLy8uAc0' */]
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
