import React, { Component } from "react"
import "../styles/App.css"

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      pilot: this.state.name,
      name: ""
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentWillMount() {
    fetch("https://swapi.co/api/vehicles/")
      .then(response => response.json())
      .then(json => {
        this.setState({
          vehicles: json.results
        })
      })
  }
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    const vehicles = this.state.vehicles.map(vehicle => {
      return (
        <div className="card" key={vehicle.name}>
          <div className="card-block">
            <h4 className="card-title">
              {vehicle.name}
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">
              {vehicle.model}
            </h6>
            <div>
              <h4>Specs</h4>
            </div>
            <div>
              <h6 className="card-subtitle mb-2 text-muted">
                Manufacturer:{vehicle.manufacturer}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Class:{vehicle.vehicle_class}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Passengers:{vehicle.passengers}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Crew:{vehicle.crew}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Length:{vehicle.length}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Max Speed:{vehicle.max_atmoshpering_speed}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Cargo Capacity:{vehicle.cargo_capacity}
              </h6>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="jumbotron">
          <div>Star Wars</div>
          <div>The Vehicles of Star Wars</div>
        </header>
        <form className="jumbotron" onSubmit={this.handleSubmit}>
          <label>What is your name, pilot?</label>
          <div>
            <input
              onChange={this.handleNameChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <button onClick={this.handleSubmit} type="button" name="button">
              Submit
            </button>
            <h2>
              {this.state.pilot}
            </h2>
          </div>
        </form>
        <div className="jumbotron">
          {vehicles}
        </div>
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    )
  }
}

export default App
