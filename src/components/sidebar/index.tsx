import { IoSettingsOutline } from 'react-icons/io5';

import { SideBarItem } from './side-bar-item';

export const Sidebar = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <aside aria-label='Sidebar' className='w-64'>
        <div className='px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2'>
            <SideBarItem
              icon={<IoSettingsOutline />}
              route='/設定'
              title='設定'
            />
          </ul>
        </div>
      </aside>
    </div>
  );
};
