import { DashboardWrapper } from "../../components";
import { Link } from "../../components/Generic/Link";

export default function JobsOverview(): JSX.Element {
  return (
    <DashboardWrapper title={"Jobs"}>
      <Link href="/jobs/create">
        <p>Create new job</p>
      </Link>
    </DashboardWrapper>
  );
}
