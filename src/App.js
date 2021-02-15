import "./App.css";
import CompanyList from "./components/CompanyList";

const oData = {
  companyname: "Arjun Infra pvt",
  badge: "Red",
  childCompany: [
    {
      companyname: "Good Home ltd ",
      badge: "blue",
      childCompany: [
        {
          companyname: "Private build ltd",
          badge: "Green",
          childCompany: [{}],
        },
      ],
    },
    {
      companyname: "Cheap Housing ltd",
      badge: "blue",
      childCompany: [{}],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <CompanyList company={oData} />
    </div>
  );
}

export default App;
