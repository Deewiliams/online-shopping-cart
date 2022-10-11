import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { CartState } from "../Context/Context";
import ProductCard from "./ProductCard";

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

const Home = () => {
  const classes = useStyles();
  const {
    state: { products },
  } = CartState();
  console.log('state',products);

  return (
    <div className={classes.root}>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={8}>
          {products.map((product) => (
            <ProductCard products={products} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
