import { IFileTree, IIcon } from "../Interfaces";

export const fileTree: IFileTree = {
  name: "VS Code Clone",
  type: "folder",
  children: [
    {
      name: "Node_Module",
      type: "folder",
      children: [
        {
          name: ".vite",
          type: "folder",
          children: [
            {
              name: "app.css",
              type: "file",
              content: `.file-component {
  @apply flex items-center;
}              
.file-icon {
  @apply flex items-center gap-1;
}
.opened-tabs {
  @apply h-full overflow-hidden;
}
.opened-tabs::-webkit-scrollbar {
  @apply w-1;
}
.opened-tabs::-webkit-scrollbar-track {
  @apply bg-slate-400;
}
.opened-tabs::-webkit-scrollbar-thumb {
  @apply bg-slate-600;
}
              `,
            },
            {
              name: "vite.config.ts",
              type: "file",
              content: `import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";

const Preview = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector(({ tree }: RootState) => tree);

  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={fileContent} />
    </>
  );
};

export default Preview;
              `,
            },
          ],
        },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        {
          name: "style.sass",
          type: "file",
          content: `.file-component {
  display: flex;
  align-items: center;
}`
  ,
        },
      ],
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "App.tsx",
          type: "file",
          content: `interface IProps {
  src: string;
  className?: string;
}

const IconImg = ({ src, className = "w-6 h-w-6" }: IProps) => {
  return <img src={src} className={className} />;
};

export default IconImg; 
          `,
        },
        {
          type: "folder",
          name: "Components",
          children: [
            {
              name: "FileComponent",
              type: "folder",
              children: [
                {
                  name: "FileComponent.tsx",
                  type: "file",
                  content: `import { configureStore } from "@reduxjs/toolkit";
import fileTreeSlice from "./features/fileTreeSlice";

export const store = configureStore({
  reducer: {
    tree: fileTreeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
                  `,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "index.html",
      type: "file",
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
      `,
    },
  ],
};

export const icons: IIcon[] = [
  { file: "ts", iconImg: "typescript" },
  { file: "html", iconImg: "html" },
  { file: "css", iconImg: "css" },
  { file: "js", iconImg: "javascript" },
  { file: "sass", iconImg: "sass" },
  { file: "scss", iconImg: "sass" },
  { file: "jsx", iconImg: "react" },
  { file: "tsx", iconImg: "react_ts" },
];
