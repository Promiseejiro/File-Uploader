import Header from "../components/header"
import Paragraph from "../components/paragraph"
import Btn from "../components/btn"
import Input from "../components/Input";
import { FaBeer } from 'react-icons/fa';

const Register =()=>{
  return (
    <div>
    <Header title="Join thousands of learners around the world"/>
    <Paragraph title="Master web development by making real life project.
    there are multiple part for you to choose"/>
    <Input icon={<FaBeer/>} placeholder="Email"/>
    <Btn  bgColor="blue"color="#fff"disabled={false} loading={false} borderRadius="10px" borderColor="blue" text="Start coding now"onclickHandler={()=>{}} icon={null}/>
    <div>
    <ul className="flex items-center ">
    <li className="">    <Btn  bgColor="blue"color="#fff"disabled={false} loading={false}  borderColor="blue" text=""onclickHandler={()=>{}} icon={<FaBeer/>} borderRadius="50%"/></li>
    </ul> 
    </div>
    </div>
    )
}
export default Register