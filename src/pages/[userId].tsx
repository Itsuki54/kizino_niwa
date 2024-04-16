import { useRouter } from "next/router";

const UserProfilePage = () => {
  const { userId, name } = useRouter().query;
  return <div>{name}</div>;
};

export default UserProfilePage;
