import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "./theme/index";
import routes, { renderRoutes } from "./routes";
import { Router } from "react-router-dom";
import { THEMES } from "./constants";

const history = createBrowserHistory();

function App() {
  //const auth = useSelector((state: RootState) => state.auth);

  const theme = createTheme({
    theme: THEMES.LIGHT,
  });

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
