import { useRouter } from "next/router";
import {
  useEffect,
  useState,
} from "react";

type EmailDetail = {
  id: string;
  subject: string;
  from: string;
  to: string;
  created_at: string;
  body: string;
};

const EmailDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [email, setEmail] = useState<EmailDetail | null>(null);

  useEffect(() => {
    if (id) {
      const fetchEmail = async () => {
        try {
          const res = await fetch(
            `http://localhost:19926/api/v1/messages/${id}`,
          );
          const data = await res.json();
          setEmail(data);
        }
        catch (error) {
        }
      };

      fetchEmail();
    }
  }, [id]);

  if (!email) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{email.subject}</h1>
      <p className="text-lg">From: {email.from}</p>
      <p className="text-lg">To: {email.to}</p>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(email.created_at).toLocaleString()}
      </p>
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">本文:</h2>
        <p>{email.body}</p>
      </div>
    </div>
  );
};

export default EmailDetailPage;
