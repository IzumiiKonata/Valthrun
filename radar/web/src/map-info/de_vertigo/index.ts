import { LoadedMap } from "..";
import kImageRadar from "./radar.png";
import kImageBuyZones from "./overlay_buyzones.png";

export default {
    mapName: "de_vertigo",
    displayName: "Vertigo",

    metaInfo: {
        "resolution": 4.96,

        "offset": {
            "x": 3890,
            "y": 3800
        },

        "floors": [
            {
                "offset": {
                    "x": 0.2,
                    "y": -42.6
                },

                "zRange": {
                    "min": 11485,
                    "max": 11680
                }
            }
        ]
    },

    overlayBuyzones: kImageRadar,
    overlayRadar: kImageBuyZones,
} satisfies LoadedMap;