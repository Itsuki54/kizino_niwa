import { useRouter } from 'next/router';


const UserProfilePage = () => {
  const { name } = useRouter().query;
  return (
    <div>
      {name}
    </div>
  );
};

export default UserProfilePage;
