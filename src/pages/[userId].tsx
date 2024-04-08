import { useRouter } from "next/router";

const UserProfilePage = () => {
    const { userId } = useRouter().query;
    return <div>{userId}</div>;
};

export default UserProfilePage;
