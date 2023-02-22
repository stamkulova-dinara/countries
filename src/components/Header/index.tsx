import { Dispatch, FC, SetStateAction } from "react";
import { Search } from "@mui/icons-material";
import "./style.css";

type HeaderProps = {
  handleSearch: () => void;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
};
export const Header:FC<HeaderProps> = ({handleSearch, searchTerm, setSearchTerm}) => {
  return (
    <header>
      <div className="header-box">
        <h1 className="header-box__logo">Countries</h1>
        <div className="header-box__search">
          <Search className="header-box__search__icon" onClick={handleSearch} />
          <input
            className="header-box__search__input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
};
