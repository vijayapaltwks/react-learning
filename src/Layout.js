import * as React from 'react';
import { Grid } from "@mui/material";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Search from "./components/Search";
import { IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Layout() {

  const [showMenu, setShowMenu] = React.useState(true);

  const closeMenu = ()=>{
    setShowMenu(false);
  }
  return (
    <div className="Layout">
      <Header />
      <div className="content">
      <Grid spacing={2} container>
        {showMenu && <Grid xs={2} className="content-left" style={{transition: "transition: .25s ease-in-out;"}}>
          <Menu closeMenu={closeMenu} showMenu={showMenu} />
        </Grid>
        }
        <Grid xs={showMenu ? 10 : 12} className="content-right">
        {!showMenu && <div>
          <IconButton aria-label="copy" onClick={()=>setShowMenu(true)}>
            <ArrowForwardIosIcon />
          </IconButton>
          </div>}
          {showMenu && <IconButton aria-label="copy"/>}
          <Search />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default Layout;

