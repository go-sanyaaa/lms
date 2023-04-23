"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": {
        "name": "--vkui--theme_name",
        "value": "var(--vkui--theme_name, vkBase)"
    },
    "themeNameBase": {
        "name": "--vkui--theme_name_base",
        "value": "var(--vkui--theme_name_base, vkBase)"
    },
    "gradientBlack": {
        "name": "--vkui--gradient_black",
        "value": "var(--vkui--gradient_black, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.014) 13%, rgba(0, 0, 0, 0.06) 27%, rgba(0, 0, 0, 0.316) 68%, rgba(0, 0, 0, 0.38) 84%, rgba(0, 0, 0, 0.4) 100%)"
    },
    "gradientWhite": {
        "name": "--vkui--gradient_white",
        "value": "var(--vkui--gradient_white, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.036) 13%, rgba(255, 255, 255, 0.15) 27%, rgba(255, 255, 255, 0.79) 68%, rgba(255, 255, 255, 0.95) 84%, rgba(255, 255, 255, 1) 100%)"
    },
    "gradientTint": {
        "name": "--vkui--gradient_tint",
        "value": "var(--vkui--gradient_tint, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 0.036) 13%, rgba(249, 249, 249, 0.15) 27%, rgba(249, 249, 249, 0.79) 68%, rgba(249, 249, 249, 0.95) 84%, rgba(249, 249, 249, 1) 100%)"
    },
    "elevation1": {
        "name": "--vkui--elevation1",
        "value": "var(--vkui--elevation1, 0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06))"
    },
    "elevation1InvertY": {
        "name": "--vkui--elevation1_invert_y",
        "value": "var(--vkui--elevation1_invert_y, 0px 0px 2px rgba(0, 0, 0, 0.03), 0px -2px 2px rgba(0, 0, 0, 0.06))"
    },
    "elevation2": {
        "name": "--vkui--elevation2",
        "value": "var(--vkui--elevation2, 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06))"
    },
    "elevation3": {
        "name": "--vkui--elevation3",
        "value": "var(--vkui--elevation3, 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08))"
    },
    "elevation4": {
        "name": "--vkui--elevation4",
        "value": "var(--vkui--elevation4, 0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16))"
    },
    "fontFamilyFallbacks": {
        "name": "--vkui--font_family_fallbacks",
        "value": "var(--vkui--font_family_fallbacks, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
    },
    "fontFamilyAccent": {
        "name": "--vkui--font_family_accent",
        "value": "var(--vkui--font_family_accent, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
    },
    "fontFamilyBase": {
        "name": "--vkui--font_family_base",
        "value": "var(--vkui--font_family_base, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
    },
    "fontWeightAccent1": {
        "name": "--vkui--font_weight_accent1",
        "value": "var(--vkui--font_weight_accent1, 600)"
    },
    "fontWeightAccent2": {
        "name": "--vkui--font_weight_accent2",
        "value": "var(--vkui--font_weight_accent2, 500)"
    },
    "fontWeightAccent3": {
        "name": "--vkui--font_weight_accent3",
        "value": "var(--vkui--font_weight_accent3, 400)"
    },
    "fontWeightBase1": {
        "name": "--vkui--font_weight_base1",
        "value": "var(--vkui--font_weight_base1, 600)"
    },
    "fontWeightBase2": {
        "name": "--vkui--font_weight_base2",
        "value": "var(--vkui--font_weight_base2, 500)"
    },
    "fontWeightBase3": {
        "name": "--vkui--font_weight_base3",
        "value": "var(--vkui--font_weight_base3, 400)"
    },
    "fontTitle1": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_title1--font_size",
                "value": "var(--vkui--font_title1--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_title1--line_height",
                "value": "var(--vkui--font_title1--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_title1--font_family",
                "value": "var(--vkui--font_title1--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_title1--font_weight",
                "value": "var(--vkui--font_title1--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_title1--font_size--regular",
                "value": "var(--vkui--font_title1--font_size--regular, 24px)"
            },
            "lineHeight": {
                "name": "--vkui--font_title1--line_height--regular",
                "value": "var(--vkui--font_title1--line_height--regular, 28px)"
            },
            "fontFamily": {
                "name": "--vkui--font_title1--font_family--regular",
                "value": "var(--vkui--font_title1--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_title1--font_weight--regular",
                "value": "var(--vkui--font_title1--font_weight--regular, 600)"
            }
        }
    },
    "fontTitle2": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_title2--font_size",
                "value": "var(--vkui--font_title2--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_title2--line_height",
                "value": "var(--vkui--font_title2--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_title2--font_family",
                "value": "var(--vkui--font_title2--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_title2--font_weight",
                "value": "var(--vkui--font_title2--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_title2--font_size--regular",
                "value": "var(--vkui--font_title2--font_size--regular, 20px)"
            },
            "lineHeight": {
                "name": "--vkui--font_title2--line_height--regular",
                "value": "var(--vkui--font_title2--line_height--regular, 24px)"
            },
            "fontFamily": {
                "name": "--vkui--font_title2--font_family--regular",
                "value": "var(--vkui--font_title2--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_title2--font_weight--regular",
                "value": "var(--vkui--font_title2--font_weight--regular, 600)"
            }
        }
    },
    "fontTitle3": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_title3--font_size",
                "value": "var(--vkui--font_title3--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_title3--line_height",
                "value": "var(--vkui--font_title3--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_title3--font_family",
                "value": "var(--vkui--font_title3--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_title3--font_weight",
                "value": "var(--vkui--font_title3--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_title3--font_size--regular",
                "value": "var(--vkui--font_title3--font_size--regular, 17px)"
            },
            "lineHeight": {
                "name": "--vkui--font_title3--line_height--regular",
                "value": "var(--vkui--font_title3--line_height--regular, 22px)"
            },
            "fontFamily": {
                "name": "--vkui--font_title3--font_family--regular",
                "value": "var(--vkui--font_title3--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_title3--font_weight--regular",
                "value": "var(--vkui--font_title3--font_weight--regular, 600)"
            }
        }
    },
    "fontHeadline1": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_headline1--font_size",
                "value": "var(--vkui--font_headline1--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline1--line_height",
                "value": "var(--vkui--font_headline1--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_headline1--font_family",
                "value": "var(--vkui--font_headline1--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_headline1--font_weight",
                "value": "var(--vkui--font_headline1--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_headline1--font_size--regular",
                "value": "var(--vkui--font_headline1--font_size--regular, 16px)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline1--line_height--regular",
                "value": "var(--vkui--font_headline1--line_height--regular, 20px)"
            },
            "fontFamily": {
                "name": "--vkui--font_headline1--font_family--regular",
                "value": "var(--vkui--font_headline1--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_headline1--font_weight--regular",
                "value": "var(--vkui--font_headline1--font_weight--regular, 500)"
            }
        },
        "compact": {
            "fontSize": {
                "name": "--vkui--font_headline1--font_size--compact",
                "value": "var(--vkui--font_headline1--font_size--compact, 15px)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline1--line_height--compact",
                "value": "var(--vkui--font_headline1--line_height--compact, 20px)"
            }
        }
    },
    "fontHeadline2": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_headline2--font_size",
                "value": "var(--vkui--font_headline2--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline2--line_height",
                "value": "var(--vkui--font_headline2--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_headline2--font_family",
                "value": "var(--vkui--font_headline2--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_headline2--font_weight",
                "value": "var(--vkui--font_headline2--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_headline2--font_size--regular",
                "value": "var(--vkui--font_headline2--font_size--regular, 15px)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline2--line_height--regular",
                "value": "var(--vkui--font_headline2--line_height--regular, 20px)"
            },
            "fontFamily": {
                "name": "--vkui--font_headline2--font_family--regular",
                "value": "var(--vkui--font_headline2--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_headline2--font_weight--regular",
                "value": "var(--vkui--font_headline2--font_weight--regular, 500)"
            }
        },
        "compact": {
            "fontSize": {
                "name": "--vkui--font_headline2--font_size--compact",
                "value": "var(--vkui--font_headline2--font_size--compact, 14px)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline2--line_height--compact",
                "value": "var(--vkui--font_headline2--line_height--compact, 20px)"
            }
        }
    },
    "fontText": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_text--font_size",
                "value": "var(--vkui--font_text--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_text--line_height",
                "value": "var(--vkui--font_text--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_text--font_family",
                "value": "var(--vkui--font_text--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_text--font_weight",
                "value": "var(--vkui--font_text--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_text--font_size--regular",
                "value": "var(--vkui--font_text--font_size--regular, 16px)"
            },
            "lineHeight": {
                "name": "--vkui--font_text--line_height--regular",
                "value": "var(--vkui--font_text--line_height--regular, 20px)"
            },
            "fontFamily": {
                "name": "--vkui--font_text--font_family--regular",
                "value": "var(--vkui--font_text--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_text--font_weight--regular",
                "value": "var(--vkui--font_text--font_weight--regular, 400)"
            }
        },
        "compact": {
            "fontSize": {
                "name": "--vkui--font_text--font_size--compact",
                "value": "var(--vkui--font_text--font_size--compact, 15px)"
            },
            "lineHeight": {
                "name": "--vkui--font_text--line_height--compact",
                "value": "var(--vkui--font_text--line_height--compact, 20px)"
            }
        }
    },
    "fontParagraph": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_paragraph--font_size",
                "value": "var(--vkui--font_paragraph--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_paragraph--line_height",
                "value": "var(--vkui--font_paragraph--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_paragraph--font_family",
                "value": "var(--vkui--font_paragraph--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_paragraph--font_weight",
                "value": "var(--vkui--font_paragraph--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_paragraph--font_size--regular",
                "value": "var(--vkui--font_paragraph--font_size--regular, 15px)"
            },
            "lineHeight": {
                "name": "--vkui--font_paragraph--line_height--regular",
                "value": "var(--vkui--font_paragraph--line_height--regular, 20px)"
            },
            "fontFamily": {
                "name": "--vkui--font_paragraph--font_family--regular",
                "value": "var(--vkui--font_paragraph--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_paragraph--font_weight--regular",
                "value": "var(--vkui--font_paragraph--font_weight--regular, 400)"
            }
        }
    },
    "fontSubhead": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_subhead--font_size",
                "value": "var(--vkui--font_subhead--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_subhead--line_height",
                "value": "var(--vkui--font_subhead--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_subhead--font_family",
                "value": "var(--vkui--font_subhead--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_subhead--font_weight",
                "value": "var(--vkui--font_subhead--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_subhead--font_size--regular",
                "value": "var(--vkui--font_subhead--font_size--regular, 14px)"
            },
            "lineHeight": {
                "name": "--vkui--font_subhead--line_height--regular",
                "value": "var(--vkui--font_subhead--line_height--regular, 18px)"
            },
            "fontFamily": {
                "name": "--vkui--font_subhead--font_family--regular",
                "value": "var(--vkui--font_subhead--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_subhead--font_weight--regular",
                "value": "var(--vkui--font_subhead--font_weight--regular, 400)"
            }
        },
        "compact": {
            "fontSize": {
                "name": "--vkui--font_subhead--font_size--compact",
                "value": "var(--vkui--font_subhead--font_size--compact, 13px)"
            },
            "lineHeight": {
                "name": "--vkui--font_subhead--line_height--compact",
                "value": "var(--vkui--font_subhead--line_height--compact, 16px)"
            }
        }
    },
    "fontFootnote": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_footnote--font_size",
                "value": "var(--vkui--font_footnote--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_footnote--line_height",
                "value": "var(--vkui--font_footnote--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_footnote--font_family",
                "value": "var(--vkui--font_footnote--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_footnote--font_weight",
                "value": "var(--vkui--font_footnote--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_footnote--font_size--regular",
                "value": "var(--vkui--font_footnote--font_size--regular, 13px)"
            },
            "lineHeight": {
                "name": "--vkui--font_footnote--line_height--regular",
                "value": "var(--vkui--font_footnote--line_height--regular, 16px)"
            },
            "fontFamily": {
                "name": "--vkui--font_footnote--font_family--regular",
                "value": "var(--vkui--font_footnote--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_footnote--font_weight--regular",
                "value": "var(--vkui--font_footnote--font_weight--regular, 400)"
            }
        }
    },
    "fontFootnoteCaps": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_footnote_caps--font_size",
                "value": "var(--vkui--font_footnote_caps--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_footnote_caps--line_height",
                "value": "var(--vkui--font_footnote_caps--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_footnote_caps--font_family",
                "value": "var(--vkui--font_footnote_caps--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_footnote_caps--font_weight",
                "value": "var(--vkui--font_footnote_caps--font_weight)"
            },
            "textTransform": {
                "name": "--vkui--font_footnote_caps--text_transform",
                "value": "var(--vkui--font_footnote_caps--text_transform)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_footnote_caps--font_size--regular",
                "value": "var(--vkui--font_footnote_caps--font_size--regular, 13px)"
            },
            "lineHeight": {
                "name": "--vkui--font_footnote_caps--line_height--regular",
                "value": "var(--vkui--font_footnote_caps--line_height--regular, 16px)"
            },
            "fontFamily": {
                "name": "--vkui--font_footnote_caps--font_family--regular",
                "value": "var(--vkui--font_footnote_caps--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_footnote_caps--font_weight--regular",
                "value": "var(--vkui--font_footnote_caps--font_weight--regular, 400)"
            },
            "textTransform": {
                "name": "--vkui--font_footnote_caps--text_transform--regular",
                "value": "var(--vkui--font_footnote_caps--text_transform--regular, uppercase)"
            }
        }
    },
    "fontCaption1": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_caption1--font_size",
                "value": "var(--vkui--font_caption1--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption1--line_height",
                "value": "var(--vkui--font_caption1--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption1--font_family",
                "value": "var(--vkui--font_caption1--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption1--font_weight",
                "value": "var(--vkui--font_caption1--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_caption1--font_size--regular",
                "value": "var(--vkui--font_caption1--font_size--regular, 12px)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption1--line_height--regular",
                "value": "var(--vkui--font_caption1--line_height--regular, 14px)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption1--font_family--regular",
                "value": "var(--vkui--font_caption1--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption1--font_weight--regular",
                "value": "var(--vkui--font_caption1--font_weight--regular, 400)"
            }
        }
    },
    "fontCaption1Caps": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_caption1_caps--font_size",
                "value": "var(--vkui--font_caption1_caps--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption1_caps--line_height",
                "value": "var(--vkui--font_caption1_caps--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption1_caps--font_family",
                "value": "var(--vkui--font_caption1_caps--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption1_caps--font_weight",
                "value": "var(--vkui--font_caption1_caps--font_weight)"
            },
            "textTransform": {
                "name": "--vkui--font_caption1_caps--text_transform",
                "value": "var(--vkui--font_caption1_caps--text_transform)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_caption1_caps--font_size--regular",
                "value": "var(--vkui--font_caption1_caps--font_size--regular, 12px)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption1_caps--line_height--regular",
                "value": "var(--vkui--font_caption1_caps--line_height--regular, 14px)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption1_caps--font_family--regular",
                "value": "var(--vkui--font_caption1_caps--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption1_caps--font_weight--regular",
                "value": "var(--vkui--font_caption1_caps--font_weight--regular, 600)"
            },
            "textTransform": {
                "name": "--vkui--font_caption1_caps--text_transform--regular",
                "value": "var(--vkui--font_caption1_caps--text_transform--regular, uppercase)"
            }
        }
    },
    "fontCaption2": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_caption2--font_size",
                "value": "var(--vkui--font_caption2--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption2--line_height",
                "value": "var(--vkui--font_caption2--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption2--font_family",
                "value": "var(--vkui--font_caption2--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption2--font_weight",
                "value": "var(--vkui--font_caption2--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_caption2--font_size--regular",
                "value": "var(--vkui--font_caption2--font_size--regular, 11px)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption2--line_height--regular",
                "value": "var(--vkui--font_caption2--line_height--regular, 14px)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption2--font_family--regular",
                "value": "var(--vkui--font_caption2--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption2--font_weight--regular",
                "value": "var(--vkui--font_caption2--font_weight--regular, 400)"
            }
        }
    },
    "fontCaption2Caps": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_caption2_caps--font_size",
                "value": "var(--vkui--font_caption2_caps--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption2_caps--line_height",
                "value": "var(--vkui--font_caption2_caps--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption2_caps--font_family",
                "value": "var(--vkui--font_caption2_caps--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption2_caps--font_weight",
                "value": "var(--vkui--font_caption2_caps--font_weight)"
            },
            "textTransform": {
                "name": "--vkui--font_caption2_caps--text_transform",
                "value": "var(--vkui--font_caption2_caps--text_transform)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_caption2_caps--font_size--regular",
                "value": "var(--vkui--font_caption2_caps--font_size--regular, 11px)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption2_caps--line_height--regular",
                "value": "var(--vkui--font_caption2_caps--line_height--regular, 14px)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption2_caps--font_family--regular",
                "value": "var(--vkui--font_caption2_caps--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption2_caps--font_weight--regular",
                "value": "var(--vkui--font_caption2_caps--font_weight--regular, 600)"
            },
            "textTransform": {
                "name": "--vkui--font_caption2_caps--text_transform--regular",
                "value": "var(--vkui--font_caption2_caps--text_transform--regular, uppercase)"
            }
        }
    },
    "fontCaption3": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_caption3--font_size",
                "value": "var(--vkui--font_caption3--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption3--line_height",
                "value": "var(--vkui--font_caption3--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption3--font_family",
                "value": "var(--vkui--font_caption3--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption3--font_weight",
                "value": "var(--vkui--font_caption3--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_caption3--font_size--regular",
                "value": "var(--vkui--font_caption3--font_size--regular, 9px)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption3--line_height--regular",
                "value": "var(--vkui--font_caption3--line_height--regular, 12px)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption3--font_family--regular",
                "value": "var(--vkui--font_caption3--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption3--font_weight--regular",
                "value": "var(--vkui--font_caption3--font_weight--regular, 400)"
            }
        }
    },
    "fontCaption3Caps": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_caption3_caps--font_size",
                "value": "var(--vkui--font_caption3_caps--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption3_caps--line_height",
                "value": "var(--vkui--font_caption3_caps--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption3_caps--font_family",
                "value": "var(--vkui--font_caption3_caps--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption3_caps--font_weight",
                "value": "var(--vkui--font_caption3_caps--font_weight)"
            },
            "textTransform": {
                "name": "--vkui--font_caption3_caps--text_transform",
                "value": "var(--vkui--font_caption3_caps--text_transform)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_caption3_caps--font_size--regular",
                "value": "var(--vkui--font_caption3_caps--font_size--regular, 9px)"
            },
            "lineHeight": {
                "name": "--vkui--font_caption3_caps--line_height--regular",
                "value": "var(--vkui--font_caption3_caps--line_height--regular, 12px)"
            },
            "fontFamily": {
                "name": "--vkui--font_caption3_caps--font_family--regular",
                "value": "var(--vkui--font_caption3_caps--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_caption3_caps--font_weight--regular",
                "value": "var(--vkui--font_caption3_caps--font_weight--regular, 600)"
            },
            "textTransform": {
                "name": "--vkui--font_caption3_caps--text_transform--regular",
                "value": "var(--vkui--font_caption3_caps--text_transform--regular, uppercase)"
            }
        }
    },
    "sizeSelectIconPadding": {
        "auto": {
            "name": "--vkui--size_select_icon_padding",
            "value": "var(--vkui--size_select_icon_padding)"
        },
        "regular": {
            "name": "--vkui--size_select_icon_padding--regular",
            "value": "var(--vkui--size_select_icon_padding--regular, 6px)"
        },
        "compact": {
            "name": "--vkui--size_select_icon_padding--compact",
            "value": "var(--vkui--size_select_icon_padding--compact, 7px)"
        }
    },
    "sizePopupBasePadding": {
        "auto": {
            "name": "--vkui--size_popup_base_padding",
            "value": "var(--vkui--size_popup_base_padding)"
        },
        "regular": {
            "name": "--vkui--size_popup_base_padding--regular",
            "value": "var(--vkui--size_popup_base_padding--regular, 32px)"
        },
        "compact": {
            "name": "--vkui--size_popup_base_padding--compact",
            "value": "var(--vkui--size_popup_base_padding--compact, 20px)"
        }
    },
    "sizePopupHeaderPadding": {
        "auto": {
            "name": "--vkui--size_popup_header_padding",
            "value": "var(--vkui--size_popup_header_padding)"
        },
        "regular": {
            "name": "--vkui--size_popup_header_padding--regular",
            "value": "var(--vkui--size_popup_header_padding--regular, 24px)"
        },
        "compact": {
            "name": "--vkui--size_popup_header_padding--compact",
            "value": "var(--vkui--size_popup_header_padding--compact, 16px)"
        }
    },
    "sizeLabelHorizontalMargin": {
        "auto": {
            "name": "--vkui--size_label_horizontal_margin",
            "value": "var(--vkui--size_label_horizontal_margin)"
        },
        "regular": {
            "name": "--vkui--size_label_horizontal_margin--regular",
            "value": "var(--vkui--size_label_horizontal_margin--regular, 16px)"
        }
    },
    "sizeBorderRadius": {
        "auto": {
            "name": "--vkui--size_border_radius",
            "value": "var(--vkui--size_border_radius)"
        },
        "regular": {
            "name": "--vkui--size_border_radius--regular",
            "value": "var(--vkui--size_border_radius--regular, 8px)"
        }
    },
    "sizeCheckBorderRadius": {
        "auto": {
            "name": "--vkui--size_check_border_radius",
            "value": "var(--vkui--size_check_border_radius)"
        },
        "regular": {
            "name": "--vkui--size_check_border_radius--regular",
            "value": "var(--vkui--size_check_border_radius--regular, 4px)"
        }
    },
    "sizeBorderRadiusPaper": {
        "auto": {
            "name": "--vkui--size_border_radius_paper",
            "value": "var(--vkui--size_border_radius_paper)"
        },
        "regular": {
            "name": "--vkui--size_border_radius_paper--regular",
            "value": "var(--vkui--size_border_radius_paper--regular, 12px)"
        }
    },
    "sizeBorderRadiusPromo": {
        "auto": {
            "name": "--vkui--size_border_radius_promo",
            "value": "var(--vkui--size_border_radius_promo)"
        },
        "regular": {
            "name": "--vkui--size_border_radius_promo--regular",
            "value": "var(--vkui--size_border_radius_promo--regular, 20px)"
        }
    },
    "sizeFieldHeight": {
        "auto": {
            "name": "--vkui--size_field_height",
            "value": "var(--vkui--size_field_height)"
        },
        "regular": {
            "name": "--vkui--size_field_height--regular",
            "value": "var(--vkui--size_field_height--regular, 44px)"
        },
        "compact": {
            "name": "--vkui--size_field_height--compact",
            "value": "var(--vkui--size_field_height--compact, 36px)"
        }
    },
    "sizeSearchHeight": {
        "auto": {
            "name": "--vkui--size_search_height",
            "value": "var(--vkui--size_search_height)"
        },
        "regular": {
            "name": "--vkui--size_search_height--regular",
            "value": "var(--vkui--size_search_height--regular, 36px)"
        },
        "compact": {
            "name": "--vkui--size_search_height--compact",
            "value": "var(--vkui--size_search_height--compact, 32px)"
        }
    },
    "sizeButtonLargeHeight": {
        "auto": {
            "name": "--vkui--size_button_large_height",
            "value": "var(--vkui--size_button_large_height)"
        },
        "regular": {
            "name": "--vkui--size_button_large_height--regular",
            "value": "var(--vkui--size_button_large_height--regular, 44px)"
        },
        "compact": {
            "name": "--vkui--size_button_large_height--compact",
            "value": "var(--vkui--size_button_large_height--compact, 36px)"
        }
    },
    "sizeButtonMediumHeight": {
        "auto": {
            "name": "--vkui--size_button_medium_height",
            "value": "var(--vkui--size_button_medium_height)"
        },
        "regular": {
            "name": "--vkui--size_button_medium_height--regular",
            "value": "var(--vkui--size_button_medium_height--regular, 36px)"
        },
        "compact": {
            "name": "--vkui--size_button_medium_height--compact",
            "value": "var(--vkui--size_button_medium_height--compact, 32px)"
        }
    },
    "sizeButtonSmallHeight": {
        "auto": {
            "name": "--vkui--size_button_small_height",
            "value": "var(--vkui--size_button_small_height)"
        },
        "regular": {
            "name": "--vkui--size_button_small_height--regular",
            "value": "var(--vkui--size_button_small_height--regular, 30px)"
        },
        "compact": {
            "name": "--vkui--size_button_small_height--compact",
            "value": "var(--vkui--size_button_small_height--compact, 28px)"
        }
    },
    "sizeCheckbox": {
        "auto": {
            "name": "--vkui--size_checkbox",
            "value": "var(--vkui--size_checkbox)"
        },
        "regular": {
            "name": "--vkui--size_checkbox--regular",
            "value": "var(--vkui--size_checkbox--regular, 16px)"
        }
    },
    "sizeArrow": {
        "auto": {
            "name": "--vkui--size_arrow",
            "value": "var(--vkui--size_arrow)"
        },
        "regular": {
            "name": "--vkui--size_arrow--regular",
            "value": "var(--vkui--size_arrow--regular, 8px)"
        }
    },
    "sizeArrowPromo": {
        "auto": {
            "name": "--vkui--size_arrow_promo",
            "value": "var(--vkui--size_arrow_promo)"
        },
        "regular": {
            "name": "--vkui--size_arrow_promo--regular",
            "value": "var(--vkui--size_arrow_promo--regular, 40px)"
        }
    },
    "sizePopupSmall": {
        "auto": {
            "name": "--vkui--size_popup_small",
            "value": "var(--vkui--size_popup_small)"
        },
        "regular": {
            "name": "--vkui--size_popup_small--regular",
            "value": "var(--vkui--size_popup_small--regular, 420px)"
        }
    },
    "sizePopupMedium": {
        "auto": {
            "name": "--vkui--size_popup_medium",
            "value": "var(--vkui--size_popup_medium)"
        },
        "regular": {
            "name": "--vkui--size_popup_medium--regular",
            "value": "var(--vkui--size_popup_medium--regular, 680px)"
        }
    },
    "sizePopupLarge": {
        "auto": {
            "name": "--vkui--size_popup_large",
            "value": "var(--vkui--size_popup_large)"
        },
        "regular": {
            "name": "--vkui--size_popup_large--regular",
            "value": "var(--vkui--size_popup_large--regular, 880px)"
        }
    },
    "sizeFieldHorizontalPadding": {
        "auto": {
            "name": "--vkui--size_field_horizontal_padding",
            "value": "var(--vkui--size_field_horizontal_padding)"
        },
        "regular": {
            "name": "--vkui--size_field_horizontal_padding--regular",
            "value": "var(--vkui--size_field_horizontal_padding--regular, 12px)"
        }
    },
    "sizeButtonPaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_padding_horizontal",
            "value": "var(--vkui--size_button_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_padding_horizontal--regular",
            "value": "var(--vkui--size_button_padding_horizontal--regular, 12px)"
        }
    },
    "sizeArrowPadding": {
        "auto": {
            "name": "--vkui--size_arrow_padding",
            "value": "var(--vkui--size_arrow_padding)"
        },
        "regular": {
            "name": "--vkui--size_arrow_padding--regular",
            "value": "var(--vkui--size_arrow_padding--regular, 12px)"
        }
    },
    "sizeTooltipMargin": {
        "auto": {
            "name": "--vkui--size_tooltip_margin",
            "value": "var(--vkui--size_tooltip_margin)"
        },
        "regular": {
            "name": "--vkui--size_tooltip_margin--regular",
            "value": "var(--vkui--size_tooltip_margin--regular, 8px)"
        }
    },
    "sizeIconUI": {
        "auto": {
            "name": "--vkui--size_icon_u_i",
            "value": "var(--vkui--size_icon_u_i)"
        },
        "regular": {
            "name": "--vkui--size_icon_u_i--regular",
            "value": "var(--vkui--size_icon_u_i--regular, 16px)"
        }
    },
    "sizeAvatarXS": {
        "auto": {
            "name": "--vkui--size_avatar_x_s",
            "value": "var(--vkui--size_avatar_x_s)"
        },
        "regular": {
            "name": "--vkui--size_avatar_x_s--regular",
            "value": "var(--vkui--size_avatar_x_s--regular, 24px)"
        }
    },
    "sizeAvatarS": {
        "auto": {
            "name": "--vkui--size_avatar_s",
            "value": "var(--vkui--size_avatar_s)"
        },
        "regular": {
            "name": "--vkui--size_avatar_s--regular",
            "value": "var(--vkui--size_avatar_s--regular, 32px)"
        }
    },
    "sizeAvatarM": {
        "auto": {
            "name": "--vkui--size_avatar_m",
            "value": "var(--vkui--size_avatar_m)"
        },
        "regular": {
            "name": "--vkui--size_avatar_m--regular",
            "value": "var(--vkui--size_avatar_m--regular, 48px)"
        }
    },
    "sizeAvatarL": {
        "auto": {
            "name": "--vkui--size_avatar_l",
            "value": "var(--vkui--size_avatar_l)"
        },
        "regular": {
            "name": "--vkui--size_avatar_l--regular",
            "value": "var(--vkui--size_avatar_l--regular, 96px)"
        }
    },
    "sizeAvatarXL": {
        "auto": {
            "name": "--vkui--size_avatar_x_l",
            "value": "var(--vkui--size_avatar_x_l)"
        },
        "regular": {
            "name": "--vkui--size_avatar_x_l--regular",
            "value": "var(--vkui--size_avatar_x_l--regular, 128px)"
        }
    },
    "sizeBadgeXS": {
        "auto": {
            "name": "--vkui--size_badge_x_s",
            "value": "var(--vkui--size_badge_x_s)"
        },
        "regular": {
            "name": "--vkui--size_badge_x_s--regular",
            "value": "var(--vkui--size_badge_x_s--regular, 12px)"
        }
    },
    "sizeBadgeS": {
        "auto": {
            "name": "--vkui--size_badge_s",
            "value": "var(--vkui--size_badge_s)"
        },
        "regular": {
            "name": "--vkui--size_badge_s--regular",
            "value": "var(--vkui--size_badge_s--regular, 16px)"
        }
    },
    "sizeBadgeM": {
        "auto": {
            "name": "--vkui--size_badge_m",
            "value": "var(--vkui--size_badge_m)"
        },
        "regular": {
            "name": "--vkui--size_badge_m--regular",
            "value": "var(--vkui--size_badge_m--regular, 24px)"
        }
    },
    "sizeBadgeL": {
        "auto": {
            "name": "--vkui--size_badge_l",
            "value": "var(--vkui--size_badge_l)"
        },
        "regular": {
            "name": "--vkui--size_badge_l--regular",
            "value": "var(--vkui--size_badge_l--regular, 44px)"
        }
    },
    "sizeBadgeXL": {
        "auto": {
            "name": "--vkui--size_badge_x_l",
            "value": "var(--vkui--size_badge_x_l)"
        },
        "regular": {
            "name": "--vkui--size_badge_x_l--regular",
            "value": "var(--vkui--size_badge_x_l--regular, 56px)"
        }
    },
    "sizeCardgridPadding": {
        "auto": {
            "name": "--vkui--size_cardgrid_padding",
            "value": "var(--vkui--size_cardgrid_padding)"
        },
        "regular": {
            "name": "--vkui--size_cardgrid_padding--regular",
            "value": "var(--vkui--size_cardgrid_padding--regular, 8px)"
        }
    },
    "sizeCardBorderRadius": {
        "auto": {
            "name": "--vkui--size_card_border_radius",
            "value": "var(--vkui--size_card_border_radius)"
        },
        "regular": {
            "name": "--vkui--size_card_border_radius--regular",
            "value": "var(--vkui--size_card_border_radius--regular, 8px)"
        }
    },
    "sizeCardgridPaddingVertical": {
        "auto": {
            "name": "--vkui--size_cardgrid_padding_vertical",
            "value": "var(--vkui--size_cardgrid_padding_vertical)"
        },
        "regular": {
            "name": "--vkui--size_cardgrid_padding_vertical--regular",
            "value": "var(--vkui--size_cardgrid_padding_vertical--regular, 8px)"
        }
    },
    "sizeBasePaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_base_padding_horizontal",
            "value": "var(--vkui--size_base_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_base_padding_horizontal--regular",
            "value": "var(--vkui--size_base_padding_horizontal--regular, 16px)"
        }
    },
    "sizeBasePaddingVertical": {
        "auto": {
            "name": "--vkui--size_base_padding_vertical",
            "value": "var(--vkui--size_base_padding_vertical)"
        },
        "regular": {
            "name": "--vkui--size_base_padding_vertical--regular",
            "value": "var(--vkui--size_base_padding_vertical--regular, 12px)"
        }
    },
    "sizeButtonGroupGapSpace": {
        "auto": {
            "name": "--vkui--size_button_group_gap_space",
            "value": "var(--vkui--size_button_group_gap_space)"
        },
        "regular": {
            "name": "--vkui--size_button_group_gap_space--regular",
            "value": "var(--vkui--size_button_group_gap_space--regular, 1px)"
        }
    },
    "sizeButtonGroupGapSmall": {
        "auto": {
            "name": "--vkui--size_button_group_gap_small",
            "value": "var(--vkui--size_button_group_gap_small)"
        },
        "regular": {
            "name": "--vkui--size_button_group_gap_small--regular",
            "value": "var(--vkui--size_button_group_gap_small--regular, 8px)"
        }
    },
    "sizeButtonGroupGapMedium": {
        "auto": {
            "name": "--vkui--size_button_group_gap_medium",
            "value": "var(--vkui--size_button_group_gap_medium)"
        },
        "regular": {
            "name": "--vkui--size_button_group_gap_medium--regular",
            "value": "var(--vkui--size_button_group_gap_medium--regular, 12px)"
        }
    },
    "sizeOptionHierarchy": {
        "auto": {
            "name": "--vkui--size_option_hierarchy",
            "value": "var(--vkui--size_option_hierarchy)"
        },
        "regular": {
            "name": "--vkui--size_option_hierarchy--regular",
            "value": "var(--vkui--size_option_hierarchy--regular, 32px)"
        }
    },
    "sizeSwitchHeight": {
        "auto": {
            "name": "--vkui--size_switch_height",
            "value": "var(--vkui--size_switch_height)"
        },
        "regular": {
            "name": "--vkui--size_switch_height--regular",
            "value": "var(--vkui--size_switch_height--regular, 14px)"
        },
        "compact": {
            "name": "--vkui--size_switch_height--compact",
            "value": "var(--vkui--size_switch_height--compact, 12px)"
        }
    },
    "sizeSwitchWidth": {
        "auto": {
            "name": "--vkui--size_switch_width",
            "value": "var(--vkui--size_switch_width)"
        },
        "regular": {
            "name": "--vkui--size_switch_width--regular",
            "value": "var(--vkui--size_switch_width--regular, 34px)"
        },
        "compact": {
            "name": "--vkui--size_switch_width--compact",
            "value": "var(--vkui--size_switch_width--compact, 32px)"
        }
    },
    "sizeSwitchPin": {
        "auto": {
            "name": "--vkui--size_switch_pin",
            "value": "var(--vkui--size_switch_pin)"
        },
        "regular": {
            "name": "--vkui--size_switch_pin--regular",
            "value": "var(--vkui--size_switch_pin--regular, 20px)"
        },
        "compact": {
            "name": "--vkui--size_switch_pin--compact",
            "value": "var(--vkui--size_switch_pin--compact, 18px)"
        }
    },
    "sizePanelHeaderHeight": {
        "auto": {
            "name": "--vkui--size_panel_header_height",
            "value": "var(--vkui--size_panel_header_height)"
        },
        "regular": {
            "name": "--vkui--size_panel_header_height--regular",
            "value": "var(--vkui--size_panel_header_height--regular, 56px)"
        }
    },
    "sizeButtonBaseSmallPaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_base_small_padding_horizontal",
            "value": "var(--vkui--size_button_base_small_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_base_small_padding_horizontal--regular",
            "value": "var(--vkui--size_button_base_small_padding_horizontal--regular, 16px)"
        }
    },
    "sizeButtonBaseMediumPaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_base_medium_padding_horizontal",
            "value": "var(--vkui--size_button_base_medium_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_base_medium_padding_horizontal--regular",
            "value": "var(--vkui--size_button_base_medium_padding_horizontal--regular, 16px)"
        }
    },
    "sizeButtonBaseLargePaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_base_large_padding_horizontal",
            "value": "var(--vkui--size_button_base_large_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_base_large_padding_horizontal--regular",
            "value": "var(--vkui--size_button_base_large_padding_horizontal--regular, 20px)"
        }
    },
    "sizeButtonBaseSmallPaddingHorizontalIcon": {
        "auto": {
            "name": "--vkui--size_button_base_small_padding_horizontal_icon",
            "value": "var(--vkui--size_button_base_small_padding_horizontal_icon)"
        },
        "regular": {
            "name": "--vkui--size_button_base_small_padding_horizontal_icon--regular",
            "value": "var(--vkui--size_button_base_small_padding_horizontal_icon--regular, 12px)"
        }
    },
    "sizeButtonBaseMediumPaddingHorizontalIcon": {
        "auto": {
            "name": "--vkui--size_button_base_medium_padding_horizontal_icon",
            "value": "var(--vkui--size_button_base_medium_padding_horizontal_icon)"
        },
        "regular": {
            "name": "--vkui--size_button_base_medium_padding_horizontal_icon--regular",
            "value": "var(--vkui--size_button_base_medium_padding_horizontal_icon--regular, 12px)"
        }
    },
    "sizeButtonBaseLargePaddingHorizontalIcon": {
        "auto": {
            "name": "--vkui--size_button_base_large_padding_horizontal_icon",
            "value": "var(--vkui--size_button_base_large_padding_horizontal_icon)"
        },
        "regular": {
            "name": "--vkui--size_button_base_large_padding_horizontal_icon--regular",
            "value": "var(--vkui--size_button_base_large_padding_horizontal_icon--regular, 16px)"
        }
    },
    "sizeButtonTertiarySmallPaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_tertiary_small_padding_horizontal",
            "value": "var(--vkui--size_button_tertiary_small_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_tertiary_small_padding_horizontal--regular",
            "value": "var(--vkui--size_button_tertiary_small_padding_horizontal--regular, 12px)"
        }
    },
    "sizeButtonTertiaryMediumPaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_tertiary_medium_padding_horizontal",
            "value": "var(--vkui--size_button_tertiary_medium_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_tertiary_medium_padding_horizontal--regular",
            "value": "var(--vkui--size_button_tertiary_medium_padding_horizontal--regular, 12px)"
        }
    },
    "sizeButtonTertiaryLargePaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_button_tertiary_large_padding_horizontal",
            "value": "var(--vkui--size_button_tertiary_large_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_button_tertiary_large_padding_horizontal--regular",
            "value": "var(--vkui--size_button_tertiary_large_padding_horizontal--regular, 16px)"
        }
    },
    "sizeButtonTertiarySmallPaddingHorizontalIcon": {
        "auto": {
            "name": "--vkui--size_button_tertiary_small_padding_horizontal_icon",
            "value": "var(--vkui--size_button_tertiary_small_padding_horizontal_icon)"
        },
        "regular": {
            "name": "--vkui--size_button_tertiary_small_padding_horizontal_icon--regular",
            "value": "var(--vkui--size_button_tertiary_small_padding_horizontal_icon--regular, 8px)"
        }
    },
    "sizeButtonTertiaryMediumPaddingHorizontalIcon": {
        "auto": {
            "name": "--vkui--size_button_tertiary_medium_padding_horizontal_icon",
            "value": "var(--vkui--size_button_tertiary_medium_padding_horizontal_icon)"
        },
        "regular": {
            "name": "--vkui--size_button_tertiary_medium_padding_horizontal_icon--regular",
            "value": "var(--vkui--size_button_tertiary_medium_padding_horizontal_icon--regular, 8px)"
        }
    },
    "sizeButtonTertiaryLargePaddingHorizontalIcon": {
        "auto": {
            "name": "--vkui--size_button_tertiary_large_padding_horizontal_icon",
            "value": "var(--vkui--size_button_tertiary_large_padding_horizontal_icon)"
        },
        "regular": {
            "name": "--vkui--size_button_tertiary_large_padding_horizontal_icon--regular",
            "value": "var(--vkui--size_button_tertiary_large_padding_horizontal_icon--regular, 12px)"
        }
    },
    "sizeButtonMinimumWidth": {
        "auto": {
            "name": "--vkui--size_button_minimum_width",
            "value": "var(--vkui--size_button_minimum_width)"
        },
        "regular": {
            "name": "--vkui--size_button_minimum_width--regular",
            "value": "var(--vkui--size_button_minimum_width--regular, 80px)"
        }
    },
    "sizeFormItemPaddingVertical": {
        "auto": {
            "name": "--vkui--size_form_item_padding_vertical",
            "value": "var(--vkui--size_form_item_padding_vertical)"
        },
        "regular": {
            "name": "--vkui--size_form_item_padding_vertical--regular",
            "value": "var(--vkui--size_form_item_padding_vertical--regular, 12px)"
        }
    },
    "sizeSplitColPaddingHorizontal": {
        "auto": {
            "name": "--vkui--size_split_col_padding_horizontal",
            "value": "var(--vkui--size_split_col_padding_horizontal)"
        },
        "regular": {
            "name": "--vkui--size_split_col_padding_horizontal--regular",
            "value": "var(--vkui--size_split_col_padding_horizontal--regular, 16px)"
        }
    },
    "sizeSubnavigationBarGap": {
        "auto": {
            "name": "--vkui--size_subnavigation_bar_gap",
            "value": "var(--vkui--size_subnavigation_bar_gap)"
        },
        "regular": {
            "name": "--vkui--size_subnavigation_bar_gap--regular",
            "value": "var(--vkui--size_subnavigation_bar_gap--regular, 8px)"
        }
    },
    "sizeSubnavigationBarPaddingVertical": {
        "auto": {
            "name": "--vkui--size_subnavigation_bar_padding_vertical",
            "value": "var(--vkui--size_subnavigation_bar_padding_vertical)"
        },
        "regular": {
            "name": "--vkui--size_subnavigation_bar_padding_vertical--regular",
            "value": "var(--vkui--size_subnavigation_bar_padding_vertical--regular, 12px)"
        }
    },
    "spacingSizeXs": {
        "name": "--vkui--spacing_size_xs",
        "value": "var(--vkui--spacing_size_xs, 4px)"
    },
    "spacingSizeS": {
        "name": "--vkui--spacing_size_s",
        "value": "var(--vkui--spacing_size_s, 6px)"
    },
    "spacingSizeM": {
        "name": "--vkui--spacing_size_m",
        "value": "var(--vkui--spacing_size_m, 8px)"
    },
    "spacingSizeL": {
        "name": "--vkui--spacing_size_l",
        "value": "var(--vkui--spacing_size_l, 10px)"
    },
    "spacingSizeXl": {
        "name": "--vkui--spacing_size_xl",
        "value": "var(--vkui--spacing_size_xl, 12px)"
    },
    "animationDurationL": {
        "name": "--vkui--animation_duration_l",
        "value": "var(--vkui--animation_duration_l, 0.4s)"
    },
    "animationDurationM": {
        "name": "--vkui--animation_duration_m",
        "value": "var(--vkui--animation_duration_m, 0.2s)"
    },
    "animationDurationS": {
        "name": "--vkui--animation_duration_s",
        "value": "var(--vkui--animation_duration_s, 0.1s)"
    },
    "animationEasingDefault": {
        "name": "--vkui--animation_easing_default",
        "value": "var(--vkui--animation_easing_default, cubic-bezier(0.3, 0.3, 0.5, 1))"
    },
    "animationEasingPlatform": {
        "name": "--vkui--animation_easing_platform",
        "value": "var(--vkui--animation_easing_platform, cubic-bezier(0.4, 0, 0.2, 1))"
    },
    "opacityDisable": {
        "name": "--vkui--opacity_disable",
        "value": "var(--vkui--opacity_disable, 0.4)"
    },
    "opacityDisableAccessibility": {
        "name": "--vkui--opacity_disable_accessibility",
        "value": "var(--vkui--opacity_disable_accessibility, 0.64)"
    },
    "zIndexModal": {
        "name": "--vkui--z_index_modal",
        "value": "var(--vkui--z_index_modal, 99)"
    },
    "zIndexPopout": {
        "name": "--vkui--z_index_popout",
        "value": "var(--vkui--z_index_popout, 100)"
    },
    "fontHeadline": {
        "auto": {
            "fontSize": {
                "name": "--vkui--font_headline--font_size",
                "value": "var(--vkui--font_headline--font_size)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline--line_height",
                "value": "var(--vkui--font_headline--line_height)"
            },
            "fontFamily": {
                "name": "--vkui--font_headline--font_family",
                "value": "var(--vkui--font_headline--font_family)"
            },
            "fontWeight": {
                "name": "--vkui--font_headline--font_weight",
                "value": "var(--vkui--font_headline--font_weight)"
            }
        },
        "regular": {
            "fontSize": {
                "name": "--vkui--font_headline--font_size--regular",
                "value": "var(--vkui--font_headline--font_size--regular, 16px)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline--line_height--regular",
                "value": "var(--vkui--font_headline--line_height--regular, 20px)"
            },
            "fontFamily": {
                "name": "--vkui--font_headline--font_family--regular",
                "value": "var(--vkui--font_headline--font_family--regular, -apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif)"
            },
            "fontWeight": {
                "name": "--vkui--font_headline--font_weight--regular",
                "value": "var(--vkui--font_headline--font_weight--regular, 500)"
            }
        },
        "compact": {
            "fontSize": {
                "name": "--vkui--font_headline--font_size--compact",
                "value": "var(--vkui--font_headline--font_size--compact, 15px)"
            },
            "lineHeight": {
                "name": "--vkui--font_headline--line_height--compact",
                "value": "var(--vkui--font_headline--line_height--compact, 20px)"
            }
        }
    },
    "colorsScheme": {
        "name": "--vkui--colors_scheme",
        "value": "var(--vkui--colors_scheme, light)"
    },
    "colorBackgroundAccent": {
        "normal": {
            "name": "--vkui--color_background_accent",
            "value": "var(--vkui--color_background_accent, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_background_accent--hover",
            "value": "var(--vkui--color_background_accent--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_background_accent--active",
            "value": "var(--vkui--color_background_accent--active, #E76519)"
        }
    },
    "colorBackgroundAccentThemed": {
        "normal": {
            "name": "--vkui--color_background_accent_themed",
            "value": "var(--vkui--color_background_accent_themed, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_background_accent_themed--hover",
            "value": "var(--vkui--color_background_accent_themed--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_background_accent_themed--active",
            "value": "var(--vkui--color_background_accent_themed--active, #E76519)"
        }
    },
    "colorBackgroundAccentTint": {
        "normal": {
            "name": "--vkui--color_background_accent_tint",
            "value": "var(--vkui--color_background_accent_tint, #f38d52)"
        },
        "hover": {
            "name": "--vkui--color_background_accent_tint--hover",
            "value": "var(--vkui--color_background_accent_tint--hover, #E98851)"
        },
        "active": {
            "name": "--vkui--color_background_accent_tint--active",
            "value": "var(--vkui--color_background_accent_tint--active, #E08350)"
        }
    },
    "colorBackgroundAccentAlternative": {
        "normal": {
            "name": "--vkui--color_background_accent_alternative",
            "value": "var(--vkui--color_background_accent_alternative, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_background_accent_alternative--hover",
            "value": "var(--vkui--color_background_accent_alternative--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_background_accent_alternative--active",
            "value": "var(--vkui--color_background_accent_alternative--active, #E76519)"
        }
    },
    "colorBackground": {
        "normal": {
            "name": "--vkui--color_background",
            "value": "var(--vkui--color_background, #EBEDF0)"
        },
        "hover": {
            "name": "--vkui--color_background--hover",
            "value": "var(--vkui--color_background--hover, #E2E4E9)"
        },
        "active": {
            "name": "--vkui--color_background--active",
            "value": "var(--vkui--color_background--active, #D8DBE2)"
        }
    },
    "colorBackgroundContent": {
        "normal": {
            "name": "--vkui--color_background_content",
            "value": "var(--vkui--color_background_content, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_background_content--hover",
            "value": "var(--vkui--color_background_content--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_background_content--active",
            "value": "var(--vkui--color_background_content--active, #EBECEF)"
        }
    },
    "colorBackgroundSecondary": {
        "normal": {
            "name": "--vkui--color_background_secondary",
            "value": "var(--vkui--color_background_secondary, #F5F5F5)"
        },
        "hover": {
            "name": "--vkui--color_background_secondary--hover",
            "value": "var(--vkui--color_background_secondary--hover, #EBECEE)"
        },
        "active": {
            "name": "--vkui--color_background_secondary--active",
            "value": "var(--vkui--color_background_secondary--active, #E1E3E6)"
        }
    },
    "colorBackgroundSecondaryAlpha": {
        "normal": {
            "name": "--vkui--color_background_secondary_alpha",
            "value": "var(--vkui--color_background_secondary_alpha, rgba(0, 0, 0, 0.04))"
        },
        "hover": {
            "name": "--vkui--color_background_secondary_alpha--hover",
            "value": "var(--vkui--color_background_secondary_alpha--hover, rgba(0, 0, 0, 0.08))"
        },
        "active": {
            "name": "--vkui--color_background_secondary_alpha--active",
            "value": "var(--vkui--color_background_secondary_alpha--active, rgba(0, 0, 0, 0.12))"
        }
    },
    "colorBackgroundTertiary": {
        "normal": {
            "name": "--vkui--color_background_tertiary",
            "value": "var(--vkui--color_background_tertiary, #F9F9F9)"
        },
        "hover": {
            "name": "--vkui--color_background_tertiary--hover",
            "value": "var(--vkui--color_background_tertiary--hover, #EFF0F1)"
        },
        "active": {
            "name": "--vkui--color_background_tertiary--active",
            "value": "var(--vkui--color_background_tertiary--active, #E5E6EA)"
        }
    },
    "colorBackgroundTertiaryAlpha": {
        "normal": {
            "name": "--vkui--color_background_tertiary_alpha",
            "value": "var(--vkui--color_background_tertiary_alpha, rgba(0, 0, 0, 0.03))"
        },
        "hover": {
            "name": "--vkui--color_background_tertiary_alpha--hover",
            "value": "var(--vkui--color_background_tertiary_alpha--hover, rgba(0, 0, 0, 0.07))"
        },
        "active": {
            "name": "--vkui--color_background_tertiary_alpha--active",
            "value": "var(--vkui--color_background_tertiary_alpha--active, rgba(0, 0, 0, 0.11))"
        }
    },
    "colorBackgroundContrast": {
        "normal": {
            "name": "--vkui--color_background_contrast",
            "value": "var(--vkui--color_background_contrast, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_background_contrast--hover",
            "value": "var(--vkui--color_background_contrast--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_background_contrast--active",
            "value": "var(--vkui--color_background_contrast--active, #EBECEF)"
        }
    },
    "colorBackgroundContrastSecondaryAlpha": {
        "normal": {
            "name": "--vkui--color_background_contrast_secondary_alpha",
            "value": "var(--vkui--color_background_contrast_secondary_alpha, rgba(255, 255, 255, 0.2))"
        },
        "hover": {
            "name": "--vkui--color_background_contrast_secondary_alpha--hover",
            "value": "var(--vkui--color_background_contrast_secondary_alpha--hover, rgba(255, 255, 255, 0.24))"
        },
        "active": {
            "name": "--vkui--color_background_contrast_secondary_alpha--active",
            "value": "var(--vkui--color_background_contrast_secondary_alpha--active, rgba(255, 255, 255, 0.28))"
        }
    },
    "colorBackgroundContrastInverse": {
        "normal": {
            "name": "--vkui--color_background_contrast_inverse",
            "value": "var(--vkui--color_background_contrast_inverse, #2C2D2E)"
        },
        "hover": {
            "name": "--vkui--color_background_contrast_inverse--hover",
            "value": "var(--vkui--color_background_contrast_inverse--hover, #2A2C2F)"
        },
        "active": {
            "name": "--vkui--color_background_contrast_inverse--active",
            "value": "var(--vkui--color_background_contrast_inverse--active, #282B2F)"
        }
    },
    "colorBackgroundModal": {
        "normal": {
            "name": "--vkui--color_background_modal",
            "value": "var(--vkui--color_background_modal, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_background_modal--hover",
            "value": "var(--vkui--color_background_modal--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_background_modal--active",
            "value": "var(--vkui--color_background_modal--active, #EBECEF)"
        }
    },
    "colorBackgroundModalInverse": {
        "normal": {
            "name": "--vkui--color_background_modal_inverse",
            "value": "var(--vkui--color_background_modal_inverse, #2d2d2e)"
        },
        "hover": {
            "name": "--vkui--color_background_modal_inverse--hover",
            "value": "var(--vkui--color_background_modal_inverse--hover, #2B2C2F)"
        },
        "active": {
            "name": "--vkui--color_background_modal_inverse--active",
            "value": "var(--vkui--color_background_modal_inverse--active, #292B2F)"
        }
    },
    "colorBackgroundWarning": {
        "normal": {
            "name": "--vkui--color_background_warning",
            "value": "var(--vkui--color_background_warning, #FFF2D6)"
        },
        "hover": {
            "name": "--vkui--color_background_warning--hover",
            "value": "var(--vkui--color_background_warning--hover, #F5E9D0)"
        },
        "active": {
            "name": "--vkui--color_background_warning--active",
            "value": "var(--vkui--color_background_warning--active, #EBE0CA)"
        }
    },
    "colorBackgroundPositive": {
        "normal": {
            "name": "--vkui--color_background_positive",
            "value": "var(--vkui--color_background_positive, #4BB34B)"
        },
        "hover": {
            "name": "--vkui--color_background_positive--hover",
            "value": "var(--vkui--color_background_positive--hover, #48AC4A)"
        },
        "active": {
            "name": "--vkui--color_background_positive--active",
            "value": "var(--vkui--color_background_positive--active, #45A64A)"
        }
    },
    "colorBackgroundNegative": {
        "normal": {
            "name": "--vkui--color_background_negative",
            "value": "var(--vkui--color_background_negative, #E64646)"
        },
        "hover": {
            "name": "--vkui--color_background_negative--hover",
            "value": "var(--vkui--color_background_negative--hover, #DD4446)"
        },
        "active": {
            "name": "--vkui--color_background_negative--active",
            "value": "var(--vkui--color_background_negative--active, #D44245)"
        }
    },
    "colorBackgroundNegativeTint": {
        "normal": {
            "name": "--vkui--color_background_negative_tint",
            "value": "var(--vkui--color_background_negative_tint, #FAEBEB)"
        },
        "hover": {
            "name": "--vkui--color_background_negative_tint--hover",
            "value": "var(--vkui--color_background_negative_tint--hover, #F0E2E4)"
        },
        "active": {
            "name": "--vkui--color_background_negative_tint--active",
            "value": "var(--vkui--color_background_negative_tint--active, #E6D9DD)"
        }
    },
    "colorBackgroundPositiveTint": {
        "normal": {
            "name": "--vkui--color_background_positive_tint",
            "value": "var(--vkui--color_background_positive_tint, #E8f9e8)"
        },
        "hover": {
            "name": "--vkui--color_background_positive_tint--hover",
            "value": "var(--vkui--color_background_positive_tint--hover, #DFF0E1)"
        },
        "active": {
            "name": "--vkui--color_background_positive_tint--active",
            "value": "var(--vkui--color_background_positive_tint--active, #D5E6DA)"
        }
    },
    "colorFieldBackground": {
        "normal": {
            "name": "--vkui--color_field_background",
            "value": "var(--vkui--color_field_background, #f2f3f5)"
        },
        "hover": {
            "name": "--vkui--color_field_background--hover",
            "value": "var(--vkui--color_field_background--hover, #E8EAEE)"
        },
        "active": {
            "name": "--vkui--color_field_background--active",
            "value": "var(--vkui--color_field_background--active, #DFE1E6)"
        }
    },
    "colorHeaderBackground": {
        "normal": {
            "name": "--vkui--color_header_background",
            "value": "var(--vkui--color_header_background, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_header_background--hover",
            "value": "var(--vkui--color_header_background--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_header_background--active",
            "value": "var(--vkui--color_header_background--active, #EBECEF)"
        }
    },
    "colorTextAccent": {
        "normal": {
            "name": "--vkui--color_text_accent",
            "value": "var(--vkui--color_text_accent, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_text_accent--hover",
            "value": "var(--vkui--color_text_accent--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_text_accent--active",
            "value": "var(--vkui--color_text_accent--active, #E76519)"
        }
    },
    "colorTextAccentThemed": {
        "normal": {
            "name": "--vkui--color_text_accent_themed",
            "value": "var(--vkui--color_text_accent_themed, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_text_accent_themed--hover",
            "value": "var(--vkui--color_text_accent_themed--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_text_accent_themed--active",
            "value": "var(--vkui--color_text_accent_themed--active, #E76519)"
        }
    },
    "colorTextPrimary": {
        "normal": {
            "name": "--vkui--color_text_primary",
            "value": "var(--vkui--color_text_primary, #000000)"
        },
        "hover": {
            "name": "--vkui--color_text_primary--hover",
            "value": "var(--vkui--color_text_primary--hover, #000102)"
        },
        "active": {
            "name": "--vkui--color_text_primary--active",
            "value": "var(--vkui--color_text_primary--active, #000105)"
        }
    },
    "colorTextPrimaryInvariably": {
        "normal": {
            "name": "--vkui--color_text_primary_invariably",
            "value": "var(--vkui--color_text_primary_invariably, #000000)"
        },
        "hover": {
            "name": "--vkui--color_text_primary_invariably--hover",
            "value": "var(--vkui--color_text_primary_invariably--hover, #000102)"
        },
        "active": {
            "name": "--vkui--color_text_primary_invariably--active",
            "value": "var(--vkui--color_text_primary_invariably--active, #000105)"
        }
    },
    "colorTextSecondary": {
        "normal": {
            "name": "--vkui--color_text_secondary",
            "value": "var(--vkui--color_text_secondary, #818C99)"
        },
        "hover": {
            "name": "--vkui--color_text_secondary--hover",
            "value": "var(--vkui--color_text_secondary--hover, #7C8795)"
        },
        "active": {
            "name": "--vkui--color_text_secondary--active",
            "value": "var(--vkui--color_text_secondary--active, #778292)"
        }
    },
    "colorTextSubhead": {
        "normal": {
            "name": "--vkui--color_text_subhead",
            "value": "var(--vkui--color_text_subhead, #6D7885)"
        },
        "hover": {
            "name": "--vkui--color_text_subhead--hover",
            "value": "var(--vkui--color_text_subhead--hover, #697482)"
        },
        "active": {
            "name": "--vkui--color_text_subhead--active",
            "value": "var(--vkui--color_text_subhead--active, #64707F)"
        }
    },
    "colorTextTertiary": {
        "normal": {
            "name": "--vkui--color_text_tertiary",
            "value": "var(--vkui--color_text_tertiary, #99A2AD)"
        },
        "hover": {
            "name": "--vkui--color_text_tertiary--hover",
            "value": "var(--vkui--color_text_tertiary--hover, #939CA9)"
        },
        "active": {
            "name": "--vkui--color_text_tertiary--active",
            "value": "var(--vkui--color_text_tertiary--active, #8D96A4)"
        }
    },
    "colorTextContrast": {
        "normal": {
            "name": "--vkui--color_text_contrast",
            "value": "var(--vkui--color_text_contrast, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_text_contrast--hover",
            "value": "var(--vkui--color_text_contrast--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_text_contrast--active",
            "value": "var(--vkui--color_text_contrast--active, #EBECEF)"
        }
    },
    "colorTextContrastThemed": {
        "normal": {
            "name": "--vkui--color_text_contrast_themed",
            "value": "var(--vkui--color_text_contrast_themed, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_text_contrast_themed--hover",
            "value": "var(--vkui--color_text_contrast_themed--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_text_contrast_themed--active",
            "value": "var(--vkui--color_text_contrast_themed--active, #EBECEF)"
        }
    },
    "colorTextPositive": {
        "normal": {
            "name": "--vkui--color_text_positive",
            "value": "var(--vkui--color_text_positive, #4BB34B)"
        },
        "hover": {
            "name": "--vkui--color_text_positive--hover",
            "value": "var(--vkui--color_text_positive--hover, #48AC4A)"
        },
        "active": {
            "name": "--vkui--color_text_positive--active",
            "value": "var(--vkui--color_text_positive--active, #45A64A)"
        }
    },
    "colorTextNegative": {
        "normal": {
            "name": "--vkui--color_text_negative",
            "value": "var(--vkui--color_text_negative, #E64646)"
        },
        "hover": {
            "name": "--vkui--color_text_negative--hover",
            "value": "var(--vkui--color_text_negative--hover, #DD4446)"
        },
        "active": {
            "name": "--vkui--color_text_negative--active",
            "value": "var(--vkui--color_text_negative--active, #D44245)"
        }
    },
    "colorTextLink": {
        "normal": {
            "name": "--vkui--color_text_link",
            "value": "var(--vkui--color_text_link, #2D81E0)"
        },
        "hover": {
            "name": "--vkui--color_text_link--hover",
            "value": "var(--vkui--color_text_link--hover, #2B7CD9)"
        },
        "active": {
            "name": "--vkui--color_text_link--active",
            "value": "var(--vkui--color_text_link--active, #2978D3)"
        }
    },
    "colorTextLinkThemed": {
        "normal": {
            "name": "--vkui--color_text_link_themed",
            "value": "var(--vkui--color_text_link_themed, #2D81E0)"
        },
        "hover": {
            "name": "--vkui--color_text_link_themed--hover",
            "value": "var(--vkui--color_text_link_themed--hover, #2B7CD9)"
        },
        "active": {
            "name": "--vkui--color_text_link_themed--active",
            "value": "var(--vkui--color_text_link_themed--active, #2978D3)"
        }
    },
    "colorTextLinkVisited": {
        "normal": {
            "name": "--vkui--color_text_link_visited",
            "value": "var(--vkui--color_text_link_visited, #4986CC)"
        },
        "hover": {
            "name": "--vkui--color_text_link_visited--hover",
            "value": "var(--vkui--color_text_link_visited--hover, #4681C6)"
        },
        "active": {
            "name": "--vkui--color_text_link_visited--active",
            "value": "var(--vkui--color_text_link_visited--active, #437DC1)"
        }
    },
    "colorTextMuted": {
        "normal": {
            "name": "--vkui--color_text_muted",
            "value": "var(--vkui--color_text_muted, #2C2D2E)"
        },
        "hover": {
            "name": "--vkui--color_text_muted--hover",
            "value": "var(--vkui--color_text_muted--hover, #2A2C2F)"
        },
        "active": {
            "name": "--vkui--color_text_muted--active",
            "value": "var(--vkui--color_text_muted--active, #282B2F)"
        }
    },
    "colorLinkContrast": {
        "normal": {
            "name": "--vkui--color_link_contrast",
            "value": "var(--vkui--color_link_contrast, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_link_contrast--hover",
            "value": "var(--vkui--color_link_contrast--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_link_contrast--active",
            "value": "var(--vkui--color_link_contrast--active, #EBECEF)"
        }
    },
    "colorIconAccent": {
        "normal": {
            "name": "--vkui--color_icon_accent",
            "value": "var(--vkui--color_icon_accent, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_icon_accent--hover",
            "value": "var(--vkui--color_icon_accent--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_icon_accent--active",
            "value": "var(--vkui--color_icon_accent--active, #E76519)"
        }
    },
    "colorIconAccentThemed": {
        "normal": {
            "name": "--vkui--color_icon_accent_themed",
            "value": "var(--vkui--color_icon_accent_themed, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_icon_accent_themed--hover",
            "value": "var(--vkui--color_icon_accent_themed--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_icon_accent_themed--active",
            "value": "var(--vkui--color_icon_accent_themed--active, #E76519)"
        }
    },
    "colorIconPrimary": {
        "normal": {
            "name": "--vkui--color_icon_primary",
            "value": "var(--vkui--color_icon_primary, #2C2D2E)"
        },
        "hover": {
            "name": "--vkui--color_icon_primary--hover",
            "value": "var(--vkui--color_icon_primary--hover, #2A2C2F)"
        },
        "active": {
            "name": "--vkui--color_icon_primary--active",
            "value": "var(--vkui--color_icon_primary--active, #282B2F)"
        }
    },
    "colorIconPrimaryInvariably": {
        "normal": {
            "name": "--vkui--color_icon_primary_invariably",
            "value": "var(--vkui--color_icon_primary_invariably, #2C2D2E)"
        },
        "hover": {
            "name": "--vkui--color_icon_primary_invariably--hover",
            "value": "var(--vkui--color_icon_primary_invariably--hover, #2A2C2F)"
        },
        "active": {
            "name": "--vkui--color_icon_primary_invariably--active",
            "value": "var(--vkui--color_icon_primary_invariably--active, #282B2F)"
        }
    },
    "colorIconMedium": {
        "normal": {
            "name": "--vkui--color_icon_medium",
            "value": "var(--vkui--color_icon_medium, #818C99)"
        },
        "hover": {
            "name": "--vkui--color_icon_medium--hover",
            "value": "var(--vkui--color_icon_medium--hover, #7C8795)"
        },
        "active": {
            "name": "--vkui--color_icon_medium--active",
            "value": "var(--vkui--color_icon_medium--active, #778292)"
        }
    },
    "colorIconMediumAlpha": {
        "normal": {
            "name": "--vkui--color_icon_medium_alpha",
            "value": "var(--vkui--color_icon_medium_alpha, rgba(0, 0, 0, 0.48))"
        },
        "hover": {
            "name": "--vkui--color_icon_medium_alpha--hover",
            "value": "var(--vkui--color_icon_medium_alpha--hover, rgba(0, 0, 0, 0.52))"
        },
        "active": {
            "name": "--vkui--color_icon_medium_alpha--active",
            "value": "var(--vkui--color_icon_medium_alpha--active, rgba(0, 0, 0, 0.56))"
        }
    },
    "colorIconSecondary": {
        "normal": {
            "name": "--vkui--color_icon_secondary",
            "value": "var(--vkui--color_icon_secondary, #99A2AD)"
        },
        "hover": {
            "name": "--vkui--color_icon_secondary--hover",
            "value": "var(--vkui--color_icon_secondary--hover, #939CA9)"
        },
        "active": {
            "name": "--vkui--color_icon_secondary--active",
            "value": "var(--vkui--color_icon_secondary--active, #8D96A4)"
        }
    },
    "colorIconSecondaryAlpha": {
        "normal": {
            "name": "--vkui--color_icon_secondary_alpha",
            "value": "var(--vkui--color_icon_secondary_alpha, rgba(0, 0, 0, 0.36))"
        },
        "hover": {
            "name": "--vkui--color_icon_secondary_alpha--hover",
            "value": "var(--vkui--color_icon_secondary_alpha--hover, rgba(0, 0, 0, 0.4))"
        },
        "active": {
            "name": "--vkui--color_icon_secondary_alpha--active",
            "value": "var(--vkui--color_icon_secondary_alpha--active, rgba(0, 0, 0, 0.44))"
        }
    },
    "colorIconTertiary": {
        "normal": {
            "name": "--vkui--color_icon_tertiary",
            "value": "var(--vkui--color_icon_tertiary, #B8C1CC)"
        },
        "hover": {
            "name": "--vkui--color_icon_tertiary--hover",
            "value": "var(--vkui--color_icon_tertiary--hover, #B1BAC6)"
        },
        "active": {
            "name": "--vkui--color_icon_tertiary--active",
            "value": "var(--vkui--color_icon_tertiary--active, #A9B3C1)"
        }
    },
    "colorIconTertiaryAlpha": {
        "normal": {
            "name": "--vkui--color_icon_tertiary_alpha",
            "value": "var(--vkui--color_icon_tertiary_alpha, rgba(0, 0, 0, 0.24))"
        },
        "hover": {
            "name": "--vkui--color_icon_tertiary_alpha--hover",
            "value": "var(--vkui--color_icon_tertiary_alpha--hover, rgba(0, 0, 0, 0.28))"
        },
        "active": {
            "name": "--vkui--color_icon_tertiary_alpha--active",
            "value": "var(--vkui--color_icon_tertiary_alpha--active, rgba(0, 0, 0, 0.32))"
        }
    },
    "colorIconContrast": {
        "normal": {
            "name": "--vkui--color_icon_contrast",
            "value": "var(--vkui--color_icon_contrast, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_icon_contrast--hover",
            "value": "var(--vkui--color_icon_contrast--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_icon_contrast--active",
            "value": "var(--vkui--color_icon_contrast--active, #EBECEF)"
        }
    },
    "colorIconContrastThemed": {
        "normal": {
            "name": "--vkui--color_icon_contrast_themed",
            "value": "var(--vkui--color_icon_contrast_themed, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_icon_contrast_themed--hover",
            "value": "var(--vkui--color_icon_contrast_themed--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_icon_contrast_themed--active",
            "value": "var(--vkui--color_icon_contrast_themed--active, #EBECEF)"
        }
    },
    "colorIconContrastSecondary": {
        "normal": {
            "name": "--vkui--color_icon_contrast_secondary",
            "value": "var(--vkui--color_icon_contrast_secondary, #F2F3F5)"
        },
        "hover": {
            "name": "--vkui--color_icon_contrast_secondary--hover",
            "value": "var(--vkui--color_icon_contrast_secondary--hover, #E8EAEE)"
        },
        "active": {
            "name": "--vkui--color_icon_contrast_secondary--active",
            "value": "var(--vkui--color_icon_contrast_secondary--active, #DFE1E6)"
        }
    },
    "colorIconPositive": {
        "normal": {
            "name": "--vkui--color_icon_positive",
            "value": "var(--vkui--color_icon_positive, #4BB34B)"
        },
        "hover": {
            "name": "--vkui--color_icon_positive--hover",
            "value": "var(--vkui--color_icon_positive--hover, #48AC4A)"
        },
        "active": {
            "name": "--vkui--color_icon_positive--active",
            "value": "var(--vkui--color_icon_positive--active, #45A64A)"
        }
    },
    "colorIconNegative": {
        "normal": {
            "name": "--vkui--color_icon_negative",
            "value": "var(--vkui--color_icon_negative, #E64646)"
        },
        "hover": {
            "name": "--vkui--color_icon_negative--hover",
            "value": "var(--vkui--color_icon_negative--hover, #DD4446)"
        },
        "active": {
            "name": "--vkui--color_icon_negative--active",
            "value": "var(--vkui--color_icon_negative--active, #D44245)"
        }
    },
    "colorStrokeAccent": {
        "normal": {
            "name": "--vkui--color_stroke_accent",
            "value": "var(--vkui--color_stroke_accent, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_stroke_accent--hover",
            "value": "var(--vkui--color_stroke_accent--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_stroke_accent--active",
            "value": "var(--vkui--color_stroke_accent--active, #E76519)"
        }
    },
    "colorStrokeAccentThemed": {
        "normal": {
            "name": "--vkui--color_stroke_accent_themed",
            "value": "var(--vkui--color_stroke_accent_themed, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_stroke_accent_themed--hover",
            "value": "var(--vkui--color_stroke_accent_themed--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_stroke_accent_themed--active",
            "value": "var(--vkui--color_stroke_accent_themed--active, #E76519)"
        }
    },
    "colorSeparatorPrimary": {
        "normal": {
            "name": "--vkui--color_separator_primary",
            "value": "var(--vkui--color_separator_primary, #D7D8D9)"
        },
        "hover": {
            "name": "--vkui--color_separator_primary--hover",
            "value": "var(--vkui--color_separator_primary--hover, #CED0D3)"
        },
        "active": {
            "name": "--vkui--color_separator_primary--active",
            "value": "var(--vkui--color_separator_primary--active, #C6C8CD)"
        }
    },
    "colorSeparatorPrimary2x": {
        "normal": {
            "name": "--vkui--color_separator_primary2x",
            "value": "var(--vkui--color_separator_primary2x, #cbcccd)"
        },
        "hover": {
            "name": "--vkui--color_separator_primary2x--hover",
            "value": "var(--vkui--color_separator_primary2x--hover, #C3C4C7)"
        },
        "active": {
            "name": "--vkui--color_separator_primary2x--active",
            "value": "var(--vkui--color_separator_primary2x--active, #BBBDC1)"
        }
    },
    "colorSeparatorPrimary3x": {
        "normal": {
            "name": "--vkui--color_separator_primary3x",
            "value": "var(--vkui--color_separator_primary3x, #bebfc1)"
        },
        "hover": {
            "name": "--vkui--color_separator_primary3x--hover",
            "value": "var(--vkui--color_separator_primary3x--hover, #B6B8BC)"
        },
        "active": {
            "name": "--vkui--color_separator_primary3x--active",
            "value": "var(--vkui--color_separator_primary3x--active, #AFB1B6)"
        }
    },
    "colorSeparatorPrimaryAlpha": {
        "normal": {
            "name": "--vkui--color_separator_primary_alpha",
            "value": "var(--vkui--color_separator_primary_alpha, rgba(0, 0, 0, 0.12))"
        },
        "hover": {
            "name": "--vkui--color_separator_primary_alpha--hover",
            "value": "var(--vkui--color_separator_primary_alpha--hover, rgba(0, 0, 0, 0.16))"
        },
        "active": {
            "name": "--vkui--color_separator_primary_alpha--active",
            "value": "var(--vkui--color_separator_primary_alpha--active, rgba(0, 0, 0, 0.2))"
        }
    },
    "colorSeparatorSecondary": {
        "normal": {
            "name": "--vkui--color_separator_secondary",
            "value": "var(--vkui--color_separator_secondary, #E1E3E6)"
        },
        "hover": {
            "name": "--vkui--color_separator_secondary--hover",
            "value": "var(--vkui--color_separator_secondary--hover, #D8DBDF)"
        },
        "active": {
            "name": "--vkui--color_separator_secondary--active",
            "value": "var(--vkui--color_separator_secondary--active, #CFD2D8)"
        }
    },
    "colorStrokePositive": {
        "normal": {
            "name": "--vkui--color_stroke_positive",
            "value": "var(--vkui--color_stroke_positive, #4BB34B)"
        },
        "hover": {
            "name": "--vkui--color_stroke_positive--hover",
            "value": "var(--vkui--color_stroke_positive--hover, #48AC4A)"
        },
        "active": {
            "name": "--vkui--color_stroke_positive--active",
            "value": "var(--vkui--color_stroke_positive--active, #45A64A)"
        }
    },
    "colorStrokeNegative": {
        "normal": {
            "name": "--vkui--color_stroke_negative",
            "value": "var(--vkui--color_stroke_negative, #E64646)"
        },
        "hover": {
            "name": "--vkui--color_stroke_negative--hover",
            "value": "var(--vkui--color_stroke_negative--hover, #DD4446)"
        },
        "active": {
            "name": "--vkui--color_stroke_negative--active",
            "value": "var(--vkui--color_stroke_negative--active, #D44245)"
        }
    },
    "colorStrokeContrast": {
        "normal": {
            "name": "--vkui--color_stroke_contrast",
            "value": "var(--vkui--color_stroke_contrast, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_stroke_contrast--hover",
            "value": "var(--vkui--color_stroke_contrast--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_stroke_contrast--active",
            "value": "var(--vkui--color_stroke_contrast--active, #EBECEF)"
        }
    },
    "colorImageBorderAlpha": {
        "normal": {
            "name": "--vkui--color_image_border_alpha",
            "value": "var(--vkui--color_image_border_alpha, rgba(0, 0, 0, 0.08))"
        },
        "hover": {
            "name": "--vkui--color_image_border_alpha--hover",
            "value": "var(--vkui--color_image_border_alpha--hover, rgba(0, 0, 0, 0.12))"
        },
        "active": {
            "name": "--vkui--color_image_border_alpha--active",
            "value": "var(--vkui--color_image_border_alpha--active, rgba(0, 0, 0, 0.16))"
        }
    },
    "colorFieldBorderAlpha": {
        "normal": {
            "name": "--vkui--color_field_border_alpha",
            "value": "var(--vkui--color_field_border_alpha, rgba(0, 0, 0, 0.12))"
        },
        "hover": {
            "name": "--vkui--color_field_border_alpha--hover",
            "value": "var(--vkui--color_field_border_alpha--hover, rgba(0, 0, 0, 0.24))"
        },
        "active": {
            "name": "--vkui--color_field_border_alpha--active",
            "value": "var(--vkui--color_field_border_alpha--active, rgba(0, 0, 0, 0.36))"
        }
    },
    "colorAccentBlue": {
        "normal": {
            "name": "--vkui--color_accent_blue",
            "value": "var(--vkui--color_accent_blue, #3F8AE0)"
        },
        "hover": {
            "name": "--vkui--color_accent_blue--hover",
            "value": "var(--vkui--color_accent_blue--hover, #3C85D9)"
        },
        "active": {
            "name": "--vkui--color_accent_blue--active",
            "value": "var(--vkui--color_accent_blue--active, #3A80D3)"
        }
    },
    "colorAccentGray": {
        "normal": {
            "name": "--vkui--color_accent_gray",
            "value": "var(--vkui--color_accent_gray, #A3ADB8)"
        },
        "hover": {
            "name": "--vkui--color_accent_gray--hover",
            "value": "var(--vkui--color_accent_gray--hover, #9CA7B3)"
        },
        "active": {
            "name": "--vkui--color_accent_gray--active",
            "value": "var(--vkui--color_accent_gray--active, #96A0AE)"
        }
    },
    "colorAccentRed": {
        "normal": {
            "name": "--vkui--color_accent_red",
            "value": "var(--vkui--color_accent_red, #FF3347)"
        },
        "hover": {
            "name": "--vkui--color_accent_red--hover",
            "value": "var(--vkui--color_accent_red--hover, #F53247)"
        },
        "active": {
            "name": "--vkui--color_accent_red--active",
            "value": "var(--vkui--color_accent_red--active, #EB3046)"
        }
    },
    "colorAccentGreen": {
        "normal": {
            "name": "--vkui--color_accent_green",
            "value": "var(--vkui--color_accent_green, #4BB34B)"
        },
        "hover": {
            "name": "--vkui--color_accent_green--hover",
            "value": "var(--vkui--color_accent_green--hover, #48AC4A)"
        },
        "active": {
            "name": "--vkui--color_accent_green--active",
            "value": "var(--vkui--color_accent_green--active, #45A64A)"
        }
    },
    "colorAccentOrange": {
        "normal": {
            "name": "--vkui--color_accent_orange",
            "value": "var(--vkui--color_accent_orange, #FFA000)"
        },
        "hover": {
            "name": "--vkui--color_accent_orange--hover",
            "value": "var(--vkui--color_accent_orange--hover, #F59A02)"
        },
        "active": {
            "name": "--vkui--color_accent_orange--active",
            "value": "var(--vkui--color_accent_orange--active, #EB9405)"
        }
    },
    "colorAccentPurple": {
        "normal": {
            "name": "--vkui--color_accent_purple",
            "value": "var(--vkui--color_accent_purple, #735CE6)"
        },
        "hover": {
            "name": "--vkui--color_accent_purple--hover",
            "value": "var(--vkui--color_accent_purple--hover, #6E59DF)"
        },
        "active": {
            "name": "--vkui--color_accent_purple--active",
            "value": "var(--vkui--color_accent_purple--active, #6A56D8)"
        }
    },
    "colorAccentViolet": {
        "normal": {
            "name": "--vkui--color_accent_violet",
            "value": "var(--vkui--color_accent_violet, #792EC0)"
        },
        "hover": {
            "name": "--vkui--color_accent_violet--hover",
            "value": "var(--vkui--color_accent_violet--hover, #742DBB)"
        },
        "active": {
            "name": "--vkui--color_accent_violet--active",
            "value": "var(--vkui--color_accent_violet--active, #6F2CB6)"
        }
    },
    "colorAccentRaspberryPink": {
        "normal": {
            "name": "--vkui--color_accent_raspberry_pink",
            "value": "var(--vkui--color_accent_raspberry_pink, #E03FAB)"
        },
        "hover": {
            "name": "--vkui--color_accent_raspberry_pink--hover",
            "value": "var(--vkui--color_accent_raspberry_pink--hover, #D73DA7)"
        },
        "active": {
            "name": "--vkui--color_accent_raspberry_pink--active",
            "value": "var(--vkui--color_accent_raspberry_pink--active, #CE3BA2)"
        }
    },
    "colorAccentSecondary": {
        "normal": {
            "name": "--vkui--color_accent_secondary",
            "value": "var(--vkui--color_accent_secondary, #3F8AE0)"
        },
        "hover": {
            "name": "--vkui--color_accent_secondary--hover",
            "value": "var(--vkui--color_accent_secondary--hover, #3C85D9)"
        },
        "active": {
            "name": "--vkui--color_accent_secondary--active",
            "value": "var(--vkui--color_accent_secondary--active, #3A80D3)"
        }
    },
    "colorOverlayPrimary": {
        "normal": {
            "name": "--vkui--color_overlay_primary",
            "value": "var(--vkui--color_overlay_primary, rgba(0, 0, 0, 0.4))"
        },
        "hover": {
            "name": "--vkui--color_overlay_primary--hover",
            "value": "var(--vkui--color_overlay_primary--hover, rgba(0, 0, 0, 0.44))"
        },
        "active": {
            "name": "--vkui--color_overlay_primary--active",
            "value": "var(--vkui--color_overlay_primary--active, rgba(0, 0, 0, 0.48))"
        }
    },
    "colorAvatarOverlay": {
        "normal": {
            "name": "--vkui--color_avatar_overlay",
            "value": "var(--vkui--color_avatar_overlay, rgba(0, 0, 0, 0.6))"
        },
        "hover": {
            "name": "--vkui--color_avatar_overlay--hover",
            "value": "var(--vkui--color_avatar_overlay--hover, rgba(0, 0, 0, 0.64))"
        },
        "active": {
            "name": "--vkui--color_avatar_overlay--active",
            "value": "var(--vkui--color_avatar_overlay--active, rgba(0, 0, 0, 0.68))"
        }
    },
    "colorAvatarOverlayInverseAlpha": {
        "normal": {
            "name": "--vkui--color_avatar_overlay_inverse_alpha",
            "value": "var(--vkui--color_avatar_overlay_inverse_alpha, rgba(255, 255, 255, 0.85))"
        },
        "hover": {
            "name": "--vkui--color_avatar_overlay_inverse_alpha--hover",
            "value": "var(--vkui--color_avatar_overlay_inverse_alpha--hover, rgba(255, 255, 255, 0.89))"
        },
        "active": {
            "name": "--vkui--color_avatar_overlay_inverse_alpha--active",
            "value": "var(--vkui--color_avatar_overlay_inverse_alpha--active, rgba(255, 255, 255, 0.93))"
        }
    },
    "colorActionSheetText": {
        "normal": {
            "name": "--vkui--color_action_sheet_text",
            "value": "var(--vkui--color_action_sheet_text, #3F8AE0)"
        },
        "hover": {
            "name": "--vkui--color_action_sheet_text--hover",
            "value": "var(--vkui--color_action_sheet_text--hover, #3C85D9)"
        },
        "active": {
            "name": "--vkui--color_action_sheet_text--active",
            "value": "var(--vkui--color_action_sheet_text--active, #3A80D3)"
        }
    },
    "colorImagePlaceholder": {
        "normal": {
            "name": "--vkui--color_image_placeholder",
            "value": "var(--vkui--color_image_placeholder, #F2F3F5)"
        },
        "hover": {
            "name": "--vkui--color_image_placeholder--hover",
            "value": "var(--vkui--color_image_placeholder--hover, #E8EAEE)"
        },
        "active": {
            "name": "--vkui--color_image_placeholder--active",
            "value": "var(--vkui--color_image_placeholder--active, #DFE1E6)"
        }
    },
    "colorImagePlaceholderAlpha": {
        "normal": {
            "name": "--vkui--color_image_placeholder_alpha",
            "value": "var(--vkui--color_image_placeholder_alpha, rgba(0, 28, 61, 0.08))"
        },
        "hover": {
            "name": "--vkui--color_image_placeholder_alpha--hover",
            "value": "var(--vkui--color_image_placeholder_alpha--hover, rgba(0, 28, 61, 0.12))"
        },
        "active": {
            "name": "--vkui--color_image_placeholder_alpha--active",
            "value": "var(--vkui--color_image_placeholder_alpha--active, rgba(0, 28, 61, 0.16))"
        }
    },
    "colorSkeletonFrom": {
        "normal": {
            "name": "--vkui--color_skeleton_from",
            "value": "var(--vkui--color_skeleton_from, #F5F5F5)"
        },
        "hover": {
            "name": "--vkui--color_skeleton_from--hover",
            "value": "var(--vkui--color_skeleton_from--hover, #EBECEE)"
        },
        "active": {
            "name": "--vkui--color_skeleton_from--active",
            "value": "var(--vkui--color_skeleton_from--active, #E1E3E6)"
        }
    },
    "colorSkeletonTo": {
        "normal": {
            "name": "--vkui--color_skeleton_to",
            "value": "var(--vkui--color_skeleton_to, #E1E3E6)"
        },
        "hover": {
            "name": "--vkui--color_skeleton_to--hover",
            "value": "var(--vkui--color_skeleton_to--hover, #D8DBDF)"
        },
        "active": {
            "name": "--vkui--color_skeleton_to--active",
            "value": "var(--vkui--color_skeleton_to--active, #CFD2D8)"
        }
    },
    "colorWriteBarIcon": {
        "normal": {
            "name": "--vkui--color_write_bar_icon",
            "value": "var(--vkui--color_write_bar_icon, #3F8AE0)"
        },
        "hover": {
            "name": "--vkui--color_write_bar_icon--hover",
            "value": "var(--vkui--color_write_bar_icon--hover, #3C85D9)"
        },
        "active": {
            "name": "--vkui--color_write_bar_icon--active",
            "value": "var(--vkui--color_write_bar_icon--active, #3A80D3)"
        }
    },
    "colorWriteBarInputBackground": {
        "normal": {
            "name": "--vkui--color_write_bar_input_background",
            "value": "var(--vkui--color_write_bar_input_background, #F2F3F5)"
        },
        "hover": {
            "name": "--vkui--color_write_bar_input_background--hover",
            "value": "var(--vkui--color_write_bar_input_background--hover, #E8EAEE)"
        },
        "active": {
            "name": "--vkui--color_write_bar_input_background--active",
            "value": "var(--vkui--color_write_bar_input_background--active, #DFE1E6)"
        }
    },
    "colorWriteBarInputBorder": {
        "normal": {
            "name": "--vkui--color_write_bar_input_border",
            "value": "var(--vkui--color_write_bar_input_border, #E1E3E6)"
        },
        "hover": {
            "name": "--vkui--color_write_bar_input_border--hover",
            "value": "var(--vkui--color_write_bar_input_border--hover, #D8DBDF)"
        },
        "active": {
            "name": "--vkui--color_write_bar_input_border--active",
            "value": "var(--vkui--color_write_bar_input_border--active, #CFD2D8)"
        }
    },
    "colorWriteBarInputBorderAlpha": {
        "normal": {
            "name": "--vkui--color_write_bar_input_border_alpha",
            "value": "var(--vkui--color_write_bar_input_border_alpha, rgba(0, 0, 0, 0.08))"
        },
        "hover": {
            "name": "--vkui--color_write_bar_input_border_alpha--hover",
            "value": "var(--vkui--color_write_bar_input_border_alpha--hover, rgba(0, 0, 0, 0.12))"
        },
        "active": {
            "name": "--vkui--color_write_bar_input_border_alpha--active",
            "value": "var(--vkui--color_write_bar_input_border_alpha--active, rgba(0, 0, 0, 0.16))"
        }
    },
    "colorTrackBackground": {
        "normal": {
            "name": "--vkui--color_track_background",
            "value": "var(--vkui--color_track_background, #E1E3E6)"
        },
        "hover": {
            "name": "--vkui--color_track_background--hover",
            "value": "var(--vkui--color_track_background--hover, #D8DBDF)"
        },
        "active": {
            "name": "--vkui--color_track_background--active",
            "value": "var(--vkui--color_track_background--active, #CFD2D8)"
        }
    },
    "colorTrackBuffer": {
        "normal": {
            "name": "--vkui--color_track_buffer",
            "value": "var(--vkui--color_track_buffer, #A0BFE4)"
        },
        "hover": {
            "name": "--vkui--color_track_buffer--hover",
            "value": "var(--vkui--color_track_buffer--hover, #9AB8DD)"
        },
        "active": {
            "name": "--vkui--color_track_buffer--active",
            "value": "var(--vkui--color_track_buffer--active, #93B1D7)"
        }
    },
    "colorSearchFieldBackground": {
        "normal": {
            "name": "--vkui--color_search_field_background",
            "value": "var(--vkui--color_search_field_background, #EBEDF0)"
        },
        "hover": {
            "name": "--vkui--color_search_field_background--hover",
            "value": "var(--vkui--color_search_field_background--hover, #E2E4E9)"
        },
        "active": {
            "name": "--vkui--color_search_field_background--active",
            "value": "var(--vkui--color_search_field_background--active, #D8DBE2)"
        }
    },
    "colorPanelHeaderIcon": {
        "normal": {
            "name": "--vkui--color_panel_header_icon",
            "value": "var(--vkui--color_panel_header_icon, #fb6c16)"
        },
        "hover": {
            "name": "--vkui--color_panel_header_icon--hover",
            "value": "var(--vkui--color_panel_header_icon--hover, #F16818)"
        },
        "active": {
            "name": "--vkui--color_panel_header_icon--active",
            "value": "var(--vkui--color_panel_header_icon--active, #E76519)"
        }
    },
    "colorSegmentedControl": {
        "normal": {
            "name": "--vkui--color_segmented_control",
            "value": "var(--vkui--color_segmented_control, #FFFFFF)"
        },
        "hover": {
            "name": "--vkui--color_segmented_control--hover",
            "value": "var(--vkui--color_segmented_control--hover, #F5F5F7)"
        },
        "active": {
            "name": "--vkui--color_segmented_control--active",
            "value": "var(--vkui--color_segmented_control--active, #EBECEF)"
        }
    },
    "colorTransparent": {
        "normal": {
            "name": "--vkui--color_transparent",
            "value": "var(--vkui--color_transparent, transparent)"
        },
        "hover": {
            "name": "--vkui--color_transparent--hover",
            "value": "var(--vkui--color_transparent--hover, rgba(0, 16, 61, 0.04))"
        },
        "active": {
            "name": "--vkui--color_transparent--active",
            "value": "var(--vkui--color_transparent--active, rgba(0, 16, 61, 0.08))"
        }
    },
    "themeType": "cssVars"
};
exports.default = theme;
