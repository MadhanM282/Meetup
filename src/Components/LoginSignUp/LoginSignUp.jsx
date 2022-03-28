import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/Login/action";

export const LoginSignUp = () => {
  const [int,Setint] = useState([])
  const [info,SetInfo] = useState({
    name:"",
    location:"",
    interests:"",
  })
  const {user} = useSelector((store)=>store.user)
  const dispatch = useDispatch()
  const post = ()=>{
    axios.post("http://localhost:8080/users",info)
  }
  const submit = (e)=>{
    const {className,value} = e.target
    SetInfo({[className]:value})
    post()
  }
  const Login = ()=>{
    localStorage.setItem("user",true);
    dispatch(userLogin())
  }
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => {e.preventDefault(), submit() }}>
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
          onChange={(event) => { event.target.value }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" value="food" className="food" onChange={submit} />
        <br />
        <label>movies</label>
        <input type="checkbox" value="movies" className="movies" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>culture</label>
        <input type="checkbox" value="culture" className="culture" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>art</label>
        <input type="checkbox" value className="art" onChange={(event) => {console.log(event.target.className) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" value="drama" className="drama" onChange={(event) => {console.log(event.target.className) }} />
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
      <form className="login" onSubmit={Login}>
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
