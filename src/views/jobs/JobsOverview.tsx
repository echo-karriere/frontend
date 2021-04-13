import { DashboardWrapper } from "../../components";
import { Link } from "react-router-dom";

export const JobsOverview = (): JSX.Element => {
  return (
    <DashboardWrapper title={"Jobs"}>
      <Link to="/jobs/create">
        <p>Create new job</p>
      </Link>
    </DashboardWrapper>
  );
};
