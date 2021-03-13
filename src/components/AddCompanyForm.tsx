import { makeStyles } from "@material-ui/core/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import axios from "axios";

type FormData = {
  name: string;
  homepage: string;
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const postRequest = async (msg: any) => {
  /*
  const newTodo = {
    userId: 1,
    title: "Wash my hands",
    completed: false,
  };
  */
  console.log(msg);
  try {
    const resp = await axios.post("https://echo-karriere-dev.azurewebsites.net/api/companies", msg);
    console.log(resp.data);
  } catch (err) {
    console.error(err);
  }
};

// TODO: Add participation checkbox
export default function AddCompanyForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => postRequest(JSON.stringify(data));
  const classes = useStyles();
  const [state, setState] = React.useState({
    participation: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { participation } = state;

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
          autoFocus
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
        <FormControlLabel
          control={<Checkbox checked={participation} onChange={handleChange} name="participation" id="participation" />}
          label="Bekreftet deltagelse"
          name="confirmedParticipation"
          inputRef={register}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Send inn
        </Button>
      </form>
    </Container>
  );
}
