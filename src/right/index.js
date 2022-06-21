import React from 'react';
import { Typography } from '@mui/material';
import RightContainer from './styles';
import Profile from '@mui/icons-material/Info';
import WorkHistory from '@mui/icons-material/WorkHistory';
import workData from './work';

const Right = () => {
    const renderWork = React.useCallback(() =>{
        return workData.map(work => {
            return(
                <div className='work' key={work.company}>
                    <strong>{work.time}</strong>
                    <strong>{work.company}</strong>
                    <strong>{work.location}</strong>
                    <ul>
                        <li>
                            <span className='bold'>Technologies : </span>
                            <span>{work.technologies}</span>
                        </li>
                        {work.description.map( p => <li key={p}>{p}</li>)}
                    </ul>
                </div>
            );
        });
    }, []);
    return (
        <RightContainer>
            <section>
                <Typography variant="h6" component="h6">
                    <Profile className='icon' />Profile. About Me
                </Typography>
                <p>
                    Javascript Full Stack Developer with 6 years experience. 
                    Strong in design and integration, analysis and problem solving skills, 
                    data structures and algorithms, I consider myself a fast learner and a team player. 
                    I feel that can contribute to any software development department. 
                    My expertise lies in javascript programming on both server and client side.
                </p>
            </section>
            <section>
                <Typography variant="h6" component="h6">
                    <WorkHistory className='icon icon2' />Work Experience
                </Typography>
                {renderWork()}
            </section>
        </RightContainer>
    );
}

export default Right;