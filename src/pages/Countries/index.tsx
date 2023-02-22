import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_COUNTRIES_BY_CODE } from "../../apollo/countries";
import { Cards } from "../../components/Cards";
import { CountryCard } from "../../components/CountryCard";
import { Header } from "../../components/Header";
import "./style.css";

export const Countries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useQuery(SEARCH_COUNTRIES_BY_CODE, {
    variables: { code: searchTerm.toUpperCase() },
    skip: !searchTerm,
  });

  const handleSearch = () => {
    setSearchTerm(searchTerm.trim());
  };

  return (
    <div className="countries">
      <Header
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="countries__cards ">
        {!searchTerm ? (
          <Cards />
        ) : data?.country ? (
          <CountryCard country={data?.country} />
        ) : (
          <h2 className="countries__cards__notF"><span>{searchTerm} </span> code does not exist</h2>
        )}
      </div>
    </div>
  );
};
