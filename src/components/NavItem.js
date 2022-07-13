/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

import {
  Box, Button, Collapse, ListItem,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';

function NavItem(props) {
  const {
    active, children, depth, icon, info, open: openProp, path, title, ...other
  } = props;
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 16;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        style={{
          display: 'block',
          paddingTop: 0,
          paddingBottom: 0,
        }}
        {...other}
      >
        <Button
          endIcon={!open ? <ChevronRightIcon fontSize="small" />
            : <KeyboardArrowDownIcon fontSize="small" />}
          onClick={handleToggle}
          startIcon={icon}
          style={{
            color: '#6b778c',
            fontWeight: 'Medium',
            justifyContent: 'flex-start',
            paddingLeft: `${paddingLeft}px`,
            paddingRight: '8px',
            paddingTop: '12px',
            paddingBottom: '12px',
            textAlign: 'left',
            textTransform: 'none',
            width: '100%'
          }}
          variant="text"
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
          {info}
        </Button>
        <Collapse in={open}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      style={{
        display: 'flex',
        padding: 0
      }}
    >
      <Button
        component={path && RouterLink}
        startIcon={icon}
        style={{
          color: '#6b778c',
          fontWeight: 'Medium',
          justifyContent: 'flex-start',
          textAlign: 'left',
          paddingLeft: `${paddingLeft}px`,
          paddingRight: '8px',
          paddingTop: '12px',
          paddingBottom: '12px',
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'red',
            fontWeight: 'Bold',
          })
        }}
        variant="text"
        to={path}
      >
        <Box style={{ flexGrow: 1 }}>
          {title}
        </Box>
        {info}
      </Button>
    </ListItem>
  );
}

NavItem.defaultProps = {
  active: false,
  open: false
};

export default NavItem;
