
import React from "react";


// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {
  
  console.log("this is props", props)
  return (
    <form>

      <label>
        First Name:
      </label>
      <input className="boxes" type="text" name="firstName"  value={this.state.firstName} onChange={props.handleChange} />
      <br></br>

      <label>
        Last Name:
      </label>
      <input className="boxes" type="text" name="lastName" value={this.state.lastName} onChange={props.handleChange} />
      <br></br>
      
      <label>
      Email:
      </label>
      <input className="boxes" type="text" name="email" value={this.state.email} onChange={props.handleChange} />
      <br></br>
      
      <label>
      Password:
      </label>
      <input className="boxes" type="text" name="password" value={this.state.password} onChange={props.handleChange} />
      <br></br>
      
      <label>
      Your Age:
      </label>
      <input className="boxes" type="text" name="age" value={this.state.age} onChange={props.handleChange} />
      <br></br>
      
      <label>
      Your Weight:
      </label>
      <input className="boxes" type="text" name="weight" value={this.state.weight} onChange={props.handleChange}  />
      <br></br>
      
      <label>
      Your Goals:
      </label>
      <input className="boxes" type="text" name="goals" value={this.state.goals} onChange={props.handleChange} />
      <br></br>
      
      <label>
        Time Frame:
      </label>
      <input className="boxes" type="text" name="timeFrame" value={this.state.timeFrame} onChange={props.handleChange} />
      <br></br>
      
      <label>
        Days Per Week:
      </label>
      <input className="boxes" type="text" name="daysPerWeek" value={this.state.daysPerWeek}  onChange={props.handleChange} />
      <br></br>
      
      <label>
        Workout Length:
      </label>
      <input className="boxes" type="text" name="workoutLength"  value={this.state.workoutLength} onChange={props.handleChange} />
      <br></br>
      
      <label>
      Experience Level:
      </label>
      <input className="boxes" type="text" name="experienceLevel" value={this.state.experienceLevel} onChange={props.handleChange} />
      <br></br>
      
      <input className="submit" type="submit" value="Submit" />

    </form>
  );
}
