/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFileTree } from "../Interfaces";

interface IClickFile {
  fileName: string;
  FileContent: string | undefined;
}
interface IInitialState {
  opendTabs: IFileTree[];
  clickFile: IClickFile;
}

const initialState: IInitialState = {
  opendTabs: [],
  clickFile: {
    fileName: "",
    FileContent: "",
  },
};
export const FileTreeSlice = createSlice({
  name: "FileTreeSlice",
  initialState,

  reducers: {
    setOpenFiles: (state, action: PayloadAction<IFileTree>) => {
      state.clickFile.fileName = action.payload.name;
      state.clickFile.FileContent = action.payload.content;
      for (let i = 0; i < state.opendTabs.length; i++) {
        if (state.opendTabs[i].name === action.payload.name && state.opendTabs[i].type === action.payload.type && state.opendTabs[i].content === action.payload.content) {
          return;
        } 
      }
      state.opendTabs=[...state.opendTabs,action.payload];
    },
    removeTabs: (state, action: PayloadAction<IFileTree>) => {
      state.opendTabs = state.opendTabs.filter((tab) => (tab.content !== action.payload.content || tab.name !== action.payload.name) );  
      state.clickFile= {
        fileName: "",
        FileContent: "",
      };    
    },

  },
});

export const FileTreeSliceReducer = FileTreeSlice.reducer;
export const { setOpenFiles , removeTabs} = FileTreeSlice.actions;

