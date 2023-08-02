import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  FormContainer,
  RowDiv,
  H4,
  Button,
  ListItem,
  ListContainer,
  h6,
  Select,
  CellNoInput,
} from "../../styles";
import isdCode from "./axios";
import { useEffect, useState } from "react";

import {
  addInputValue,
  removeInputValues,
  editInputValue,
} from "./inputActions";
import useFetch from "./axios";
import axios from "axios";

const InputForm = () => {
  const inputValues = useSelector((state) => state.input.inputValues);

  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCellNo, setInputCellNo] = useState("");
  const [inputCheckBox, setInputCheckBox] = useState("");

  const [changeToEdit, setChangeToEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [numErr, setNumErr] = useState(false);
  const [mailErr, setMailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputName || !inputGender || !inputEmail || !inputCellNo) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (!inputCheckBox) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }
    dispatch(
      addInputValue({
        inputName,
        inputGender,
        inputEmail,
        inputCellNo,
        inputCheckBox,
      })
    );

    setInputName("");
    setInputGender("");
    setInputEmail("");
    setInputCellNo("");
    setInputCheckBox(false);
  };
  const handleDelete = (index) => {
    dispatch(removeInputValues(index));
  };
  const handleEdit = (index) => {
    setChangeToEdit(true);
    setEditIndex(index);
    const { inputName, inputGender, inputEmail, inputCellNo, inputCheckBox } =
      inputValues[index];
    setInputName(inputName);
    setInputGender(inputGender);
    setInputEmail(inputEmail);
    setInputCellNo(inputCellNo);
    setInputCheckBox(inputCheckBox);
  };
  const handleUpdate = () => {
    dispatch(
      editInputValue(editIndex, {
        inputName,
        inputGender,
        inputEmail,
        inputCellNo,
        inputCheckBox,
      })
    );

    setInputName("");
    setInputGender("");
    setInputEmail("");
    setInputCellNo("");
    setInputCheckBox(false);
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
  const url =
    "https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json";

  const [isdCode, setIsdCode] = useState([]);

  axios.get(url).then((res) => setIsdCode(res.data));

  return (
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
        <RowDiv>
          <Select>
            {isdCode.map((data) => {
              return (
                <option>
                  {data.dial_code} {data.flag}
                </option>
              );
            })}
          </Select>
          <CellNoInput
            type="number"
            placeholder="Enter Cell number"
            required
            value={inputCellNo}
            onChange={handleChangeCellNo}
          />
        </RowDiv>
        {numErr && <h6>Please Enter Valid Cell Num</h6>}
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
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />{" "}
                <br />
                <RowDiv aria-required>
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
                <Input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Cell number"
                  required
                  value={inputCellNo}
                  onChange={(e) => setInputCellNo(e.target.value)}
                />
                <Button onClick={() => handleUpdate(index)}>Update</Button>
              </div>
            ) : (
              <div key={index}>
                <h4>Name: {inputValue.inputName}</h4>
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

export default InputForm;
