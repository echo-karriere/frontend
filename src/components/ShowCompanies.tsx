import { Container, createStyles, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid, GridColDef } from "@material-ui/data-grid";

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
    },
  }),
);

const companies = [
  { id: 1, companyName: "VG", website: "vg.no" },
  { id: 2, companyName: "NRK", website: "nrk.no" },
];

const columns: GridColDef[] = [
  { field: "companyName", headerName: "Company name", width: 170 },
  { field: "website", headerName: "Website", width: 200 },
];

export const ShowCompanies = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container maxWidth={"sm"} component="main" className={classes.root}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Companies
      </Typography>
      <div className={classes.table}>
        <DataGrid
          rows={companies}
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
