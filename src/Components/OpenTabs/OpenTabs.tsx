import { useAppDispatch, useAppSelector } from "../../Store/StoreTypes";
import { removeTabs, setOpenFiles } from "../../Slices/FileTree.slice";
import FileIcon from "../FileIcon/FileIcon";
import { MdOutlineClose } from "react-icons/md";
import ReactSyntaxHighlighter from "../ReactSyntaxHighlighter/ReactSyntaxHighlighter";

export default function OpenTabs() {
  const { opendTabs, clickFile } = useAppSelector(
    (state) => state.FileTreeSlice
  );
  const dispatch = useAppDispatch();
  return (
    <div className="opened-tabs h-full overflow-hidden">
      <ul className="flex flex-wrap gap-x-12 gap-y-4">
        {opendTabs.map((tab,index) => (
          <li key={index } className="sm:w-1/3 md:w-1/4 lg:w-fit">
            <span
              className={`flex gap-2 items-center justify-between cursor-pointer pt-1 border-t-2 border-transparent ${
                clickFile.fileName === tab.name && clickFile.FileContent == tab.content ? "!border-purple-400" : ""}
                ${clickFile.fileName === "" && clickFile.FileContent === "" && index === opendTabs.length - 1 ? "!border-purple-400" : ""}
                `}
                
            >
              <span className="flex items-center gap-1" onClick={() => dispatch(setOpenFiles(tab))}>
              <FileIcon name={tab.name} /> {tab.name}
              </span>
              <span className="p-1 hover:bg-slate-600 rounded-xl transition-all duration-300" onClick={() => dispatch(removeTabs(tab))}>
                <MdOutlineClose />
              </span>
            </span>
            
          </li>
        ))}
      </ul>

      <p className="mt-4 p-4  bg-slate-700 h-full w-full rounded-md">
        {clickFile && clickFile.FileContent ? <ReactSyntaxHighlighter content={clickFile.FileContent }/> :<ReactSyntaxHighlighter content={opendTabs[opendTabs.length - 1].content }/>}
      </p>
    </div>
  );
}
