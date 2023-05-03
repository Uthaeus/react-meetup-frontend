import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholer";

function MeetupDetail() {
  const [meetup, setMeetup] = useState({});
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();

  const { meetupId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/meetups/${meetupId}`)
      .then((response) => response.json())
      .then((data) => {
        setMeetup(data);
        setImage(data.image.url);
        setThumbnail(data.thumbnail.url);
      })
      .catch((error) => console.log("meetup detail", error));
  }, [meetupId]);

  function deleteHandler() {
    fetch(`http://localhost:4000/meetups/${meetupId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("successful delete");
          navigate("/meetups");
        }
      })
      .catch((error) => console.log("meetup detail", error));
  }

  return (
    <div className="meetup-detail-container">
      <div className="detail-image-container">
        {meetup.image?.url ? (
          <img 
            src={`http://localhost:3000${image}`} 
            alt={meetup.title} 
            width="100%"
          />
        ) : (
          <ImagePlaceholder type="image" />
        )}
      </div>

      <div className="detail-content-container">
        <div className="detail-content-left">
          <h1 className="detail-title">{meetup.title}</h1>
          <div className="detail-description-container">
            <p>{meetup.description}</p>
          </div>
        </div>
        <div className="detail-content-right">
          <address className="detail-item">{meetup.location}</address>
          <p className="detail-item">{meetup.date}</p>
          <p className="detail-item">{meetup.time}</p>
        </div>
      </div>

      <div className="detail-actions">
        <Button
          styles="btn btn-success"
          onClick={() => navigate(`/meetups/${meetupId}/edit`)}
        >
          Edit
        </Button>
        <Button styles="btn btn-danger ms-4" onClick={deleteHandler}>
          Delete
        </Button>
        <Button
          styles="btn btn-primary ms-4"
          onClick={() => navigate("/meetups")}
        >
          Back to Meetups
        </Button>
      </div>
    </div>
  );
}

export default MeetupDetail;
