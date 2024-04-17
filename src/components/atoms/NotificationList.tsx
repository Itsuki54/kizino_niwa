import Image from "next/image";
import { Text } from "@chakra-ui/react";

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
    <div>
      <Image src={image} alt={title} width={16} height={40} />
      <Text color="black">{title}</Text>
      <Text color="black">{description}</Text>
    </div>
  );
}
