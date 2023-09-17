import React from "react";
import Card from "../Card/card";

const UserInventory = ({ usersData, onDeleteCard, onViewCard, onEditCard }) => {
  if (usersData.length > 0) {
    return (
      <div className="cards">
        {usersData &&
          usersData.map((userData) => {
            return (
              <Card
                userData={userData}
                onDeleteCard={onDeleteCard}
                onViewCard={onViewCard}
                onEditCard={onEditCard}
              />
            );
          })}
      </div>
    );
  } else {
    return (
      <>
        <div style={{ textAlign: "center", fontWeight: "bolder" }}>
          No User Data Found
        </div>
      </>
    );
  }
};

export default UserInventory;
