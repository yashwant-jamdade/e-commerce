import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <Grid container spacing={2} my={2}>
        <Grid xs={12} sx={{ border: "2px solid red" }}>
          <Paper> Box 1</Paper>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ border: "2px solid blue", backgroundColor: "orange" }}
        >
          Box 2
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ border: "2px solid green", backgroundColor: "purple" }}
        >
          Box 3
        </Grid>
        <Grid item xs={12} sx={{ border: "2px solid yellow" }}>
          Box 4
        </Grid>
        <Grid item xs={12} sx={{ border: "2px solid black" }}>
          Boxing 5
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
