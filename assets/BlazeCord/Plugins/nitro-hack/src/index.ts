import { storage } from "@relapse/plugin";
import { findByProps, findByStoreName } from "@relapse/metro";
import { instead, after } from "@relapse/patcher";

// ===== ICONS =====
const icons = findByProps("getOfficialAlternateIcons");
const iconsIds = findByProps("FreemiumAppIconIds");
const FreemiumAppIcons = iconsIds.FreemiumAppIconIds;
let alternateIcons = icons.getOfficialAlternateIcons();
let mainIcons = icons.getIcons();

const iconPatches = [];

// ===== EMOJIS =====
import nitroChecks from "./patches/nitroChecks";
import sendMessage from "./patches/sendMessage";

// Default emoji settings
storage.emojiSize ??= 48;
storage.hyperlink ??= true;
storage.haveNitro ??= findByStoreName("UserStore").getCurrentUser()?.premiumType !== null;
storage.forceMoji ??= false;

// Migrate legacy value if needed
if (typeof storage.emojiSize === "string")
    storage.emojiSize = parseInt(storage.emojiSize);

// Apply emoji patches
const emojiPatches = [
    ...nitroChecks,
    ...sendMessage,
];

// ===== STICKERS =====
import nitroPatch from "./patches/nitro";
import messagePatch from "./patches/message";
import Settings from "./ui/Settings";

let stickerPatches;

// ===== COMBINED HOOKS =====
export const onLoad = () => {
    // ICON PATCHES
    alternateIcons.forEach(x => (x.isPremium = false));
    mainIcons.forEach(x => (x.isPremium = false));
    iconPatches.push(instead("getIcons", icons, () => mainIcons));
    iconPatches.push(instead("getOfficialAlternateIcons", icons, () => alternateIcons));
    iconPatches.push(after("getIconById", icons, (_, ret) => {
        ret.isPremium = false;
    }));
    iconsIds.FreemiumAppIconIds = iconsIds.MasterAppIconIds;
    // STICKER PATCHES
    stickerPatches = [nitroPatch(), messagePatch()];
};

export const onUnload = () => {
    // UNPATCH ICONS
    iconsIds.FreemiumAppIconIds = FreemiumAppIcons;
    iconPatches.forEach(unpatch => unpatch());

    // UNPATCH EMOJIS
    emojiPatches.forEach(unpatch => unpatch?.());

    // UNPATCH STICKERS
    stickerPatches?.forEach(unpatch => unpatch?.());
};

export { Settings as settings };