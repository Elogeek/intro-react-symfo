import './index.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";

import {Home} from "./Pages/Home/Home.jsx";
import {Contact} from "./Pages/Contact/Contact.jsx";
import {UserAccount} from "./Pages/UserAccount/UserAccount.jsx";
import {Header} from "./components/Header/Header.jsx";
import {Promotions} from "./Pages/Promotions/Promotions.jsx";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound.jsx";

ReactDOM.render(
  <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="user-account" element={<UserAccount />}/>
          <Route path="/promotions" element={<Promotions />}/>
          <Route path="*" element={<RouteNotFound />}/>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


