import { DashboardWrapper } from "../../components";
import { Link } from "../../components/Generic/Link";

export default function Index(): JSX.Element {
  return (
    <DashboardWrapper title="Companies">
      <Link href="/companies/create">
        <p>Create new company</p>
      </Link>
    </DashboardWrapper>
  );
}
