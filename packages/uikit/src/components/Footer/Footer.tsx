import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import { FooterProps } from "./types";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: "15px",
    paddingBottom: "15px",
    width: "100%",
    color: "white",
    backgroundColor: "#121212",
    textAlign: "center",
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
  },
  link: {
    width: "24px",
    height: "24px",
    display: "inline",
    marginLeft: "20px",
  },

  img: {
    width: "24px",
    height: "24px",
  },
}));

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={5} sm={6}>
            <Typography variant="body2"  align="left">
              {"Copyright © "}
              <Link color="inherit" href="/">
                Serenity Capital
              </Link>{" "}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={7} sm={6} style={{ textAlign: "right" }}>
            <a
              href="https://twitter.com/Ser3nityCapital"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img
                alt="twitter"
                src={"https://bscserenitycapital.netlify.app/static/media/footer_twitter.7a2ac044.svg"}
                className={classes.img}
              />
            </a>
            <a href="https://t.me/serenitycapital" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img
                alt="telegram"
                src={"https://bscserenitycapital.netlify.app/static/media/footer_telegram.8029ad2b.svg"}
                className={classes.img}
              />
            </a>
            <a href="https://discord.gg/tY6mJkXVYP" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img
                alt="discord"
                src={"https://bscserenitycapital.netlify.app/static/media/footer_discord.98945329.svg"}
                className={classes.img}
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default MenuItem;
