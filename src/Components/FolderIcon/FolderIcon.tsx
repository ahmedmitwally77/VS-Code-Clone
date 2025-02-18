import { FaFolderOpen } from "react-icons/fa6";
import { FaFolderClosed } from "react-icons/fa6";

interface IProps {
  name: string;
  isOpen: boolean
}

export default function FolderIcon({ name ,isOpen }: IProps) {

  if(name == "Node_Module" && !isOpen)
    return <img src='/icons/folder-node-open.svg'/>
  if(name == "Node_Module" && isOpen)
    return <img src='/icons/folder-node.svg'/>

  if(name == "public" && !isOpen)
    return <img src='/icons/folder-public-open.svg'/>
  if(name == "public" && isOpen)
    return <img src='/icons/folder-public.svg'/>

  if(name == "src" && !isOpen)
    return <img src='/icons/folder-src-open.svg'/>
  if(name == "src" && isOpen)
    return <img src='/icons/folder-src.svg'/>

  if(name == "Components" && !isOpen)
    return <img src='/icons/folder-components-open.svg'/>
  if(name == "Components" && isOpen)
    return <img src='/icons/folder-components.svg'/>

  if(isOpen)
    return <FaFolderClosed className="text-yellow-500"/>
  if(!isOpen)
    return <FaFolderOpen className="text-yellow-500"/>
  
}
