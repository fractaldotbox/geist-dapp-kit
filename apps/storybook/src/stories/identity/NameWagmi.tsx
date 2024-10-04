
// Take in address and display 

import { AddressOrEns } from "@/hooks/use-efp-api"
import { useEffect, useMemo, useState } from "react";
import { Address, isHex } from "viem";
import { useEnsName } from "wagmi";

export const NameWagmi = ({ addressOrEns }: { addressOrEns: AddressOrEns }) => {
    const isName = !isHex(addressOrEns);

    const { data: name, isSuccess } = useEnsName({
        address: addressOrEns as Address,
        query: {
            enabled: !isName
        }
    })

    const displayedName = useMemo(() => {
        if (!isSuccess) return '';
        return name || addressOrEns;
    }, [isSuccess])

    return (
        <div>
            {displayedName}
        </div>
    )
}