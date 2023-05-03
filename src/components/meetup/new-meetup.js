
import MeetupForm from "./meetup-form";

function NewMeetup() {

    return (
        <div className="new-meetup-container">
            <h1 className="new-meetup-title">New Meetup</h1>
            <MeetupForm />
        </div>
    );
}

export default NewMeetup;