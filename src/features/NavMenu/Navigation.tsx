import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IRoute } from "../../common/routes";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavElement } from "../../ui/NavElement";

interface ILinkProps {
  page: IRoute;
}

export const MenuLink: FC<ILinkProps> = ({ page }) => {
  const formattedPageName = page.path[0].toUpperCase() + page.path.slice(1);
  const icon = formattedPageName === "Blogs" ? <TfiMenuAlt /> : <CgMenuGridO />;
  const activeStyle = {
    borderRight: "5px solid var(--color-main)",
  };
  return (
    <NavElement>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={`${page.path}`}
      >
        {icon}
        {formattedPageName}
      </NavLink>
    </NavElement>
  );
};
