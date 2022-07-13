import './footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export default function Footer(){

    return(
        <div className="footer">
            <footer>    
                <h3>Made by Deepali Shivanagi</h3>
                <div className='social-link'>
                    <IconButton href="https://twitter.com/DeepaliShivan1" target="_blank" rel="twitter_link" sx={{color:"black","&:hover":{color:"white"}}}>
                         <TwitterIcon />
                   </IconButton>
                   <IconButton href="https://www.linkedin.com/in/deepali-shivanagi/" target="_blank" rel="linkedin_link" sx={{color:"black","&:hover":{color:"white"}}}>
                        <LinkedInIcon />
                   </IconButton>
                   <IconButton href="https://github.com/deepalishivanagi" target="_blank" rel="github_link" sx={{color:"black","&:hover":{color:"white"}}}>
                        <GitHubIcon />
                   </IconButton>
                </div>
            </footer>
        </div>

    );
}