import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

/*
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
*/

interface FormData {
  name: string;
  homepage: string;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// TODO: Add participation checkbox
export const AddCompanyForm = (): JSX.Element => {
  // TODO: Fix with react-hook-form 7.0.0
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit } = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = (data: FormData) => {
    const json = JSON.stringify(data);
    console.log(json);
    try {
      console.log("hello");
    } catch (err) {
      console.error(err);
    }
  };

  /*
  const [state, setState] = React.useState({
    participation: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { participation } = state;
  */
  return (
    <Container component="main" maxWidth="sm">
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1>Legg til ny bedrift</h1>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Bedriftsnavn"
          name="name"
          inputRef={register({ required: "Obligatorisk felt" })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="homepage"
          label="Bedriftens hjemmeside"
          id="homepage"
          inputRef={register({ required: "Obligatorisk felt" })}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Send inn
        </Button>
      </form>
    </Container>
  );
};
