"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0b0b0b",
            paper: "#111111",
        },
        primary: {
            main: "#c8a45d", // luxury gold
        },
        text: {
            primary: "#ffffff",
            secondary: "#b5b5b5",
        },
    },
    typography: {
        fontFamily: "'Playfair Display', serif",
        h1: {
            fontWeight: 600,
            letterSpacing: "0.12em",
        },
        body1: {
            fontFamily: "'Inter', sans-serif",
        },
    },
});

export default theme;
