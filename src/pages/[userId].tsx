import { useRouter } from 'next/router';

const UserProfilePage = () => {
  const { name } = useRouter().query;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default UserProfilePage;
