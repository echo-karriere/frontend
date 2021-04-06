import { DashboardWrapper } from "../../components";
import { Link } from "react-router-dom";

export const CompanyOverview = (): JSX.Element => {
  return (
    <DashboardWrapper title="Companies">
      <Link to="/companies/create">
        <p>Create new company</p>
      </Link>
    </DashboardWrapper>
  );
};
