import { connect, useDispatch, useSelector } from "react-redux";
import {
  Input,
  FormContainer,
  RowDiv,
  H4,
  Button,
  ListItem,
  ListContainer,
  Select,
  CellNoInput,
  H6,
  H2,
} from "../../styles";
import { useEffect, useState } from "react";
import { fetchIsdData } from "./GetIsdData/IsdDataActions";
import {
  addInputValue,
  removeInputValues,
  editInputValue,
} from "./inputActions";

import axios from "axios";
import { validEmail } from "./regex";


const InputForm = ({ fetchIsdData }) => {
  
  useEffect(() => {
    fetchIsdData();
  }, []);
  
  // 1. To store the values in Array
  const inputValues = useSelector((state) => state.input.inputValues);
  const isdData =useSelector(state => state.isdData.isdData)
  
  const dispatch = useDispatch();

  // 2. To receive values from the Input Form
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCellNo, setInputCellNo] = useState("");
  const [inputCountryCode, setInputCountryCode] = useState("");
  const [inputCheckBox, setInputCheckBox] = useState("");

  // 3. To change the showBox into form and form to showBox
  const [changeToEdit, setChangeToEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // 4. To show err message if we enter wrong pattern of Email and cell number
  const [numErr, setNumErr] = useState(false);
  const [mailErr, setMailErr] = useState(false);
  
  // 5. To handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // 6. To show alert if any input field left empty
    if (!inputName || !inputGender || !inputEmail || !inputCellNo) {
      alert("Please fill in all the required fields.");
      return;
    }

    // 7. To show alert if Privacy and Terms is unchecked
    if (!inputCheckBox) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    // 8. To check the length of cell Number
    if (inputCellNo.length === 10) {
      setNumErr(false);
    } else {
      setNumErr(true);
      return;
    }
    setNumErr(false);

    // 9. To check the pattern of Email Id
    if (!validEmail.test(inputEmail)) {
      setMailErr(true);
      return;
    } else {
      setMailErr(false);
    }

    // 10. To call the action creator which is used to store Data
    dispatch(
      addInputValue({
        inputName,
        inputGender,
        inputEmail,
        inputCellNo,
        inputCheckBox,
      })
    );

    // 11. To reset the form Empty
    setInputName("");

    setInputGender("");
    setInputEmail("");
    setInputCellNo("");
    setInputCheckBox(false);
  };

  // 12. To remove the data from the Array
  const handleDelete = (index) => {
    dispatch(removeInputValues(index));
  };

  // 13. To receive values from the Update Form
  const [updateName, setUpdateName] = useState("");
  const [updateGender, setUpdateGender] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateCellNo, setUpdateCellNo] = useState("");
  const [updateCountryCode, setUpdateCountryCode] = useState("");
  const [updateCheckBox, setUpdateCheckBox] = useState("");

  // 14. To Edit the values
  const handleEdit = (index) => {
    setChangeToEdit(true);
    setEditIndex(index);
    const {
      inputName: updateName,
      inputGender: updateGender,
      inputEmail: updateEmail,
      inputCellNo: updateCellNo,
      inputCheckBox: updateCheckBox,
    } = inputValues[index];

    setUpdateName(updateName);
    setUpdateGender(updateGender);
    setUpdateEmail(updateEmail);
    setUpdateCellNo(updateCellNo);
    setUpdateCheckBox(updateCheckBox);
  };

  // 15. To Update the values
  const handleUpdate = () => {
    dispatch(
      editInputValue(editIndex, {
        inputName: updateName,
        inputGender: updateGender,
        inputEmail: updateEmail,
        inputCellNo: updateCellNo,
        inputCheckBox: updateCheckBox,
      })
    );

    setUpdateName("");
    setUpdateGender("");
    setUpdateEmail("");
    setUpdateCellNo("");
    setUpdateCheckBox(false);
    setChangeToEdit(false);
    setEditIndex(null);
  };

  const handleChangeCellNo = (e) => {
    const inputCellNoValue = e.target.value;
    if (inputCellNoValue.length <= 10) {
      setInputCellNo(inputCellNoValue);
      setNumErr(false);
    } else {
      setNumErr(true);
    }
  };

  return (
    // 16. Input Form

    <div className="InputForm">
      <FormContainer>
        <h2>Input Form</h2>
        <Input
          type="text"
          placeholder="Enter Name"
          required
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <RowDiv>
          <H4>Gender</H4>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={inputGender === "Male"}
            onChange={() => setInputGender("Male")}
          />
          <H4>Male</H4>

          <input
            type="radio"
            value="Female"
            name="gender"
            checked={inputGender === "Female"}
            onChange={() => setInputGender("Female")}
          />
          <H4>Female</H4>
        </RowDiv>
        <Input
          type="email"
          placeholder="Enter E-Mail Id"
          required
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        {mailErr && <H6>Please Enter Valid Email Id</H6>}
        <RowDiv>
          <Select>
            {isdData && isdData.map((data,index) => (
              <option key={index}>
                {data.dial_code} {data.flag}
              </option>
            ))}
          </Select>
          <CellNoInput
            type="number"
            placeholder="Enter Cell number"
            required
            value={inputCellNo}
            onChange={(e) => setInputCellNo(e.target.value)}
          />
        </RowDiv>
        {numErr && <H6>Please Enter Valid Cell Num</H6>}
        <RowDiv>
          <input
            type="checkbox"
            required
            checked={inputCheckBox}
            onChange={(e) => setInputCheckBox(e.target.checked)}
          />
          <H4> I agree to the Terms & Conditions and Privacy Policy</H4>
        </RowDiv>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormContainer>

      {/* 17. To show update form when edit button is clicked */}

      <ListContainer>
        {inputValues.map((inputValue, index) => (
          <ListItem>
            {changeToEdit && editIndex === index ? (
              <div>
                <h4>Update Form</h4>
                <Input
                  type="text"
                  placeholder="Enter Name"
                  required
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />{" "}
                <br />
                <RowDiv aria-required>
                  <H4>Gender</H4>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={updateGender === "Male"}
                    onChange={() => setUpdateGender("Male")}
                  />
                  <H4>Male</H4>
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={updateGender === "Female"}
                    onChange={() => setUpdateGender("Female")}
                  />
                  <H4>Female</H4>
                </RowDiv>
                <Input
                  type="email"
                  placeholder="Enter E-Mail Id"
                  required
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Cell number"
                  required
                  value={updateCellNo}
                  onChange={(e) => setUpdateCellNo(e.target.value)}
                />
                <Button onClick={() => handleUpdate(index)}>Update</Button>
              </div>
            ) : (
              // 18 . To show data from the Array
              <div key={index}>
                <H2>Name: {inputValue.inputName}</H2>
                <div>
                  <h4>Gender: {inputValue.inputGender}</h4>
                </div>
                <h4>Email: {inputValue.inputEmail}</h4>

                <h4>Cell No: {inputValue.inputCellNo}</h4>
                <p>
                  Agreed to Terms: {inputValue.inputCheckBox ? "Yes" : "No"}
                </p>
                <Button onClick={() => handleDelete(index)}>Delete</Button>
                <Button onClick={() => handleEdit(index)}>Edit</Button>
              </div>
            )}
          </ListItem>
        ))}
      </ListContainer>
    </div>
  );
};

// 1. To get isdData from API

const mapStateToProps = (state) => {
  return {
    isdData: state.isdData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIsdData: () => dispatch(fetchIsdData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
