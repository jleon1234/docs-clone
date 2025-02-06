import { Editor } from "./editor";
import { ToolBar } from "./toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>
}
export default async function DocumentId({ params }: DocumentIdPageProps) {

    const {documentId} = await params;

    return (
        <div className="min-h-screen bg-[#F9FBFD]" >
            <ToolBar />
            <Editor />
        </div>
    );
}