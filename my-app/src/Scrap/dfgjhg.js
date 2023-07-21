import { Div, Input, H2, Select, Submit } from "./styleModules";
import { locationObj, ratingObj } from "./formObject";
import { useState, useEffect } from "react";
import Cards from "./cards";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [findName, setFindName] = useState(""); // Fix: initialize findName as an empty string

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(submittedDataList));
  }, [submittedDataList]);

  const handleFormSubmit = () => {
    if (!name) {
      alert("Please enter your name before submitting.");
      return;
    }

    const formData = {
      name: name,
      location: location,
      rating: rating,
      feedback: feedback,
    };
    setSubmittedDataList([...submittedDataList, formData]);
    setName("");
    setLocation(locationObj[0].place);
    setRating(ratingObj[0].rating);
    setFeedback("");
  };

  const findData = () => {
    const filteredData = submittedDataList.filter((data) =>
      data.name.toLowerCase().includes(findName.toLowerCase())
    );
    setFilteredDataList(filteredData);
  };

  const deleteData = (index) => {
    const newSubmittedDataList = [...submittedDataList];
    newSubmittedDataList.splice(index, 1);
    setSubmittedDataList(newSubmittedDataList);
  };

  return (
    <div>
      <Div>
        <H2>Feedback Form</H2>

        {/* ... other form elements ... */}

        <input
          type="text"
          placeholder="Search Person"
          onChange={(e) => setFindName(e.target.value)}
          value={findName}
        />
        <button onClick={findData}>Search Person</button>
      </Div>

      {filteredDataList.length > 0 ? (
        <Div>
          {filteredDataList.map((formData, index) => (
            <Cards
              key={index}
              index={index}
              name={formData.name}
              location={formData.location}
              rating={formData.rating}
              feedback={formData.feedback}
              deleteData={() => deleteData(index)}
            />
          ))}
        </Div>
      ) : submittedDataList.length > 0 ? (
        <Div>
          {submittedDataList.map((formData, index) => (
            <Cards
              key={index}
              index={index}
              name={formData.name}
              location={formData.location}
              rating={formData.rating}
              feedback={formData.feedback}
              deleteData={() => deleteData(index)}
            />
          ))}
        </Div>
      ) : null}
    </div>
  );
};

export default CreateForm;
