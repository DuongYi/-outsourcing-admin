import React from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Formik } from "formik";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: "25px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginBottom: "0px",
    },
    color: "#cecccc",
  },
  Title: {
    color: "#000",
    fontWeight: "400",
    fontSize: 35,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  sub_question: {
    color: "#1877f2",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function LoginForm({ onSubmitSuccess, onSubmitFail, onCheckCaptcha }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = "Vui lòng nhập Tài khoản";
        } else if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
          errors.username = "Tài khoản không được có kí tự đặc biệt";
        } else if (values.username.length < 6) {
          errors.username = "Tài khoản phải có ít nhất 6 ký tự";
        }

        if (!values.password) {
          errors.password = "Vui lòng nhập mật khẩu";
        }

        return errors;
      }}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          onSubmitSuccess();
        } catch (error) {
          const message = (error && error.message) || "Something went wrong";
          onSubmitFail(error);
          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Box
            mt={1}
            mb={1.5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.Title}>Đăng nhập</Typography>
          </Box>
          <TextField
            name="username"
            type="username"
            fullWidth
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
            label="Tài khoản"
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="password"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            label="Mật khẩu"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="current-password"
          />

          <Box mt={2} />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            style={
              isSubmitting
                ? { backgroundColor: "#ccc", cursor: "not-allowed" }
                : { backgroundColor: "#1877f2", color: "#fff" }
            }
            fullWidth
          >
            {isSubmitting ? "Đăng nhập..." : "Đăng nhập"}
          </Button>

          <Box mt={2}>
            <Typography variant="body2" style={{ color: "#1877f2" }}>
              <Link className={classes.sub_question} to="/register">
                Bạn chưa có tài khoản?
              </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
  onSubmitFail: PropTypes.func,
  onCheckCaptcha: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmitSuccess: () => {},
  onSubmitFail: () => {},
  onCheckCaptcha: () => {},
};

export default LoginForm;
