import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function index() {
    return (
        <div>
           <AppBar static>
               <Toolbar>
                    <Typography>
                        Header
                    </Typography>
               </Toolbar>
           </AppBar>
        </div>
    )
}
