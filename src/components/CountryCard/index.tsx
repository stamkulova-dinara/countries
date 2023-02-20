import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./style.css";
import { Language, Phone } from "@mui/icons-material";

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
          <Typography variant="h1" component="div" className="card-box__emoji">
            {country.emoji}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>{country.name}</b>
            <br />
            <span>{country?.capital}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Phone/>
            {country?.phone}
          </Typography>
        </div>
        <div className="card-info">
          <Typography variant="body2" color="text.secondary">
            <img src="https://i.ibb.co/4dbvf5H/money.png" className="card-info__currency"/>
            {country?.currency}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            <Phone/>
            {country?.phone}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            <Language/>
            {country?.languages?.map((e:any)=>e?.native+", ")}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
