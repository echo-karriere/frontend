import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";

type FormData = {
  companyName: string;
  companyURL: string;
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

export default function AddCompanyForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: any) => console.log(data);
  const classes = useStyles();
  const [state, setState] = React.useState({
    confirmedParticipationCheckBox: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { confirmedParticipationCheckBox } = state;

  return (
    <Container component="main" maxWidth="sm">
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1>Legg til ny bedrift</h1>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="companyName"
          label="Bedriftsnavn"
          name="companyName"
          autoFocus
          inputRef={register({ required: "Obligatorisk felt" })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="companyURL"
          label="Bedriftens hjemmeside"
          id="companyURL"
          inputRef={register({ required: "Obligatorisk felt" })}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={confirmedParticipationCheckBox}
              onChange={handleChange}
              name="confirmedParticipationCheckBox"
              id="confirmedParticipationCheckBox"
            />
          }
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
