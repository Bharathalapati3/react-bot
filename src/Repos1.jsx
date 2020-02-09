import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./Repo1-styles.scss";

class Repos1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { repos: [] };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/facebook/repos")
      .then(response => this.setState({ repos: response.data }))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }

  render() {
    //const { repos } = this.state;
    const columns = [
      { name: "Name", selector: "name", sortable: true },
      { name: "City", selector: "city", sortable: true },
      { name: "Address", selector: "address", sortable: true }
    ];
    //const data  = repos.map(repo=>{Name=repo.name; FName=repo.full_name});
    const names = ["Carloshbhbhbhbm", "Juan", "Jesus", "Alberto", "John"];
    const cities = [
      "Chicago",
      "Tampico",
      "San Francisco",
      "Mexico City",
      "Boston",
      "New York"
    ];
    const addresses = [
      "333 West Wacker Drive",
      "1931 Insurgentes Sur",
      "1 Lombard Street",
      "55 Av Hidalgo"
    ];

    const data = [];
    //for (let i = 0; i < 1000; i++) {
    data.push({
      id: 1,
      name: names[0],
      city: cities[0],
      address: addresses[0]
    });
    data.push({
      id: 2,
      name: names[1],
      city: cities[1],
      address: addresses[1]
    });
    data.push({
      id: 3,
      name: names[2],
      city: cities[2],
      address: addresses[2]
    });
    // }

    return (
      <div>
        <DataTable
          title="Tracking  id Logs"
          columns={columns}
          data={data}
          highlightOnHover={true}
          defaultSortField="name"
          paginationRowsPerPageOptions={[1, 2, 4]}
          pagination={true}
          paginationPerPage={3}
          expandableRows
        />
      </div>
    );
  }
}
export default Repos1;
