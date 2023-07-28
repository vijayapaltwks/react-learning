import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ScienceIcon from '@mui/icons-material/Science';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonIcon from '@mui/icons-material/Person';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Menu(props) {

  const [open, setOpen] = React.useState(true);
  const [showMenu, setShowMenu] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (
    event,
    index,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className='menu-bar'>
      {props.showMenu && 
      <>
      <div style={{textAlign:"end"}}>
      <IconButton aria-label="copy" onClick={()=>props.closeMenu()}>
        <CloseIcon />
      </IconButton>
      </div>
      <List
        sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon className="menu-icon">
            <ModelTrainingIcon />
          </ListItemIcon>
          <ListItemText primary="Menu 1" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 0)}
              selected={selectedIndex === 0}>
              <ListItemIcon className="menu-icon">
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Sub Menu 1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 1)}
              selected={selectedIndex === 1}>
              <ListItemIcon className="menu-icon">
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Sub Menu 2" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon className="menu-icon">
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary="Menu 2" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 4)}
            selected={selectedIndex === 4}>
              <ListItemIcon>
                <ScienceIcon />
              </ListItemIcon>
              <ListItemText primary="Sub menu 1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 5)}
              selected={selectedIndex === 5}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Sub menu 2"/>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      </>
      }
    </div>
  );
}