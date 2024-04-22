interface ButtonProps {
  title:string;
  height?:string;
  width?:string;
  onClick:Function;
}

export function PrimaryButton({title,height,width,onClick}:ButtonProps){
  return (
    <button
      className="bg-primary-400 text-white rounded-md p-2"
      onClick={()=>onClick()}
      style={{height:height,width:width}}
      title={title}
    >
      {title}
    </button>
  )
}