import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [bio, setBio] = useState(user.bio);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          bio,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="flex justify-center my-10">
            <div className="card bg-base-200 w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title justify-center">Edit Profile</h2>
                <div className="m-2">
                  <fieldset className="fieldset ">
                    <legend className="fieldset-legend">First Name</legend>
                    <input
                      type="text"
                      value={firstName}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Last Name</legend>
                    <input
                      type="text"
                      value={lastName}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input
                      type="text"
                      value={photoUrl}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setPhotoUrl(e.target.value);
                      }}
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Age</legend>
                    <input
                      type="text"
                      value={age}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Gender</legend>
                    <input
                      type="text"
                      value={gender}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Bio</legend>
                    <textarea
                      type="text"
                      value={bio}
                      className="text-area input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                    />
                  </fieldset>
                </div>
                <p className="text-red-500">{error}</p>
                <div className="card-actions justify-center m-2">
                  <button className="btn btn-primary" onClick={saveProfile}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserCard user={{ firstName, lastName, photoUrl, age, gender, bio }} />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
