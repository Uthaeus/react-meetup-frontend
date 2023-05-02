import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MeetupForm from "./meetup-form";

function EditMeetup() {
    const [meetup, setMeetup] = useState(null);
    const { meetupId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/meetups/${meetupId}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setMeetup(data)
            })
            .catch((error) => console.log('edit meetup error', error));
    }, [meetupId]);

    return (
        <>
            <h1>Edit Meetup</h1>
            <MeetupForm meetup={meetup} />
        </>
    );
}

export default EditMeetup;