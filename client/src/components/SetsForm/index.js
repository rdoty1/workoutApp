import React from 'react';

export default function SetsForm(props) {
  console.log(props)
    
    return (
      <form>
        <label>
          Set 1:
          <input type="text" name="Set1" />
        </label>
        <br></br>
        <label>
          Set 2:
          <input type="text" name="Set2" />
        </label>
        <br></br>
        <label>
          Set 3:
          <input type="text" name="Set3"/>
        </label>
        <br></br>
        <label>
          Set 4:
          <input type="text" name="Set4" />
        </label>
        <br></br>
        <br></br>

        <input type="submit" value="Submit" onClick={props.PlayAudio}/>
      </form>
    );

}


