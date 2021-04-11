import { DashboardWrapper, Link } from "components";

export default function JobsOverview(): JSX.Element {
  return (
    <DashboardWrapper title={"Jobs"}>
      <Link href="/jobs/create">
        <p>Create new job</p>
      </Link>
    </DashboardWrapper>
  );
}
