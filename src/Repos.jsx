import React from "react";
import axios from "axios";
import { DataTable } from "react-data-components";

class Repos extends React.Component {
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
    const { repos } = this.state;

    const columns = [
      { title: "Name", prop: "name" },
      { title: "FName", prop: "fname" }
    ];
    //const data  = repos.map(repo=>{Name=repo.name; FName=repo.full_name});
    const names = ["Carlos", "Juan", "Jesus", "Alberto", "John"];
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
    // }

    return (
      <div>
        const {repos} = this.state;
        <h1>Repos by facebook</h1>{" "}
        <DataTable keys="id" columns={columns} initialData={data} />
      </div>
    );
  }
}
export default Repos;
