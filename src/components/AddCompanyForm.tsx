import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useCreateCompanyMutation } from "../graphql";
import { Redirect } from "react-router";

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

export const AddCompanyForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();
  const [mutation, { error, data, loading }] = useCreateCompanyMutation();
  const classes = useStyles();

  const onSubmit = async (data: FormData) => {
    await mutation({
      variables: {
        input: {
          homepage: data.homepage,
          name: data.name,
        },
      },
    });
  };

  if (error) return <p>Oh no :(</p>;
  if (data) return <Redirect to="/companies" />;

  return (
    <Container component="main" maxWidth="sm">
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1>Add company</h1>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          {...register("name", { required: true })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Homepage"
          id="homepage"
          {...register("homepage", { required: true })}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          {loading ? "Submitting" : "Create"}
        </Button>
      </form>
    </Container>
  );
};
