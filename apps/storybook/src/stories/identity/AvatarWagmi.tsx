import {
    Avatar as AvatarPrimitive,
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton";
import { useEnsAvatar } from "wagmi";
import { AvatarDisplayed } from "./Avatar";
import { normalize } from "viem/ens";


export const AvatarWagmi = ({ ens }: {
    ens: string
}) => {

    const { data: ensAvatar, isLoading } = useEnsAvatar({
        name: normalize(ens)
    });

    if (isLoading || !ensAvatar) {
        return <AvatarPrimitive><Skeleton className="w-full rounded-full bg-gray-200" /></AvatarPrimitive>
    }
    return <AvatarDisplayed addressOrEns={ens} avatarSrc={ensAvatar} />
}
