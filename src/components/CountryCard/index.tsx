import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./style.css";

type CardProps = {
  country: any;
};

export const CountryCard: React.FC<CardProps> = ({ country }) => {
  return (
    <Card sx={{ width: 330 }} className="card">
      <p className="card__continent">
        <span>{country?.continent?.name}</span>
      </p>
      <CardContent>
        <div className="card-box">
          <Typography
            gutterBottom
            variant="h1"
            component="div"
            className="card-box__emoji"
          >
            {country.emoji}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>{country.name}</b>
            <br/>
            <span>{country?.capital}</span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
