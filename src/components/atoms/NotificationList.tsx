import Image from "next/image";
import { Text } from "@chakra-ui/react";
interface NotificationListProps {
    title: string;
    description: string;
    imageUrl: string;
}

export function NotificationList({
    title,
    description,
    imageUrl,
}: NotificationListProps) {
    return (
        <div>
            <Image src={imageUrl} alt={title} width={16} height={40} />
            <Text color="black">{title}</Text>
            <Text color="black">{description}</Text>
        </div>
    );
}
