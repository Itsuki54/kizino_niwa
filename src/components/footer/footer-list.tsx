import {
  FooterItem,
  FooterItemProps,
} from '@/components/footer/footer-item';

type FooterListProps = {
  footerItems: FooterItemProps[];
  title: string;
};

export const FooterList = ({ footerItems, title }: FooterListProps) => {
  return (
    <div>
      <h3 className='text-sm font-semibold leading-6 text-gray-900'>{title}</h3>
      <ul className='mt-6 space-y-4' role='list'>
        {footerItems.map(footerItem => (
          <FooterItem
            icon={footerItem.icon}
            key={footerItem.title}
            route={footerItem.route}
            title={footerItem.title}
          />
        ))}
      </ul>
    </div>
  );
};
