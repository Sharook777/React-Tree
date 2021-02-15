import CompanyList from "./CompanyList";
import HorizontalLine from "./HorizontalLine";

function typeHorizontaline(siblingsCount, childNumber) {
  let type = "";

  if (siblingsCount > 1 && childNumber === 0) type = "Left";
  else if (siblingsCount > 1 && childNumber === siblingsCount - 1)
    type = "Right";
  else type = "Full";
  return type;
}

export default function Company({
  company,
  child,
  siblingsCount,
  childNumber,
}) {
  const type = typeHorizontaline(siblingsCount, childNumber);
  return (
    <>
      <div className="App-Company-Wrapper">
        <div className="Vertical-Line-Top"></div>
        {siblingsCount > 1 ? <HorizontalLine type={type} /> : null}
        <div className="App-Company" style={{ background: company.badge }}>
          {company.companyname}
          {child?.length ? <div className="Vertical-Line-Bottom"></div> : null}
        </div>
      </div>
      {child?.length ? (
        <div className="App-Company-Row">
          {child.map((com, index) => (
            <div key={com.companyname} className="App-Company-Row-Wrapper">
              <CompanyList
                company={com}
                childNumber={index}
                siblingsCount={child.length}
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
