import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface ILinkProps {
  page: string;
}

export const MenuLink: FC<ILinkProps> = ({ page }) => {
  console.log(page);
  const formattedPageName = page[0].toUpperCase() + page.slice(1);
  return (
    <li>
      <NavLink to={`/${page}`}>{formattedPageName}</NavLink>
    </li>
  );
};
