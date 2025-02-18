export interface IFileTree {
  name: string;
  type: "file" | "folder";
  children?: IFileTree[];
  content?: string;
  classes?: string;
}

export interface IIcon{
  file:string,
  iconImg:string,
}
