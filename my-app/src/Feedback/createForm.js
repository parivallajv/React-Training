import Cards from "./Cards";
import { locationObj, ratingObj } from "./FeedbackObject";
import { useState } from "react";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedDataLits, setSubmittedDataLits] = useState([]);

  const handleSubmit = () => {
    if(!name ){
        alert("Enter name before Submitting data")
        return;
    }
    const formData = {
      name: name,
      location: location,
      rating: rating,
      feedback: feedback,
    };

    
    setSubmittedDataLits([...submittedDataLits, formData]);
    console.log(submittedDataLits);
    setName("");
    setLocation(locationObj[0].location);
    setRating(ratingObj[0].rating)
    setFeedback("")
  };

  const handleDelete = (index) => {
    const newDatalist = [...submittedDataLits];
    newDatalist.splice(index, 1);
    setSubmittedDataLits(newDatalist);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Full Name"
          name={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <select name="" id="" onChange={(e) => setLocation(e.target.value)} value={location}>
          {locationObj.map((data) => {
            return <option key={data.id}>{data.location}</option>;
          })}
        </select>{" "}
        <br />
        <select name="" id="" onChange={(e) => setRating(e.target.value)} value={rating}>
          {ratingObj.map((data) => {
            return <option key={data.id}>{data.rating}</option>;
          })}
        </select>{" "}
        <br />
        <input
          type="text"
          placeholder="Feedback"
          onChange={(e) => setFeedback(e.target.value)}
          value={feedback}
        />
        <br />
        <button type="submit" onClick={() => handleSubmit()}>
          SUBMIT
        </button>
      </div>
      {submittedDataLits.length > 0 &&
        submittedDataLits.map((data, index) => {
          return (
            <div>
              <Cards
                name={data.name}
                key={index}
                index={index}
                location={data.location}
                rating={data.rating}
                feedback={data.feedback}
                handleDelete={handleDelete}
              ></Cards>
            </div>
          );
        })}
    </div>
  );
};

export default CreateForm;
