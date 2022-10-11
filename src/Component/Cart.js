import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { CartState } from "../Context/Context";
import { Container } from "@material-ui/core";
import CartTable from "./CartTable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Cart = () => {
  const classes = useStyles();
  const {
    state: { cart }, dispatch
  } = CartState();

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)*curr.qty,0))
  },[cart])

  return (
    <Container>
        <br />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
           <CartTable cart={cart} dispatch={dispatch} />
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
                Total {total}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Cart;
