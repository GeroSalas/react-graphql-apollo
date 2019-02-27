import { createMuiTheme } from '@material-ui/core';
import { deepPurple, pink, red } from '@material-ui/core/colors';

const appTheme = createMuiTheme({
    // https://material-ui.com/style/color/#color-palette
    palette: {
        type: 'dark',
        primary: deepPurple,
        secondary: pink,
        error: red,
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Ubuntu',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

export default appTheme;
