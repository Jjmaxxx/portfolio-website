import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    components:{
        MuiDialog:{
            styleOverrides:{
                paper:{
                    borderStyle:"solid",
                    borderColor:"#27496D",
                    borderWidth:"5px"
                }
            }
        },
        MuiPaper:{
            styleOverrides: {
              root:{
                backgroundColor:"#142850",
              },
            }
          },
    },
    palette: {
        primary: {
            main: '#27496D',
            light:'#4dadb5',
            dark:"#005058",
            contrastText: '#0C7B93',
        },
        secondary: {
            main: '#00A8CC',
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