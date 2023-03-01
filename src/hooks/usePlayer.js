import { useState, useCallback } from "react";

import { randomTetromino } from "../business/Tetrominos";

const buildPlayer = (previous) => {
    let tetrominos;

    if (previous) {
        tetrominos = [...previous.tetrominos];
        tetrominos.unshift(randomTetromino());
    } else {
        tetrominos = Array(5)
        .fill(0)
        .map((_) => randomTetromino());
    }

    return {
        collided: false,
        isFastDropping: false,
        position: { row: 0, column: 4 },
        tetrominos,
        tetromino: tetrominos.pop()
    };
};

export const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer());

    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev));
    }, []);

    return [player, setPlayer, resetPlayer];
};