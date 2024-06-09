import { FC } from 'react';
import { initialProfile } from '@/lib/initial-profile';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

interface setupPageProps { }

const SetupPage: FC<setupPageProps> = async ({ }) => {
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });

    if (server) {
        return redirect(`/servers/${server.id}`);
    }

    return <div>Create a server</div>
};

export default SetupPage;