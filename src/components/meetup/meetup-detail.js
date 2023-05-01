import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import Button from "../ui/Button";

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
            .catch((error) => console.log('meetup detail', error));
    }, [meetupId]);

    function editHandler() {
        console.log('edit');
        navigate(`/meetups/${meetupId}/edit`);
    }

    function deleteHandler() {
        console.log('delete');
        fetch(`http://localhost:3000/meetups/${meetupId}`, {
            method: 'DELETE'
        })
            .then((response) => {
                if (response.ok) {
                    console.log('successful delete');
                    navigate('/meetups');
                }
            })
            .catch((error) => console.log('meetup detail', error));
    }

  return (
        <div>
            <h1>{meetup.title}</h1>
            <address>{meetup.location}</address>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
            <p>{meetup.description}</p>
            <img src={`http://localhost:3000${image}`} alt={meetup.title} />
            <img src={`http://localhost:3000${thumbnail}`} alt={meetup.title} />
            <Button styles="btn btn-success" onClick={editHandler}>Edit</Button>
            <Button styles="btn btn-danger" onClick={deleteHandler}>Delete</Button>
        </div>
    );
}

export default MeetupDetail;