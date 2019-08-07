
import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {
  return (
    <form>
    <label>
    First Name:
    </label>
    <input className="boxes" type="text" name="firstName"  value={this.state.firstName}/>
    <br></br>
    <label>
    Last Name:
    </label>
    <input className="boxes" type="text" name="lastName" value={this.state.lastName} />
    <br></br>
    <label>
    Email:
    </label>
    <input className="boxes" type="text" name="email" value={this.state.email} />
    <br></br>
    <label>
    Password:
    </label>
    <input className="boxes" type="text" name="password" value={this.state.password} />
    <br></br>
    <label>
     Your Age:
     </label>
    <input className="boxes" type="text" name="age" value={this.state.age} />
    <br></br>
    <label>
    Your Weight:
    </label>
    <input className="boxes" type="text" name="weight" value={this.state.weight} />
    <br></br>
    <label>
    Your Goals:
    </label>
    <input className="boxes" type="text" name="goals" value={this.state.goals} />
    <br></br>
    <label>
    Time Frame:
    </label>
    <input className="boxes" type="text" name="timeFrame" value={this.state.timeFrame} />
    <br></br>
    <label>
    Days Per Week:
    </label>
    <input className="boxes" type="text" name="daysPerWeek" value={this.state.daysPerWeek} />
    <br></br>
    <label>
    Workout Length:
    </label>
    <input className="boxes" type="text" name="workoutLength"  value={this.state.workoutLength} />
    <br></br>
    <label>
    Experience Level:
    </label>
    <input className="boxes" type="text" name="experienceLevel" value={this.state.experienceLevel} />
    <br></br>
    <input className="submit" type="submit" value="Submit" />

    </form>
  );
}
