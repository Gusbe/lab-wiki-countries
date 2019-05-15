import React, { Component } from 'react'

class ListCountries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
  }


  render() {
    return (
      <div class="col-5">
        <div class="list-group">
          {
            this.props.data.map((country) => {
              return (
                <a class="list-group-item list-group-item-action" href={`/${country.cca3}`}> {country.flag} {country.name.common}</a>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ListCountries;