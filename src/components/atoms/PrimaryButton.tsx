interface ButtonProps {
  title:string;
  height?:string;
  width?:string;
  onClick:Function;
}

export function PrimaryButton({title,height,width,onClick}:ButtonProps){
  return (
    <button
      className="rounded-md bg-blue-500 p-2 text-white"
      onClick={()=>onClick()}
      style={{height:height,width:width}}
      title={title}
    />
  )
}