import { ReactNode, Component } from 'react';
import { Link } from 'umi';
import { getAppHelper } from 'handie-react-starter-umi';

import { includes } from '@/shared/utils';
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

export default class AdminLayout extends Component {
  private renderMenuItem(route): ReactNode {
    return (route.routes || []).length > 0 ? (
      <NavSubMenu
        key={`${route.name}-${route.routes.length}`}
        flag={`${route.name}`}
        title={route.name}
      >
        {route.routes.map((r) => this.renderMenuItem(r))}
      </NavSubMenu>
    ) : (
      <NavMenuItem key={route.name} flag={route.name} title={route.name}>
        <Link to={route.path}>{route.name}</Link>
      </NavMenuItem>
    );
  }

  private renderSideBarNavMenu(): ReactNode {
    const location = getAppHelper().history.getLocation();

    return (
      <NavMenu
        activeFlag={location.name}
        openFlags={location.ancestors.map((a) => a.name)}
      >
        {(((this.props as any).routes || []) as any[])
          .filter(({ name }) => !includes(name, ['root', 'fintech']))
          .map((route) => this.renderMenuItem(route))}
      </NavMenu>
    );
  }

  public render(): ReactNode {
    return (
      <AppContainer>
        <LayoutContainer>
          <LayoutAside width={266}>
            <Link to="/">Handie for React</Link>
            <nav>{this.renderSideBarNavMenu()}</nav>
          </LayoutAside>
          <LayoutContainer>
            <LayoutHeader>页头</LayoutHeader>
            <LayoutMain>{this.props.children}</LayoutMain>
          </LayoutContainer>
        </LayoutContainer>
      </AppContainer>
    );
  }
}
