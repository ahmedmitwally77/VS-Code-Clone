import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { memo, useState } from "react";
import { IFileTree } from "../../Interfaces";
import FileIcon from "../FileIcon/FileIcon";
import FolderIcon from "../FolderIcon/FolderIcon";
import { useAppDispatch } from "../../Store/StoreTypes";
import { setOpenFiles } from "../../Slices/FileTree.slice";

// Recursive component
interface IProps {
  fileTree: IFileTree;
}

function FileComponent({ fileTree }: IProps) {
  const [isOpenArrow, setIsOpenArrow] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  function toggleArrow() {
    setIsOpenArrow((pre) => !pre);
  }

  return (
    <div className="file-component cursor-pointer py-1">
      <div className="flex items-center">
        {fileTree.type === "folder" ? (
          isOpenArrow ? (
            <IoIosArrowDown onClick={toggleArrow} />
          ) : (
            <IoIosArrowForward onClick={toggleArrow} />
          )
        ) : (
          <div className="ml-4"></div>
        )}
        <span className="flex items-center gap-1 " onClick={toggleArrow}>
          <span
            className={fileTree.classes}
            style={{
              width: "25px",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* !isOpenArrow ? <FaFolderOpen />  : <FaFolderClosed />  */}
            {fileTree.type === "folder" ? (
              <FolderIcon isOpen={isOpenArrow} name={fileTree.name} />
            ) : (
              <div
                className="w-fit h-fit"
                onClick={() => dispatch(setOpenFiles(fileTree))}
              >
                
                <FileIcon name={fileTree.name}  />
              </div>
            )}
          </span>
          {fileTree.type === "file" ? <h4 onClick={() => dispatch(setOpenFiles(fileTree))} className="text-md">{fileTree.name}</h4>: <h4 className="text-md">{fileTree.name}</h4>}
        </span>
      </div>

      {fileTree.children &&
        fileTree.children.map((file, index) => {
          return (
            <div key={index} className={`ml-2`} hidden={isOpenArrow}>
              <FileComponent key={index} fileTree={file} />
            </div>
          );
        })}
    </div>
  );
}

export default memo(FileComponent);
