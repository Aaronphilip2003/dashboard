import "./sidebar.scss"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import {Link} from "react-router-dom";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import chatgpticon from "./chatgpticon.png"


const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar"> 
    <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>

     <span className="logo">Dashboard</span>
     </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
           <p className="">Quick Access</p>
          <li>            
            </li>
            <a href="https://www.gmail.com" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              <li>
                <MailIcon className="icon" />
                <span>Gmail</span>
              </li>
            </a>
            <a href="https://github.com/Aaronphilip2003" style={{textDecoration: "none"}}  target="_blank" rel="noopener noreferrer">
            <li>
              <GitHubIcon className="icon" />
            <span>Github</span>
            </li>
            </a>
            <a href="https://chat.openai.com/" style={{textDecoration: "none"}}  target="_blank" rel="noopener noreferrer">
            <li>
              <img src={chatgpticon}/>
            <span>ChatGPT</span>
            </li>
            </a>
        </ul>

    </div>
    <div className="bottom">
        <div className="colorOption" 
        onClick={() => dispatch({ type : "LIGHT"})}>
        </div>

          <div className="colorOption"
        onClick={() => dispatch({ type : "DARK"})}>
        </div>

    </div>
    </div>
  )
}

export default Sidebar
