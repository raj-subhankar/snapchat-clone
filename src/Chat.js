import { Avatar } from '@material-ui/core'
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import React from 'react'
import { useDispatch } from 'react-redux'
import ReactTimeago from 'react-timeago'
import './Chat.css'
import { selectImage } from './features/appSlice'

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
    
    const dispatch = useDispatch()
    
    const open = () => {
        if(!read) {
            dispatch(selectImage(imageUrl))
        }
    }
    return(
        <div onClick={open} className='chat'>
            <Avatar className='chat__avatar' src={profilePic}/>
            <div className='chat__info'>
                <h4>Subh</h4>
                <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
            </div>
            {!read && <StopRoundedIcon className='chat__readIcon'/>}
        </div>
    )
}

export default Chat