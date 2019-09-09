import React from "react";

function FormContainer(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          value={props.data.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.age}
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />
        <lable>
          <select
            value={props.data.destination}
            onChange={props.handleChange}
            name="destination"
          >
            <option value="sriLanka">Sri Lanka</option>
            <option value="germany">Germany</option>
            <option value="zimbabwe">Zimbabwe</option>
            <option value="panama">Panama</option>
          </select>{" "}
          Destination
        </lable>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={props.data.isVegan}
            onChange={props.handleChange}
          />{" "}
          Vegetarian
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="iskosher"
            checked={props.data.iskosher}
            onChange={props.handleChange}
          />{" "}
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.data.isLactoseFree}
            onChange={props.handleChange}
          />{" "}
          Lactose free
        </label>
        <br />
        <br />
        <br />
        <button>Submit</button>
        <hr />
        <h1>Entered Information</h1>
        <h2>
          Your name: {props.data.firstName} {props.data.lastName}
        </h2>
        <h2>Your age: {props.data.age}</h2>
        <h2>Your gender: {props.data.gender}</h2>
        <h2>Your destination: {props.data.destination}</h2>
        <h2>Your dietary restrictions: </h2>
        <h2>{props.data.isVegan ? "Vegan" : null}</h2>
        <h2>{props.data.iskosher ? "Kosher" : null}</h2>
        <h2>{props.data.isLactoseFree ? "Lactose Free" : null}</h2>
      </form>
    </main>
  );
}

export default FormContainer;
