// Import libraries
import { createTheme } from "@mui/material";

// Import utils
import palette from './palette';

const theme = createTheme({
    typography: {
        fontFamily:
            '"Titillium Web", sans-serif',
        allVariants: {
            color: palette.text.primary
        }
    },
    palette
})

export default theme;