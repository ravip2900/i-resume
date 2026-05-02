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
                    Lead Software Engineer with 10 years of experience building high performance web platforms. Specialized in JavaScript across client and server environments, with strong strengths in system design, analysis, and complex integrations. Proven at leading projects end to end and improving application performance.
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