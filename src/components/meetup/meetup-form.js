
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function MeetupForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
    fetch("http://localhost:3000/meetups", {
      method: "POST",
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
        <div className="form-control">
          <input type="text" placeholder="Title" {...register("title")} />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Location" {...register("location")} />
        </div>
        <div className="form-control">
          <input type="time" placeholder="Time" {...register("time")} />
        </div>
        <div className="form-control">
          <input type="date" placeholder="Date" {...register("date")} />
        </div>
        <div className="form-control">
          <input type="file" {...register("image")} />
        </div>
        <div className="form-control">
          <input type="file" {...register("thumbnail")} />
        </div>
        <div className="form-control">
          <textarea placeholder="Description" {...register("description")} />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MeetupForm;
