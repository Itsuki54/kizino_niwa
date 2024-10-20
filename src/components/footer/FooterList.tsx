import {
  FooterItem,
  FooterItemProps,
} from "@/components/footer/FooterItem";

interface FooterListProps {
  footerItems: FooterItemProps[];
  title: string;
}

export function FooterList({ footerItems, title }: FooterListProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">{title}</h3>
      <ul role="list" className="mt-6 space-y-4">
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
}
