const pluginDirectory = window.location.origin + '/wp-content/plugins/cafe-restaurant-menu-block';
const coverImageUrl = pluginDirectory + '/src/images/2402_3200_matthieu-joannon-6cilddtotgm-unsplash.webp';

export const MY_TEMPLATE = [
    ["core/cover",
        {
            // "url": "https://cafejpcoen.test/wp-content/plugins/woocommerce/assets/images/pattern-placeholders/table-wood-house-chair-floor-window.jpg",
            "url": coverImageUrl,
            "overlayColor": "black",
            // "overlayOpacity": 1,
            "dimRatio": 0, // dimRatio is the correct attribute for overlay opacity
            "align": "full",
            "className": "wpv-cover-image-block"
        },
        [
            ["core/group",
                {
                    "align": "full",
                    "className": "wpv-group-block",
                    "layout": {
                        "type": "flex",
                        "orientation": "horizontal"
                    }
                },
                [
                    ["core/group",
                        {
                            "className": "wpv-vertical-group-block",
                            "layout": {
                                "type": "flex",
                                "orientation": "vertical"
                            }
                        },
                        [
                            ["core/heading",
                                {
                                    "level": 3,
                                    "content": "Koffie & Thee",
                                    "className": "first-block-header"
                                }
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Diverse Nespresso koffie vanaf",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "2.5.",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ]
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Verse muntthee",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "3",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ]
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Germberthee",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "3",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ],
                                ["core/group",
                                    {
                                        "className": "wpv-row-group-block",
                                        "layout": {
                                            "type": "flex",
                                            "orientation": "horizontal"
                                        }
                                    },
                                    [
                                        ["core/paragraph",
                                            {
                                                "content": "Koffie met een tic",
                                                "className": "first-group-paragraph",
                                                "style": {
                                                    "typography": {
                                                        "fontFamily": "'Asap Condensed', sans-serif",
                                                        "fontWeight": "500",
                                                        "fontSize": "15px"
                                                    },
                                                    "color": {
                                                        "text": "#014521"
                                                    }
                                                }
                                            }
                                        ],
                                        ["core/paragraph",
                                            {
                                                "content": "7",
                                                "className": "first-group-paragraph",
                                                "style": {
                                                    "typography": {
                                                        "fontFamily": "'Asap Condensed', sans-serif",
                                                        "fontWeight": "500",
                                                        "fontSize": "15px"
                                                    },
                                                    "color": {
                                                        "text": "#014521"
                                                    }
                                                }
                                            }
                                        ]
                                    ]
                                ],
                                
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Koffie met een tic",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "7",
                                            "className": "first-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ],
                                ["core/group",
                                    {
                                        "className": "wpv-row-group-block",
                                        "layout": {
                                            "type": "flex",
                                            "orientation": "horizontal"
                                        }
                                    },
                                    [
                                        ["core/paragraph",
                                            {
                                                "content": "Ijskoffie",
                                                "className": "first-group-paragraph",
                                                "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                            }
                                        ],
                                        ["core/paragraph",
                                            {
                                                "content": "5",
                                                "className": "first-group-paragraph",
                                                "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                            }
                                        ]
                                    ]
                                ],
                                
                            ]
                        ]
                    ],
                    ["core/group",
                        {
                            "className": "wpv-vertical-group-block",
                            "layout": {
                                "type": "flex",
                                "orientation": "vertical"
                            }
                        },
                        [
                            ["core/heading",
                                {
                                    "level": 3,
                                    "content": "Wijnen",
                                    "className": "second-block-header"
                                }
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Chordonnay Portugal",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "4.5",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ]
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": " Verdego Spanje",
                                            "className": "second-group-paragraph",
                                           "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "4.5",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ]
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Pinot Grigio Italië",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "4.5",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ]
                            ],
                            ["core/group",
                                {
                                    "className": "wpv-row-group-block",
                                    "layout": {
                                        "type": "flex",
                                        "orientation": "horizontal"
                                    }
                                },
                                [
                                    ["core/paragraph",
                                        {
                                            "content": "Cava Spanje",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ],
                                    ["core/paragraph",
                                        {
                                            "content": "4.5",
                                            "className": "second-group-paragraph",
                                            "style": {
                                                "typography": {
                                                    "fontFamily": "'Asap Condensed', sans-serif",
                                                    "fontWeight": "500",
                                                    "fontSize": "15px"
                                                },
                                                "color": {
                                                    "text": "#014521"
                                                }
                                            }
                                        }
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
