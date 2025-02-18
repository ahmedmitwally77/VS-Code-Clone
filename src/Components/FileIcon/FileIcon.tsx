import { icons } from '../../Data/List';
import FileEmpty from '../../assets/FileEmpty';

interface IProps {
  name: string;
}

export default function FileIcon({ name }: IProps) {
  const extension = name.split(".").pop();  
  const matchedIcon = icons.find(icon => icon.file === extension);  

  if (matchedIcon) return <img className='w-5 h-5' src={`/icons/${matchedIcon.iconImg}.svg`} alt={name} />;
  
  return (
    <FileEmpty />
  );
  
}
