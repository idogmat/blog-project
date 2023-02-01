import { FC, ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";

interface ILinkProps {
  page: string;
}

export const MenuLink: FC<ILinkProps> = ({ page }) => {
  console.log(page);
  const formattedPageName = page[0].toUpperCase() + page.slice(1);
  return (
    <li>
      <Link to={`/${page}`}>{formattedPageName}</Link>
    </li>
  );
};
