import React from "react";

import { Grid, makeStyles, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Page from "src/components/Page";
import UICard from "src/components/UI/UICard";
import { PAGE_TITLE } from "src/constant";

import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  rootbox: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  bgLogin: {
    backgroundImage: "url(https://source.unsplash.com/featured/?girl)",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.85,
    filter: "blur(5px)",
    position: "absolute",
  },
  container: {
    backgroundColor: "#f5f5f5",
    height: "100%",
    position: "relative",
    zIndex: 1,
  },
  Wrapper: {
    width: "100%",
  },
  Wrapper_bg: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(https://source.unsplash.com/featured/?game)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.8,
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
  "login-container": {
    width: "100%",
    height: "100%",
    padding: "20px 40px",
  },
  [theme.breakpoints.down("sm")]: {
    Wrapper: {
      display: "none",
    },
    "login-container": {
      padding: "20px 10px",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const submitSuccessHandler = () => {
    history.push("/");
  };
  const submitFailHandler = (error) => {};

  return (
    <Page title={`${PAGE_TITLE} | ĐĂNG NHẬP`} className={classes.rootbox}>
      <Box className={classes.bgLogin}></Box>
      <UICard maxWidth="lg">
        <Grid container className={classes.container}>
          <Grid className={classes.Wrapper} item md={5}>
            <div className={classes.Wrapper_bg} />
          </Grid>
          <Grid className={classes["login-container"]} item md={7} sm={12}>
            <LoginForm
              onSubmitSuccess={submitSuccessHandler}
              onSubmitFail={submitFailHandler}
            />
          </Grid>
        </Grid>
      </UICard>
    </Page>
  );
}

export default Login;
