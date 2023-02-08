import { Navigate, useNavigate } from "react-router-dom";
import React, {
  Component,
  ComponentType,
  createContext,
  FC,
  useContext,
} from "react";
// export function withAuthRedirect<T>(WrapperComponent: ComponentType<T>) {
//   const RedirectComponent=(props: MapPropsType)=> {
//     let {isAuth,...restProps}=props
//     if (!props.isAuth) return <Redirect to={'/login'}/>
//     return <WrapperComponent {...restProps as T}/>
//   }
//   let mapStateToProps = (state: AppStateType):MapPropsType => ({
//     isAuth: state.authReducer.isAuth
//   })
//   let ConnectedRedirectComponent = connect(
//       mapStateToProps)
//   (RedirectComponent)
//   return ConnectedRedirectComponent;
// }
export const withAuthentication = (
  Component: React.FunctionComponent
): JSX.Element => {
  const isAuth = document.cookie.replace(/refreshToken=/, "") !== "null";
  return isAuth ? <Component /> : <Navigate to={"/login"} />;
};
// export const useAuthentication = () => {
//   const navigate = useNavigate();
//   const isAuth = document.cookie.replace(/Authorization=/, "") !== "null";
//
//   isAuth ? navigate("/blogs") : navigate("/login");
// };
