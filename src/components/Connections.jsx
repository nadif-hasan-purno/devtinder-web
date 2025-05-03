import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-2xl font-bold">
        No Connections Found
      </h1>
    );

  return (
    <div className="text-center justify-center my-10">
      <h1 className="text-2xl font-bold">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, bio } =
          connection;

        return (
          <div
            key={_id}
            className="flex justify-center items-center m-4 p-4 rounded-lg shadow-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="size-[50%] m-1 p-1">
              <h2 className="text-left justify-start font-bold text-lg">
                {firstName} {lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p className="text-sm text-wrap text-left justify-start size-[70%] m-1 p-1">
                {bio}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
