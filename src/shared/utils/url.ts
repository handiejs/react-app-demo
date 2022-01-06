import { pathToRegexp } from 'path-to-regexp';

function findRouteDeeply(pathname: string, routes: any[]) {
  let route;

  for (let i = 0; i < routes.length; i++) {
    const r = routes[i];
    const dynamicMatched = pathToRegexp(r.path).exec(pathname);

    if (dynamicMatched || r.path === pathname) {
      route = r;
      break;
    }

    if ((r.routes || []).length === 0) {
      continue;
    }

    route = findRouteDeeply(pathname, r.routes);

    if (route) {
      break;
    }
  }

  return route;
}

export { findRouteDeeply };
