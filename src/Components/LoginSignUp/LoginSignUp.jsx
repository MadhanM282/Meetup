import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/Login/action";

export const LoginSignUp = () => {
  // const [name,Setint] = useState("")
  
  const [name,setName] = useState("")
  const [location,setLocation] =useState("");
  const [interest,setInterest] = useState([])
  // console.log('interest', interest);
  const {user} = useSelector((store)=>store.user)
  const navigate = useNavigate()
  console.log('user', user);
  const dispatch = useDispatch()
  const post = ()=>{
    axios.post("http://localhost:8080/users",{
      name:name,
      location:location,
      interest:interest
    })
    localStorage.setItem("userLoginDetails",JSON.stringify({name,location,interest}))
    localStorage.setItem("Auth",true)
    localStorage.setItem("loc",location)
  }
  const submit = (e)=>{
    post()
  }
  const interesthandel = (e)=>{
    const {value} = e.target
    setInterest([...interest,value])
  }
  // const navigate = useNavigat
  const Login = ()=>{
    dispatch(userLogin())
    localStorage.setItem("user",true);

  }

  const [auth,setAuth] = useState(false)
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => {e.preventDefault(), submit() }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(e)=>setName(e.target.value)}
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
        <select value={""} className="location" onChange={(event) => { setLocation(event.target.value)}}>
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
          onChange={(event) => { interesthandel }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" value="food" className="food" onChange={interesthandel} />
        <br />
        <label>movies</label>
        <input type="checkbox" value="movies" className="movies" onChange={interesthandel} />
        <br />
        <label>culture</label>
        <input type="checkbox" value="culture" className="culture" onChange={interesthandel} />
        <br />
        <label>art</label>
        <input type="checkbox" value className="art" onChange={interesthandel} />
        <br />
        <label>drama</label>
        <input type="checkbox" value="drama" className="drama" onChange={interesthandel} />
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
          onChange={(event) => {setAuth(true) }}
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
        <input type="submit" className="submitLoginForm" onClick={
          (e)=>{
          e.preventDefault();
          if(auth===true){
            return navigate("/")
          }
        }
      } />
      </form>
    </div>
  );
};
