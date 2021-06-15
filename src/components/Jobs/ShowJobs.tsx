import { IconButton, Typography, Container, createStyles, makeStyles, Theme, Box } from "@material-ui/core";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { AddCircleOutlineOutlined, Refresh } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useAllJobsQuery } from "../../graphql";
import { Spinner } from "../Generic";

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
  { field: "title", headerName: "Title", flex: 1 },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    valueFormatter: (params) => {
      const company = params.row?.company as Record<string, string>;
      return company.name;
    },
  },
  {
    field: "published",
    headerName: "Published",
    flex: 1,
    valueFormatter: (params) => {
      const published = params?.row.published as boolean;
      return published ? "✓" : "✗";
    },
  },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "deadline", headerName: "Deadline", flex: 1 },
];

export const ShowJobs = (): JSX.Element => {
  const classes = useStyles();
  const { data, loading, error, refetch } = useAllJobsQuery();

  if (loading) return <Spinner />;
  if (error || !data) {
    console.error(error);
    return <p>Something went wrong :(</p>;
  }

  return (
    <Container maxWidth="lg" component="main" className={classes.root} aria-label="Table of jobs">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Jobs
      </Typography>
      <div className={classes.table}>
        <Box display="flex" justifyContent="flex-end">
          <label htmlFor={"refresh-button"}>
            <IconButton color="primary" aria-label="Refresh jobs" component="span" onClick={() => refetch()}>
              <Refresh />
            </IconButton>
          </label>
          <IconButton color="primary" aria-label="Add new company" component={Link} to="/jobs/create">
            <AddCircleOutlineOutlined />
          </IconButton>
        </Box>
        <DataGrid
          rows={data.jobs}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20, 40, 60]}
          checkboxSelection
          autoHeight
        />
      </div>
    </Container>
  );
};
