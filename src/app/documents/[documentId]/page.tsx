import { Editor } from "./editor";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>
}
export default async function DocumentId({ params }: DocumentIdPageProps) {

    const {documentId} = await params;

    return (
        <div className="min-h-screen bg-[#F9FBFD]" >
            <Editor />
        </div>
    );
}