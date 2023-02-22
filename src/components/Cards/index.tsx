import { useQuery } from "@apollo/client";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { ALL_COUNTRIES } from "../../apollo/countries";
import { CountryCard } from "../CountryCard";
import { Loader } from "../Loader";

interface ICountry {
  capital: string;
  code: string;
  currency: string;
  continent: { name: string };
  emoji: string;
  languages: [{ name: string; native: string; rtl: boolean }];
  name: string;
  native: string;
  phone: string;
}

export const Cards = () => {
  const { loading, data } = useQuery(ALL_COUNTRIES);
  const [page, setPage] = useState(1);
  const limit = 21;
  const count = Math.ceil(data?.countries?.length / limit);

  const handleClick = (_: any, number: number) => {
    setPage(number);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="cards">
          <div className="cards__box">
            {data?.countries
              ?.slice((page - 1) * limit, page * limit)
              .map((country: ICountry) => (
                <CountryCard country={country} key={country.name} />
              ))}
          </div>
          <Pagination
            count={count}
            color="primary"
            onChange={handleClick}
            className="cards__box__pag"
          />
        </div>
      )}
    </>
  );
};
