import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@material-ui/core";

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
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const ProductCard = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Paper className={classes.paper}>
              {product.name}
              <CardMedia
                style={{ cursor: "pointer" }}
                className={classes.media}
                image={product.image}
                title={product.name}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
