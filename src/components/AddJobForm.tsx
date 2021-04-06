import {
  Button,
  createStyles,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import CheckBox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";

interface FormInput {
  company: string;
  ad: string;
  place: string;
  position: "fullTime" | "partTime" | "summerInternship";
  deadline: Date;
  published: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
    },
    formControl: {
      minWidth: 120,
    },
  }),
);

export function AddNewJob(): JSX.Element {
  const { control, handleSubmit, getValues, reset } = useForm<FormInput>();
  const onSubmit = (data: FormInput) => console.log(data);
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.root}>
      <h1>Add new job</h1>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="company"
              control={control}
              render={({ field }) => <TextField {...field} id="company-name" label="Company name" required fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="ad"
              control={control}
              render={({ field }) => <TextField {...field} id="link-to-ad" label="Link to ad" required fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="place"
              control={control}
              render={({ field }) => <TextField {...field} id="working-place" label="Place" required fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required className={classes.formControl}>
              <InputLabel id="position-type">Position</InputLabel>
              <Controller
                name="position"
                control={control}
                defaultValue="fullTime"
                render={({ field }) => (
                  <Select {...field} id="position-type">
                    <MenuItem value="fullTime">Full time</MenuItem>
                    <MenuItem value="partTime">Part time</MenuItem>
                    <MenuItem value="summerInternship">Summer internship</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="deadline"
              control={control}
              render={({ field }) => (
                <KeyboardDatePicker
                  {...field}
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="application-deadline"
                  label="Application deadline"
                  value={getValues("deadline")}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="published"
              control={control}
              render={({ field }) => (
                <FormControlLabel {...field} control={<CheckBox id="published" color="primary" />} label="Published" />
              )}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Box m={2}>
            <Button onClick={() => reset()} variant="contained" color="secondary">
              Cancel
            </Button>
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
