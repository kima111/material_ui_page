import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, ListItem, List, ListItemText } from '@material-ui/core';

export default function index() {
    return (
        <div>
            <AppBar static>
                <Toolbar>
                    <Typography>
                        Header
                    </Typography>
                    <Drawer open>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}> 
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}
