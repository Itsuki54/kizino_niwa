interface BodyProps {
  header: React.ReactNode;
  body: React.ReactNode;
}

export function Body({ header, body }: BodyProps) {
  return (
    <div>
      {header}
      {body}
    </div>
  );
}
