import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#27496D',
            light:'#4dadb5',
            dark:"#005058",
            contrastText: '#0C7B93',
        },
        secondary: {
            main: '#0C7B93',
            // light:'#5cdfe7',
            // dark:"#007d85",
            contrastText: '#00A8CC',
        },
        background:{
            default:"#142850"
        }
    },
})
export default theme;