import FileComponent from "./Components/FileComponent/FileComponent";
import OpenTabs from "./Components/OpenTabs/OpenTabs";
import { fileTree } from "./Data/List";
import { useAppSelector } from "./Store/StoreTypes";

function App() {
  const { opendTabs } = useAppSelector((state) => state.FileTreeSlice);
  return (
    <>
      <div className="app flex flex-wrap text-white min-h-screen ">
        <div className="aside-navs w-full lg:w-1/6 md:w-1/4 sm:w-1/3 sm:h-screen  p-4 bg-gray-800">
          <FileComponent fileTree={fileTree} />
        </div>
        {opendTabs?.length > 0 ? (
          <div className="opened-tabs w-full min-h-[400px] sm:h-auto lg:w-5/6 md:w-3/4 sm:w-2/3  p-4 sm:pb-0 bg-slate-900">
            <OpenTabs />
          </div>
        ) : <div className="opened-tabs w-full lg:w-5/6 md:w-3/4 sm:w-2/3 p-4 pb-0  bg-slate-900 flex items-center justify-center">
          <img src="https://carleton.ca/scs/wp-content/uploads/vscode-1-200x200.png" alt="VS Code Image" />
          </div>

      }
      </div>
    </>
  );
}

export default App;
