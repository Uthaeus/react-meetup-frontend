import { useParams } from "react-router";

function MeetupDetail() {
  const { meetupId } = useParams();

  return <div>Meetup Detail {meetupId}</div>;
}

export default MeetupDetail;