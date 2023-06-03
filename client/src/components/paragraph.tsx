interface text{
title: String;
}
const Paragraph =({title}:text)=>{
  return (
    <h3 className="text-start text-[black] text-[16px] font-[400]">{title}</h3>
    )
}
export default Paragraph