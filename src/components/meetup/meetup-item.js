import { useNavigate } from "react-router";
import ImagePlaceholder from "../ui/ImagePlaceholer";

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
            {meetup.thumbnail?.url ? <img src={`http://localhost:3000${meetup.thumbnail.url}`} alt={meetup.title} /> : <ImagePlaceholder type='thumbnail' />}
        </div>
    );
}

export default MeetupItem;