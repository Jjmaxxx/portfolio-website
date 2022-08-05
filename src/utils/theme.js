import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#3FC1C9',
            // light:'#4dadb5',
            // dark:"#005058",
            contrastText: '#FC5185',
        },
        secondary: {
            main: '#F5F5F5',
            // light:'#5cdfe7',
            // dark:"#007d85",
            contrastText: '#FC5185',
        },
        background:{
            default:"#F4EEFF"
        }
    },
})
export default theme;