import { useNavigate } from "react-router";

function MeetupItem({ meetup }) {
    const navigate = useNavigate();

    function clickHandler() {
        navigate(`/meetups/${meetup.id}`);
    }
    
    return (
        <div onClick={clickHandler}>
            <h3>{meetup.title}</h3>
            <address>{meetup.location}</address>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
        </div>
    );
}

export default MeetupItem;