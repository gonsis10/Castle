"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

export const CastleImage = () => {
    const { user } = useAuth();
    let level = user["level"]

    const displayCastle = () => {
        if (level < 3) {
            return <Image src="src\app\shop\tent.png" alt="tent" />
        } 

        if ((level >= 3) && (level < 5)) {
            return <Image src="src\app\shop\shack.png" alt="shack" />
        }

        if (level >= 5) {
            return <Image src="src\app\shop\castle.png" alt="castle" />
        }
    }

    return (
        <div>
            {displayCastle}
        </div>
    );
}