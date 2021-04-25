import React from 'react';
import { Avatar, Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    accountChangeSpan: {
        cursor: 'pointer',
        color: 'red',
        transition: 'all 200ms ease-in-out',
        '&:hover': {
            color: 'orange'
        }
    },
    errorMessage: {
        color: 'red'
    }
}))

const Login = (props) => {
    const classes = useStyles()

    const {
        setEmail,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <Container maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar >
                <Typography component="h1" variant="h5">
                    {hasAccount ? "Login" : "Register"}
                </Typography>
                <form
                    noValidate
                    className={classes.form}>
                    <TextField
                        type="email"
                        label='Email'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className={classes.errorMessage}>{emailError}</p>
                    <TextField
                        type="password"
                        label='Password'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className={classes.errorMessage}>{passwordError}</p>

                    {hasAccount ? (
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSignup}
                            >
                                Register
                            </Button>
                        )
                    }
                    <Grid container>
                        <Grid item xs>
                            <Link to='#'>Forgot Password?</Link>
                        </Grid>
                        <Grid item>
                            {!hasAccount ? (
                                <p>
                                    Have an account?
                                    <span className={classes.accountChangeSpan}
                                        onClick={() => setHasAccount(!hasAccount)}
                                    > Login</span>
                                </p>
                            ) : (
                                    <p>
                                        Don't have an account?
                                        <span className={classes.accountChangeSpan}
                                            onClick={() => setHasAccount(!hasAccount)}
                                        > Register</span>
                                    </p>
                                )}
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container >
    )
};



export default Login;

