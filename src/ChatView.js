import React, { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ChatView.css'
import { selectSelectedImage } from './features/appSlice'

function ChatView() {

    const selectedImage = useSelector(selectSelectedImage)
    const history = useHistory()

    const exit = () => {
        history.replace('./chats')
    }
    
    useEffect(() => {
        if(!selectedImage) {
            exit()
        }
    }, [])

    return(
        <div className='chatView'>
            <img onClick={exit} src={selectedImage} alt=''/>
            <div className='chatView__timer'>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7BB01', 0.33],
                        ['#A30000', 0.33],
                    ]}
                >
                    {({ remainingTime }) => {

                        if(remainingTime === 0) {
                            exit();
                        }

                        return remainingTime;
                    }}

                </CountdownCircleTimer>
            </div>
        </div>
    )
}

export default ChatView