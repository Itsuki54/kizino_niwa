import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  getSession,
  useSession,
} from 'next-auth/react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Layout } from '@/layout/home-layout';
import { db } from '@/lib/prisma';

type User = {
  id: string;
  name: string;
  email: string;
  admin: boolean;
};

type DBStats = {
  totalUsers: number;
  totalArticles: number;
  totalNotifications: number;
  totalLikes: number;
  totalStocks: number;
  totalLinks: number;
};

type AdminDashboardProps = {
  initialUsers: User[];
  initialDbStats: DBStats;
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  initialUsers,
  initialDbStats,
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [dbStats, setDbStats] = useState<DBStats>(initialDbStats);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const header = <h1 className='text-2xl font-bold p-4'>管理ダッシュボード</h1>;

  const leftBar = (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>ユーザー一覧</h2>
      <ul>
        {users.map(user => (
          <li className='mb-2' key={user.id}>
            <Button onClick={() => handleUserClick(user)} variant='ghost'>
              {user.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );

  const rightBar = (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>DB統計</h2>
      <ul>
        <li>総ユーザー数: {dbStats.totalUsers}</li>
        <li>総記事数: {dbStats.totalArticles}</li>
        <li>総通知数: {dbStats.totalNotifications}</li>
        <li>総いいね数: {dbStats.totalLikes}</li>
        <li>総ストック数: {dbStats.totalStocks}</li>
        <li>総リンク数: {dbStats.totalLinks}</li>
      </ul>
    </div>
  );

  const main = (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>ユーザー詳細</h2>
      {selectedUser ? (
        <div>
          <p>名前: {selectedUser.name}</p>
          <p>メール: {selectedUser.email}</p>
          <p>管理者: {selectedUser.admin ? 'はい' : 'いいえ'}</p>
        </div>
      ) : <p>ユーザーを選択してください</p>}
    </div>
  );

  return <Layout header={header} leftBar={leftBar} main={main} rightBar={rightBar} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  const users = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      admin: true,
    },
  });

  const [
    totalUsers,
    totalArticles,
    totalNotifications,
    totalLikes,
    totalStocks,
    totalLinks,
  ] = await db.$transaction([
    db.user.count(),
    db.article.count(),
    db.notification.count(),
    db.like.count(),
    db.stock.count(),
    db.link.count(),
  ]);

  const dbStats = {
    totalUsers,
    totalArticles,
    totalNotifications,
    totalLikes,
    totalStocks,
    totalLinks,
  };

  return {
    props: {
      initialUsers: users,
      initialDbStats: dbStats,
    },
  };
};

export default AdminDashboard;
