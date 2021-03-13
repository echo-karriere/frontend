import { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import GuestGuard from "./components/GuestGuard";
import LoadingScreen from "./views/utils/LoadingScreen";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/utils/LoadingScreen")),
  },
  {
    exact: true,
    path: "/",
    layout: MainLayout,
    component: LoadingScreen,
  },
  {
    exact: true,
    path: "/login",
    guard: GuestGuard,
    layout: MainLayout,
    component: lazy(() => import("./Login")),
  },
  {
    exact: true,
    path: "/jobs",
    layout: MainLayout,
    component: lazy(() => import("./views/jobs/JobListings")),
  },
  {
    path: "/admin",
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: "/admin/dashboard",
        component: lazy(() => import("./views/dashboard/DashboardView")),
      },
    ],
  },
];

export default routes;
