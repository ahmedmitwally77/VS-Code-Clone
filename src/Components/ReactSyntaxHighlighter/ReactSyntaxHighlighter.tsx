import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface IProps { 
  content: string | undefined
}
const ReactSyntaxHighlighter = ({content}:IProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
      {content}
    </SyntaxHighlighter>
    </div>
  );
};

export default ReactSyntaxHighlighter