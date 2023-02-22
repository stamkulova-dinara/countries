import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./style.css";
import { LanguageOutlined, Phone } from "@mui/icons-material";

interface ILanguages {
  name: string;
  native: string;
  rtl: boolean;
}

interface ICountry {
  capital: string;
  code: string;
  currency: string;
  continent: { name: string };
  emoji: string;
  languages: Array<ILanguages>;
  name: string;
  phone: string;
}

type CardProps = {
  country: ICountry;
};

export const CountryCard: React.FC<CardProps> = ({ country }) => {
  const {
    capital,
    continent,
    currency,
    emoji,
    name,
    phone,
    languages,
  }: ICountry = country;

  return (
    <Card className="card">
      <p className="card__continent">
        <span>{continent?.name}</span>
      </p>
      <CardContent>
        <div className="card-box">
          <Typography variant="h1" component="div" className="card-box__emoji">
            {emoji}
          </Typography>
          <div className="card-box__main">
            <Typography variant="body2" color="text.secondary">
              <b>{name}</b>
            </Typography>
            <div className="card-box__data">
              <Typography
                variant="body2"
                color="text.secondary"
                className="card-box__phone"
              >
                <span>{capital}</span>
              </Typography>
              <Typography
                className="card-box__data"
                variant="body2"
                color="text.secondary"
              >
                <Phone />
                <span className="card-box__data__phone"> {phone}</span>
              </Typography>
            </div>
          </div>
        </div>
        <div className="card-info">
          <Typography variant="body2" color="text.secondary">
            <img
              src="https://i.ibb.co/4dbvf5H/money.png"
              className="card-info__currency"
              alt="money"
            />
            {currency}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <LanguageOutlined/>
            {languages?.map((e) => e?.native + " ")}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
