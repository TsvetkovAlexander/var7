import React from "react";
import {Link} from 'react-router-dom';
import wash from '../../img/wash.png';
import tv from '../../img/tv.jpg';
import './style.css';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
    card: {
        width: 50,
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
    },

});
function Nav() {
    return(
        <nav className="nav">
            <Link to='/ListNews'>
                <Fab>
                    <KitchenIcon/>
                </Fab>
            </Link>
            <Link to='/ListFridge'>
                <li>Новости</li>
            </Link>
            <Link to='/ListTV'>
                <Fab>
                <img src ={wash} alt ="холодильники" width={20} />
                </Fab>
            </Link>
        </nav>
    )
}

export  default Nav;
