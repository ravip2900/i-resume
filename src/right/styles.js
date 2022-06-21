import styled from "@emotion/styled";
import Box from '@mui/material/Box';

const RightContainer = styled(Box)`
    padding: 16px;
    section {
        margin-bottom: 16px;
    }
    h6{
        color: #2196f3;
    }
    p{
        font-size: 14px;
        margin: 8px 0 0 8px;
    }
    .icon {
        font-size: 26px;
        vertical-align: text-bottom;
        margin-right: 8px;
        color: #2196f3;
    }
    ul {
        margin: 0;
        font-size: 14px;
    }
    .work {
        strong {
            margin: 2px 0 0 8px;
            display: block;
        }
        margin-bottom: 16px;
    }
    .bold {
        font-weight: 700;
    }
`;

export default RightContainer;