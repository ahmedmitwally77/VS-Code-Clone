import FileComponent from "./Components/FileComponent/FileComponent";
import OpenTabs from "./Components/OpenTabs/OpenTabs";
import ResizablePanal from "./Components/ResizablePanal/ResizablePanal";
import { fileTree } from "./Data/List";
import { useAppSelector } from "./Store/StoreTypes";

function App() {
  const { opendTabs } = useAppSelector((state) => state.FileTreeSlice);
  return (
    <>
      <div className="app text-white min-h-screen overflow-hidden">
        <ResizablePanal
          leftPanel={
            <div className="aside-navs h-screen w-full  p-4 bg-gray-800">
              <FileComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={
            <div className="content-side w-full min-h-screen bg-slate-900">
              {opendTabs?.length > 0 ? (
                <div className="opened-tabs p-4 min-h-[400px] sm:h-auto  sm:pb-0">
                  <OpenTabs />
                </div>
              ) : (
                <div className="opened-tabs p-4  pb-0 flex h-screen items-center justify-center">
                  <img
                    src="https://carleton.ca/scs/wp-content/uploads/vscode-1-200x200.png"
                    alt="VS Code Image"
                  />
                </div>
              )}
            </div>
          }
        />
      </div>
    </>
  );
}

export default App;
