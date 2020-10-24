import React, { Component } from "react";

import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
  } from "@material-ui/core";

class Login extends React.Component
{
    render () {
        return (
                <div>
             <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
                 </div>
       <div style={{ paddingTop: "120px" }}>
         <Grid container spacing={3} justify="center" direction="row">
           <Grid item>
             <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value="  "
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item>
                                       <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{ paddingLeft: "5px" }}>
                    Forgot Password?
                  </Link>
                  <Link
                    href="#"
                    variant="body2"
                    style={{ paddingLeft: "25px" }}
                  >
                    New User?
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>


        )
    }
}
export default Login;