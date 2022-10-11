import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import { CardMedia } from "@material-ui/core";
import { Ratings } from "./Ratings";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  media: {
    height: 50,
    paddingTop: "56.25%", // 16:9
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CartTable = ({ cart, dispatch }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead></TableHead>
        <TableBody>
          {cart.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                <CardMedia
                  style={{ cursor: "pointer" }}
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{product.name}</StyledTableCell>
              <StyledTableCell align="right">
                k {product.price.split(".")[0]}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Ratings rate={product.ratings} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Qty
                  </InputLabel>
                  <Select
                    native
                    value={product.qty}
                    //   onChange={handleChange}
                    label="Qty"
                    inputProps={{
                      name: "qty",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    {[...Array(product.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Select>
                </FormControl>
              </StyledTableCell>
              <StyledTableCell
                align="right"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                <DeleteIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
