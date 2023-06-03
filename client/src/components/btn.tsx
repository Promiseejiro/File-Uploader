import Loader from "./loader"

interface BtnProps{
  text: String;
  color: string;
  loading: boolean;
  bgColor: string;
  borderColor:string;
  disabled:boolean;
  borderRadius: string;
  onclickHandler:any;
 icon:any
}

function Btn ({text,color,loading,bgColor,borderColor, disabled,borderRadius,onclickHandler,icon}:BtnProps){
  return (
<button  className={`bg-[${bgColor}]  hover:bg-blue-700 text-[${color}] rounded-[${borderRadius}] hover:outline-0 font-[400] py-2 px-4 border-solid border-[${borderColor}] w-full flex items-center`} disabled={disabled} onClick={onclickHandler}><Loader loading={loading} />{icon} {text}</button>
)}
export default Btn