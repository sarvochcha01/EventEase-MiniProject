import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { VscUnverified } from "react-icons/vsc";
import { VscVerified } from "react-icons/vsc";

const Profile = () => {
  const profile = useLoaderData();

  const auth = getAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = () => {
    const user = auth.currentUser;
    user
      .delete()
      .then(() => {
        console.log("User deleted");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-screen-2xl mt-16 flex relative">
      <div className="w-36">
        <img
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt=""
          className="w-32"
        />
      </div>
      <div className="">
        <div>
          <h1 className="font-bold text-2xl">{profile.displayName}</h1>
          <div className="flex items-center">
            <span>{profile.email}</span>
            {profile.emailVerified ? (
              <VscVerified size={20} />
            ) : (
              <VscUnverified size={20} />
            )}
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col right-0">
        <button
          onClick={logOut}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Log Out
        </button>

        <button className="text-red-500 mt-4" onClick={deleteUser}>
          Delete Account
        </button>
      </div>
    </div>
    // <div>
    //   <div>{`${profile.email} is ${
    //     profile.emailVerified ? "verified" : "not verified"
    //   }`}</div>
    //   <button onClick={logOut}>Log Out</button>
    // </div>
  );
};

export default Profile;
