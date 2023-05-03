import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MeetupItem from "../components/meetup/meetup-item";

function Meetups() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/meetups")
      .then((response) => response.json())
      .then((data) => setMeetups(data))
      .catch((error) => console.log('meetups', error));
  }, []);

  const content = meetups.map((meetup) => (
    <MeetupItem key={meetup.id} meetup={meetup} />
  ));

  return (
    <div className="meetups-container">
      <div className="meetups-header">
        <h1 className="meetups-header-title">Meetups Page</h1>

        <Link to='/new-meetup' className="meetups-header-link">Add New Meetup</Link>
      </div>

      <div className="meetups-wrapper">
        {content}
      </div>
    </div>
  );
}


export default Meetups;