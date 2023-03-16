import React from "react";
import style from './style.module.css';
import Unclesam from '../../Images/Unclesam.jpg'
import Akpan from '../../Images/Akpan.jpg'
import Awesome from '../../Images/Awesome.jpg'
import Abasifreke from '../../Images/Abasifreke.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Team = () => {

    const LinkedColor ={
        color: '#179ede'
    }

    return (
        <div className={style.team}>
            <h1 data-aos="fade-up">Meet the team</h1>
            <div className={style.teamGrid}>
                <span data-aos="fade-up">
                    <img src={Unclesam} alt="team.jpg" />
                    <label>
                        <h2>UncleSam</h2>
                        <h3>CEO, UNCLESAM’S REPUBLIC</h3>
                        <small><LinkedInIcon style={LinkedColor} /></small>
                    </label>
                </span>
                <span data-aos="fade-up">
                    <img src={Akpan} alt="team.jpg" />
                    <label>
                        <h2>Ekuere Akpan</h2>
                        <h3>HR, UNCLESAM’S REPUBLIC</h3>
                        <small><LinkedInIcon style={LinkedColor} /></small>
                    </label>
                </span>
                <span data-aos="fade-up">
                    <img src={Awesome} alt="team.jpg" />
                    <label>
                        <h2>Kingsley Sunday</h2>
                        <h3>COMMUNITY LEAD</h3>
                        <small><LinkedInIcon style={LinkedColor} /></small>
                    </label>
                </span>
                <span data-aos="fade-up">
                    <img src={Abasifreke} alt="team.jpg" />
                    <label>
                        <h2>Abasifreke Efik</h2>
                        <h3>SOCIAL MEDIA STRATEGIST</h3>
                        <small><LinkedInIcon style={LinkedColor} /></small>
                    </label>
                </span>
            </div>
        </div>
    )
}

export default Team;    