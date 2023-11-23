import { useContext } from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import GithubContext from "../context/github/GithubContext";

function Home() {
  const { users, loading } = useContext(GithubContext);

  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
