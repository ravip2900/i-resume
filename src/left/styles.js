import styled from "@emotion/styled";
import Box from '@mui/material/Box';

const LeftContainer = styled(Box)`
    background-color: #034d71;
    color: white; 
    padding: 16px;
    height: 100vh;
    section {
        margin-top: 16px;
        ul {
            margin: 0;
            font-size: 16px;
        }
    }
    .icon {
        vertical-align: middle;
        margin-right: 4px;
        font-size: 18px;
        background: #2196f3;
    }
    .icon2 {
        font-size: 24px;
        vertical-align: top;
        margin-right: 8px;
        background: none;
    }
    a {
        text-decoration: none;
        color: white;
    }
    p{
        margin: 4px 0;
    }
    h5{
        font-weight: 700;
        font-size: 20px;
    }
    h6{
        font-size: 16px;
    }
    .no-style {
        list-style: none;
    }
`;

export default LeftContainer;