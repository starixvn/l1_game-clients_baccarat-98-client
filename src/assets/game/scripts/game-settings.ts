import gc from "@sg/game-client-base";
import { LogStore } from "db://shared-components/game/scripts/stores/log-store";

import { GAME_ID, GAME_NAME } from "../../scripts/game-configs";
import { sharedContainer } from "../../scripts/shared-container";

export const settings = {
    id: GAME_ID,
    name: GAME_NAME,
    namespaces: [GAME_NAME, "BaccaratX"],
    durations: {
        wholeRound: 33,
        wholeShoe: 51,
        lockingBet: 3,
        placingBet: 20,
        generatingResult: 4,
        showingResult: 5,
        startRound: 3,
    },
    numberOfRoundHistory: 100,
};

export const containerOptions: gc.IContainerOptions = {
    globalContainer: sharedContainer,
    onContainerCreated: (container) => {
        container.bind(gc.GameConfigs.GameSetting).toConstantValue(settings);
        container.bind(LogStore).to(LogStore);
    },
    features: [...gc.defaultFeatures, gc.BetDetailsNew, gc.GameBaccaratX],
};
