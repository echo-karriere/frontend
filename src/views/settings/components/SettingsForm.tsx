import { Avatar, Button, Card, CardContent, createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    profileIcon: {
      maxHeight: 100,
      maxWidth: 100,
      minHeight: 50,
      minWidth: 50,
      marginBottom: 12,
    },
    submitButton: {
      float: "right",
      margin: 15,
    },
  }),
);

interface IFormInput {
  name: string;
  email: string;
}

export const SettingsForm = (): JSX.Element => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar
          alt="Cat Catterson"
          src="https://pbs.twimg.com/profile_images/706844157093027840/2Aan_aSU_400x400.jpg"
          className={classes.profileIcon}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ onChange, value }: { onChange: () => void; value: string }) => (
              <TextField label="Navn" onChange={onChange} value={value} />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ onChange, value }: { onChange: () => void; value: string }) => (
              <TextField label="Epost" onChange={onChange} value={value} />
            )}
          />
          <br />
          <Button type="submit" color="primary" variant="contained" className={classes.submitButton}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
