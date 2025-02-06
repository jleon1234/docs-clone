"use client"

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";

import { BoldIcon, ItalicIcon, ListTodoIcon, LucideIcon, MessageSquarePlusIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from "lucide-react";


interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon
}
const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(`text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80`, isActive && "bg-neutral-200/80")}
        >
            <Icon className="size-4" />
        </button>
    )
}

export const ToolBar = () => {

    const { editor } = useEditorStore()

    console.log("[ToolBar editor]", editor)

    const sections: { label: string, icon: LucideIcon, onClick: () => void, isActive?: boolean }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run()
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run()
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print()
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false")
                }
            },
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive:editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run()
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive:editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleItalic().run()
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                isActive:editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleUnderline().run()
            },
        ],
        [
            {
                label: "Comment",
                icon: MessageSquarePlusIcon,
                onClick: () => console.log("TODO: coment"),
                isActive: false
            },
            {
                label: "List Todo",
                icon: ListTodoIcon,
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
                isActive: editor?.isActive("taskList")
            },
            {
                label: "Remove formatting",
                icon: RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
        ]
    ];

    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] flex items-center gap-x-0.5 overflow-auto" >
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Font family  */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Heading  */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Font Size  */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {sections[1].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}

            {/* Todo text color  */}
            {/* TODO: Highlight color  */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Link  */}
            {/* TODO: Image  */}
            {/* TODO: Aling  */}
            {/* TODO: Line Height  */}
            {/* TODO: List  */}
            {sections[2].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
        </div>
    );
}