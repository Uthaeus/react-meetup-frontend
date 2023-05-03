import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function MeetupForm({meetup}) {
  const { register, handleSubmit, reset } = useForm({});
  const [apiAction, setApiAction] = useState("POST");
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/meetups");
  const navigate = useNavigate();

  useEffect(() => {
    if (meetup) {
      reset({
        title: meetup.title,
        location: meetup.location,
        time: meetup.time,
        date: meetup.date,
        description: meetup.description,
      });
      setApiAction("PATCH");
      setApiUrl(`http://localhost:3000/meetups/${meetup.id}`);
      console.log('meetup', meetup);
    }
  }, [meetup, reset]);

  function buildForm(data) {
    const formData = new FormData();
    formData.append("meetup[title]", data.title);
    formData.append("meetup[location]", data.location);
    formData.append("meetup[time]", data.time);
    formData.append("meetup[date]", data.date);
    formData.append("meetup[description]", data.description);
    formData.append("meetup[image]", data.image[0]);
    formData.append("meetup[thumbnail]", data.thumbnail[0]);

    return formData;
  }

  const onSubmit = (data) => {
    console.log(data);
    fetch(apiUrl, {
      method: apiAction,
      body: buildForm(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("success");
          navigate("/meetups");
        }
      })
      .catch((error) => console.log("meetup form", error));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="form-group mb-2">
          <input className="form-control" type="text" placeholder="Title" {...register("title")} />
        </div>
        <div className="form-group mb-2">
          <input className="form-control" type="text" placeholder="Location" {...register("location")} />
        </div>
        <div className="form-group mb-2">
          <input className="form-control" type="time" placeholder="Time" {...register("time")} />
        </div>
        <div className="form-group mb-2">
          <input className="form-control" type="date" placeholder="Date" {...register("date")} />
        </div>
        <div className="form-group mb-2">
          <input className="form-control" type="file" {...register("image")} />
        </div>
        <div className="form-group mb-2">
          <input className="form-control" type="file" {...register("thumbnail")} />
        </div>
        <div className="form-group mb-2">
          <textarea className="form-control" rows={9} placeholder="Description" {...register("description")} />
        </div>

        <div className="form-group">
          <button className="form-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MeetupForm;
