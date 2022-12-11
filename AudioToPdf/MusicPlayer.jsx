import React, { useState } from 'react';
import styled from 'styled-components';
import PauseIcon from '@material-ui/icons/PauseCircleFilled';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import PreviousIcon from '@material-ui/icons/SkipPrevious';
import NextIcon from '@material-ui/icons/SkipNext';
import bg1 from './Images/bg1.jpg';


const MusicOuter = styled.div`
    border: solid 2px rgb(255 130 1);
    max-width: 500px;
    width:100%;
    height: 600px;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50% , -50%);
`;
const MusicTitle = styled.h3`
    font-size: 1.5rem;
    color:rgb(255 130 1);
    text-align: center;
`;
const MusicCircle = styled.div`
    border: 2px solid rgb(255 130 1);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: auto;
    position: relative;
    top: 20px;
    background: url('${bg1}') no-repeat;
    background-size: 100% 100%;
`;
const IconOuter = styled.div`
    position: absolute;
    bottom: 20px;
    left:10%;
    max-width: 400px;
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const TimerOuter = styled.div `
    width:70px;
    height:30px;
    position:absolute;
    bottom:110px;
    right:10px;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`;
const TimerSec = styled.div `
    font-size: 1rem;
`;
const TimerMin = styled.h3 `
    font-size: 1.2rem;
`;
const ProgressBar = styled.div `
    position: absolute;
    bottom:20%;
    max-width:350px;
    width:100%;
    left:15%;
    border:solid 1px rgb(255,130,1);
    background:rgb(255,130,1);
    height:3px;
    cursor:pointer;
`;
const ProCircle = styled.div `
    position:absolute;
    right:-1px;
    bottom:-7px;
    border:2px solid white;
    width:15px;
    height:15px;
    background:rgb(255,130,1);
    border-radius: 50%;
`;


export function PlayPause() {
    const [play, setPlay] = useState('flex');
    const [pause, setPause] = useState('none');
    return (
        <>
            <IconOuter>
                <PreviousIcon className='skpIcon' ></PreviousIcon>
                <PauseIcon className='playIcon' style={{ display: pause }}
                    onClick={() => {
                        setPause('none');
                        setPlay('flex');
                    }
                    }

                ></PauseIcon>
                <PlayIcon className='playIcon' style={{ display: play }}
                    onClick={() => {
                        setPause('flex');
                        setPlay('none');
                    }
                    }
                />
                <NextIcon className='skpIcon' ></NextIcon>
                <TimerOuter>
                    <TimerMin >1 :</TimerMin>
                    <TimerSec >25</TimerSec>
                </TimerOuter>
            </IconOuter>
        </>
    )
}

export class MusicPlayer extends React.Component {

    render() {
        return (
            <>
                <MusicOuter>
                    <MusicTitle>Pdf To Audio Convertor</MusicTitle>
                    <MusicCircle />
                    <ProgressBar >
                        <ProCircle />
                    </ProgressBar>
                    <PlayPause />
                </MusicOuter>
            </>
        );
    }
}

