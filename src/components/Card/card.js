import React from "react";
import Action from "../Action/action";

const Card = ({ userData, onDeleteCard, onViewCard, onEditCard }) => {
  function getRightColorStyle(age) {
    if (age >= 0 && age <= 25) {
      return "cirlePurple";
    } else if (age > 25 && age <= 50) {
      return "cirleGreen";
    } else {
      return "cirleOrange";
    }
  }
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px",
            alignItems: "center",
          }}
        >
          <div>{userData.name}</div>
          <div className={getRightColorStyle(userData.age)}></div>
        </div>
        <hr />
        <div
          style={{
            padding: "8px",
          }}
        >
          <div>
            AGE: <strong>{userData.age}</strong>
          </div>
          <div>
            DOB: <strong>{userData.birth}</strong>
          </div>
          <div>
            GENDER: <strong>{userData.gender}</strong>
          </div>
          <div>
            FOOD: <strong>{userData.food}</strong>
          </div>
          <div>
            HOBBIES: <strong>{userData.hobby}</strong>
          </div>
        </div>
        <hr />
        <div>
          <div
            style={{
              padding: "6px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Action
              type="DELETE"
              className="deleteBtn"
              handleClick={() => onDeleteCard(userData.id)}
            />
            <Action type="VIEW" handleClick={() => onViewCard(userData)} />
            <Action
              type="EDIT"
              handleClick={() => onEditCard(userData.id, userData)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
