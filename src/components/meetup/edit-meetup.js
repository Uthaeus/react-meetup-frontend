import { useParams } from "react-router";
import MeetupForm from "./meetup-form";

function EditMeetup() {
    const { meetupId } = useParams();

    return (
        <>
            <h1>Edit Meetup</h1>
            <MeetupForm />
        </>
    );
}

export default EditMeetup;