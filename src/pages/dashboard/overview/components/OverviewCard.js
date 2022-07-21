import React from "react";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  OverviewCardRoot: {},
  Wrapper: {
    padding: theme.spacing(3),
    backgroundColor: "rgb(255, 255,255)",
    color: "rgb(33, 43, 54)",
    overflow: "hidden",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 20%) 0px 16px 32px -4px",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontWeight: 600,
    lineHeight: 1.6,
    fontSize: "0.95rem",
    marginBottom: theme.spacing(2),
    fontFamily: "Public Sans",
  },
  growth: {
    margin: 0,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "0.95rem",
    fontFamily: "Public Sans",
    display: "flex",
    alignItems: "center",
  },
  growthIcon: {
    width: "24px",
    height: "24px",
    display: "flex",
    marginRight: theme.spacing(1),
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(84, 214, 44)",
    backgroundColor: "rgba(84, 214, 44, 0.16)",
    overflow: "hidden",
  },
  icon: {
    fontSize: "0.895rem",
  },
  value: {
    margin: 0,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "2rem",
    fontFamily: "Public Sans",
  },
}));

function OverviewCard({ title, value, growth, type }) {
  const classes = useStyles();

  return (
    <Grid item md={3} xs={6} className={classes.OverviewCardRoot}>
      <div
        className={classes["Wrapper"]}
        style={{
          borderLeft: `4px solid ${type === "title" ? "#00b8d4" : "#f44336"}`,
        }}
      >
        <div>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.growth}>
            <div className={classes.growthIcon}>
              <PeopleAltIcon className={classes.icon} />
            </div>
            +{growth.toLocaleString("vi-VN")}
          </Typography>
          <Typography className={classes.value}>
            {value.toLocaleString("vi-VN")}
          </Typography>
        </div>

        {type === "title" && (
          <div
            style={{
              opacity: 0.5,
            }}
          >
            <PeopleAltIcon />
          </div>
        )}
        {type === "price" && (
          <div
            style={{
              opacity: 0.5,
            }}
          >
            <AttachMoneyIcon />
          </div>
        )}
      </div>
    </Grid>
  );
}

OverviewCard.defaultProps = {
  title: "Thành viên",
  value: 3000000,
  growth: 20000,
  type: "price",
};

OverviewCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  growth: PropTypes.number,
  type: PropTypes.string,
};

export default OverviewCard;
