import React, { Component } from "react";

import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
  } from "@material-ui/core";

class Signup extends React.Component
{
    render () {
        return (
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
                        Sign-up
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" spacing={2}>
                      <Grid item>
                          <TextField
                            placeholder="First Name"
                            fullWidth
                            variant="outlined"
                            required
                            autoFocus
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            placeholder="Last Name"
                            fullWidth
                            variant="outlined"
                            required
                          />
                        </Grid>
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
                          <TextField
                            placeholder="Type Password Again"
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
                            Sign-up
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )
    }
}
export default Signup;