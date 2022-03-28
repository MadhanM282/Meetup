import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../style";

export const Home = () => {
  const [list,SetList]=useState()
  useEffect(()=>{
    GetEvent()
  },[])
  const GetEvent = ()=>{
    axios.get("http://localhost:8080/meetups ").then(({data})=>{
    console.log('data', data);
    SetList(data)
    }).catch((err)=>{console.log('error', err)})
  }
  return (<div className="homeContainer">
      {/* // Filter on the basis of Users interests and location (both true)  .filter((el) => { })*/ }
      {[].map((el) => {
          console.log('el', el);
          return (
            <Link to={`add route here`} className="events">
              <div>
                
                {/* <h1>{el.title}</h1>
                <h2>{el.location}</h2> */}
              </div>
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

      <div className="subscribedData">
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

          {[].map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
