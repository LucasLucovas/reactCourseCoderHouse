import React from 'react';

import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';

import Link from '@mui/joy/Link';
import Sheet from '@mui/joy/Sheet';
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
        <IconButton variant='plain'>
          <Link
            variant="plain"
            href={"mailto:lucaslucovas@gmail.com?Subject=Hola%20quisiera%20contactar%20contigo!"}
            sx={{":hover":{textDecoration: 'none'}}}
          >
            <MailOutlineIcon/>
          </Link>
        </IconButton>
         <Link
          color=""
          disabled={false}
          level="body-sm"
          underline="none"
          variant="plain"
          href="https://www.pexels.com"
          sx={{position:'absolute', right: 50}}
        >
          Photos provided by Pexels
        </Link>
      </Box>
      
    </Sheet>
  );
}