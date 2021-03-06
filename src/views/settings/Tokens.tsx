import { DashboardWrapper, Title, useDashboardStyle } from "../../components";
import { useState } from "react";
import { Button, ButtonGroup, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { CopyToClipboard } from "../../components/Utils";
import { useAccount, useMsal } from "@azure/msal-react";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    overflow: "hidden",
  },
  pre: {
    padding: theme.spacing(2),
    backgroundColor: "#272c34",
    width: "min-content",
  },
  code: {
    display: "inline-block",
    padding: "0 3px",
    color: "#e6db74",
  },
}));

export const Tokens = (): JSX.Element => {
  const dashboardClasses = useDashboardStyle();
  const classes = useStyle();
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] ?? {});
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const paperWrapped = clsx(dashboardClasses.paper, classes.wrapper);

  const getToken = async () => {
    if (account) {
      const accessToken = await instance.acquireTokenSilent({
        scopes: [`https://${process.env.REACT_APP_AUTHORITY}.onmicrosoft.com/backend/${process.env.REACT_APP_SCOPE}`],
        account: account,
      });
      setToken(accessToken.accessToken);
      setLoading(false);
    }
  };

  const clear = () => {
    setToken("");
    setLoading(true);
  };

  const createRequestHeader = (): string => {
    return `{
  "Content-Type":"application/json",
  "Authorization":"Bearer ${token}"
}`;
  };

  return (
    <DashboardWrapper title="Tokens">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={paperWrapped}>
            <Title>Generate an API token</Title>
            {!loading && (
              <CopyToClipboard>
                {({ copy }) => (
                  <>
                    <div>
                      <Button variant="outlined" color="primary" onClick={() => copy(createRequestHeader())}>
                        Copy to clipboard
                      </Button>
                    </div>
                    <pre className={classes.pre}>
                      <code className={classes.code}>{createRequestHeader()}</code>
                    </pre>
                  </>
                )}
              </CopyToClipboard>
            )}
            <div>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={getToken}>Generate a token</Button>
                {!loading && (
                  <Button color="secondary" onClick={clear}>
                    Clear
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
};
