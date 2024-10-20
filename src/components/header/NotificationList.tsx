import Image from "next/image";

interface NotificationListProps {
  title: string;
  description: string;
  image: string;
}

export function NotificationList({
  title,
  description,
  image,
}: NotificationListProps) {
  return (
    <div className="flex">
      <Image alt={title} height={40} src={image} width={16} />
      <div className=" flex-col">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
