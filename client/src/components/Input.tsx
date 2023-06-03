interface InputProp{
    placeholder: string;
   icon:any;
  }

const Input=({placeholder,icon}:InputProp)=>{
  
  return (
    <div className="border-solid border-[2px] border-[gray]  flex items-center rounded-[10px] overflow-hidden pl-2">
 {icon }
    <input placeholder={placeholder} className="w-full  p-2 ml-1 bg-[transparent]"/>
    </div>
    )
}
export default Input