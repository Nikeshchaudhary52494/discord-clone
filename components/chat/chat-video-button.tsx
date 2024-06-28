"use client"

import qs from "query-string";
import ActionTooltip from "../action-tooltip";
import { Video, VideoOff } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export const ChatVideoButton = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const isVideo = searchParams?.get("video") === "true";

    const onClick = () => {
        const url = qs.stringifyUrl({
            url: pathname || "",
            query: {
                video: isVideo ? undefined : true,

            }
        }, { skipNull: true });

        router.push(url);
    }

    const Icon = isVideo ? VideoOff : Video;
    const tooltipLabel = isVideo ? "End video call" : "Start video call";

    return (
        <ActionTooltip side="bottom" label={tooltipLabel}>
            <Button onClick={onClick} variant="ghost" className="hover:opacity-75 group hover:text-white transition mr-4">
                <Icon className="h-6 w-6 text-zinc-500 group-hover:text-black dark:group-hover:text-white" />
            </Button>
        </ActionTooltip>
    )
}