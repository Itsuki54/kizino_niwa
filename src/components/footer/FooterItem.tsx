export interface FooterItemProps {
  title: string;
  icon?: React.ReactNode;
  route: string;
}

export function FooterItem({ title, icon, route }: FooterItemProps) {
  return (
    <li>
      <a
        href={route}
        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
      >
        {icon}
        <span className="ml-2">{title}</span>
      </a>
    </li>
  );
}
