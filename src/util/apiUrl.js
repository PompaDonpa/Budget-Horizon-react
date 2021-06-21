export const apiUrl = () => { 
    return window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://github.com"
 }