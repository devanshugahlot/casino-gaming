import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { FaInfoCircle } from "react-icons/fa";

import {
    FaFacebookMessenger,
    FaTwitter,
    FaVimeo,
    FaSkype,
    FaRss,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaTelegram,
    FaLinkedin,
  } from "react-icons/fa";
    
export default function SwipeableTemporaryDrawer2() {
  const [state, setState] = React.useState({
    top: false,
  });

  const socialIcons = [
   
    <a href="https://www.jobhai.com/hire/candidate-listing?job_id=2982405"  style={{paddingRight:"30px", color:"white"}}><FaFacebook key="facebook" /></a>,
    <a href="https://www.jobhai.com/hire/candidate-listing?job_id=2982405"  style={{paddingRight:"30px", color:"white"}}><FaInstagram key="instagram" /></a>,
    <a href="https://www.jobhai.com/hire/candidate-listing?job_id=2982405"  style={{paddingRight:"30px", color:"white"}}><FaTelegram key="telegram" /></a>,
    <a href="https://www.jobhai.com/hire/candidate-listing?job_id=2982405"  style={{paddingRight:"30px", color:"white"}}><FaLinkedin key="linkdin" /></a>,
   
  ];

 const Data = [
 {    name: "📞+917240650376", },
 {    name: "📍DHANI BARALA, Jhunjhunu", },
 {    Icons:  socialIcons},
 
 ]

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

//   const handleListItemClick = (text) => {
//     // Add your logic to navigate to the corresponding page
//     switch (text) {
//       case 'Home':
//         navigate('/'); // Replace '/home' with your actual home route
//         break;
//       case 'About':
//         navigate('/About'); // Replace '/about' with your actual about route
//         break;
//         case 'Tournament':
//         navigate('/Tournament'); // Replace '/about' with your actual about route
//         break;

//         case 'AllGames':
//         navigate('/AllGames'); // Replace '/about' with your actual about route
//         break;
//       // Add more cases for other menu items
//       default:
//         break;
//     }
//   };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , backgroundColor:"#110E2D"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <List>
        {Data.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton  >
              <ListItemIcon>
                {/* {index % 2 === 0 ? <FaFacebook /> : <FaInstagram />} */}
              </ListItemIcon>
              <ListItemText primary={text.name}  sx={{color:"white"}}/>
              <ListItemText primary={text.Icons}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
 
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{fontSize:"36px", color:"white"}} onClick={toggleDrawer(anchor, true)}><FaInfoCircle/> </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
              

            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
