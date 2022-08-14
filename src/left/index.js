import React from 'react';
import { Typography } from '@mui/material';
import LeftContainer from './styles';
import Location from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/PhoneIphone';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Skills from '@mui/icons-material/Laptop';
import Training from '@mui/icons-material/WorkspacePremium';
import Awards from '@mui/icons-material/Grade';
import Language from '@mui/icons-material/Language';
import Link from 'next/link';
import School from '@mui/icons-material/School';

const Left = () => {
    return (
        <LeftContainer>
            <Typography variant="h5" component="h5">POTTEPALEM RAVI</Typography>
            <Typography variant="h6" component="h6">Senior Frontend Developer</Typography>
            <p><Location className='icon' />Nellore, Andhrapradesh</p>
            <p><Phone className='icon' />+91 9493152900</p>
            <p><Email className='icon' />ravip.iiit@gmail.com</p>
            <p>
                <LinkedIn className='icon' />
                <Link href='https://www.linkedin.com/in/ravip2900'>https://linkedin.com/in/ravip2900</Link>
            </p>
            <p>
                <GitHub className='icon' />
                <Link href='https://github.com/ravip2900'>https://github.com/ravip2900</Link>
            </p>
            <section>
                <Typography variant="h6" component="h6">
                    <Skills className='icon icon2' />Skills
                </Typography>
                <ul>
                    <li>Data Structures &amp; Algorithms</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Mongo DB</li>
                </ul>
            </section>
            <section>
                <Typography variant="h6" component="h6">
                    <Awards className='icon icon2' />Honours &amp; Awards
                </Typography>
                <ul>
                    <li>High School Topper</li>
                    <li>TCS - Star of the LG</li>
                    <li>TCS - Champions of ILP</li>
                    <li>Lowe's - Individual Excellence Award</li>
                    <li>Lowe's - Team Courage Award</li>
                </ul>
            </section>
            <section>
                <Typography variant="h6" component="h6">
                    <School className='icon icon2' />Education
                </Typography>
                <ul className='no-style'>
                    <li>Computer Science - B.Tech</li>
                    <li>AP IIIT, Rk Valley - RGUKT</li>
                    <li>Kadapa, Andhrapradesh</li>
                </ul>
            </section>
            <section>
                <Typography variant="h6" component="h6">
                    <Training className='icon icon2' />Training &amp; Certifications
                </Typography>
                <ul>
                    <li>Javascript Alogorithms and Datastructures - FreeCodeCamp</li>
                </ul>
            </section>
            <section>
                <Typography variant="h6" component="h6">
                    <Language className='icon icon2' />Languages
                </Typography>
                <ul>
                    <li>Telugu</li>
                    <li>English</li>
                    <li>Hindi</li>
                </ul>
            </section>
        </LeftContainer>
    );
}

export default Left;