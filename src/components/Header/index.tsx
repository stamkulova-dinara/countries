import { Search } from "@mui/icons-material";
import { FC } from "react";
import "./style.css";
type HeaderProps = {
  handleSearch: any;
};
export const Header: FC<HeaderProps> = ({ handleSearch }) => {
  return (
    <header>
      <div className="header-box">
        <h1 className="header-box__logo">Countries</h1>
        <div className="header-box__search">
          <Search className="header-box__search__icon" />
          <input
            type="text"
            className="header-box__search__input"
            onChange={(e) => handleSearch(e)}
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
};
