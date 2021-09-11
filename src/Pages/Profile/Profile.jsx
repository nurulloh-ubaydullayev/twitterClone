import "./Profile.scss";
import useToken from "../../Hooks/useToken";

function Profile() {
  const [setToken] = useToken(true);
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <button
        title="Double click to log out"
        onDoubleClick={() => setToken(false)}
      >
        Log out
      </button>
    </div>
  );
}

export default Profile;
