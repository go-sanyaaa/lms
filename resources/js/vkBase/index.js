"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": "vkBase",
    "themeNameBase": "vkBase",
    "gradientBlack": "rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.014) 13%, rgba(0, 0, 0, 0.06) 27%, rgba(0, 0, 0, 0.316) 68%, rgba(0, 0, 0, 0.38) 84%, rgba(0, 0, 0, 0.4) 100%",
    "gradientWhite": "rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.036) 13%, rgba(255, 255, 255, 0.15) 27%, rgba(255, 255, 255, 0.79) 68%, rgba(255, 255, 255, 0.95) 84%, rgba(255, 255, 255, 1) 100%",
    "gradientTint": "rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0.036) 13%, rgba(249, 249, 249, 0.15) 27%, rgba(249, 249, 249, 0.79) 68%, rgba(249, 249, 249, 0.95) 84%, rgba(249, 249, 249, 1) 100%",
    "elevation1": "0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)",
    "elevation1InvertY": "0px 0px 2px rgba(0, 0, 0, 0.03), 0px -2px 2px rgba(0, 0, 0, 0.06)",
    "elevation2": "0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06)",
    "elevation3": "0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)",
    "elevation4": "0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)",
    "fontFamilyFallbacks": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
    "fontFamilyAccent": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
    "fontFamilyBase": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
    "fontWeightAccent1": 600,
    "fontWeightAccent2": 500,
    "fontWeightAccent3": 400,
    "fontWeightBase1": 600,
    "fontWeightBase2": 500,
    "fontWeightBase3": 400,
    "fontTitle1": {
        "regular": {
            "fontSize": 24,
            "lineHeight": 28,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 600
        }
    },
    "fontTitle2": {
        "regular": {
            "fontSize": 20,
            "lineHeight": 24,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 600
        }
    },
    "fontTitle3": {
        "regular": {
            "fontSize": 17,
            "lineHeight": 22,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 600
        }
    },
    "fontHeadline1": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20
        }
    },
    "fontHeadline2": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 14,
            "lineHeight": 20
        }
    },
    "fontText": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20
        }
    },
    "fontParagraph": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        }
    },
    "fontSubhead": {
        "regular": {
            "fontSize": 14,
            "lineHeight": 18,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        },
        "compact": {
            "fontSize": 13,
            "lineHeight": 16
        }
    },
    "fontFootnote": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 16,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        }
    },
    "fontFootnoteCaps": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 16,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase"
        }
    },
    "fontCaption1": {
        "regular": {
            "fontSize": 12,
            "lineHeight": 14,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        }
    },
    "fontCaption1Caps": {
        "regular": {
            "fontSize": 12,
            "lineHeight": 14,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 600,
            "textTransform": "uppercase"
        }
    },
    "fontCaption2": {
        "regular": {
            "fontSize": 11,
            "lineHeight": 14,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        }
    },
    "fontCaption2Caps": {
        "regular": {
            "fontSize": 11,
            "lineHeight": 14,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 600,
            "textTransform": "uppercase"
        }
    },
    "fontCaption3": {
        "regular": {
            "fontSize": 9,
            "lineHeight": 12,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 400
        }
    },
    "fontCaption3Caps": {
        "regular": {
            "fontSize": 9,
            "lineHeight": 12,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 600,
            "textTransform": "uppercase"
        }
    },
    "sizeSelectIconPadding": {
        "regular": 6,
        "compact": 7
    },
    "sizePopupBasePadding": {
        "regular": 32,
        "compact": 20
    },
    "sizePopupHeaderPadding": {
        "regular": 24,
        "compact": 16
    },
    "sizeLabelHorizontalMargin": {
        "regular": 16
    },
    "sizeBorderRadius": {
        "regular": 8
    },
    "sizeCheckBorderRadius": {
        "regular": 4
    },
    "sizeBorderRadiusPaper": {
        "regular": 12
    },
    "sizeBorderRadiusPromo": {
        "regular": 20
    },
    "sizeFieldHeight": {
        "regular": 44,
        "compact": 36
    },
    "sizeSearchHeight": {
        "regular": 36,
        "compact": 32
    },
    "sizeButtonLargeHeight": {
        "regular": 44,
        "compact": 36
    },
    "sizeButtonMediumHeight": {
        "regular": 36,
        "compact": 32
    },
    "sizeButtonSmallHeight": {
        "regular": 30,
        "compact": 28
    },
    "sizeCheckbox": {
        "regular": 16
    },
    "sizeArrow": {
        "regular": 8
    },
    "sizeArrowPromo": {
        "regular": 40
    },
    "sizePopupSmall": {
        "regular": 420
    },
    "sizePopupMedium": {
        "regular": 680
    },
    "sizePopupLarge": {
        "regular": 880
    },
    "sizeFieldHorizontalPadding": {
        "regular": 12
    },
    "sizeButtonPaddingHorizontal": {
        "regular": 12
    },
    "sizeArrowPadding": {
        "regular": 12
    },
    "sizeTooltipMargin": {
        "regular": 8
    },
    "sizeIconUI": {
        "regular": 16
    },
    "sizeAvatarXS": {
        "regular": 24
    },
    "sizeAvatarS": {
        "regular": 32
    },
    "sizeAvatarM": {
        "regular": 48
    },
    "sizeAvatarL": {
        "regular": 96
    },
    "sizeAvatarXL": {
        "regular": 128
    },
    "sizeBadgeXS": {
        "regular": 12
    },
    "sizeBadgeS": {
        "regular": 16
    },
    "sizeBadgeM": {
        "regular": 24
    },
    "sizeBadgeL": {
        "regular": 44
    },
    "sizeBadgeXL": {
        "regular": 56
    },
    "sizeCardgridPadding": {
        "regular": 8
    },
    "sizeCardBorderRadius": {
        "regular": 8
    },
    "sizeCardgridPaddingVertical": {
        "regular": 8
    },
    "sizeBasePaddingHorizontal": {
        "regular": 16
    },
    "sizeBasePaddingVertical": {
        "regular": 12
    },
    "sizeButtonGroupGapSpace": {
        "regular": 1
    },
    "sizeButtonGroupGapSmall": {
        "regular": 8
    },
    "sizeButtonGroupGapMedium": {
        "regular": 12
    },
    "sizeOptionHierarchy": {
        "regular": 32
    },
    "sizeSwitchHeight": {
        "regular": 14,
        "compact": 12
    },
    "sizeSwitchWidth": {
        "regular": 34,
        "compact": 32
    },
    "sizeSwitchPin": {
        "regular": 20,
        "compact": 18
    },
    "sizePanelHeaderHeight": {
        "regular": 56
    },
    "sizeButtonBaseSmallPaddingHorizontal": {
        "regular": 16
    },
    "sizeButtonBaseMediumPaddingHorizontal": {
        "regular": 16
    },
    "sizeButtonBaseLargePaddingHorizontal": {
        "regular": 20
    },
    "sizeButtonBaseSmallPaddingHorizontalIcon": {
        "regular": 12
    },
    "sizeButtonBaseMediumPaddingHorizontalIcon": {
        "regular": 12
    },
    "sizeButtonBaseLargePaddingHorizontalIcon": {
        "regular": 16
    },
    "sizeButtonTertiarySmallPaddingHorizontal": {
        "regular": 12
    },
    "sizeButtonTertiaryMediumPaddingHorizontal": {
        "regular": 12
    },
    "sizeButtonTertiaryLargePaddingHorizontal": {
        "regular": 16
    },
    "sizeButtonTertiarySmallPaddingHorizontalIcon": {
        "regular": 8
    },
    "sizeButtonTertiaryMediumPaddingHorizontalIcon": {
        "regular": 8
    },
    "sizeButtonTertiaryLargePaddingHorizontalIcon": {
        "regular": 12
    },
    "sizeButtonMinimumWidth": {
        "regular": 80
    },
    "sizeFormItemPaddingVertical": {
        "regular": 12
    },
    "sizeSplitColPaddingHorizontal": {
        "regular": 16
    },
    "sizeSubnavigationBarGap": {
        "regular": 8
    },
    "sizeSubnavigationBarPaddingVertical": {
        "regular": 12
    },
    "spacingSizeXs": 4,
    "spacingSizeS": 6,
    "spacingSizeM": 8,
    "spacingSizeL": 10,
    "spacingSizeXl": 12,
    "animationDurationL": "0.4s",
    "animationDurationM": "0.2s",
    "animationDurationS": "0.1s",
    "animationEasingDefault": "cubic-bezier(0.3, 0.3, 0.5, 1)",
    "animationEasingPlatform": "cubic-bezier(0.4, 0, 0.2, 1)",
    "opacityDisable": 0.4,
    "opacityDisableAccessibility": 0.64,
    "zIndexModal": 99,
    "zIndexPopout": 100,
    "fontHeadline": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20
        }
    },
    "colorsScheme": "light",
    "colorBackgroundAccent": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorBackgroundAccentThemed": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorBackgroundAccentTint": {
        "normal": "#f38d52",
        "hover": "#E98851",
        "active": "#E08350"
    },
    "colorBackgroundAccentAlternative": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorBackground": {
        "normal": "#EBEDF0",
        "hover": "#E2E4E9",
        "active": "#D8DBE2"
    },
    "colorBackgroundContent": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundSecondary": {
        "normal": "#F5F5F5",
        "hover": "#EBECEE",
        "active": "#E1E3E6"
    },
    "colorBackgroundSecondaryAlpha": {
        "normal": "rgba(0, 0, 0, 0.04)",
        "hover": "rgba(0, 0, 0, 0.08)",
        "active": "rgba(0, 0, 0, 0.12)"
    },
    "colorBackgroundTertiary": {
        "normal": "#F9F9F9",
        "hover": "#EFF0F1",
        "active": "#E5E6EA"
    },
    "colorBackgroundTertiaryAlpha": {
        "normal": "rgba(0, 0, 0, 0.03)",
        "hover": "rgba(0, 0, 0, 0.07)",
        "active": "rgba(0, 0, 0, 0.11)"
    },
    "colorBackgroundContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundContrastSecondaryAlpha": {
        "normal": "rgba(255, 255, 255, 0.2)",
        "hover": "rgba(255, 255, 255, 0.24)",
        "active": "rgba(255, 255, 255, 0.28)"
    },
    "colorBackgroundContrastInverse": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorBackgroundModal": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundModalInverse": {
        "normal": "#2d2d2e",
        "hover": "#2B2C2F",
        "active": "#292B2F"
    },
    "colorBackgroundWarning": {
        "normal": "#FFF2D6",
        "hover": "#F5E9D0",
        "active": "#EBE0CA"
    },
    "colorBackgroundPositive": {
        "normal": "#4BB34B",
        "hover": "#48AC4A",
        "active": "#45A64A"
    },
    "colorBackgroundNegative": {
        "normal": "#E64646",
        "hover": "#DD4446",
        "active": "#D44245"
    },
    "colorBackgroundNegativeTint": {
        "normal": "#FAEBEB",
        "hover": "#F0E2E4",
        "active": "#E6D9DD"
    },
    "colorBackgroundPositiveTint": {
        "normal": "#E8f9e8",
        "hover": "#DFF0E1",
        "active": "#D5E6DA"
    },
    "colorFieldBackground": {
        "normal": "#f2f3f5",
        "hover": "#E8EAEE",
        "active": "#DFE1E6"
    },
    "colorHeaderBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorTextAccent": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorTextAccentThemed": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorTextPrimary": {
        "normal": "#000000",
        "hover": "#000102",
        "active": "#000105"
    },
    "colorTextPrimaryInvariably": {
        "normal": "#000000",
        "hover": "#000102",
        "active": "#000105"
    },
    "colorTextSecondary": {
        "normal": "#818C99",
        "hover": "#7C8795",
        "active": "#778292"
    },
    "colorTextSubhead": {
        "normal": "#6D7885",
        "hover": "#697482",
        "active": "#64707F"
    },
    "colorTextTertiary": {
        "normal": "#99A2AD",
        "hover": "#939CA9",
        "active": "#8D96A4"
    },
    "colorTextContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorTextContrastThemed": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorTextPositive": {
        "normal": "#4BB34B",
        "hover": "#48AC4A",
        "active": "#45A64A"
    },
    "colorTextNegative": {
        "normal": "#E64646",
        "hover": "#DD4446",
        "active": "#D44245"
    },
    "colorTextLink": {
        "normal": "#2D81E0",
        "hover": "#2B7CD9",
        "active": "#2978D3"
    },
    "colorTextLinkThemed": {
        "normal": "#2D81E0",
        "hover": "#2B7CD9",
        "active": "#2978D3"
    },
    "colorTextLinkVisited": {
        "normal": "#4986CC",
        "hover": "#4681C6",
        "active": "#437DC1"
    },
    "colorTextMuted": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorLinkContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorIconAccent": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorIconAccentThemed": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorIconPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorIconPrimaryInvariably": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorIconMedium": {
        "normal": "#818C99",
        "hover": "#7C8795",
        "active": "#778292"
    },
    "colorIconMediumAlpha": {
        "normal": "rgba(0, 0, 0, 0.48)",
        "hover": "rgba(0, 0, 0, 0.52)",
        "active": "rgba(0, 0, 0, 0.56)"
    },
    "colorIconSecondary": {
        "normal": "#99A2AD",
        "hover": "#939CA9",
        "active": "#8D96A4"
    },
    "colorIconSecondaryAlpha": {
        "normal": "rgba(0, 0, 0, 0.36)",
        "hover": "rgba(0, 0, 0, 0.4)",
        "active": "rgba(0, 0, 0, 0.44)"
    },
    "colorIconTertiary": {
        "normal": "#B8C1CC",
        "hover": "#B1BAC6",
        "active": "#A9B3C1"
    },
    "colorIconTertiaryAlpha": {
        "normal": "rgba(0, 0, 0, 0.24)",
        "hover": "rgba(0, 0, 0, 0.28)",
        "active": "rgba(0, 0, 0, 0.32)"
    },
    "colorIconContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorIconContrastThemed": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorIconContrastSecondary": {
        "normal": "#F2F3F5",
        "hover": "#E8EAEE",
        "active": "#DFE1E6"
    },
    "colorIconPositive": {
        "normal": "#4BB34B",
        "hover": "#48AC4A",
        "active": "#45A64A"
    },
    "colorIconNegative": {
        "normal": "#E64646",
        "hover": "#DD4446",
        "active": "#D44245"
    },
    "colorStrokeAccent": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorStrokeAccentThemed": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorSeparatorPrimary": {
        "normal": "#D7D8D9",
        "hover": "#CED0D3",
        "active": "#C6C8CD"
    },
    "colorSeparatorPrimary2x": {
        "normal": "#cbcccd",
        "hover": "#C3C4C7",
        "active": "#BBBDC1"
    },
    "colorSeparatorPrimary3x": {
        "normal": "#bebfc1",
        "hover": "#B6B8BC",
        "active": "#AFB1B6"
    },
    "colorSeparatorPrimaryAlpha": {
        "normal": "rgba(0, 0, 0, 0.12)",
        "hover": "rgba(0, 0, 0, 0.16)",
        "active": "rgba(0, 0, 0, 0.2)"
    },
    "colorSeparatorSecondary": {
        "normal": "#E1E3E6",
        "hover": "#D8DBDF",
        "active": "#CFD2D8"
    },
    "colorStrokePositive": {
        "normal": "#4BB34B",
        "hover": "#48AC4A",
        "active": "#45A64A"
    },
    "colorStrokeNegative": {
        "normal": "#E64646",
        "hover": "#DD4446",
        "active": "#D44245"
    },
    "colorStrokeContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorImageBorderAlpha": {
        "normal": "rgba(0, 0, 0, 0.08)",
        "hover": "rgba(0, 0, 0, 0.12)",
        "active": "rgba(0, 0, 0, 0.16)"
    },
    "colorFieldBorderAlpha": {
        "normal": "rgba(0, 0, 0, 0.12)",
        "hover": "rgba(0, 0, 0, 0.24)",
        "active": "rgba(0, 0, 0, 0.36)"
    },
    "colorAccentBlue": {
        "normal": "#3F8AE0",
        "hover": "#3C85D9",
        "active": "#3A80D3"
    },
    "colorAccentGray": {
        "normal": "#A3ADB8",
        "hover": "#9CA7B3",
        "active": "#96A0AE"
    },
    "colorAccentRed": {
        "normal": "#FF3347",
        "hover": "#F53247",
        "active": "#EB3046"
    },
    "colorAccentGreen": {
        "normal": "#4BB34B",
        "hover": "#48AC4A",
        "active": "#45A64A"
    },
    "colorAccentOrange": {
        "normal": "#FFA000",
        "hover": "#F59A02",
        "active": "#EB9405"
    },
    "colorAccentPurple": {
        "normal": "#735CE6",
        "hover": "#6E59DF",
        "active": "#6A56D8"
    },
    "colorAccentViolet": {
        "normal": "#792EC0",
        "hover": "#742DBB",
        "active": "#6F2CB6"
    },
    "colorAccentRaspberryPink": {
        "normal": "#E03FAB",
        "hover": "#D73DA7",
        "active": "#CE3BA2"
    },
    "colorAccentSecondary": {
        "normal": "#3F8AE0",
        "hover": "#3C85D9",
        "active": "#3A80D3"
    },
    "colorOverlayPrimary": {
        "normal": "rgba(0, 0, 0, 0.4)",
        "hover": "rgba(0, 0, 0, 0.44)",
        "active": "rgba(0, 0, 0, 0.48)"
    },
    "colorAvatarOverlay": {
        "normal": "rgba(0, 0, 0, 0.6)",
        "hover": "rgba(0, 0, 0, 0.64)",
        "active": "rgba(0, 0, 0, 0.68)"
    },
    "colorAvatarOverlayInverseAlpha": {
        "normal": "rgba(255, 255, 255, 0.85)",
        "hover": "rgba(255, 255, 255, 0.89)",
        "active": "rgba(255, 255, 255, 0.93)"
    },
    "colorActionSheetText": {
        "normal": "#3F8AE0",
        "hover": "#3C85D9",
        "active": "#3A80D3"
    },
    "colorImagePlaceholder": {
        "normal": "#F2F3F5",
        "hover": "#E8EAEE",
        "active": "#DFE1E6"
    },
    "colorImagePlaceholderAlpha": {
        "normal": "rgba(0, 28, 61, 0.08)",
        "hover": "rgba(0, 28, 61, 0.12)",
        "active": "rgba(0, 28, 61, 0.16)"
    },
    "colorSkeletonFrom": {
        "normal": "#F5F5F5",
        "hover": "#EBECEE",
        "active": "#E1E3E6"
    },
    "colorSkeletonTo": {
        "normal": "#E1E3E6",
        "hover": "#D8DBDF",
        "active": "#CFD2D8"
    },
    "colorWriteBarIcon": {
        "normal": "#3F8AE0",
        "hover": "#3C85D9",
        "active": "#3A80D3"
    },
    "colorWriteBarInputBackground": {
        "normal": "#F2F3F5",
        "hover": "#E8EAEE",
        "active": "#DFE1E6"
    },
    "colorWriteBarInputBorder": {
        "normal": "#E1E3E6",
        "hover": "#D8DBDF",
        "active": "#CFD2D8"
    },
    "colorWriteBarInputBorderAlpha": {
        "normal": "rgba(0, 0, 0, 0.08)",
        "hover": "rgba(0, 0, 0, 0.12)",
        "active": "rgba(0, 0, 0, 0.16)"
    },
    "colorTrackBackground": {
        "normal": "#E1E3E6",
        "hover": "#D8DBDF",
        "active": "#CFD2D8"
    },
    "colorTrackBuffer": {
        "normal": "#A0BFE4",
        "hover": "#9AB8DD",
        "active": "#93B1D7"
    },
    "colorSearchFieldBackground": {
        "normal": "#EBEDF0",
        "hover": "#E2E4E9",
        "active": "#D8DBE2"
    },
    "colorPanelHeaderIcon": {
        "normal": "#fb6c16",
        "hover": "#F16818",
        "active": "#E76519"
    },
    "colorSegmentedControl": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorTransparent": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.04)",
        "active": "rgba(0, 16, 61, 0.08)"
    },
    "themeType": "root"
};
exports.default = theme;
