import { FC, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IRoute } from "../../common/routes";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import styled from "styled-components";

interface ILinkProps {
  page: IRoute;
}

export const MenuLink: FC<ILinkProps> = ({ page }) => {
  const formattedPageName = page.path[0].toUpperCase() + page.path.slice(1);
  const icon = formattedPageName === "Blogs" ? <TfiMenuAlt /> : <CgMenuGridO />;
  let activeStyle = {
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

export const NavElement = styled.li`
  width: 100%;
  font-size: 24px;
  margin: auto;
  &:hover {
    color: var(--color-main);
  }
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 5px;
    &.active {
      color: var(--color-main);
    }
  }
`;
