import { ExpoConfig } from "@expo/config-types";
type Options = {
    disableJsi?: boolean;
    databases?: string[];
    excludeSimArch?: boolean;
};
export declare function withSDK50(options: Options): (config: ExpoConfig) => ExpoConfig;
declare const _default: (config: ExpoConfig, options: Options) => ExpoConfig;
export default _default;
