import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MeetupItem from "../components/meetup/meetup-item";

function Meetups() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meetups")
      .then((response) => response.json())
      .then((data) => setMeetups(data))
      .catch((error) => console.log('meetups', error));
  }, []);

  const content = meetups.map((meetup) => (
    <MeetupItem key={meetup.id} meetup={meetup} />
  ));

  return (
    <div>
      <h1>Meetups Page</h1>

      <Link to='/new-meetup'>Add New Meetup</Link>

      <div>
        {content}
      </div>
    </div>
  );
}


export default Meetups;