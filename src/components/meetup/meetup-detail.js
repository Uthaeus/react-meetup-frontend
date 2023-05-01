import { useState, useEffect } from "react";
import { useParams } from "react-router";

function MeetupDetail() {
    const [meetup, setMeetup] = useState({});
  const { meetupId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/meetups/${meetupId}`)
            .then((response) => response.json())
            .then((data) => setMeetup(data))
            .catch((error) => console.log('meetup detail', error));
    }, [meetupId]);

  return (
        <div>
            <h1>{meetup.title}</h1>
            <address>{meetup.location}</address>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
            <p>{meetup.description}</p>
        </div>
    );
}

export default MeetupDetail;