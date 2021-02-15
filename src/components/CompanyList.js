import Company from "./Company";

function CompanyList({ company, childNumber, siblingsCount }) {
  const childCompany = company.childCompany.filter((item) => item.companyname);

  return (
    <Company
      company={company}
      child={childCompany}
      childNumber={childNumber}
      siblingsCount={siblingsCount}
    />
  );
}

export default CompanyList;
