import { useQuery } from "@apollo/client";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { ALL_COUNTRIES } from "../../apollo/countries";
import { CountryCard } from "../../components/CountryCard";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import "./style.css";

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

export const Countries = () => {
  const { loading, error, data } = useQuery(ALL_COUNTRIES);
  const [page, setPage] = useState(1);
  const limit = 21;
  const count = Math.ceil(data?.countries?.length / limit);

  const handleClick = (_: any, number: number) => {
    setPage(number);
  };
  console.log(data?.countries);

  const handleSearch = (e: any) => {
    console.log(e.target.value.toUpperCase());
    console.log(
      data?.countries?.filter((obj: ICountry) =>
        obj.code.includes(e.target.value.toUpperCase())
      )
    );
  };

  return (
    <div className="countries">
      <Header handleSearch={handleSearch} />

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="countries__cards">
            {data?.countries
              ?.slice((page - 1) * limit, page * limit)
              .map((country: ICountry) => (
                <CountryCard country={country} key={country.name} />
              ))}
          </div>
          <Pagination count={count} color="primary" onChange={handleClick} />
        </>
      )}
    </div>
  );
};
