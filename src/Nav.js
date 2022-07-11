

export default function Nav(props){

    return(
        <div className="nav">
            <div id="navigation" className="text-center">
                {props.Slideno==0?<button data-testid="button-restart" className="small outlined" onClick={props.RestartHandler} disabled>Restart</button>
                :<button data-testid="button-restart" className="small outlined" onClick={props.RestartHandler} >Restart</button>}
                {props.Slideno==0?<button data-testid="button-prev" className="small" onClick={props.PrevHandler} disabled>Prev</button>
                :<button data-testid="button-prev" className="small" onClick={props.PrevHandler} >Prev</button>}
                {props.Slideno==props.SlidesArraylength?<button data-testid="button-next" className="small" onClick={props.NextHandler} disabled>Next</button>
                :<button data-testid="button-next" className="small" onClick={props.NextHandler} >Next</button>  }
            </div>
        </div>
    );
}