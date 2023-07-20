import { Div, Input, H2, Select, Submit, StarDiv } from "./styleModules";
import { locationObj, ratingObj } from "./formObject";
import { useState } from "react";
import Cards from "./cards";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submittedDataList, setSubmittedDataList] = useState([]);

  const handleFormSubmit = () => {
    
    const formData = {
      name: name,
      location: location,
      rating: rating,
      feedback: feedback,
    };
    setSubmittedDataList([...submittedDataList, formData]);
    setName("");
    setLocation('')
    setRating('')
    setFeedback("");
  };

  const deleteData = (id) => {

    
    const newSubmittedDataList = submittedDataList.filter((data) => {
      return data.id !== id;
    });
    setSubmittedDataList(newSubmittedDataList);
  };

  return (
    <div>
      <Div>
        <H2>Feedback Form</H2>
        <Input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        ></Input>
        <label>Location</label>
        <Select
          name=""
          id=""
          placeholder="Location"
          required
          onChange={(e) => setLocation(e.target.value)}
        >
          {locationObj.map((data) => {
            return (
              <option key={data.id} value={data.place}>
                {data.place}
              </option>
            );
          })}
        </Select>

        <label>Rating</label>
        <Select
          name=""
          id=""
          required
          onChange={(e) => setRating(e.target.value)}
        >
          {ratingObj.map((data) => {
            return (
              <option key={data.id} value={data.rating}>
                {data.rating}
              </option>
            );
          })}
        </Select>
        <Input
          type="text"
          placeholder="Enter Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></Input>
        <Submit
          name={name}
          location={location}
          rating={rating}
          feedback={feedback}
          onClick={() => handleFormSubmit()}
        >
          SUBMIT
        </Submit>
      </Div>

      {submittedDataList.length > 0 && (
        <Div>
          {submittedDataList.map((formData, index) => (
            <Cards
              key={index}
              name={formData.name}
              location={formData.location}
              rating={formData.rating}
              feedback={formData.feedback}
              deleteData={deleteData}
              
            ></Cards>
          ))}
        </Div>
      )}
    </div>
  );
};

export default CreateForm;
