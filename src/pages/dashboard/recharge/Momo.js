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

function createData(id, time, from, reference, money, decription, status) {
  return {
    id,
    time,
    from,
    reference,
    money,
    decription,
    status,
  };
}

const rows = [
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
  createData(
    124,
    "01/01/2022",
    "nashurato",
    "5562-1231",
    974000,
    "8326482638949129691696aztsr87264",
    "Thành công"
  ),
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
    id: "time",
    disablePadding: false,
    label: "Thời gian",
  },
  {
    id: "from",
    disablePadding: false,
    label: "Từ",
  },
  {
    id: "reference",
    disablePadding: false,
    label: "Số tham chiếu",
  },
  {
    id: "money",
    disablePadding: false,
    label: "Số tiền",
  },
  {
    id: "decription",
    disablePadding: false,
    label: "Mô tả",
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
}));

function Momo() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("time");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Page title={`${PAGE_TITLE} | Nạp tiền từ ví MOMO`}>
      <TopTitle>Nạp tiền từ ví MOMO</TopTitle>
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
                      <StyledTableRow tabIndex={-1} key={row.name}>
                        <StyledTableCell align="left">{row.id}</StyledTableCell>
                        <StyledTableCell align="left">
                          {row.time}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.from}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.reference}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.money.toLocaleString("vi-VN")}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.decription}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.status}
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
            rowsPerPageOptions={[5, 10, 25]}
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

export default Momo;
