const white = '#FFFFFF';
const black = '#000000';
const darkBlue = '#152023';
const lightGray = '#767676';
const mediumGray = '#D1D1D1';
const midGray = '#fbfbfb';
const slightDarkGray = '#EBEBEB';
const purple = '#CC00FF';
const darkPurple = '#B505E1';

export default {
    common: {
        white,
        black,
    },
    primary: {
        main: purple,
        dark: darkPurple
    },
    text: {
        primary: darkBlue,
        secondary: lightGray,
        disabled: mediumGray,
    },
    divider: slightDarkGray,
    background: {
        paper: white,
        default: midGray,
    },
    action: {
        active: darkPurple,
        hover: darkPurple,
        selected: darkPurple,
        disabled: mediumGray,
        disabledBackground: mediumGray,
        focus: darkPurple
    }
};
