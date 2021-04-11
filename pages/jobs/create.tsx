import { DashboardWrapper, AddNewJob } from "components";

export default function CreateJob(): JSX.Element {
  return (
    <DashboardWrapper title={"Create new job"}>
      <AddNewJob />
    </DashboardWrapper>
  );
}
