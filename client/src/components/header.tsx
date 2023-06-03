interface text{
title: String;
}
const Header =({title}:text)=>{
  return (
    <h3 className="text-start text-[black] text-[22px] font-[600]">{title}</h3>
    )
}
export default Header