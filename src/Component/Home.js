import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { CartState } from "../Context/Context";
import ProductCard from "./ProductCard";
import { Filter } from "./Filter";

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
    state: { products },productState: { byStock, byFastDelivery, sort, byRating, searchQuery }
  } = CartState();

  const transform = function () {
    let storedProducts = products;

    if(sort){
      storedProducts = storedProducts.sort((a,b) => sort === "lowToHigh"? a.price - b.price : b.price - a.price)
    }

    if(!byStock){
      storedProducts = storedProducts.filter((product) => product.inStock)
    }

    if(byFastDelivery){
      storedProducts = storedProducts.filter((product) => product.byFastDelivery)
    }

    if(byRating){
      storedProducts = storedProducts.filter((product) => product.ratings >= byRating)
    }

    if(searchQuery){
      storedProducts = storedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery))
    }

    return storedProducts;
  }
  return (
    <Container>
      <div className={classes.root}>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Filter />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <ProductCard transform={transform} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
