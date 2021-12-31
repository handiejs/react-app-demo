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

export { findRouteDeeply };
