import React, { useState } from 'react';
import { Grid, Box, Paper, Button, Typography, Dialog } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import waiting from '../assets/images/waiting.png'

const Popup = (props) => {
    const [showModal, setShowModal] = useState(true);

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleModalOk = () => {
        alert("Submit Success!\nThank you")
        props.history.push("login")
    }

    return (
        <>
            {/* <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
                Open Login
            </Button> */}
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
                                <br />
                                <Typography variant="h6">
                                    {/* This could be due to insufficient documentation in the provided information. Our Team is working for further required details soon, you will be notified about it. */}
                                    {/* Your Application is under Process ,due to account creditScore is low.Our Team is working for further required details soon, you will be notified about it. */}
                                    Your credit score is low we need additional documentation.Your application under process. soon, you will be notified about it.
                                </Typography>
                            </center>
                        }
                        <Box mt={2}>
                            <center>
                                <Button type="submit" variant="contained" color="primary" halfWidth onClick={handleModalOk}>
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
