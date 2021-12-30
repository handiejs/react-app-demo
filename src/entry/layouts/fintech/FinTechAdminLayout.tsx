import { ReactNode, Component } from 'react';
import { Link } from 'umi';

import {
  App as AppContainer,
  LayoutContainer,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
  NavMenu,
  NavMenuItem,
  NavSubMenu,
} from '@/shared/components/control';

import style from './style.scss';

function findRouteDeeply(pathname: string, routes: any[]) {
  let route;

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === pathname) {
      route = routes[i];
      break;
    }

    if ((routes[i].routes || []).length === 0) {
      continue;
    }

    route = findRouteDeeply(pathname, routes[i].routes);
  }

  return route;
}

export default class AdminLayout extends Component {
  private resolveRoute(route) {
    if (route.path === (this.props as any).location.pathname) {
      return route;
    }

    const found = route.routes.find(
      (r) =>
        this.resolveRoute(r).path === (this.props as any).location.pathname,
    );

    console.log(found);

    return found;
  }

  private renderMenuItem(route): ReactNode {
    return (route.routes || []).length > 0 ? (
      <NavSubMenu
        key={`${route.name}-${route.routes.length}`}
        flag={`${route.name}-${route.routes.length}`}
        title={route.text || route.name}
      >
        {route.routes.map((r) => this.renderMenuItem(r))}
      </NavSubMenu>
    ) : (
      <NavMenuItem
        key={route.name}
        flag={route.name}
        title={route.text || route.name}
      >
        <Link to={route.path}>{route.text || route.name}</Link>
      </NavMenuItem>
    );
  }

  private renderSideBarNavMenu(): ReactNode {
    const recommendationRoute = (((this.props as any).routes ||
      []) as any[]).find(({ name }) => name === 'fintech').routes[0];

    return (
      <NavMenu className={style['FinTechAdminLayout-subNav']}>
        {recommendationRoute.routes
          .filter(({ name }) => name !== 'recommendationList')
          .map((route) => this.renderMenuItem(route))}
      </NavMenu>
    );
  }

  public render(): ReactNode {
    return (
      <AppContainer className={style.FinTechAdminLayout}>
        <LayoutContainer>
          {!findRouteDeeply((this.props as any).location.pathname, [
            (this.props as any).route,
          ]).hideSidebar ? (
            <LayoutAside
              className={style['FinTechAdminLayout-sidebar']}
              width={266}
            >
              <Link className={style['FinTechAdminLayout-brand']} to="/">
                推荐中心
              </Link>
              <nav className={style['FinTechAdminLayout-menu']}>
                {this.renderSideBarNavMenu()}
              </nav>
            </LayoutAside>
          ) : null}
          <LayoutContainer>
            <LayoutHeader className={style['FinTechAdminLayout-header']}>
              页头
            </LayoutHeader>
            <LayoutMain>{this.props.children}</LayoutMain>
          </LayoutContainer>
        </LayoutContainer>
      </AppContainer>
    );
  }
}
