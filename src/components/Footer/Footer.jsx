import React from 'react';

import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Link from '@mui/joy/Link';
import Sheet from '@mui/joy/Sheet';
import { Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { teal } from '@mui/material/colors';
const color = {
  teal: teal[100],
  teal1: teal[500],
};

export default function Footer() {
  return (
    <Sheet
      variant="solid"
      sx={{
        backgroundColor: color.teal,
        flexGrow: 1,
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img style={{width:'3rem'}} src='./LDL.png'/>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <Link href={'https://www.linkedin.com/in/lucas-lucovas-87319a229/'} target={'_blank'}>
            <LinkedInIcon />
          </Link>
        </IconButton>
        <IconButton variant="plain">
          <Link href={'https://github.com/LucasLucovas'} target={'_blank'}>
            <GitHubIcon />
          </Link>
        </IconButton>
        <Link
          variant="plain"
          href={"mailto:lucaslucovas@gmail.com?Subject=Hola%20quisiera%20contactar%20contigo!"}
          sx={{":hover":{textDecoration: 'none'}}}
        >
          <MailOutlineIcon/>
        </Link>

      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >

        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Base UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}