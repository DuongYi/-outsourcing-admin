/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import { List, ListSubheader, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { matchPath } from "react-router-dom";

import NavItem from "./NavItem";

const renderNavItems = ({ depth = 0, items, pathname }) => (
  <List disablePadding>
    {items.reduce(
      (acc, item) =>
        reduceChildRoutes({
          acc,
          item,
          pathname,
          depth,
        }),
      []
    )}
  </List>
);

const useStyles = makeStyles(() => ({
  listSubheader: {
    color: "#172b4d",
    fontSize: "0.8rem",
    lineHeight: 2.5,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const reduceChildRoutes = ({ acc, pathname, item, depth }) => {
  const key = `${item.title}-${depth}`;
  const exactMatch = item.path
    ? !!matchPath(
        {
          path: item.path,
          end: true,
        },
        pathname
      )
    : false;

  if (item.children) {
    const partialMatch = item.path
      ? !!matchPath(
          {
            path: item.path,
            end: false,
          },
          pathname
        )
      : false;

    acc.push(
      <NavItem
        active={partialMatch}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={partialMatch}
        path={item.path}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.children,
          pathname,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        active={exactMatch}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

function NavSection(props) {
  const classes = useStyles();
  const { items, pathname, title, ...other } = props;

  return (
    <List
      subheader={
        <ListSubheader
          className={classes.listSubheader}
          disableGutters
          disableSticky
        >
          {title}
        </ListSubheader>
      }
      {...other}
    >
      {renderNavItems({
        items,
        pathname,
      })}
    </List>
  );
}

NavSection.propTypes = {
  items: PropTypes.array,
  pathname: PropTypes.string,
  title: PropTypes.string,
};

export default NavSection;
