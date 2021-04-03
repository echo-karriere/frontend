import { useAllCompaniesQuery } from "../../graphql";

export const CompaniesList = (): JSX.Element => {
  const { loading, error, data } = useAllCompaniesQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong :(</div>;

  return (
    <ol>
      {data?.allCompanies.map((company) => (
        <li key={company.id}>{company.name}</li>
      ))}
    </ol>
  );
};
