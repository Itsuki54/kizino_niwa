interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export function ArticleCard({
  title,
  description,
  imageUrl,
  date,
}: ArticleCardProps) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="article" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
