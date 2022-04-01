import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Info, Info1, Main } from "../../style";

export const Home = () => {

  // const {interest,name} = JSON.parse(localStorage.getItem("userLoginDetails"))
  const location = localStorage.getItem("loc")
  console.log('location', location);
  const [list, SetList] = useState([])
  const [loc, setLoc] = useState("")
  const [fil, setFil] = useState([])

  const meets = useSelector((store) => store.meets)
  console.log('meets', meets);

  useEffect(() => {
    GetEvent()
    setLoc(location)
  }, [])
  const GetEvent = () => {
    axios.get("http://localhost:8080/meetups").then(({ data }) => {
      SetList(data)
      console.log('data', data);
    }).catch((err) => { console.log('error', err) })
  }
  return (<Main className="homeContainer">
    {/* // Filter on the basis of Users interests and location (both true)  .filter((el) => { })*/}
    {list.filter((el) => {
      if (el.location === loc) {
        console.log(el)
      }
    })}
    {list.map((el) => {
      // console.log('el', el);
      return (
        <Link to={`/meetup/${el.id}`} key={el.id} className="events">
          <Grid>
            <img src={el.image} alt="" />
            <h1 className="title">{el.title}</h1>
            <Info1>
              <h2 className="location" >{el.location}</h2>
              <h3 className="theme">{el.theme}</h3>
            </Info1>
            <Info1>
              <h4 className="time">{el.time}</h4>
              <h4 className="data">{el.date}</h4>
            </Info1>
            <p className="description">{el.description}</p>

          </Grid>
          {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)

                          {
              "meetups": [
                {
                  "id": 1,
                  "title": "Saunter Strech",
                  "location": "bangalore",
                  "date": "2022-03-25",
                  "time": "23:59",
                  "theme": "technology",
                  "description": "Random Event",
                  "image": "https://images.unsplash.com/photo"
                }
              ]
            }
             */}
        </Link>
      );
    })}

    <div align="center" className="subscribedData">
      <div>
        <select
          value={"add your value here"}  // add value here
          onChange={(e) => { }}
        >
          <option value="">------</option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
      </div>
      <Link to={"/addmeetup"}> Add Meetup</Link>
      <h1>Subscribed Events</h1>
      <div className="subscribedEvents">
        {/* All user subcribed events should be displayed here in an ascending order of date */}

        {meets.map((el) => {
          return (
            <Link to={`/meetup/${el.id}`} key={el.id} className="events">
              <Grid>
                <img src={el.image} alt="" />
                <h1 className="title">{el.title}</h1>
                <Info1>
                  <h2 className="location" >{el.location}</h2>
                  <h3 className="theme">{el.theme}</h3>
                </Info1>
                <Info1>
                  <h4 className="time">{el.time}</h4>
                  <h4 className="data">{el.date}</h4>
                </Info1>
                <p className="description">{el.description}</p>

              </Grid>
              {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
            </Link>
          );
        })}

      </div>
    </div>
  </Main>
  );
};
