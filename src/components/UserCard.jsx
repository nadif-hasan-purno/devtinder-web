import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, photoUrl, gender, bio } = user;
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm">
        <figure>
          <img src={user.photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{bio}</p>
          {age && gender && <p>{age + ", " + gender}</p>}
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>

            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
