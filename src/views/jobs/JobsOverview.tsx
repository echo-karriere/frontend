import { DashboardWrapper } from "../../components";
import { ShowJobs } from "../../components/Jobs";

export const JobsOverview = (): JSX.Element => {
  return (
    <DashboardWrapper title={"Jobs"}>
      <ShowJobs />
    </DashboardWrapper>
  );
};
