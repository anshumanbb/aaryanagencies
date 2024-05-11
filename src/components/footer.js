import React from 'react';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer(){
    return (
        <Box>
            <h5>© 2024- Aaryan Agencies</h5>
            <p><LanguageIcon/>English</p>
            <XIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
        </Box>
    )
}