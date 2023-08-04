import { connect, useDispatch, useSelector } from "react-redux";
import {
  Input,
  FormContainer,
  RowDiv,
  ListItem,
  ListContainer,
  Select,
  CellNoInput,
  H6,
  H2,
} from "../../styles";
import {
  CheckBox,
  InpCellNo,
  InputField,
  InputNum,
  RadioButton,
  SelectField,
  Selector,
  Spacing,
  Title,
  spacing,
} from "../../AntStyle";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useEffect, useState } from "react";

import { fetchIsdData } from "./GetIsdData/IsdDataActions";
import {
  addInputValue,
  removeInputValues,
  editInputValue,
} from "./inputActions";
import { validEmail } from "./regex";

const InputForm = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsdData());
  }, []);

  // 1. To store the values in Array
  const inputValues = useSelector((state) => state?.input?.inputValues);
  const isdData = useSelector((state) => state?.isdData?.isdData);

  isdData.sort((a, b) => {
    return a?.dial_code - b?.dial_code;
  });

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
    if (inputCellNo?.length === 10) {
      setNumErr(false);
    } else {
      setNumErr(true);
      return;
    }
    setNumErr(false);

    // 9. To check the pattern of Email Id
    if (!validEmail?.test(inputEmail)) {
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
        inputCountryCode,
        inputCellNo,
        inputCheckBox,
      })
    );

    // 11. To reset the form Empty
    setInputName("");
    setInputGender("");
    setInputEmail("");
    setInputCountryCode("");
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
      inputCountryCode: updateCountryCode,
      inputCellNo: updateCellNo,
      inputCheckBox: updateCheckBox,
    } = inputValues[index];

    setUpdateName(updateName);
    setUpdateGender(updateGender);
    setUpdateEmail(updateEmail);
    setUpdateCountryCode(updateCountryCode);
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
        inputCountryCode: updateCountryCode,
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

  return (
    // 16. Input Form

    <div className="InputForm">
      <Card>
        <FormContainer>
          <Title level={2}>Input Form</Title>
          <InputField
            type="text"
            placeholder="Enter Name"
            required
            value={inputName}
            onChange={(e) => setInputName(e?.target?.value)}
          />
          <RowDiv>
            <Title level={5}>Gender</Title>
            <RadioButton
              type="radio"
              value="Male"
              name="gender"
              checked={inputGender === "Male"}
              onChange={() => setInputGender("Male")}
            />
            <Title level={5}>Male</Title>
            <RadioButton
              type="radio"
              value="Female"
              name="gender"
              checked={inputGender === "Female"}
              onChange={() => setInputGender("Female")}
            />
            <Title level={5}>Female</Title>
          </RowDiv>
          <InputField
            type="email"
            placeholder="Enter E-Mail Id"
            required
            onChange={(e) => setInputEmail(e?.target?.value)}
            value={inputEmail}
          />
          {mailErr && <H6>Please Enter Valid Email Id</H6>}
          <RowDiv>
            <SelectField
              onChange={(e) => setInputCountryCode(e)}
              value={inputCountryCode}
            >
              {isdData &&
                isdData?.map((data, index) => (
                  <option key={index} value={ data?.flag + data?.dial_code }>
                    {data?.flag} {data?.dial_code}
                  </option>
                ))}
            </SelectField>
            <InpCellNo
              type="text"
              placeholder="Enter Cell number"
              pattern="[0-9]{10}"
              required
              value={inputCellNo}
              onChange={(e) => setInputCellNo(e?.target?.value)}
            />
          </RowDiv>
          {numErr && <H6>Please Enter Valid Cell Num</H6>}
          <RowDiv>
            <CheckBox
              type="checkbox"
              required
              checked={inputCheckBox}
              onChange={(e) => setInputCheckBox(e?.target?.checked)}
            />
            <Title level={5}>
              {" "}
              I agree to the Terms & Conditions and Privacy Policy
            </Title>
          </RowDiv>
          <Button
            type="primary"
            href="https://ant.design/index-cn"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormContainer>
      </Card>
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
                  onChange={(e) => setUpdateName(e?.target?.value)}
                />{" "}
                <br />
                <RowDiv aria-required>
                  <Title level={5}>Gender</Title>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={updateGender === "Male"}
                    onChange={() => setUpdateGender("Male")}
                  />
                  <Title level={5}>Male</Title>
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={updateGender === "Female"}
                    onChange={() => setUpdateGender("Female")}
                  />
                  <Title level={5}>Female</Title>
                </RowDiv>
                <Input
                  type="email"
                  placeholder="Enter E-Mail Id"
                  required
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e?.target?.value)}
                />
                <Input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Cell number"
                  required
                  value={updateCellNo}
                  onChange={(e) => setUpdateCellNo(e?.target?.value)}
                />
                <Button type="primary" onClick={() => handleUpdate(index)}>
                  Update
                </Button>
              </div>
            ) : (
              // 18 . To show data from the Array

              <div key={index}>
                <H2>Name: {inputValue?.inputName}</H2>
                <div>
                  <h4>Gender: {inputValue?.inputGender}</h4>
                </div>
                <h4>Email: {inputValue?.inputEmail}</h4>

                <h4>Country Code : {inputValue?.inputCountryCode}</h4>

                <h4>Cell No: {inputValue?.inputCellNo}</h4>
                <p>
                  Agreed to Terms: {inputValue?.inputCheckBox ? "Yes" : "No"}
                </p>
                <Button
                  icon={<DeleteTwoTone />}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  icon={<EditTwoTone />}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
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
    isdData: state?.isdData,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchIsdData: () => dispatch(fetchIsdData()),
//   };
// };

export default connect(mapStateToProps)(InputForm);
