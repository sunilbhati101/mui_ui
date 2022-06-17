import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


export default function HeaderIconLeft() {
    return (
        <Typography display={{ xs: "none", md: "block" }}>
            <IconButton>
                <CalendarTodayIcon />
            </IconButton>
            <IconButton>
                <MailOutlineIcon />
            </IconButton>
            <IconButton>
                <ContactsOutlinedIcon />
            </IconButton>
            <IconButton>
                <StarOutlinedIcon color="secondary" />
            </IconButton>
        </Typography>
    );
}
