import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { CardMedia, Typography, Button } from "@material-ui/core";
import { Ratings } from "./Ratings";
import { CartState } from "../Context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },
}));

const ProductCard = ({ products }) => {
  const classes = useStyles();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Paper className={classes.paper}>
              <CardMedia
                style={{ cursor: "pointer" }}
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <div style={{ textAlign: "start" }}>
                <Typography>{product.name}</Typography>
                <Typography>K {product.price.split(".")[0]}</Typography>
                {product.fastDelivery ? (
                  <Typography>fastDelivery</Typography>
                ) : (
                  <Typography>4 days delivery</Typography>
                )}
                <Typography>
                  <Ratings rate={product.ratings} />
                </Typography>

                {cart.some((p) => p.id === product.id) ? (
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      });
                    }}
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                    }}
                    disabled={!product.inStock}
                  >
                    {!product.inStock ? "Out of Stock" : "Add to Cart"}
                  </Button>
                )}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
