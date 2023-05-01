import { useForm } from "react-hook-form";

function MeetupForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
