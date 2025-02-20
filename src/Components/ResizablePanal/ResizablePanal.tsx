import { ReactNode, useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[];
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

export default function ResizablePanel({
  defaultLayout = [20, 67],
  leftPanel,
  rightPanel,
}: IProps) {
  const [layout, setLayout] = useState<number[]>(defaultLayout);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (layout[0] !== 50 || layout[1] !== 50) {
          setLayout([50, 50]);
        }
      } else {
        if (layout[0] !== defaultLayout[0] || layout[1] !== defaultLayout[1]) {
          setLayout(defaultLayout);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [defaultLayout, layout]);

  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup 
      className="flex-wrap" 
      direction="horizontal" 
      autoSave="conditional" 
      onLayout={onLayout}
    >
      <Panel className="" defaultSize={layout[0]} minSize={15} collapsible>
        {leftPanel}
      </Panel>
      <PanelResizeHandle className="border-r border-[#ffffff1f]" />
      <Panel className="" defaultSize={layout[1]} minSize={30} collapsible>
        {rightPanel}
      </Panel>
    </PanelGroup>
  );
}
