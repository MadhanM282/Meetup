import axios from "axios";
import { useState } from "react";

export const LoginSignUp = () => {
  const [int,Setint] = useState([])
  const [info,SetInfo] = useState({
    name:"",
    location:"",
    interests:[],
    image:"",
    subscribed:[]
  })

  const post = ()=>{
    axios.post("http://localhost:8080/users",info)
  }
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <select value={""} className="location" onChange={(event) => { console.log(event.target.value)}}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => { }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {console.log(event.target.className) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>

      {/* Login */}
      <form className="login" onSubmit={(e) => { console.log(event.target.className)}}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {console.log(event.target.className) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { console.log(event.target.className) }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
