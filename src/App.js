import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import UserInventory from "./components/UserInventory/userInventory";
import Action from "./components/Action/action";
import "./App.css";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [gender, setGender] = useState("");
  const [food, setFood] = useState("PIZZA");
  const [cardToEdit, setCardToEdit] = useState(false);
  const [id, setId] = useState("");
  const [showView, setShowView] = useState(true);
  const [pagination, setPagination] = useState(
    Array.from({ length: Math.ceil(usersData.length / 6) }, (_, i) => i + 1)
  );
  const [currentActiveTab, setCurrentActiveTab] = useState(1);
  const [currentUsersData, setCurrentUsersData] = useState(
    usersData.slice(0, 6)
  );

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleHobbies = (e) => {
    setHobbies(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.id);
  };

  const handleFood = (e) => {
    setFood(e.target.value);
  };

  const handleSubmit = () => {
    setOpenModal(!openModal);
    if (cardToEdit) {
      for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id === id) {
          usersData[i].name = name;
          usersData[i].age = age;
          usersData[i].birth = date;
          usersData[i].gender = gender;
          usersData[i].food = food;
          usersData[i].hobby = hobbies;
        }
      }
    } else {
      usersData.push({
        id: Date.now(),
        name,
        age,
        birth: date,
        gender,
        food,
        hobby: hobbies,
      });
    }
    setUsersData([...usersData]);
    setPagination(
      Array.from({ length: Math.ceil(usersData.length / 6) }, (_, i) => i + 1)
    );
    setName("");
    setAge("");
    setDate("");
    setHobbies("");
    setCurrentUsersData(
      usersData.slice(
        (currentActiveTab - 1) * 6,
        (currentActiveTab - 1) * 6 + 6
      )
    );
  };

  const handleDeleteCard = (id) => {
    let userDatas = usersData.filter((userData) => userData.id !== id);
    setUsersData([...userDatas]);
  };

  const handleViewCard = (userData) => {
    setShowView(false);
    setOpenModal(!openModal);
    setName(userData.name);
    setAge(userData.age);
    setDate(userData.birth);
    setGender(userData.gender);
    setFood(userData.food);
    setHobbies(userData.hobby);
  };

  const handleEditCard = (id, userData) => {
    handleViewCard(userData);
    setShowView(true);
    setCardToEdit(true);
    setId(id);
  };

  function checkDisabled() {
    if (
      name === "" ||
      age === "" ||
      date === "" ||
      hobbies === "" ||
      gender === ""
    ) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#686868",
          color: "white",
          padding: "15px",
          fontWeight: "bolder",
        }}
      >
        <div>User's Inventory</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px",
          fontWeight: "bolder",
        }}
      >
        <div>List of Users</div>
        <Action
          type="Add Users"
          handleClick={() => {
            setOpenModal(!openModal);
            setCardToEdit(false);
            setShowView(true);
          }}
        />
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(!openModal);
          }}
        >
          <div className="modalBox">
            <div className="modalHeading">ADD USER</div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "12px",
                }}
              >
                <div style={{ width: "50%" }}>
                  <label>NAME</label>
                  <br />
                  <input
                    type="text"
                    onChange={handleName}
                    value={name}
                    style={{ width: "50%" }}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label>AGE</label>
                  <br />
                  <input
                    type="number"
                    onChange={handleAge}
                    value={age}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "12px",
                }}
              >
                <div style={{ width: "50%" }}>
                  <label>DOB</label>
                  <br />
                  <input
                    type="date"
                    onChange={handleDate}
                    value={date}
                    style={{ width: "50%" }}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label>GENDER</label>
                  <br />
                  <input
                    type="radio"
                    name="gender"
                    id="MALE"
                    checked={gender === "MALE"}
                    onClick={handleGender}
                  />
                  <span>MALE</span>
                  <input
                    type="radio"
                    name="gender"
                    id="FEMALE"
                    checked={gender === "FEMALE"}
                    onClick={handleGender}
                  />
                  <span>FEMALE</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "12px",
                }}
              >
                <div style={{ width: "50%" }}>
                  <label>FAVOURITE FOOD</label>
                  <br />
                  <select
                    style={{ width: "50%" }}
                    onChange={handleFood}
                    value={food}
                  >
                    <option value="PIZZA">PIZZA</option>
                    <option value="BURGER">BURGER</option>
                    <option value="PASTA">PASTA</option>
                  </select>
                </div>
                <div style={{ width: "50%" }}>
                  <label>HOBBIES</label>
                  <br />
                  <textarea
                    type="text"
                    onChange={handleHobbies}
                    value={hobbies}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            </div>
            {showView ? (
              <>
                {" "}
                <div style={{ float: "right" }}>
                  <Action
                    type="CANCEL"
                    className="deleteBtn"
                    handleClick={() => setOpenModal(!openModal)}
                  />
                  <Action
                    type={cardToEdit ? "UPDATE" : "SUBMIT"}
                    handleClick={handleSubmit}
                    disabled={checkDisabled()}
                  />
                </div>
              </>
            ) : (
              <>
                <div style={{ float: "right" }}>
                  <Action
                    type="CLOSE"
                    handleClick={() => setOpenModal(!openModal)}
                  />
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
      <UserInventory
        usersData={currentUsersData}
        onDeleteCard={handleDeleteCard}
        onViewCard={handleViewCard}
        onEditCard={handleEditCard}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {currentUsersData.length >= 1 && (
          <>
            <Action
              type="Prev"
              handleClick={() => {
                setCurrentActiveTab(currentActiveTab - 1);
                setCurrentUsersData(
                  usersData.slice(
                    (currentActiveTab - 2) * 6,
                    (currentActiveTab - 2) * 6 + 6
                  )
                );
              }}
              disabled={currentActiveTab === 1}
            />
            <div style={{ display: "flex" }}>
              {pagination &&
                pagination.map((p) => {
                  return (
                    <div
                      className={
                        currentActiveTab === p
                          ? "paginationNumberActive"
                          : "paginationNumber"
                      }
                    >
                      {p}
                    </div>
                  );
                })}
            </div>
            <Action
              type="Next"
              handleClick={() => {
                setCurrentActiveTab(currentActiveTab + 1);
                setCurrentUsersData(
                  usersData.slice(
                    currentActiveTab * 6,
                    currentActiveTab * 6 + 6
                  )
                );
              }}
              disabled={currentActiveTab >= pagination.length}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
