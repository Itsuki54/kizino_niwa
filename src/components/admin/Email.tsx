import { useRouter } from "next/router";
import {
  useEffect,
  useState,
} from "react";

interface Email {
  id: string;
  subject: string;
  from: string;
  created_at: string;
}

function Emails() {
  const [emails, setEmails] = useState<Email[]>([]);

  // メールリストをAPIから取得
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await fetch("http://localhost:19926/api/v1/messages");
        const data = await res.json();
        setEmails(data.messages); // メッセージのリストをセット
      }
      catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);

  const router = useRouter();
  const viewEmail = (id: string) => {
    router.push(`/admin/email/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">メール一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emails.map(email => (
          <div key={email.id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{email.subject}</h2>
            <p className="text-sm text-gray-500">{email.from}</p>
            <p className="text-sm text-gray-500">
              {new Date(email.created_at).toLocaleString()}
            </p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => viewEmail(email.id)}
            >
              詳細を見る
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emails;
