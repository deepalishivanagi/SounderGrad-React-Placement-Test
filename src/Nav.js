import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';
import './Nav.css';

export default function Nav(props){

    return(
        <div className="nav">
            <div id="navigation" className="text-center">
                {props.Slideno==0?<IconButton disabled><ChevronLeftIcon  data-testid="button-prev" fontSize="large" onClick={props.PrevHandler}/></IconButton> 
                :<IconButton sx={{color:'black','&:hover':{color:'white'}}}> <ChevronLeftIcon data-testid="button-prev" fontSize="large" onClick={props.PrevHandler} /></IconButton>}
                {props.Slideno==0?<IconButton  disabled><RestartAltIcon data-testid="button-restart" fontSize="large" onClick={props.RestartHandler} /></IconButton>
                :<IconButton sx={{color:'black','&:hover':{color:'white'}}}><RestartAltIcon data-testid="button-restart" fontSize="large" onClick={props.RestartHandler} /></IconButton>}
                {props.Slideno==props.SlidesArraylength?<IconButton disabled><ChevronRightIcon data-testid="button-next" fontSize="large" onClick={props.NextHandler} /></IconButton>
                :<IconButton sx={{color:'black','&:hover':{color:'white'}}}><ChevronRightIcon data-testid="button-next" fontSize="large" onClick={props.NextHandler} /></IconButton> }

              
                {/* {props.Slideno==0?<button data-testid="button-restart" className="small outlined" onClick={props.RestartHandler} disabled>Restart</button>
                :<button data-testid="button-restart" className="small outlined" onClick={props.RestartHandler} >Restart</button>}
                {props.Slideno==0?<button data-testid="button-prev" className="small" onClick={props.PrevHandler} disabled>Prev</button>
                :<button data-testid="button-prev" className="small" onClick={props.PrevHandler} >Prev</button>}
                {props.Slideno==props.SlidesArraylength?<button data-testid="button-next" className="small" onClick={props.NextHandler} disabled>Next</button>
                :<button data-testid="button-next" className="small" onClick={props.NextHandler} >Next</button>  } */}
            </div>
        </div>
    );
}