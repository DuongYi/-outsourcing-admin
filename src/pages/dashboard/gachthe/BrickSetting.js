import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import Page from "src/components/Page";

import TopTitle from "src/components/TopTitle";

import { PAGE_TITLE } from "src/constant";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgba(24, 119, 242, .9)",
    color: theme.palette.common.white,
    "&:first-child": {
      borderTopLeftRadius: "20px",
    },
    "&:last-child": {
      borderTopRightRadius: "20px",
    },
    "& .MuiTableSortLabel-root.MuiTableSortLabel-active": {
      color: "#d9e348",
    },
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, partner, discount, status) {
  return {
    id,
    partner,
    discount,
    status,
  };
}

const rows = [
  createData(1, "trumthe.vn", 70, "Đang kết nối"),
  createData(2, "thesieure.com", 80, "Chưa kết nối"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    disablePadding: false,
    label: "ID",
  },
  {
    id: "partner",
    disablePadding: false,
    label: "Đối tác",
  },
  {
    id: "discount",
    disablePadding: false,
    label: "Chiết khấu",
  },
  {
    id: "status",
    disablePadding: false,
    label: "Trạng thái",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <StyledTableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </StyledTableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "20px",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  status: {
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#00bfa6",
    padding: "3px 10px",
    borderRadius: 8,
    display: "inline-block",
  },
  settingButton: {
    display: "inline-block",
    float: "right",
    marginTop: theme.spacing(12),
    textTransform: "capitalize",
    minWidth: "64px",
    borderRadius: "8px",
    padding: "6px 16px",
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 171, 85)",
    boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    verticalAlign: "middle",
    boxShizing: "border-box",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
}));

function BrickSetting() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("time");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const settingOpenHandler = () => {};

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Page title={`${PAGE_TITLE} | Cài đặt gạch thẻ`}>
      <TopTitle>Cài đặt gạch thẻ</TopTitle>
      <Button
        variant="contained"
        color="secondary"
        className={classes.settingButton}
        onClick={settingOpenHandler}
      >
        Cài đặt
      </Button>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <StyledTableRow tabIndex={-1} key={row.id}>
                        <StyledTableCell align="left">{row.id}</StyledTableCell>
                        <StyledTableCell align="left">
                          {row.partner}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.discount}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Typography
                            className={classes.status}
                            style={{
                              backgroundColor:
                                (row.status === "Đang kết nối" && "green") ||
                                (row.status === "Thất bại" && "red") ||
                                (row.status === "Chưa kết nối" && "#dfdf3b"),
                            }}
                          >
                            {row.status}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <StyledTableRow>
                    <StyledTableCell colSpan={14} />
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 16, 24]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </Page>
  );
}

export default BrickSetting;
