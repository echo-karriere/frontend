import { DashboardWrapper } from "../../components";
import { AddCompanyForm } from "../../components/AddCompanyForm";

export const CreateCompany = (): JSX.Element => {
  return (
    <DashboardWrapper title="Create company">
      <AddCompanyForm />
    </DashboardWrapper>
  );
};
