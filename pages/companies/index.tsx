import { DashboardWrapper, Link } from "components";

export default function Index(): JSX.Element {
  return (
    <DashboardWrapper title="Companies">
      <Link href="/companies/create">
        <p>Create new company</p>
      </Link>
    </DashboardWrapper>
  );
}
