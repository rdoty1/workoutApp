
import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {
  return (
    <form>
    <label>
    First Name:
    </label>
    <input className="boxes" type="text" name="firstName" />
    <br></br>
    <label>
    Last Name:
    </label>
    <input className="boxes" type="text" name="lastName" />
    <br></br>
    <label>
    Email:
    </label>
    <input className="boxes" type="text" name="lastName" />
    <br></br>
    <label>
    Password:
    </label>
    <input className="boxes" type="text" name="lastName" />
    <br></br>
    <label>
     Your Age:
     </label>
    <input className="boxes" type="text" name="age" />
    <br></br>
    <label>
    Your Weight:
    </label>
    <input className="boxes" type="text" name="weight" />
    <br></br>
    <label>
    Your Goals:
    </label>
    <input className="boxes" type="text" name="goals" />
    <br></br>
    <label>
    Time Frame:
    </label>
    <input className="boxes" type="text" name="name" />
    <br></br>
    <label>
    Days Per Week:
    </label>
    <input className="boxes" type="text" name="name" />
    <br></br>
    <label>
    Workout Length:
    </label>
    <input className="boxes" type="text" name="name" />
    <br></br>
    <label>
    Experience Level:
    </label>
    <input className="boxes" type="text" name="name" />
    <br></br>
    <input className="submit" type="submit" value="Submit" />

    </form>
  );
}
