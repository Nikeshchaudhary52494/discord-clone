import { FC } from 'react';

import { Hash } from 'lucide-react';
import { SocketIndicator } from '../socket-indicator';
import MobileToggle from '../mobile-toggle';
import UserAvatar from '../user-avatar';
import { ChatVideoButton } from './chat-video-button';

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: 'channel' | 'conversation';
    imageUrl?: string;
}

const ChatHeader: FC<ChatHeaderProps> = ({
    name,
    serverId,
    type,
    imageUrl,
}) => {
    return (
        <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
            <MobileToggle serverId={serverId} />
            {type === 'channel' && (
                <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
            )}
            {
                type == "conversation" && (
                    <UserAvatar
                        src={imageUrl}
                        classname='h-8 w-8 md:h-8 md:w-8 m-2'
                    />
                )
            }
            <p className="font-semibold text-md text-black dark:text-white">{name}</p>
            <div className="ml-auto flex items-center">
                {type === "conversation" && (
                    <ChatVideoButton />
                )}
                <SocketIndicator />
            </div>
        </div>
    );
};

export default ChatHeader;