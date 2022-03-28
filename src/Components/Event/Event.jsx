// This is an event details page which has its own route

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Info, InfoDiv } from "../../style";

export const Event = () => {
  const [list,SetList]=useState([])
  const {id} = useParams()
  useEffect(()=>{
    GetEvent()
  },[])
  const GetEvent = ()=>{
    axios.get(`http://localhost:8080/meetups/${id}`).then(({data})=>{
    // console.log('data', data);
    SetList(data)
    }).catch((err)=>{console.log('error', err)})
  }
  return (
    <InfoDiv className="eventContainer">
      <div>
        <img src={list.image} alt="Event" />
        <h1>{list.title}</h1>
        <h2>{list.theme}</h2>
        <Info>
          <p>{list.date}</p>
          <p>{list.time}</p>
        </Info>
        <h3>{list.location}</h3>
        {/* {console.log(list)} */}
      </div>
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => { }}>Subscribe</button>
    </InfoDiv>
  );
};
