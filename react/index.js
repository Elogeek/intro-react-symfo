import './index.css';

import {BrowserRouter, Route,Routes} from "react-router-dom";
import {Home} from "./Pages/Home.jsx";
import {Contact} from "./Pages/Contact/Contact.jsx";
import {UserAccount} from "./Pages/UserAccount/UserAccount.jsx";
import {Header} from "./components/Header.jsx";
import {RouteNotFound} from "./components/RouteNotFound.jsx";
import {ThemeContext} from "./context/ThemeContext";
import {getTheme} from "./theming";
import {createGlobalStyle, ThemeProvider} from "styled-components";

//Design
const BodyStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme !== undefined && theme.body.background};
  }
`;

ReactDOM.render(
    <BrowserRouter>
        <ThemeContext >
            <BodyStyle />
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="user-account" element={<UserAccount/>}/>
                <Route path="*" element={<RouteNotFound/>}/>
            </Routes>
        </ThemeContext>
    </BrowserRouter>,
    document.getElementById("root")
);