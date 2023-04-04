import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
        <div className="VideoFooter__text">
            <h3>@{name}</h3>
            
            <p>{description}</p>
           <div className="VideoFooter__music"> 
            <MusicNoteIcon  className='VideoFooter__icon'/>
            <div className='VideoMusicFooter__text'>
            <p>{music}</p>
            </div>
        </div>
        </div>
        <img  
        className='VideoFooter__record'
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
         alt="imagem de vinil girando"
         />
    </div>
  )
}

export default VideoFooter