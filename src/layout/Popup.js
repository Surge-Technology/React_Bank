import React, { useState } from 'react';
import { Grid, Avatar, Box, Paper, Button, Typography, Dialog, Icon } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import waiting from '../assets/images/waiting.png'

const Popup = () => {
    const [showModal, setShowModal] = useState(true);

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
                Open Login
            </Button>
            <Dialog open={showModal} onClose={handleModalClose} aria-labelledby="login-dialog-title">
                <Paper elevation={0} style={{ padding: 0, margin: '60px auto', width: 400 }}>
                    <Grid item>
                        {
                            <center>
                                {/* <Avatar>
                                    < Avatar />
                                </Avatar> */}
                                <>
                                {/* <img src="https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" style={{ display: 'block', border: '0px' }} /> */}
                                <img src={waiting} width="125" height="120" style={{ display: 'block', border: '0px' }} />
</>
                                <br/>
                                <Typography variant="h6">
                                    This could be due to insufficient documentation, discrepancies in the provided information. Our Team is working for further required details soon, you will be notified about it.

                                </Typography>
                            </center>
                        }
                        <Box mt={2}>
                            <center>
                                <Button type="submit" variant="contained" color="primary" halfWidth onClick={handleModalClose}>
                                    Ok
                                </Button>
                            </center>
                        </Box>
                    </Grid>
                </Paper>
            </Dialog>
        </>
    );
};

export default Popup;
