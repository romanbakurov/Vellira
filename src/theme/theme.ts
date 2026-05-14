export const theme = {
    colors: {
        gray: {
            900: '#000000',
            700: '#333333',
            600: '#7C7C7C',
            500: '#999999',
            200: '#D8D8D8',
            150: '#E7E7E7',
            100: '#EDEDED',
            55: '#F6F6F6',
            50: '#FAFAFA',
            0: '#fff',
        },
        Primary: '#7c5cff',
        PrimaryAccent: '#4727cd',
        Secondary: '#00B956',
        SecondaryAccent: '#10E272',
        Tertiary: '#444189',
        TertiaryAccent: '#24225c',
        Info: '#34AAF2',
        InfoAccent: '#5BD9E5',
        Error: '#F62434',
        ErrorAccent: '#EB5A40',
        Warning: '#F36F20',
        WarningAccent: '#FFA717',
    },
    radius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
    },

    shadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.15)",
    },

    zIndex: {
        dropdown: 1000,
        modal: 1100,
        tooltip: 1200,
    },
} as const;