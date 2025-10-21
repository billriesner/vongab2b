// VONGA Theme: single source of truth for runtime use
import tokens from "@/styles/../styles/tokens.json";

export const theme = {
  colors: {
    navy: tokens.color.brand.navy,
    aqua: tokens.color.brand.aqua,
    coral: tokens.color.brand.coral,
    white: tokens.color.brand.white,
    gray100: tokens.color.gray["100"],
    gray300: tokens.color.gray["300"],
    gray500: tokens.color.gray["500"],
    gray700: tokens.color.gray["700"],
    gray900: tokens.color.gray["900"]
  },
  typography: tokens.typography,
  space: tokens.space,
  radius: tokens.radius,
  shadow: tokens.shadow,
  z: tokens.zIndex,
  motion: {
    curve: tokens.motion.curve,
    fast: tokens.motion.fast,
    base: tokens.motion.base,
    slow: tokens.motion.slow
  },
  ctaLabel: tokens.cta.primaryLabel
};

export type VongaTheme = typeof theme;
