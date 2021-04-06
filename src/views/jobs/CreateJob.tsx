import { DashboardWrapper, AddNewJob } from "../../components";

export const CreateJob = (): JSX.Element => {
  return (
    <DashboardWrapper title={"Create new job"}>
      <AddNewJob />
    </DashboardWrapper>
  );
};
