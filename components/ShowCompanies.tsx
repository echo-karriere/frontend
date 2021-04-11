import { Box, Container, createStyles, IconButton, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { useAllCompaniesQuery } from "../graphql";
import { Spinner, Link } from "./Generic";
import { AddCircleOutlineOutlined, Refresh } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
    },
    table: {
      maxWidth: "sm",
      maxHeight: "sm",
      marginTop: theme.spacing(2),
    },
  }),
);

const columns: GridColDef[] = [
  { field: "name", headerName: "Company name", width: 230 },
  { field: "homepage", headerName: "Website", width: 200 },
];

export const ShowCompanies = (): JSX.Element => {
  const classes = useStyles();
  const { data, loading, error, refetch } = useAllCompaniesQuery();
  if (loading) {
    return <Spinner />;
  }
  if (error || !data) {
    console.error(error);
    return <p>Error!</p>;
  }
  return (
    <Container maxWidth={"sm"} component="main" className={classes.root} aria-label={"Table of companies"}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Companies
      </Typography>
      <div className={classes.table}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <label htmlFor={"refresh-button"}>
            <IconButton color={"primary"} aria-label={"refresh companies"} component={"span"} onClick={() => refetch()}>
              <Refresh />
            </IconButton>
          </label>
          <IconButton color={"primary"} aria-label={"add new company"} component={Link} href={"/companies/create"}>
            <AddCircleOutlineOutlined />
          </IconButton>
        </Box>
        <DataGrid
          rows={data.allCompanies}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 15, 25]}
          checkboxSelection
          autoHeight
        />
      </div>
    </Container>
  );
};
