import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Chip,
  Container,
  IconButton,
  Paper,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Page from "../../components/Page";
import { Theme } from "../../theme";
import Label from "../../components/Label";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function JobListings() {
  const classes = useStyles();
  const jobs = Listings;

  return (
    <Page title="Jobs" className={classes.root}>
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <Box minWidth={650}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Stilling</TableCell>
                  <TableCell>Bedrift</TableCell>
                  <TableCell>Sted</TableCell>
                  <TableCell>Søkefrist</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Se mer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <Typography variant="h6">{job.job}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip avatar={<img src={job.company.avatar} />} label={job.company.name} variant="outlined" />
                      </TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>{job.deadline}</TableCell>
                      <TableCell>
                        {job.type === "fulltid" ? (
                          <Label color="success">{job.type}</Label>
                        ) : (
                          <Label color="primary">{job.type}</Label>
                        )}
                      </TableCell>
                      <TableCell>
                        <IconButton component={RouterLink} to={job.link}>
                          <SvgIcon fontSize="small">
                            <ArrowRight />
                          </SvgIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Container>
    </Page>
  );
}

let Listings = [
  {
    id: 14525245,
    company: {
      name: "Equinor",
      avatar:
        "data:image/png;base64,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",
    },
    job: "Front-End Utvikler",
    location: "Oslo",
    deadline: "04.05.2021",
    type: "fulltid",
    link: "www.equinor.com",
  },
  {
    id: 96430025,
    company: {
      name: "Telia",
      avatar: "https://yt3.ggpht.com/ytc/AAUvwng55g8IPb6nr41B6mnAKQ68uQsOP8jrb7U2a5fgWQ=s900-c-k-c0x00ffffff-no-rj",
    },
    job: ".NET Utvikler",
    location: "Stavanger",
    deadline: "21.03.2021",
    type: "deltid",
    link: "https://www.finn.no/job/employer/company/178",
  },
  {
    id: 235635635,
    company: {
      name: "Telenor",
      avatar:
        "data:image/png;base64,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",
    },
    job: "Backend Utvikler",
    location: "Bergen",
    deadline: "30.04.2021",
    type: "fulltid",
    link: "https://www.finn.no/job/employer/company/136",
  },
  {
    id: 1352434,
    company: {
      name: "TietoEVRY",
      avatar: "https://nucc.no/wp-content/uploads/2016/08/tieto-evry-logo.png",
    },
    job: "Senior UX Designer",
    location: "Oslo",
    deadline: "30.05.2021",
    type: "fulltid",
    link: "https://www.finn.no/job/employer/company/28",
  },
  {
    id: 2356043,
    company: {
      name: "echo karriere",
      avatar: "https://www.echokarriere.no/icons/icon-256x256.png",
    },
    job: "DevOps",
    location: "Høyteknologisenteret, Bergen",
    deadline: "14.03.2021",
    type: "fulltid",
    link: "https://echokarriere.no",
  },
];
