import "./featured.scss"
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Spotify</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <div className="centered">
      <a href="https://spotify-github-profile.vercel.app/api/view?uid=d57rcuk3sbwgiotedak0swrdh&cover_image=true&theme=compact" target="_top">
        <img
          src="https://spotify-github-profile.vercel.app/api/view?uid=d57rcuk3sbwgiotedak0swrdh&cover_image=true&theme=compact&cover_image=true&theme=default"
          style={{ height: '340px' }}
          alt="Spotify Profile"
        />
      </a>
    </div>
         </div>
         <div className="summary">
         </div>
      </div>
    </div>
  )
}

export default Featured
