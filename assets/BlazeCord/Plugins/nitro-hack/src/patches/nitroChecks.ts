import { findByProps } from "@relapse/metro";
import { instead } from "@relapse/patcher";

const nitroInfo = findByProps("canUseEmojisEverywhere");

export default [
	instead("canUseEmojisEverywhere", nitroInfo, () => true),
	instead("canUseAnimatedEmojis", nitroInfo, () => true),
];
