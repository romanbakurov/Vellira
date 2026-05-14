export const typography = {
    fontFamily: {
        base: `"KantumruyPro", system-ui, sans-serif`,
    },

    size: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
    },

    weight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    lineHeight: {
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "28px",
    },

    textStyles: {
        h1: {
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "40px",
        },
        h2: {
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "32px",
        },
        body: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
        },
        caption: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
        },
    },
} as const;