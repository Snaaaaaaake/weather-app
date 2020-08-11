import React from 'react';
import Box from '@material-ui/core/Box';

const ErrorElement = (props) => {
    return (
        <Box align="center">
            {`Ошибка: ${props.error}`}
        </Box>
    );
}
export default ErrorElement;