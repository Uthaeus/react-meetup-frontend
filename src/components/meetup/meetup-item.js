import { useNavigate } from "react-router";
import ImagePlaceholder from "../ui/ImagePlaceholer";

function MeetupItem({ meetup }) {
    const navigate = useNavigate();

    function clickHandler() {
        navigate(`/meetups/${meetup.id}`);
    }
    
    return (
        <div className="meetup-item-wrapper" onClick={clickHandler}>
            <div className="meetup-item-image-wrapper">
                {meetup.thumbnail?.url ? <img src={`http://localhost:3000${meetup.thumbnail.url}`} alt={meetup.title} /> : <ImagePlaceholder type='thumbnail' />}
            </div>
            <div className="meetup-item-info-wrapper">
                <h3 className="item-info-title">{meetup.title}</h3>
                <address className="item-info-item">{meetup.location}</address>
                <p className="item-info-item">{meetup.date}</p>
                <p className="item-info-item">{meetup.time}</p>
            </div>
            
        </div>
    );
}

export default MeetupItem;