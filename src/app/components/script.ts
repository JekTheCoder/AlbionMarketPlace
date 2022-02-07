/* Generate a compatible variable ts from this string */
let str: string = `
   1: UNIQUE_HIDEOUT                                                   : Hideout Construction Kit
   2: T1_FARM_CARROT_SEED                                              : Carrot Seeds
   3: T2_FARM_BEAN_SEED                                                : Bean Seeds
   4: T3_FARM_WHEAT_SEED                                               : Wheat Seeds
   5: T4_FARM_TURNIP_SEED                                              : Turnip Seeds
   6: T5_FARM_CABBAGE_SEED                                             : Cabbage Seeds
   7: T6_FARM_POTATO_SEED                                              : Potato Seeds
   8: T7_FARM_CORN_SEED                                                : Corn Seeds
   9: T8_FARM_PUMPKIN_SEED                                             : Pumpkin Seeds
  10: T2_FARM_AGARIC_SEED                                              : Arcane Agaric Seeds
  11: T3_FARM_COMFREY_SEED                                             : Brightleaf Comfrey Seeds
  12: T4_FARM_BURDOCK_SEED                                             : Crenellated Burdock Seeds
  13: T5_FARM_TEASEL_SEED                                              : Dragon Teasel Seeds
  14: T6_FARM_FOXGLOVE_SEED                                            : Elusive Foxglove Seeds
  15: T7_FARM_MULLEIN_SEED                                             : Firetouched Mullein Seeds
  16: T8_FARM_YARROW_SEED                                              : Ghoul Yarrow Seeds
  17: T3_FARM_OX_BABY                                                  : Journeyman's Ox Calf
  18: T4_FARM_OX_BABY                                                  : Adept's Ox Calf
  19: T5_FARM_OX_BABY                                                  : Expert's Ox Calf
  20: T6_FARM_OX_BABY                                                  : Master's Ox Calf
  21: T7_FARM_OX_BABY                                                  : Grandmaster's Ox Calf
  22: T8_FARM_OX_BABY                                                  : Elder's Ox Calf
  23: T3_FARM_OX_GROWN                                                 : Journeyman's Ox
  24: T4_FARM_OX_GROWN                                                 : Adept's Ox
  25: T5_FARM_OX_GROWN                                                 : Expert's Ox
  26: T6_FARM_OX_GROWN                                                 : Master's Ox
  27: T7_FARM_OX_GROWN                                                 : Grandmaster's Ox
  28: T8_FARM_OX_GROWN                                                 : Elder's Ox
  29: T3_FARM_HORSE_BABY                                               : Journeyman's Foal
  30: T4_FARM_HORSE_BABY                                               : Adept's Foal
  31: T5_FARM_HORSE_BABY                                               : Expert's Foal
  32: T6_FARM_HORSE_BABY                                               : Master's Foal
  33: T7_FARM_HORSE_BABY                                               : Grandmaster's Foal
  34: T8_FARM_HORSE_BABY                                               : Elder's Foal
  35: T3_FARM_HORSE_GROWN                                              : Journeyman's Horse
  36: T4_FARM_HORSE_GROWN                                              : Adept's Horse
  37: T5_FARM_HORSE_GROWN                                              : Expert's Horse
  38: T6_FARM_HORSE_GROWN                                              : Master's Horse
  39: T7_FARM_HORSE_GROWN                                              : Grandmaster's Horse
  40: T8_FARM_HORSE_GROWN                                              : Elder's Horse
  41: T6_FARM_DIREWOLF_BABY                                            : Direwolf Pup
  42: T7_FARM_DIREBOAR_BABY                                            : Direboar Piglet
  43: T8_FARM_DIREBEAR_BABY                                            : Direbear Cub
  44: T7_FARM_SWAMPDRAGON_BABY                                         : Swamp Dragon Pup
  45: T8_FARM_MAMMOTH_BABY                                             : Mammoth Calf
  46: T5_FARM_COUGAR_BABY                                              : Swiftclaw Cub
  47: T8_FARM_DIREWOLF_BABY                                            : Ghostwolf Pup
  48: T4_FARM_GIANTSTAG_BABY                                           : Adept's Fawn
  49: T6_FARM_GIANTSTAG_BABY                                           : Master's Fawn
  50: T6_FARM_GIANTSTAG_MOOSE_BABY                                     : Moose Calf
  51: T5_FARM_MOABIRD_FW_BRIDGEWATCH_BABY                              : Baby Moabird
  52: T5_FARM_DIREBEAR_FW_FORTSTERLING_BABY                            : Winter Bear Cub
  53: T5_FARM_DIREBOAR_FW_LYMHURST_BABY                                : Wild Boarlet
  54: T5_FARM_RAM_FW_MARTLOCK_BABY                                     : Bighorn Ram Lamb
  55: T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY                             : Baby Swamp Salamander
  56: T5_FARM_GREYWOLF_FW_CAERLEON_BABY                                : Caerleon Greywolf Pup
  57: T8_FARM_MOABIRD_FW_BRIDGEWATCH_BABY                              : Baby Elite Terrorbird
  58: T8_FARM_DIREBEAR_FW_FORTSTERLING_BABY                            : Elite Winter Bear Cub
  59: T8_FARM_DIREBOAR_FW_LYMHURST_BABY                                : Elite Wild Boarlet
  60: T8_FARM_RAM_FW_MARTLOCK_BABY                                     : Elite Bighorn Ram Lamb
  61: T8_FARM_SWAMPDRAGON_FW_THETFORD_BABY                             : Baby Elite Swamp Salamander
  62: T8_FARM_GREYWOLF_FW_CAERLEON_BABY                                : Elite Greywolf Pup
  63: T6_FARM_DIREWOLF_GROWN                                           : Tame Direwolf
  64: T7_FARM_DIREBOAR_GROWN                                           : Tame Direboar
  65: T8_FARM_DIREBEAR_GROWN                                           : Tame Direbear
  66: T7_FARM_SWAMPDRAGON_GROWN                                        : Tame Swamp Dragon
  67: T8_FARM_MAMMOTH_GROWN                                            : Tame Mammoth
  68: T5_FARM_COUGAR_GROWN                                             : Tame Swiftclaw
  69: T8_FARM_DIREWOLF_GROWN                                           : Tame Ghostwolf
  70: T4_FARM_GIANTSTAG_GROWN                                          : Adept's Tame Giant Stag
  71: T6_FARM_GIANTSTAG_GROWN                                          : Master's Tame Giant Stag
  72: T6_FARM_GIANTSTAG_MOOSE_GROWN                                    : Tame Moose
  73: T5_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN                             : Tame Moabird
  74: T5_FARM_DIREBEAR_FW_FORTSTERLING_GROWN                           : Tame Winter Bear
  75: T5_FARM_DIREBOAR_FW_LYMHURST_GROWN                               : Tame Wild Boar
  76: T5_FARM_RAM_FW_MARTLOCK_GROWN                                    : Tame Bighorn Ram
  77: T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN                            : Tame Swamp Salamander
  78: T5_FARM_GREYWOLF_FW_CAERLEON_GROWN                               : Tame Greywolf
  79: T8_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN                             : Tame Elite Terrorbird
  80: T8_FARM_DIREBEAR_FW_FORTSTERLING_GROWN                           : Tame Elite Winter Bear
  81: T8_FARM_DIREBOAR_FW_LYMHURST_GROWN                               : Tame Elite Wild Boar
  82: T8_FARM_RAM_FW_MARTLOCK_GROWN                                    : Tame Elite Bighorn Ram
  83: T8_FARM_SWAMPDRAGON_FW_THETFORD_GROWN                            : Tame Elite Swamp Salamander
  84: T8_FARM_GREYWOLF_FW_CAERLEON_GROWN                               : Tame Elite Greywolf
  85: T3_FARM_CHICKEN_BABY                                             : Baby Chickens
  86: T4_FARM_GOAT_BABY                                                : Kid
  87: T5_FARM_GOOSE_BABY                                               : Gosling
  88: T6_FARM_SHEEP_BABY                                               : Lamb
  89: T7_FARM_PIG_BABY                                                 : Piglet
  90: T8_FARM_COW_BABY                                                 : Calf
  91: T3_FARM_CHICKEN_GROWN                                            : Chicken
  92: T4_FARM_GOAT_GROWN                                               : Goat
  93: T5_FARM_GOOSE_GROWN                                              : Goose
  94: T6_FARM_SHEEP_GROWN                                              : Sheep
  95: T7_FARM_PIG_GROWN                                                : Pig
  96: T8_FARM_COW_GROWN                                                : Cow
  97: T6_MOUNTUPGRADE_GIANTSTAG_XMAS                                   : Decorative Stag Bridle
  98: UNIQUE_MOUNTUPGRADE_RAM_XMAS                                     : Decorative Ram Bridle
  99: T5_MOUNTUPGRADE_HORSE_CURSE                                      : Necromantic Elixir
 100: T8_MOUNTUPGRADE_HORSE_CURSE                                      : Spectral Mask
 101: T8_MOUNTUPGRADE_COUGAR_KEEPER                                    : Sacred Bone Marrow
 102: T5_MOUNTUPGRADE_HORSE_MORGANA                                    : Morgana Mare Saddle
 103: T8_MOUNTUPGRADE_HORSE_MORGANA                                    : Infernal Horseshoes
 104: T1_CARROT                                                        : Carrots
 105: T2_BEAN                                                          : Beans
 106: T3_WHEAT                                                         : Sheaf of Wheat
 107: T4_TURNIP                                                        : Turnips
 108: T5_CABBAGE                                                       : Cabbage
 109: T6_POTATO                                                        : Potatoes
 110: T7_CORN                                                          : Bundle of Corn
 111: T8_PUMPKIN                                                       : Pumpkin
 112: T2_AGARIC                                                        : Arcane Agaric
 113: T3_COMFREY                                                       : Brightleaf Comfrey
 114: T4_BURDOCK                                                       : Crenellated Burdock
 115: T5_TEASEL                                                        : Dragon Teasel
 116: T6_FOXGLOVE                                                      : Elusive Foxglove
 117: T7_MULLEIN                                                       : Firetouched Mullein
 118: T8_YARROW                                                        : Ghoul Yarrow
 119: T3_EGG                                                           : Hen Eggs
 120: T4_MILK                                                          : Goat's Milk
 121: T5_EGG                                                           : Goose Eggs
 122: T6_MILK                                                          : Sheep's Milk
 123: T8_MILK                                                          : Cow's Milk
 124: T1_FISH_FRESHWATER_ALL_COMMON                                    : Common Rudd
 125: T2_FISH_FRESHWATER_ALL_COMMON                                    : Striped Carp
 126: T3_FISH_FRESHWATER_ALL_COMMON                                    : Albion Perch
 127: T4_FISH_FRESHWATER_ALL_COMMON                                    : Bluescale Pike
 128: T5_FISH_FRESHWATER_ALL_COMMON                                    : Spotted Trout
 129: T6_FISH_FRESHWATER_ALL_COMMON                                    : Brightscale Zander
 130: T7_FISH_FRESHWATER_ALL_COMMON                                    : Danglemouth Catfish
 131: T8_FISH_FRESHWATER_ALL_COMMON                                    : River Sturgeon
 132: T1_FISH_SALTWATER_ALL_COMMON                                     : Common Herring
 133: T2_FISH_SALTWATER_ALL_COMMON                                     : Striped Mackerel
 134: T3_FISH_SALTWATER_ALL_COMMON                                     : Flatshore Plaice
 135: T4_FISH_SALTWATER_ALL_COMMON                                     : Bluescale Cod
 136: T5_FISH_SALTWATER_ALL_COMMON                                     : Spotted Wolffish
 137: T6_FISH_SALTWATER_ALL_COMMON                                     : Strongfin Salmon
 138: T7_FISH_SALTWATER_ALL_COMMON                                     : Bluefin Tuna
 139: T8_FISH_SALTWATER_ALL_COMMON                                     : Steelscale Swordfish
 140: T3_FISH_FRESHWATER_FOREST_RARE                                   : Greenriver Eel
 141: T5_FISH_FRESHWATER_FOREST_RARE                                   : Redspring Eel
 142: T7_FISH_FRESHWATER_FOREST_RARE                                   : Deadwater Eel
 143: T3_FISH_FRESHWATER_MOUNTAIN_RARE                                 : Upland Coldeye
 144: T5_FISH_FRESHWATER_MOUNTAIN_RARE                                 : Mountain Blindeye
 145: T7_FISH_FRESHWATER_MOUNTAIN_RARE                                 : Frostpeak Deadeye
 146: T3_FISH_FRESHWATER_HIGHLANDS_RARE                                : Stonestream Lurcher
 147: T5_FISH_FRESHWATER_HIGHLANDS_RARE                                : Rushwater Lurcher
 148: T7_FISH_FRESHWATER_HIGHLANDS_RARE                                : Thunderfall Lurcher
 149: T3_FISH_FRESHWATER_STEPPE_RARE                                   : Lowriver Crab
 150: T5_FISH_FRESHWATER_STEPPE_RARE                                   : Drybrook Crab
 151: T7_FISH_FRESHWATER_STEPPE_RARE                                   : Dusthole Crab
 152: T3_FISH_FRESHWATER_SWAMP_RARE                                    : Greenmoor Clam
 153: T5_FISH_FRESHWATER_SWAMP_RARE                                    : Murkwater Clam
 154: T7_FISH_FRESHWATER_SWAMP_RARE                                    : Blackbog Clam
 155: T3_FISH_SALTWATER_ALL_RARE                                       : Shallowshore Squid
 156: T5_FISH_SALTWATER_ALL_RARE                                       : Midwater Octopus
 157: T7_FISH_SALTWATER_ALL_RARE                                       : Deepwater Kraken
 158: T3_FISH_FRESHWATER_AVALON_RARE                                   : Whitefog Snapper
 159: T5_FISH_FRESHWATER_AVALON_RARE                                   : Clearhaze Snapper
 160: T7_FISH_FRESHWATER_AVALON_RARE                                   : Puremist Snapper
 161: T1_SEAWEED                                                       : Seaweed
 162: T8_FISH_SALTWATER_ALL_BOSS_SHARK                                 : Shark
 163: T1_FISHCHOPS                                                     : Chopped Fish
 164: T1_FISHSAUCE_LEVEL1                                              : Basic Fish Sauce
 165: T1_FISHSAUCE_LEVEL2                                              : Fancy Fish Sauce
 166: T1_FISHSAUCE_LEVEL3                                              : Special Fish Sauce
 167: TREASURE_KNOWLEDGE_RARITY1                                       : Corrupted Scroll
 168: TREASURE_KNOWLEDGE_RARITY2                                       : Thin Booklet
 169: TREASURE_KNOWLEDGE_RARITY3                                       : Ancient Tome
 170: TREASURE_SILVERWARE_RARITY1                                      : Silver Cup
 171: TREASURE_SILVERWARE_RARITY2                                      : Silver Mirror
 172: TREASURE_SILVERWARE_RARITY3                                      : Silver Candelabrum
 173: TREASURE_DECORATIVE_RARITY1                                      : Simple Stone Toy
 174: TREASURE_DECORATIVE_RARITY2                                      : Stone Mask
 175: TREASURE_DECORATIVE_RARITY3                                      : Stone Idol
 176: TREASURE_CEREMONIAL_RARITY1                                      : Ornamental Scepter
 177: TREASURE_CEREMONIAL_RARITY2                                      : Globus Cruciger
 178: TREASURE_CEREMONIAL_RARITY3                                      : Golden Crown
 179: TREASURE_TRIBAL_RARITY1                                          : Feather Talisman
 180: TREASURE_TRIBAL_RARITY2                                          : Dreamcatcher
 181: TREASURE_TRIBAL_RARITY3                                          : Holy Fetish
 182: TREASURE_RITUAL_RARITY1                                          : Ritual Candles
 183: TREASURE_RITUAL_RARITY2                                          : Blood Chalice
 184: TREASURE_RITUAL_RARITY3                                          : Sacrificial Dagger
 185: TREASURE_AVALON_RARITY1                                          : Golden Frame
 186: TREASURE_AVALON_RARITY2                                          : Golden Gyroscope
 187: TREASURE_AVALON_RARITY3                                          : Golden Sextant
 188: QUESTITEM_TUTORIAL_HERETIC_PLANS                                 
 189: QUESTITEM_TRANSFER_LETTER                                        : Letter of Transfer
 190: QUESTITEM_LIGHT_BLUEPRINTS                                       : Delivery: Blueprints
 191: QUESTITEM_LIGHT_MANUSCRIPTS                                      : Delivery: Artistic Manuscripts
 192: QUESTITEM_LIGHT_SURVEYS                                          : Delivery: Geomantic Surveys
 193: QUESTITEM_HEAVY_MORTAR                                           : Delivery: Mortar
 194: QUESTITEM_HEAVY_CRATE                                            : Delivery: Crates
 195: QUESTITEM_HEAVY_BARREL                                           : Delivery: Barrels
 196: QUESTITEM_LIGHT_FUR                                              : Delivery: Heavy Fur
 197: QUESTITEM_LIGHT_THEPACKAGE                                       : Delivery: "The Package"
 198: QUESTITEM_LIGHT_PATROLROUTE                                      : Delivery: Patrol Route
 199: QUESTITEM_HEAVY_MOONSHINE                                        : Delivery: Geoff the Brigand's All-Natural Enriched Moonshine
 200: QUESTITEM_LIGHT_KITTENS                                          : Delivery: Sack of Kittens
 201: QUESTITEM_LIGHT_BEES                                             : Delivery: Beehives
 202: QUESTITEM_LIGHT_OLDCLOTHES                                       : Delivery: Old Clothes
 203: QUESTITEM_HEAVY_FARMTOOLS                                        : Delivery: Farmyard Tools
 204: QUESTITEM_HEAVY_MANURE                                           : Delivery: Pile of Manure
 205: QUESTITEM_LIGHT_ASSASSINATION                                    : Delivery: Assassination Order
 206: QUESTITEM_LIGHT_CASUALTIES                                       : Delivery: Casualty Report
 207: QUESTITEM_LIGHT_RINGS                                            : Delivery: Regimental Rings
 208: QUESTITEM_HEAVY_MEDICAL                                          : Delivery: Medical Supplies
 209: QUESTITEM_HEAVY_FIREBARREL                                       : Delivery: Sensitive Barrels
 210: QUESTITEM_CARAVAN_TRADEPACK_CAERLEON_LIGHT                       
 211: QUESTITEM_CARAVAN_TRADEPACK_CAERLEON_MEDIUM                      
 212: QUESTITEM_CARAVAN_TRADEPACK_CAERLEON_HEAVY                       
 213: QUESTITEM_CARAVAN_TRADEPACK_SWAMP_LIGHT                          
 214: QUESTITEM_CARAVAN_TRADEPACK_SWAMP_MEDIUM                         
 215: QUESTITEM_CARAVAN_TRADEPACK_SWAMP_HEAVY                          
 216: QUESTITEM_CARAVAN_TRADEPACK_FOREST_LIGHT                         
 217: QUESTITEM_CARAVAN_TRADEPACK_FOREST_MEDIUM                        
 218: QUESTITEM_CARAVAN_TRADEPACK_FOREST_HEAVY                         
 219: QUESTITEM_CARAVAN_TRADEPACK_STEPPE_LIGHT                         
 220: QUESTITEM_CARAVAN_TRADEPACK_STEPPE_MEDIUM                        
 221: QUESTITEM_CARAVAN_TRADEPACK_STEPPE_HEAVY                         
 222: QUESTITEM_CARAVAN_TRADEPACK_HIGHLAND_LIGHT                       
 223: QUESTITEM_CARAVAN_TRADEPACK_HIGHLAND_MEDIUM                      
 224: QUESTITEM_CARAVAN_TRADEPACK_HIGHLAND_HEAVY                       
 225: QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_LIGHT                       
 226: QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_MEDIUM                      
 227: QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_HEAVY                       
 228: QUESTITEM_TOKEN_ARENA_UNRANKED                                   : Arena Sigil
 229: QUESTITEM_TOKEN_AVALON                                           : Avalonian Energy
 230: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_WINTER_EVENT                   
 231: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 232: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 233: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 234: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 235: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 236: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 237: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 238: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 239: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_UNDEAD_RECRUITMENT             
 240: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 241: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 242: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 243: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 244: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 245: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 246: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 247: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 248: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_UNDEAD_RECRUITMENT            
 249: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 250: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 251: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 252: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 253: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 254: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 255: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 256: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 257: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_HERETIC_FISHYBUSINESS          
 258: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 259: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 260: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 261: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 262: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 263: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 264: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 265: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 266: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_HERETIC_FISHYBUSINESS         
 267: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_KEEPER_STONEWARS               
 268: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_KEEPER_STONEWARS               
 269: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_KEEPER_STONEWARS               
 270: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_KEEPER_STONEWARS               
 271: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_KEEPER_STONEWARS               
 272: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_KEEPER_STONEWARS               
 273: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_KEEPER_STONEWARS               
 274: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_KEEPER_STONEWARS               
 275: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_KEEPER_STONEWARS               
 276: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_KEEPER_STONEWARS              
 277: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_KEEPER_STONEWARS              
 278: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_KEEPER_STONEWARS              
 279: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_KEEPER_STONEWARS              
 280: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_KEEPER_STONEWARS              
 281: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_KEEPER_STONEWARS              
 282: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_KEEPER_STONEWARS              
 283: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_KEEPER_STONEWARS              
 284: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_KEEPER_STONEWARS              
 285: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 286: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 287: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 288: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 289: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 290: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 291: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 292: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 293: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_HERETIC_LUMBERCAMP             
 294: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 295: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 296: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 297: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 298: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 299: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 300: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 301: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 302: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_HERETIC_LUMBERCAMP            
 303: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 304: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 305: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 306: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 307: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 308: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 309: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 310: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 311: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_UNDEAD_SEWERSCRYPT             
 312: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 313: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 314: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 315: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 316: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 317: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 318: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 319: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 320: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_UNDEAD_SEWERSCRYPT            
 321: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_KEEPER_MUSHROOM                
 322: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_KEEPER_MUSHROOM                
 323: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_KEEPER_MUSHROOM                
 324: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_KEEPER_MUSHROOM                
 325: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_KEEPER_MUSHROOM                
 326: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_KEEPER_MUSHROOM                
 327: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_KEEPER_MUSHROOM                
 328: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_KEEPER_MUSHROOM                
 329: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_KEEPER_MUSHROOM                
 330: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_KEEPER_MUSHROOM               
 331: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_KEEPER_MUSHROOM               
 332: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_KEEPER_MUSHROOM               
 333: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_KEEPER_MUSHROOM               
 334: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_KEEPER_MUSHROOM               
 335: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_KEEPER_MUSHROOM               
 336: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_KEEPER_MUSHROOM               
 337: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_KEEPER_MUSHROOM               
 338: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_KEEPER_MUSHROOM               
 339: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 340: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 341: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 342: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 343: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 344: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 345: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 346: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 347: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_MORGANA_TRHEESISTERS           
 348: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 349: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 350: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 351: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 352: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 353: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 354: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 355: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 356: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_MORGANA_TRHEESISTERS          
 357: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 358: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 359: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 360: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 361: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 362: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 363: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 364: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 365: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_UNDEAD_ETERNALBATTLE           
 366: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 367: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 368: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 369: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 370: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 371: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 372: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 373: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 374: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_UNDEAD_ETERNALBATTLE          
 375: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 376: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 377: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 378: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 379: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 380: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 381: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 382: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 383: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_HERETIC_FISTFULOFSILVER        
 384: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 385: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 386: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 387: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 388: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 389: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 390: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 391: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 392: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_HERETIC_FISTFULOFSILVER       
 393: QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_MORGANA_TORTURER               
 394: QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_MORGANA_TORTURER               
 395: QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_MORGANA_TORTURER               
 396: QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_MORGANA_TORTURER               
 397: QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_MORGANA_TORTURER               
 398: QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_MORGANA_TORTURER               
 399: QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_MORGANA_TORTURER               
 400: QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_MORGANA_TORTURER               
 401: QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_MORGANA_TORTURER               
 402: QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_MORGANA_TORTURER              
 403: QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_MORGANA_TORTURER              
 404: QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_MORGANA_TORTURER              
 405: QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_MORGANA_TORTURER              
 406: QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_MORGANA_TORTURER              
 407: QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_MORGANA_TORTURER              
 408: QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_MORGANA_TORTURER              
 409: QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_MORGANA_TORTURER              
 410: QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_MORGANA_TORTURER              
 411: QUESTITEM_TOKEN_ROYAL_HORSE                                      : Royal Horse Token
 412: QUESTITEM_TOKEN_ROYAL_T4                                         : Adept's Royal Sigil
 413: QUESTITEM_TOKEN_ROYAL_T5                                         : Expert's Royal Sigil
 414: QUESTITEM_TOKEN_ROYAL_T6                                         : Master's Royal Sigil
 415: QUESTITEM_TOKEN_ROYAL_T7                                         : Grandmaster's Royal Sigil
 416: QUESTITEM_TOKEN_ROYAL_T8                                         : Elder's Royal Sigil
 417: QUESTITEM_TOKEN_KEEPER                                           : Keeper Totem
 418: QUESTITEM_TOKEN_MORGANA                                          : Morgana's Favor
 419: QUESTITEM_TOKEN_UNDEAD                                           : Undead Knucklebone
 420: QUESTITEM_TOKEN_EVENT_HALLOWEEN_2017                             : Pumpkin Pip
 421: QUESTITEM_TOKEN_EVENT_EASTER_2018                                : Fool's Golden Egg
 422: QUESTITEM_TOKEN_ADC_FRAME                                        : Adventurer Token
 423: T4_SKILLBOOK_STANDARD                                            : Adept's Tome of Insight
 424: T1_SKILLBOOK_NONTRADABLE                                         : Beginner's Tome of Insight
 425: T2_SKILLBOOK_NONTRADABLE                                         : Novice's Tome of Insight
 426: T3_SKILLBOOK_NONTRADABLE                                         : Journeyman's Tome of Insight
 427: T4_SKILLBOOK_NONTRADABLE                                         : Adept's Tome of Insight
 428: T5_SKILLBOOK_NONTRADABLE                                         : Expert's Tome of Insight
 429: T6_SKILLBOOK_NONTRADABLE                                         : Master's Tome of Insight
 430: T7_SKILLBOOK_NONTRADABLE                                         : Grandmaster's Tome of Insight
 431: T8_SKILLBOOK_NONTRADABLE                                         : Elder's Tome of Insight
 432: T3_PREMIUMITEM_3_NONTRADABLE                                     : Three Days of Premium
 433: T1_SILVERBAG_NONTRADABLE                                         : Beginner's Bag of Silver
 434: T2_SILVERBAG_NONTRADABLE                                         : Novice's Bag of Silver
 435: T3_SILVERBAG_NONTRADABLE                                         : Journeyman's Bag of Silver
 436: T4_SILVERBAG_NONTRADABLE                                         : Adept's Bag of Silver
 437: T5_SILVERBAG_NONTRADABLE                                         : Expert's Bag of Silver
 438: T6_SILVERBAG_NONTRADABLE                                         : Master's Bag of Silver
 439: T7_SILVERBAG_NONTRADABLE                                         : Grandmaster's Bag of Silver
 440: T8_SILVERBAG_NONTRADABLE                                         : Elder's Bag of Silver
 441: T2_POTION_HEAL                                                   : Minor Healing Potion
 442: T4_POTION_HEAL                                                   : Healing Potion
 443: T4_POTION_HEAL@1                                                 : Healing Potion
 444: T6_POTION_HEAL                                                   : Major Healing Potion
 445: T6_POTION_HEAL@1                                                 : Major Healing Potion
 446: T2_POTION_ENERGY                                                 : Minor Energy Potion
 447: T4_POTION_ENERGY                                                 : Energy Potion
 448: T4_POTION_ENERGY@1                                               : Energy Potion
 449: T6_POTION_ENERGY                                                 : Major Energy Potion
 450: T6_POTION_ENERGY@1                                               : Major Energy Potion
 451: T3_POTION_REVIVE                                                 : Minor Gigantify Potion
 452: T5_POTION_REVIVE                                                 : Gigantify Potion
 453: T5_POTION_REVIVE@1                                               : Gigantify Potion
 454: T7_POTION_REVIVE                                                 : Major Gigantify Potion
 455: T7_POTION_REVIVE@1                                               : Major Gigantify Potion
 456: T3_POTION_STONESKIN                                              : Minor Resistance Potion
 457: T5_POTION_STONESKIN                                              : Resistance Potion
 458: T5_POTION_STONESKIN@1                                            : Resistance Potion
 459: T7_POTION_STONESKIN                                              : Major Resistance Potion
 460: T7_POTION_STONESKIN@1                                            : Major Resistance Potion
 461: T3_POTION_SLOWFIELD                                              : Minor Sticky Potion
 462: T5_POTION_SLOWFIELD                                              : Sticky Potion
 463: T5_POTION_SLOWFIELD@1                                            : Sticky Potion
 464: T7_POTION_SLOWFIELD                                              : Major Sticky Potion
 465: T7_POTION_SLOWFIELD@1                                            : Major Sticky Potion
 466: T4_POTION_COOLDOWN                                               : Minor Poison Potion
 467: T4_POTION_COOLDOWN@1                                             : Minor Poison Potion
 468: T6_POTION_COOLDOWN                                               : Poison Potion
 469: T6_POTION_COOLDOWN@1                                             : Poison Potion
 470: T8_POTION_COOLDOWN                                               : Major Poison Potion
 471: T8_POTION_COOLDOWN@1                                             : Major Poison Potion
 472: T8_POTION_CLEANSE                                                : Invisibility Potion
 473: T8_POTION_CLEANSE@1                                              : Invisibility Potion
 474: T1_WORM                                                          : Earthworm
 475: T1_FISHINGBAIT                                                   : Simple Fish Bait
 476: T3_FISHINGBAIT                                                   : Fancy Fish Bait
 477: T5_FISHINGBAIT                                                   : Special Fish Bait
 478: T1_MEAL_GRILLEDFISH                                              : Grilled Fish
 479: T1_MEAL_SEAWEEDSALAD                                             : Seaweed Salad
 480: T1_MEAL_SOUP                                                     : Carrot Soup
 481: T1_MEAL_SOUP@1                                                   : Carrot Soup
 482: T1_MEAL_SOUP@2                                                   : Carrot Soup
 483: T1_MEAL_SOUP@3                                                   : Carrot Soup
 484: T3_MEAL_SOUP                                                     : Wheat Soup
 485: T3_MEAL_SOUP@1                                                   : Wheat Soup
 486: T3_MEAL_SOUP@2                                                   : Wheat Soup
 487: T3_MEAL_SOUP@3                                                   : Wheat Soup
 488: T5_MEAL_SOUP                                                     : Cabbage Soup
 489: T5_MEAL_SOUP@1                                                   : Cabbage Soup
 490: T5_MEAL_SOUP@2                                                   : Cabbage Soup
 491: T5_MEAL_SOUP@3                                                   : Cabbage Soup
 492: T1_MEAL_SOUP_FISH                                                : Greenmoor Clam Soup
 493: T1_MEAL_SOUP_FISH@1                                              : Greenmoor Clam Soup
 494: T1_MEAL_SOUP_FISH@2                                              : Greenmoor Clam Soup
 495: T1_MEAL_SOUP_FISH@3                                              : Greenmoor Clam Soup
 496: T3_MEAL_SOUP_FISH                                                : Murkwater Clam Soup
 497: T3_MEAL_SOUP_FISH@1                                              : Murkwater Clam Soup
 498: T3_MEAL_SOUP_FISH@2                                              : Murkwater Clam Soup
 499: T3_MEAL_SOUP_FISH@3                                              : Murkwater Clam Soup
 500: T5_MEAL_SOUP_FISH                                                : Blackbog Clam Soup
 501: T5_MEAL_SOUP_FISH@1                                              : Blackbog Clam Soup
 502: T5_MEAL_SOUP_FISH@2                                              : Blackbog Clam Soup
 503: T5_MEAL_SOUP_FISH@3                                              : Blackbog Clam Soup
 504: T2_MEAL_SALAD                                                    : Bean Salad
 505: T2_MEAL_SALAD@1                                                  : Bean Salad
 506: T2_MEAL_SALAD@2                                                  : Bean Salad
 507: T2_MEAL_SALAD@3                                                  : Bean Salad
 508: T4_MEAL_SALAD                                                    : Turnip Salad
 509: T4_MEAL_SALAD@1                                                  : Turnip Salad
 510: T4_MEAL_SALAD@2                                                  : Turnip Salad
 511: T4_MEAL_SALAD@3                                                  : Turnip Salad
 512: T6_MEAL_SALAD                                                    : Potato Salad
 513: T6_MEAL_SALAD@1                                                  : Potato Salad
 514: T6_MEAL_SALAD@2                                                  : Potato Salad
 515: T6_MEAL_SALAD@3                                                  : Potato Salad
 516: T2_MEAL_SALAD_FISH                                               : Shallowshore Squid Salad
 517: T2_MEAL_SALAD_FISH@1                                             : Shallowshore Squid Salad
 518: T2_MEAL_SALAD_FISH@2                                             : Shallowshore Squid Salad
 519: T2_MEAL_SALAD_FISH@3                                             : Shallowshore Squid Salad
 520: T4_MEAL_SALAD_FISH                                               : Midwater Octopus Salad
 521: T4_MEAL_SALAD_FISH@1                                             : Midwater Octopus Salad
 522: T4_MEAL_SALAD_FISH@2                                             : Midwater Octopus Salad
 523: T4_MEAL_SALAD_FISH@3                                             : Midwater Octopus Salad
 524: T6_MEAL_SALAD_FISH                                               : Deepwater Kraken Salad
 525: T6_MEAL_SALAD_FISH@1                                             : Deepwater Kraken Salad
 526: T6_MEAL_SALAD_FISH@2                                             : Deepwater Kraken Salad
 527: T6_MEAL_SALAD_FISH@3                                             : Deepwater Kraken Salad
 528: T3_MEAL_PIE                                                      : Chicken Pie
 529: T3_MEAL_PIE@1                                                    : Chicken Pie
 530: T3_MEAL_PIE@2                                                    : Chicken Pie
 531: T3_MEAL_PIE@3                                                    : Chicken Pie
 532: T5_MEAL_PIE                                                      : Goose Pie
 533: T5_MEAL_PIE@1                                                    : Goose Pie
 534: T5_MEAL_PIE@2                                                    : Goose Pie
 535: T5_MEAL_PIE@3                                                    : Goose Pie
 536: T7_MEAL_PIE                                                      : Pork Pie
 537: T7_MEAL_PIE@1                                                    : Pork Pie
 538: T7_MEAL_PIE@2                                                    : Pork Pie
 539: T7_MEAL_PIE@3                                                    : Pork Pie
 540: T3_MEAL_PIE_FISH                                                 : Upland Coldeye Pie
 541: T3_MEAL_PIE_FISH@1                                               : Upland Coldeye Pie
 542: T3_MEAL_PIE_FISH@2                                               : Upland Coldeye Pie
 543: T3_MEAL_PIE_FISH@3                                               : Upland Coldeye Pie
 544: T5_MEAL_PIE_FISH                                                 : Mountain Blindeye Pie
 545: T5_MEAL_PIE_FISH@1                                               : Mountain Blindeye Pie
 546: T5_MEAL_PIE_FISH@2                                               : Mountain Blindeye Pie
 547: T5_MEAL_PIE_FISH@3                                               : Mountain Blindeye Pie
 548: T7_MEAL_PIE_FISH                                                 : Frostpeak Deadeye Pie
 549: T7_MEAL_PIE_FISH@1                                               : Frostpeak Deadeye Pie
 550: T7_MEAL_PIE_FISH@2                                               : Frostpeak Deadeye Pie
 551: T7_MEAL_PIE_FISH@3                                               : Frostpeak Deadeye Pie
 552: T3_MEAL_OMELETTE                                                 : Chicken Omelette
 553: T3_MEAL_OMELETTE@1                                               : Chicken Omelette
 554: T3_MEAL_OMELETTE@2                                               : Chicken Omelette
 555: T3_MEAL_OMELETTE@3                                               : Chicken Omelette
 556: T5_MEAL_OMELETTE                                                 : Goose Omelette
 557: T5_MEAL_OMELETTE@1                                               : Goose Omelette
 558: T5_MEAL_OMELETTE@2                                               : Goose Omelette
 559: T5_MEAL_OMELETTE@3                                               : Goose Omelette
 560: T7_MEAL_OMELETTE                                                 : Pork Omelette
 561: T7_MEAL_OMELETTE@1                                               : Pork Omelette
 562: T7_MEAL_OMELETTE@2                                               : Pork Omelette
 563: T7_MEAL_OMELETTE@3                                               : Pork Omelette
 564: T3_MEAL_OMELETTE_FISH                                            : Lowriver Crab Omelette
 565: T3_MEAL_OMELETTE_FISH@1                                          : Lowriver Crab Omelette
 566: T3_MEAL_OMELETTE_FISH@2                                          : Lowriver Crab Omelette
 567: T3_MEAL_OMELETTE_FISH@3                                          : Lowriver Crab Omelette
 568: T5_MEAL_OMELETTE_FISH                                            : Drybrook Crab Omelette
 569: T5_MEAL_OMELETTE_FISH@1                                          : Drybrook Crab Omelette
 570: T5_MEAL_OMELETTE_FISH@2                                          : Drybrook Crab Omelette
 571: T5_MEAL_OMELETTE_FISH@3                                          : Drybrook Crab Omelette
 572: T7_MEAL_OMELETTE_FISH                                            : Dusthole Crab Omelette
 573: T7_MEAL_OMELETTE_FISH@1                                          : Dusthole Crab Omelette
 574: T7_MEAL_OMELETTE_FISH@2                                          : Dusthole Crab Omelette
 575: T7_MEAL_OMELETTE_FISH@3                                          : Dusthole Crab Omelette
 576: T3_MEAL_OMELETTE_AVALON                                          : Avalonian Chicken Omelette
 577: T3_MEAL_OMELETTE_AVALON@1                                        : Avalonian Chicken Omelette
 578: T3_MEAL_OMELETTE_AVALON@2                                        : Avalonian Chicken Omelette
 579: T3_MEAL_OMELETTE_AVALON@3                                        : Avalonian Chicken Omelette
 580: T5_MEAL_OMELETTE_AVALON                                          : Avalonian Goose Omelette
 581: T5_MEAL_OMELETTE_AVALON@1                                        : Avalonian Goose Omelette
 582: T5_MEAL_OMELETTE_AVALON@2                                        : Avalonian Goose Omelette
 583: T5_MEAL_OMELETTE_AVALON@3                                        : Avalonian Goose Omelette
 584: T7_MEAL_OMELETTE_AVALON                                          : Avalonian Pork Omelette
 585: T7_MEAL_OMELETTE_AVALON@1                                        : Avalonian Pork Omelette
 586: T7_MEAL_OMELETTE_AVALON@2                                        : Avalonian Pork Omelette
 587: T7_MEAL_OMELETTE_AVALON@3                                        : Avalonian Pork Omelette
 588: T4_MEAL_STEW                                                     : Goat Stew
 589: T4_MEAL_STEW@1                                                   : Goat Stew
 590: T4_MEAL_STEW@2                                                   : Goat Stew
 591: T4_MEAL_STEW@3                                                   : Goat Stew
 592: T6_MEAL_STEW                                                     : Mutton Stew
 593: T6_MEAL_STEW@1                                                   : Mutton Stew
 594: T6_MEAL_STEW@2                                                   : Mutton Stew
 595: T6_MEAL_STEW@3                                                   : Mutton Stew
 596: T8_MEAL_STEW                                                     : Beef Stew
 597: T8_MEAL_STEW@1                                                   : Beef Stew
 598: T8_MEAL_STEW@2                                                   : Beef Stew
 599: T8_MEAL_STEW@3                                                   : Beef Stew
 600: T4_MEAL_STEW_FISH                                                : Greenriver Eel Stew
 601: T4_MEAL_STEW_FISH@1                                              : Greenriver Eel Stew
 602: T4_MEAL_STEW_FISH@2                                              : Greenriver Eel Stew
 603: T4_MEAL_STEW_FISH@3                                              : Greenriver Eel Stew
 604: T6_MEAL_STEW_FISH                                                : Redspring Eel Stew
 605: T6_MEAL_STEW_FISH@1                                              : Redspring Eel Stew
 606: T6_MEAL_STEW_FISH@2                                              : Redspring Eel Stew
 607: T6_MEAL_STEW_FISH@3                                              : Redspring Eel Stew
 608: T8_MEAL_STEW_FISH                                                : Deadwater Eel Stew
 609: T8_MEAL_STEW_FISH@1                                              : Deadwater Eel Stew
 610: T8_MEAL_STEW_FISH@2                                              : Deadwater Eel Stew
 611: T8_MEAL_STEW_FISH@3                                              : Deadwater Eel Stew
 612: T4_MEAL_STEW_AVALON                                              : Avalonian Goat Stew
 613: T4_MEAL_STEW_AVALON@1                                            : Avalonian Goat Stew
 614: T4_MEAL_STEW_AVALON@2                                            : Avalonian Goat Stew
 615: T4_MEAL_STEW_AVALON@3                                            : Avalonian Goat Stew
 616: T6_MEAL_STEW_AVALON                                              : Avalonian Mutton Stew
 617: T6_MEAL_STEW_AVALON@1                                            : Avalonian Mutton Stew
 618: T6_MEAL_STEW_AVALON@2                                            : Avalonian Mutton Stew
 619: T6_MEAL_STEW_AVALON@3                                            : Avalonian Mutton Stew
 620: T8_MEAL_STEW_AVALON                                              : Avalonian Beef Stew
 621: T8_MEAL_STEW_AVALON@1                                            : Avalonian Beef Stew
 622: T8_MEAL_STEW_AVALON@2                                            : Avalonian Beef Stew
 623: T8_MEAL_STEW_AVALON@3                                            : Avalonian Beef Stew
 624: T4_MEAL_SANDWICH                                                 : Goat Sandwich
 625: T4_MEAL_SANDWICH@1                                               : Goat Sandwich
 626: T4_MEAL_SANDWICH@2                                               : Goat Sandwich
 627: T4_MEAL_SANDWICH@3                                               : Goat Sandwich
 628: T6_MEAL_SANDWICH                                                 : Mutton Sandwich
 629: T6_MEAL_SANDWICH@1                                               : Mutton Sandwich
 630: T6_MEAL_SANDWICH@2                                               : Mutton Sandwich
 631: T6_MEAL_SANDWICH@3                                               : Mutton Sandwich
 632: T8_MEAL_SANDWICH                                                 : Beef Sandwich
 633: T8_MEAL_SANDWICH@1                                               : Beef Sandwich
 634: T8_MEAL_SANDWICH@2                                               : Beef Sandwich
 635: T8_MEAL_SANDWICH@3                                               : Beef Sandwich
 636: T4_MEAL_SANDWICH_FISH                                            : Stonestream Lurcher Sandwich
 637: T4_MEAL_SANDWICH_FISH@1                                          : Stonestream Lurcher Sandwich
 638: T4_MEAL_SANDWICH_FISH@2                                          : Stonestream Lurcher Sandwich
 639: T4_MEAL_SANDWICH_FISH@3                                          : Stonestream Lurcher Sandwich
 640: T6_MEAL_SANDWICH_FISH                                            : Rushwater Lurcher Sandwich
 641: T6_MEAL_SANDWICH_FISH@1                                          : Rushwater Lurcher Sandwich
 642: T6_MEAL_SANDWICH_FISH@2                                          : Rushwater Lurcher Sandwich
 643: T6_MEAL_SANDWICH_FISH@3                                          : Rushwater Lurcher Sandwich
 644: T8_MEAL_SANDWICH_FISH                                            : Thunderfall Lurcher Sandwich
 645: T8_MEAL_SANDWICH_FISH@1                                          : Thunderfall Lurcher Sandwich
 646: T8_MEAL_SANDWICH_FISH@2                                          : Thunderfall Lurcher Sandwich
 647: T8_MEAL_SANDWICH_FISH@3                                          : Thunderfall Lurcher Sandwich
 648: T4_MEAL_SANDWICH_AVALON                                          : Avalonian Goat Sandwich
 649: T4_MEAL_SANDWICH_AVALON@1                                        : Avalonian Goat Sandwich
 650: T4_MEAL_SANDWICH_AVALON@2                                        : Avalonian Goat Sandwich
 651: T4_MEAL_SANDWICH_AVALON@3                                        : Avalonian Goat Sandwich
 652: T6_MEAL_SANDWICH_AVALON                                          : Avalonian Mutton Sandwich
 653: T6_MEAL_SANDWICH_AVALON@1                                        : Avalonian Mutton Sandwich
 654: T6_MEAL_SANDWICH_AVALON@2                                        : Avalonian Mutton Sandwich
 655: T6_MEAL_SANDWICH_AVALON@3                                        : Avalonian Mutton Sandwich
 656: T8_MEAL_SANDWICH_AVALON                                          : Avalonian Beef Sandwich
 657: T8_MEAL_SANDWICH_AVALON@1                                        : Avalonian Beef Sandwich
 658: T8_MEAL_SANDWICH_AVALON@2                                        : Avalonian Beef Sandwich
 659: T8_MEAL_SANDWICH_AVALON@3                                        : Avalonian Beef Sandwich
 660: T3_MEAL_ROAST                                                    : Roast Chicken
 661: T3_MEAL_ROAST@1                                                  : Roast Chicken
 662: T3_MEAL_ROAST@2                                                  : Roast Chicken
 663: T3_MEAL_ROAST@3                                                  : Roast Chicken
 664: T5_MEAL_ROAST                                                    : Roast Goose
 665: T5_MEAL_ROAST@1                                                  : Roast Goose
 666: T5_MEAL_ROAST@2                                                  : Roast Goose
 667: T5_MEAL_ROAST@3                                                  : Roast Goose
 668: T7_MEAL_ROAST                                                    : Roast Pork
 669: T7_MEAL_ROAST@1                                                  : Roast Pork
 670: T7_MEAL_ROAST@2                                                  : Roast Pork
 671: T7_MEAL_ROAST@3                                                  : Roast Pork
 672: T3_MEAL_ROAST_FISH                                               : Roasted Whitefog Snapper
 673: T3_MEAL_ROAST_FISH@1                                             : Roasted Whitefog Snapper
 674: T3_MEAL_ROAST_FISH@2                                             : Roasted Whitefog Snapper
 675: T3_MEAL_ROAST_FISH@3                                             : Roasted Whitefog Snapper
 676: T5_MEAL_ROAST_FISH                                               : Roasted Clearhaze Snapper
 677: T5_MEAL_ROAST_FISH@1                                             : Roasted Clearhaze Snapper
 678: T5_MEAL_ROAST_FISH@2                                             : Roasted Clearhaze Snapper
 679: T5_MEAL_ROAST_FISH@3                                             : Roasted Clearhaze Snapper
 680: T7_MEAL_ROAST_FISH                                               : Roasted Puremist Snapper
 681: T7_MEAL_ROAST_FISH@1                                             : Roasted Puremist Snapper
 682: T7_MEAL_ROAST_FISH@2                                             : Roasted Puremist Snapper
 683: T7_MEAL_ROAST_FISH@3                                             : Roasted Puremist Snapper
 684: T3_MEAT                                                          : Raw Chicken
 685: T4_MEAT                                                          : Raw Goat
 686: T5_MEAT                                                          : Raw Goose
 687: T6_MEAT                                                          : Raw Mutton
 688: T7_MEAT                                                          : Raw Pork
 689: T8_MEAT                                                          : Raw Beef
 690: T4_BUTTER                                                        : Goat's Butter
 691: T6_BUTTER                                                        : Sheep's Butter
 692: T8_BUTTER                                                        : Cow's Butter
 693: T6_ALCOHOL                                                       : Potato Schnapps
 694: T7_ALCOHOL                                                       : Corn Hooch
 695: T8_ALCOHOL                                                       : Pumpkin Moonshine
 696: T4_BREAD                                                         : Bread
 697: T3_FLOUR                                                         : Flour
 698: T1_WOOD                                                          : Rough Logs
 699: T2_WOOD                                                          : Birch Logs
 700: T3_WOOD                                                          : Chestnut Logs
 701: T4_WOOD                                                          : Pine Logs
 702: T5_WOOD                                                          : Cedar Logs
 703: T6_WOOD                                                          : Bloodoak Logs
 704: T7_WOOD                                                          : Ashenbark Logs
 705: T8_WOOD                                                          : Whitewood Logs
 706: T4_WOOD_LEVEL1@1                                                 : Uncommon Pine Logs
 707: T5_WOOD_LEVEL1@1                                                 : Uncommon Cedar Logs
 708: T6_WOOD_LEVEL1@1                                                 : Uncommon Bloodoak Logs
 709: T7_WOOD_LEVEL1@1                                                 : Uncommon Ashenbark Logs
 710: T8_WOOD_LEVEL1@1                                                 : Uncommon Whitewood Logs
 711: T4_WOOD_LEVEL2@2                                                 : Rare Pine Logs
 712: T5_WOOD_LEVEL2@2                                                 : Rare Cedar Logs
 713: T6_WOOD_LEVEL2@2                                                 : Rare Bloodoak Logs
 714: T7_WOOD_LEVEL2@2                                                 : Rare Ashenbark Logs
 715: T8_WOOD_LEVEL2@2                                                 : Rare Whitewood Logs
 716: T4_WOOD_LEVEL3@3                                                 : Exceptional Pine Logs
 717: T5_WOOD_LEVEL3@3                                                 : Exceptional Cedar Logs
 718: T6_WOOD_LEVEL3@3                                                 : Exceptional Bloodoak Logs
 719: T7_WOOD_LEVEL3@3                                                 : Exceptional Ashenbark Logs
 720: T8_WOOD_LEVEL3@3                                                 : Exceptional Whitewood Logs
 721: T1_ROCK                                                          : Rough Stone
 722: T2_ROCK                                                          : Limestone
 723: T3_ROCK                                                          : Sandstone
 724: T4_ROCK                                                          : Travertine
 725: T5_ROCK                                                          : Granite
 726: T6_ROCK                                                          : Slate
 727: T7_ROCK                                                          : Basalt
 728: T8_ROCK                                                          : Marble
 729: T4_ROCK_LEVEL1@1                                                 : Uncommon Travertine
 730: T5_ROCK_LEVEL1@1                                                 : Uncommon Granite
 731: T6_ROCK_LEVEL1@1                                                 : Uncommon Slate
 732: T7_ROCK_LEVEL1@1                                                 : Uncommon Basalt
 733: T8_ROCK_LEVEL1@1                                                 : Uncommon Marble
 734: T4_ROCK_LEVEL2@2                                                 : Rare Travertine
 735: T5_ROCK_LEVEL2@2                                                 : Rare Granite
 736: T6_ROCK_LEVEL2@2                                                 : Rare Slate
 737: T7_ROCK_LEVEL2@2                                                 : Rare Basalt
 738: T8_ROCK_LEVEL2@2                                                 : Rare Marble
 739: T4_ROCK_LEVEL3@3                                                 : Exceptional Travertine
 740: T5_ROCK_LEVEL3@3                                                 : Exceptional Granite
 741: T6_ROCK_LEVEL3@3                                                 : Exceptional Slate
 742: T7_ROCK_LEVEL3@3                                                 : Exceptional Basalt
 743: T8_ROCK_LEVEL3@3                                                 : Exceptional Marble
 744: T2_ORE                                                           : Copper Ore
 745: T3_ORE                                                           : Tin Ore
 746: T4_ORE                                                           : Iron Ore
 747: T5_ORE                                                           : Titanium Ore
 748: T6_ORE                                                           : Runite Ore
 749: T7_ORE                                                           : Meteorite Ore
 750: T8_ORE                                                           : Adamantium Ore
 751: T4_ORE_LEVEL1@1                                                  : Uncommon Iron Ore
 752: T5_ORE_LEVEL1@1                                                  : Uncommon Titanium Ore
 753: T6_ORE_LEVEL1@1                                                  : Uncommon Runite Ore
 754: T7_ORE_LEVEL1@1                                                  : Uncommon Meteorite Ore
 755: T8_ORE_LEVEL1@1                                                  : Uncommon Adamantium Ore
 756: T4_ORE_LEVEL2@2                                                  : Rare Iron Ore
 757: T5_ORE_LEVEL2@2                                                  : Rare Titanium Ore
 758: T6_ORE_LEVEL2@2                                                  : Rare Runite Ore
 759: T7_ORE_LEVEL2@2                                                  : Rare Meteorite Ore
 760: T8_ORE_LEVEL2@2                                                  : Rare Adamantium Ore
 761: T4_ORE_LEVEL3@3                                                  : Exceptional Iron Ore
 762: T5_ORE_LEVEL3@3                                                  : Exceptional Titanium Ore
 763: T6_ORE_LEVEL3@3                                                  : Exceptional Runite Ore
 764: T7_ORE_LEVEL3@3                                                  : Exceptional Meteorite Ore
 765: T8_ORE_LEVEL3@3                                                  : Exceptional Adamantium Ore
 766: T1_HIDE                                                          : Scraps of Hide
 767: T2_HIDE                                                          : Rugged Hide
 768: T3_HIDE                                                          : Thin Hide
 769: T4_HIDE                                                          : Medium Hide
 770: T5_HIDE                                                          : Heavy Hide
 771: T6_HIDE                                                          : Robust Hide
 772: T7_HIDE                                                          : Thick Hide
 773: T8_HIDE                                                          : Resilient Hide
 774: T4_HIDE_LEVEL1@1                                                 : Uncommon Medium Hide
 775: T5_HIDE_LEVEL1@1                                                 : Uncommon Heavy Hide
 776: T6_HIDE_LEVEL1@1                                                 : Uncommon Robust Hide
 777: T7_HIDE_LEVEL1@1                                                 : Uncommon Thick Hide
 778: T8_HIDE_LEVEL1@1                                                 : Uncommon Resilient Hide
 779: T4_HIDE_LEVEL2@2                                                 : Rare Medium Hide
 780: T5_HIDE_LEVEL2@2                                                 : Rare Heavy Hide
 781: T6_HIDE_LEVEL2@2                                                 : Rare Robust Hide
 782: T7_HIDE_LEVEL2@2                                                 : Rare Thick Hide
 783: T8_HIDE_LEVEL2@2                                                 : Rare Resilient Hide
 784: T4_HIDE_LEVEL3@3                                                 : Exceptional Medium Hide
 785: T5_HIDE_LEVEL3@3                                                 : Exceptional Heavy Hide
 786: T6_HIDE_LEVEL3@3                                                 : Exceptional Robust Hide
 787: T7_HIDE_LEVEL3@3                                                 : Exceptional Thick Hide
 788: T8_HIDE_LEVEL3@3                                                 : Exceptional Resilient Hide
 789: T2_FIBER                                                         : Cotton
 790: T3_FIBER                                                         : Flax
 791: T4_FIBER                                                         : Hemp
 792: T5_FIBER                                                         : Skyflower
 793: T6_FIBER                                                         : Amberleaf Cotton
 794: T7_FIBER                                                         : Sunflax
 795: T8_FIBER                                                         : Ghost Hemp
 796: T4_FIBER_LEVEL1@1                                                : Uncommon Hemp
 797: T5_FIBER_LEVEL1@1                                                : Uncommon Skyflower
 798: T6_FIBER_LEVEL1@1                                                : Uncommon Amberleaf Cotton
 799: T7_FIBER_LEVEL1@1                                                : Uncommon Sunflax
 800: T8_FIBER_LEVEL1@1                                                : Uncommon Ghost Hemp
 801: T4_FIBER_LEVEL2@2                                                : Rare Hemp
 802: T5_FIBER_LEVEL2@2                                                : Rare Skyflower
 803: T6_FIBER_LEVEL2@2                                                : Rare Amberleaf Cotton
 804: T7_FIBER_LEVEL2@2                                                : Rare Sunflax
 805: T8_FIBER_LEVEL2@2                                                : Rare Ghost Hemp
 806: T4_FIBER_LEVEL3@3                                                : Exceptional Hemp
 807: T5_FIBER_LEVEL3@3                                                : Exceptional Skyflower
 808: T6_FIBER_LEVEL3@3                                                : Exceptional Amberleaf Cotton
 809: T7_FIBER_LEVEL3@3                                                : Exceptional Sunflax
 810: T8_FIBER_LEVEL3@3                                                : Exceptional Ghost Hemp
 811: T2_PLANKS                                                        : Birch Planks
 812: T3_PLANKS                                                        : Chestnut Planks
 813: T4_PLANKS                                                        : Pine Planks
 814: T5_PLANKS                                                        : Cedar Planks
 815: T6_PLANKS                                                        : Bloodoak Planks
 816: T7_PLANKS                                                        : Ashenbark Planks
 817: T8_PLANKS                                                        : Whitewood Planks
 818: T4_PLANKS_LEVEL1@1                                               : Uncommon Pine Planks
 819: T5_PLANKS_LEVEL1@1                                               : Uncommon Cedar Planks
 820: T6_PLANKS_LEVEL1@1                                               : Uncommon Bloodoak Planks
 821: T7_PLANKS_LEVEL1@1                                               : Uncommon Ashenbark Planks
 822: T8_PLANKS_LEVEL1@1                                               : Uncommon Whitewood Planks
 823: T4_PLANKS_LEVEL2@2                                               : Rare Pine Planks
 824: T5_PLANKS_LEVEL2@2                                               : Rare Cedar Planks
 825: T6_PLANKS_LEVEL2@2                                               : Rare Bloodoak Planks
 826: T7_PLANKS_LEVEL2@2                                               : Rare Ashenbark Planks
 827: T8_PLANKS_LEVEL2@2                                               : Rare Whitewood Planks
 828: T4_PLANKS_LEVEL3@3                                               : Exceptional Pine Planks
 829: T5_PLANKS_LEVEL3@3                                               : Exceptional Cedar Planks
 830: T6_PLANKS_LEVEL3@3                                               : Exceptional Bloodoak Planks
 831: T7_PLANKS_LEVEL3@3                                               : Exceptional Ashenbark Planks
 832: T8_PLANKS_LEVEL3@3                                               : Exceptional Whitewood Planks
 833: T2_STONEBLOCK                                                    : Limestone Block
 834: T3_STONEBLOCK                                                    : Sandstone Block
 835: T4_STONEBLOCK                                                    : Travertine Block
 836: T5_STONEBLOCK                                                    : Granite Block
 837: T6_STONEBLOCK                                                    : Slate Block
 838: T7_STONEBLOCK                                                    : Basalt Block
 839: T8_STONEBLOCK                                                    : Marble Block
 840: T2_METALBAR                                                      : Copper Bar
 841: T3_METALBAR                                                      : Bronze Bar
 842: T4_METALBAR                                                      : Steel Bar
 843: T5_METALBAR                                                      : Titanium Steel Bar
 844: T6_METALBAR                                                      : Runite Steel Bar
 845: T7_METALBAR                                                      : Meteorite Steel Bar
 846: T8_METALBAR                                                      : Adamantium Steel Bar
 847: T4_METALBAR_LEVEL1@1                                             : Uncommon Steel Bar
 848: T5_METALBAR_LEVEL1@1                                             : Uncommon Titanium Steel Bar
 849: T6_METALBAR_LEVEL1@1                                             : Uncommon Runite Steel Bar
 850: T7_METALBAR_LEVEL1@1                                             : Uncommon Meteorite Steel Bar
 851: T8_METALBAR_LEVEL1@1                                             : Uncommon Adamantium Steel Bar
 852: T4_METALBAR_LEVEL2@2                                             : Rare Steel Bar
 853: T5_METALBAR_LEVEL2@2                                             : Rare Titanium Steel Bar
 854: T6_METALBAR_LEVEL2@2                                             : Rare Runite Steel Bar
 855: T7_METALBAR_LEVEL2@2                                             : Rare Meteorite Steel Bar
 856: T8_METALBAR_LEVEL2@2                                             : Rare Adamantium Steel Bar
 857: T4_METALBAR_LEVEL3@3                                             : Exceptional Steel Bar
 858: T5_METALBAR_LEVEL3@3                                             : Exceptional Titanium Steel Bar
 859: T6_METALBAR_LEVEL3@3                                             : Exceptional Runite Steel Bar
 860: T7_METALBAR_LEVEL3@3                                             : Exceptional Meteorite Steel Bar
 861: T8_METALBAR_LEVEL3@3                                             : Exceptional Adamantium Steel Bar
 862: T2_LEATHER                                                       : Stiff Leather
 863: T3_LEATHER                                                       : Thick Leather
 864: T4_LEATHER                                                       : Worked Leather
 865: T5_LEATHER                                                       : Cured Leather
 866: T6_LEATHER                                                       : Hardened Leather
 867: T7_LEATHER                                                       : Reinforced Leather
 868: T8_LEATHER                                                       : Fortified Leather
 869: T4_LEATHER_LEVEL1@1                                              : Uncommon Worked Leather
 870: T5_LEATHER_LEVEL1@1                                              : Uncommon Cured Leather
 871: T6_LEATHER_LEVEL1@1                                              : Uncommon Hardened Leather
 872: T7_LEATHER_LEVEL1@1                                              : Uncommon Reinforced Leather
 873: T8_LEATHER_LEVEL1@1                                              : Uncommon Fortified Leather
 874: T4_LEATHER_LEVEL2@2                                              : Rare Worked Leather
 875: T5_LEATHER_LEVEL2@2                                              : Rare Cured Leather
 876: T6_LEATHER_LEVEL2@2                                              : Rare Hardened Leather
 877: T7_LEATHER_LEVEL2@2                                              : Rare Reinforced Leather
 878: T8_LEATHER_LEVEL2@2                                              : Rare Fortified Leather
 879: T4_LEATHER_LEVEL3@3                                              : Exceptional Worked Leather
 880: T5_LEATHER_LEVEL3@3                                              : Exceptional Cured Leather
 881: T6_LEATHER_LEVEL3@3                                              : Exceptional Hardened Leather
 882: T7_LEATHER_LEVEL3@3                                              : Exceptional Reinforced Leather
 883: T8_LEATHER_LEVEL3@3                                              : Exceptional Fortified Leather
 884: T2_CLOTH                                                         : Simple Cloth
 885: T3_CLOTH                                                         : Neat Cloth
 886: T4_CLOTH                                                         : Fine Cloth
 887: T5_CLOTH                                                         : Ornate Cloth
 888: T6_CLOTH                                                         : Lavish Cloth
 889: T7_CLOTH                                                         : Opulent Cloth
 890: T8_CLOTH                                                         : Baroque Cloth
 891: T4_CLOTH_LEVEL1@1                                                : Uncommon Fine Cloth
 892: T5_CLOTH_LEVEL1@1                                                : Uncommon Ornate Cloth
 893: T6_CLOTH_LEVEL1@1                                                : Uncommon Lavish Cloth
 894: T7_CLOTH_LEVEL1@1                                                : Uncommon Opulent Cloth
 895: T8_CLOTH_LEVEL1@1                                                : Uncommon Baroque Cloth
 896: T4_CLOTH_LEVEL2@2                                                : Rare Fine Cloth
 897: T5_CLOTH_LEVEL2@2                                                : Rare Ornate Cloth
 898: T6_CLOTH_LEVEL2@2                                                : Rare Lavish Cloth
 899: T7_CLOTH_LEVEL2@2                                                : Rare Opulent Cloth
 900: T8_CLOTH_LEVEL2@2                                                : Rare Baroque Cloth
 901: T4_CLOTH_LEVEL3@3                                                : Exceptional Fine Cloth
 902: T5_CLOTH_LEVEL3@3                                                : Exceptional Ornate Cloth
 903: T6_CLOTH_LEVEL3@3                                                : Exceptional Lavish Cloth
 904: T7_CLOTH_LEVEL3@3                                                : Exceptional Opulent Cloth
 905: T8_CLOTH_LEVEL3@3                                                : Exceptional Baroque Cloth
 906: T4_ARTEFACT_2H_ARCANESTAFF_HELL                                  : Adept's Occult Orb
 907: T4_ARTEFACT_2H_BOW_HELL                                          : Adept's Demonic Arrowheads
 908: T4_ARTEFACT_2H_BOW_KEEPER                                        : Adept's Carved bone
 909: T4_ARTEFACT_2H_CLEAVER_HELL                                      : Adept's Demonic Blade
 910: T4_ARTEFACT_2H_COMBATSTAFF_MORGANA                               : Adept's Reinforced Morgana Pole
 911: T4_ARTEFACT_2H_CROSSBOWLARGE_MORGANA                             : Adept's Alluring Bolts
 912: T4_ARTEFACT_2H_CURSEDSTAFF_MORGANA                               : Adept's Bloodforged Catalyst
 913: T5_ARTEFACT_2H_CURSEDSTAFF_MORGANA                               : Expert's Bloodforged Catalyst
 914: T6_ARTEFACT_2H_CURSEDSTAFF_MORGANA                               : Master's Bloodforged Catalyst
 915: T7_ARTEFACT_2H_CURSEDSTAFF_MORGANA                               : Grandmaster's Bloodforged Catalyst
 916: T8_ARTEFACT_2H_CURSEDSTAFF_MORGANA                               : Elder's Bloodforged Catalyst
 917: T4_ARTEFACT_2H_DUALAXE_KEEPER                                    : Adept's Keeper Axeheads
 918: T4_ARTEFACT_2H_DUALCROSSBOW_HELL                                 : Adept's Hellish Bolts
 919: T4_ARTEFACT_2H_DUALHAMMER_HELL                                   : Adept's Hellish Hammer Heads
 920: T4_ARTEFACT_2H_DUALSCIMITAR_UNDEAD                               : Adept's Cursed Blades
 921: T4_ARTEFACT_2H_DUALSICKLE_UNDEAD                                 : Adept's Ghastly Blades
 922: T4_ARTEFACT_2H_ENIGMATICORB_MORGANA                              : Adept's Possessed Catalyst
 923: T4_ARTEFACT_2H_FIRESTAFF_HELL                                    : Adept's Burning Orb
 924: T4_ARTEFACT_2H_HALBERD_MORGANA                                   : Adept's Morgana Halberd Head
 925: T4_ARTEFACT_2H_HAMMER_UNDEAD                                     : Adept's Ancient Hammer Head
 926: T4_ARTEFACT_2H_HARPOON_HELL                                      : Adept's Infernal Harpoon Tip
 927: T4_ARTEFACT_MAIN_HOLYSTAFF_MORGANA                               : Adept's Possessed Scroll
 928: T4_ARTEFACT_2H_HOLYSTAFF_HELL                                    : Adept's Infernal Scroll
 929: T4_ARTEFACT_2H_HOLYSTAFF_UNDEAD                                  : Adept's Ghastly Scroll
 930: T4_ARTEFACT_2H_ICECRYSTAL_UNDEAD                                 : Adept's Cursed Frozen Crystal
 931: T4_ARTEFACT_2H_ICEGAUNTLETS_HELL                                 : Adept's Icicle Orb
 932: T4_ARTEFACT_2H_INFERNOSTAFF_MORGANA                              : Adept's Unholy Scroll
 933: T4_ARTEFACT_2H_IRONGAUNTLETS_HELL                                : Adept's Black Leather
 934: T4_ARTEFACT_2H_LONGBOW_UNDEAD                                    : Adept's Ghastly Arrows
 935: T4_ARTEFACT_2H_MACE_MORGANA                                      : Adept's Imbued Mace Head
 936: T4_ARTEFACT_2H_NATURESTAFF_HELL                                  : Adept's Symbol of Blight
 937: T4_ARTEFACT_2H_NATURESTAFF_KEEPER                                : Adept's Preserved Log
 938: T4_ARTEFACT_2H_RAM_KEEPER                                        : Adept's Engraved Log
 939: T4_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD                          : Adept's Lost Crossbow Mechanism
 940: T4_ARTEFACT_2H_ROCKSTAFF_KEEPER                                  : Adept's Preserved Rocks
 941: T4_ARTEFACT_2H_SKULLORB_HELL                                     : Adept's Cursed Jawbone
 942: T4_ARTEFACT_2H_TRIDENT_UNDEAD                                    : Adept's Cursed Barbs
 943: T4_ARTEFACT_2H_TWINSCYTHE_HELL                                   : Adept's Hellish Sicklehead Pair
 944: T4_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD                              : Adept's Lost Arcane Crystal
 945: T4_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD                              : Adept's Lost Cursed Crystal
 946: T4_ARTEFACT_MAIN_FIRESTAFF_KEEPER                                : Adept's Wildfire Orb
 947: T4_ARTEFACT_MAIN_FROSTSTAFF_KEEPER                               : Adept's Hoarfrost Orb
 948: T4_ARTEFACT_MAIN_MACE_HELL                                       : Adept's Infernal Mace Head
 949: T4_ARTEFACT_MAIN_NATURESTAFF_KEEPER                              : Adept's Druidic Inscriptions
 950: T4_ARTEFACT_MAIN_RAPIER_MORGANA                                  : Adept's Hardened Debole
 951: T4_ARTEFACT_MAIN_ROCKMACE_KEEPER                                 : Adept's Runed Rock
 952: T4_ARTEFACT_MAIN_SCIMITAR_MORGANA                                : Adept's Bloodforged Blade
 953: T4_ARTEFACT_MAIN_SPEAR_KEEPER                                    : Adept's Keeper Spearhead
 954: T5_ARTEFACT_2H_ARCANESTAFF_HELL                                  : Expert's Occult Orb
 955: T5_ARTEFACT_2H_BOW_HELL                                          : Expert's Demonic Arrowheads
 956: T5_ARTEFACT_2H_BOW_KEEPER                                        : Expert's Carved bone
 957: T5_ARTEFACT_2H_CLEAVER_HELL                                      : Expert's Demonic Blade
 958: T5_ARTEFACT_2H_COMBATSTAFF_MORGANA                               : Expert's Reinforced Morgana Pole
 959: T5_ARTEFACT_2H_CROSSBOWLARGE_MORGANA                             : Expert's Alluring Bolts
 960: T5_ARTEFACT_2H_DUALAXE_KEEPER                                    : Expert's Keeper Axeheads
 961: T5_ARTEFACT_2H_DUALCROSSBOW_HELL                                 : Expert's Hellish Bolts
 962: T5_ARTEFACT_2H_DUALHAMMER_HELL                                   : Expert's Hellish Hammer Heads
 963: T5_ARTEFACT_2H_DUALSCIMITAR_UNDEAD                               : Expert's Cursed Blades
 964: T5_ARTEFACT_2H_DUALSICKLE_UNDEAD                                 : Expert's Ghastly Blades
 965: T5_ARTEFACT_2H_ENIGMATICORB_MORGANA                              : Expert's Possessed Catalyst
 966: T5_ARTEFACT_2H_FIRESTAFF_HELL                                    : Expert's Burning Orb
 967: T5_ARTEFACT_2H_HALBERD_MORGANA                                   : Expert's Morgana Halberd Head
 968: T5_ARTEFACT_2H_HAMMER_UNDEAD                                     : Expert's Ancient Hammer Head
 969: T5_ARTEFACT_2H_HARPOON_HELL                                      : Expert's Infernal Harpoon Tip
 970: T5_ARTEFACT_MAIN_HOLYSTAFF_MORGANA                               : Expert's Possessed Scroll
 971: T5_ARTEFACT_2H_HOLYSTAFF_HELL                                    : Expert's Infernal Scroll
 972: T5_ARTEFACT_2H_HOLYSTAFF_UNDEAD                                  : Expert's Ghastly Scroll
 973: T5_ARTEFACT_2H_ICECRYSTAL_UNDEAD                                 : Expert's Cursed Frozen Crystal
 974: T5_ARTEFACT_2H_ICEGAUNTLETS_HELL                                 : Expert's Icicle Orb
 975: T5_ARTEFACT_2H_INFERNOSTAFF_MORGANA                              : Expert's Unholy Scroll
 976: T5_ARTEFACT_2H_IRONGAUNTLETS_HELL                                : Expert's Black Leather
 977: T5_ARTEFACT_2H_LONGBOW_UNDEAD                                    : Expert's Ghastly Arrows
 978: T5_ARTEFACT_2H_MACE_MORGANA                                      : Expert's Imbued Mace Head
 979: T5_ARTEFACT_2H_NATURESTAFF_HELL                                  : Expert's Symbol of Blight
 980: T5_ARTEFACT_2H_NATURESTAFF_KEEPER                                : Expert's Preserved Log
 981: T5_ARTEFACT_2H_RAM_KEEPER                                        : Expert's Engraved Log
 982: T5_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD                          : Expert's Lost Crossbow Mechanism
 983: T5_ARTEFACT_2H_ROCKSTAFF_KEEPER                                  : Expert's Preserved Rocks
 984: T4_ARTEFACT_2H_SCYTHE_HELL                                       : Adept's Hellish Sicklehead
 985: T5_ARTEFACT_2H_SCYTHE_HELL                                       : Expert's Hellish Sicklehead
 986: T6_ARTEFACT_2H_SCYTHE_HELL                                       : Master's Hellish Sicklehead
 987: T7_ARTEFACT_2H_SCYTHE_HELL                                       : Grandmaster's Hellish Sicklehead
 988: T8_ARTEFACT_2H_SCYTHE_HELL                                       : Elder's Hellish Sicklehead
 989: T5_ARTEFACT_2H_SKULLORB_HELL                                     : Expert's Cursed Jawbone
 990: T5_ARTEFACT_2H_TRIDENT_UNDEAD                                    : Expert's Cursed Barbs
 991: T5_ARTEFACT_2H_TWINSCYTHE_HELL                                   : Expert's Hellish Sicklehead Pair
 992: T5_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD                              : Expert's Lost Arcane Crystal
 993: T5_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD                              : Expert's Lost Cursed Crystal
 994: T5_ARTEFACT_MAIN_FIRESTAFF_KEEPER                                : Expert's Wildfire Orb
 995: T5_ARTEFACT_MAIN_FROSTSTAFF_KEEPER                               : Expert's Hoarfrost Orb
 996: T5_ARTEFACT_MAIN_MACE_HELL                                       : Expert's Infernal Mace Head
 997: T5_ARTEFACT_MAIN_NATURESTAFF_KEEPER                              : Expert's Druidic Inscriptions
 998: T5_ARTEFACT_MAIN_RAPIER_MORGANA                                  : Expert's Hardened Debole
 999: T5_ARTEFACT_MAIN_ROCKMACE_KEEPER                                 : Expert's Runed Rock
1000: T5_ARTEFACT_MAIN_SCIMITAR_MORGANA                                : Expert's Bloodforged Blade
1001: T5_ARTEFACT_MAIN_SPEAR_KEEPER                                    : Expert's Keeper Spearhead
1002: T6_ARTEFACT_2H_ARCANESTAFF_HELL                                  : Master's Occult Orb
1003: T6_ARTEFACT_2H_BOW_HELL                                          : Master's Demonic Arrowheads
1004: T6_ARTEFACT_2H_BOW_KEEPER                                        : Master's Carved bone
1005: T6_ARTEFACT_2H_CLEAVER_HELL                                      : Master's Demonic Blade
1006: T6_ARTEFACT_2H_COMBATSTAFF_MORGANA                               : Master's Reinforced Morgana Pole
1007: T6_ARTEFACT_2H_CROSSBOWLARGE_MORGANA                             : Master's Alluring Bolts
1008: T6_ARTEFACT_2H_DUALAXE_KEEPER                                    : Master's Keeper Axeheads
1009: T6_ARTEFACT_2H_DUALCROSSBOW_HELL                                 : Master's Hellish Bolts
1010: T6_ARTEFACT_2H_DUALHAMMER_HELL                                   : Master's Hellish Hammer Heads
1011: T6_ARTEFACT_2H_DUALSCIMITAR_UNDEAD                               : Master's Cursed Blades
1012: T6_ARTEFACT_2H_DUALSICKLE_UNDEAD                                 : Master's Ghastly Blades
1013: T6_ARTEFACT_2H_ENIGMATICORB_MORGANA                              : Master's Possessed Catalyst
1014: T6_ARTEFACT_2H_FIRESTAFF_HELL                                    : Master's Burning Orb
1015: T6_ARTEFACT_2H_HALBERD_MORGANA                                   : Master's Morgana Halberd Head
1016: T6_ARTEFACT_2H_HAMMER_UNDEAD                                     : Master's Ancient Hammer Head
1017: T6_ARTEFACT_2H_HARPOON_HELL                                      : Master's Infernal Harpoon Tip
1018: T6_ARTEFACT_MAIN_HOLYSTAFF_MORGANA                               : Master's Possessed Scroll
1019: T6_ARTEFACT_2H_HOLYSTAFF_HELL                                    : Master's Infernal Scroll
1020: T6_ARTEFACT_2H_HOLYSTAFF_UNDEAD                                  : Master's Ghastly Scroll
1021: T6_ARTEFACT_2H_ICECRYSTAL_UNDEAD                                 : Master's Cursed Frozen Crystal
1022: T6_ARTEFACT_2H_ICEGAUNTLETS_HELL                                 : Master's Icicle Orb
1023: T6_ARTEFACT_2H_INFERNOSTAFF_MORGANA                              : Master's Unholy Scroll
1024: T6_ARTEFACT_2H_IRONGAUNTLETS_HELL                                : Master's Black Leather
1025: T6_ARTEFACT_2H_LONGBOW_UNDEAD                                    : Master's Ghastly Arrows
1026: T6_ARTEFACT_2H_MACE_MORGANA                                      : Master's Imbued Mace Head
1027: T6_ARTEFACT_2H_NATURESTAFF_HELL                                  : Master's Symbol of Blight
1028: T6_ARTEFACT_2H_NATURESTAFF_KEEPER                                : Master's Preserved Log
1029: T6_ARTEFACT_2H_RAM_KEEPER                                        : Master's Engraved Log
1030: T6_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD                          : Master's Lost Crossbow Mechanism
1031: T6_ARTEFACT_2H_ROCKSTAFF_KEEPER                                  : Master's Preserved Rocks
1032: T6_ARTEFACT_2H_SKULLORB_HELL                                     : Master's Cursed Jawbone
1033: T6_ARTEFACT_2H_TRIDENT_UNDEAD                                    : Master's Cursed Barbs
1034: T6_ARTEFACT_2H_TWINSCYTHE_HELL                                   : Master's Hellish Sicklehead Pair
1035: T6_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD                              : Master's Lost Arcane Crystal
1036: T6_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD                              : Master's Lost Cursed Crystal
1037: T6_ARTEFACT_MAIN_FIRESTAFF_KEEPER                                : Master's Wildfire Orb
1038: T6_ARTEFACT_MAIN_FROSTSTAFF_KEEPER                               : Master's Hoarfrost Orb
1039: T6_ARTEFACT_MAIN_MACE_HELL                                       : Master's Infernal Mace Head
1040: T6_ARTEFACT_MAIN_NATURESTAFF_KEEPER                              : Master's Druidic Inscriptions
1041: T6_ARTEFACT_MAIN_RAPIER_MORGANA                                  : Master's Hardened Debole
1042: T6_ARTEFACT_MAIN_ROCKMACE_KEEPER                                 : Master's Runed Rock
1043: T6_ARTEFACT_MAIN_SCIMITAR_MORGANA                                : Master's Bloodforged Blade
1044: T6_ARTEFACT_MAIN_SPEAR_KEEPER                                    : Master's Keeper Spearhead
1045: T7_ARTEFACT_2H_ARCANESTAFF_HELL                                  : Grandmaster's Occult Orb
1046: T7_ARTEFACT_2H_BOW_HELL                                          : Grandmaster's Demonic Arrowheads
1047: T7_ARTEFACT_2H_BOW_KEEPER                                        : Grandmaster's Carved Bone
1048: T7_ARTEFACT_2H_CLEAVER_HELL                                      : Grandmaster's Demonic Blade
1049: T7_ARTEFACT_2H_COMBATSTAFF_MORGANA                               : Grandmaster's Reinforced Morgana Pole
1050: T7_ARTEFACT_2H_CROSSBOWLARGE_MORGANA                             : Grandmaster's Alluring Bolts
1051: T7_ARTEFACT_2H_DUALAXE_KEEPER                                    : Grandmaster's Keeper Axeheads
1052: T7_ARTEFACT_2H_DUALCROSSBOW_HELL                                 : Grandmaster's Hellish Bolts
1053: T7_ARTEFACT_2H_DUALHAMMER_HELL                                   : Grandmaster's Hellish Hammer Heads
1054: T7_ARTEFACT_2H_DUALSCIMITAR_UNDEAD                               : Grandmaster's Cursed Blades
1055: T7_ARTEFACT_2H_DUALSICKLE_UNDEAD                                 : Grandmaster's Ghastly Blades
1056: T7_ARTEFACT_2H_ENIGMATICORB_MORGANA                              : Grandmaster's Possessed Catalyst
1057: T7_ARTEFACT_2H_FIRESTAFF_HELL                                    : Grandmaster's Burning Orb
1058: T7_ARTEFACT_2H_HALBERD_MORGANA                                   : Grandmaster's Morgana Halberd Head
1059: T7_ARTEFACT_2H_HAMMER_UNDEAD                                     : Grandmaster's Ancient Hammer Head
1060: T7_ARTEFACT_2H_HARPOON_HELL                                      : Grandmaster's Infernal Harpoon Tip
1061: T7_ARTEFACT_MAIN_HOLYSTAFF_MORGANA                               : Grandmaster's Possessed Scroll
1062: T7_ARTEFACT_2H_HOLYSTAFF_HELL                                    : Grandmaster's Infernal Scroll
1063: T7_ARTEFACT_2H_HOLYSTAFF_UNDEAD                                  : Grandmaster's Ghastly Scroll
1064: T7_ARTEFACT_2H_ICECRYSTAL_UNDEAD                                 : Grandmaster's Cursed Frozen Crystal
1065: T7_ARTEFACT_2H_ICEGAUNTLETS_HELL                                 : Grandmaster's Icicle Orb
1066: T7_ARTEFACT_2H_INFERNOSTAFF_MORGANA                              : Grandmaster's Unholy Scroll
1067: T7_ARTEFACT_2H_IRONGAUNTLETS_HELL                                : Grandmaster's Black Leather
1068: T7_ARTEFACT_2H_LONGBOW_UNDEAD                                    : Grandmaster's Ghastly Arrows
1069: T7_ARTEFACT_2H_MACE_MORGANA                                      : Grandmaster's Imbued Mace Head
1070: T7_ARTEFACT_2H_NATURESTAFF_HELL                                  : Grandmaster's Symbol of Blight
1071: T7_ARTEFACT_2H_NATURESTAFF_KEEPER                                : Grandmaster's Preserved Log
1072: T7_ARTEFACT_2H_RAM_KEEPER                                        : Grandmaster's Engraved Log
1073: T7_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD                          : Grandmaster's Lost Crossbow Mechanism
1074: T7_ARTEFACT_2H_ROCKSTAFF_KEEPER                                  : Grandmaster's Preserved Rocks
1075: T7_ARTEFACT_2H_SKULLORB_HELL                                     : Grandmaster's Cursed Jawbone
1076: T7_ARTEFACT_2H_TRIDENT_UNDEAD                                    : Grandmaster's Cursed Barbs
1077: T7_ARTEFACT_2H_TWINSCYTHE_HELL                                   : Grandmaster's Hellish Sicklehead Pair
1078: T7_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD                              : Grandmaster's Lost Arcane Crystal
1079: T7_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD                              : Grandmaster's Lost Cursed Crystal
1080: T7_ARTEFACT_MAIN_FIRESTAFF_KEEPER                                : Grandmaster's Wildfire Orb
1081: T7_ARTEFACT_MAIN_FROSTSTAFF_KEEPER                               : Grandmaster's Hoarfrost Orb
1082: T7_ARTEFACT_MAIN_MACE_HELL                                       : Grandmaster's Infernal Mace Head
1083: T7_ARTEFACT_MAIN_NATURESTAFF_KEEPER                              : Grandmaster's Druidic Inscriptions
1084: T7_ARTEFACT_MAIN_RAPIER_MORGANA                                  : Grandmaster's Hardened Debole
1085: T7_ARTEFACT_MAIN_ROCKMACE_KEEPER                                 : Grandmaster's Runed Rock
1086: T7_ARTEFACT_MAIN_SCIMITAR_MORGANA                                : Grandmaster's Bloodforged Blade
1087: T7_ARTEFACT_MAIN_SPEAR_KEEPER                                    : Grandmaster's Keeper Spearhead
1088: T8_ARTEFACT_2H_ARCANESTAFF_HELL                                  : Elder's Occult Orb
1089: T8_ARTEFACT_2H_BOW_HELL                                          : Elder's Demonic Arrowheads
1090: T8_ARTEFACT_2H_BOW_KEEPER                                        : Elder's Carved bone
1091: T8_ARTEFACT_2H_CLEAVER_HELL                                      : Elder's Demonic Blade
1092: T8_ARTEFACT_2H_COMBATSTAFF_MORGANA                               : Elder's Reinforced Morgana Pole
1093: T8_ARTEFACT_2H_CROSSBOWLARGE_MORGANA                             : Elder's Alluring Bolts
1094: T8_ARTEFACT_2H_DUALAXE_KEEPER                                    : Elder's Keeper Axeheads
1095: T8_ARTEFACT_2H_DUALCROSSBOW_HELL                                 : Elder's Hellish Bolts
1096: T8_ARTEFACT_2H_DUALHAMMER_HELL                                   : Elder's Hellish Hammer Heads
1097: T8_ARTEFACT_2H_DUALSCIMITAR_UNDEAD                               : Elder's Cursed Blades
1098: T8_ARTEFACT_2H_DUALSICKLE_UNDEAD                                 : Elder's Ghastly Blades
1099: T8_ARTEFACT_2H_ENIGMATICORB_MORGANA                              : Elder's Possessed Catalyst
1100: T8_ARTEFACT_2H_FIRESTAFF_HELL                                    : Elder's Burning Orb
1101: T8_ARTEFACT_2H_HALBERD_MORGANA                                   : Elder's Morgana Halberd Head
1102: T8_ARTEFACT_2H_HAMMER_UNDEAD                                     : Elder's Ancient Hammer Head
1103: T8_ARTEFACT_2H_HARPOON_HELL                                      : Elder's Infernal Harpoon Tip
1104: T8_ARTEFACT_MAIN_HOLYSTAFF_MORGANA                               : Elder's Possessed Scroll
1105: T8_ARTEFACT_2H_HOLYSTAFF_HELL                                    : Elder's Infernal Scroll
1106: T8_ARTEFACT_2H_HOLYSTAFF_UNDEAD                                  : Elder's Ghastly Scroll
1107: T8_ARTEFACT_2H_ICECRYSTAL_UNDEAD                                 : Elder's Cursed Frozen Crystal
1108: T8_ARTEFACT_2H_ICEGAUNTLETS_HELL                                 : Elder's Icicle Orb
1109: T8_ARTEFACT_2H_INFERNOSTAFF_MORGANA                              : Elder's Unholy Scroll
1110: T8_ARTEFACT_2H_IRONGAUNTLETS_HELL                                : Elder's Black Leather
1111: T8_ARTEFACT_2H_LONGBOW_UNDEAD                                    : Elder's Ghastly Arrows
1112: T8_ARTEFACT_2H_MACE_MORGANA                                      : Elder's Imbued Mace Head
1113: T8_ARTEFACT_2H_NATURESTAFF_HELL                                  : Elder's Symbol of Blight
1114: T8_ARTEFACT_2H_NATURESTAFF_KEEPER                                : Elder's Preserved Log
1115: T8_ARTEFACT_2H_RAM_KEEPER                                        : Elder's Engraved Log
1116: T8_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD                          : Elder's Lost Crossbow Mechanism
1117: T8_ARTEFACT_2H_ROCKSTAFF_KEEPER                                  : Elder's Preserved Rocks
1118: T8_ARTEFACT_2H_SKULLORB_HELL                                     : Elder's Cursed Jawbone
1119: T8_ARTEFACT_2H_TRIDENT_UNDEAD                                    : Elder's Cursed Barbs
1120: T8_ARTEFACT_2H_TWINSCYTHE_HELL                                   : Elder's Hellish Sicklehead Pair
1121: T8_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD                              : Elder's Lost Arcane Crystal
1122: T8_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD                              : Elder's Lost Cursed Crystal
1123: T8_ARTEFACT_MAIN_FIRESTAFF_KEEPER                                : Elder's Wildfire Orb
1124: T8_ARTEFACT_MAIN_FROSTSTAFF_KEEPER                               : Elder's Hoarfrost Orb
1125: T8_ARTEFACT_MAIN_MACE_HELL                                       : Elder's Infernal Mace Head
1126: T8_ARTEFACT_MAIN_NATURESTAFF_KEEPER                              : Elder's Druidic Inscriptions
1127: T8_ARTEFACT_MAIN_RAPIER_MORGANA                                  : Elder's Hardened Debole
1128: T8_ARTEFACT_MAIN_ROCKMACE_KEEPER                                 : Elder's Runed Rock
1129: T8_ARTEFACT_MAIN_SCIMITAR_MORGANA                                : Elder's Bloodforged Blade
1130: T8_ARTEFACT_MAIN_SPEAR_KEEPER                                    : Elder's Keeper Spearhead
1131: T4_ARTEFACT_2H_DAGGER_KATAR_AVALON                               : Adept's Bloodstained Antiquities
1132: T4_ARTEFACT_MAIN_SPEAR_LANCE_AVALON                              : Adept's Ruined Ancestral Vamplate
1133: T4_ARTEFACT_2H_AXE_AVALON                                        : Adept's Avalonian Battle Memoir
1134: T4_ARTEFACT_2H_CLAYMORE_AVALON                                   : Adept's Remnants of the Old King
1135: T4_ARTEFACT_2H_QUARTERSTAFF_AVALON                               : Adept's Timeworn Walking Staff
1136: T4_ARTEFACT_2H_HAMMER_AVALON                                     : Adept's Massive Metallic Hand
1137: T4_ARTEFACT_2H_DUALMACE_AVALON                                   : Adept's Broken Oaths
1138: T4_ARTEFACT_2H_BOW_AVALON                                        : Adept's Immaculately Crafted Riser
1139: T4_ARTEFACT_2H_CROSSBOW_CANNON_AVALON                            : Adept's Humming Avalonian Whirligig
1140: T4_ARTEFACT_MAIN_CURSEDSTAFF_AVALON                              : Adept's Fractured Opaque Orb
1141: T4_ARTEFACT_2H_FIRE_RINGPAIR_AVALON                              : Adept's Glowing Harmonic Ring
1142: T4_ARTEFACT_MAIN_FROSTSTAFF_AVALON                               : Adept's Chilled Crystalline Shard
1143: T4_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON                            : Adept's Hypnotic Harmonic Ring
1144: T4_ARTEFACT_MAIN_HOLYSTAFF_AVALON                                : Adept's Messianic Curio
1145: T4_ARTEFACT_MAIN_NATURESTAFF_AVALON                              : Adept's Uprooted Perennial Sapling
1146: T5_ARTEFACT_2H_DAGGER_KATAR_AVALON                               : Expert's Bloodstained Antiquities
1147: T5_ARTEFACT_MAIN_SPEAR_LANCE_AVALON                              : Expert's Ruined Ancestral Vamplate
1148: T5_ARTEFACT_2H_AXE_AVALON                                        : Expert's Avalonian Battle Memoir
1149: T5_ARTEFACT_2H_CLAYMORE_AVALON                                   : Expert's Remnants of the Old King
1150: T5_ARTEFACT_2H_QUARTERSTAFF_AVALON                               : Expert's Timeworn Walking Staff
1151: T5_ARTEFACT_2H_HAMMER_AVALON                                     : Expert's Massive Metallic Hand
1152: T5_ARTEFACT_2H_DUALMACE_AVALON                                   : Expert's Broken Oaths
1153: T5_ARTEFACT_2H_BOW_AVALON                                        : Expert's Immaculately Crafted Riser
1154: T5_ARTEFACT_2H_CROSSBOW_CANNON_AVALON                            : Expert's Humming Avalonian Whirligig
1155: T5_ARTEFACT_MAIN_CURSEDSTAFF_AVALON                              : Expert's Fractured Opaque Orb
1156: T5_ARTEFACT_2H_FIRE_RINGPAIR_AVALON                              : Expert's Glowing Harmonic Ring
1157: T5_ARTEFACT_MAIN_FROSTSTAFF_AVALON                               : Expert's Chilled Crystalline Shard
1158: T5_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON                            : Expert's Hypnotic Harmonic Ring
1159: T5_ARTEFACT_MAIN_HOLYSTAFF_AVALON                                : Expert's Messianic Curio
1160: T5_ARTEFACT_MAIN_NATURESTAFF_AVALON                              : Expert's Uprooted Perennial Sapling
1161: T6_ARTEFACT_2H_DAGGER_KATAR_AVALON                               : Master's Bloodstained Antiquities
1162: T6_ARTEFACT_MAIN_SPEAR_LANCE_AVALON                              : Master's Ruined Ancestral Vamplate
1163: T6_ARTEFACT_2H_AXE_AVALON                                        : Master's Avalonian Battle Memoir
1164: T6_ARTEFACT_2H_CLAYMORE_AVALON                                   : Master's Remnants of the Old King
1165: T6_ARTEFACT_2H_QUARTERSTAFF_AVALON                               : Master's Timeworn Walking Staff
1166: T6_ARTEFACT_2H_HAMMER_AVALON                                     : Master's Massive Metallic Hand
1167: T6_ARTEFACT_2H_DUALMACE_AVALON                                   : Master's Broken Oaths
1168: T6_ARTEFACT_2H_BOW_AVALON                                        : Master's Immaculately Crafted Riser
1169: T6_ARTEFACT_2H_CROSSBOW_CANNON_AVALON                            : Master's Humming Avalonian Whirligig
1170: T6_ARTEFACT_MAIN_CURSEDSTAFF_AVALON                              : Master's Fractured Opaque Orb
1171: T6_ARTEFACT_2H_FIRE_RINGPAIR_AVALON                              : Master's Glowing Harmonic Ring
1172: T6_ARTEFACT_MAIN_FROSTSTAFF_AVALON                               : Master's Chilled Crystalline Shard
1173: T6_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON                            : Master's Hypnotic Harmonic Ring
1174: T6_ARTEFACT_MAIN_HOLYSTAFF_AVALON                                : Master's Messianic Curio
1175: T6_ARTEFACT_MAIN_NATURESTAFF_AVALON                              : Master's Uprooted Perennial Sapling
1176: T7_ARTEFACT_2H_DAGGER_KATAR_AVALON                               : Grandmaster's Bloodstained Antiquities
1177: T7_ARTEFACT_MAIN_SPEAR_LANCE_AVALON                              : Grandmaster's Ruined Ancestral Vamplate
1178: T7_ARTEFACT_2H_AXE_AVALON                                        : Grandmaster's Avalonian Battle Memoir
1179: T7_ARTEFACT_2H_CLAYMORE_AVALON                                   : Grandmaster's Remnants of the Old King
1180: T7_ARTEFACT_2H_QUARTERSTAFF_AVALON                               : Grandmaster's Timeworn Walking Staff
1181: T7_ARTEFACT_2H_HAMMER_AVALON                                     : Grandmaster's Massive Metallic Hand
1182: T7_ARTEFACT_2H_DUALMACE_AVALON                                   : Grandmaster's Broken Oaths
1183: T7_ARTEFACT_2H_BOW_AVALON                                        : Grandmaster's Immaculately Crafted Riser
1184: T7_ARTEFACT_2H_CROSSBOW_CANNON_AVALON                            : Grandmaster's Humming Avalonian Whirligig
1185: T7_ARTEFACT_MAIN_CURSEDSTAFF_AVALON                              : Grandmaster's Fractured Opaque Orb
1186: T7_ARTEFACT_2H_FIRE_RINGPAIR_AVALON                              : Grandmaster's Glowing Harmonic Ring
1187: T7_ARTEFACT_MAIN_FROSTSTAFF_AVALON                               : Grandmaster's Chilled Crystalline Shard
1188: T7_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON                            : Grandmaster's Hypnotic Harmonic Ring
1189: T7_ARTEFACT_MAIN_HOLYSTAFF_AVALON                                : Grandmaster's Messianic Curio
1190: T7_ARTEFACT_MAIN_NATURESTAFF_AVALON                              : Grandmaster's Uprooted Perennial Sapling
1191: T8_ARTEFACT_2H_DAGGER_KATAR_AVALON                               : Elder's Bloodstained Antiquities
1192: T8_ARTEFACT_MAIN_SPEAR_LANCE_AVALON                              : Elder's Ruined Ancestral Vamplate
1193: T8_ARTEFACT_2H_AXE_AVALON                                        : Elder's Avalonian Battle Memoir
1194: T8_ARTEFACT_2H_CLAYMORE_AVALON                                   : Elder's Remnants of the Old King
1195: T8_ARTEFACT_2H_QUARTERSTAFF_AVALON                               : Elder's Timeworn Walking Staff
1196: T8_ARTEFACT_2H_HAMMER_AVALON                                     : Elder's Massive Metallic Hand
1197: T8_ARTEFACT_2H_DUALMACE_AVALON                                   : Elder's Broken Oaths
1198: T8_ARTEFACT_2H_BOW_AVALON                                        : Elder's Immaculately Crafted Riser
1199: T8_ARTEFACT_2H_CROSSBOW_CANNON_AVALON                            : Elder's Humming Avalonian Whirligig
1200: T8_ARTEFACT_MAIN_CURSEDSTAFF_AVALON                              : Elder's Fractured Opaque Orb
1201: T8_ARTEFACT_2H_FIRE_RINGPAIR_AVALON                              : Elder's Glowing Harmonic Ring
1202: T8_ARTEFACT_MAIN_FROSTSTAFF_AVALON                               : Elder's Chilled Crystalline Shard
1203: T8_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON                            : Elder's Hypnotic Harmonic Ring
1204: T8_ARTEFACT_MAIN_HOLYSTAFF_AVALON                                : Elder's Messianic Curio
1205: T8_ARTEFACT_MAIN_NATURESTAFF_AVALON                              : Elder's Uprooted Perennial Sapling
1206: T4_ARTEFACT_2H_KNUCKLES_KEEPER                                   : Adept's Ursine Guardian Remains
1207: T5_ARTEFACT_2H_KNUCKLES_KEEPER                                   : Expert's Ursine Guardian Remains
1208: T6_ARTEFACT_2H_KNUCKLES_KEEPER                                   : Master's Ursine Guardian Remains
1209: T7_ARTEFACT_2H_KNUCKLES_KEEPER                                   : Grandmaster's Ursine Guardian Remains
1210: T8_ARTEFACT_2H_KNUCKLES_KEEPER                                   : Elder's Ursine Guardian Remains
1211: T4_ARTEFACT_2H_KNUCKLES_HELL                                     : Adept's Severed Demonic Horns
1212: T5_ARTEFACT_2H_KNUCKLES_HELL                                     : Expert's Severed Demonic Horns
1213: T6_ARTEFACT_2H_KNUCKLES_HELL                                     : Master's Severed Demonic Horns
1214: T7_ARTEFACT_2H_KNUCKLES_HELL                                     : Grandmaster's Severed Demonic Horns
1215: T8_ARTEFACT_2H_KNUCKLES_HELL                                     : Elder's Severed Demonic Horns
1216: T4_ARTEFACT_2H_KNUCKLES_MORGANA                                  : Adept's Warped Raven Plate
1217: T5_ARTEFACT_2H_KNUCKLES_MORGANA                                  : Expert's Warped Raven Plate
1218: T6_ARTEFACT_2H_KNUCKLES_MORGANA                                  : Master's Warped Raven Plate
1219: T7_ARTEFACT_2H_KNUCKLES_MORGANA                                  : Grandmaster's Warped Raven Plate
1220: T8_ARTEFACT_2H_KNUCKLES_MORGANA                                  : Elder's Warped Raven Plate
1221: T4_ARTEFACT_2H_KNUCKLES_AVALON                                   : Adept's Damaged Avalonian Gauntlet
1222: T5_ARTEFACT_2H_KNUCKLES_AVALON                                   : Expert's Damaged Avalonian Gauntlet
1223: T6_ARTEFACT_2H_KNUCKLES_AVALON                                   : Master's Damaged Avalonian Gauntlet
1224: T7_ARTEFACT_2H_KNUCKLES_AVALON                                   : Grandmaster's Damaged Avalonian Gauntlet
1225: T8_ARTEFACT_2H_KNUCKLES_AVALON                                   : Elder's Damaged Avalonian Gauntlet
1226: T4_ARTEFACT_MAIN_DAGGER_HELL                                     : Adept's Broken Demonic Fang
1227: T5_ARTEFACT_MAIN_DAGGER_HELL                                     : Expert's Broken Demonic Fang
1228: T6_ARTEFACT_MAIN_DAGGER_HELL                                     : Master's Broken Demonic Fang
1229: T7_ARTEFACT_MAIN_DAGGER_HELL                                     : Grandmaster's Broken Demonic Fang
1230: T8_ARTEFACT_MAIN_DAGGER_HELL                                     : Elder's Broken Demonic Fang
1231: T4_ARTEFACT_OFF_TOWERSHIELD_UNDEAD                               : Adept's Ancient Shield Core
1232: T5_ARTEFACT_OFF_TOWERSHIELD_UNDEAD                               : Expert's Ancient Shield Core
1233: T6_ARTEFACT_OFF_TOWERSHIELD_UNDEAD                               : Master's Ancient Shield Core
1234: T7_ARTEFACT_OFF_TOWERSHIELD_UNDEAD                               : Grandmaster's Ancient Shield Core
1235: T8_ARTEFACT_OFF_TOWERSHIELD_UNDEAD                               : Elder's Ancient Shield Core
1236: T4_ARTEFACT_OFF_SHIELD_HELL                                      : Adept's Infernal Shield Core
1237: T5_ARTEFACT_OFF_SHIELD_HELL                                      : Expert's Infernal Shield Core
1238: T6_ARTEFACT_OFF_SHIELD_HELL                                      : Master's Infernal Shield Core
1239: T7_ARTEFACT_OFF_SHIELD_HELL                                      : Grandmaster's Infernal Shield Core
1240: T8_ARTEFACT_OFF_SHIELD_HELL                                      : Elder's Infernal Shield Core
1241: T4_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA                             : Adept's Bloodforged Spikes
1242: T5_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA                             : Expert's Bloodforged Spikes
1243: T6_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA                             : Master's Bloodforged Spikes
1244: T7_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA                             : Grandmaster's Bloodforged Spikes
1245: T8_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA                             : Elder's Bloodforged Spikes
1246: T4_ARTEFACT_OFF_SHIELD_AVALON                                    : Adept's Crushed Avalonian Heirloom
1247: T5_ARTEFACT_OFF_SHIELD_AVALON                                    : Expert's Crushed Avalonian Heirloom
1248: T6_ARTEFACT_OFF_SHIELD_AVALON                                    : Master's Crushed Avalonian Heirloom
1249: T7_ARTEFACT_OFF_SHIELD_AVALON                                    : Grandmaster's Crushed Avalonian Heirloom
1250: T8_ARTEFACT_OFF_SHIELD_AVALON                                    : Elder's Crushed Avalonian Heirloom
1251: T4_ARTEFACT_OFF_ORB_MORGANA                                      : Adept's Alluring Crystal
1252: T5_ARTEFACT_OFF_ORB_MORGANA                                      : Expert's Alluring Crystal
1253: T6_ARTEFACT_OFF_ORB_MORGANA                                      : Master's Alluring Crystal
1254: T7_ARTEFACT_OFF_ORB_MORGANA                                      : Grandmaster's Alluring Crystal
1255: T8_ARTEFACT_OFF_ORB_MORGANA                                      : Elder's Alluring Crystal
1256: T4_ARTEFACT_OFF_DEMONSKULL_HELL                                  : Adept's Demonic Jawbone
1257: T5_ARTEFACT_OFF_DEMONSKULL_HELL                                  : Expert's Demonic Jawbone
1258: T6_ARTEFACT_OFF_DEMONSKULL_HELL                                  : Master's Demonic Jawbone
1259: T7_ARTEFACT_OFF_DEMONSKULL_HELL                                  : Grandmaster's Demonic Jawbone
1260: T8_ARTEFACT_OFF_DEMONSKULL_HELL                                  : Elder's Demonic Jawbone
1261: T4_ARTEFACT_OFF_TOTEM_KEEPER                                     : Adept's Inscribed Stone
1262: T5_ARTEFACT_OFF_TOTEM_KEEPER                                     : Expert's Inscribed Stone
1263: T6_ARTEFACT_OFF_TOTEM_KEEPER                                     : Master's Inscribed Stone
1264: T7_ARTEFACT_OFF_TOTEM_KEEPER                                     : Grandmaster's Inscribed Stone
1265: T8_ARTEFACT_OFF_TOTEM_KEEPER                                     : Elder's Inscribed Stone
1266: T4_ARTEFACT_OFF_CENSER_AVALON                                    : Adept's Severed Celestial Keepsake
1267: T5_ARTEFACT_OFF_CENSER_AVALON                                    : Expert's Severed Celestial Keepsake
1268: T6_ARTEFACT_OFF_CENSER_AVALON                                    : Master's Severed Celestial Keepsake
1269: T7_ARTEFACT_OFF_CENSER_AVALON                                    : Grandmaster's Severed Celestial Keepsake
1270: T8_ARTEFACT_OFF_CENSER_AVALON                                    : Elder's Severed Celestial Keepsake
1271: T4_ARTEFACT_OFF_HORN_KEEPER                                      : Adept's Runed Horn
1272: T5_ARTEFACT_OFF_HORN_KEEPER                                      : Expert's Runed Horn
1273: T6_ARTEFACT_OFF_HORN_KEEPER                                      : Master's Runed Horn
1274: T7_ARTEFACT_OFF_HORN_KEEPER                                      : Grandmaster's Runed Horn
1275: T8_ARTEFACT_OFF_HORN_KEEPER                                      : Elder's Runed Horn
1276: T4_ARTEFACT_OFF_JESTERCANE_HELL                                  : Adept's Hellish Handle
1277: T5_ARTEFACT_OFF_JESTERCANE_HELL                                  : Expert's Hellish Handle
1278: T6_ARTEFACT_OFF_JESTERCANE_HELL                                  : Master's Hellish Handle
1279: T7_ARTEFACT_OFF_JESTERCANE_HELL                                  : Grandmaster's Hellish Handle
1280: T8_ARTEFACT_OFF_JESTERCANE_HELL                                  : Elder's Hellish Handle
1281: T4_ARTEFACT_OFF_LAMP_UNDEAD                                      : Adept's Ghastly Candle
1282: T5_ARTEFACT_OFF_LAMP_UNDEAD                                      : Expert's Ghastly Candle
1283: T6_ARTEFACT_OFF_LAMP_UNDEAD                                      : Master's Ghastly Candle
1284: T7_ARTEFACT_OFF_LAMP_UNDEAD                                      : Grandmaster's Ghastly Candle
1285: T8_ARTEFACT_OFF_LAMP_UNDEAD                                      : Elder's Ghastly Candle
1286: T4_ARTEFACT_OFF_TALISMAN_AVALON                                  : Adept's Shattered Avalonian Memento
1287: T5_ARTEFACT_OFF_TALISMAN_AVALON                                  : Expert's Shattered Avalonian Memento
1288: T6_ARTEFACT_OFF_TALISMAN_AVALON                                  : Master's Shattered Avalonian Memento
1289: T7_ARTEFACT_OFF_TALISMAN_AVALON                                  : Grandmaster's Shattered Avalonian Memento
1290: T8_ARTEFACT_OFF_TALISMAN_AVALON                                  : Elder's Shattered Avalonian Memento
1291: T4_ARTEFACT_HEAD_PLATE_UNDEAD                                    : Adept's Ancient Padding
1292: T5_ARTEFACT_HEAD_PLATE_UNDEAD                                    : Expert's Ancient Padding
1293: T6_ARTEFACT_HEAD_PLATE_UNDEAD                                    : Master's Ancient Padding
1294: T7_ARTEFACT_HEAD_PLATE_UNDEAD                                    : Grandmaster's Ancient Padding
1295: T8_ARTEFACT_HEAD_PLATE_UNDEAD                                    : Elder's Ancient Padding
1296: T4_ARTEFACT_ARMOR_PLATE_UNDEAD                                   : Adept's Ancient Chain Rings
1297: T5_ARTEFACT_ARMOR_PLATE_UNDEAD                                   : Expert's Ancient Chain Rings
1298: T6_ARTEFACT_ARMOR_PLATE_UNDEAD                                   : Master's Ancient Chain Rings
1299: T7_ARTEFACT_ARMOR_PLATE_UNDEAD                                   : Grandmaster's Ancient Chain Rings
1300: T8_ARTEFACT_ARMOR_PLATE_UNDEAD                                   : Elder's Ancient Chain Rings
1301: T4_ARTEFACT_SHOES_PLATE_UNDEAD                                   : Adept's Ancient Bindings
1302: T5_ARTEFACT_SHOES_PLATE_UNDEAD                                   : Expert's Ancient Bindings
1303: T6_ARTEFACT_SHOES_PLATE_UNDEAD                                   : Master's Ancient Bindings
1304: T7_ARTEFACT_SHOES_PLATE_UNDEAD                                   : Grandmaster's Ancient Bindings
1305: T8_ARTEFACT_SHOES_PLATE_UNDEAD                                   : Elder's Ancient Bindings
1306: T4_ARTEFACT_HEAD_PLATE_HELL                                      : Adept's Demonic Scraps
1307: T5_ARTEFACT_HEAD_PLATE_HELL                                      : Expert's Demonic Scraps
1308: T6_ARTEFACT_HEAD_PLATE_HELL                                      : Master's Demonic Scraps
1309: T7_ARTEFACT_HEAD_PLATE_HELL                                      : Grandmaster's Demonic Scraps
1310: T8_ARTEFACT_HEAD_PLATE_HELL                                      : Elder's Demonic Scraps
1311: T4_ARTEFACT_ARMOR_PLATE_HELL                                     : Adept's Demonic Plates
1312: T5_ARTEFACT_ARMOR_PLATE_HELL                                     : Expert's Demonic Plates
1313: T6_ARTEFACT_ARMOR_PLATE_HELL                                     : Master's Demonic Plates
1314: T7_ARTEFACT_ARMOR_PLATE_HELL                                     : Grandmaster's Demonic Plates
1315: T8_ARTEFACT_ARMOR_PLATE_HELL                                     : Elder's Demonic Plates
1316: T4_ARTEFACT_SHOES_PLATE_HELL                                     : Adept's Demonic Filling
1317: T5_ARTEFACT_SHOES_PLATE_HELL                                     : Expert's Demonic Filling
1318: T6_ARTEFACT_SHOES_PLATE_HELL                                     : Master's Demonic Filling
1319: T7_ARTEFACT_SHOES_PLATE_HELL                                     : Grandmaster's Demonic Filling
1320: T8_ARTEFACT_SHOES_PLATE_HELL                                     : Elder's Demonic Filling
1321: T4_ARTEFACT_HEAD_PLATE_KEEPER                                    : Adept's Carved Skull Padding
1322: T5_ARTEFACT_HEAD_PLATE_KEEPER                                    : Expert's Carved Skull Padding
1323: T6_ARTEFACT_HEAD_PLATE_KEEPER                                    : Master's Carved Skull Padding
1324: T7_ARTEFACT_HEAD_PLATE_KEEPER                                    : Grandmaster's Carved Skull Padding
1325: T8_ARTEFACT_HEAD_PLATE_KEEPER                                    : Elder's Carved Skull Padding
1326: T4_ARTEFACT_ARMOR_PLATE_KEEPER                                   : Adept's Preserved Animal Fur
1327: T5_ARTEFACT_ARMOR_PLATE_KEEPER                                   : Expert's Preserved Animal Fur
1328: T6_ARTEFACT_ARMOR_PLATE_KEEPER                                   : Master's Preserved Animal Fur
1329: T7_ARTEFACT_ARMOR_PLATE_KEEPER                                   : Grandmaster's Preserved Animal Fur
1330: T8_ARTEFACT_ARMOR_PLATE_KEEPER                                   : Elder's Preserved Animal Fur
1331: T4_ARTEFACT_SHOES_PLATE_KEEPER                                   : Adept's Inscribed Bindings
1332: T5_ARTEFACT_SHOES_PLATE_KEEPER                                   : Expert's Inscribed Bindings
1333: T6_ARTEFACT_SHOES_PLATE_KEEPER                                   : Master's Inscribed Bindings
1334: T7_ARTEFACT_SHOES_PLATE_KEEPER                                   : Grandmaster's Inscribed Bindings
1335: T8_ARTEFACT_SHOES_PLATE_KEEPER                                   : Elder's Inscribed Bindings
1336: T4_ARTEFACT_HEAD_PLATE_AVALON                                    : Adept's Exalted Visor
1337: T5_ARTEFACT_HEAD_PLATE_AVALON                                    : Expert's Exalted Visor
1338: T6_ARTEFACT_HEAD_PLATE_AVALON                                    : Master's Exalted Visor
1339: T7_ARTEFACT_HEAD_PLATE_AVALON                                    : Grandmaster's Exalted Visor
1340: T8_ARTEFACT_HEAD_PLATE_AVALON                                    : Elder's Exalted Visor
1341: T4_ARTEFACT_ARMOR_PLATE_AVALON                                   : Adept's Exalted Plating
1342: T5_ARTEFACT_ARMOR_PLATE_AVALON                                   : Expert's Exalted Plating
1343: T6_ARTEFACT_ARMOR_PLATE_AVALON                                   : Master's Exalted Plating
1344: T7_ARTEFACT_ARMOR_PLATE_AVALON                                   : Grandmaster's Exalted Plating
1345: T8_ARTEFACT_ARMOR_PLATE_AVALON                                   : Elder's Exalted Plating
1346: T4_ARTEFACT_SHOES_PLATE_AVALON                                   : Adept's Exalted Greave
1347: T5_ARTEFACT_SHOES_PLATE_AVALON                                   : Expert's Exalted Greave
1348: T6_ARTEFACT_SHOES_PLATE_AVALON                                   : Master's Exalted Greave
1349: T7_ARTEFACT_SHOES_PLATE_AVALON                                   : Grandmaster's Exalted Greave
1350: T8_ARTEFACT_SHOES_PLATE_AVALON                                   : Elder's Exalted Greave
1351: T4_ARTEFACT_HEAD_LEATHER_MORGANA                                 : Adept's Imbued Visor
1352: T5_ARTEFACT_HEAD_LEATHER_MORGANA                                 : Expert's Imbued Visor
1353: T6_ARTEFACT_HEAD_LEATHER_MORGANA                                 : Master's Imbued Visor
1354: T7_ARTEFACT_HEAD_LEATHER_MORGANA                                 : Grandmaster's Imbued Visor
1355: T8_ARTEFACT_HEAD_LEATHER_MORGANA                                 : Elder's Imbued Visor
1356: T4_ARTEFACT_ARMOR_LEATHER_MORGANA                                : Adept's Imbued Leather Folds
1357: T5_ARTEFACT_ARMOR_LEATHER_MORGANA                                : Expert's Imbued Leather Folds
1358: T6_ARTEFACT_ARMOR_LEATHER_MORGANA                                : Master's Imbued Leather Folds
1359: T7_ARTEFACT_ARMOR_LEATHER_MORGANA                                : Grandmaster's Imbued Leather Folds
1360: T8_ARTEFACT_ARMOR_LEATHER_MORGANA                                : Elder's Imbued Leather Folds
1361: T4_ARTEFACT_SHOES_LEATHER_MORGANA                                : Adept's Imbued Soles
1362: T5_ARTEFACT_SHOES_LEATHER_MORGANA                                : Expert's Imbued Soles
1363: T6_ARTEFACT_SHOES_LEATHER_MORGANA                                : Master's Imbued Soles
1364: T7_ARTEFACT_SHOES_LEATHER_MORGANA                                : Grandmaster's Imbued Soles
1365: T8_ARTEFACT_SHOES_LEATHER_MORGANA                                : Elder's Imbued Soles
1366: T4_ARTEFACT_HEAD_LEATHER_HELL                                    : Adept's Demonhide Padding
1367: T5_ARTEFACT_HEAD_LEATHER_HELL                                    : Expert's Demonhide Padding
1368: T6_ARTEFACT_HEAD_LEATHER_HELL                                    : Master's Demonhide Padding
1369: T7_ARTEFACT_HEAD_LEATHER_HELL                                    : Grandmaster's Demonhide Padding
1370: T8_ARTEFACT_HEAD_LEATHER_HELL                                    : Elder's Demonhide Padding
1371: T4_ARTEFACT_ARMOR_LEATHER_HELL                                   : Adept's Demonhide Leather
1372: T5_ARTEFACT_ARMOR_LEATHER_HELL                                   : Expert's Demonhide Leather
1373: T6_ARTEFACT_ARMOR_LEATHER_HELL                                   : Master's Demonhide Leather
1374: T7_ARTEFACT_ARMOR_LEATHER_HELL                                   : Grandmaster's Demonhide Leather
1375: T8_ARTEFACT_ARMOR_LEATHER_HELL                                   : Elder's Demonhide Leather
1376: T4_ARTEFACT_SHOES_LEATHER_HELL                                   : Adept's Demonhide Bindings
1377: T5_ARTEFACT_SHOES_LEATHER_HELL                                   : Expert's Demonhide Bindings
1378: T6_ARTEFACT_SHOES_LEATHER_HELL                                   : Master's Demonhide Bindings
1379: T7_ARTEFACT_SHOES_LEATHER_HELL                                   : Grandmaster's Demonhide Bindings
1380: T8_ARTEFACT_SHOES_LEATHER_HELL                                   : Elder's Demonhide Bindings
1381: T4_ARTEFACT_HEAD_LEATHER_UNDEAD                                  : Adept's Ghastly Visor
1382: T5_ARTEFACT_HEAD_LEATHER_UNDEAD                                  : Expert's Ghastly Visor
1383: T6_ARTEFACT_HEAD_LEATHER_UNDEAD                                  : Master's Ghastly Visor
1384: T7_ARTEFACT_HEAD_LEATHER_UNDEAD                                  : Grandmaster's Ghastly Visor
1385: T8_ARTEFACT_HEAD_LEATHER_UNDEAD                                  : Elder's Ghastly Visor
1386: T4_ARTEFACT_ARMOR_LEATHER_UNDEAD                                 : Adept's Ghastly Leather
1387: T5_ARTEFACT_ARMOR_LEATHER_UNDEAD                                 : Expert's Ghastly Leather
1388: T6_ARTEFACT_ARMOR_LEATHER_UNDEAD                                 : Master's Ghastly Leather
1389: T7_ARTEFACT_ARMOR_LEATHER_UNDEAD                                 : Grandmaster's Ghastly Leather
1390: T8_ARTEFACT_ARMOR_LEATHER_UNDEAD                                 : Elder's Ghastly Leather
1391: T4_ARTEFACT_SHOES_LEATHER_UNDEAD                                 : Adept's Ghastly Bindings
1392: T5_ARTEFACT_SHOES_LEATHER_UNDEAD                                 : Expert's Ghastly Bindings
1393: T6_ARTEFACT_SHOES_LEATHER_UNDEAD                                 : Master's Ghastly Bindings
1394: T7_ARTEFACT_SHOES_LEATHER_UNDEAD                                 : Grandmaster's Ghastly Bindings
1395: T8_ARTEFACT_SHOES_LEATHER_UNDEAD                                 : Elder's Ghastly Bindings
1396: T4_ARTEFACT_HEAD_LEATHER_AVALON                                  : Adept's Augured Padding
1397: T5_ARTEFACT_HEAD_LEATHER_AVALON                                  : Expert's Augured Padding
1398: T6_ARTEFACT_HEAD_LEATHER_AVALON                                  : Master's Augured Padding
1399: T7_ARTEFACT_HEAD_LEATHER_AVALON                                  : Grandmaster's Augured Padding
1400: T8_ARTEFACT_HEAD_LEATHER_AVALON                                  : Elder's Augured Padding
1401: T4_ARTEFACT_ARMOR_LEATHER_AVALON                                 : Adept's Augured Sash
1402: T5_ARTEFACT_ARMOR_LEATHER_AVALON                                 : Expert's Augured Sash
1403: T6_ARTEFACT_ARMOR_LEATHER_AVALON                                 : Master's Augured Sash
1404: T7_ARTEFACT_ARMOR_LEATHER_AVALON                                 : Grandmaster's Augured Sash
1405: T8_ARTEFACT_ARMOR_LEATHER_AVALON                                 : Elder's Augured Sash
1406: T4_ARTEFACT_SHOES_LEATHER_AVALON                                 : Adept's Augured Fasteners
1407: T5_ARTEFACT_SHOES_LEATHER_AVALON                                 : Expert's Augured Fasteners
1408: T6_ARTEFACT_SHOES_LEATHER_AVALON                                 : Master's Augured Fasteners
1409: T7_ARTEFACT_SHOES_LEATHER_AVALON                                 : Grandmaster's Augured Fasteners
1410: T8_ARTEFACT_SHOES_LEATHER_AVALON                                 : Elder's Augured Fasteners
1411: T4_ARTEFACT_HEAD_CLOTH_KEEPER                                    : Adept's Druidic Preserved Beak
1412: T5_ARTEFACT_HEAD_CLOTH_KEEPER                                    : Expert's Druidic Preserved Beak
1413: T6_ARTEFACT_HEAD_CLOTH_KEEPER                                    : Master's Druidic Preserved Beak
1414: T7_ARTEFACT_HEAD_CLOTH_KEEPER                                    : Grandmaster's Druidic Preserved Beak
1415: T8_ARTEFACT_HEAD_CLOTH_KEEPER                                    : Elder's Druidic Preserved Beak
1416: T4_ARTEFACT_ARMOR_CLOTH_KEEPER                                   : Adept's Druidic Feathers
1417: T5_ARTEFACT_ARMOR_CLOTH_KEEPER                                   : Expert's Druidic Feathers
1418: T6_ARTEFACT_ARMOR_CLOTH_KEEPER                                   : Master's Druidic Feathers
1419: T7_ARTEFACT_ARMOR_CLOTH_KEEPER                                   : Grandmaster's Druidic Feathers
1420: T8_ARTEFACT_ARMOR_CLOTH_KEEPER                                   : Elder's Druidic Feathers
1421: T4_ARTEFACT_SHOES_CLOTH_KEEPER                                   : Adept's Druidic Bindings
1422: T5_ARTEFACT_SHOES_CLOTH_KEEPER                                   : Expert's Druidic Bindings
1423: T6_ARTEFACT_SHOES_CLOTH_KEEPER                                   : Master's Druidic Bindings
1424: T7_ARTEFACT_SHOES_CLOTH_KEEPER                                   : Grandmaster's Druidic Bindings
1425: T8_ARTEFACT_SHOES_CLOTH_KEEPER                                   : Elder's Druidic Bindings
1426: T4_ARTEFACT_HEAD_CLOTH_HELL                                      : Adept's Infernal Cloth Visor
1427: T5_ARTEFACT_HEAD_CLOTH_HELL                                      : Expert's Infernal Cloth Visor
1428: T6_ARTEFACT_HEAD_CLOTH_HELL                                      : Master's Infernal Cloth Visor
1429: T7_ARTEFACT_HEAD_CLOTH_HELL                                      : Grandmaster's Infernal Cloth Visor
1430: T8_ARTEFACT_HEAD_CLOTH_HELL                                      : Elder's Infernal Cloth Visor
1431: T4_ARTEFACT_ARMOR_CLOTH_HELL                                     : Adept's Infernal Cloth Folds
1432: T5_ARTEFACT_ARMOR_CLOTH_HELL                                     : Expert's Infernal Cloth Folds
1433: T6_ARTEFACT_ARMOR_CLOTH_HELL                                     : Master's Infernal Cloth Folds
1434: T7_ARTEFACT_ARMOR_CLOTH_HELL                                     : Grandmaster's Infernal Cloth Folds
1435: T8_ARTEFACT_ARMOR_CLOTH_HELL                                     : Elder's Infernal Cloth Folds
1436: T4_ARTEFACT_SHOES_CLOTH_HELL                                     : Adept's Infernal Cloth Bindings
1437: T5_ARTEFACT_SHOES_CLOTH_HELL                                     : Expert's Infernal Cloth Bindings
1438: T6_ARTEFACT_SHOES_CLOTH_HELL                                     : Master's Infernal Cloth Bindings
1439: T7_ARTEFACT_SHOES_CLOTH_HELL                                     : Grandmaster's Infernal Cloth Bindings
1440: T8_ARTEFACT_SHOES_CLOTH_HELL                                     : Elder's Infernal Cloth Bindings
1441: T4_ARTEFACT_HEAD_CLOTH_MORGANA                                   : Adept's Alluring Padding
1442: T5_ARTEFACT_HEAD_CLOTH_MORGANA                                   : Expert's Alluring Padding
1443: T6_ARTEFACT_HEAD_CLOTH_MORGANA                                   : Master's Alluring Padding
1444: T7_ARTEFACT_HEAD_CLOTH_MORGANA                                   : Grandmaster's Alluring Padding
1445: T8_ARTEFACT_HEAD_CLOTH_MORGANA                                   : Elder's Alluring Padding
1446: T4_ARTEFACT_ARMOR_CLOTH_MORGANA                                  : Adept's Alluring Amulet
1447: T5_ARTEFACT_ARMOR_CLOTH_MORGANA                                  : Expert's Alluring Amulet
1448: T6_ARTEFACT_ARMOR_CLOTH_MORGANA                                  : Master's Alluring Amulet
1449: T7_ARTEFACT_ARMOR_CLOTH_MORGANA                                  : Grandmaster's Alluring Amulet
1450: T8_ARTEFACT_ARMOR_CLOTH_MORGANA                                  : Elder's Alluring Amulet
1451: T4_ARTEFACT_SHOES_CLOTH_MORGANA                                  : Adept's Alluring Bindings
1452: T5_ARTEFACT_SHOES_CLOTH_MORGANA                                  : Expert's Alluring Bindings
1453: T6_ARTEFACT_SHOES_CLOTH_MORGANA                                  : Master's Alluring Bindings
1454: T7_ARTEFACT_SHOES_CLOTH_MORGANA                                  : Grandmaster's Alluring Bindings
1455: T8_ARTEFACT_SHOES_CLOTH_MORGANA                                  : Elder's Alluring Bindings
1456: T4_ARTEFACT_HEAD_CLOTH_AVALON                                    : Adept's Sanctified Mask
1457: T5_ARTEFACT_HEAD_CLOTH_AVALON                                    : Expert's Sanctified Mask
1458: T6_ARTEFACT_HEAD_CLOTH_AVALON                                    : Master's Sanctified Mask
1459: T7_ARTEFACT_HEAD_CLOTH_AVALON                                    : Grandmaster's Sanctified Mask
1460: T8_ARTEFACT_HEAD_CLOTH_AVALON                                    : Elder's Sanctified Mask
1461: T4_ARTEFACT_ARMOR_CLOTH_AVALON                                   : Adept's Sanctified Belt
1462: T5_ARTEFACT_ARMOR_CLOTH_AVALON                                   : Expert's Sanctified Belt
1463: T6_ARTEFACT_ARMOR_CLOTH_AVALON                                   : Master's Sanctified Belt
1464: T7_ARTEFACT_ARMOR_CLOTH_AVALON                                   : Grandmaster's Sanctified Belt
1465: T8_ARTEFACT_ARMOR_CLOTH_AVALON                                   : Elder's Sanctified Belt
1466: T4_ARTEFACT_SHOES_CLOTH_AVALON                                   : Adept's Sanctified Bindings
1467: T5_ARTEFACT_SHOES_CLOTH_AVALON                                   : Expert's Sanctified Bindings
1468: T6_ARTEFACT_SHOES_CLOTH_AVALON                                   : Master's Sanctified Bindings
1469: T7_ARTEFACT_SHOES_CLOTH_AVALON                                   : Grandmaster's Sanctified Bindings
1470: T8_ARTEFACT_SHOES_CLOTH_AVALON                                   : Elder's Sanctified Bindings
1471: T4_ARTEFACT_TOKEN_FAVOR_1                                        : Adept's Crystallized Spirit
1472: T5_ARTEFACT_TOKEN_FAVOR_1                                        : Expert's Crystallized Spirit
1473: T6_ARTEFACT_TOKEN_FAVOR_1                                        : Master's Crystallized Spirit
1474: T7_ARTEFACT_TOKEN_FAVOR_1                                        : Grandmaster's Crystallized Spirit
1475: T8_ARTEFACT_TOKEN_FAVOR_1                                        : Elder's Crystallized Spirit
1476: T4_ARTEFACT_TOKEN_FAVOR_2                                        : Adept's Crystallized Dread
1477: T5_ARTEFACT_TOKEN_FAVOR_2                                        : Expert's Crystallized Dread
1478: T6_ARTEFACT_TOKEN_FAVOR_2                                        : Master's Crystallized Dread
1479: T7_ARTEFACT_TOKEN_FAVOR_2                                        : Grandmaster's Crystallized Dread
1480: T8_ARTEFACT_TOKEN_FAVOR_2                                        : Elder's Crystallized Dread
1481: T4_ARTEFACT_TOKEN_FAVOR_3                                        : Adept's Crystallized Magic
1482: T5_ARTEFACT_TOKEN_FAVOR_3                                        : Expert's Crystallized Magic
1483: T6_ARTEFACT_TOKEN_FAVOR_3                                        : Master's Crystallized Magic
1484: T7_ARTEFACT_TOKEN_FAVOR_3                                        : Grandmaster's Crystallized Magic
1485: T8_ARTEFACT_TOKEN_FAVOR_3                                        : Elder's Crystallized Magic
1486: T4_ARTEFACT_TOKEN_FAVOR_4                                        : Adept's Crystallized Divinity
1487: T5_ARTEFACT_TOKEN_FAVOR_4                                        : Expert's Crystallized Divinity
1488: T6_ARTEFACT_TOKEN_FAVOR_4                                        : Master's Crystallized Divinity
1489: T7_ARTEFACT_TOKEN_FAVOR_4                                        : Grandmaster's Crystallized Divinity
1490: T8_ARTEFACT_TOKEN_FAVOR_4                                        : Elder's Crystallized Divinity
1491: T4_ESSENCE_POTION                                                : Adept's Arcane Essence
1492: T4_ESSENCE                                                       : Adept's Faded Essence
1493: T4_RUNE                                                          : Adept's Rune
1494: T4_SOUL                                                          : Adept's Soul
1495: T4_RELIC                                                         : Adept's Relic
1496: T4_SHARD_AVALONIAN                                               : Adept's Avalonian Shard
1497: T5_ESSENCE_POTION                                                : Expert's Arcane Essence
1498: T5_ESSENCE                                                       : Expert's Faded Essence
1499: T5_RUNE                                                          : Expert's Rune
1500: T5_SOUL                                                          : Expert's Soul
1501: T5_RELIC                                                         : Expert's Relic
1502: T5_SHARD_AVALONIAN                                               : Expert's Avalonian Shard
1503: T6_ESSENCE_POTION                                                : Master's Arcane Essence
1504: T6_ESSENCE                                                       : Master's Faded Essence
1505: T6_RUNE                                                          : Master's Rune
1506: T6_SOUL                                                          : Master's Soul
1507: T6_RELIC                                                         : Master's Relic
1508: T6_SHARD_AVALONIAN                                               : Master's Avalonian Shard
1509: T7_ESSENCE_POTION                                                : Grandmaster's Arcane Essence
1510: T7_ESSENCE                                                       : Grandmaster's Faded Essence
1511: T7_RUNE                                                          : Grandmaster's Rune
1512: T7_SOUL                                                          : Grandmaster's Soul
1513: T7_RELIC                                                         : Grandmaster's Relic
1514: T7_SHARD_AVALONIAN                                               : Grandmaster's Avalonian Shard
1515: T8_ESSENCE_POTION                                                : Elder's Arcane Essence
1516: T8_ESSENCE                                                       : Elder's Faded Essence
1517: T8_RUNE                                                          : Elder's Rune
1518: T8_SOUL                                                          : Elder's Soul
1519: T8_RELIC                                                         : Elder's Relic
1520: T8_SHARD_AVALONIAN                                               : Elder's Avalonian Shard
1521: T1_TRASH                                                         : Trash
1522: T2_TRASH                                                         : Trash
1523: T3_TRASH                                                         : Trash
1524: T4_TRASH                                                         : Trash
1525: T5_TRASH                                                         : Trash
1526: T6_TRASH                                                         : Trash
1527: T7_TRASH                                                         : Trash
1528: T8_TRASH                                                         : Trash
1529: T1_OFF_SHIELD                                                    : Beginner's Shield
1530: T2_OFF_SHIELD                                                    : Novice's Shield
1531: T3_OFF_SHIELD                                                    : Journeyman's Shield
1532: T4_OFF_SHIELD                                                    : Adept's Shield
1533: T4_OFF_SHIELD@1                                                  : Adept's Shield
1534: T4_OFF_SHIELD@2                                                  : Adept's Shield
1535: T4_OFF_SHIELD@3                                                  : Adept's Shield
1536: T5_OFF_SHIELD                                                    : Expert's Shield
1537: T5_OFF_SHIELD@1                                                  : Expert's Shield
1538: T5_OFF_SHIELD@2                                                  : Expert's Shield
1539: T5_OFF_SHIELD@3                                                  : Expert's Shield
1540: T6_OFF_SHIELD                                                    : Master's Shield
1541: T6_OFF_SHIELD@1                                                  : Master's Shield
1542: T6_OFF_SHIELD@2                                                  : Master's Shield
1543: T6_OFF_SHIELD@3                                                  : Master's Shield
1544: T7_OFF_SHIELD                                                    : Grandmaster's Shield
1545: T7_OFF_SHIELD@1                                                  : Grandmaster's Shield
1546: T7_OFF_SHIELD@2                                                  : Grandmaster's Shield
1547: T7_OFF_SHIELD@3                                                  : Grandmaster's Shield
1548: T8_OFF_SHIELD                                                    : Elder's Shield
1549: T8_OFF_SHIELD@1                                                  : Elder's Shield
1550: T8_OFF_SHIELD@2                                                  : Elder's Shield
1551: T8_OFF_SHIELD@3                                                  : Elder's Shield
1552: T4_OFF_TOWERSHIELD_UNDEAD                                        : Adept's Sarcophagus
1553: T4_OFF_TOWERSHIELD_UNDEAD@1                                      : Adept's Sarcophagus
1554: T4_OFF_TOWERSHIELD_UNDEAD@2                                      : Adept's Sarcophagus
1555: T4_OFF_TOWERSHIELD_UNDEAD@3                                      : Adept's Sarcophagus
1556: T5_OFF_TOWERSHIELD_UNDEAD                                        : Expert's Sarcophagus
1557: T5_OFF_TOWERSHIELD_UNDEAD@1                                      : Expert's Sarcophagus
1558: T5_OFF_TOWERSHIELD_UNDEAD@2                                      : Expert's Sarcophagus
1559: T5_OFF_TOWERSHIELD_UNDEAD@3                                      : Expert's Sarcophagus
1560: T6_OFF_TOWERSHIELD_UNDEAD                                        : Master's Sarcophagus
1561: T6_OFF_TOWERSHIELD_UNDEAD@1                                      : Master's Sarcophagus
1562: T6_OFF_TOWERSHIELD_UNDEAD@2                                      : Master's Sarcophagus
1563: T6_OFF_TOWERSHIELD_UNDEAD@3                                      : Master's Sarcophagus
1564: T7_OFF_TOWERSHIELD_UNDEAD                                        : Grandmaster's Sarcophagus
1565: T7_OFF_TOWERSHIELD_UNDEAD@1                                      : Grandmaster's Sarcophagus
1566: T7_OFF_TOWERSHIELD_UNDEAD@2                                      : Grandmaster's Sarcophagus
1567: T7_OFF_TOWERSHIELD_UNDEAD@3                                      : Grandmaster's Sarcophagus
1568: T8_OFF_TOWERSHIELD_UNDEAD                                        : Elder's Sarcophagus
1569: T8_OFF_TOWERSHIELD_UNDEAD@1                                      : Elder's Sarcophagus
1570: T8_OFF_TOWERSHIELD_UNDEAD@2                                      : Elder's Sarcophagus
1571: T8_OFF_TOWERSHIELD_UNDEAD@3                                      : Elder's Sarcophagus
1572: T4_OFF_SHIELD_HELL                                               : Adept's Caitiff Shield
1573: T4_OFF_SHIELD_HELL@1                                             : Adept's Caitiff Shield
1574: T4_OFF_SHIELD_HELL@2                                             : Adept's Caitiff Shield
1575: T4_OFF_SHIELD_HELL@3                                             : Adept's Caitiff Shield
1576: T5_OFF_SHIELD_HELL                                               : Expert's Caitiff Shield
1577: T5_OFF_SHIELD_HELL@1                                             : Expert's Caitiff Shield
1578: T5_OFF_SHIELD_HELL@2                                             : Expert's Caitiff Shield
1579: T5_OFF_SHIELD_HELL@3                                             : Expert's Caitiff Shield
1580: T6_OFF_SHIELD_HELL                                               : Master's Caitiff Shield
1581: T6_OFF_SHIELD_HELL@1                                             : Master's Caitiff Shield
1582: T6_OFF_SHIELD_HELL@2                                             : Master's Caitiff Shield
1583: T6_OFF_SHIELD_HELL@3                                             : Master's Caitiff Shield
1584: T7_OFF_SHIELD_HELL                                               : Grandmaster's Caitiff Shield
1585: T7_OFF_SHIELD_HELL@1                                             : Grandmaster's Caitiff Shield
1586: T7_OFF_SHIELD_HELL@2                                             : Grandmaster's Caitiff Shield
1587: T7_OFF_SHIELD_HELL@3                                             : Grandmaster's Caitiff Shield
1588: T8_OFF_SHIELD_HELL                                               : Elder's Caitiff Shield
1589: T8_OFF_SHIELD_HELL@1                                             : Elder's Caitiff Shield
1590: T8_OFF_SHIELD_HELL@2                                             : Elder's Caitiff Shield
1591: T8_OFF_SHIELD_HELL@3                                             : Elder's Caitiff Shield
1592: T4_OFF_SPIKEDSHIELD_MORGANA                                      : Adept's Facebreaker
1593: T4_OFF_SPIKEDSHIELD_MORGANA@1                                    : Adept's Facebreaker
1594: T4_OFF_SPIKEDSHIELD_MORGANA@2                                    : Adept's Facebreaker
1595: T4_OFF_SPIKEDSHIELD_MORGANA@3                                    : Adept's Facebreaker
1596: T5_OFF_SPIKEDSHIELD_MORGANA                                      : Expert's Facebreaker
1597: T5_OFF_SPIKEDSHIELD_MORGANA@1                                    : Expert's Facebreaker
1598: T5_OFF_SPIKEDSHIELD_MORGANA@2                                    : Expert's Facebreaker
1599: T5_OFF_SPIKEDSHIELD_MORGANA@3                                    : Expert's Facebreaker
1600: T6_OFF_SPIKEDSHIELD_MORGANA                                      : Master's Facebreaker
1601: T6_OFF_SPIKEDSHIELD_MORGANA@1                                    : Master's Facebreaker
1602: T6_OFF_SPIKEDSHIELD_MORGANA@2                                    : Master's Facebreaker
1603: T6_OFF_SPIKEDSHIELD_MORGANA@3                                    : Master's Facebreaker
1604: T7_OFF_SPIKEDSHIELD_MORGANA                                      : Grandmaster's Facebreaker
1605: T7_OFF_SPIKEDSHIELD_MORGANA@1                                    : Grandmaster's Facebreaker
1606: T7_OFF_SPIKEDSHIELD_MORGANA@2                                    : Grandmaster's Facebreaker
1607: T7_OFF_SPIKEDSHIELD_MORGANA@3                                    : Grandmaster's Facebreaker
1608: T8_OFF_SPIKEDSHIELD_MORGANA                                      : Elder's Facebreaker
1609: T8_OFF_SPIKEDSHIELD_MORGANA@1                                    : Elder's Facebreaker
1610: T8_OFF_SPIKEDSHIELD_MORGANA@2                                    : Elder's Facebreaker
1611: T8_OFF_SPIKEDSHIELD_MORGANA@3                                    : Elder's Facebreaker
1612: T4_OFF_SHIELD_AVALON                                             : Adept's Astral Aegis
1613: T4_OFF_SHIELD_AVALON@1                                           : Adept's Astral Aegis
1614: T4_OFF_SHIELD_AVALON@2                                           : Adept's Astral Aegis
1615: T4_OFF_SHIELD_AVALON@3                                           : Adept's Astral Aegis
1616: T5_OFF_SHIELD_AVALON                                             : Expert's Astral Aegis
1617: T5_OFF_SHIELD_AVALON@1                                           : Expert's Astral Aegis
1618: T5_OFF_SHIELD_AVALON@2                                           : Expert's Astral Aegis
1619: T5_OFF_SHIELD_AVALON@3                                           : Expert's Astral Aegis
1620: T6_OFF_SHIELD_AVALON                                             : Master's Astral Aegis
1621: T6_OFF_SHIELD_AVALON@1                                           : Master's Astral Aegis
1622: T6_OFF_SHIELD_AVALON@2                                           : Master's Astral Aegis
1623: T6_OFF_SHIELD_AVALON@3                                           : Master's Astral Aegis
1624: T7_OFF_SHIELD_AVALON                                             : Grandmaster's Astral Aegis
1625: T7_OFF_SHIELD_AVALON@1                                           : Grandmaster's Astral Aegis
1626: T7_OFF_SHIELD_AVALON@2                                           : Grandmaster's Astral Aegis
1627: T7_OFF_SHIELD_AVALON@3                                           : Grandmaster's Astral Aegis
1628: T8_OFF_SHIELD_AVALON                                             : Elder's Astral Aegis
1629: T8_OFF_SHIELD_AVALON@1                                           : Elder's Astral Aegis
1630: T8_OFF_SHIELD_AVALON@2                                           : Elder's Astral Aegis
1631: T8_OFF_SHIELD_AVALON@3                                           : Elder's Astral Aegis
1632: T2_OFF_BOOK                                                      : Novice's Tome of Spells
1633: T3_OFF_BOOK                                                      : Journeyman's Tome of Spells
1634: T4_OFF_BOOK                                                      : Adept's Tome of Spells
1635: T4_OFF_BOOK@1                                                    : Adept's Tome of Spells
1636: T4_OFF_BOOK@2                                                    : Adept's Tome of Spells
1637: T4_OFF_BOOK@3                                                    : Adept's Tome of Spells
1638: T5_OFF_BOOK                                                      : Expert's Tome of Spells
1639: T5_OFF_BOOK@1                                                    : Expert's Tome of Spells
1640: T5_OFF_BOOK@2                                                    : Expert's Tome of Spells
1641: T5_OFF_BOOK@3                                                    : Expert's Tome of Spells
1642: T6_OFF_BOOK                                                      : Master's Tome of Spells
1643: T6_OFF_BOOK@1                                                    : Master's Tome of Spells
1644: T6_OFF_BOOK@2                                                    : Master's Tome of Spells
1645: T6_OFF_BOOK@3                                                    : Master's Tome of Spells
1646: T7_OFF_BOOK                                                      : Grandmaster's Tome of Spells
1647: T7_OFF_BOOK@1                                                    : Grandmaster's Tome of Spells
1648: T7_OFF_BOOK@2                                                    : Grandmaster's Tome of Spells
1649: T7_OFF_BOOK@3                                                    : Grandmaster's Tome of Spells
1650: T8_OFF_BOOK                                                      : Rosalia's Diary
1651: T8_OFF_BOOK@1                                                    : Rosalia's Diary
1652: T8_OFF_BOOK@2                                                    : Rosalia's Diary
1653: T8_OFF_BOOK@3                                                    : Rosalia's Diary
1654: T4_OFF_ORB_MORGANA                                               : Adept's Eye of Secrets
1655: T4_OFF_ORB_MORGANA@1                                             : Adept's Eye of Secrets
1656: T4_OFF_ORB_MORGANA@2                                             : Adept's Eye of Secrets
1657: T4_OFF_ORB_MORGANA@3                                             : Adept's Eye of Secrets
1658: T5_OFF_ORB_MORGANA                                               : Expert's Eye of Secrets
1659: T5_OFF_ORB_MORGANA@1                                             : Expert's Eye of Secrets
1660: T5_OFF_ORB_MORGANA@2                                             : Expert's Eye of Secrets
1661: T5_OFF_ORB_MORGANA@3                                             : Expert's Eye of Secrets
1662: T6_OFF_ORB_MORGANA                                               : Master's Eye of Secrets
1663: T6_OFF_ORB_MORGANA@1                                             : Master's Eye of Secrets
1664: T6_OFF_ORB_MORGANA@2                                             : Master's Eye of Secrets
1665: T6_OFF_ORB_MORGANA@3                                             : Master's Eye of Secrets
1666: T7_OFF_ORB_MORGANA                                               : Grandmaster's Eye of Secrets
1667: T7_OFF_ORB_MORGANA@1                                             : Grandmaster's Eye of Secrets
1668: T7_OFF_ORB_MORGANA@2                                             : Grandmaster's Eye of Secrets
1669: T7_OFF_ORB_MORGANA@3                                             : Grandmaster's Eye of Secrets
1670: T8_OFF_ORB_MORGANA                                               : Elder's Eye of Secrets
1671: T8_OFF_ORB_MORGANA@1                                             : Elder's Eye of Secrets
1672: T8_OFF_ORB_MORGANA@2                                             : Elder's Eye of Secrets
1673: T8_OFF_ORB_MORGANA@3                                             : Elder's Eye of Secrets
1674: T4_OFF_DEMONSKULL_HELL                                           : Adept's Muisak
1675: T4_OFF_DEMONSKULL_HELL@1                                         : Adept's Muisak
1676: T4_OFF_DEMONSKULL_HELL@2                                         : Adept's Muisak
1677: T4_OFF_DEMONSKULL_HELL@3                                         : Adept's Muisak
1678: T5_OFF_DEMONSKULL_HELL                                           : Expert's Muisak
1679: T5_OFF_DEMONSKULL_HELL@1                                         : Expert's Muisak
1680: T5_OFF_DEMONSKULL_HELL@2                                         : Expert's Muisak
1681: T5_OFF_DEMONSKULL_HELL@3                                         : Expert's Muisak
1682: T6_OFF_DEMONSKULL_HELL                                           : Master's Muisak
1683: T6_OFF_DEMONSKULL_HELL@1                                         : Master's Muisak
1684: T6_OFF_DEMONSKULL_HELL@2                                         : Master's Muisak
1685: T6_OFF_DEMONSKULL_HELL@3                                         : Master's Muisak
1686: T7_OFF_DEMONSKULL_HELL                                           : Grandmaster's Muisak
1687: T7_OFF_DEMONSKULL_HELL@1                                         : Grandmaster's Muisak
1688: T7_OFF_DEMONSKULL_HELL@2                                         : Grandmaster's Muisak
1689: T7_OFF_DEMONSKULL_HELL@3                                         : Grandmaster's Muisak
1690: T8_OFF_DEMONSKULL_HELL                                           : Elder's Muisak
1691: T8_OFF_DEMONSKULL_HELL@1                                         : Elder's Muisak
1692: T8_OFF_DEMONSKULL_HELL@2                                         : Elder's Muisak
1693: T8_OFF_DEMONSKULL_HELL@3                                         : Elder's Muisak
1694: T4_OFF_TOTEM_KEEPER                                              : Adept's Taproot
1695: T4_OFF_TOTEM_KEEPER@1                                            : Adept's Taproot
1696: T4_OFF_TOTEM_KEEPER@2                                            : Adept's Taproot
1697: T4_OFF_TOTEM_KEEPER@3                                            : Adept's Taproot
1698: T5_OFF_TOTEM_KEEPER                                              : Expert's Taproot
1699: T5_OFF_TOTEM_KEEPER@1                                            : Expert's Taproot
1700: T5_OFF_TOTEM_KEEPER@2                                            : Expert's Taproot
1701: T5_OFF_TOTEM_KEEPER@3                                            : Expert's Taproot
1702: T6_OFF_TOTEM_KEEPER                                              : Master's Taproot
1703: T6_OFF_TOTEM_KEEPER@1                                            : Master's Taproot
1704: T6_OFF_TOTEM_KEEPER@2                                            : Master's Taproot
1705: T6_OFF_TOTEM_KEEPER@3                                            : Master's Taproot
1706: T7_OFF_TOTEM_KEEPER                                              : Grandmaster's Taproot
1707: T7_OFF_TOTEM_KEEPER@1                                            : Grandmaster's Taproot
1708: T7_OFF_TOTEM_KEEPER@2                                            : Grandmaster's Taproot
1709: T7_OFF_TOTEM_KEEPER@3                                            : Grandmaster's Taproot
1710: T8_OFF_TOTEM_KEEPER                                              : Elder's Taproot
1711: T8_OFF_TOTEM_KEEPER@1                                            : Elder's Taproot
1712: T8_OFF_TOTEM_KEEPER@2                                            : Elder's Taproot
1713: T8_OFF_TOTEM_KEEPER@3                                            : Elder's Taproot
1714: T4_OFF_CENSER_AVALON                                             : Adept's Celestial Censer
1715: T4_OFF_CENSER_AVALON@1                                           : Adept's Celestial Censer
1716: T4_OFF_CENSER_AVALON@2                                           : Adept's Celestial Censer
1717: T4_OFF_CENSER_AVALON@3                                           : Adept's Celestial Censer
1718: T5_OFF_CENSER_AVALON                                             : Expert's Celestial Censer
1719: T5_OFF_CENSER_AVALON@1                                           : Expert's Celestial Censer
1720: T5_OFF_CENSER_AVALON@2                                           : Expert's Celestial Censer
1721: T5_OFF_CENSER_AVALON@3                                           : Expert's Celestial Censer
1722: T6_OFF_CENSER_AVALON                                             : Master's Celestial Censer
1723: T6_OFF_CENSER_AVALON@1                                           : Master's Celestial Censer
1724: T6_OFF_CENSER_AVALON@2                                           : Master's Celestial Censer
1725: T6_OFF_CENSER_AVALON@3                                           : Master's Celestial Censer
1726: T7_OFF_CENSER_AVALON                                             : Grandmaster's Celestial Censer
1727: T7_OFF_CENSER_AVALON@1                                           : Grandmaster's Celestial Censer
1728: T7_OFF_CENSER_AVALON@2                                           : Grandmaster's Celestial Censer
1729: T7_OFF_CENSER_AVALON@3                                           : Grandmaster's Celestial Censer
1730: T8_OFF_CENSER_AVALON                                             : Elder's Celestial Censer
1731: T8_OFF_CENSER_AVALON@1                                           : Elder's Celestial Censer
1732: T8_OFF_CENSER_AVALON@2                                           : Elder's Celestial Censer
1733: T8_OFF_CENSER_AVALON@3                                           : Elder's Celestial Censer
1734: T3_OFF_TORCH                                                     : Journeyman's Torch
1735: T4_OFF_TORCH                                                     : Adept's Torch
1736: T4_OFF_TORCH@1                                                   : Adept's Torch
1737: T4_OFF_TORCH@2                                                   : Adept's Torch
1738: T4_OFF_TORCH@3                                                   : Adept's Torch
1739: T5_OFF_TORCH                                                     : Expert's Torch
1740: T5_OFF_TORCH@1                                                   : Expert's Torch
1741: T5_OFF_TORCH@2                                                   : Expert's Torch
1742: T5_OFF_TORCH@3                                                   : Expert's Torch
1743: T6_OFF_TORCH                                                     : Master's Torch
1744: T6_OFF_TORCH@1                                                   : Master's Torch
1745: T6_OFF_TORCH@2                                                   : Master's Torch
1746: T6_OFF_TORCH@3                                                   : Master's Torch
1747: T7_OFF_TORCH                                                     : Grandmaster's Torch
1748: T7_OFF_TORCH@1                                                   : Grandmaster's Torch
1749: T7_OFF_TORCH@2                                                   : Grandmaster's Torch
1750: T7_OFF_TORCH@3                                                   : Grandmaster's Torch
1751: T8_OFF_TORCH                                                     : Elder's Torch
1752: T8_OFF_TORCH@1                                                   : Elder's Torch
1753: T8_OFF_TORCH@2                                                   : Elder's Torch
1754: T8_OFF_TORCH@3                                                   : Elder's Torch
1755: T4_OFF_HORN_KEEPER                                               : Adept's Mistcaller
1756: T4_OFF_HORN_KEEPER@1                                             : Adept's Mistcaller
1757: T4_OFF_HORN_KEEPER@2                                             : Adept's Mistcaller
1758: T4_OFF_HORN_KEEPER@3                                             : Adept's Mistcaller
1759: T5_OFF_HORN_KEEPER                                               : Expert's Mistcaller
1760: T5_OFF_HORN_KEEPER@1                                             : Expert's Mistcaller
1761: T5_OFF_HORN_KEEPER@2                                             : Expert's Mistcaller
1762: T5_OFF_HORN_KEEPER@3                                             : Expert's Mistcaller
1763: T6_OFF_HORN_KEEPER                                               : Master's Mistcaller
1764: T6_OFF_HORN_KEEPER@1                                             : Master's Mistcaller
1765: T6_OFF_HORN_KEEPER@2                                             : Master's Mistcaller
1766: T6_OFF_HORN_KEEPER@3                                             : Master's Mistcaller
1767: T7_OFF_HORN_KEEPER                                               : Grandmaster's Mistcaller
1768: T7_OFF_HORN_KEEPER@1                                             : Grandmaster's Mistcaller
1769: T7_OFF_HORN_KEEPER@2                                             : Grandmaster's Mistcaller
1770: T7_OFF_HORN_KEEPER@3                                             : Grandmaster's Mistcaller
1771: T8_OFF_HORN_KEEPER                                               : Elder's Mistcaller
1772: T8_OFF_HORN_KEEPER@1                                             : Elder's Mistcaller
1773: T8_OFF_HORN_KEEPER@2                                             : Elder's Mistcaller
1774: T8_OFF_HORN_KEEPER@3                                             : Elder's Mistcaller
1775: T4_OFF_TALISMAN_AVALON                                           : Adept's Sacred Scepter
1776: T4_OFF_TALISMAN_AVALON@1                                         : Adept's Sacred Scepter
1777: T4_OFF_TALISMAN_AVALON@2                                         : Adept's Sacred Scepter
1778: T4_OFF_TALISMAN_AVALON@3                                         : Adept's Sacred Scepter
1779: T5_OFF_TALISMAN_AVALON                                           : Expert's Sacred Scepter
1780: T5_OFF_TALISMAN_AVALON@1                                         : Expert's Sacred Scepter
1781: T5_OFF_TALISMAN_AVALON@2                                         : Expert's Sacred Scepter
1782: T5_OFF_TALISMAN_AVALON@3                                         : Expert's Sacred Scepter
1783: T6_OFF_TALISMAN_AVALON                                           : Master's Sacred Scepter
1784: T6_OFF_TALISMAN_AVALON@1                                         : Master's Sacred Scepter
1785: T6_OFF_TALISMAN_AVALON@2                                         : Master's Sacred Scepter
1786: T6_OFF_TALISMAN_AVALON@3                                         : Master's Sacred Scepter
1787: T7_OFF_TALISMAN_AVALON                                           : Grandmaster's Sacred Scepter
1788: T7_OFF_TALISMAN_AVALON@1                                         : Grandmaster's Sacred Scepter
1789: T7_OFF_TALISMAN_AVALON@2                                         : Grandmaster's Sacred Scepter
1790: T7_OFF_TALISMAN_AVALON@3                                         : Grandmaster's Sacred Scepter
1791: T8_OFF_TALISMAN_AVALON                                           : Elder's Sacred Scepter
1792: T8_OFF_TALISMAN_AVALON@1                                         : Elder's Sacred Scepter
1793: T8_OFF_TALISMAN_AVALON@2                                         : Elder's Sacred Scepter
1794: T8_OFF_TALISMAN_AVALON@3                                         : Elder's Sacred Scepter
1795: T4_OFF_LAMP_UNDEAD                                               : Adept's Cryptcandle
1796: T4_OFF_LAMP_UNDEAD@1                                             : Adept's Cryptcandle
1797: T4_OFF_LAMP_UNDEAD@2                                             : Adept's Cryptcandle
1798: T4_OFF_LAMP_UNDEAD@3                                             : Adept's Cryptcandle
1799: T5_OFF_LAMP_UNDEAD                                               : Expert's Cryptcandle
1800: T5_OFF_LAMP_UNDEAD@1                                             : Expert's Cryptcandle
1801: T5_OFF_LAMP_UNDEAD@2                                             : Expert's Cryptcandle
1802: T5_OFF_LAMP_UNDEAD@3                                             : Expert's Cryptcandle
1803: T6_OFF_LAMP_UNDEAD                                               : Master's Cryptcandle
1804: T6_OFF_LAMP_UNDEAD@1                                             : Master's Cryptcandle
1805: T6_OFF_LAMP_UNDEAD@2                                             : Master's Cryptcandle
1806: T6_OFF_LAMP_UNDEAD@3                                             : Master's Cryptcandle
1807: T7_OFF_LAMP_UNDEAD                                               : Grandmaster's Cryptcandle
1808: T7_OFF_LAMP_UNDEAD@1                                             : Grandmaster's Cryptcandle
1809: T7_OFF_LAMP_UNDEAD@2                                             : Grandmaster's Cryptcandle
1810: T7_OFF_LAMP_UNDEAD@3                                             : Grandmaster's Cryptcandle
1811: T8_OFF_LAMP_UNDEAD                                               : Elder's Cryptcandle
1812: T8_OFF_LAMP_UNDEAD@1                                             : Elder's Cryptcandle
1813: T8_OFF_LAMP_UNDEAD@2                                             : Elder's Cryptcandle
1814: T8_OFF_LAMP_UNDEAD@3                                             : Elder's Cryptcandle
1815: T4_OFF_JESTERCANE_HELL                                           : Adept's Leering Cane
1816: T4_OFF_JESTERCANE_HELL@1                                         : Adept's Leering Cane
1817: T4_OFF_JESTERCANE_HELL@2                                         : Adept's Leering Cane
1818: T4_OFF_JESTERCANE_HELL@3                                         : Adept's Leering Cane
1819: T5_OFF_JESTERCANE_HELL                                           : Expert's Leering Cane
1820: T5_OFF_JESTERCANE_HELL@1                                         : Expert's Leering Cane
1821: T5_OFF_JESTERCANE_HELL@2                                         : Expert's Leering Cane
1822: T5_OFF_JESTERCANE_HELL@3                                         : Expert's Leering Cane
1823: T6_OFF_JESTERCANE_HELL                                           : Master's Leering Cane
1824: T6_OFF_JESTERCANE_HELL@1                                         : Master's Leering Cane
1825: T6_OFF_JESTERCANE_HELL@2                                         : Master's Leering Cane
1826: T6_OFF_JESTERCANE_HELL@3                                         : Master's Leering Cane
1827: T7_OFF_JESTERCANE_HELL                                           : Grandmaster's Leering Cane
1828: T7_OFF_JESTERCANE_HELL@1                                         : Grandmaster's Leering Cane
1829: T7_OFF_JESTERCANE_HELL@2                                         : Grandmaster's Leering Cane
1830: T7_OFF_JESTERCANE_HELL@3                                         : Grandmaster's Leering Cane
1831: T8_OFF_JESTERCANE_HELL                                           : Elder's Leering Cane
1832: T8_OFF_JESTERCANE_HELL@1                                         : Elder's Leering Cane
1833: T8_OFF_JESTERCANE_HELL@2                                         : Elder's Leering Cane
1834: T8_OFF_JESTERCANE_HELL@3                                         : Elder's Leering Cane
1835: T2_CAPE                                                          : Novice's Cape
1836: T3_CAPE                                                          : Journeyman's Cape
1837: T4_CAPE                                                          : Adept's Cape
1838: T4_CAPE@1                                                        : Adept's Cape
1839: T4_CAPE@2                                                        : Adept's Cape
1840: T4_CAPE@3                                                        : Adept's Cape
1841: T5_CAPE                                                          : Expert's Cape
1842: T5_CAPE@1                                                        : Expert's Cape
1843: T5_CAPE@2                                                        : Expert's Cape
1844: T5_CAPE@3                                                        : Expert's Cape
1845: T6_CAPE                                                          : Master's Cape
1846: T6_CAPE@1                                                        : Master's Cape
1847: T6_CAPE@2                                                        : Master's Cape
1848: T6_CAPE@3                                                        : Master's Cape
1849: T7_CAPE                                                          : Grandmaster's Cape
1850: T7_CAPE@1                                                        : Grandmaster's Cape
1851: T7_CAPE@2                                                        : Grandmaster's Cape
1852: T7_CAPE@3                                                        : Grandmaster's Cape
1853: T8_CAPE                                                          : Elder's Cape
1854: T8_CAPE@1                                                        : Elder's Cape
1855: T8_CAPE@2                                                        : Elder's Cape
1856: T8_CAPE@3                                                        : Elder's Cape
1857: T4_CAPEITEM_FW_BRIDGEWATCH                                       : Adept's Bridgewatch Cape
1858: T4_CAPEITEM_FW_BRIDGEWATCH@1                                     : Adept's Bridgewatch Cape
1859: T4_CAPEITEM_FW_BRIDGEWATCH@2                                     : Adept's Bridgewatch Cape
1860: T4_CAPEITEM_FW_BRIDGEWATCH@3                                     : Adept's Bridgewatch Cape
1861: T5_CAPEITEM_FW_BRIDGEWATCH                                       : Expert's Bridgewatch Cape
1862: T5_CAPEITEM_FW_BRIDGEWATCH@1                                     : Expert's Bridgewatch Cape
1863: T5_CAPEITEM_FW_BRIDGEWATCH@2                                     : Expert's Bridgewatch Cape
1864: T5_CAPEITEM_FW_BRIDGEWATCH@3                                     : Expert's Bridgewatch Cape
1865: T6_CAPEITEM_FW_BRIDGEWATCH                                       : Master's Bridgewatch Cape
1866: T6_CAPEITEM_FW_BRIDGEWATCH@1                                     : Master's Bridgewatch Cape
1867: T6_CAPEITEM_FW_BRIDGEWATCH@2                                     : Master's Bridgewatch Cape
1868: T6_CAPEITEM_FW_BRIDGEWATCH@3                                     : Master's Bridgewatch Cape
1869: T7_CAPEITEM_FW_BRIDGEWATCH                                       : Grandmaster's Bridgewatch Cape
1870: T7_CAPEITEM_FW_BRIDGEWATCH@1                                     : Grandmaster's Bridgewatch Cape
1871: T7_CAPEITEM_FW_BRIDGEWATCH@2                                     : Grandmaster's Bridgewatch Cape
1872: T7_CAPEITEM_FW_BRIDGEWATCH@3                                     : Grandmaster's Bridgewatch Cape
1873: T8_CAPEITEM_FW_BRIDGEWATCH                                       : Elder's Bridgewatch Cape
1874: T8_CAPEITEM_FW_BRIDGEWATCH@1                                     : Elder's Bridgewatch Cape
1875: T8_CAPEITEM_FW_BRIDGEWATCH@2                                     : Elder's Bridgewatch Cape
1876: T8_CAPEITEM_FW_BRIDGEWATCH@3                                     : Elder's Bridgewatch Cape
1877: T4_CAPEITEM_FW_FORTSTERLING                                      : Adept's Fort Sterling Cape
1878: T4_CAPEITEM_FW_FORTSTERLING@1                                    : Adept's Fort Sterling Cape
1879: T4_CAPEITEM_FW_FORTSTERLING@2                                    : Adept's Fort Sterling Cape
1880: T4_CAPEITEM_FW_FORTSTERLING@3                                    : Adept's Fort Sterling Cape
1881: T5_CAPEITEM_FW_FORTSTERLING                                      : Expert's Fort Sterling Cape
1882: T5_CAPEITEM_FW_FORTSTERLING@1                                    : Expert's Fort Sterling Cape
1883: T5_CAPEITEM_FW_FORTSTERLING@2                                    : Expert's Fort Sterling Cape
1884: T5_CAPEITEM_FW_FORTSTERLING@3                                    : Expert's Fort Sterling Cape
1885: T6_CAPEITEM_FW_FORTSTERLING                                      : Master's Fort Sterling Cape
1886: T6_CAPEITEM_FW_FORTSTERLING@1                                    : Master's Fort Sterling Cape
1887: T6_CAPEITEM_FW_FORTSTERLING@2                                    : Master's Fort Sterling Cape
1888: T6_CAPEITEM_FW_FORTSTERLING@3                                    : Master's Fort Sterling Cape
1889: T7_CAPEITEM_FW_FORTSTERLING                                      : Grandmaster's Fort Sterling Cape
1890: T7_CAPEITEM_FW_FORTSTERLING@1                                    : Grandmaster's Fort Sterling Cape
1891: T7_CAPEITEM_FW_FORTSTERLING@2                                    : Grandmaster's Fort Sterling Cape
1892: T7_CAPEITEM_FW_FORTSTERLING@3                                    : Grandmaster's Fort Sterling Cape
1893: T8_CAPEITEM_FW_FORTSTERLING                                      : Elder's Fort Sterling Cape
1894: T8_CAPEITEM_FW_FORTSTERLING@1                                    : Elder's Fort Sterling Cape
1895: T8_CAPEITEM_FW_FORTSTERLING@2                                    : Elder's Fort Sterling Cape
1896: T8_CAPEITEM_FW_FORTSTERLING@3                                    : Elder's Fort Sterling Cape
1897: T4_CAPEITEM_FW_LYMHURST                                          : Adept's Lymhurst Cape
1898: T4_CAPEITEM_FW_LYMHURST@1                                        : Adept's Lymhurst Cape
1899: T4_CAPEITEM_FW_LYMHURST@2                                        : Adept's Lymhurst Cape
1900: T4_CAPEITEM_FW_LYMHURST@3                                        : Adept's Lymhurst Cape
1901: T5_CAPEITEM_FW_LYMHURST                                          : Expert's Lymhurst Cape
1902: T5_CAPEITEM_FW_LYMHURST@1                                        : Expert's Lymhurst Cape
1903: T5_CAPEITEM_FW_LYMHURST@2                                        : Expert's Lymhurst Cape
1904: T5_CAPEITEM_FW_LYMHURST@3                                        : Expert's Lymhurst Cape
1905: T6_CAPEITEM_FW_LYMHURST                                          : Master's Lymhurst Cape
1906: T6_CAPEITEM_FW_LYMHURST@1                                        : Master's Lymhurst Cape
1907: T6_CAPEITEM_FW_LYMHURST@2                                        : Master's Lymhurst Cape
1908: T6_CAPEITEM_FW_LYMHURST@3                                        : Master's Lymhurst Cape
1909: T7_CAPEITEM_FW_LYMHURST                                          : Grandmaster's Lymhurst Cape
1910: T7_CAPEITEM_FW_LYMHURST@1                                        : Grandmaster's Lymhurst Cape
1911: T7_CAPEITEM_FW_LYMHURST@2                                        : Grandmaster's Lymhurst Cape
1912: T7_CAPEITEM_FW_LYMHURST@3                                        : Grandmaster's Lymhurst Cape
1913: T8_CAPEITEM_FW_LYMHURST                                          : Elder's Lymhurst Cape
1914: T8_CAPEITEM_FW_LYMHURST@1                                        : Elder's Lymhurst Cape
1915: T8_CAPEITEM_FW_LYMHURST@2                                        : Elder's Lymhurst Cape
1916: T8_CAPEITEM_FW_LYMHURST@3                                        : Elder's Lymhurst Cape
1917: T4_CAPEITEM_FW_MARTLOCK                                          : Adept's Martlock Cape
1918: T4_CAPEITEM_FW_MARTLOCK@1                                        : Adept's Martlock Cape
1919: T4_CAPEITEM_FW_MARTLOCK@2                                        : Adept's Martlock Cape
1920: T4_CAPEITEM_FW_MARTLOCK@3                                        : Adept's Martlock Cape
1921: T5_CAPEITEM_FW_MARTLOCK                                          : Expert's Martlock Cape
1922: T5_CAPEITEM_FW_MARTLOCK@1                                        : Expert's Martlock Cape
1923: T5_CAPEITEM_FW_MARTLOCK@2                                        : Expert's Martlock Cape
1924: T5_CAPEITEM_FW_MARTLOCK@3                                        : Expert's Martlock Cape
1925: T6_CAPEITEM_FW_MARTLOCK                                          : Master's Martlock Cape
1926: T6_CAPEITEM_FW_MARTLOCK@1                                        : Master's Martlock Cape
1927: T6_CAPEITEM_FW_MARTLOCK@2                                        : Master's Martlock Cape
1928: T6_CAPEITEM_FW_MARTLOCK@3                                        : Master's Martlock Cape
1929: T7_CAPEITEM_FW_MARTLOCK                                          : Grandmaster's Martlock Cape
1930: T7_CAPEITEM_FW_MARTLOCK@1                                        : Grandmaster's Martlock Cape
1931: T7_CAPEITEM_FW_MARTLOCK@2                                        : Grandmaster's Martlock Cape
1932: T7_CAPEITEM_FW_MARTLOCK@3                                        : Grandmaster's Martlock Cape
1933: T8_CAPEITEM_FW_MARTLOCK                                          : Elder's Martlock Cape
1934: T8_CAPEITEM_FW_MARTLOCK@1                                        : Elder's Martlock Cape
1935: T8_CAPEITEM_FW_MARTLOCK@2                                        : Elder's Martlock Cape
1936: T8_CAPEITEM_FW_MARTLOCK@3                                        : Elder's Martlock Cape
1937: T4_CAPEITEM_FW_THETFORD                                          : Adept's Thetford Cape
1938: T4_CAPEITEM_FW_THETFORD@1                                        : Adept's Thetford Cape
1939: T4_CAPEITEM_FW_THETFORD@2                                        : Adept's Thetford Cape
1940: T4_CAPEITEM_FW_THETFORD@3                                        : Adept's Thetford Cape
1941: T5_CAPEITEM_FW_THETFORD                                          : Expert's Thetford Cape
1942: T5_CAPEITEM_FW_THETFORD@1                                        : Expert's Thetford Cape
1943: T5_CAPEITEM_FW_THETFORD@2                                        : Expert's Thetford Cape
1944: T5_CAPEITEM_FW_THETFORD@3                                        : Expert's Thetford Cape
1945: T6_CAPEITEM_FW_THETFORD                                          : Master's Thetford Cape
1946: T6_CAPEITEM_FW_THETFORD@1                                        : Master's Thetford Cape
1947: T6_CAPEITEM_FW_THETFORD@2                                        : Master's Thetford Cape
1948: T6_CAPEITEM_FW_THETFORD@3                                        : Master's Thetford Cape
1949: T7_CAPEITEM_FW_THETFORD                                          : Grandmaster's Thetford Cape
1950: T7_CAPEITEM_FW_THETFORD@1                                        : Grandmaster's Thetford Cape
1951: T7_CAPEITEM_FW_THETFORD@2                                        : Grandmaster's Thetford Cape
1952: T7_CAPEITEM_FW_THETFORD@3                                        : Grandmaster's Thetford Cape
1953: T8_CAPEITEM_FW_THETFORD                                          : Elder's Thetford Cape
1954: T8_CAPEITEM_FW_THETFORD@1                                        : Elder's Thetford Cape
1955: T8_CAPEITEM_FW_THETFORD@2                                        : Elder's Thetford Cape
1956: T8_CAPEITEM_FW_THETFORD@3                                        : Elder's Thetford Cape
1957: T4_CAPEITEM_FW_CAERLEON                                          : Adept's Caerleon Cape
1958: T4_CAPEITEM_FW_CAERLEON@1                                        : Adept's Caerleon Cape
1959: T4_CAPEITEM_FW_CAERLEON@2                                        : Adept's Caerleon Cape
1960: T4_CAPEITEM_FW_CAERLEON@3                                        : Adept's Caerleon Cape
1961: T5_CAPEITEM_FW_CAERLEON                                          : Expert's Caerleon Cape
1962: T5_CAPEITEM_FW_CAERLEON@1                                        : Expert's Caerleon Cape
1963: T5_CAPEITEM_FW_CAERLEON@2                                        : Expert's Caerleon Cape
1964: T5_CAPEITEM_FW_CAERLEON@3                                        : Expert's Caerleon Cape
1965: T6_CAPEITEM_FW_CAERLEON                                          : Master's Caerleon Cape
1966: T6_CAPEITEM_FW_CAERLEON@1                                        : Master's Caerleon Cape
1967: T6_CAPEITEM_FW_CAERLEON@2                                        : Master's Caerleon Cape
1968: T6_CAPEITEM_FW_CAERLEON@3                                        : Master's Caerleon Cape
1969: T7_CAPEITEM_FW_CAERLEON                                          : Grandmaster's Caerleon Cape
1970: T7_CAPEITEM_FW_CAERLEON@1                                        : Grandmaster's Caerleon Cape
1971: T7_CAPEITEM_FW_CAERLEON@2                                        : Grandmaster's Caerleon Cape
1972: T7_CAPEITEM_FW_CAERLEON@3                                        : Grandmaster's Caerleon Cape
1973: T8_CAPEITEM_FW_CAERLEON                                          : Elder's Caerleon Cape
1974: T8_CAPEITEM_FW_CAERLEON@1                                        : Elder's Caerleon Cape
1975: T8_CAPEITEM_FW_CAERLEON@2                                        : Elder's Caerleon Cape
1976: T8_CAPEITEM_FW_CAERLEON@3                                        : Elder's Caerleon Cape
1977: T4_CAPEITEM_HERETIC                                              : Adept's Heretic Cape
1978: T4_CAPEITEM_HERETIC@1                                            : Adept's Heretic Cape
1979: T4_CAPEITEM_HERETIC@2                                            : Adept's Heretic Cape
1980: T4_CAPEITEM_HERETIC@3                                            : Adept's Heretic Cape
1981: T5_CAPEITEM_HERETIC                                              : Expert's Heretic Cape
1982: T5_CAPEITEM_HERETIC@1                                            : Expert's Heretic Cape
1983: T5_CAPEITEM_HERETIC@2                                            : Expert's Heretic Cape
1984: T5_CAPEITEM_HERETIC@3                                            : Expert's Heretic Cape
1985: T6_CAPEITEM_HERETIC                                              : Master's Heretic Cape
1986: T6_CAPEITEM_HERETIC@1                                            : Master's Heretic Cape
1987: T6_CAPEITEM_HERETIC@2                                            : Master's Heretic Cape
1988: T6_CAPEITEM_HERETIC@3                                            : Master's Heretic Cape
1989: T7_CAPEITEM_HERETIC                                              : Grandmaster's Heretic Cape
1990: T7_CAPEITEM_HERETIC@1                                            : Grandmaster's Heretic Cape
1991: T7_CAPEITEM_HERETIC@2                                            : Grandmaster's Heretic Cape
1992: T7_CAPEITEM_HERETIC@3                                            : Grandmaster's Heretic Cape
1993: T8_CAPEITEM_HERETIC                                              : Elder's Heretic Cape
1994: T8_CAPEITEM_HERETIC@1                                            : Elder's Heretic Cape
1995: T8_CAPEITEM_HERETIC@2                                            : Elder's Heretic Cape
1996: T8_CAPEITEM_HERETIC@3                                            : Elder's Heretic Cape
1997: T4_CAPEITEM_UNDEAD                                               : Adept's Undead Cape
1998: T4_CAPEITEM_UNDEAD@1                                             : Adept's Undead Cape
1999: T4_CAPEITEM_UNDEAD@2                                             : Adept's Undead Cape
2000: T4_CAPEITEM_UNDEAD@3                                             : Adept's Undead Cape
2001: T5_CAPEITEM_UNDEAD                                               : Expert's Undead Cape
2002: T5_CAPEITEM_UNDEAD@1                                             : Expert's Undead Cape
2003: T5_CAPEITEM_UNDEAD@2                                             : Expert's Undead Cape
2004: T5_CAPEITEM_UNDEAD@3                                             : Expert's Undead Cape
2005: T6_CAPEITEM_UNDEAD                                               : Master's Undead Cape
2006: T6_CAPEITEM_UNDEAD@1                                             : Master's Undead Cape
2007: T6_CAPEITEM_UNDEAD@2                                             : Master's Undead Cape
2008: T6_CAPEITEM_UNDEAD@3                                             : Master's Undead Cape
2009: T7_CAPEITEM_UNDEAD                                               : Grandmaster's Undead Cape
2010: T7_CAPEITEM_UNDEAD@1                                             : Grandmaster's Undead Cape
2011: T7_CAPEITEM_UNDEAD@2                                             : Grandmaster's Undead Cape
2012: T7_CAPEITEM_UNDEAD@3                                             : Grandmaster's Undead Cape
2013: T8_CAPEITEM_UNDEAD                                               : Elder's Undead Cape
2014: T8_CAPEITEM_UNDEAD@1                                             : Elder's Undead Cape
2015: T8_CAPEITEM_UNDEAD@2                                             : Elder's Undead Cape
2016: T8_CAPEITEM_UNDEAD@3                                             : Elder's Undead Cape
2017: T4_CAPEITEM_KEEPER                                               : Adept's Keeper Cape
2018: T4_CAPEITEM_KEEPER@1                                             : Adept's Keeper Cape
2019: T4_CAPEITEM_KEEPER@2                                             : Adept's Keeper Cape
2020: T4_CAPEITEM_KEEPER@3                                             : Adept's Keeper Cape
2021: T5_CAPEITEM_KEEPER                                               : Expert's Keeper Cape
2022: T5_CAPEITEM_KEEPER@1                                             : Expert's Keeper Cape
2023: T5_CAPEITEM_KEEPER@2                                             : Expert's Keeper Cape
2024: T5_CAPEITEM_KEEPER@3                                             : Expert's Keeper Cape
2025: T6_CAPEITEM_KEEPER                                               : Master's Keeper Cape
2026: T6_CAPEITEM_KEEPER@1                                             : Master's Keeper Cape
2027: T6_CAPEITEM_KEEPER@2                                             : Master's Keeper Cape
2028: T6_CAPEITEM_KEEPER@3                                             : Master's Keeper Cape
2029: T7_CAPEITEM_KEEPER                                               : Grandmaster's Keeper Cape
2030: T7_CAPEITEM_KEEPER@1                                             : Grandmaster's Keeper Cape
2031: T7_CAPEITEM_KEEPER@2                                             : Grandmaster's Keeper Cape
2032: T7_CAPEITEM_KEEPER@3                                             : Grandmaster's Keeper Cape
2033: T8_CAPEITEM_KEEPER                                               : Elder's Keeper Cape
2034: T8_CAPEITEM_KEEPER@1                                             : Elder's Keeper Cape
2035: T8_CAPEITEM_KEEPER@2                                             : Elder's Keeper Cape
2036: T8_CAPEITEM_KEEPER@3                                             : Elder's Keeper Cape
2037: T4_CAPEITEM_MORGANA                                              : Adept's Morgana Cape
2038: T4_CAPEITEM_MORGANA@1                                            : Adept's Morgana Cape
2039: T4_CAPEITEM_MORGANA@2                                            : Adept's Morgana Cape
2040: T4_CAPEITEM_MORGANA@3                                            : Adept's Morgana Cape
2041: T5_CAPEITEM_MORGANA                                              : Expert's Morgana Cape
2042: T5_CAPEITEM_MORGANA@1                                            : Expert's Morgana Cape
2043: T5_CAPEITEM_MORGANA@2                                            : Expert's Morgana Cape
2044: T5_CAPEITEM_MORGANA@3                                            : Expert's Morgana Cape
2045: T6_CAPEITEM_MORGANA                                              : Master's Morgana Cape
2046: T6_CAPEITEM_MORGANA@1                                            : Master's Morgana Cape
2047: T6_CAPEITEM_MORGANA@2                                            : Master's Morgana Cape
2048: T6_CAPEITEM_MORGANA@3                                            : Master's Morgana Cape
2049: T7_CAPEITEM_MORGANA                                              : Grandmaster's Morgana Cape
2050: T7_CAPEITEM_MORGANA@1                                            : Grandmaster's Morgana Cape
2051: T7_CAPEITEM_MORGANA@2                                            : Grandmaster's Morgana Cape
2052: T7_CAPEITEM_MORGANA@3                                            : Grandmaster's Morgana Cape
2053: T8_CAPEITEM_MORGANA                                              : Elder's Morgana Cape
2054: T8_CAPEITEM_MORGANA@1                                            : Elder's Morgana Cape
2055: T8_CAPEITEM_MORGANA@2                                            : Elder's Morgana Cape
2056: T8_CAPEITEM_MORGANA@3                                            : Elder's Morgana Cape
2057: T4_CAPEITEM_DEMON                                                : Adept's Demon Cape
2058: T4_CAPEITEM_DEMON@1                                              : Adept's Demon Cape
2059: T4_CAPEITEM_DEMON@2                                              : Adept's Demon Cape
2060: T4_CAPEITEM_DEMON@3                                              : Adept's Demon Cape
2061: T5_CAPEITEM_DEMON                                                : Expert's Demon Cape
2062: T5_CAPEITEM_DEMON@1                                              : Expert's Demon Cape
2063: T5_CAPEITEM_DEMON@2                                              : Expert's Demon Cape
2064: T5_CAPEITEM_DEMON@3                                              : Expert's Demon Cape
2065: T6_CAPEITEM_DEMON                                                : Master's Demon Cape
2066: T6_CAPEITEM_DEMON@1                                              : Master's Demon Cape
2067: T6_CAPEITEM_DEMON@2                                              : Master's Demon Cape
2068: T6_CAPEITEM_DEMON@3                                              : Master's Demon Cape
2069: T7_CAPEITEM_DEMON                                                : Grandmaster's Demon Cape
2070: T7_CAPEITEM_DEMON@1                                              : Grandmaster's Demon Cape
2071: T7_CAPEITEM_DEMON@2                                              : Grandmaster's Demon Cape
2072: T7_CAPEITEM_DEMON@3                                              : Grandmaster's Demon Cape
2073: T8_CAPEITEM_DEMON                                                : Elder's Demon Cape
2074: T8_CAPEITEM_DEMON@1                                              : Elder's Demon Cape
2075: T8_CAPEITEM_DEMON@2                                              : Elder's Demon Cape
2076: T8_CAPEITEM_DEMON@3                                              : Elder's Demon Cape
2077: UNIQUE_LOOTCHEST_FIRSTREFERRAL                                   : Recruiter's Pile of Tomes
2078: UNIQUE_LOOTCHEST_SKILLBOOKS_TELLAFRIEND                          : Pile of Tomes
2079: T2_BAG                                                           : Novice's Bag
2080: T3_BAG                                                           : Journeyman's Bag
2081: T4_BAG                                                           : Adept's Bag
2082: T4_BAG@1                                                         : Adept's Bag
2083: T4_BAG@2                                                         : Adept's Bag
2084: T4_BAG@3                                                         : Adept's Bag
2085: T5_BAG                                                           : Expert's Bag
2086: T5_BAG@1                                                         : Expert's Bag
2087: T5_BAG@2                                                         : Expert's Bag
2088: T5_BAG@3                                                         : Expert's Bag
2089: T6_BAG                                                           : Master's Bag
2090: T6_BAG@1                                                         : Master's Bag
2091: T6_BAG@2                                                         : Master's Bag
2092: T6_BAG@3                                                         : Master's Bag
2093: T7_BAG                                                           : Grandmaster's Bag
2094: T7_BAG@1                                                         : Grandmaster's Bag
2095: T7_BAG@2                                                         : Grandmaster's Bag
2096: T7_BAG@3                                                         : Grandmaster's Bag
2097: T8_BAG                                                           : Elder's Bag
2098: T8_BAG@1                                                         : Elder's Bag
2099: T8_BAG@2                                                         : Elder's Bag
2100: T8_BAG@3                                                         : Elder's Bag
2101: T4_BAG_INSIGHT                                                   : Adept's Satchel of Insight
2102: T4_BAG_INSIGHT@1                                                 : Adept's Satchel of Insight
2103: T4_BAG_INSIGHT@2                                                 : Adept's Satchel of Insight
2104: T4_BAG_INSIGHT@3                                                 : Adept's Satchel of Insight
2105: T5_BAG_INSIGHT                                                   : Expert's Satchel of Insight
2106: T5_BAG_INSIGHT@1                                                 : Expert's Satchel of Insight
2107: T5_BAG_INSIGHT@2                                                 : Expert's Satchel of Insight
2108: T5_BAG_INSIGHT@3                                                 : Expert's Satchel of Insight
2109: T6_BAG_INSIGHT                                                   : Master's Satchel of Insight
2110: T6_BAG_INSIGHT@1                                                 : Master's Satchel of Insight
2111: T6_BAG_INSIGHT@2                                                 : Master's Satchel of Insight
2112: T6_BAG_INSIGHT@3                                                 : Master's Satchel of Insight
2113: T7_BAG_INSIGHT                                                   : Grandmaster's Satchel of Insight
2114: T7_BAG_INSIGHT@1                                                 : Grandmaster's Satchel of Insight
2115: T7_BAG_INSIGHT@2                                                 : Grandmaster's Satchel of Insight
2116: T7_BAG_INSIGHT@3                                                 : Grandmaster's Satchel of Insight
2117: T8_BAG_INSIGHT                                                   : Elder's Satchel of Insight
2118: T8_BAG_INSIGHT@1                                                 : Elder's Satchel of Insight
2119: T8_BAG_INSIGHT@2                                                 : Elder's Satchel of Insight
2120: T8_BAG_INSIGHT@3                                                 : Elder's Satchel of Insight
2121: T1_2H_TOOL_PICK                                                  : Beginner's Pickaxe
2122: T2_2H_TOOL_PICK                                                  : Novice's Pickaxe
2123: T3_2H_TOOL_PICK                                                  : Journeyman's Pickaxe
2124: T4_2H_TOOL_PICK                                                  : Adept's Pickaxe
2125: T5_2H_TOOL_PICK                                                  : Expert's Pickaxe
2126: T6_2H_TOOL_PICK                                                  : Master's Pickaxe
2127: T7_2H_TOOL_PICK                                                  : Grandmaster's Pickaxe
2128: T8_2H_TOOL_PICK                                                  : Elder's Pickaxe
2129: T4_2H_TOOL_PICK_AVALON                                           : Adept's Avalonian Pickaxe
2130: T5_2H_TOOL_PICK_AVALON                                           : Expert's Avalonian Pickaxe
2131: T6_2H_TOOL_PICK_AVALON                                           : Master's Avalonian Pickaxe
2132: T7_2H_TOOL_PICK_AVALON                                           : Grandmaster's Avalonian Pickaxe
2133: T8_2H_TOOL_PICK_AVALON                                           : Elder's Avalonian Pickaxe
2134: T1_2H_TOOL_HAMMER                                                : Beginner's Stone Hammer
2135: T2_2H_TOOL_HAMMER                                                : Novice's Stone Hammer
2136: T3_2H_TOOL_HAMMER                                                : Journeyman's Stone Hammer
2137: T4_2H_TOOL_HAMMER                                                : Adept's Stone Hammer
2138: T5_2H_TOOL_HAMMER                                                : Expert's Stone Hammer
2139: T6_2H_TOOL_HAMMER                                                : Master's Stone Hammer
2140: T7_2H_TOOL_HAMMER                                                : Grandmaster's Stone Hammer
2141: T8_2H_TOOL_HAMMER                                                : Elder's Stone Hammer
2142: T4_2H_TOOL_HAMMER_AVALON                                         : Adept's Avalonian Stone Hammer
2143: T5_2H_TOOL_HAMMER_AVALON                                         : Expert's Avalonian Stone Hammer
2144: T6_2H_TOOL_HAMMER_AVALON                                         : Master's Avalonian Stone Hammer
2145: T7_2H_TOOL_HAMMER_AVALON                                         : Grandmaster's Avalonian Stone Hammer
2146: T8_2H_TOOL_HAMMER_AVALON                                         : Elder's Avalonian Stone Hammer
2147: T1_2H_TOOL_AXE                                                   : Beginner's Axe
2148: T2_2H_TOOL_AXE                                                   : Novice's Axe
2149: T3_2H_TOOL_AXE                                                   : Journeyman's Axe
2150: T4_2H_TOOL_AXE                                                   : Adept's Axe
2151: T5_2H_TOOL_AXE                                                   : Expert's Axe
2152: T6_2H_TOOL_AXE                                                   : Master's Axe
2153: T7_2H_TOOL_AXE                                                   : Grandmaster's Axe
2154: T8_2H_TOOL_AXE                                                   : Elder's Axe
2155: T4_2H_TOOL_AXE_AVALON                                            : Adept's Avalonian Axe
2156: T5_2H_TOOL_AXE_AVALON                                            : Expert's Avalonian Axe
2157: T6_2H_TOOL_AXE_AVALON                                            : Master's Avalonian Axe
2158: T7_2H_TOOL_AXE_AVALON                                            : Grandmaster's Avalonian Axe
2159: T8_2H_TOOL_AXE_AVALON                                            : Elder's Avalonian Axe
2160: T1_2H_TOOL_SICKLE                                                : Beginner's Sickle
2161: T2_2H_TOOL_SICKLE                                                : Novice's Sickle
2162: T3_2H_TOOL_SICKLE                                                : Journeyman's Sickle
2163: T4_2H_TOOL_SICKLE                                                : Adept's Sickle
2164: T5_2H_TOOL_SICKLE                                                : Expert's Sickle
2165: T6_2H_TOOL_SICKLE                                                : Master's Sickle
2166: T7_2H_TOOL_SICKLE                                                : Grandmaster's Sickle
2167: T8_2H_TOOL_SICKLE                                                : Elder's Sickle
2168: T4_2H_TOOL_SICKLE_AVALON                                         : Adept's Avalonian Sickle
2169: T5_2H_TOOL_SICKLE_AVALON                                         : Expert's Avalonian Sickle
2170: T6_2H_TOOL_SICKLE_AVALON                                         : Master's Avalonian Sickle
2171: T7_2H_TOOL_SICKLE_AVALON                                         : Grandmaster's Avalonian Sickle
2172: T8_2H_TOOL_SICKLE_AVALON                                         : Elder's Avalonian Sickle
2173: T1_2H_TOOL_KNIFE                                                 : Beginner's Skinning Knife
2174: T2_2H_TOOL_KNIFE                                                 : Novice's Skinning Knife
2175: T3_2H_TOOL_KNIFE                                                 : Journeyman's Skinning Knife
2176: T4_2H_TOOL_KNIFE                                                 : Adept's Skinning Knife
2177: T5_2H_TOOL_KNIFE                                                 : Expert's Skinning Knife
2178: T6_2H_TOOL_KNIFE                                                 : Master's Skinning Knife
2179: T7_2H_TOOL_KNIFE                                                 : Grandmaster's Skinning Knife
2180: T8_2H_TOOL_KNIFE                                                 : Elder's Skinning Knife
2181: T4_2H_TOOL_KNIFE_AVALON                                          : Adept's Avalonian Skinning Knife
2182: T5_2H_TOOL_KNIFE_AVALON                                          : Expert's Avalonian Skinning Knife
2183: T6_2H_TOOL_KNIFE_AVALON                                          : Master's Avalonian Skinning Knife
2184: T7_2H_TOOL_KNIFE_AVALON                                          : Grandmaster's Avalonian Skinning Knife
2185: T8_2H_TOOL_KNIFE_AVALON                                          : Elder's Avalonian Skinning Knife
2186: T2_2H_TOOL_SIEGEHAMMER                                           : Novice's Demolition Hammer
2187: T3_2H_TOOL_SIEGEHAMMER                                           : Journeyman's Demolition Hammer
2188: T4_2H_TOOL_SIEGEHAMMER                                           : Adept's Demolition Hammer
2189: T5_2H_TOOL_SIEGEHAMMER                                           : Expert's Demolition Hammer
2190: T6_2H_TOOL_SIEGEHAMMER                                           : Master's Demolition Hammer
2191: T7_2H_TOOL_SIEGEHAMMER                                           : Grandmaster's Demolition Hammer
2192: T8_2H_TOOL_SIEGEHAMMER                                           : Elder's Demolition Hammer
2193: T4_2H_TOOL_SIEGEHAMMER_AVALON                                    : Adept's Avalonian Demolition Hammer
2194: T5_2H_TOOL_SIEGEHAMMER_AVALON                                    : Expert's Avalonian Demolition Hammer
2195: T6_2H_TOOL_SIEGEHAMMER_AVALON                                    : Master's Avalonian Demolition Hammer
2196: T7_2H_TOOL_SIEGEHAMMER_AVALON                                    : Grandmaster's Avalonian Demolition Hammer
2197: T8_2H_TOOL_SIEGEHAMMER_AVALON                                    : Elder's Avalonian Demolition Hammer
2198: T3_2H_TOOL_FISHINGROD                                            : Journeyman's Fishing Rod
2199: T4_2H_TOOL_FISHINGROD                                            : Adept's Fishing Rod
2200: T5_2H_TOOL_FISHINGROD                                            : Expert's Fishing Rod
2201: T6_2H_TOOL_FISHINGROD                                            : Master's Fishing Rod
2202: T7_2H_TOOL_FISHINGROD                                            : Grandmaster's Fishing Rod
2203: T8_2H_TOOL_FISHINGROD                                            : Elder's Fishing Rod
2204: T4_2H_TOOL_FISHINGROD_AVALON                                     : Adept's Avalonian Fishing Rod
2205: T5_2H_TOOL_FISHINGROD_AVALON                                     : Expert's Avalonian Fishing Rod
2206: T6_2H_TOOL_FISHINGROD_AVALON                                     : Master's Avalonian Fishing Rod
2207: T7_2H_TOOL_FISHINGROD_AVALON                                     : Grandmaster's Avalonian Fishing Rod
2208: T8_2H_TOOL_FISHINGROD_AVALON                                     : Elder's Avalonian Fishing Rod
2209: UNIQUE_MOUNT_ARMORED_HORSE_KNIGHT_01_TEST                        
2210: T2_MOUNT_MULE                                                    : Novice's Mule
2211: T3_MOUNT_HORSE                                                   : Journeyman's Riding Horse
2212: T4_MOUNT_HORSE                                                   : Adept's Riding Horse
2213: T5_MOUNT_HORSE                                                   : Expert's Riding Horse
2214: T6_MOUNT_HORSE                                                   : Master's Riding Horse
2215: T7_MOUNT_HORSE                                                   : Grandmaster's Riding Horse
2216: T8_MOUNT_HORSE                                                   : Elder's Riding Horse
2217: T5_MOUNT_ARMORED_HORSE                                           : Expert's Armored Horse
2218: T6_MOUNT_ARMORED_HORSE                                           : Master's Armored Horse
2219: T7_MOUNT_ARMORED_HORSE                                           : Grandmaster's Armored Horse
2220: T8_MOUNT_ARMORED_HORSE                                           : Elder's Armored Horse
2221: T3_MOUNT_OX                                                      : Journeyman's Transport Ox
2222: T4_MOUNT_OX                                                      : Adept's Transport Ox
2223: T5_MOUNT_OX                                                      : Expert's Transport Ox
2224: T6_MOUNT_OX                                                      : Master's Transport Ox
2225: T7_MOUNT_OX                                                      : Grandmaster's Transport Ox
2226: T8_MOUNT_OX                                                      : Elder's Transport Ox
2227: T4_MOUNT_GIANTSTAG                                               : Adept's Giant Stag
2228: T6_MOUNT_GIANTSTAG_MOOSE                                         : Moose
2229: T6_MOUNT_DIREWOLF                                                : Direwolf
2230: T7_MOUNT_DIREBOAR                                                : Saddled Direboar
2231: T7_MOUNT_SWAMPDRAGON                                             : Saddled Swamp Dragon
2232: T8_MOUNT_DIREBEAR                                                : Saddled Direbear
2233: T8_MOUNT_MAMMOTH_TRANSPORT                                       : Elder's Transport Mammoth
2234: T5_MOUNT_MOABIRD_FW_BRIDGEWATCH                                  : Saddled Moabird
2235: T5_MOUNT_DIREBEAR_FW_FORTSTERLING                                : Saddled Winter Bear
2236: T5_MOUNT_DIREBOAR_FW_LYMHURST                                    : Saddled Wild Boar
2237: T5_MOUNT_RAM_FW_MARTLOCK                                         : Saddled Bighorn Ram
2238: T5_MOUNT_SWAMPDRAGON_FW_THETFORD                                 : Saddled Swamp Salamander
2239: T5_MOUNT_GREYWOLF_FW_CAERLEON                                    : Saddled Greywolf
2240: T8_MOUNT_MOABIRD_FW_BRIDGEWATCH_ELITE                            : Elite Terrorbird
2241: T8_MOUNT_DIREBEAR_FW_FORTSTERLING_ELITE                          : Elite Winter Bear
2242: T8_MOUNT_DIREBOAR_FW_LYMHURST_ELITE                              : Elite Wild Boar
2243: T8_MOUNT_RAM_FW_MARTLOCK_ELITE                                   : Elite Bighorn Ram
2244: T8_MOUNT_SWAMPDRAGON_FW_THETFORD_ELITE                           : Elite Swamp Salamander
2245: T8_MOUNT_GREYWOLF_FW_CAERLEON_ELITE                              : Elite Greywolf
2246: T8_MOUNT_MAMMOTH_BATTLE@1                                        : Elder's Command Mammoth
2247: T7_MOUNT_SWAMPDRAGON_BATTLE                                      : Flame Basilisk
2248: T7_MOUNT_ARMORED_SWAMPDRAGON_BATTLE                              : Venom Basilisk
2249: T6_MOUNT_SIEGE_BALLISTA                                          : Siege Ballista
2250: T8_MOUNT_HORSE_UNDEAD@1                                          : Spectral Bonehorse
2251: T5_MOUNT_COUGAR_KEEPER@1                                         : Swiftclaw
2252: T8_MOUNT_COUGAR_KEEPER@1                                         : Rageclaw
2253: T8_MOUNT_ARMORED_HORSE_MORGANA@1                                 : Morgana Nightmare
2254: UNIQUE_MOUNT_RAM_XMAS                                            : Yule Ram
2255: T7_MOUNT_SWAMPDRAGON_AVALON_BASILISK                             : Avalonian Basilisk
2256: UNIQUE_MOUNT_RAM_TELLAFRIEND                                     : Recruiter's Ram
2257: UNIQUE_MOUNT_MOABIRD_TELLAFRIEND                                 : Recruiter's Moabird
2258: UNIQUE_MOUNT_BAT_TELLAFRIEND                                     : Recruiter's Saddled Bat
2259: UNIQUE_MOUNT_GIANTTOAD_TELLAFRIEND                               : Recruiter's Toad
2260: UNIQUE_MOUNT_PANDA_TELLAFRIEND                                   
2261: UNIQUE_MOUNT_GIANTTOAD_02_TELLAFRIEND                            : Recruiter's Giant Frog
2262: T5_MOUNT_ARMORED_HORSE_SKIN_01                                   : Expert's Warhorse
2263: T6_MOUNT_ARMORED_HORSE_SKIN_01                                   : Master's Warhorse
2264: T7_MOUNT_ARMORED_HORSE_SKIN_01                                   : Grandmaster's Warhorse
2265: T8_MOUNT_ARMORED_HORSE_SKIN_01                                   : Elder's Warhorse
2266: UNIQUE_MOUNT_BAT_PERSONAL                                        : Spectral Bat
2267: T7_MOUNT_MONITORLIZARD_ADC                                       : Pest Lizard
2268: T7_MOUNT_HUSKY_ADC                                               : Snow Husky
2269: T6_MOUNT_FROSTRAM_ADC                                            : Frost Ram
2270: T7_MOUNT_TERRORBIRD_ADC                                          : Saddled Terrorbird
2271: UNIQUE_MOUNT_BEAR_KEEPER_ADC                                     : Grizzly Bear
2272: UNIQUE_MOUNT_BLACK_PANTHER_ADC                                   : Black Panther
2273: UNIQUE_MOUNT_MORGANA_RAVEN_ADC                                   : Morgana Raven
2274: UNIQUE_MOUNT_GIANT_HORSE_ADC                                     : Gallant Horse
2275: UNIQUE_MOUNT_UNDEAD_DIREBOAR_ADC                                 : Spectral Direboar
2276: UNIQUE_MOUNT_DIVINE_OWL_ADC                                      : Divine Owl
2277: UNIQUE_MOUNT_HERETIC_MULE_ADC                                    : Heretic Combat Mule
2278: UNIQUE_MOUNT_RHINO_SEASON_CRYSTAL                                : Crystal Battle Rhino
2279: UNIQUE_MOUNT_RHINO_SEASON_GOLD                                   : Gold Battle Rhino
2280: UNIQUE_MOUNT_RHINO_SEASON_SILVER                                 : Silver Battle Rhino
2281: UNIQUE_MOUNT_RHINO_SEASON_BRONZE                                 : Bronze Battle Rhino
2282: UNIQUE_MOUNT_TOWER_CHARIOT_CRYSTAL                               : Crystal Tower Chariot
2283: UNIQUE_MOUNT_TOWER_CHARIOT_GOLD                                  : Gold Tower Chariot
2284: UNIQUE_MOUNT_TOWER_CHARIOT_SILVER                                : Silver Tower Chariot
2285: UNIQUE_MOUNT_ARMORED_EAGLE_CRYSTAL                               : Crystal Battle Eagle
2286: UNIQUE_MOUNT_ARMORED_EAGLE_GOLD                                  : Gold Battle Eagle
2287: UNIQUE_MOUNT_ARMORED_EAGLE_SILVER                                : Silver Battle Eagle
2288: UNIQUE_MOUNT_BEETLE_SILVER                                       : Silver Colossus Beetle
2289: UNIQUE_MOUNT_BEETLE_GOLD                                         : Gold Colossus Beetle
2290: UNIQUE_MOUNT_BEETLE_CRYSTAL                                      : Crystal Colossus Beetle
2291: UNIQUE_MOUNT_BEHEMOTH_SILVER                                     : Silver Behemoth
2292: UNIQUE_MOUNT_BEHEMOTH_GOLD                                       : Gold Behemoth
2293: UNIQUE_MOUNT_BEHEMOTH_CRYSTAL                                    : Crystal Behemoth
2294: UNIQUE_MOUNT_ENT_SILVER                                          : Silver Ancient Ent
2295: UNIQUE_MOUNT_ENT_GOLD                                            : Gold Ancient Ent
2296: UNIQUE_MOUNT_ENT_CRYSTAL                                         : Crystal Ancient Ent
2297: UNIQUE_MOUNT_BATTLESPIDER_SILVER                                 : Silver Goliath Horseeater
2298: UNIQUE_MOUNT_BATTLESPIDER_GOLD                                   : Gold Goliath Horseeater
2299: UNIQUE_MOUNT_BATTLESPIDER_CRYSTAL                                : Crystal Goliath Horseeater
2300: UNIQUE_MOUNT_BASTION_CRYSTAL                                     : Crystal Roving Bastion
2301: UNIQUE_MOUNT_BASTION_GOLD                                        : Gold Roving Bastion
2302: UNIQUE_MOUNT_BASTION_SILVER                                      : Silver Roving Bastion
2303: UNIQUE_MOUNT_JUGGERNAUT_SILVER                                   : Silver Juggernaut
2304: UNIQUE_MOUNT_JUGGERNAUT_GOLD                                     : Gold Juggernaut
2305: UNIQUE_MOUNT_JUGGERNAUT_CRYSTAL                                  : Crystal Juggernaut
2306: UNIQUE_MOUNT_TANKBEETLE_CRYSTAL                                  : Crystal Phalanx Beetle
2307: UNIQUE_MOUNT_TANKBEETLE_GOLD                                     : Gold Phalanx Beetle
2308: UNIQUE_MOUNT_TANKBEETLE_SILVER                                   : Silver Phalanx Beetle
2309: UNIQUE_MOUNT_RHINO_TELLAFRIEND                                   
2310: UNIQUE_MOUNT_GIANTSTAG_FOUNDER_EPIC                              : Epic Explorer's Giant Stag
2311: T4_FURNITUREITEM_REPAIRKIT                                       : Adept's Repair Kit
2312: T5_FURNITUREITEM_REPAIRKIT                                       : Expert's Repair Kit
2313: T6_FURNITUREITEM_REPAIRKIT                                       : Master's Repair Kit
2314: T7_FURNITUREITEM_REPAIRKIT                                       : Grandmaster's Repair Kit
2315: T8_FURNITUREITEM_REPAIRKIT                                       : Elder's Repair Kit
2316: T2_FURNITUREITEM_GUILDBANNER_FABRIC                              : Guild Banner on Fabric
2317: T3_FURNITUREITEM_GUILDBANNER_FABRIC                              : Guild Banner on Fabric
2318: T4_FURNITUREITEM_GUILDBANNER_FABRIC                              : Guild Banner on Fabric
2319: T5_FURNITUREITEM_GUILDBANNER_FABRIC                              : Guild Banner on Fabric
2320: T2_FURNITUREITEM_GUILDBANNER_SHIELD                              : Guild Banner on Shield
2321: T3_FURNITUREITEM_GUILDBANNER_SHIELD                              : Guild Banner on Shield
2322: T4_FURNITUREITEM_GUILDBANNER_SHIELD                              : Guild Banner on Shield
2323: T5_FURNITUREITEM_GUILDBANNER_SHIELD                              : Guild Banner on Shield
2324: T3_FURNITUREITEM_ANNIVERSARYBANNER                               : Anniversary Banner - White
2325: T3_FURNITUREITEM_ANNIVERSARYBANNER_2020                          : Anniversary Banner - Red
2326: T3_FURNITUREITEM_ANNIVERSARYBANNER_2021                          : Anniversary Banner - Blue
2327: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_A@1                       : Recruiter's Crate
2328: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_B@1                       : Recruiter's Chest
2329: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_C@1                       : Recruiter's Wooden Chest
2330: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_COMPANION@1               : Recruiter's Companion Crate
2331: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_BARREL@1                  : Recruiter's Barrel-crate
2332: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_MERLINCUBE@1              : Recruiter's Merlyn Cube
2333: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_SARCOPHAGUS               : Recruiter's Sarcophagus Chest
2334: UNIQUE_FURNITUREITEM_TELLAFRIEND_DEER_STATUE                     : Recruiter's Deer Statue
2335: UNIQUE_FURNITUREITEM_TELLAFRIEND_HUNTER_STATUE                   : Recruiter's Hunter Statue
2336: UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_BARREL_B@1                : Recruiter's Storage-Barrel
2337: UNIQUE_FURNITUREITEM_TELLAFRIEND_BANNER_A                        : Recruiter's Guild Banner
2338: T2_FURNITUREITEM_BED                                             : Novice's Bed
2339: T3_FURNITUREITEM_BED                                             : Journeyman's Bed
2340: T4_FURNITUREITEM_BED                                             : Adept's Bed
2341: T5_FURNITUREITEM_BED                                             : Expert's Bed
2342: T6_FURNITUREITEM_BED                                             : Master's Bed
2343: T7_FURNITUREITEM_BED                                             : Grandmaster's Bed
2344: T8_FURNITUREITEM_BED                                             : Elder's Bed
2345: T2_FURNITUREITEM_CHEST                                           : Novice's Chest
2346: T3_FURNITUREITEM_CHEST                                           : Journeyman's Chest
2347: T4_FURNITUREITEM_CHEST                                           : Adept's Chest
2348: T5_FURNITUREITEM_CHEST                                           : Expert's Chest
2349: T3_VANITY_CONSUMABLE_FIREWORKS_BLUE                              : Royal Blue Fireworks
2350: T3_VANITY_CONSUMABLE_FIREWORKS_GREEN                             : Royal Green Fireworks
2351: T3_VANITY_CONSUMABLE_FIREWORKS_YELLOW                            : Royal Yellow Fireworks
2352: T3_VANITY_CONSUMABLE_FIREWORKS_RED                               : Royal Red Fireworks
2353: T3_VANITY_CONSUMABLE_FIREWORKS_BLUE_NONTRADABLE                  : Royal Blue Fireworks
2354: T3_VANITY_CONSUMABLE_FIREWORKS_GREEN_NONTRADABLE                 : Royal Green Fireworks
2355: T3_VANITY_CONSUMABLE_FIREWORKS_YELLOW_NONTRADABLE                : Royal Yellow Fireworks
2356: T3_VANITY_CONSUMABLE_FIREWORKS_RED_NONTRADABLE                   : Royal Red Fireworks
2357: UNIQUE_CONSUMABLE_EVENT_WINTER_2017                              : Snowball
2358: UNIQUE_CONSUMABLE_EVENT_EASTER_2020_EGG                          : Surprise Egg
2359: UNIQUE_CONSUMABLE_EVENT_EASTER_2020_CHOCOLATE                    : Chocolate
2360: T2_FURNITUREITEM_TABLE                                           : Novice's Table
2361: T3_FURNITUREITEM_TABLE                                           : Journeyman's Table
2362: T4_FURNITUREITEM_TABLE                                           : Adept's Table
2363: T5_FURNITUREITEM_TABLE                                           : Expert's Table
2364: T6_FURNITUREITEM_TABLE                                           : Master's Table
2365: T7_FURNITUREITEM_TABLE                                           : Grandmaster's Table
2366: T8_FURNITUREITEM_TABLE                                           : Elder's Table
2367: UNIQUE_FURNITUREITEM_EASTER_CHEST                                : Egg-shaped Chest
2368: UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_01                      : Modest Arena Display
2369: UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_02                      : Grand Arena Display
2370: UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_03                      : Glorious Arena Display
2371: PLAYERISLAND_FURNITUREITEM_FARM_DECO_B                           : Haystack
2372: PLAYERISLAND_FURNITUREITEM_FARM_DECO_C                           : Haystack and cart
2373: PLAYERISLAND_FURNITUREITEM_FARM_DECO_D                           : Tree stump with pumpkins
2374: PLAYERISLAND_FURNITUREITEM_STONE_FIREBOWL_A                      : Fire bowl
2375: PLAYERISLAND_FURNITUREITEM_STONE_FIREBOWL_B                      : Fire bowl with pedestal
2376: PLAYERISLAND_FURNITUREITEM_STONE_MAGIC_EMBLEM_GROUND_A           : Small arcane stone sigil
2377: PLAYERISLAND_FURNITUREITEM_STONE_MAGIC_EMBLEM_GROUND_B           : Arcane stone sigil
2378: PLAYERISLAND_FURNITUREITEM_STONE_NATURE_EMBLEM_GROUND_A          : Small nature stone sigil
2379: PLAYERISLAND_FURNITUREITEM_STONE_NATURE_EMBLEM_GROUND_B          : Nature stone sigil
2380: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_A                        : Scholar statue
2381: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_A_BROKEN                 : Broken scholar statue
2382: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_HUNTER_A                 : Hunting sculpture
2383: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_HUNTER_B                 : Hunter statue
2384: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_MAGE_A                   : Book sculpture
2385: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_MAGE_B                   : Magician statue
2386: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_SWORD_A                  : Small sword sculpture
2387: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_SWORD_B                  : Sword sculpture
2388: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_WARRIOR_A                : Sword and shield sculpture
2389: PLAYERISLAND_FURNITUREITEM_STONE_STATUE_WARRIOR_B                : Warrior statue
2390: PLAYERISLAND_FURNITUREITEM_STONE_VALOR_EMBLEM_GROUND_A           : Small valorous stone sigil
2391: PLAYERISLAND_FURNITUREITEM_STONE_VALOR_EMBLEM_GROUND_B           : Valorous stone sigil
2392: PLAYERISLAND_FURNITUREITEM_STONE_WELL_A                          : Stone well
2393: PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DECO_A                : Autumn tree
2394: PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DECO_B                : Summer tree
2395: PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DECO_C                : Spring tree
2396: PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DOMESTIC_A            : Small fruit tree
2397: PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DOMESTIC_B            : Fruit tree
2398: PLAYERISLAND_FURNITUREITEM_WOOD_BUNTING_A                        : Bunting portal
2399: PLAYERISLAND_FURNITUREITEM_WOOD_FENCE_WATCHTOWER_A               : Wooden watchtower
2400: PLAYERISLAND_FURNITUREITEM_WOOD_FLOOR_SIGN_A                     : Wooden sign
2401: PLAYERISLAND_FURNITUREITEM_WOOD_GATE_A                           : Wooden entrance
2402: PLAYERISLAND_FURNITUREITEM_WOOD_GATE_BIG_B                       : Wooden gate
2403: PLAYERISLAND_FURNITUREITEM_WOOD_LAUNDRY_A                        : Clothes line
2404: PLAYERISLAND_FURNITUREITEM_WOOD_FISH_A                           : Fish line
2405: PLAYERISLAND_FURNITUREITEM_VEGETATION_FLOWER_A                   : Flower vase
2406: PLAYERISLAND_FURNITUREITEM_WOOD_LANTERN_A                        : Simple lantern
2407: PLAYERISLAND_FURNITUREITEM_WOOD_LANTERN_CORNER_A                 : Corner lantern
2408: PLAYERISLAND_FURNITUREITEM_WOOD_CANDELABRA_A                     : Candelabra
2409: PLAYERISLAND_FURNITUREITEM_WOOD_BARREL_A                         : Barrel with candle
2410: PLAYERISLAND_FURNITUREITEM_FARM_SCARECROW_A                      
2411: PLAYERISLAND_FURNITUREITEM_FARM_FOODCONTAINER_MEDIUM             
2412: PLAYERISLAND_FURNITUREITEM_FARM_FOODCONTAINER_LARGE              
2413: PLAYERISLAND_FURNITUREITEM_FARM_FOODCONTAINER_SMALL              
2414: PLAYERISLAND_FURNITUREITEM_FARM_LATRINE_A                        
2415: PLAYERISLAND_FURNITUREITEM_FARM_WATERTOWER_A                     
2416: PLAYERISLAND_FURNITUREITEM_FARM_BIRDHOUSE_A                      
2417: PLAYERISLAND_FURNITUREITEM_FARM_DOG_HUT_A                        
2418: PLAYERISLAND_FURNITUREITEM_NOBLE_FOUNTAIN_A                      
2419: PLAYERISLAND_FURNITUREITEM_NOBLE_BENCH_A                         
2420: PLAYERISLAND_FURNITUREITEM_NOBLE_STREET_LANTERN_A                
2421: PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_A                         
2422: PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_SMALL_A                   
2423: PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_RECTANGLE_A               
2424: PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_PYRAMID_A                 
2425: PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_SPHERE_A                  
2426: PLAYERISLAND_FURNITUREITEM_NOBLE_STONE_PATH_A                    
2427: PLAYERISLAND_FURNITUREITEM_NOBLE_STONE_PATH_PLATFORM_A           
2428: UNIQUE_FURNITUREITEM_MORGANA_TORCH_A                             : Flambeau (Disciples of Morgana)
2429: UNIQUE_FURNITUREITEM_MORGANA_TORCH_C@1                           : Raven Standard Flambeau (Disciples of Morgana)
2430: UNIQUE_FURNITUREITEM_MORGANA_PENTAGRAM@3                         : Pentagram (Disciples of Morgana)
2431: UNIQUE_FURNITUREITEM_MORGANA_FIREBOWL_B                          : Simple Brazier (Disciples of Morgana)
2432: UNIQUE_FURNITUREITEM_MORGANA_FIREBOWL_C@1                        : Reinforced Brazier (Disciples of Morgana)
2433: UNIQUE_FURNITUREITEM_MORGANA_CAMPFIRE_D@2                        : Cauldron (Disciples of Morgana)
2434: UNIQUE_FURNITUREITEM_MORGANA_SACRIFICE_ALTAR_A                   : Raven Standard Shrine (Disciples of Morgana)
2435: UNIQUE_FURNITUREITEM_MORGANA_SIEGE_BALLISTA_A@2                  : Siege Ballista (Disciples of Morgana)
2436: UNIQUE_FURNITUREITEM_MORGANA_STANDARD_A                          : Raven Standard (Disciples of Morgana)
2437: UNIQUE_FURNITUREITEM_MORGANA_WEAPONCRATE_A@2                     : Army Crate (Disciples of Morgana)
2438: UNIQUE_FURNITUREITEM_MORGANA_PRISON_CELL_C@3                     : Prisoner Cage (Disciples of Morgana)
2439: UNIQUE_FURNITUREITEM_MORGANA_TENT_A@3                            : Soldier's Tent (Disciples of Morgana)
2440: UNIQUE_FURNITUREITEM_MORGANA_STATUE_A                            : Morgana Cultist Statue
2441: UNIQUE_FURNITUREITEM_MORGANA_ARCHWAY_A                           : Morgana Stone Archway
2442: UNIQUE_FURNITUREITEM_MORGANA_CANDLESTAND_A                       : Morgana Candle Stand
2443: UNIQUE_FURNITUREITEM_MORGANA_CARPET_A                            : Morgana Carpet
2444: UNIQUE_FURNITUREITEM_KEEPER_SYMBOL_A                             : Keeper Symbol
2445: UNIQUE_FURNITUREITEM_KEEPER_CANDLE_A                             : Keeper Ceremonial Candle
2446: UNIQUE_FURNITUREITEM_KEEPER_SHRINE_A                             : Keeper Shrine
2447: UNIQUE_FURNITUREITEM_KEEPER_CAMP_FIRE_A                          : Keeper Campfire
2448: UNIQUE_FURNITUREITEM_KEEPER_ALTAR_A                              : Keeper Altar
2449: UNIQUE_FURNITUREITEM_KEEPER_FLAG_A                               : Keeper Flag
2450: UNIQUE_FURNITUREITEM_KEEPER_SYMBOL_OF_POWER_A                    : Keeper Symbol of Power
2451: UNIQUE_FURNITUREITEM_KEEPER_STAR_OF_POWER_A                      : Keeper Star of Power
2452: UNIQUE_FURNITUREITEM_KEEPER_FIREBOWL                             : Keeper Fire Bowl
2453: UNIQUE_FURNITUREITEM_KEEPER_CAULDRON                             : Keeper Cauldron
2454: UNIQUE_FURNITUREITEM_KEEPER_HEATER                               : Keeper Rock Fireplace
2455: UNIQUE_FURNITUREITEM_HERETIC_FOOD_PILE                           : Heretic Food Stash
2456: UNIQUE_FURNITUREITEM_HERETIC_ANIMAL_CAGES                        : Heretic Animal Cages
2457: UNIQUE_FURNITUREITEM_HERETIC_WEAPON_RACK                         : Heretic Weapon Rack
2458: UNIQUE_FURNITUREITEM_HERETIC_TRAINING_DUMMY                      : Heretic Training Dummy
2459: UNIQUE_FURNITUREITEM_HERETIC_PALLISADE                           : Heretic Palisade
2460: UNIQUE_FURNITUREITEM_HERETIC_GAME_TABLE                          : Heretic Game Table
2461: UNIQUE_FURNITUREITEM_HERETIC_FLAG                                : Heretic Flag
2462: UNIQUE_FURNITUREITEM_HERETIC_PLANNING_TABLE                      : Heretic Chief's Table
2463: UNIQUE_FURNITUREITEM_HERETIC_TENT                                : Heretic Tent
2464: UNIQUE_FURNITUREITEM_ADC_GRIM_LANTERN                            : Grim Lantern
2465: UNIQUE_FURNITUREITEM_ADC_GRIM_HEADSTONE                          : Grim Gravestone
2466: UNIQUE_FURNITUREITEM_ADC_GRIM_COFFIN                             : Empty Coffin
2467: UNIQUE_FURNITUREITEM_ADC_GRAVE_A                                 : Tomb of the Unknown
2468: UNIQUE_FURNITUREITEM_ADC_GRAVE_B                                 : Memorial of the Fallen
2469: UNIQUE_FURNITUREITEM_ADC_GRIM_WEEPINGWOMAN                       : Weeping Woman Statue
2470: UNIQUE_FURNITUREITEM_XMAS_CANDY_BOOT                             
2471: UNIQUE_FURNITUREITEM_XMAS_BRANCH_A                               : Yuletide Candle
2472: UNIQUE_FURNITUREITEM_XMAS_BRANCH_B                               : Yuletide Wreath
2473: UNIQUE_FURNITUREITEM_XMAS_LANTERN                                : Yuletide Lantern
2474: UNIQUE_FURNITUREITEM_XMAS_PRESENT                                : Present Box
2475: UNIQUE_FURNITUREITEM_XMAS_FILL_CITY_TREE_B                       : Small Decorated Pine Tree
2476: UNIQUE_FURNITUREITEM_XMAS_FILL_CITY_TREE_A                       : Decorated Pine Tree
2477: UNIQUE_FURNITUREITEM_ADC_FROST_SNOWBALLSTACK_A                   
2478: UNIQUE_FURNITUREITEM_ADC_FROST_SNOWMAN                           : Frost Snowman
2479: UNIQUE_FURNITUREITEM_ADC_FROST_LANTERN_A                         
2480: UNIQUE_FURNITUREITEM_ADC_ICESCULPTURE_A                          : Ice Sculpture: Bonecrusher Berserker
2481: UNIQUE_FURNITUREITEM_ADC_ICESCULPTURE_B                          : Ice Sculpture: Cursed Archer
2482: UNIQUE_FURNITUREITEM_ADC_ICESCULPTURE_C                          : Ice Sculpture: Obsessed Cultist
2483: UNIQUE_FURNITUREITEM_ADC_FROST_IGLOO                             : Frost Igloo
2484: UNIQUE_FURNITUREITEM_ADC_CARNIVAL_FIREWORK_A                     : Carnival Firework
2485: UNIQUE_FURNITUREITEM_ADC_CARNIVAL_ARCHWAY_A                      : Carnival Arch
2486: UNIQUE_FURNITUREITEM_ADC_CARNIVAL_MASK_CART                      : Carnival Costume Cart
2487: UNIQUE_FURNITUREITEM_ADC_STATUE_MOUNTED_DIREWOLF_A               : Wolf Rider Statue (L)
2488: UNIQUE_FURNITUREITEM_ADC_STATUE_MOUNTED_DIREWOLF_B               : Wolf Rider Statue (R)
2489: UNIQUE_FURNITUREITEM_ADC_RUG_DIREBEAR                            : Direbear Rug
2490: UNIQUE_FURNITUREITEM_ADC_RUG_WOLF                                : Wolf Rug
2491: UNIQUE_FURNITUREITEM_KNIGHT_STATUE_A                             : Knight Statue
2492: UNIQUE_FURNITUREITEM_KNIGHT_CARPET_A                             : Regal Carpet
2493: UNIQUE_FURNITUREITEM_KNIGHT_THRONE_A                             : Stone Throne
2494: UNIQUE_FURNITUREITEM_KNIGHT_ROUNDTABLE_A                         : Round Table
2495: UNIQUE_FURNITUREITEM_ADC_STATUE_MAGE_A                           : Mage Statue
2496: UNIQUE_FURNITUREITEM_ADC_HEALING_CIRCLE_A                        : Magic Rune Circle
2497: UNIQUE_FURNITUREITEM_ADC_GLASS_SPHERE_A                          : Glass Sphere
2498: UNIQUE_FURNITUREITEM_HERETIC_BARREL_BURNING_A                    : Heretic Burning Barrel
2499: UNIQUE_FURNITUREITEM_HERETIC_LANTERN                             : Heretic Lantern
2500: UNIQUE_FURNITUREITEM_HERETIC_JUNKPILE                            : Heretic Junkpile
2501: UNIQUE_FURNITUREITEM_HERETIC_STOVE_A                             : Heretic Stove
2502: UNIQUE_FURNITUREITEM_HERETICS_TOOL_BOARD_A                       : Heretic Toolboard
2503: UNIQUE_FURNITUREITEM_HERETIC_CONSTRUCT                           : Heretic Scarecrow
2504: UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_PUMPKIN_LANTERN_A             : Scary Pumpkin Lantern
2505: UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_PUMPKIN_LANTERN_B             : Friendly Pumpkin Lantern
2506: UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_TREE_LANTERN_A                : Halloween Lantern
2507: UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_CAULDRON_A                    : Halloween Cauldron
2508: UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_SCARECROW_A                   : Halloween Scarecrow
2509: UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_SCARECROW_PYRE_A              : Halloween Pyre
2510: UNIQUE_FURNITUREITEM_OLD_OUTLAND_CARPET                          : Outlands Map Carpet
2511: UNIQUE_FURNITUREITEM_SEALED_CAERLEON_REALMGATE                   : Caerleon Realmgate
2512: UNIQUE_ALTAR_OF_CHEATING                                         
2513: UNIQUE_FURNITUREITEM_VICTORY_TROPHY                              : Skull of $craftedby
2514: UNIQUE_INGREDIENT_ANCHOR_FOUNDER_LEGENDARY                       : Explorer's Anchor
2515: UNIQUE_FURNITUREITEM_FOUNDER_LOOKINGGLASS                        : Explorer's Spyglass
2516: UNIQUE_FURNITUREITEM_FOUNDER_CERTIFICATE                         : Founder's Certificate
2517: UNIQUE_FURNITUREITEM_FOUNDER_STATUE                              : Founder's Statue
2518: UNIQUE_SHOES_RUBBERBANDING                                       : Rubberband Boots
2519: UNIQUE_INTERNAL_HEAD_GAMEMASTER                                  : Game Master's Hat
2520: UNIQUE_INTERNAL_ARMOR_GAMEMASTER                                 : Game Master's Doublet
2521: UNIQUE_INTERNAL_SHOES_GAMEMASTER                                 : Game Master's Boots
2522: UNIQUE_INTERNAL_OFF_SCROLL_GAMEMASTER                            : Scroll of the Law
2523: T2_HEAD_PLATE_SET1                                               : Novice's Soldier Helmet
2524: T3_HEAD_PLATE_SET1                                               : Journeyman's Soldier Helmet
2525: T4_HEAD_PLATE_SET1                                               : Adept's Soldier Helmet
2526: T4_HEAD_PLATE_SET1@1                                             : Adept's Soldier Helmet
2527: T4_HEAD_PLATE_SET1@2                                             : Adept's Soldier Helmet
2528: T4_HEAD_PLATE_SET1@3                                             : Adept's Soldier Helmet
2529: T5_HEAD_PLATE_SET1                                               : Expert's Soldier Helmet
2530: T5_HEAD_PLATE_SET1@1                                             : Expert's Soldier Helmet
2531: T5_HEAD_PLATE_SET1@2                                             : Expert's Soldier Helmet
2532: T5_HEAD_PLATE_SET1@3                                             : Expert's Soldier Helmet
2533: T6_HEAD_PLATE_SET1                                               : Master's Soldier Helmet
2534: T6_HEAD_PLATE_SET1@1                                             : Master's Soldier Helmet
2535: T6_HEAD_PLATE_SET1@2                                             : Master's Soldier Helmet
2536: T6_HEAD_PLATE_SET1@3                                             : Master's Soldier Helmet
2537: T7_HEAD_PLATE_SET1                                               : Grandmaster's Soldier Helmet
2538: T7_HEAD_PLATE_SET1@1                                             : Grandmaster's Soldier Helmet
2539: T7_HEAD_PLATE_SET1@2                                             : Grandmaster's Soldier Helmet
2540: T7_HEAD_PLATE_SET1@3                                             : Grandmaster's Soldier Helmet
2541: T8_HEAD_PLATE_SET1                                               : Elder's Soldier Helmet
2542: T8_HEAD_PLATE_SET1@1                                             : Elder's Soldier Helmet
2543: T8_HEAD_PLATE_SET1@2                                             : Elder's Soldier Helmet
2544: T8_HEAD_PLATE_SET1@3                                             : Elder's Soldier Helmet
2545: T2_ARMOR_PLATE_SET1                                              : Novice's Soldier Armor
2546: T3_ARMOR_PLATE_SET1                                              : Journeyman's Soldier Armor
2547: T4_ARMOR_PLATE_SET1                                              : Adept's Soldier Armor
2548: T4_ARMOR_PLATE_SET1@1                                            : Adept's Soldier Armor
2549: T4_ARMOR_PLATE_SET1@2                                            : Adept's Soldier Armor
2550: T4_ARMOR_PLATE_SET1@3                                            : Adept's Soldier Armor
2551: T5_ARMOR_PLATE_SET1                                              : Expert's Soldier Armor
2552: T5_ARMOR_PLATE_SET1@1                                            : Expert's Soldier Armor
2553: T5_ARMOR_PLATE_SET1@2                                            : Expert's Soldier Armor
2554: T5_ARMOR_PLATE_SET1@3                                            : Expert's Soldier Armor
2555: T6_ARMOR_PLATE_SET1                                              : Master's Soldier Armor
2556: T6_ARMOR_PLATE_SET1@1                                            : Master's Soldier Armor
2557: T6_ARMOR_PLATE_SET1@2                                            : Master's Soldier Armor
2558: T6_ARMOR_PLATE_SET1@3                                            : Master's Soldier Armor
2559: T7_ARMOR_PLATE_SET1                                              : Grandmaster's Soldier Armor
2560: T7_ARMOR_PLATE_SET1@1                                            : Grandmaster's Soldier Armor
2561: T7_ARMOR_PLATE_SET1@2                                            : Grandmaster's Soldier Armor
2562: T7_ARMOR_PLATE_SET1@3                                            : Grandmaster's Soldier Armor
2563: T8_ARMOR_PLATE_SET1                                              : Elder's Soldier Armor
2564: T8_ARMOR_PLATE_SET1@1                                            : Elder's Soldier Armor
2565: T8_ARMOR_PLATE_SET1@2                                            : Elder's Soldier Armor
2566: T8_ARMOR_PLATE_SET1@3                                            : Elder's Soldier Armor
2567: T2_SHOES_PLATE_SET1                                              : Novice's Soldier Boots
2568: T3_SHOES_PLATE_SET1                                              : Journeyman's Soldier Boots
2569: T4_SHOES_PLATE_SET1                                              : Adept's Soldier Boots
2570: T4_SHOES_PLATE_SET1@1                                            : Adept's Soldier Boots
2571: T4_SHOES_PLATE_SET1@2                                            : Adept's Soldier Boots
2572: T4_SHOES_PLATE_SET1@3                                            : Adept's Soldier Boots
2573: T5_SHOES_PLATE_SET1                                              : Expert's Soldier Boots
2574: T5_SHOES_PLATE_SET1@1                                            : Expert's Soldier Boots
2575: T5_SHOES_PLATE_SET1@2                                            : Expert's Soldier Boots
2576: T5_SHOES_PLATE_SET1@3                                            : Expert's Soldier Boots
2577: T6_SHOES_PLATE_SET1                                              : Master's Soldier Boots
2578: T6_SHOES_PLATE_SET1@1                                            : Master's Soldier Boots
2579: T6_SHOES_PLATE_SET1@2                                            : Master's Soldier Boots
2580: T6_SHOES_PLATE_SET1@3                                            : Master's Soldier Boots
2581: T7_SHOES_PLATE_SET1                                              : Grandmaster's Soldier Boots
2582: T7_SHOES_PLATE_SET1@1                                            : Grandmaster's Soldier Boots
2583: T7_SHOES_PLATE_SET1@2                                            : Grandmaster's Soldier Boots
2584: T7_SHOES_PLATE_SET1@3                                            : Grandmaster's Soldier Boots
2585: T8_SHOES_PLATE_SET1                                              : Elder's Soldier Boots
2586: T8_SHOES_PLATE_SET1@1                                            : Elder's Soldier Boots
2587: T8_SHOES_PLATE_SET1@2                                            : Elder's Soldier Boots
2588: T8_SHOES_PLATE_SET1@3                                            : Elder's Soldier Boots
2589: T4_HEAD_PLATE_SET2                                               : Adept's Knight Helmet
2590: T4_HEAD_PLATE_SET2@1                                             : Adept's Knight Helmet
2591: T4_HEAD_PLATE_SET2@2                                             : Adept's Knight Helmet
2592: T4_HEAD_PLATE_SET2@3                                             : Adept's Knight Helmet
2593: T5_HEAD_PLATE_SET2                                               : Expert's Knight Helmet
2594: T5_HEAD_PLATE_SET2@1                                             : Expert's Knight Helmet
2595: T5_HEAD_PLATE_SET2@2                                             : Expert's Knight Helmet
2596: T5_HEAD_PLATE_SET2@3                                             : Expert's Knight Helmet
2597: T6_HEAD_PLATE_SET2                                               : Master's Knight Helmet
2598: T6_HEAD_PLATE_SET2@1                                             : Master's Knight Helmet
2599: T6_HEAD_PLATE_SET2@2                                             : Master's Knight Helmet
2600: T6_HEAD_PLATE_SET2@3                                             : Master's Knight Helmet
2601: T7_HEAD_PLATE_SET2                                               : Grandmaster's Knight Helmet
2602: T7_HEAD_PLATE_SET2@1                                             : Grandmaster's Knight Helmet
2603: T7_HEAD_PLATE_SET2@2                                             : Grandmaster's Knight Helmet
2604: T7_HEAD_PLATE_SET2@3                                             : Grandmaster's Knight Helmet
2605: T8_HEAD_PLATE_SET2                                               : Elder's Knight Helmet
2606: T8_HEAD_PLATE_SET2@1                                             : Elder's Knight Helmet
2607: T8_HEAD_PLATE_SET2@2                                             : Elder's Knight Helmet
2608: T8_HEAD_PLATE_SET2@3                                             : Elder's Knight Helmet
2609: T4_ARMOR_PLATE_SET2                                              : Adept's Knight Armor
2610: T4_ARMOR_PLATE_SET2@1                                            : Adept's Knight Armor
2611: T4_ARMOR_PLATE_SET2@2                                            : Adept's Knight Armor
2612: T4_ARMOR_PLATE_SET2@3                                            : Adept's Knight Armor
2613: T5_ARMOR_PLATE_SET2                                              : Expert's Knight Armor
2614: T5_ARMOR_PLATE_SET2@1                                            : Expert's Knight Armor
2615: T5_ARMOR_PLATE_SET2@2                                            : Expert's Knight Armor
2616: T5_ARMOR_PLATE_SET2@3                                            : Expert's Knight Armor
2617: T6_ARMOR_PLATE_SET2                                              : Master's Knight Armor
2618: T6_ARMOR_PLATE_SET2@1                                            : Master's Knight Armor
2619: T6_ARMOR_PLATE_SET2@2                                            : Master's Knight Armor
2620: T6_ARMOR_PLATE_SET2@3                                            : Master's Knight Armor
2621: T7_ARMOR_PLATE_SET2                                              : Grandmaster's Knight Armor
2622: T7_ARMOR_PLATE_SET2@1                                            : Grandmaster's Knight Armor
2623: T7_ARMOR_PLATE_SET2@2                                            : Grandmaster's Knight Armor
2624: T7_ARMOR_PLATE_SET2@3                                            : Grandmaster's Knight Armor
2625: T8_ARMOR_PLATE_SET2                                              : Elder's Knight Armor
2626: T8_ARMOR_PLATE_SET2@1                                            : Elder's Knight Armor
2627: T8_ARMOR_PLATE_SET2@2                                            : Elder's Knight Armor
2628: T8_ARMOR_PLATE_SET2@3                                            : Elder's Knight Armor
2629: T4_SHOES_PLATE_SET2                                              : Adept's Knight Boots
2630: T4_SHOES_PLATE_SET2@1                                            : Adept's Knight Boots
2631: T4_SHOES_PLATE_SET2@2                                            : Adept's Knight Boots
2632: T4_SHOES_PLATE_SET2@3                                            : Adept's Knight Boots
2633: T5_SHOES_PLATE_SET2                                              : Expert's Knight Boots
2634: T5_SHOES_PLATE_SET2@1                                            : Expert's Knight Boots
2635: T5_SHOES_PLATE_SET2@2                                            : Expert's Knight Boots
2636: T5_SHOES_PLATE_SET2@3                                            : Expert's Knight Boots
2637: T6_SHOES_PLATE_SET2                                              : Master's Knight Boots
2638: T6_SHOES_PLATE_SET2@1                                            : Master's Knight Boots
2639: T6_SHOES_PLATE_SET2@2                                            : Master's Knight Boots
2640: T6_SHOES_PLATE_SET2@3                                            : Master's Knight Boots
2641: T7_SHOES_PLATE_SET2                                              : Grandmaster's Knight Boots
2642: T7_SHOES_PLATE_SET2@1                                            : Grandmaster's Knight Boots
2643: T7_SHOES_PLATE_SET2@2                                            : Grandmaster's Knight Boots
2644: T7_SHOES_PLATE_SET2@3                                            : Grandmaster's Knight Boots
2645: T8_SHOES_PLATE_SET2                                              : Elder's Knight Boots
2646: T8_SHOES_PLATE_SET2@1                                            : Elder's Knight Boots
2647: T8_SHOES_PLATE_SET2@2                                            : Elder's Knight Boots
2648: T8_SHOES_PLATE_SET2@3                                            : Elder's Knight Boots
2649: T4_HEAD_PLATE_SET3                                               : Adept's Guardian Helmet
2650: T4_HEAD_PLATE_SET3@1                                             : Adept's Guardian Helmet
2651: T4_HEAD_PLATE_SET3@2                                             : Adept's Guardian Helmet
2652: T4_HEAD_PLATE_SET3@3                                             : Adept's Guardian Helmet
2653: T5_HEAD_PLATE_SET3                                               : Expert's Guardian Helmet
2654: T5_HEAD_PLATE_SET3@1                                             : Expert's Guardian Helmet
2655: T5_HEAD_PLATE_SET3@2                                             : Expert's Guardian Helmet
2656: T5_HEAD_PLATE_SET3@3                                             : Expert's Guardian Helmet
2657: T6_HEAD_PLATE_SET3                                               : Master's Guardian Helmet
2658: T6_HEAD_PLATE_SET3@1                                             : Master's Guardian Helmet
2659: T6_HEAD_PLATE_SET3@2                                             : Master's Guardian Helmet
2660: T6_HEAD_PLATE_SET3@3                                             : Master's Guardian Helmet
2661: T7_HEAD_PLATE_SET3                                               : Grandmaster's Guardian Helmet
2662: T7_HEAD_PLATE_SET3@1                                             : Grandmaster's Guardian Helmet
2663: T7_HEAD_PLATE_SET3@2                                             : Grandmaster's Guardian Helmet
2664: T7_HEAD_PLATE_SET3@3                                             : Grandmaster's Guardian Helmet
2665: T8_HEAD_PLATE_SET3                                               : Elder's Guardian Helmet
2666: T8_HEAD_PLATE_SET3@1                                             : Elder's Guardian Helmet
2667: T8_HEAD_PLATE_SET3@2                                             : Elder's Guardian Helmet
2668: T8_HEAD_PLATE_SET3@3                                             : Elder's Guardian Helmet
2669: T4_ARMOR_PLATE_SET3                                              : Adept's Guardian Armor
2670: T4_ARMOR_PLATE_SET3@1                                            : Adept's Guardian Armor
2671: T4_ARMOR_PLATE_SET3@2                                            : Adept's Guardian Armor
2672: T4_ARMOR_PLATE_SET3@3                                            : Adept's Guardian Armor
2673: T5_ARMOR_PLATE_SET3                                              : Expert's Guardian Armor
2674: T5_ARMOR_PLATE_SET3@1                                            : Expert's Guardian Armor
2675: T5_ARMOR_PLATE_SET3@2                                            : Expert's Guardian Armor
2676: T5_ARMOR_PLATE_SET3@3                                            : Expert's Guardian Armor
2677: T6_ARMOR_PLATE_SET3                                              : Master's Guardian Armor
2678: T6_ARMOR_PLATE_SET3@1                                            : Master's Guardian Armor
2679: T6_ARMOR_PLATE_SET3@2                                            : Master's Guardian Armor
2680: T6_ARMOR_PLATE_SET3@3                                            : Master's Guardian Armor
2681: T7_ARMOR_PLATE_SET3                                              : Grandmaster's Guardian Armor
2682: T7_ARMOR_PLATE_SET3@1                                            : Grandmaster's Guardian Armor
2683: T7_ARMOR_PLATE_SET3@2                                            : Grandmaster's Guardian Armor
2684: T7_ARMOR_PLATE_SET3@3                                            : Grandmaster's Guardian Armor
2685: T8_ARMOR_PLATE_SET3                                              : Elder's Guardian Armor
2686: T8_ARMOR_PLATE_SET3@1                                            : Elder's Guardian Armor
2687: T8_ARMOR_PLATE_SET3@2                                            : Elder's Guardian Armor
2688: T8_ARMOR_PLATE_SET3@3                                            : Elder's Guardian Armor
2689: T4_SHOES_PLATE_SET3                                              : Adept's Guardian Boots
2690: T4_SHOES_PLATE_SET3@1                                            : Adept's Guardian Boots
2691: T4_SHOES_PLATE_SET3@2                                            : Adept's Guardian Boots
2692: T4_SHOES_PLATE_SET3@3                                            : Adept's Guardian Boots
2693: T5_SHOES_PLATE_SET3                                              : Expert's Guardian Boots
2694: T5_SHOES_PLATE_SET3@1                                            : Expert's Guardian Boots
2695: T5_SHOES_PLATE_SET3@2                                            : Expert's Guardian Boots
2696: T5_SHOES_PLATE_SET3@3                                            : Expert's Guardian Boots
2697: T6_SHOES_PLATE_SET3                                              : Master's Guardian Boots
2698: T6_SHOES_PLATE_SET3@1                                            : Master's Guardian Boots
2699: T6_SHOES_PLATE_SET3@2                                            : Master's Guardian Boots
2700: T6_SHOES_PLATE_SET3@3                                            : Master's Guardian Boots
2701: T7_SHOES_PLATE_SET3                                              : Grandmaster's Guardian Boots
2702: T7_SHOES_PLATE_SET3@1                                            : Grandmaster's Guardian Boots
2703: T7_SHOES_PLATE_SET3@2                                            : Grandmaster's Guardian Boots
2704: T7_SHOES_PLATE_SET3@3                                            : Grandmaster's Guardian Boots
2705: T8_SHOES_PLATE_SET3                                              : Elder's Guardian Boots
2706: T8_SHOES_PLATE_SET3@1                                            : Elder's Guardian Boots
2707: T8_SHOES_PLATE_SET3@2                                            : Elder's Guardian Boots
2708: T8_SHOES_PLATE_SET3@3                                            : Elder's Guardian Boots
2709: T4_HEAD_PLATE_UNDEAD                                             : Adept's Graveguard Helmet
2710: T4_HEAD_PLATE_UNDEAD@1                                           : Adept's Graveguard Helmet
2711: T4_HEAD_PLATE_UNDEAD@2                                           : Adept's Graveguard Helmet
2712: T4_HEAD_PLATE_UNDEAD@3                                           : Adept's Graveguard Helmet
2713: T5_HEAD_PLATE_UNDEAD                                             : Expert's Graveguard Helmet
2714: T5_HEAD_PLATE_UNDEAD@1                                           : Expert's Graveguard Helmet
2715: T5_HEAD_PLATE_UNDEAD@2                                           : Expert's Graveguard Helmet
2716: T5_HEAD_PLATE_UNDEAD@3                                           : Expert's Graveguard Helmet
2717: T6_HEAD_PLATE_UNDEAD                                             : Master's Graveguard Helmet
2718: T6_HEAD_PLATE_UNDEAD@1                                           : Master's Graveguard Helmet
2719: T6_HEAD_PLATE_UNDEAD@2                                           : Master's Graveguard Helmet
2720: T6_HEAD_PLATE_UNDEAD@3                                           : Master's Graveguard Helmet
2721: T7_HEAD_PLATE_UNDEAD                                             : Grandmaster's Graveguard Helmet
2722: T7_HEAD_PLATE_UNDEAD@1                                           : Grandmaster's Graveguard Helmet
2723: T7_HEAD_PLATE_UNDEAD@2                                           : Grandmaster's Graveguard Helmet
2724: T7_HEAD_PLATE_UNDEAD@3                                           : Grandmaster's Graveguard Helmet
2725: T8_HEAD_PLATE_UNDEAD                                             : Elder's Graveguard Helmet
2726: T8_HEAD_PLATE_UNDEAD@1                                           : Elder's Graveguard Helmet
2727: T8_HEAD_PLATE_UNDEAD@2                                           : Elder's Graveguard Helmet
2728: T8_HEAD_PLATE_UNDEAD@3                                           : Elder's Graveguard Helmet
2729: T4_ARMOR_PLATE_UNDEAD                                            : Adept's Graveguard Armor
2730: T4_ARMOR_PLATE_UNDEAD@1                                          : Adept's Graveguard Armor
2731: T4_ARMOR_PLATE_UNDEAD@2                                          : Adept's Graveguard Armor
2732: T4_ARMOR_PLATE_UNDEAD@3                                          : Adept's Graveguard Armor
2733: T5_ARMOR_PLATE_UNDEAD                                            : Expert's Graveguard Armor
2734: T5_ARMOR_PLATE_UNDEAD@1                                          : Expert's Graveguard Armor
2735: T5_ARMOR_PLATE_UNDEAD@2                                          : Expert's Graveguard Armor
2736: T5_ARMOR_PLATE_UNDEAD@3                                          : Expert's Graveguard Armor
2737: T6_ARMOR_PLATE_UNDEAD                                            : Master's Graveguard Armor
2738: T6_ARMOR_PLATE_UNDEAD@1                                          : Master's Graveguard Armor
2739: T6_ARMOR_PLATE_UNDEAD@2                                          : Master's Graveguard Armor
2740: T6_ARMOR_PLATE_UNDEAD@3                                          : Master's Graveguard Armor
2741: T7_ARMOR_PLATE_UNDEAD                                            : Grandmaster's Graveguard Armor
2742: T7_ARMOR_PLATE_UNDEAD@1                                          : Grandmaster's Graveguard Armor
2743: T7_ARMOR_PLATE_UNDEAD@2                                          : Grandmaster's Graveguard Armor
2744: T7_ARMOR_PLATE_UNDEAD@3                                          : Grandmaster's Graveguard Armor
2745: T8_ARMOR_PLATE_UNDEAD                                            : Elder's Graveguard Armor
2746: T8_ARMOR_PLATE_UNDEAD@1                                          : Elder's Graveguard Armor
2747: T8_ARMOR_PLATE_UNDEAD@2                                          : Elder's Graveguard Armor
2748: T8_ARMOR_PLATE_UNDEAD@3                                          : Elder's Graveguard Armor
2749: T4_SHOES_PLATE_UNDEAD                                            : Adept's Graveguard Boots
2750: T4_SHOES_PLATE_UNDEAD@1                                          : Adept's Graveguard Boots
2751: T4_SHOES_PLATE_UNDEAD@2                                          : Adept's Graveguard Boots
2752: T4_SHOES_PLATE_UNDEAD@3                                          : Adept's Graveguard Boots
2753: T5_SHOES_PLATE_UNDEAD                                            : Expert's Graveguard Boots
2754: T5_SHOES_PLATE_UNDEAD@1                                          : Expert's Graveguard Boots
2755: T5_SHOES_PLATE_UNDEAD@2                                          : Expert's Graveguard Boots
2756: T5_SHOES_PLATE_UNDEAD@3                                          : Expert's Graveguard Boots
2757: T6_SHOES_PLATE_UNDEAD                                            : Master's Graveguard Boots
2758: T6_SHOES_PLATE_UNDEAD@1                                          : Master's Graveguard Boots
2759: T6_SHOES_PLATE_UNDEAD@2                                          : Master's Graveguard Boots
2760: T6_SHOES_PLATE_UNDEAD@3                                          : Master's Graveguard Boots
2761: T7_SHOES_PLATE_UNDEAD                                            : Grandmaster's Graveguard Boots
2762: T7_SHOES_PLATE_UNDEAD@1                                          : Grandmaster's Graveguard Boots
2763: T7_SHOES_PLATE_UNDEAD@2                                          : Grandmaster's Graveguard Boots
2764: T7_SHOES_PLATE_UNDEAD@3                                          : Grandmaster's Graveguard Boots
2765: T8_SHOES_PLATE_UNDEAD                                            : Elder's Graveguard Boots
2766: T8_SHOES_PLATE_UNDEAD@1                                          : Elder's Graveguard Boots
2767: T8_SHOES_PLATE_UNDEAD@2                                          : Elder's Graveguard Boots
2768: T8_SHOES_PLATE_UNDEAD@3                                          : Elder's Graveguard Boots
2769: T4_HEAD_PLATE_HELL                                               : Adept's Demon Helmet
2770: T4_HEAD_PLATE_HELL@1                                             : Adept's Demon Helmet
2771: T4_HEAD_PLATE_HELL@2                                             : Adept's Demon Helmet
2772: T4_HEAD_PLATE_HELL@3                                             : Adept's Demon Helmet
2773: T5_HEAD_PLATE_HELL                                               : Expert's Demon Helmet
2774: T5_HEAD_PLATE_HELL@1                                             : Expert's Demon Helmet
2775: T5_HEAD_PLATE_HELL@2                                             : Expert's Demon Helmet
2776: T5_HEAD_PLATE_HELL@3                                             : Expert's Demon Helmet
2777: T6_HEAD_PLATE_HELL                                               : Master's Demon Helmet
2778: T6_HEAD_PLATE_HELL@1                                             : Master's Demon Helmet
2779: T6_HEAD_PLATE_HELL@2                                             : Master's Demon Helmet
2780: T6_HEAD_PLATE_HELL@3                                             : Master's Demon Helmet
2781: T7_HEAD_PLATE_HELL                                               : Grandmaster's Demon Helmet
2782: T7_HEAD_PLATE_HELL@1                                             : Grandmaster's Demon Helmet
2783: T7_HEAD_PLATE_HELL@2                                             : Grandmaster's Demon Helmet
2784: T7_HEAD_PLATE_HELL@3                                             : Grandmaster's Demon Helmet
2785: T8_HEAD_PLATE_HELL                                               : Elder's Demon Helmet
2786: T8_HEAD_PLATE_HELL@1                                             : Elder's Demon Helmet
2787: T8_HEAD_PLATE_HELL@2                                             : Elder's Demon Helmet
2788: T8_HEAD_PLATE_HELL@3                                             : Elder's Demon Helmet
2789: T4_ARMOR_PLATE_HELL                                              : Adept's Demon Armor
2790: T4_ARMOR_PLATE_HELL@1                                            : Adept's Demon Armor
2791: T4_ARMOR_PLATE_HELL@2                                            : Adept's Demon Armor
2792: T4_ARMOR_PLATE_HELL@3                                            : Adept's Demon Armor
2793: T5_ARMOR_PLATE_HELL                                              : Expert's Demon Armor
2794: T5_ARMOR_PLATE_HELL@1                                            : Expert's Demon Armor
2795: T5_ARMOR_PLATE_HELL@2                                            : Expert's Demon Armor
2796: T5_ARMOR_PLATE_HELL@3                                            : Expert's Demon Armor
2797: T6_ARMOR_PLATE_HELL                                              : Master's Demon Armor
2798: T6_ARMOR_PLATE_HELL@1                                            : Master's Demon Armor
2799: T6_ARMOR_PLATE_HELL@2                                            : Master's Demon Armor
2800: T6_ARMOR_PLATE_HELL@3                                            : Master's Demon Armor
2801: T7_ARMOR_PLATE_HELL                                              : Grandmaster's Demon Armor
2802: T7_ARMOR_PLATE_HELL@1                                            : Grandmaster's Demon Armor
2803: T7_ARMOR_PLATE_HELL@2                                            : Grandmaster's Demon Armor
2804: T7_ARMOR_PLATE_HELL@3                                            : Grandmaster's Demon Armor
2805: T8_ARMOR_PLATE_HELL                                              : Elder's Demon Armor
2806: T8_ARMOR_PLATE_HELL@1                                            : Elder's Demon Armor
2807: T8_ARMOR_PLATE_HELL@2                                            : Elder's Demon Armor
2808: T8_ARMOR_PLATE_HELL@3                                            : Elder's Demon Armor
2809: T4_SHOES_PLATE_HELL                                              : Adept's Demon Boots
2810: T4_SHOES_PLATE_HELL@1                                            : Adept's Demon Boots
2811: T4_SHOES_PLATE_HELL@2                                            : Adept's Demon Boots
2812: T4_SHOES_PLATE_HELL@3                                            : Adept's Demon Boots
2813: T5_SHOES_PLATE_HELL                                              : Expert's Demon Boots
2814: T5_SHOES_PLATE_HELL@1                                            : Expert's Demon Boots
2815: T5_SHOES_PLATE_HELL@2                                            : Expert's Demon Boots
2816: T5_SHOES_PLATE_HELL@3                                            : Expert's Demon Boots
2817: T6_SHOES_PLATE_HELL                                              : Master's Demon Boots
2818: T6_SHOES_PLATE_HELL@1                                            : Master's Demon Boots
2819: T6_SHOES_PLATE_HELL@2                                            : Master's Demon Boots
2820: T6_SHOES_PLATE_HELL@3                                            : Master's Demon Boots
2821: T7_SHOES_PLATE_HELL                                              : Grandmaster's Demon Boots
2822: T7_SHOES_PLATE_HELL@1                                            : Grandmaster's Demon Boots
2823: T7_SHOES_PLATE_HELL@2                                            : Grandmaster's Demon Boots
2824: T7_SHOES_PLATE_HELL@3                                            : Grandmaster's Demon Boots
2825: T8_SHOES_PLATE_HELL                                              : Elder's Demon Boots
2826: T8_SHOES_PLATE_HELL@1                                            : Elder's Demon Boots
2827: T8_SHOES_PLATE_HELL@2                                            : Elder's Demon Boots
2828: T8_SHOES_PLATE_HELL@3                                            : Elder's Demon Boots
2829: T4_HEAD_PLATE_KEEPER                                             : Adept's Judicator Helmet
2830: T4_HEAD_PLATE_KEEPER@1                                           : Adept's Judicator Helmet
2831: T4_HEAD_PLATE_KEEPER@2                                           : Adept's Judicator Helmet
2832: T4_HEAD_PLATE_KEEPER@3                                           : Adept's Judicator Helmet
2833: T5_HEAD_PLATE_KEEPER                                             : Expert's Judicator Helmet
2834: T5_HEAD_PLATE_KEEPER@1                                           : Expert's Judicator Helmet
2835: T5_HEAD_PLATE_KEEPER@2                                           : Expert's Judicator Helmet
2836: T5_HEAD_PLATE_KEEPER@3                                           : Expert's Judicator Helmet
2837: T6_HEAD_PLATE_KEEPER                                             : Master's Judicator Helmet
2838: T6_HEAD_PLATE_KEEPER@1                                           : Master's Judicator Helmet
2839: T6_HEAD_PLATE_KEEPER@2                                           : Master's Judicator Helmet
2840: T6_HEAD_PLATE_KEEPER@3                                           : Master's Judicator Helmet
2841: T7_HEAD_PLATE_KEEPER                                             : Grandmaster's Judicator Helmet
2842: T7_HEAD_PLATE_KEEPER@1                                           : Grandmaster's Judicator Helmet
2843: T7_HEAD_PLATE_KEEPER@2                                           : Grandmaster's Judicator Helmet
2844: T7_HEAD_PLATE_KEEPER@3                                           : Grandmaster's Judicator Helmet
2845: T8_HEAD_PLATE_KEEPER                                             : Elder's Judicator Helmet
2846: T8_HEAD_PLATE_KEEPER@1                                           : Elder's Judicator Helmet
2847: T8_HEAD_PLATE_KEEPER@2                                           : Elder's Judicator Helmet
2848: T8_HEAD_PLATE_KEEPER@3                                           : Elder's Judicator Helmet
2849: T4_ARMOR_PLATE_KEEPER                                            : Adept's Judicator Armor
2850: T4_ARMOR_PLATE_KEEPER@1                                          : Adept's Judicator Armor
2851: T4_ARMOR_PLATE_KEEPER@2                                          : Adept's Judicator Armor
2852: T4_ARMOR_PLATE_KEEPER@3                                          : Adept's Judicator Armor
2853: T5_ARMOR_PLATE_KEEPER                                            : Expert's Judicator Armor
2854: T5_ARMOR_PLATE_KEEPER@1                                          : Expert's Judicator Armor
2855: T5_ARMOR_PLATE_KEEPER@2                                          : Expert's Judicator Armor
2856: T5_ARMOR_PLATE_KEEPER@3                                          : Expert's Judicator Armor
2857: T6_ARMOR_PLATE_KEEPER                                            : Master's Judicator Armor
2858: T6_ARMOR_PLATE_KEEPER@1                                          : Master's Judicator Armor
2859: T6_ARMOR_PLATE_KEEPER@2                                          : Master's Judicator Armor
2860: T6_ARMOR_PLATE_KEEPER@3                                          : Master's Judicator Armor
2861: T7_ARMOR_PLATE_KEEPER                                            : Grandmaster's Judicator Armor
2862: T7_ARMOR_PLATE_KEEPER@1                                          : Grandmaster's Judicator Armor
2863: T7_ARMOR_PLATE_KEEPER@2                                          : Grandmaster's Judicator Armor
2864: T7_ARMOR_PLATE_KEEPER@3                                          : Grandmaster's Judicator Armor
2865: T8_ARMOR_PLATE_KEEPER                                            : Elder's Judicator Armor
2866: T8_ARMOR_PLATE_KEEPER@1                                          : Elder's Judicator Armor
2867: T8_ARMOR_PLATE_KEEPER@2                                          : Elder's Judicator Armor
2868: T8_ARMOR_PLATE_KEEPER@3                                          : Elder's Judicator Armor
2869: T4_SHOES_PLATE_KEEPER                                            : Adept's Judicator Boots
2870: T4_SHOES_PLATE_KEEPER@1                                          : Adept's Judicator Boots
2871: T4_SHOES_PLATE_KEEPER@2                                          : Adept's Judicator Boots
2872: T4_SHOES_PLATE_KEEPER@3                                          : Adept's Judicator Boots
2873: T5_SHOES_PLATE_KEEPER                                            : Expert's Judicator Boots
2874: T5_SHOES_PLATE_KEEPER@1                                          : Expert's Judicator Boots
2875: T5_SHOES_PLATE_KEEPER@2                                          : Expert's Judicator Boots
2876: T5_SHOES_PLATE_KEEPER@3                                          : Expert's Judicator Boots
2877: T6_SHOES_PLATE_KEEPER                                            : Master's Judicator Boots
2878: T6_SHOES_PLATE_KEEPER@1                                          : Master's Judicator Boots
2879: T6_SHOES_PLATE_KEEPER@2                                          : Master's Judicator Boots
2880: T6_SHOES_PLATE_KEEPER@3                                          : Master's Judicator Boots
2881: T7_SHOES_PLATE_KEEPER                                            : Grandmaster's Judicator Boots
2882: T7_SHOES_PLATE_KEEPER@1                                          : Grandmaster's Judicator Boots
2883: T7_SHOES_PLATE_KEEPER@2                                          : Grandmaster's Judicator Boots
2884: T7_SHOES_PLATE_KEEPER@3                                          : Grandmaster's Judicator Boots
2885: T8_SHOES_PLATE_KEEPER                                            : Elder's Judicator Boots
2886: T8_SHOES_PLATE_KEEPER@1                                          : Elder's Judicator Boots
2887: T8_SHOES_PLATE_KEEPER@2                                          : Elder's Judicator Boots
2888: T8_SHOES_PLATE_KEEPER@3                                          : Elder's Judicator Boots
2889: T4_HEAD_PLATE_AVALON                                             : Adept's Helmet of Valor
2890: T4_HEAD_PLATE_AVALON@1                                           : Adept's Helmet of Valor
2891: T4_HEAD_PLATE_AVALON@2                                           : Adept's Helmet of Valor
2892: T4_HEAD_PLATE_AVALON@3                                           : Adept's Helmet of Valor
2893: T5_HEAD_PLATE_AVALON                                             : Expert's Helmet of Valor
2894: T5_HEAD_PLATE_AVALON@1                                           : Expert's Helmet of Valor
2895: T5_HEAD_PLATE_AVALON@2                                           : Expert's Helmet of Valor
2896: T5_HEAD_PLATE_AVALON@3                                           : Expert's Helmet of Valor
2897: T6_HEAD_PLATE_AVALON                                             : Master's Helmet of Valor
2898: T6_HEAD_PLATE_AVALON@1                                           : Master's Helmet of Valor
2899: T6_HEAD_PLATE_AVALON@2                                           : Master's Helmet of Valor
2900: T6_HEAD_PLATE_AVALON@3                                           : Master's Helmet of Valor
2901: T7_HEAD_PLATE_AVALON                                             : Grandmaster's Helmet of Valor
2902: T7_HEAD_PLATE_AVALON@1                                           : Grandmaster's Helmet of Valor
2903: T7_HEAD_PLATE_AVALON@2                                           : Grandmaster's Helmet of Valor
2904: T7_HEAD_PLATE_AVALON@3                                           : Grandmaster's Helmet of Valor
2905: T8_HEAD_PLATE_AVALON                                             : Elder's Helmet of Valor
2906: T8_HEAD_PLATE_AVALON@1                                           : Elder's Helmet of Valor
2907: T8_HEAD_PLATE_AVALON@2                                           : Elder's Helmet of Valor
2908: T8_HEAD_PLATE_AVALON@3                                           : Elder's Helmet of Valor
2909: T4_ARMOR_PLATE_AVALON                                            : Adept's Armor of Valor
2910: T4_ARMOR_PLATE_AVALON@1                                          : Adept's Armor of Valor
2911: T4_ARMOR_PLATE_AVALON@2                                          : Adept's Armor of Valor
2912: T4_ARMOR_PLATE_AVALON@3                                          : Adept's Armor of Valor
2913: T5_ARMOR_PLATE_AVALON                                            : Expert's Armor of Valor
2914: T5_ARMOR_PLATE_AVALON@1                                          : Expert's Armor of Valor
2915: T5_ARMOR_PLATE_AVALON@2                                          : Expert's Armor of Valor
2916: T5_ARMOR_PLATE_AVALON@3                                          : Expert's Armor of Valor
2917: T6_ARMOR_PLATE_AVALON                                            : Master's Armor of Valor
2918: T6_ARMOR_PLATE_AVALON@1                                          : Master's Armor of Valor
2919: T6_ARMOR_PLATE_AVALON@2                                          : Master's Armor of Valor
2920: T6_ARMOR_PLATE_AVALON@3                                          : Master's Armor of Valor
2921: T7_ARMOR_PLATE_AVALON                                            : Grandmaster's Armor of Valor
2922: T7_ARMOR_PLATE_AVALON@1                                          : Grandmaster's Armor of Valor
2923: T7_ARMOR_PLATE_AVALON@2                                          : Grandmaster's Armor of Valor
2924: T7_ARMOR_PLATE_AVALON@3                                          : Grandmaster's Armor of Valor
2925: T8_ARMOR_PLATE_AVALON                                            : Elder's Armor of Valor
2926: T8_ARMOR_PLATE_AVALON@1                                          : Elder's Armor of Valor
2927: T8_ARMOR_PLATE_AVALON@2                                          : Elder's Armor of Valor
2928: T8_ARMOR_PLATE_AVALON@3                                          : Elder's Armor of Valor
2929: T4_SHOES_PLATE_AVALON                                            : Adept's Boots of Valor
2930: T4_SHOES_PLATE_AVALON@1                                          : Adept's Boots of Valor
2931: T4_SHOES_PLATE_AVALON@2                                          : Adept's Boots of Valor
2932: T4_SHOES_PLATE_AVALON@3                                          : Adept's Boots of Valor
2933: T5_SHOES_PLATE_AVALON                                            : Expert's Boots of Valor
2934: T5_SHOES_PLATE_AVALON@1                                          : Expert's Boots of Valor
2935: T5_SHOES_PLATE_AVALON@2                                          : Expert's Boots of Valor
2936: T5_SHOES_PLATE_AVALON@3                                          : Expert's Boots of Valor
2937: T6_SHOES_PLATE_AVALON                                            : Master's Boots of Valor
2938: T6_SHOES_PLATE_AVALON@1                                          : Master's Boots of Valor
2939: T6_SHOES_PLATE_AVALON@2                                          : Master's Boots of Valor
2940: T6_SHOES_PLATE_AVALON@3                                          : Master's Boots of Valor
2941: T7_SHOES_PLATE_AVALON                                            : Grandmaster's Boots of Valor
2942: T7_SHOES_PLATE_AVALON@1                                          : Grandmaster's Boots of Valor
2943: T7_SHOES_PLATE_AVALON@2                                          : Grandmaster's Boots of Valor
2944: T7_SHOES_PLATE_AVALON@3                                          : Grandmaster's Boots of Valor
2945: T8_SHOES_PLATE_AVALON                                            : Elder's Boots of Valor
2946: T8_SHOES_PLATE_AVALON@1                                          : Elder's Boots of Valor
2947: T8_SHOES_PLATE_AVALON@2                                          : Elder's Boots of Valor
2948: T8_SHOES_PLATE_AVALON@3                                          : Elder's Boots of Valor
2949: T1_HEAD_LEATHER_SET1                                             : Beginner's Mercenary Hood
2950: T2_HEAD_LEATHER_SET1                                             : Novice's Mercenary Hood
2951: T3_HEAD_LEATHER_SET1                                             : Journeyman's Mercenary Hood
2952: T4_HEAD_LEATHER_SET1                                             : Adept's Mercenary Hood
2953: T4_HEAD_LEATHER_SET1@1                                           : Adept's Mercenary Hood
2954: T4_HEAD_LEATHER_SET1@2                                           : Adept's Mercenary Hood
2955: T4_HEAD_LEATHER_SET1@3                                           : Adept's Mercenary Hood
2956: T5_HEAD_LEATHER_SET1                                             : Expert's Mercenary Hood
2957: T5_HEAD_LEATHER_SET1@1                                           : Expert's Mercenary Hood
2958: T5_HEAD_LEATHER_SET1@2                                           : Expert's Mercenary Hood
2959: T5_HEAD_LEATHER_SET1@3                                           : Expert's Mercenary Hood
2960: T6_HEAD_LEATHER_SET1                                             : Master's Mercenary Hood
2961: T6_HEAD_LEATHER_SET1@1                                           : Master's Mercenary Hood
2962: T6_HEAD_LEATHER_SET1@2                                           : Master's Mercenary Hood
2963: T6_HEAD_LEATHER_SET1@3                                           : Master's Mercenary Hood
2964: T7_HEAD_LEATHER_SET1                                             : Grandmaster's Mercenary Hood
2965: T7_HEAD_LEATHER_SET1@1                                           : Grandmaster's Mercenary Hood
2966: T7_HEAD_LEATHER_SET1@2                                           : Grandmaster's Mercenary Hood
2967: T7_HEAD_LEATHER_SET1@3                                           : Grandmaster's Mercenary Hood
2968: T8_HEAD_LEATHER_SET1                                             : Elder's Mercenary Hood
2969: T8_HEAD_LEATHER_SET1@1                                           : Elder's Mercenary Hood
2970: T8_HEAD_LEATHER_SET1@2                                           : Elder's Mercenary Hood
2971: T8_HEAD_LEATHER_SET1@3                                           : Elder's Mercenary Hood
2972: T1_ARMOR_LEATHER_SET1                                            : Beginner's Mercenary Jacket
2973: T2_ARMOR_LEATHER_SET1                                            : Novice's Mercenary Jacket
2974: T3_ARMOR_LEATHER_SET1                                            : Journeyman's Mercenary Jacket
2975: T4_ARMOR_LEATHER_SET1                                            : Adept's Mercenary Jacket
2976: T4_ARMOR_LEATHER_SET1@1                                          : Adept's Mercenary Jacket
2977: T4_ARMOR_LEATHER_SET1@2                                          : Adept's Mercenary Jacket
2978: T4_ARMOR_LEATHER_SET1@3                                          : Adept's Mercenary Jacket
2979: T5_ARMOR_LEATHER_SET1                                            : Expert's Mercenary Jacket
2980: T5_ARMOR_LEATHER_SET1@1                                          : Expert's Mercenary Jacket
2981: T5_ARMOR_LEATHER_SET1@2                                          : Expert's Mercenary Jacket
2982: T5_ARMOR_LEATHER_SET1@3                                          : Expert's Mercenary Jacket
2983: T6_ARMOR_LEATHER_SET1                                            : Master's Mercenary Jacket
2984: T6_ARMOR_LEATHER_SET1@1                                          : Master's Mercenary Jacket
2985: T6_ARMOR_LEATHER_SET1@2                                          : Master's Mercenary Jacket
2986: T6_ARMOR_LEATHER_SET1@3                                          : Master's Mercenary Jacket
2987: T7_ARMOR_LEATHER_SET1                                            : Grandmaster's Mercenary Jacket
2988: T7_ARMOR_LEATHER_SET1@1                                          : Grandmaster's Mercenary Jacket
2989: T7_ARMOR_LEATHER_SET1@2                                          : Grandmaster's Mercenary Jacket
2990: T7_ARMOR_LEATHER_SET1@3                                          : Grandmaster's Mercenary Jacket
2991: T8_ARMOR_LEATHER_SET1                                            : Elder's Mercenary Jacket
2992: T8_ARMOR_LEATHER_SET1@1                                          : Elder's Mercenary Jacket
2993: T8_ARMOR_LEATHER_SET1@2                                          : Elder's Mercenary Jacket
2994: T8_ARMOR_LEATHER_SET1@3                                          : Elder's Mercenary Jacket
2995: T1_SHOES_LEATHER_SET1                                            : Beginner's Mercenary Shoes
2996: T2_SHOES_LEATHER_SET1                                            : Novice's Mercenary Shoes
2997: T3_SHOES_LEATHER_SET1                                            : Journeyman's Mercenary Shoes
2998: T4_SHOES_LEATHER_SET1                                            : Adept's Mercenary Shoes
2999: T4_SHOES_LEATHER_SET1@1                                          : Adept's Mercenary Shoes
3000: T4_SHOES_LEATHER_SET1@2                                          : Adept's Mercenary Shoes
3001: T4_SHOES_LEATHER_SET1@3                                          : Adept's Mercenary Shoes
3002: T5_SHOES_LEATHER_SET1                                            : Expert's Mercenary Shoes
3003: T5_SHOES_LEATHER_SET1@1                                          : Expert's Mercenary Shoes
3004: T5_SHOES_LEATHER_SET1@2                                          : Expert's Mercenary Shoes
3005: T5_SHOES_LEATHER_SET1@3                                          : Expert's Mercenary Shoes
3006: T6_SHOES_LEATHER_SET1                                            : Master's Mercenary Shoes
3007: T6_SHOES_LEATHER_SET1@1                                          : Master's Mercenary Shoes
3008: T6_SHOES_LEATHER_SET1@2                                          : Master's Mercenary Shoes
3009: T6_SHOES_LEATHER_SET1@3                                          : Master's Mercenary Shoes
3010: T7_SHOES_LEATHER_SET1                                            : Grandmaster's Mercenary Shoes
3011: T7_SHOES_LEATHER_SET1@1                                          : Grandmaster's Mercenary Shoes
3012: T7_SHOES_LEATHER_SET1@2                                          : Grandmaster's Mercenary Shoes
3013: T7_SHOES_LEATHER_SET1@3                                          : Grandmaster's Mercenary Shoes
3014: T8_SHOES_LEATHER_SET1                                            : Elder's Mercenary Shoes
3015: T8_SHOES_LEATHER_SET1@1                                          : Elder's Mercenary Shoes
3016: T8_SHOES_LEATHER_SET1@2                                          : Elder's Mercenary Shoes
3017: T8_SHOES_LEATHER_SET1@3                                          : Elder's Mercenary Shoes
3018: T4_HEAD_LEATHER_SET2                                             : Adept's Hunter Hood
3019: T4_HEAD_LEATHER_SET2@1                                           : Adept's Hunter Hood
3020: T4_HEAD_LEATHER_SET2@2                                           : Adept's Hunter Hood
3021: T4_HEAD_LEATHER_SET2@3                                           : Adept's Hunter Hood
3022: T5_HEAD_LEATHER_SET2                                             : Expert's Hunter Hood
3023: T5_HEAD_LEATHER_SET2@1                                           : Expert's Hunter Hood
3024: T5_HEAD_LEATHER_SET2@2                                           : Expert's Hunter Hood
3025: T5_HEAD_LEATHER_SET2@3                                           : Expert's Hunter Hood
3026: T6_HEAD_LEATHER_SET2                                             : Master's Hunter Hood
3027: T6_HEAD_LEATHER_SET2@1                                           : Master's Hunter Hood
3028: T6_HEAD_LEATHER_SET2@2                                           : Master's Hunter Hood
3029: T6_HEAD_LEATHER_SET2@3                                           : Master's Hunter Hood
3030: T7_HEAD_LEATHER_SET2                                             : Grandmaster's Hunter Hood
3031: T7_HEAD_LEATHER_SET2@1                                           : Grandmaster's Hunter Hood
3032: T7_HEAD_LEATHER_SET2@2                                           : Grandmaster's Hunter Hood
3033: T7_HEAD_LEATHER_SET2@3                                           : Grandmaster's Hunter Hood
3034: T8_HEAD_LEATHER_SET2                                             : Elder's Hunter Hood
3035: T8_HEAD_LEATHER_SET2@1                                           : Elder's Hunter Hood
3036: T8_HEAD_LEATHER_SET2@2                                           : Elder's Hunter Hood
3037: T8_HEAD_LEATHER_SET2@3                                           : Elder's Hunter Hood
3038: T4_ARMOR_LEATHER_SET2                                            : Adept's Hunter Jacket
3039: T4_ARMOR_LEATHER_SET2@1                                          : Adept's Hunter Jacket
3040: T4_ARMOR_LEATHER_SET2@2                                          : Adept's Hunter Jacket
3041: T4_ARMOR_LEATHER_SET2@3                                          : Adept's Hunter Jacket
3042: T5_ARMOR_LEATHER_SET2                                            : Expert's Hunter Jacket
3043: T5_ARMOR_LEATHER_SET2@1                                          : Expert's Hunter Jacket
3044: T5_ARMOR_LEATHER_SET2@2                                          : Expert's Hunter Jacket
3045: T5_ARMOR_LEATHER_SET2@3                                          : Expert's Hunter Jacket
3046: T6_ARMOR_LEATHER_SET2                                            : Master's Hunter Jacket
3047: T6_ARMOR_LEATHER_SET2@1                                          : Master's Hunter Jacket
3048: T6_ARMOR_LEATHER_SET2@2                                          : Master's Hunter Jacket
3049: T6_ARMOR_LEATHER_SET2@3                                          : Master's Hunter Jacket
3050: T7_ARMOR_LEATHER_SET2                                            : Grandmaster's Hunter Jacket
3051: T7_ARMOR_LEATHER_SET2@1                                          : Grandmaster's Hunter Jacket
3052: T7_ARMOR_LEATHER_SET2@2                                          : Grandmaster's Hunter Jacket
3053: T7_ARMOR_LEATHER_SET2@3                                          : Grandmaster's Hunter Jacket
3054: T8_ARMOR_LEATHER_SET2                                            : Elder's Hunter Jacket
3055: T8_ARMOR_LEATHER_SET2@1                                          : Elder's Hunter Jacket
3056: T8_ARMOR_LEATHER_SET2@2                                          : Elder's Hunter Jacket
3057: T8_ARMOR_LEATHER_SET2@3                                          : Elder's Hunter Jacket
3058: T4_SHOES_LEATHER_SET2                                            : Adept's Hunter Shoes
3059: T4_SHOES_LEATHER_SET2@1                                          : Adept's Hunter Shoes
3060: T4_SHOES_LEATHER_SET2@2                                          : Adept's Hunter Shoes
3061: T4_SHOES_LEATHER_SET2@3                                          : Adept's Hunter Shoes
3062: T5_SHOES_LEATHER_SET2                                            : Expert's Hunter Shoes
3063: T5_SHOES_LEATHER_SET2@1                                          : Expert's Hunter Shoes
3064: T5_SHOES_LEATHER_SET2@2                                          : Expert's Hunter Shoes
3065: T5_SHOES_LEATHER_SET2@3                                          : Expert's Hunter Shoes
3066: T6_SHOES_LEATHER_SET2                                            : Master's Hunter Shoes
3067: T6_SHOES_LEATHER_SET2@1                                          : Master's Hunter Shoes
3068: T6_SHOES_LEATHER_SET2@2                                          : Master's Hunter Shoes
3069: T6_SHOES_LEATHER_SET2@3                                          : Master's Hunter Shoes
3070: T7_SHOES_LEATHER_SET2                                            : Grandmaster's Hunter Shoes
3071: T7_SHOES_LEATHER_SET2@1                                          : Grandmaster's Hunter Shoes
3072: T7_SHOES_LEATHER_SET2@2                                          : Grandmaster's Hunter Shoes
3073: T7_SHOES_LEATHER_SET2@3                                          : Grandmaster's Hunter Shoes
3074: T8_SHOES_LEATHER_SET2                                            : Elder's Hunter Shoes
3075: T8_SHOES_LEATHER_SET2@1                                          : Elder's Hunter Shoes
3076: T8_SHOES_LEATHER_SET2@2                                          : Elder's Hunter Shoes
3077: T8_SHOES_LEATHER_SET2@3                                          : Elder's Hunter Shoes
3078: T4_HEAD_LEATHER_SET3                                             : Adept's Assassin Hood
3079: T4_HEAD_LEATHER_SET3@1                                           : Adept's Assassin Hood
3080: T4_HEAD_LEATHER_SET3@2                                           : Adept's Assassin Hood
3081: T4_HEAD_LEATHER_SET3@3                                           : Adept's Assassin Hood
3082: T5_HEAD_LEATHER_SET3                                             : Expert's Assassin Hood
3083: T5_HEAD_LEATHER_SET3@1                                           : Expert's Assassin Hood
3084: T5_HEAD_LEATHER_SET3@2                                           : Expert's Assassin Hood
3085: T5_HEAD_LEATHER_SET3@3                                           : Expert's Assassin Hood
3086: T6_HEAD_LEATHER_SET3                                             : Master's Assassin Hood
3087: T6_HEAD_LEATHER_SET3@1                                           : Master's Assassin Hood
3088: T6_HEAD_LEATHER_SET3@2                                           : Master's Assassin Hood
3089: T6_HEAD_LEATHER_SET3@3                                           : Master's Assassin Hood
3090: T7_HEAD_LEATHER_SET3                                             : Grandmaster's Assassin Hood
3091: T7_HEAD_LEATHER_SET3@1                                           : Grandmaster's Assassin Hood
3092: T7_HEAD_LEATHER_SET3@2                                           : Grandmaster's Assassin Hood
3093: T7_HEAD_LEATHER_SET3@3                                           : Grandmaster's Assassin Hood
3094: T8_HEAD_LEATHER_SET3                                             : Elder's Assassin Hood
3095: T8_HEAD_LEATHER_SET3@1                                           : Elder's Assassin Hood
3096: T8_HEAD_LEATHER_SET3@2                                           : Elder's Assassin Hood
3097: T8_HEAD_LEATHER_SET3@3                                           : Elder's Assassin Hood
3098: T4_ARMOR_LEATHER_SET3                                            : Adept's Assassin Jacket
3099: T4_ARMOR_LEATHER_SET3@1                                          : Adept's Assassin Jacket
3100: T4_ARMOR_LEATHER_SET3@2                                          : Adept's Assassin Jacket
3101: T4_ARMOR_LEATHER_SET3@3                                          : Adept's Assassin Jacket
3102: T5_ARMOR_LEATHER_SET3                                            : Expert's Assassin Jacket
3103: T5_ARMOR_LEATHER_SET3@1                                          : Expert's Assassin Jacket
3104: T5_ARMOR_LEATHER_SET3@2                                          : Expert's Assassin Jacket
3105: T5_ARMOR_LEATHER_SET3@3                                          : Expert's Assassin Jacket
3106: T6_ARMOR_LEATHER_SET3                                            : Master's Assassin Jacket
3107: T6_ARMOR_LEATHER_SET3@1                                          : Master's Assassin Jacket
3108: T6_ARMOR_LEATHER_SET3@2                                          : Master's Assassin Jacket
3109: T6_ARMOR_LEATHER_SET3@3                                          : Master's Assassin Jacket
3110: T7_ARMOR_LEATHER_SET3                                            : Grandmaster's Assassin Jacket
3111: T7_ARMOR_LEATHER_SET3@1                                          : Grandmaster's Assassin Jacket
3112: T7_ARMOR_LEATHER_SET3@2                                          : Grandmaster's Assassin Jacket
3113: T7_ARMOR_LEATHER_SET3@3                                          : Grandmaster's Assassin Jacket
3114: T8_ARMOR_LEATHER_SET3                                            : Elder's Assassin Jacket
3115: T8_ARMOR_LEATHER_SET3@1                                          : Elder's Assassin Jacket
3116: T8_ARMOR_LEATHER_SET3@2                                          : Elder's Assassin Jacket
3117: T8_ARMOR_LEATHER_SET3@3                                          : Elder's Assassin Jacket
3118: T4_SHOES_LEATHER_SET3                                            : Adept's Assassin Shoes
3119: T4_SHOES_LEATHER_SET3@1                                          : Adept's Assassin Shoes
3120: T4_SHOES_LEATHER_SET3@2                                          : Adept's Assassin Shoes
3121: T4_SHOES_LEATHER_SET3@3                                          : Adept's Assassin Shoes
3122: T5_SHOES_LEATHER_SET3                                            : Expert's Assassin Shoes
3123: T5_SHOES_LEATHER_SET3@1                                          : Expert's Assassin Shoes
3124: T5_SHOES_LEATHER_SET3@2                                          : Expert's Assassin Shoes
3125: T5_SHOES_LEATHER_SET3@3                                          : Expert's Assassin Shoes
3126: T6_SHOES_LEATHER_SET3                                            : Master's Assassin Shoes
3127: T6_SHOES_LEATHER_SET3@1                                          : Master's Assassin Shoes
3128: T6_SHOES_LEATHER_SET3@2                                          : Master's Assassin Shoes
3129: T6_SHOES_LEATHER_SET3@3                                          : Master's Assassin Shoes
3130: T7_SHOES_LEATHER_SET3                                            : Grandmaster's Assassin Shoes
3131: T7_SHOES_LEATHER_SET3@1                                          : Grandmaster's Assassin Shoes
3132: T7_SHOES_LEATHER_SET3@2                                          : Grandmaster's Assassin Shoes
3133: T7_SHOES_LEATHER_SET3@3                                          : Grandmaster's Assassin Shoes
3134: T8_SHOES_LEATHER_SET3                                            : Elder's Assassin Shoes
3135: T8_SHOES_LEATHER_SET3@1                                          : Elder's Assassin Shoes
3136: T8_SHOES_LEATHER_SET3@2                                          : Elder's Assassin Shoes
3137: T8_SHOES_LEATHER_SET3@3                                          : Elder's Assassin Shoes
3138: T4_HEAD_LEATHER_MORGANA                                          : Adept's Stalker Hood
3139: T4_HEAD_LEATHER_MORGANA@1                                        : Adept's Stalker Hood
3140: T4_HEAD_LEATHER_MORGANA@2                                        : Adept's Stalker Hood
3141: T4_HEAD_LEATHER_MORGANA@3                                        : Adept's Stalker Hood
3142: T5_HEAD_LEATHER_MORGANA                                          : Expert's Stalker Hood
3143: T5_HEAD_LEATHER_MORGANA@1                                        : Expert's Stalker Hood
3144: T5_HEAD_LEATHER_MORGANA@2                                        : Expert's Stalker Hood
3145: T5_HEAD_LEATHER_MORGANA@3                                        : Expert's Stalker Hood
3146: T6_HEAD_LEATHER_MORGANA                                          : Master's Stalker Hood
3147: T6_HEAD_LEATHER_MORGANA@1                                        : Master's Stalker Hood
3148: T6_HEAD_LEATHER_MORGANA@2                                        : Master's Stalker Hood
3149: T6_HEAD_LEATHER_MORGANA@3                                        : Master's Stalker Hood
3150: T7_HEAD_LEATHER_MORGANA                                          : Grandmaster's Stalker Hood
3151: T7_HEAD_LEATHER_MORGANA@1                                        : Grandmaster's Stalker Hood
3152: T7_HEAD_LEATHER_MORGANA@2                                        : Grandmaster's Stalker Hood
3153: T7_HEAD_LEATHER_MORGANA@3                                        : Grandmaster's Stalker Hood
3154: T8_HEAD_LEATHER_MORGANA                                          : Elder's Stalker Hood
3155: T8_HEAD_LEATHER_MORGANA@1                                        : Elder's Stalker Hood
3156: T8_HEAD_LEATHER_MORGANA@2                                        : Elder's Stalker Hood
3157: T8_HEAD_LEATHER_MORGANA@3                                        : Elder's Stalker Hood
3158: T4_ARMOR_LEATHER_MORGANA                                         : Adept's Stalker Jacket
3159: T4_ARMOR_LEATHER_MORGANA@1                                       : Adept's Stalker Jacket
3160: T4_ARMOR_LEATHER_MORGANA@2                                       : Adept's Stalker Jacket
3161: T4_ARMOR_LEATHER_MORGANA@3                                       : Adept's Stalker Jacket
3162: T5_ARMOR_LEATHER_MORGANA                                         : Expert's Stalker Jacket
3163: T5_ARMOR_LEATHER_MORGANA@1                                       : Expert's Stalker Jacket
3164: T5_ARMOR_LEATHER_MORGANA@2                                       : Expert's Stalker Jacket
3165: T5_ARMOR_LEATHER_MORGANA@3                                       : Expert's Stalker Jacket
3166: T6_ARMOR_LEATHER_MORGANA                                         : Master's Stalker Jacket
3167: T6_ARMOR_LEATHER_MORGANA@1                                       : Master's Stalker Jacket
3168: T6_ARMOR_LEATHER_MORGANA@2                                       : Master's Stalker Jacket
3169: T6_ARMOR_LEATHER_MORGANA@3                                       : Master's Stalker Jacket
3170: T7_ARMOR_LEATHER_MORGANA                                         : Grandmaster's Stalker Jacket
3171: T7_ARMOR_LEATHER_MORGANA@1                                       : Grandmaster's Stalker Jacket
3172: T7_ARMOR_LEATHER_MORGANA@2                                       : Grandmaster's Stalker Jacket
3173: T7_ARMOR_LEATHER_MORGANA@3                                       : Grandmaster's Stalker Jacket
3174: T8_ARMOR_LEATHER_MORGANA                                         : Elder's Stalker Jacket
3175: T8_ARMOR_LEATHER_MORGANA@1                                       : Elder's Stalker Jacket
3176: T8_ARMOR_LEATHER_MORGANA@2                                       : Elder's Stalker Jacket
3177: T8_ARMOR_LEATHER_MORGANA@3                                       : Elder's Stalker Jacket
3178: T4_SHOES_LEATHER_MORGANA                                         : Adept's Stalker Shoes
3179: T4_SHOES_LEATHER_MORGANA@1                                       : Adept's Stalker Shoes
3180: T4_SHOES_LEATHER_MORGANA@2                                       : Adept's Stalker Shoes
3181: T4_SHOES_LEATHER_MORGANA@3                                       : Adept's Stalker Shoes
3182: T5_SHOES_LEATHER_MORGANA                                         : Expert's Stalker Shoes
3183: T5_SHOES_LEATHER_MORGANA@1                                       : Expert's Stalker Shoes
3184: T5_SHOES_LEATHER_MORGANA@2                                       : Expert's Stalker Shoes
3185: T5_SHOES_LEATHER_MORGANA@3                                       : Expert's Stalker Shoes
3186: T6_SHOES_LEATHER_MORGANA                                         : Master's Stalker Shoes
3187: T6_SHOES_LEATHER_MORGANA@1                                       : Master's Stalker Shoes
3188: T6_SHOES_LEATHER_MORGANA@2                                       : Master's Stalker Shoes
3189: T6_SHOES_LEATHER_MORGANA@3                                       : Master's Stalker Shoes
3190: T7_SHOES_LEATHER_MORGANA                                         : Grandmaster's Stalker Shoes
3191: T7_SHOES_LEATHER_MORGANA@1                                       : Grandmaster's Stalker Shoes
3192: T7_SHOES_LEATHER_MORGANA@2                                       : Grandmaster's Stalker Shoes
3193: T7_SHOES_LEATHER_MORGANA@3                                       : Grandmaster's Stalker Shoes
3194: T8_SHOES_LEATHER_MORGANA                                         : Elder's Stalker Shoes
3195: T8_SHOES_LEATHER_MORGANA@1                                       : Elder's Stalker Shoes
3196: T8_SHOES_LEATHER_MORGANA@2                                       : Elder's Stalker Shoes
3197: T8_SHOES_LEATHER_MORGANA@3                                       : Elder's Stalker Shoes
3198: T4_HEAD_LEATHER_HELL                                             : Adept's Hellion Hood
3199: T4_HEAD_LEATHER_HELL@1                                           : Adept's Hellion Hood
3200: T4_HEAD_LEATHER_HELL@2                                           : Adept's Hellion Hood
3201: T4_HEAD_LEATHER_HELL@3                                           : Adept's Hellion Hood
3202: T5_HEAD_LEATHER_HELL                                             : Expert's Hellion Hood
3203: T5_HEAD_LEATHER_HELL@1                                           : Expert's Hellion Hood
3204: T5_HEAD_LEATHER_HELL@2                                           : Expert's Hellion Hood
3205: T5_HEAD_LEATHER_HELL@3                                           : Expert's Hellion Hood
3206: T6_HEAD_LEATHER_HELL                                             : Master's Hellion Hood
3207: T6_HEAD_LEATHER_HELL@1                                           : Master's Hellion Hood
3208: T6_HEAD_LEATHER_HELL@2                                           : Master's Hellion Hood
3209: T6_HEAD_LEATHER_HELL@3                                           : Master's Hellion Hood
3210: T7_HEAD_LEATHER_HELL                                             : Grandmaster's Hellion Hood
3211: T7_HEAD_LEATHER_HELL@1                                           : Grandmaster's Hellion Hood
3212: T7_HEAD_LEATHER_HELL@2                                           : Grandmaster's Hellion Hood
3213: T7_HEAD_LEATHER_HELL@3                                           : Grandmaster's Hellion Hood
3214: T8_HEAD_LEATHER_HELL                                             : Elder's Hellion Hood
3215: T8_HEAD_LEATHER_HELL@1                                           : Elder's Hellion Hood
3216: T8_HEAD_LEATHER_HELL@2                                           : Elder's Hellion Hood
3217: T8_HEAD_LEATHER_HELL@3                                           : Elder's Hellion Hood
3218: T4_ARMOR_LEATHER_HELL                                            : Adept's Hellion Jacket
3219: T4_ARMOR_LEATHER_HELL@1                                          : Adept's Hellion Jacket
3220: T4_ARMOR_LEATHER_HELL@2                                          : Adept's Hellion Jacket
3221: T4_ARMOR_LEATHER_HELL@3                                          : Adept's Hellion Jacket
3222: T5_ARMOR_LEATHER_HELL                                            : Expert's Hellion Jacket
3223: T5_ARMOR_LEATHER_HELL@1                                          : Expert's Hellion Jacket
3224: T5_ARMOR_LEATHER_HELL@2                                          : Expert's Hellion Jacket
3225: T5_ARMOR_LEATHER_HELL@3                                          : Expert's Hellion Jacket
3226: T6_ARMOR_LEATHER_HELL                                            : Master's Hellion Jacket
3227: T6_ARMOR_LEATHER_HELL@1                                          : Master's Hellion Jacket
3228: T6_ARMOR_LEATHER_HELL@2                                          : Master's Hellion Jacket
3229: T6_ARMOR_LEATHER_HELL@3                                          : Master's Hellion Jacket
3230: T7_ARMOR_LEATHER_HELL                                            : Grandmaster's Hellion Jacket
3231: T7_ARMOR_LEATHER_HELL@1                                          : Grandmaster's Hellion Jacket
3232: T7_ARMOR_LEATHER_HELL@2                                          : Grandmaster's Hellion Jacket
3233: T7_ARMOR_LEATHER_HELL@3                                          : Grandmaster's Hellion Jacket
3234: T8_ARMOR_LEATHER_HELL                                            : Elder's Hellion Jacket
3235: T8_ARMOR_LEATHER_HELL@1                                          : Elder's Hellion Jacket
3236: T8_ARMOR_LEATHER_HELL@2                                          : Elder's Hellion Jacket
3237: T8_ARMOR_LEATHER_HELL@3                                          : Elder's Hellion Jacket
3238: T4_SHOES_LEATHER_HELL                                            : Adept's Hellion Shoes
3239: T4_SHOES_LEATHER_HELL@1                                          : Adept's Hellion Shoes
3240: T4_SHOES_LEATHER_HELL@2                                          : Adept's Hellion Shoes
3241: T4_SHOES_LEATHER_HELL@3                                          : Adept's Hellion Shoes
3242: T5_SHOES_LEATHER_HELL                                            : Expert's Hellion Shoes
3243: T5_SHOES_LEATHER_HELL@1                                          : Expert's Hellion Shoes
3244: T5_SHOES_LEATHER_HELL@2                                          : Expert's Hellion Shoes
3245: T5_SHOES_LEATHER_HELL@3                                          : Expert's Hellion Shoes
3246: T6_SHOES_LEATHER_HELL                                            : Master's Hellion Shoes
3247: T6_SHOES_LEATHER_HELL@1                                          : Master's Hellion Shoes
3248: T6_SHOES_LEATHER_HELL@2                                          : Master's Hellion Shoes
3249: T6_SHOES_LEATHER_HELL@3                                          : Master's Hellion Shoes
3250: T7_SHOES_LEATHER_HELL                                            : Grandmaster's Hellion Shoes
3251: T7_SHOES_LEATHER_HELL@1                                          : Grandmaster's Hellion Shoes
3252: T7_SHOES_LEATHER_HELL@2                                          : Grandmaster's Hellion Shoes
3253: T7_SHOES_LEATHER_HELL@3                                          : Grandmaster's Hellion Shoes
3254: T8_SHOES_LEATHER_HELL                                            : Elder's Hellion Shoes
3255: T8_SHOES_LEATHER_HELL@1                                          : Elder's Hellion Shoes
3256: T8_SHOES_LEATHER_HELL@2                                          : Elder's Hellion Shoes
3257: T8_SHOES_LEATHER_HELL@3                                          : Elder's Hellion Shoes
3258: T4_HEAD_LEATHER_UNDEAD                                           : Adept's Specter Hood
3259: T4_HEAD_LEATHER_UNDEAD@1                                         : Adept's Specter Hood
3260: T4_HEAD_LEATHER_UNDEAD@2                                         : Adept's Specter Hood
3261: T4_HEAD_LEATHER_UNDEAD@3                                         : Adept's Specter Hood
3262: T5_HEAD_LEATHER_UNDEAD                                           : Expert's Specter Hood
3263: T5_HEAD_LEATHER_UNDEAD@1                                         : Expert's Specter Hood
3264: T5_HEAD_LEATHER_UNDEAD@2                                         : Expert's Specter Hood
3265: T5_HEAD_LEATHER_UNDEAD@3                                         : Expert's Specter Hood
3266: T6_HEAD_LEATHER_UNDEAD                                           : Master's Specter Hood
3267: T6_HEAD_LEATHER_UNDEAD@1                                         : Master's Specter Hood
3268: T6_HEAD_LEATHER_UNDEAD@2                                         : Master's Specter Hood
3269: T6_HEAD_LEATHER_UNDEAD@3                                         : Master's Specter Hood
3270: T7_HEAD_LEATHER_UNDEAD                                           : Grandmaster's Specter Hood
3271: T7_HEAD_LEATHER_UNDEAD@1                                         : Grandmaster's Specter Hood
3272: T7_HEAD_LEATHER_UNDEAD@2                                         : Grandmaster's Specter Hood
3273: T7_HEAD_LEATHER_UNDEAD@3                                         : Grandmaster's Specter Hood
3274: T8_HEAD_LEATHER_UNDEAD                                           : Elder's Specter Hood
3275: T8_HEAD_LEATHER_UNDEAD@1                                         : Elder's Specter Hood
3276: T8_HEAD_LEATHER_UNDEAD@2                                         : Elder's Specter Hood
3277: T8_HEAD_LEATHER_UNDEAD@3                                         : Elder's Specter Hood
3278: T4_ARMOR_LEATHER_UNDEAD                                          : Adept's Specter Jacket
3279: T4_ARMOR_LEATHER_UNDEAD@1                                        : Adept's Specter Jacket
3280: T4_ARMOR_LEATHER_UNDEAD@2                                        : Adept's Specter Jacket
3281: T4_ARMOR_LEATHER_UNDEAD@3                                        : Adept's Specter Jacket
3282: T5_ARMOR_LEATHER_UNDEAD                                          : Expert's Specter Jacket
3283: T5_ARMOR_LEATHER_UNDEAD@1                                        : Expert's Specter Jacket
3284: T5_ARMOR_LEATHER_UNDEAD@2                                        : Expert's Specter Jacket
3285: T5_ARMOR_LEATHER_UNDEAD@3                                        : Expert's Specter Jacket
3286: T6_ARMOR_LEATHER_UNDEAD                                          : Master's Specter Jacket
3287: T6_ARMOR_LEATHER_UNDEAD@1                                        : Master's Specter Jacket
3288: T6_ARMOR_LEATHER_UNDEAD@2                                        : Master's Specter Jacket
3289: T6_ARMOR_LEATHER_UNDEAD@3                                        : Master's Specter Jacket
3290: T7_ARMOR_LEATHER_UNDEAD                                          : Grandmaster's Specter Jacket
3291: T7_ARMOR_LEATHER_UNDEAD@1                                        : Grandmaster's Specter Jacket
3292: T7_ARMOR_LEATHER_UNDEAD@2                                        : Grandmaster's Specter Jacket
3293: T7_ARMOR_LEATHER_UNDEAD@3                                        : Grandmaster's Specter Jacket
3294: T8_ARMOR_LEATHER_UNDEAD                                          : Elder's Specter Jacket
3295: T8_ARMOR_LEATHER_UNDEAD@1                                        : Elder's Specter Jacket
3296: T8_ARMOR_LEATHER_UNDEAD@2                                        : Elder's Specter Jacket
3297: T8_ARMOR_LEATHER_UNDEAD@3                                        : Elder's Specter Jacket
3298: T4_SHOES_LEATHER_UNDEAD                                          : Adept's Specter Shoes
3299: T4_SHOES_LEATHER_UNDEAD@1                                        : Adept's Specter Shoes
3300: T4_SHOES_LEATHER_UNDEAD@2                                        : Adept's Specter Shoes
3301: T4_SHOES_LEATHER_UNDEAD@3                                        : Adept's Specter Shoes
3302: T5_SHOES_LEATHER_UNDEAD                                          : Expert's Specter Shoes
3303: T5_SHOES_LEATHER_UNDEAD@1                                        : Expert's Specter Shoes
3304: T5_SHOES_LEATHER_UNDEAD@2                                        : Expert's Specter Shoes
3305: T5_SHOES_LEATHER_UNDEAD@3                                        : Expert's Specter Shoes
3306: T6_SHOES_LEATHER_UNDEAD                                          : Master's Specter Shoes
3307: T6_SHOES_LEATHER_UNDEAD@1                                        : Master's Specter Shoes
3308: T6_SHOES_LEATHER_UNDEAD@2                                        : Master's Specter Shoes
3309: T6_SHOES_LEATHER_UNDEAD@3                                        : Master's Specter Shoes
3310: T7_SHOES_LEATHER_UNDEAD                                          : Grandmaster's Specter Shoes
3311: T7_SHOES_LEATHER_UNDEAD@1                                        : Grandmaster's Specter Shoes
3312: T7_SHOES_LEATHER_UNDEAD@2                                        : Grandmaster's Specter Shoes
3313: T7_SHOES_LEATHER_UNDEAD@3                                        : Grandmaster's Specter Shoes
3314: T8_SHOES_LEATHER_UNDEAD                                          : Elder's Specter Shoes
3315: T8_SHOES_LEATHER_UNDEAD@1                                        : Elder's Specter Shoes
3316: T8_SHOES_LEATHER_UNDEAD@2                                        : Elder's Specter Shoes
3317: T8_SHOES_LEATHER_UNDEAD@3                                        : Elder's Specter Shoes
3318: T4_HEAD_LEATHER_AVALON                                           : Adept's Hood of Tenacity
3319: T4_HEAD_LEATHER_AVALON@1                                         : Adept's Hood of Tenacity
3320: T4_HEAD_LEATHER_AVALON@2                                         : Adept's Hood of Tenacity
3321: T4_HEAD_LEATHER_AVALON@3                                         : Adept's Hood of Tenacity
3322: T5_HEAD_LEATHER_AVALON                                           : Expert's Hood of Tenacity
3323: T5_HEAD_LEATHER_AVALON@1                                         : Expert's Hood of Tenacity
3324: T5_HEAD_LEATHER_AVALON@2                                         : Expert's Hood of Tenacity
3325: T5_HEAD_LEATHER_AVALON@3                                         : Expert's Hood of Tenacity
3326: T6_HEAD_LEATHER_AVALON                                           : Master's Hood of Tenacity
3327: T6_HEAD_LEATHER_AVALON@1                                         : Master's Hood of Tenacity
3328: T6_HEAD_LEATHER_AVALON@2                                         : Master's Hood of Tenacity
3329: T6_HEAD_LEATHER_AVALON@3                                         : Master's Hood of Tenacity
3330: T7_HEAD_LEATHER_AVALON                                           : Grandmaster's Hood of Tenacity
3331: T7_HEAD_LEATHER_AVALON@1                                         : Grandmaster's Hood of Tenacity
3332: T7_HEAD_LEATHER_AVALON@2                                         : Grandmaster's Hood of Tenacity
3333: T7_HEAD_LEATHER_AVALON@3                                         : Grandmaster's Hood of Tenacity
3334: T8_HEAD_LEATHER_AVALON                                           : Elder's Hood of Tenacity
3335: T8_HEAD_LEATHER_AVALON@1                                         : Elder's Hood of Tenacity
3336: T8_HEAD_LEATHER_AVALON@2                                         : Elder's Hood of Tenacity
3337: T8_HEAD_LEATHER_AVALON@3                                         : Elder's Hood of Tenacity
3338: T4_ARMOR_LEATHER_AVALON                                          : Adept's Jacket of Tenacity
3339: T4_ARMOR_LEATHER_AVALON@1                                        : Adept's Jacket of Tenacity
3340: T4_ARMOR_LEATHER_AVALON@2                                        : Adept's Jacket of Tenacity
3341: T4_ARMOR_LEATHER_AVALON@3                                        : Adept's Jacket of Tenacity
3342: T5_ARMOR_LEATHER_AVALON                                          : Expert's Jacket of Tenacity
3343: T5_ARMOR_LEATHER_AVALON@1                                        : Expert's Jacket of Tenacity
3344: T5_ARMOR_LEATHER_AVALON@2                                        : Expert's Jacket of Tenacity
3345: T5_ARMOR_LEATHER_AVALON@3                                        : Expert's Jacket of Tenacity
3346: T6_ARMOR_LEATHER_AVALON                                          : Master's Jacket of Tenacity
3347: T6_ARMOR_LEATHER_AVALON@1                                        : Master's Jacket of Tenacity
3348: T6_ARMOR_LEATHER_AVALON@2                                        : Master's Jacket of Tenacity
3349: T6_ARMOR_LEATHER_AVALON@3                                        : Master's Jacket of Tenacity
3350: T7_ARMOR_LEATHER_AVALON                                          : Grandmaster's Jacket of Tenacity
3351: T7_ARMOR_LEATHER_AVALON@1                                        : Grandmaster's Jacket of Tenacity
3352: T7_ARMOR_LEATHER_AVALON@2                                        : Grandmaster's Jacket of Tenacity
3353: T7_ARMOR_LEATHER_AVALON@3                                        : Grandmaster's Jacket of Tenacity
3354: T8_ARMOR_LEATHER_AVALON                                          : Elder's Jacket of Tenacity
3355: T8_ARMOR_LEATHER_AVALON@1                                        : Elder's Jacket of Tenacity
3356: T8_ARMOR_LEATHER_AVALON@2                                        : Elder's Jacket of Tenacity
3357: T8_ARMOR_LEATHER_AVALON@3                                        : Elder's Jacket of Tenacity
3358: T4_SHOES_LEATHER_AVALON                                          : Adept's Shoes of Tenacity
3359: T4_SHOES_LEATHER_AVALON@1                                        : Adept's Shoes of Tenacity
3360: T4_SHOES_LEATHER_AVALON@2                                        : Adept's Shoes of Tenacity
3361: T4_SHOES_LEATHER_AVALON@3                                        : Adept's Shoes of Tenacity
3362: T5_SHOES_LEATHER_AVALON                                          : Expert's Shoes of Tenacity
3363: T5_SHOES_LEATHER_AVALON@1                                        : Expert's Shoes of Tenacity
3364: T5_SHOES_LEATHER_AVALON@2                                        : Expert's Shoes of Tenacity
3365: T5_SHOES_LEATHER_AVALON@3                                        : Expert's Shoes of Tenacity
3366: T6_SHOES_LEATHER_AVALON                                          : Master's Shoes of Tenacity
3367: T6_SHOES_LEATHER_AVALON@1                                        : Master's Shoes of Tenacity
3368: T6_SHOES_LEATHER_AVALON@2                                        : Master's Shoes of Tenacity
3369: T6_SHOES_LEATHER_AVALON@3                                        : Master's Shoes of Tenacity
3370: T7_SHOES_LEATHER_AVALON                                          : Grandmaster's Shoes of Tenacity
3371: T7_SHOES_LEATHER_AVALON@1                                        : Grandmaster's Shoes of Tenacity
3372: T7_SHOES_LEATHER_AVALON@2                                        : Grandmaster's Shoes of Tenacity
3373: T7_SHOES_LEATHER_AVALON@3                                        : Grandmaster's Shoes of Tenacity
3374: T8_SHOES_LEATHER_AVALON                                          : Elder's Shoes of Tenacity
3375: T8_SHOES_LEATHER_AVALON@1                                        : Elder's Shoes of Tenacity
3376: T8_SHOES_LEATHER_AVALON@2                                        : Elder's Shoes of Tenacity
3377: T8_SHOES_LEATHER_AVALON@3                                        : Elder's Shoes of Tenacity
3378: T2_HEAD_CLOTH_SET1                                               : Novice's Scholar Cowl
3379: T3_HEAD_CLOTH_SET1                                               : Journeyman's Scholar Cowl
3380: T4_HEAD_CLOTH_SET1                                               : Adept's Scholar Cowl
3381: T4_HEAD_CLOTH_SET1@1                                             : Adept's Scholar Cowl
3382: T4_HEAD_CLOTH_SET1@2                                             : Adept's Scholar Cowl
3383: T4_HEAD_CLOTH_SET1@3                                             : Adept's Scholar Cowl
3384: T5_HEAD_CLOTH_SET1                                               : Expert's Scholar Cowl
3385: T5_HEAD_CLOTH_SET1@1                                             : Expert's Scholar Cowl
3386: T5_HEAD_CLOTH_SET1@2                                             : Expert's Scholar Cowl
3387: T5_HEAD_CLOTH_SET1@3                                             : Expert's Scholar Cowl
3388: T6_HEAD_CLOTH_SET1                                               : Master's Scholar Cowl
3389: T6_HEAD_CLOTH_SET1@1                                             : Master's Scholar Cowl
3390: T6_HEAD_CLOTH_SET1@2                                             : Master's Scholar Cowl
3391: T6_HEAD_CLOTH_SET1@3                                             : Master's Scholar Cowl
3392: T7_HEAD_CLOTH_SET1                                               : Grandmaster's Scholar Cowl
3393: T7_HEAD_CLOTH_SET1@1                                             : Grandmaster's Scholar Cowl
3394: T7_HEAD_CLOTH_SET1@2                                             : Grandmaster's Scholar Cowl
3395: T7_HEAD_CLOTH_SET1@3                                             : Grandmaster's Scholar Cowl
3396: T8_HEAD_CLOTH_SET1                                               : Elder's Scholar Cowl
3397: T8_HEAD_CLOTH_SET1@1                                             : Elder's Scholar Cowl
3398: T8_HEAD_CLOTH_SET1@2                                             : Elder's Scholar Cowl
3399: T8_HEAD_CLOTH_SET1@3                                             : Elder's Scholar Cowl
3400: T2_ARMOR_CLOTH_SET1                                              : Novice's Scholar Robe
3401: T3_ARMOR_CLOTH_SET1                                              : Journeyman's Scholar Robe
3402: T4_ARMOR_CLOTH_SET1                                              : Adept's Scholar Robe
3403: T4_ARMOR_CLOTH_SET1@1                                            : Adept's Scholar Robe
3404: T4_ARMOR_CLOTH_SET1@2                                            : Adept's Scholar Robe
3405: T4_ARMOR_CLOTH_SET1@3                                            : Adept's Scholar Robe
3406: T5_ARMOR_CLOTH_SET1                                              : Expert's Scholar Robe
3407: T5_ARMOR_CLOTH_SET1@1                                            : Expert's Scholar Robe
3408: T5_ARMOR_CLOTH_SET1@2                                            : Expert's Scholar Robe
3409: T5_ARMOR_CLOTH_SET1@3                                            : Expert's Scholar Robe
3410: T6_ARMOR_CLOTH_SET1                                              : Master's Scholar Robe
3411: T6_ARMOR_CLOTH_SET1@1                                            : Master's Scholar Robe
3412: T6_ARMOR_CLOTH_SET1@2                                            : Master's Scholar Robe
3413: T6_ARMOR_CLOTH_SET1@3                                            : Master's Scholar Robe
3414: T7_ARMOR_CLOTH_SET1                                              : Grandmaster's Scholar Robe
3415: T7_ARMOR_CLOTH_SET1@1                                            : Grandmaster's Scholar Robe
3416: T7_ARMOR_CLOTH_SET1@2                                            : Grandmaster's Scholar Robe
3417: T7_ARMOR_CLOTH_SET1@3                                            : Grandmaster's Scholar Robe
3418: T8_ARMOR_CLOTH_SET1                                              : Elder's Scholar Robe
3419: T8_ARMOR_CLOTH_SET1@1                                            : Elder's Scholar Robe
3420: T8_ARMOR_CLOTH_SET1@2                                            : Elder's Scholar Robe
3421: T8_ARMOR_CLOTH_SET1@3                                            : Elder's Scholar Robe
3422: T2_SHOES_CLOTH_SET1                                              : Novice's Scholar Sandals
3423: T3_SHOES_CLOTH_SET1                                              : Journeyman's Scholar Sandals
3424: T4_SHOES_CLOTH_SET1                                              : Adept's Scholar Sandals
3425: T4_SHOES_CLOTH_SET1@1                                            : Adept's Scholar Sandals
3426: T4_SHOES_CLOTH_SET1@2                                            : Adept's Scholar Sandals
3427: T4_SHOES_CLOTH_SET1@3                                            : Adept's Scholar Sandals
3428: T5_SHOES_CLOTH_SET1                                              : Expert's Scholar Sandals
3429: T5_SHOES_CLOTH_SET1@1                                            : Expert's Scholar Sandals
3430: T5_SHOES_CLOTH_SET1@2                                            : Expert's Scholar Sandals
3431: T5_SHOES_CLOTH_SET1@3                                            : Expert's Scholar Sandals
3432: T6_SHOES_CLOTH_SET1                                              : Master's Scholar Sandals
3433: T6_SHOES_CLOTH_SET1@1                                            : Master's Scholar Sandals
3434: T6_SHOES_CLOTH_SET1@2                                            : Master's Scholar Sandals
3435: T6_SHOES_CLOTH_SET1@3                                            : Master's Scholar Sandals
3436: T7_SHOES_CLOTH_SET1                                              : Grandmaster's Scholar Sandals
3437: T7_SHOES_CLOTH_SET1@1                                            : Grandmaster's Scholar Sandals
3438: T7_SHOES_CLOTH_SET1@2                                            : Grandmaster's Scholar Sandals
3439: T7_SHOES_CLOTH_SET1@3                                            : Grandmaster's Scholar Sandals
3440: T8_SHOES_CLOTH_SET1                                              : Elder's Scholar Sandals
3441: T8_SHOES_CLOTH_SET1@1                                            : Elder's Scholar Sandals
3442: T8_SHOES_CLOTH_SET1@2                                            : Elder's Scholar Sandals
3443: T8_SHOES_CLOTH_SET1@3                                            : Elder's Scholar Sandals
3444: T4_HEAD_CLOTH_SET2                                               : Adept's Cleric Cowl
3445: T4_HEAD_CLOTH_SET2@1                                             : Adept's Cleric Cowl
3446: T4_HEAD_CLOTH_SET2@2                                             : Adept's Cleric Cowl
3447: T4_HEAD_CLOTH_SET2@3                                             : Adept's Cleric Cowl
3448: T5_HEAD_CLOTH_SET2                                               : Expert's Cleric Cowl
3449: T5_HEAD_CLOTH_SET2@1                                             : Expert's Cleric Cowl
3450: T5_HEAD_CLOTH_SET2@2                                             : Expert's Cleric Cowl
3451: T5_HEAD_CLOTH_SET2@3                                             : Expert's Cleric Cowl
3452: T6_HEAD_CLOTH_SET2                                               : Master's Cleric Cowl
3453: T6_HEAD_CLOTH_SET2@1                                             : Master's Cleric Cowl
3454: T6_HEAD_CLOTH_SET2@2                                             : Master's Cleric Cowl
3455: T6_HEAD_CLOTH_SET2@3                                             : Master's Cleric Cowl
3456: T7_HEAD_CLOTH_SET2                                               : Grandmaster's Cleric Cowl
3457: T7_HEAD_CLOTH_SET2@1                                             : Grandmaster's Cleric Cowl
3458: T7_HEAD_CLOTH_SET2@2                                             : Grandmaster's Cleric Cowl
3459: T7_HEAD_CLOTH_SET2@3                                             : Grandmaster's Cleric Cowl
3460: T8_HEAD_CLOTH_SET2                                               : Elder's Cleric Cowl
3461: T8_HEAD_CLOTH_SET2@1                                             : Elder's Cleric Cowl
3462: T8_HEAD_CLOTH_SET2@2                                             : Elder's Cleric Cowl
3463: T8_HEAD_CLOTH_SET2@3                                             : Elder's Cleric Cowl
3464: T4_ARMOR_CLOTH_SET2                                              : Adept's Cleric Robe
3465: T4_ARMOR_CLOTH_SET2@1                                            : Adept's Cleric Robe
3466: T4_ARMOR_CLOTH_SET2@2                                            : Adept's Cleric Robe
3467: T4_ARMOR_CLOTH_SET2@3                                            : Adept's Cleric Robe
3468: T5_ARMOR_CLOTH_SET2                                              : Expert's Cleric Robe
3469: T5_ARMOR_CLOTH_SET2@1                                            : Expert's Cleric Robe
3470: T5_ARMOR_CLOTH_SET2@2                                            : Expert's Cleric Robe
3471: T5_ARMOR_CLOTH_SET2@3                                            : Expert's Cleric Robe
3472: T6_ARMOR_CLOTH_SET2                                              : Master's Cleric Robe
3473: T6_ARMOR_CLOTH_SET2@1                                            : Master's Cleric Robe
3474: T6_ARMOR_CLOTH_SET2@2                                            : Master's Cleric Robe
3475: T6_ARMOR_CLOTH_SET2@3                                            : Master's Cleric Robe
3476: T7_ARMOR_CLOTH_SET2                                              : Grandmaster's Cleric Robe
3477: T7_ARMOR_CLOTH_SET2@1                                            : Grandmaster's Cleric Robe
3478: T7_ARMOR_CLOTH_SET2@2                                            : Grandmaster's Cleric Robe
3479: T7_ARMOR_CLOTH_SET2@3                                            : Grandmaster's Cleric Robe
3480: T8_ARMOR_CLOTH_SET2                                              : Elder's Cleric Robe
3481: T8_ARMOR_CLOTH_SET2@1                                            : Elder's Cleric Robe
3482: T8_ARMOR_CLOTH_SET2@2                                            : Elder's Cleric Robe
3483: T8_ARMOR_CLOTH_SET2@3                                            : Elder's Cleric Robe
3484: T4_SHOES_CLOTH_SET2                                              : Adept's Cleric Sandals
3485: T4_SHOES_CLOTH_SET2@1                                            : Adept's Cleric Sandals
3486: T4_SHOES_CLOTH_SET2@2                                            : Adept's Cleric Sandals
3487: T4_SHOES_CLOTH_SET2@3                                            : Adept's Cleric Sandals
3488: T5_SHOES_CLOTH_SET2                                              : Expert's Cleric Sandals
3489: T5_SHOES_CLOTH_SET2@1                                            : Expert's Cleric Sandals
3490: T5_SHOES_CLOTH_SET2@2                                            : Expert's Cleric Sandals
3491: T5_SHOES_CLOTH_SET2@3                                            : Expert's Cleric Sandals
3492: T6_SHOES_CLOTH_SET2                                              : Master's Cleric Sandals
3493: T6_SHOES_CLOTH_SET2@1                                            : Master's Cleric Sandals
3494: T6_SHOES_CLOTH_SET2@2                                            : Master's Cleric Sandals
3495: T6_SHOES_CLOTH_SET2@3                                            : Master's Cleric Sandals
3496: T7_SHOES_CLOTH_SET2                                              : Grandmaster's Cleric Sandals
3497: T7_SHOES_CLOTH_SET2@1                                            : Grandmaster's Cleric Sandals
3498: T7_SHOES_CLOTH_SET2@2                                            : Grandmaster's Cleric Sandals
3499: T7_SHOES_CLOTH_SET2@3                                            : Grandmaster's Cleric Sandals
3500: T8_SHOES_CLOTH_SET2                                              : Elder's Cleric Sandals
3501: T8_SHOES_CLOTH_SET2@1                                            : Elder's Cleric Sandals
3502: T8_SHOES_CLOTH_SET2@2                                            : Elder's Cleric Sandals
3503: T8_SHOES_CLOTH_SET2@3                                            : Elder's Cleric Sandals
3504: T4_HEAD_CLOTH_SET3                                               : Adept's Mage Cowl
3505: T4_HEAD_CLOTH_SET3@1                                             : Adept's Mage Cowl
3506: T4_HEAD_CLOTH_SET3@2                                             : Adept's Mage Cowl
3507: T4_HEAD_CLOTH_SET3@3                                             : Adept's Mage Cowl
3508: T5_HEAD_CLOTH_SET3                                               : Expert's Mage Cowl
3509: T5_HEAD_CLOTH_SET3@1                                             : Expert's Mage Cowl
3510: T5_HEAD_CLOTH_SET3@2                                             : Expert's Mage Cowl
3511: T5_HEAD_CLOTH_SET3@3                                             : Expert's Mage Cowl
3512: T6_HEAD_CLOTH_SET3                                               : Master's Mage Cowl
3513: T6_HEAD_CLOTH_SET3@1                                             : Master's Mage Cowl
3514: T6_HEAD_CLOTH_SET3@2                                             : Master's Mage Cowl
3515: T6_HEAD_CLOTH_SET3@3                                             : Master's Mage Cowl
3516: T7_HEAD_CLOTH_SET3                                               : Grandmaster's Mage Cowl
3517: T7_HEAD_CLOTH_SET3@1                                             : Grandmaster's Mage Cowl
3518: T7_HEAD_CLOTH_SET3@2                                             : Grandmaster's Mage Cowl
3519: T7_HEAD_CLOTH_SET3@3                                             : Grandmaster's Mage Cowl
3520: T8_HEAD_CLOTH_SET3                                               : Elder's Mage Cowl
3521: T8_HEAD_CLOTH_SET3@1                                             : Elder's Mage Cowl
3522: T8_HEAD_CLOTH_SET3@2                                             : Elder's Mage Cowl
3523: T8_HEAD_CLOTH_SET3@3                                             : Elder's Mage Cowl
3524: T4_ARMOR_CLOTH_SET3                                              : Adept's Mage Robe
3525: T4_ARMOR_CLOTH_SET3@1                                            : Adept's Mage Robe
3526: T4_ARMOR_CLOTH_SET3@2                                            : Adept's Mage Robe
3527: T4_ARMOR_CLOTH_SET3@3                                            : Adept's Mage Robe
3528: T5_ARMOR_CLOTH_SET3                                              : Expert's Mage Robe
3529: T5_ARMOR_CLOTH_SET3@1                                            : Expert's Mage Robe
3530: T5_ARMOR_CLOTH_SET3@2                                            : Expert's Mage Robe
3531: T5_ARMOR_CLOTH_SET3@3                                            : Expert's Mage Robe
3532: T6_ARMOR_CLOTH_SET3                                              : Master's Mage Robe
3533: T6_ARMOR_CLOTH_SET3@1                                            : Master's Mage Robe
3534: T6_ARMOR_CLOTH_SET3@2                                            : Master's Mage Robe
3535: T6_ARMOR_CLOTH_SET3@3                                            : Master's Mage Robe
3536: T7_ARMOR_CLOTH_SET3                                              : Grandmaster's Mage Robe
3537: T7_ARMOR_CLOTH_SET3@1                                            : Grandmaster's Mage Robe
3538: T7_ARMOR_CLOTH_SET3@2                                            : Grandmaster's Mage Robe
3539: T7_ARMOR_CLOTH_SET3@3                                            : Grandmaster's Mage Robe
3540: T8_ARMOR_CLOTH_SET3                                              : Elder's Mage Robe
3541: T8_ARMOR_CLOTH_SET3@1                                            : Elder's Mage Robe
3542: T8_ARMOR_CLOTH_SET3@2                                            : Elder's Mage Robe
3543: T8_ARMOR_CLOTH_SET3@3                                            : Elder's Mage Robe
3544: T4_SHOES_CLOTH_SET3                                              : Adept's Mage Sandals
3545: T4_SHOES_CLOTH_SET3@1                                            : Adept's Mage Sandals
3546: T4_SHOES_CLOTH_SET3@2                                            : Adept's Mage Sandals
3547: T4_SHOES_CLOTH_SET3@3                                            : Adept's Mage Sandals
3548: T5_SHOES_CLOTH_SET3                                              : Expert's Mage Sandals
3549: T5_SHOES_CLOTH_SET3@1                                            : Expert's Mage Sandals
3550: T5_SHOES_CLOTH_SET3@2                                            : Expert's Mage Sandals
3551: T5_SHOES_CLOTH_SET3@3                                            : Expert's Mage Sandals
3552: T6_SHOES_CLOTH_SET3                                              : Master's Mage Sandals
3553: T6_SHOES_CLOTH_SET3@1                                            : Master's Mage Sandals
3554: T6_SHOES_CLOTH_SET3@2                                            : Master's Mage Sandals
3555: T6_SHOES_CLOTH_SET3@3                                            : Master's Mage Sandals
3556: T7_SHOES_CLOTH_SET3                                              : Grandmaster's Mage Sandals
3557: T7_SHOES_CLOTH_SET3@1                                            : Grandmaster's Mage Sandals
3558: T7_SHOES_CLOTH_SET3@2                                            : Grandmaster's Mage Sandals
3559: T7_SHOES_CLOTH_SET3@3                                            : Grandmaster's Mage Sandals
3560: T8_SHOES_CLOTH_SET3                                              : Elder's Mage Sandals
3561: T8_SHOES_CLOTH_SET3@1                                            : Elder's Mage Sandals
3562: T8_SHOES_CLOTH_SET3@2                                            : Elder's Mage Sandals
3563: T8_SHOES_CLOTH_SET3@3                                            : Elder's Mage Sandals
3564: T4_HEAD_CLOTH_KEEPER                                             : Adept's Druid Cowl
3565: T4_HEAD_CLOTH_KEEPER@1                                           : Adept's Druid Cowl
3566: T4_HEAD_CLOTH_KEEPER@2                                           : Adept's Druid Cowl
3567: T4_HEAD_CLOTH_KEEPER@3                                           : Adept's Druid Cowl
3568: T5_HEAD_CLOTH_KEEPER                                             : Expert's Druid Cowl
3569: T5_HEAD_CLOTH_KEEPER@1                                           : Expert's Druid Cowl
3570: T5_HEAD_CLOTH_KEEPER@2                                           : Expert's Druid Cowl
3571: T5_HEAD_CLOTH_KEEPER@3                                           : Expert's Druid Cowl
3572: T6_HEAD_CLOTH_KEEPER                                             : Master's Druid Cowl
3573: T6_HEAD_CLOTH_KEEPER@1                                           : Master's Druid Cowl
3574: T6_HEAD_CLOTH_KEEPER@2                                           : Master's Druid Cowl
3575: T6_HEAD_CLOTH_KEEPER@3                                           : Master's Druid Cowl
3576: T7_HEAD_CLOTH_KEEPER                                             : Grandmaster's Druid Cowl
3577: T7_HEAD_CLOTH_KEEPER@1                                           : Grandmaster's Druid Cowl
3578: T7_HEAD_CLOTH_KEEPER@2                                           : Grandmaster's Druid Cowl
3579: T7_HEAD_CLOTH_KEEPER@3                                           : Grandmaster's Druid Cowl
3580: T8_HEAD_CLOTH_KEEPER                                             : Elder's Druid Cowl
3581: T8_HEAD_CLOTH_KEEPER@1                                           : Elder's Druid Cowl
3582: T8_HEAD_CLOTH_KEEPER@2                                           : Elder's Druid Cowl
3583: T8_HEAD_CLOTH_KEEPER@3                                           : Elder's Druid Cowl
3584: T4_ARMOR_CLOTH_KEEPER                                            : Adept's Druid Robe
3585: T4_ARMOR_CLOTH_KEEPER@1                                          : Adept's Druid Robe
3586: T4_ARMOR_CLOTH_KEEPER@2                                          : Adept's Druid Robe
3587: T4_ARMOR_CLOTH_KEEPER@3                                          : Adept's Druid Robe
3588: T5_ARMOR_CLOTH_KEEPER                                            : Expert's Druid Robe
3589: T5_ARMOR_CLOTH_KEEPER@1                                          : Expert's Druid Robe
3590: T5_ARMOR_CLOTH_KEEPER@2                                          : Expert's Druid Robe
3591: T5_ARMOR_CLOTH_KEEPER@3                                          : Expert's Druid Robe
3592: T6_ARMOR_CLOTH_KEEPER                                            : Master's Druid Robe
3593: T6_ARMOR_CLOTH_KEEPER@1                                          : Master's Druid Robe
3594: T6_ARMOR_CLOTH_KEEPER@2                                          : Master's Druid Robe
3595: T6_ARMOR_CLOTH_KEEPER@3                                          : Master's Druid Robe
3596: T7_ARMOR_CLOTH_KEEPER                                            : Grandmaster's Druid Robe
3597: T7_ARMOR_CLOTH_KEEPER@1                                          : Grandmaster's Druid Robe
3598: T7_ARMOR_CLOTH_KEEPER@2                                          : Grandmaster's Druid Robe
3599: T7_ARMOR_CLOTH_KEEPER@3                                          : Grandmaster's Druid Robe
3600: T8_ARMOR_CLOTH_KEEPER                                            : Elder's Druid Robe
3601: T8_ARMOR_CLOTH_KEEPER@1                                          : Elder's Druid Robe
3602: T8_ARMOR_CLOTH_KEEPER@2                                          : Elder's Druid Robe
3603: T8_ARMOR_CLOTH_KEEPER@3                                          : Elder's Druid Robe
3604: T4_SHOES_CLOTH_KEEPER                                            : Adept's Druid Sandals
3605: T4_SHOES_CLOTH_KEEPER@1                                          : Adept's Druid Sandals
3606: T4_SHOES_CLOTH_KEEPER@2                                          : Adept's Druid Sandals
3607: T4_SHOES_CLOTH_KEEPER@3                                          : Adept's Druid Sandals
3608: T5_SHOES_CLOTH_KEEPER                                            : Expert's Druid Sandals
3609: T5_SHOES_CLOTH_KEEPER@1                                          : Expert's Druid Sandals
3610: T5_SHOES_CLOTH_KEEPER@2                                          : Expert's Druid Sandals
3611: T5_SHOES_CLOTH_KEEPER@3                                          : Expert's Druid Sandals
3612: T6_SHOES_CLOTH_KEEPER                                            : Master's Druid Sandals
3613: T6_SHOES_CLOTH_KEEPER@1                                          : Master's Druid Sandals
3614: T6_SHOES_CLOTH_KEEPER@2                                          : Master's Druid Sandals
3615: T6_SHOES_CLOTH_KEEPER@3                                          : Master's Druid Sandals
3616: T7_SHOES_CLOTH_KEEPER                                            : Grandmaster's Druid Sandals
3617: T7_SHOES_CLOTH_KEEPER@1                                          : Grandmaster's Druid Sandals
3618: T7_SHOES_CLOTH_KEEPER@2                                          : Grandmaster's Druid Sandals
3619: T7_SHOES_CLOTH_KEEPER@3                                          : Grandmaster's Druid Sandals
3620: T8_SHOES_CLOTH_KEEPER                                            : Elder's Druid Sandals
3621: T8_SHOES_CLOTH_KEEPER@1                                          : Elder's Druid Sandals
3622: T8_SHOES_CLOTH_KEEPER@2                                          : Elder's Druid Sandals
3623: T8_SHOES_CLOTH_KEEPER@3                                          : Elder's Druid Sandals
3624: T4_HEAD_CLOTH_HELL                                               : Adept's Fiend Cowl
3625: T4_HEAD_CLOTH_HELL@1                                             : Adept's Fiend Cowl
3626: T4_HEAD_CLOTH_HELL@2                                             : Adept's Fiend Cowl
3627: T4_HEAD_CLOTH_HELL@3                                             : Adept's Fiend Cowl
3628: T5_HEAD_CLOTH_HELL                                               : Expert's Fiend Cowl
3629: T5_HEAD_CLOTH_HELL@1                                             : Expert's Fiend Cowl
3630: T5_HEAD_CLOTH_HELL@2                                             : Expert's Fiend Cowl
3631: T5_HEAD_CLOTH_HELL@3                                             : Expert's Fiend Cowl
3632: T6_HEAD_CLOTH_HELL                                               : Master's Fiend Cowl
3633: T6_HEAD_CLOTH_HELL@1                                             : Master's Fiend Cowl
3634: T6_HEAD_CLOTH_HELL@2                                             : Master's Fiend Cowl
3635: T6_HEAD_CLOTH_HELL@3                                             : Master's Fiend Cowl
3636: T7_HEAD_CLOTH_HELL                                               : Grandmaster's Fiend Cowl
3637: T7_HEAD_CLOTH_HELL@1                                             : Grandmaster's Fiend Cowl
3638: T7_HEAD_CLOTH_HELL@2                                             : Grandmaster's Fiend Cowl
3639: T7_HEAD_CLOTH_HELL@3                                             : Grandmaster's Fiend Cowl
3640: T8_HEAD_CLOTH_HELL                                               : Elder's Fiend Cowl
3641: T8_HEAD_CLOTH_HELL@1                                             : Elder's Fiend Cowl
3642: T8_HEAD_CLOTH_HELL@2                                             : Elder's Fiend Cowl
3643: T8_HEAD_CLOTH_HELL@3                                             : Elder's Fiend Cowl
3644: T4_ARMOR_CLOTH_HELL                                              : Adept's Fiend Robe
3645: T4_ARMOR_CLOTH_HELL@1                                            : Adept's Fiend Robe
3646: T4_ARMOR_CLOTH_HELL@2                                            : Adept's Fiend Robe
3647: T4_ARMOR_CLOTH_HELL@3                                            : Adept's Fiend Robe
3648: T5_ARMOR_CLOTH_HELL                                              : Expert's Fiend Robe
3649: T5_ARMOR_CLOTH_HELL@1                                            : Expert's Fiend Robe
3650: T5_ARMOR_CLOTH_HELL@2                                            : Expert's Fiend Robe
3651: T5_ARMOR_CLOTH_HELL@3                                            : Expert's Fiend Robe
3652: T6_ARMOR_CLOTH_HELL                                              : Master's Fiend Robe
3653: T6_ARMOR_CLOTH_HELL@1                                            : Master's Fiend Robe
3654: T6_ARMOR_CLOTH_HELL@2                                            : Master's Fiend Robe
3655: T6_ARMOR_CLOTH_HELL@3                                            : Master's Fiend Robe
3656: T7_ARMOR_CLOTH_HELL                                              : Grandmaster's Fiend Robe
3657: T7_ARMOR_CLOTH_HELL@1                                            : Grandmaster's Fiend Robe
3658: T7_ARMOR_CLOTH_HELL@2                                            : Grandmaster's Fiend Robe
3659: T7_ARMOR_CLOTH_HELL@3                                            : Grandmaster's Fiend Robe
3660: T8_ARMOR_CLOTH_HELL                                              : Elder's Fiend Robe
3661: T8_ARMOR_CLOTH_HELL@1                                            : Elder's Fiend Robe
3662: T8_ARMOR_CLOTH_HELL@2                                            : Elder's Fiend Robe
3663: T8_ARMOR_CLOTH_HELL@3                                            : Elder's Fiend Robe
3664: T4_SHOES_CLOTH_HELL                                              : Adept's Fiend Sandals
3665: T4_SHOES_CLOTH_HELL@1                                            : Adept's Fiend Sandals
3666: T4_SHOES_CLOTH_HELL@2                                            : Adept's Fiend Sandals
3667: T4_SHOES_CLOTH_HELL@3                                            : Adept's Fiend Sandals
3668: T5_SHOES_CLOTH_HELL                                              : Expert's Fiend Sandals
3669: T5_SHOES_CLOTH_HELL@1                                            : Expert's Fiend Sandals
3670: T5_SHOES_CLOTH_HELL@2                                            : Expert's Fiend Sandals
3671: T5_SHOES_CLOTH_HELL@3                                            : Expert's Fiend Sandals
3672: T6_SHOES_CLOTH_HELL                                              : Master's Fiend Sandals
3673: T6_SHOES_CLOTH_HELL@1                                            : Master's Fiend Sandals
3674: T6_SHOES_CLOTH_HELL@2                                            : Master's Fiend Sandals
3675: T6_SHOES_CLOTH_HELL@3                                            : Master's Fiend Sandals
3676: T7_SHOES_CLOTH_HELL                                              : Grandmaster's Fiend Sandals
3677: T7_SHOES_CLOTH_HELL@1                                            : Grandmaster's Fiend Sandals
3678: T7_SHOES_CLOTH_HELL@2                                            : Grandmaster's Fiend Sandals
3679: T7_SHOES_CLOTH_HELL@3                                            : Grandmaster's Fiend Sandals
3680: T8_SHOES_CLOTH_HELL                                              : Elder's Fiend Sandals
3681: T8_SHOES_CLOTH_HELL@1                                            : Elder's Fiend Sandals
3682: T8_SHOES_CLOTH_HELL@2                                            : Elder's Fiend Sandals
3683: T8_SHOES_CLOTH_HELL@3                                            : Elder's Fiend Sandals
3684: T4_HEAD_CLOTH_MORGANA                                            : Adept's Cultist Cowl
3685: T4_HEAD_CLOTH_MORGANA@1                                          : Adept's Cultist Cowl
3686: T4_HEAD_CLOTH_MORGANA@2                                          : Adept's Cultist Cowl
3687: T4_HEAD_CLOTH_MORGANA@3                                          : Adept's Cultist Cowl
3688: T5_HEAD_CLOTH_MORGANA                                            : Expert's Cultist Cowl
3689: T5_HEAD_CLOTH_MORGANA@1                                          : Expert's Cultist Cowl
3690: T5_HEAD_CLOTH_MORGANA@2                                          : Expert's Cultist Cowl
3691: T5_HEAD_CLOTH_MORGANA@3                                          : Expert's Cultist Cowl
3692: T6_HEAD_CLOTH_MORGANA                                            : Master's Cultist Cowl
3693: T6_HEAD_CLOTH_MORGANA@1                                          : Master's Cultist Cowl
3694: T6_HEAD_CLOTH_MORGANA@2                                          : Master's Cultist Cowl
3695: T6_HEAD_CLOTH_MORGANA@3                                          : Master's Cultist Cowl
3696: T7_HEAD_CLOTH_MORGANA                                            : Grandmaster's Cultist Cowl
3697: T7_HEAD_CLOTH_MORGANA@1                                          : Grandmaster's Cultist Cowl
3698: T7_HEAD_CLOTH_MORGANA@2                                          : Grandmaster's Cultist Cowl
3699: T7_HEAD_CLOTH_MORGANA@3                                          : Grandmaster's Cultist Cowl
3700: T8_HEAD_CLOTH_MORGANA                                            : Elder's Cultist Cowl
3701: T8_HEAD_CLOTH_MORGANA@1                                          : Elder's Cultist Cowl
3702: T8_HEAD_CLOTH_MORGANA@2                                          : Elder's Cultist Cowl
3703: T8_HEAD_CLOTH_MORGANA@3                                          : Elder's Cultist Cowl
3704: T4_ARMOR_CLOTH_MORGANA                                           : Adept's Cultist Robe
3705: T4_ARMOR_CLOTH_MORGANA@1                                         : Adept's Cultist Robe
3706: T4_ARMOR_CLOTH_MORGANA@2                                         : Adept's Cultist Robe
3707: T4_ARMOR_CLOTH_MORGANA@3                                         : Adept's Cultist Robe
3708: T5_ARMOR_CLOTH_MORGANA                                           : Expert's Cultist Robe
3709: T5_ARMOR_CLOTH_MORGANA@1                                         : Expert's Cultist Robe
3710: T5_ARMOR_CLOTH_MORGANA@2                                         : Expert's Cultist Robe
3711: T5_ARMOR_CLOTH_MORGANA@3                                         : Expert's Cultist Robe
3712: T6_ARMOR_CLOTH_MORGANA                                           : Master's Cultist Robe
3713: T6_ARMOR_CLOTH_MORGANA@1                                         : Master's Cultist Robe
3714: T6_ARMOR_CLOTH_MORGANA@2                                         : Master's Cultist Robe
3715: T6_ARMOR_CLOTH_MORGANA@3                                         : Master's Cultist Robe
3716: T7_ARMOR_CLOTH_MORGANA                                           : Grandmaster's Cultist Robe
3717: T7_ARMOR_CLOTH_MORGANA@1                                         : Grandmaster's Cultist Robe
3718: T7_ARMOR_CLOTH_MORGANA@2                                         : Grandmaster's Cultist Robe
3719: T7_ARMOR_CLOTH_MORGANA@3                                         : Grandmaster's Cultist Robe
3720: T8_ARMOR_CLOTH_MORGANA                                           : Elder's Cultist Robe
3721: T8_ARMOR_CLOTH_MORGANA@1                                         : Elder's Cultist Robe
3722: T8_ARMOR_CLOTH_MORGANA@2                                         : Elder's Cultist Robe
3723: T8_ARMOR_CLOTH_MORGANA@3                                         : Elder's Cultist Robe
3724: T4_SHOES_CLOTH_MORGANA                                           : Adept's Cultist Sandals
3725: T4_SHOES_CLOTH_MORGANA@1                                         : Adept's Cultist Sandals
3726: T4_SHOES_CLOTH_MORGANA@2                                         : Adept's Cultist Sandals
3727: T4_SHOES_CLOTH_MORGANA@3                                         : Adept's Cultist Sandals
3728: T5_SHOES_CLOTH_MORGANA                                           : Expert's Cultist Sandals
3729: T5_SHOES_CLOTH_MORGANA@1                                         : Expert's Cultist Sandals
3730: T5_SHOES_CLOTH_MORGANA@2                                         : Expert's Cultist Sandals
3731: T5_SHOES_CLOTH_MORGANA@3                                         : Expert's Cultist Sandals
3732: T6_SHOES_CLOTH_MORGANA                                           : Master's Cultist Sandals
3733: T6_SHOES_CLOTH_MORGANA@1                                         : Master's Cultist Sandals
3734: T6_SHOES_CLOTH_MORGANA@2                                         : Master's Cultist Sandals
3735: T6_SHOES_CLOTH_MORGANA@3                                         : Master's Cultist Sandals
3736: T7_SHOES_CLOTH_MORGANA                                           : Grandmaster's Cultist Sandals
3737: T7_SHOES_CLOTH_MORGANA@1                                         : Grandmaster's Cultist Sandals
3738: T7_SHOES_CLOTH_MORGANA@2                                         : Grandmaster's Cultist Sandals
3739: T7_SHOES_CLOTH_MORGANA@3                                         : Grandmaster's Cultist Sandals
3740: T8_SHOES_CLOTH_MORGANA                                           : Elder's Cultist Sandals
3741: T8_SHOES_CLOTH_MORGANA@1                                         : Elder's Cultist Sandals
3742: T8_SHOES_CLOTH_MORGANA@2                                         : Elder's Cultist Sandals
3743: T8_SHOES_CLOTH_MORGANA@3                                         : Elder's Cultist Sandals
3744: T4_HEAD_CLOTH_AVALON                                             : Adept's Cowl of Purity
3745: T4_HEAD_CLOTH_AVALON@1                                           : Adept's Cowl of Purity
3746: T4_HEAD_CLOTH_AVALON@2                                           : Adept's Cowl of Purity
3747: T4_HEAD_CLOTH_AVALON@3                                           : Adept's Cowl of Purity
3748: T5_HEAD_CLOTH_AVALON                                             : Expert's Cowl of Purity
3749: T5_HEAD_CLOTH_AVALON@1                                           : Expert's Cowl of Purity
3750: T5_HEAD_CLOTH_AVALON@2                                           : Expert's Cowl of Purity
3751: T5_HEAD_CLOTH_AVALON@3                                           : Expert's Cowl of Purity
3752: T6_HEAD_CLOTH_AVALON                                             : Master's Cowl of Purity
3753: T6_HEAD_CLOTH_AVALON@1                                           : Master's Cowl of Purity
3754: T6_HEAD_CLOTH_AVALON@2                                           : Master's Cowl of Purity
3755: T6_HEAD_CLOTH_AVALON@3                                           : Master's Cowl of Purity
3756: T7_HEAD_CLOTH_AVALON                                             : Grandmaster's Cowl of Purity
3757: T7_HEAD_CLOTH_AVALON@1                                           : Grandmaster's Cowl of Purity
3758: T7_HEAD_CLOTH_AVALON@2                                           : Grandmaster's Cowl of Purity
3759: T7_HEAD_CLOTH_AVALON@3                                           : Grandmaster's Cowl of Purity
3760: T8_HEAD_CLOTH_AVALON                                             : Elder's Cowl of Purity
3761: T8_HEAD_CLOTH_AVALON@1                                           : Elder's Cowl of Purity
3762: T8_HEAD_CLOTH_AVALON@2                                           : Elder's Cowl of Purity
3763: T8_HEAD_CLOTH_AVALON@3                                           : Elder's Cowl of Purity
3764: T4_ARMOR_CLOTH_AVALON                                            : Adept's Robe of Purity
3765: T4_ARMOR_CLOTH_AVALON@1                                          : Adept's Robe of Purity
3766: T4_ARMOR_CLOTH_AVALON@2                                          : Adept's Robe of Purity
3767: T4_ARMOR_CLOTH_AVALON@3                                          : Adept's Robe of Purity
3768: T5_ARMOR_CLOTH_AVALON                                            : Expert's Robe of Purity
3769: T5_ARMOR_CLOTH_AVALON@1                                          : Expert's Robe of Purity
3770: T5_ARMOR_CLOTH_AVALON@2                                          : Expert's Robe of Purity
3771: T5_ARMOR_CLOTH_AVALON@3                                          : Expert's Robe of Purity
3772: T6_ARMOR_CLOTH_AVALON                                            : Master's Robe of Purity
3773: T6_ARMOR_CLOTH_AVALON@1                                          : Master's Robe of Purity
3774: T6_ARMOR_CLOTH_AVALON@2                                          : Master's Robe of Purity
3775: T6_ARMOR_CLOTH_AVALON@3                                          : Master's Robe of Purity
3776: T7_ARMOR_CLOTH_AVALON                                            : Grandmaster's Robe of Purity
3777: T7_ARMOR_CLOTH_AVALON@1                                          : Grandmaster's Robe of Purity
3778: T7_ARMOR_CLOTH_AVALON@2                                          : Grandmaster's Robe of Purity
3779: T7_ARMOR_CLOTH_AVALON@3                                          : Grandmaster's Robe of Purity
3780: T8_ARMOR_CLOTH_AVALON                                            : Elder's Robe of Purity
3781: T8_ARMOR_CLOTH_AVALON@1                                          : Elder's Robe of Purity
3782: T8_ARMOR_CLOTH_AVALON@2                                          : Elder's Robe of Purity
3783: T8_ARMOR_CLOTH_AVALON@3                                          : Elder's Robe of Purity
3784: T4_SHOES_CLOTH_AVALON                                            : Adept's Sandals of Purity
3785: T4_SHOES_CLOTH_AVALON@1                                          : Adept's Sandals of Purity
3786: T4_SHOES_CLOTH_AVALON@2                                          : Adept's Sandals of Purity
3787: T4_SHOES_CLOTH_AVALON@3                                          : Adept's Sandals of Purity
3788: T5_SHOES_CLOTH_AVALON                                            : Expert's Sandals of Purity
3789: T5_SHOES_CLOTH_AVALON@1                                          : Expert's Sandals of Purity
3790: T5_SHOES_CLOTH_AVALON@2                                          : Expert's Sandals of Purity
3791: T5_SHOES_CLOTH_AVALON@3                                          : Expert's Sandals of Purity
3792: T6_SHOES_CLOTH_AVALON                                            : Master's Sandals of Purity
3793: T6_SHOES_CLOTH_AVALON@1                                          : Master's Sandals of Purity
3794: T6_SHOES_CLOTH_AVALON@2                                          : Master's Sandals of Purity
3795: T6_SHOES_CLOTH_AVALON@3                                          : Master's Sandals of Purity
3796: T7_SHOES_CLOTH_AVALON                                            : Grandmaster's Sandals of Purity
3797: T7_SHOES_CLOTH_AVALON@1                                          : Grandmaster's Sandals of Purity
3798: T7_SHOES_CLOTH_AVALON@2                                          : Grandmaster's Sandals of Purity
3799: T7_SHOES_CLOTH_AVALON@3                                          : Grandmaster's Sandals of Purity
3800: T8_SHOES_CLOTH_AVALON                                            : Elder's Sandals of Purity
3801: T8_SHOES_CLOTH_AVALON@1                                          : Elder's Sandals of Purity
3802: T8_SHOES_CLOTH_AVALON@2                                          : Elder's Sandals of Purity
3803: T8_SHOES_CLOTH_AVALON@3                                          : Elder's Sandals of Purity
3804: T4_HEAD_CLOTH_ROYAL                                              : Adept's Royal Cowl
3805: T4_HEAD_CLOTH_ROYAL@1                                            : Adept's Royal Cowl
3806: T4_HEAD_CLOTH_ROYAL@2                                            : Adept's Royal Cowl
3807: T4_HEAD_CLOTH_ROYAL@3                                            : Adept's Royal Cowl
3808: T5_HEAD_CLOTH_ROYAL                                              : Expert's Royal Cowl
3809: T5_HEAD_CLOTH_ROYAL@1                                            : Expert's Royal Cowl
3810: T5_HEAD_CLOTH_ROYAL@2                                            : Expert's Royal Cowl
3811: T5_HEAD_CLOTH_ROYAL@3                                            : Expert's Royal Cowl
3812: T6_HEAD_CLOTH_ROYAL                                              : Master's Royal Cowl
3813: T6_HEAD_CLOTH_ROYAL@1                                            : Master's Royal Cowl
3814: T6_HEAD_CLOTH_ROYAL@2                                            : Master's Royal Cowl
3815: T6_HEAD_CLOTH_ROYAL@3                                            : Master's Royal Cowl
3816: T7_HEAD_CLOTH_ROYAL                                              : Grandmaster's Royal Cowl
3817: T7_HEAD_CLOTH_ROYAL@1                                            : Grandmaster's Royal Cowl
3818: T7_HEAD_CLOTH_ROYAL@2                                            : Grandmaster's Royal Cowl
3819: T7_HEAD_CLOTH_ROYAL@3                                            : Grandmaster's Royal Cowl
3820: T8_HEAD_CLOTH_ROYAL                                              : Elder's Royal Cowl
3821: T8_HEAD_CLOTH_ROYAL@1                                            : Elder's Royal Cowl
3822: T8_HEAD_CLOTH_ROYAL@2                                            : Elder's Royal Cowl
3823: T8_HEAD_CLOTH_ROYAL@3                                            : Elder's Royal Cowl
3824: T4_ARMOR_CLOTH_ROYAL                                             : Adept's Royal Robe
3825: T4_ARMOR_CLOTH_ROYAL@1                                           : Adept's Royal Robe
3826: T4_ARMOR_CLOTH_ROYAL@2                                           : Adept's Royal Robe
3827: T4_ARMOR_CLOTH_ROYAL@3                                           : Adept's Royal Robe
3828: T5_ARMOR_CLOTH_ROYAL                                             : Expert's Royal Robe
3829: T5_ARMOR_CLOTH_ROYAL@1                                           : Expert's Royal Robe
3830: T5_ARMOR_CLOTH_ROYAL@2                                           : Expert's Royal Robe
3831: T5_ARMOR_CLOTH_ROYAL@3                                           : Expert's Royal Robe
3832: T6_ARMOR_CLOTH_ROYAL                                             : Master's Royal Robe
3833: T6_ARMOR_CLOTH_ROYAL@1                                           : Master's Royal Robe
3834: T6_ARMOR_CLOTH_ROYAL@2                                           : Master's Royal Robe
3835: T6_ARMOR_CLOTH_ROYAL@3                                           : Master's Royal Robe
3836: T7_ARMOR_CLOTH_ROYAL                                             : Grandmaster's Royal Robe
3837: T7_ARMOR_CLOTH_ROYAL@1                                           : Grandmaster's Royal Robe
3838: T7_ARMOR_CLOTH_ROYAL@2                                           : Grandmaster's Royal Robe
3839: T7_ARMOR_CLOTH_ROYAL@3                                           : Grandmaster's Royal Robe
3840: T8_ARMOR_CLOTH_ROYAL                                             : Elder's Royal Robe
3841: T8_ARMOR_CLOTH_ROYAL@1                                           : Elder's Royal Robe
3842: T8_ARMOR_CLOTH_ROYAL@2                                           : Elder's Royal Robe
3843: T8_ARMOR_CLOTH_ROYAL@3                                           : Elder's Royal Robe
3844: T4_SHOES_CLOTH_ROYAL                                             : Adept's Royal Sandals
3845: T4_SHOES_CLOTH_ROYAL@1                                           : Adept's Royal Sandals
3846: T4_SHOES_CLOTH_ROYAL@2                                           : Adept's Royal Sandals
3847: T4_SHOES_CLOTH_ROYAL@3                                           : Adept's Royal Sandals
3848: T5_SHOES_CLOTH_ROYAL                                             : Expert's Royal Sandals
3849: T5_SHOES_CLOTH_ROYAL@1                                           : Expert's Royal Sandals
3850: T5_SHOES_CLOTH_ROYAL@2                                           : Expert's Royal Sandals
3851: T5_SHOES_CLOTH_ROYAL@3                                           : Expert's Royal Sandals
3852: T6_SHOES_CLOTH_ROYAL                                             : Master's Royal Sandals
3853: T6_SHOES_CLOTH_ROYAL@1                                           : Master's Royal Sandals
3854: T6_SHOES_CLOTH_ROYAL@2                                           : Master's Royal Sandals
3855: T6_SHOES_CLOTH_ROYAL@3                                           : Master's Royal Sandals
3856: T7_SHOES_CLOTH_ROYAL                                             : Grandmaster's Royal Sandals
3857: T7_SHOES_CLOTH_ROYAL@1                                           : Grandmaster's Royal Sandals
3858: T7_SHOES_CLOTH_ROYAL@2                                           : Grandmaster's Royal Sandals
3859: T7_SHOES_CLOTH_ROYAL@3                                           : Grandmaster's Royal Sandals
3860: T8_SHOES_CLOTH_ROYAL                                             : Elder's Royal Sandals
3861: T8_SHOES_CLOTH_ROYAL@1                                           : Elder's Royal Sandals
3862: T8_SHOES_CLOTH_ROYAL@2                                           : Elder's Royal Sandals
3863: T8_SHOES_CLOTH_ROYAL@3                                           : Elder's Royal Sandals
3864: T4_HEAD_LEATHER_ROYAL                                            : Adept's Royal Hood
3865: T4_HEAD_LEATHER_ROYAL@1                                          : Adept's Royal Hood
3866: T4_HEAD_LEATHER_ROYAL@2                                          : Adept's Royal Hood
3867: T4_HEAD_LEATHER_ROYAL@3                                          : Adept's Royal Hood
3868: T5_HEAD_LEATHER_ROYAL                                            : Expert's Royal Hood
3869: T5_HEAD_LEATHER_ROYAL@1                                          : Expert's Royal Hood
3870: T5_HEAD_LEATHER_ROYAL@2                                          : Expert's Royal Hood
3871: T5_HEAD_LEATHER_ROYAL@3                                          : Expert's Royal Hood
3872: T6_HEAD_LEATHER_ROYAL                                            : Master's Royal Hood
3873: T6_HEAD_LEATHER_ROYAL@1                                          : Master's Royal Hood
3874: T6_HEAD_LEATHER_ROYAL@2                                          : Master's Royal Hood
3875: T6_HEAD_LEATHER_ROYAL@3                                          : Master's Royal Hood
3876: T7_HEAD_LEATHER_ROYAL                                            : Grandmaster's Royal Hood
3877: T7_HEAD_LEATHER_ROYAL@1                                          : Grandmaster's Royal Hood
3878: T7_HEAD_LEATHER_ROYAL@2                                          : Grandmaster's Royal Hood
3879: T7_HEAD_LEATHER_ROYAL@3                                          : Grandmaster's Royal Hood
3880: T8_HEAD_LEATHER_ROYAL                                            : Elder's Royal Hood
3881: T8_HEAD_LEATHER_ROYAL@1                                          : Elder's Royal Hood
3882: T8_HEAD_LEATHER_ROYAL@2                                          : Elder's Royal Hood
3883: T8_HEAD_LEATHER_ROYAL@3                                          : Elder's Royal Hood
3884: T4_ARMOR_LEATHER_ROYAL                                           : Adept's Royal Jacket
3885: T4_ARMOR_LEATHER_ROYAL@1                                         : Adept's Royal Jacket
3886: T4_ARMOR_LEATHER_ROYAL@2                                         : Adept's Royal Jacket
3887: T4_ARMOR_LEATHER_ROYAL@3                                         : Adept's Royal Jacket
3888: T5_ARMOR_LEATHER_ROYAL                                           : Expert's Royal Jacket
3889: T5_ARMOR_LEATHER_ROYAL@1                                         : Expert's Royal Jacket
3890: T5_ARMOR_LEATHER_ROYAL@2                                         : Expert's Royal Jacket
3891: T5_ARMOR_LEATHER_ROYAL@3                                         : Expert's Royal Jacket
3892: T6_ARMOR_LEATHER_ROYAL                                           : Master's Royal Jacket
3893: T6_ARMOR_LEATHER_ROYAL@1                                         : Master's Royal Jacket
3894: T6_ARMOR_LEATHER_ROYAL@2                                         : Master's Royal Jacket
3895: T6_ARMOR_LEATHER_ROYAL@3                                         : Master's Royal Jacket
3896: T7_ARMOR_LEATHER_ROYAL                                           : Grandmaster's Royal Jacket
3897: T7_ARMOR_LEATHER_ROYAL@1                                         : Grandmaster's Royal Jacket
3898: T7_ARMOR_LEATHER_ROYAL@2                                         : Grandmaster's Royal Jacket
3899: T7_ARMOR_LEATHER_ROYAL@3                                         : Grandmaster's Royal Jacket
3900: T8_ARMOR_LEATHER_ROYAL                                           : Elder's Royal Jacket
3901: T8_ARMOR_LEATHER_ROYAL@1                                         : Elder's Royal Jacket
3902: T8_ARMOR_LEATHER_ROYAL@2                                         : Elder's Royal Jacket
3903: T8_ARMOR_LEATHER_ROYAL@3                                         : Elder's Royal Jacket
3904: T4_SHOES_LEATHER_ROYAL                                           : Adept's Royal Shoes
3905: T4_SHOES_LEATHER_ROYAL@1                                         : Adept's Royal Shoes
3906: T4_SHOES_LEATHER_ROYAL@2                                         : Adept's Royal Shoes
3907: T4_SHOES_LEATHER_ROYAL@3                                         : Adept's Royal Shoes
3908: T5_SHOES_LEATHER_ROYAL                                           : Expert's Royal Shoes
3909: T5_SHOES_LEATHER_ROYAL@1                                         : Expert's Royal Shoes
3910: T5_SHOES_LEATHER_ROYAL@2                                         : Expert's Royal Shoes
3911: T5_SHOES_LEATHER_ROYAL@3                                         : Expert's Royal Shoes
3912: T6_SHOES_LEATHER_ROYAL                                           : Master's Royal Shoes
3913: T6_SHOES_LEATHER_ROYAL@1                                         : Master's Royal Shoes
3914: T6_SHOES_LEATHER_ROYAL@2                                         : Master's Royal Shoes
3915: T6_SHOES_LEATHER_ROYAL@3                                         : Master's Royal Shoes
3916: T7_SHOES_LEATHER_ROYAL                                           : Grandmaster's Royal Shoes
3917: T7_SHOES_LEATHER_ROYAL@1                                         : Grandmaster's Royal Shoes
3918: T7_SHOES_LEATHER_ROYAL@2                                         : Grandmaster's Royal Shoes
3919: T7_SHOES_LEATHER_ROYAL@3                                         : Grandmaster's Royal Shoes
3920: T8_SHOES_LEATHER_ROYAL                                           : Elder's Royal Shoes
3921: T8_SHOES_LEATHER_ROYAL@1                                         : Elder's Royal Shoes
3922: T8_SHOES_LEATHER_ROYAL@2                                         : Elder's Royal Shoes
3923: T8_SHOES_LEATHER_ROYAL@3                                         : Elder's Royal Shoes
3924: T4_HEAD_PLATE_ROYAL                                              : Adept's Royal Helmet
3925: T4_HEAD_PLATE_ROYAL@1                                            : Adept's Royal Helmet
3926: T4_HEAD_PLATE_ROYAL@2                                            : Adept's Royal Helmet
3927: T4_HEAD_PLATE_ROYAL@3                                            : Adept's Royal Helmet
3928: T5_HEAD_PLATE_ROYAL                                              : Expert's Royal Helmet
3929: T5_HEAD_PLATE_ROYAL@1                                            : Expert's Royal Helmet
3930: T5_HEAD_PLATE_ROYAL@2                                            : Expert's Royal Helmet
3931: T5_HEAD_PLATE_ROYAL@3                                            : Expert's Royal Helmet
3932: T6_HEAD_PLATE_ROYAL                                              : Master's Royal Helmet
3933: T6_HEAD_PLATE_ROYAL@1                                            : Master's Royal Helmet
3934: T6_HEAD_PLATE_ROYAL@2                                            : Master's Royal Helmet
3935: T6_HEAD_PLATE_ROYAL@3                                            : Master's Royal Helmet
3936: T7_HEAD_PLATE_ROYAL                                              : Grandmaster's Royal Helmet
3937: T7_HEAD_PLATE_ROYAL@1                                            : Grandmaster's Royal Helmet
3938: T7_HEAD_PLATE_ROYAL@2                                            : Grandmaster's Royal Helmet
3939: T7_HEAD_PLATE_ROYAL@3                                            : Grandmaster's Royal Helmet
3940: T8_HEAD_PLATE_ROYAL                                              : Elder's Royal Helmet
3941: T8_HEAD_PLATE_ROYAL@1                                            : Elder's Royal Helmet
3942: T8_HEAD_PLATE_ROYAL@2                                            : Elder's Royal Helmet
3943: T8_HEAD_PLATE_ROYAL@3                                            : Elder's Royal Helmet
3944: T4_ARMOR_PLATE_ROYAL                                             : Adept's Royal Armor
3945: T4_ARMOR_PLATE_ROYAL@1                                           : Adept's Royal Armor
3946: T4_ARMOR_PLATE_ROYAL@2                                           : Adept's Royal Armor
3947: T4_ARMOR_PLATE_ROYAL@3                                           : Adept's Royal Armor
3948: T5_ARMOR_PLATE_ROYAL                                             : Expert's Royal Armor
3949: T5_ARMOR_PLATE_ROYAL@1                                           : Expert's Royal Armor
3950: T5_ARMOR_PLATE_ROYAL@2                                           : Expert's Royal Armor
3951: T5_ARMOR_PLATE_ROYAL@3                                           : Expert's Royal Armor
3952: T6_ARMOR_PLATE_ROYAL                                             : Master's Royal Armor
3953: T6_ARMOR_PLATE_ROYAL@1                                           : Master's Royal Armor
3954: T6_ARMOR_PLATE_ROYAL@2                                           : Master's Royal Armor
3955: T6_ARMOR_PLATE_ROYAL@3                                           : Master's Royal Armor
3956: T7_ARMOR_PLATE_ROYAL                                             : Grandmaster's Royal Armor
3957: T7_ARMOR_PLATE_ROYAL@1                                           : Grandmaster's Royal Armor
3958: T7_ARMOR_PLATE_ROYAL@2                                           : Grandmaster's Royal Armor
3959: T7_ARMOR_PLATE_ROYAL@3                                           : Grandmaster's Royal Armor
3960: T8_ARMOR_PLATE_ROYAL                                             : Elder's Royal Armor
3961: T8_ARMOR_PLATE_ROYAL@1                                           : Elder's Royal Armor
3962: T8_ARMOR_PLATE_ROYAL@2                                           : Elder's Royal Armor
3963: T8_ARMOR_PLATE_ROYAL@3                                           : Elder's Royal Armor
3964: T4_SHOES_PLATE_ROYAL                                             : Adept's Royal Boots
3965: T4_SHOES_PLATE_ROYAL@1                                           : Adept's Royal Boots
3966: T4_SHOES_PLATE_ROYAL@2                                           : Adept's Royal Boots
3967: T4_SHOES_PLATE_ROYAL@3                                           : Adept's Royal Boots
3968: T5_SHOES_PLATE_ROYAL                                             : Expert's Royal Boots
3969: T5_SHOES_PLATE_ROYAL@1                                           : Expert's Royal Boots
3970: T5_SHOES_PLATE_ROYAL@2                                           : Expert's Royal Boots
3971: T5_SHOES_PLATE_ROYAL@3                                           : Expert's Royal Boots
3972: T6_SHOES_PLATE_ROYAL                                             : Master's Royal Boots
3973: T6_SHOES_PLATE_ROYAL@1                                           : Master's Royal Boots
3974: T6_SHOES_PLATE_ROYAL@2                                           : Master's Royal Boots
3975: T6_SHOES_PLATE_ROYAL@3                                           : Master's Royal Boots
3976: T7_SHOES_PLATE_ROYAL                                             : Grandmaster's Royal Boots
3977: T7_SHOES_PLATE_ROYAL@1                                           : Grandmaster's Royal Boots
3978: T7_SHOES_PLATE_ROYAL@2                                           : Grandmaster's Royal Boots
3979: T7_SHOES_PLATE_ROYAL@3                                           : Grandmaster's Royal Boots
3980: T8_SHOES_PLATE_ROYAL                                             : Elder's Royal Boots
3981: T8_SHOES_PLATE_ROYAL@1                                           : Elder's Royal Boots
3982: T8_SHOES_PLATE_ROYAL@2                                           : Elder's Royal Boots
3983: T8_SHOES_PLATE_ROYAL@3                                           : Elder's Royal Boots
3984: T4_HEAD_GATHERER_FIBER                                           : Adept's Harvester Cap
3985: T4_HEAD_GATHERER_FIBER@1                                         : Adept's Harvester Cap
3986: T4_HEAD_GATHERER_FIBER@2                                         : Adept's Harvester Cap
3987: T4_HEAD_GATHERER_FIBER@3                                         : Adept's Harvester Cap
3988: T5_HEAD_GATHERER_FIBER                                           : Expert's Harvester Cap
3989: T5_HEAD_GATHERER_FIBER@1                                         : Expert's Harvester Cap
3990: T5_HEAD_GATHERER_FIBER@2                                         : Expert's Harvester Cap
3991: T5_HEAD_GATHERER_FIBER@3                                         : Expert's Harvester Cap
3992: T6_HEAD_GATHERER_FIBER                                           : Master's Harvester Cap
3993: T6_HEAD_GATHERER_FIBER@1                                         : Master's Harvester Cap
3994: T6_HEAD_GATHERER_FIBER@2                                         : Master's Harvester Cap
3995: T6_HEAD_GATHERER_FIBER@3                                         : Master's Harvester Cap
3996: T7_HEAD_GATHERER_FIBER                                           : Grandmaster's Harvester Cap
3997: T7_HEAD_GATHERER_FIBER@1                                         : Grandmaster's Harvester Cap
3998: T7_HEAD_GATHERER_FIBER@2                                         : Grandmaster's Harvester Cap
3999: T7_HEAD_GATHERER_FIBER@3                                         : Grandmaster's Harvester Cap
4000: T8_HEAD_GATHERER_FIBER                                           : Elder's Harvester Cap
4001: T8_HEAD_GATHERER_FIBER@1                                         : Elder's Harvester Cap
4002: T8_HEAD_GATHERER_FIBER@2                                         : Elder's Harvester Cap
4003: T8_HEAD_GATHERER_FIBER@3                                         : Elder's Harvester Cap
4004: T4_ARMOR_GATHERER_FIBER                                          : Adept's Harvester Garb
4005: T4_ARMOR_GATHERER_FIBER@1                                        : Adept's Harvester Garb
4006: T4_ARMOR_GATHERER_FIBER@2                                        : Adept's Harvester Garb
4007: T4_ARMOR_GATHERER_FIBER@3                                        : Adept's Harvester Garb
4008: T5_ARMOR_GATHERER_FIBER                                          : Expert's Harvester Garb
4009: T5_ARMOR_GATHERER_FIBER@1                                        : Expert's Harvester Garb
4010: T5_ARMOR_GATHERER_FIBER@2                                        : Expert's Harvester Garb
4011: T5_ARMOR_GATHERER_FIBER@3                                        : Expert's Harvester Garb
4012: T6_ARMOR_GATHERER_FIBER                                          : Master's Harvester Garb
4013: T6_ARMOR_GATHERER_FIBER@1                                        : Master's Harvester Garb
4014: T6_ARMOR_GATHERER_FIBER@2                                        : Master's Harvester Garb
4015: T6_ARMOR_GATHERER_FIBER@3                                        : Master's Harvester Garb
4016: T7_ARMOR_GATHERER_FIBER                                          : Grandmaster's Harvester Garb
4017: T7_ARMOR_GATHERER_FIBER@1                                        : Grandmaster's Harvester Garb
4018: T7_ARMOR_GATHERER_FIBER@2                                        : Grandmaster's Harvester Garb
4019: T7_ARMOR_GATHERER_FIBER@3                                        : Grandmaster's Harvester Garb
4020: T8_ARMOR_GATHERER_FIBER                                          : Elder's Harvester Garb
4021: T8_ARMOR_GATHERER_FIBER@1                                        : Elder's Harvester Garb
4022: T8_ARMOR_GATHERER_FIBER@2                                        : Elder's Harvester Garb
4023: T8_ARMOR_GATHERER_FIBER@3                                        : Elder's Harvester Garb
4024: T4_SHOES_GATHERER_FIBER                                          : Adept's Harvester Workboots
4025: T4_SHOES_GATHERER_FIBER@1                                        : Adept's Harvester Workboots
4026: T4_SHOES_GATHERER_FIBER@2                                        : Adept's Harvester Workboots
4027: T4_SHOES_GATHERER_FIBER@3                                        : Adept's Harvester Workboots
4028: T5_SHOES_GATHERER_FIBER                                          : Expert's Harvester Workboots
4029: T5_SHOES_GATHERER_FIBER@1                                        : Expert's Harvester Workboots
4030: T5_SHOES_GATHERER_FIBER@2                                        : Expert's Harvester Workboots
4031: T5_SHOES_GATHERER_FIBER@3                                        : Expert's Harvester Workboots
4032: T6_SHOES_GATHERER_FIBER                                          : Master's Harvester Workboots
4033: T6_SHOES_GATHERER_FIBER@1                                        : Master's Harvester Workboots
4034: T6_SHOES_GATHERER_FIBER@2                                        : Master's Harvester Workboots
4035: T6_SHOES_GATHERER_FIBER@3                                        : Master's Harvester Workboots
4036: T7_SHOES_GATHERER_FIBER                                          : Grandmaster's Harvester Workboots
4037: T7_SHOES_GATHERER_FIBER@1                                        : Grandmaster's Harvester Workboots
4038: T7_SHOES_GATHERER_FIBER@2                                        : Grandmaster's Harvester Workboots
4039: T7_SHOES_GATHERER_FIBER@3                                        : Grandmaster's Harvester Workboots
4040: T8_SHOES_GATHERER_FIBER                                          : Elder's Harvester Workboots
4041: T8_SHOES_GATHERER_FIBER@1                                        : Elder's Harvester Workboots
4042: T8_SHOES_GATHERER_FIBER@2                                        : Elder's Harvester Workboots
4043: T8_SHOES_GATHERER_FIBER@3                                        : Elder's Harvester Workboots
4044: T4_BACKPACK_GATHERER_FIBER                                       : Adept's Harvester Backpack
4045: T4_BACKPACK_GATHERER_FIBER@1                                     : Adept's Harvester Backpack
4046: T4_BACKPACK_GATHERER_FIBER@2                                     : Adept's Harvester Backpack
4047: T4_BACKPACK_GATHERER_FIBER@3                                     : Adept's Harvester Backpack
4048: T5_BACKPACK_GATHERER_FIBER                                       : Expert's Harvester Backpack
4049: T5_BACKPACK_GATHERER_FIBER@1                                     : Expert's Harvester Backpack
4050: T5_BACKPACK_GATHERER_FIBER@2                                     : Expert's Harvester Backpack
4051: T5_BACKPACK_GATHERER_FIBER@3                                     : Expert's Harvester Backpack
4052: T6_BACKPACK_GATHERER_FIBER                                       : Master's Harvester Backpack
4053: T6_BACKPACK_GATHERER_FIBER@1                                     : Master's Harvester Backpack
4054: T6_BACKPACK_GATHERER_FIBER@2                                     : Master's Harvester Backpack
4055: T6_BACKPACK_GATHERER_FIBER@3                                     : Master's Harvester Backpack
4056: T7_BACKPACK_GATHERER_FIBER                                       : Grandmaster's Harvester Backpack
4057: T7_BACKPACK_GATHERER_FIBER@1                                     : Grandmaster's Harvester Backpack
4058: T7_BACKPACK_GATHERER_FIBER@2                                     : Grandmaster's Harvester Backpack
4059: T7_BACKPACK_GATHERER_FIBER@3                                     : Grandmaster's Harvester Backpack
4060: T8_BACKPACK_GATHERER_FIBER                                       : Elder's Harvester Backpack
4061: T8_BACKPACK_GATHERER_FIBER@1                                     : Elder's Harvester Backpack
4062: T8_BACKPACK_GATHERER_FIBER@2                                     : Elder's Harvester Backpack
4063: T8_BACKPACK_GATHERER_FIBER@3                                     : Elder's Harvester Backpack
4064: T4_HEAD_GATHERER_HIDE                                            : Adept's Skinner Cap
4065: T4_HEAD_GATHERER_HIDE@1                                          : Adept's Skinner Cap
4066: T4_HEAD_GATHERER_HIDE@2                                          : Adept's Skinner Cap
4067: T4_HEAD_GATHERER_HIDE@3                                          : Adept's Skinner Cap
4068: T5_HEAD_GATHERER_HIDE                                            : Expert's Skinner Cap
4069: T5_HEAD_GATHERER_HIDE@1                                          : Expert's Skinner Cap
4070: T5_HEAD_GATHERER_HIDE@2                                          : Expert's Skinner Cap
4071: T5_HEAD_GATHERER_HIDE@3                                          : Expert's Skinner Cap
4072: T6_HEAD_GATHERER_HIDE                                            : Master's Skinner Cap
4073: T6_HEAD_GATHERER_HIDE@1                                          : Master's Skinner Cap
4074: T6_HEAD_GATHERER_HIDE@2                                          : Master's Skinner Cap
4075: T6_HEAD_GATHERER_HIDE@3                                          : Master's Skinner Cap
4076: T7_HEAD_GATHERER_HIDE                                            : Grandmaster's Skinner Cap
4077: T7_HEAD_GATHERER_HIDE@1                                          : Grandmaster's Skinner Cap
4078: T7_HEAD_GATHERER_HIDE@2                                          : Grandmaster's Skinner Cap
4079: T7_HEAD_GATHERER_HIDE@3                                          : Grandmaster's Skinner Cap
4080: T8_HEAD_GATHERER_HIDE                                            : Elder's Skinner Cap
4081: T8_HEAD_GATHERER_HIDE@1                                          : Elder's Skinner Cap
4082: T8_HEAD_GATHERER_HIDE@2                                          : Elder's Skinner Cap
4083: T8_HEAD_GATHERER_HIDE@3                                          : Elder's Skinner Cap
4084: T4_ARMOR_GATHERER_HIDE                                           : Adept's Skinner Garb
4085: T4_ARMOR_GATHERER_HIDE@1                                         : Adept's Skinner Garb
4086: T4_ARMOR_GATHERER_HIDE@2                                         : Adept's Skinner Garb
4087: T4_ARMOR_GATHERER_HIDE@3                                         : Adept's Skinner Garb
4088: T5_ARMOR_GATHERER_HIDE                                           : Expert's Skinner Garb
4089: T5_ARMOR_GATHERER_HIDE@1                                         : Expert's Skinner Garb
4090: T5_ARMOR_GATHERER_HIDE@2                                         : Expert's Skinner Garb
4091: T5_ARMOR_GATHERER_HIDE@3                                         : Expert's Skinner Garb
4092: T6_ARMOR_GATHERER_HIDE                                           : Master's Skinner Garb
4093: T6_ARMOR_GATHERER_HIDE@1                                         : Master's Skinner Garb
4094: T6_ARMOR_GATHERER_HIDE@2                                         : Master's Skinner Garb
4095: T6_ARMOR_GATHERER_HIDE@3                                         : Master's Skinner Garb
4096: T7_ARMOR_GATHERER_HIDE                                           : Grandmaster's Skinner Garb
4097: T7_ARMOR_GATHERER_HIDE@1                                         : Grandmaster's Skinner Garb
4098: T7_ARMOR_GATHERER_HIDE@2                                         : Grandmaster's Skinner Garb
4099: T7_ARMOR_GATHERER_HIDE@3                                         : Grandmaster's Skinner Garb
4100: T8_ARMOR_GATHERER_HIDE                                           : Elder's Skinner Garb
4101: T8_ARMOR_GATHERER_HIDE@1                                         : Elder's Skinner Garb
4102: T8_ARMOR_GATHERER_HIDE@2                                         : Elder's Skinner Garb
4103: T8_ARMOR_GATHERER_HIDE@3                                         : Elder's Skinner Garb
4104: T4_SHOES_GATHERER_HIDE                                           : Adept's Skinner Workboots
4105: T4_SHOES_GATHERER_HIDE@1                                         : Adept's Skinner Workboots
4106: T4_SHOES_GATHERER_HIDE@2                                         : Adept's Skinner Workboots
4107: T4_SHOES_GATHERER_HIDE@3                                         : Adept's Skinner Workboots
4108: T5_SHOES_GATHERER_HIDE                                           : Expert's Skinner Workboots
4109: T5_SHOES_GATHERER_HIDE@1                                         : Expert's Skinner Workboots
4110: T5_SHOES_GATHERER_HIDE@2                                         : Expert's Skinner Workboots
4111: T5_SHOES_GATHERER_HIDE@3                                         : Expert's Skinner Workboots
4112: T6_SHOES_GATHERER_HIDE                                           : Master's Skinner Workboots
4113: T6_SHOES_GATHERER_HIDE@1                                         : Master's Skinner Workboots
4114: T6_SHOES_GATHERER_HIDE@2                                         : Master's Skinner Workboots
4115: T6_SHOES_GATHERER_HIDE@3                                         : Master's Skinner Workboots
4116: T7_SHOES_GATHERER_HIDE                                           : Grandmaster's Skinner Workboots
4117: T7_SHOES_GATHERER_HIDE@1                                         : Grandmaster's Skinner Workboots
4118: T7_SHOES_GATHERER_HIDE@2                                         : Grandmaster's Skinner Workboots
4119: T7_SHOES_GATHERER_HIDE@3                                         : Grandmaster's Skinner Workboots
4120: T8_SHOES_GATHERER_HIDE                                           : Elder's Skinner Workboots
4121: T8_SHOES_GATHERER_HIDE@1                                         : Elder's Skinner Workboots
4122: T8_SHOES_GATHERER_HIDE@2                                         : Elder's Skinner Workboots
4123: T8_SHOES_GATHERER_HIDE@3                                         : Elder's Skinner Workboots
4124: T4_BACKPACK_GATHERER_HIDE                                        : Adept's Skinner Backpack
4125: T4_BACKPACK_GATHERER_HIDE@1                                      : Adept's Skinner Backpack
4126: T4_BACKPACK_GATHERER_HIDE@2                                      : Adept's Skinner Backpack
4127: T4_BACKPACK_GATHERER_HIDE@3                                      : Adept's Skinner Backpack
4128: T5_BACKPACK_GATHERER_HIDE                                        : Expert's Skinner Backpack
4129: T5_BACKPACK_GATHERER_HIDE@1                                      : Expert's Skinner Backpack
4130: T5_BACKPACK_GATHERER_HIDE@2                                      : Expert's Skinner Backpack
4131: T5_BACKPACK_GATHERER_HIDE@3                                      : Expert's Skinner Backpack
4132: T6_BACKPACK_GATHERER_HIDE                                        : Master's Skinner Backpack
4133: T6_BACKPACK_GATHERER_HIDE@1                                      : Master's Skinner Backpack
4134: T6_BACKPACK_GATHERER_HIDE@2                                      : Master's Skinner Backpack
4135: T6_BACKPACK_GATHERER_HIDE@3                                      : Master's Skinner Backpack
4136: T7_BACKPACK_GATHERER_HIDE                                        : Grandmaster's Skinner Backpack
4137: T7_BACKPACK_GATHERER_HIDE@1                                      : Grandmaster's Skinner Backpack
4138: T7_BACKPACK_GATHERER_HIDE@2                                      : Grandmaster's Skinner Backpack
4139: T7_BACKPACK_GATHERER_HIDE@3                                      : Grandmaster's Skinner Backpack
4140: T8_BACKPACK_GATHERER_HIDE                                        : Elder's Skinner Backpack
4141: T8_BACKPACK_GATHERER_HIDE@1                                      : Elder's Skinner Backpack
4142: T8_BACKPACK_GATHERER_HIDE@2                                      : Elder's Skinner Backpack
4143: T8_BACKPACK_GATHERER_HIDE@3                                      : Elder's Skinner Backpack
4144: T4_HEAD_GATHERER_ORE                                             : Adept's Miner Cap
4145: T4_HEAD_GATHERER_ORE@1                                           : Adept's Miner Cap
4146: T4_HEAD_GATHERER_ORE@2                                           : Adept's Miner Cap
4147: T4_HEAD_GATHERER_ORE@3                                           : Adept's Miner Cap
4148: T5_HEAD_GATHERER_ORE                                             : Expert's Miner Cap
4149: T5_HEAD_GATHERER_ORE@1                                           : Expert's Miner Cap
4150: T5_HEAD_GATHERER_ORE@2                                           : Expert's Miner Cap
4151: T5_HEAD_GATHERER_ORE@3                                           : Expert's Miner Cap
4152: T6_HEAD_GATHERER_ORE                                             : Master's Miner Cap
4153: T6_HEAD_GATHERER_ORE@1                                           : Master's Miner Cap
4154: T6_HEAD_GATHERER_ORE@2                                           : Master's Miner Cap
4155: T6_HEAD_GATHERER_ORE@3                                           : Master's Miner Cap
4156: T7_HEAD_GATHERER_ORE                                             : Grandmaster's Miner Cap
4157: T7_HEAD_GATHERER_ORE@1                                           : Grandmaster's Miner Cap
4158: T7_HEAD_GATHERER_ORE@2                                           : Grandmaster's Miner Cap
4159: T7_HEAD_GATHERER_ORE@3                                           : Grandmaster's Miner Cap
4160: T8_HEAD_GATHERER_ORE                                             : Elder's Miner Cap
4161: T8_HEAD_GATHERER_ORE@1                                           : Elder's Miner Cap
4162: T8_HEAD_GATHERER_ORE@2                                           : Elder's Miner Cap
4163: T8_HEAD_GATHERER_ORE@3                                           : Elder's Miner Cap
4164: T4_ARMOR_GATHERER_ORE                                            : Adept's Miner Garb
4165: T4_ARMOR_GATHERER_ORE@1                                          : Adept's Miner Garb
4166: T4_ARMOR_GATHERER_ORE@2                                          : Adept's Miner Garb
4167: T4_ARMOR_GATHERER_ORE@3                                          : Adept's Miner Garb
4168: T5_ARMOR_GATHERER_ORE                                            : Expert's Miner Garb
4169: T5_ARMOR_GATHERER_ORE@1                                          : Expert's Miner Garb
4170: T5_ARMOR_GATHERER_ORE@2                                          : Expert's Miner Garb
4171: T5_ARMOR_GATHERER_ORE@3                                          : Expert's Miner Garb
4172: T6_ARMOR_GATHERER_ORE                                            : Master's Miner Garb
4173: T6_ARMOR_GATHERER_ORE@1                                          : Master's Miner Garb
4174: T6_ARMOR_GATHERER_ORE@2                                          : Master's Miner Garb
4175: T6_ARMOR_GATHERER_ORE@3                                          : Master's Miner Garb
4176: T7_ARMOR_GATHERER_ORE                                            : Grandmaster's Miner Garb
4177: T7_ARMOR_GATHERER_ORE@1                                          : Grandmaster's Miner Garb
4178: T7_ARMOR_GATHERER_ORE@2                                          : Grandmaster's Miner Garb
4179: T7_ARMOR_GATHERER_ORE@3                                          : Grandmaster's Miner Garb
4180: T8_ARMOR_GATHERER_ORE                                            : Elder's Miner Garb
4181: T8_ARMOR_GATHERER_ORE@1                                          : Elder's Miner Garb
4182: T8_ARMOR_GATHERER_ORE@2                                          : Elder's Miner Garb
4183: T8_ARMOR_GATHERER_ORE@3                                          : Elder's Miner Garb
4184: T4_SHOES_GATHERER_ORE                                            : Adept's Miner Workboots
4185: T4_SHOES_GATHERER_ORE@1                                          : Adept's Miner Workboots
4186: T4_SHOES_GATHERER_ORE@2                                          : Adept's Miner Workboots
4187: T4_SHOES_GATHERER_ORE@3                                          : Adept's Miner Workboots
4188: T5_SHOES_GATHERER_ORE                                            : Expert's Miner Workboots
4189: T5_SHOES_GATHERER_ORE@1                                          : Expert's Miner Workboots
4190: T5_SHOES_GATHERER_ORE@2                                          : Expert's Miner Workboots
4191: T5_SHOES_GATHERER_ORE@3                                          : Expert's Miner Workboots
4192: T6_SHOES_GATHERER_ORE                                            : Master's Miner Workboots
4193: T6_SHOES_GATHERER_ORE@1                                          : Master's Miner Workboots
4194: T6_SHOES_GATHERER_ORE@2                                          : Master's Miner Workboots
4195: T6_SHOES_GATHERER_ORE@3                                          : Master's Miner Workboots
4196: T7_SHOES_GATHERER_ORE                                            : Grandmaster's Miner Workboots
4197: T7_SHOES_GATHERER_ORE@1                                          : Grandmaster's Miner Workboots
4198: T7_SHOES_GATHERER_ORE@2                                          : Grandmaster's Miner Workboots
4199: T7_SHOES_GATHERER_ORE@3                                          : Grandmaster's Miner Workboots
4200: T8_SHOES_GATHERER_ORE                                            : Elder's Miner Workboots
4201: T8_SHOES_GATHERER_ORE@1                                          : Elder's Miner Workboots
4202: T8_SHOES_GATHERER_ORE@2                                          : Elder's Miner Workboots
4203: T8_SHOES_GATHERER_ORE@3                                          : Elder's Miner Workboots
4204: T4_BACKPACK_GATHERER_ORE                                         : Adept's Miner Backpack
4205: T4_BACKPACK_GATHERER_ORE@1                                       : Adept's Miner Backpack
4206: T4_BACKPACK_GATHERER_ORE@2                                       : Adept's Miner Backpack
4207: T4_BACKPACK_GATHERER_ORE@3                                       : Adept's Miner Backpack
4208: T5_BACKPACK_GATHERER_ORE                                         : Expert's Miner Backpack
4209: T5_BACKPACK_GATHERER_ORE@1                                       : Expert's Miner Backpack
4210: T5_BACKPACK_GATHERER_ORE@2                                       : Expert's Miner Backpack
4211: T5_BACKPACK_GATHERER_ORE@3                                       : Expert's Miner Backpack
4212: T6_BACKPACK_GATHERER_ORE                                         : Master's Miner Backpack
4213: T6_BACKPACK_GATHERER_ORE@1                                       : Master's Miner Backpack
4214: T6_BACKPACK_GATHERER_ORE@2                                       : Master's Miner Backpack
4215: T6_BACKPACK_GATHERER_ORE@3                                       : Master's Miner Backpack
4216: T7_BACKPACK_GATHERER_ORE                                         : Grandmaster's Miner Backpack
4217: T7_BACKPACK_GATHERER_ORE@1                                       : Grandmaster's Miner Backpack
4218: T7_BACKPACK_GATHERER_ORE@2                                       : Grandmaster's Miner Backpack
4219: T7_BACKPACK_GATHERER_ORE@3                                       : Grandmaster's Miner Backpack
4220: T8_BACKPACK_GATHERER_ORE                                         : Elder's Miner Backpack
4221: T8_BACKPACK_GATHERER_ORE@1                                       : Elder's Miner Backpack
4222: T8_BACKPACK_GATHERER_ORE@2                                       : Elder's Miner Backpack
4223: T8_BACKPACK_GATHERER_ORE@3                                       : Elder's Miner Backpack
4224: T4_HEAD_GATHERER_ROCK                                            : Adept's Quarrier Cap
4225: T4_HEAD_GATHERER_ROCK@1                                          : Adept's Quarrier Cap
4226: T4_HEAD_GATHERER_ROCK@2                                          : Adept's Quarrier Cap
4227: T4_HEAD_GATHERER_ROCK@3                                          : Adept's Quarrier Cap
4228: T5_HEAD_GATHERER_ROCK                                            : Expert's Quarrier Cap
4229: T5_HEAD_GATHERER_ROCK@1                                          : Expert's Quarrier Cap
4230: T5_HEAD_GATHERER_ROCK@2                                          : Expert's Quarrier Cap
4231: T5_HEAD_GATHERER_ROCK@3                                          : Expert's Quarrier Cap
4232: T6_HEAD_GATHERER_ROCK                                            : Master's Quarrier Cap
4233: T6_HEAD_GATHERER_ROCK@1                                          : Master's Quarrier Cap
4234: T6_HEAD_GATHERER_ROCK@2                                          : Master's Quarrier Cap
4235: T6_HEAD_GATHERER_ROCK@3                                          : Master's Quarrier Cap
4236: T7_HEAD_GATHERER_ROCK                                            : Grandmaster's Quarrier Cap
4237: T7_HEAD_GATHERER_ROCK@1                                          : Grandmaster's Quarrier Cap
4238: T7_HEAD_GATHERER_ROCK@2                                          : Grandmaster's Quarrier Cap
4239: T7_HEAD_GATHERER_ROCK@3                                          : Grandmaster's Quarrier Cap
4240: T8_HEAD_GATHERER_ROCK                                            : Elder's Quarrier Cap
4241: T8_HEAD_GATHERER_ROCK@1                                          : Elder's Quarrier Cap
4242: T8_HEAD_GATHERER_ROCK@2                                          : Elder's Quarrier Cap
4243: T8_HEAD_GATHERER_ROCK@3                                          : Elder's Quarrier Cap
4244: T4_ARMOR_GATHERER_ROCK                                           : Adept's Quarrier Garb
4245: T4_ARMOR_GATHERER_ROCK@1                                         : Adept's Quarrier Garb
4246: T4_ARMOR_GATHERER_ROCK@2                                         : Adept's Quarrier Garb
4247: T4_ARMOR_GATHERER_ROCK@3                                         : Adept's Quarrier Garb
4248: T5_ARMOR_GATHERER_ROCK                                           : Expert's Quarrier Garb
4249: T5_ARMOR_GATHERER_ROCK@1                                         : Expert's Quarrier Garb
4250: T5_ARMOR_GATHERER_ROCK@2                                         : Expert's Quarrier Garb
4251: T5_ARMOR_GATHERER_ROCK@3                                         : Expert's Quarrier Garb
4252: T6_ARMOR_GATHERER_ROCK                                           : Master's Quarrier Garb
4253: T6_ARMOR_GATHERER_ROCK@1                                         : Master's Quarrier Garb
4254: T6_ARMOR_GATHERER_ROCK@2                                         : Master's Quarrier Garb
4255: T6_ARMOR_GATHERER_ROCK@3                                         : Master's Quarrier Garb
4256: T7_ARMOR_GATHERER_ROCK                                           : Grandmaster's Quarrier Garb
4257: T7_ARMOR_GATHERER_ROCK@1                                         : Grandmaster's Quarrier Garb
4258: T7_ARMOR_GATHERER_ROCK@2                                         : Grandmaster's Quarrier Garb
4259: T7_ARMOR_GATHERER_ROCK@3                                         : Grandmaster's Quarrier Garb
4260: T8_ARMOR_GATHERER_ROCK                                           : Elder's Quarrier Garb
4261: T8_ARMOR_GATHERER_ROCK@1                                         : Elder's Quarrier Garb
4262: T8_ARMOR_GATHERER_ROCK@2                                         : Elder's Quarrier Garb
4263: T8_ARMOR_GATHERER_ROCK@3                                         : Elder's Quarrier Garb
4264: T4_SHOES_GATHERER_ROCK                                           : Adept's Quarrier Workboots
4265: T4_SHOES_GATHERER_ROCK@1                                         : Adept's Quarrier Workboots
4266: T4_SHOES_GATHERER_ROCK@2                                         : Adept's Quarrier Workboots
4267: T4_SHOES_GATHERER_ROCK@3                                         : Adept's Quarrier Workboots
4268: T5_SHOES_GATHERER_ROCK                                           : Expert's Quarrier Workboots
4269: T5_SHOES_GATHERER_ROCK@1                                         : Expert's Quarrier Workboots
4270: T5_SHOES_GATHERER_ROCK@2                                         : Expert's Quarrier Workboots
4271: T5_SHOES_GATHERER_ROCK@3                                         : Expert's Quarrier Workboots
4272: T6_SHOES_GATHERER_ROCK                                           : Master's Quarrier Workboots
4273: T6_SHOES_GATHERER_ROCK@1                                         : Master's Quarrier Workboots
4274: T6_SHOES_GATHERER_ROCK@2                                         : Master's Quarrier Workboots
4275: T6_SHOES_GATHERER_ROCK@3                                         : Master's Quarrier Workboots
4276: T7_SHOES_GATHERER_ROCK                                           : Grandmaster's Quarrier Workboots
4277: T7_SHOES_GATHERER_ROCK@1                                         : Grandmaster's Quarrier Workboots
4278: T7_SHOES_GATHERER_ROCK@2                                         : Grandmaster's Quarrier Workboots
4279: T7_SHOES_GATHERER_ROCK@3                                         : Grandmaster's Quarrier Workboots
4280: T8_SHOES_GATHERER_ROCK                                           : Elder's Quarrier Workboots
4281: T8_SHOES_GATHERER_ROCK@1                                         : Elder's Quarrier Workboots
4282: T8_SHOES_GATHERER_ROCK@2                                         : Elder's Quarrier Workboots
4283: T8_SHOES_GATHERER_ROCK@3                                         : Elder's Quarrier Workboots
4284: T4_BACKPACK_GATHERER_ROCK                                        : Adept's Quarrier Backpack
4285: T4_BACKPACK_GATHERER_ROCK@1                                      : Adept's Quarrier Backpack
4286: T4_BACKPACK_GATHERER_ROCK@2                                      : Adept's Quarrier Backpack
4287: T4_BACKPACK_GATHERER_ROCK@3                                      : Adept's Quarrier Backpack
4288: T5_BACKPACK_GATHERER_ROCK                                        : Expert's Quarrier Backpack
4289: T5_BACKPACK_GATHERER_ROCK@1                                      : Expert's Quarrier Backpack
4290: T5_BACKPACK_GATHERER_ROCK@2                                      : Expert's Quarrier Backpack
4291: T5_BACKPACK_GATHERER_ROCK@3                                      : Expert's Quarrier Backpack
4292: T6_BACKPACK_GATHERER_ROCK                                        : Master's Quarrier Backpack
4293: T6_BACKPACK_GATHERER_ROCK@1                                      : Master's Quarrier Backpack
4294: T6_BACKPACK_GATHERER_ROCK@2                                      : Master's Quarrier Backpack
4295: T6_BACKPACK_GATHERER_ROCK@3                                      : Master's Quarrier Backpack
4296: T7_BACKPACK_GATHERER_ROCK                                        : Grandmaster's Quarrier Backpack
4297: T7_BACKPACK_GATHERER_ROCK@1                                      : Grandmaster's Quarrier Backpack
4298: T7_BACKPACK_GATHERER_ROCK@2                                      : Grandmaster's Quarrier Backpack
4299: T7_BACKPACK_GATHERER_ROCK@3                                      : Grandmaster's Quarrier Backpack
4300: T8_BACKPACK_GATHERER_ROCK                                        : Elder's Quarrier Backpack
4301: T8_BACKPACK_GATHERER_ROCK@1                                      : Elder's Quarrier Backpack
4302: T8_BACKPACK_GATHERER_ROCK@2                                      : Elder's Quarrier Backpack
4303: T8_BACKPACK_GATHERER_ROCK@3                                      : Elder's Quarrier Backpack
4304: T4_HEAD_GATHERER_WOOD                                            : Adept's Lumberjack Cap
4305: T4_HEAD_GATHERER_WOOD@1                                          : Adept's Lumberjack Cap
4306: T4_HEAD_GATHERER_WOOD@2                                          : Adept's Lumberjack Cap
4307: T4_HEAD_GATHERER_WOOD@3                                          : Adept's Lumberjack Cap
4308: T5_HEAD_GATHERER_WOOD                                            : Expert's Lumberjack Cap
4309: T5_HEAD_GATHERER_WOOD@1                                          : Expert's Lumberjack Cap
4310: T5_HEAD_GATHERER_WOOD@2                                          : Expert's Lumberjack Cap
4311: T5_HEAD_GATHERER_WOOD@3                                          : Expert's Lumberjack Cap
4312: T6_HEAD_GATHERER_WOOD                                            : Master's Lumberjack Cap
4313: T6_HEAD_GATHERER_WOOD@1                                          : Master's Lumberjack Cap
4314: T6_HEAD_GATHERER_WOOD@2                                          : Master's Lumberjack Cap
4315: T6_HEAD_GATHERER_WOOD@3                                          : Master's Lumberjack Cap
4316: T7_HEAD_GATHERER_WOOD                                            : Grandmaster's Lumberjack Cap
4317: T7_HEAD_GATHERER_WOOD@1                                          : Grandmaster's Lumberjack Cap
4318: T7_HEAD_GATHERER_WOOD@2                                          : Grandmaster's Lumberjack Cap
4319: T7_HEAD_GATHERER_WOOD@3                                          : Grandmaster's Lumberjack Cap
4320: T8_HEAD_GATHERER_WOOD                                            : Elder's Lumberjack Cap
4321: T8_HEAD_GATHERER_WOOD@1                                          : Elder's Lumberjack Cap
4322: T8_HEAD_GATHERER_WOOD@2                                          : Elder's Lumberjack Cap
4323: T8_HEAD_GATHERER_WOOD@3                                          : Elder's Lumberjack Cap
4324: T4_ARMOR_GATHERER_WOOD                                           : Adept's Lumberjack Garb
4325: T4_ARMOR_GATHERER_WOOD@1                                         : Adept's Lumberjack Garb
4326: T4_ARMOR_GATHERER_WOOD@2                                         : Adept's Lumberjack Garb
4327: T4_ARMOR_GATHERER_WOOD@3                                         : Adept's Lumberjack Garb
4328: T5_ARMOR_GATHERER_WOOD                                           : Expert's Lumberjack Garb
4329: T5_ARMOR_GATHERER_WOOD@1                                         : Expert's Lumberjack Garb
4330: T5_ARMOR_GATHERER_WOOD@2                                         : Expert's Lumberjack Garb
4331: T5_ARMOR_GATHERER_WOOD@3                                         : Expert's Lumberjack Garb
4332: T6_ARMOR_GATHERER_WOOD                                           : Master's Lumberjack Garb
4333: T6_ARMOR_GATHERER_WOOD@1                                         : Master's Lumberjack Garb
4334: T6_ARMOR_GATHERER_WOOD@2                                         : Master's Lumberjack Garb
4335: T6_ARMOR_GATHERER_WOOD@3                                         : Master's Lumberjack Garb
4336: T7_ARMOR_GATHERER_WOOD                                           : Grandmaster's Lumberjack Garb
4337: T7_ARMOR_GATHERER_WOOD@1                                         : Grandmaster's Lumberjack Garb
4338: T7_ARMOR_GATHERER_WOOD@2                                         : Grandmaster's Lumberjack Garb
4339: T7_ARMOR_GATHERER_WOOD@3                                         : Grandmaster's Lumberjack Garb
4340: T8_ARMOR_GATHERER_WOOD                                           : Elder's Lumberjack Garb
4341: T8_ARMOR_GATHERER_WOOD@1                                         : Elder's Lumberjack Garb
4342: T8_ARMOR_GATHERER_WOOD@2                                         : Elder's Lumberjack Garb
4343: T8_ARMOR_GATHERER_WOOD@3                                         : Elder's Lumberjack Garb
4344: T4_SHOES_GATHERER_WOOD                                           : Adept's Lumberjack Workboots
4345: T4_SHOES_GATHERER_WOOD@1                                         : Adept's Lumberjack Workboots
4346: T4_SHOES_GATHERER_WOOD@2                                         : Adept's Lumberjack Workboots
4347: T4_SHOES_GATHERER_WOOD@3                                         : Adept's Lumberjack Workboots
4348: T5_SHOES_GATHERER_WOOD                                           : Expert's Lumberjack Workboots
4349: T5_SHOES_GATHERER_WOOD@1                                         : Expert's Lumberjack Workboots
4350: T5_SHOES_GATHERER_WOOD@2                                         : Expert's Lumberjack Workboots
4351: T5_SHOES_GATHERER_WOOD@3                                         : Expert's Lumberjack Workboots
4352: T6_SHOES_GATHERER_WOOD                                           : Master's Lumberjack Workboots
4353: T6_SHOES_GATHERER_WOOD@1                                         : Master's Lumberjack Workboots
4354: T6_SHOES_GATHERER_WOOD@2                                         : Master's Lumberjack Workboots
4355: T6_SHOES_GATHERER_WOOD@3                                         : Master's Lumberjack Workboots
4356: T7_SHOES_GATHERER_WOOD                                           : Grandmaster's Lumberjack Workboots
4357: T7_SHOES_GATHERER_WOOD@1                                         : Grandmaster's Lumberjack Workboots
4358: T7_SHOES_GATHERER_WOOD@2                                         : Grandmaster's Lumberjack Workboots
4359: T7_SHOES_GATHERER_WOOD@3                                         : Grandmaster's Lumberjack Workboots
4360: T8_SHOES_GATHERER_WOOD                                           : Elder's Lumberjack Workboots
4361: T8_SHOES_GATHERER_WOOD@1                                         : Elder's Lumberjack Workboots
4362: T8_SHOES_GATHERER_WOOD@2                                         : Elder's Lumberjack Workboots
4363: T8_SHOES_GATHERER_WOOD@3                                         : Elder's Lumberjack Workboots
4364: T4_BACKPACK_GATHERER_WOOD                                        : Adept's Lumberjack Backpack
4365: T4_BACKPACK_GATHERER_WOOD@1                                      : Adept's Lumberjack Backpack
4366: T4_BACKPACK_GATHERER_WOOD@2                                      : Adept's Lumberjack Backpack
4367: T4_BACKPACK_GATHERER_WOOD@3                                      : Adept's Lumberjack Backpack
4368: T5_BACKPACK_GATHERER_WOOD                                        : Expert's Lumberjack Backpack
4369: T5_BACKPACK_GATHERER_WOOD@1                                      : Expert's Lumberjack Backpack
4370: T5_BACKPACK_GATHERER_WOOD@2                                      : Expert's Lumberjack Backpack
4371: T5_BACKPACK_GATHERER_WOOD@3                                      : Expert's Lumberjack Backpack
4372: T6_BACKPACK_GATHERER_WOOD                                        : Master's Lumberjack Backpack
4373: T6_BACKPACK_GATHERER_WOOD@1                                      : Master's Lumberjack Backpack
4374: T6_BACKPACK_GATHERER_WOOD@2                                      : Master's Lumberjack Backpack
4375: T6_BACKPACK_GATHERER_WOOD@3                                      : Master's Lumberjack Backpack
4376: T7_BACKPACK_GATHERER_WOOD                                        : Grandmaster's Lumberjack Backpack
4377: T7_BACKPACK_GATHERER_WOOD@1                                      : Grandmaster's Lumberjack Backpack
4378: T7_BACKPACK_GATHERER_WOOD@2                                      : Grandmaster's Lumberjack Backpack
4379: T7_BACKPACK_GATHERER_WOOD@3                                      : Grandmaster's Lumberjack Backpack
4380: T8_BACKPACK_GATHERER_WOOD                                        : Elder's Lumberjack Backpack
4381: T8_BACKPACK_GATHERER_WOOD@1                                      : Elder's Lumberjack Backpack
4382: T8_BACKPACK_GATHERER_WOOD@2                                      : Elder's Lumberjack Backpack
4383: T8_BACKPACK_GATHERER_WOOD@3                                      : Elder's Lumberjack Backpack
4384: T4_HEAD_GATHERER_FISH                                            : Adept's Fisherman Cap
4385: T4_HEAD_GATHERER_FISH@1                                          : Adept's Fisherman Cap
4386: T4_HEAD_GATHERER_FISH@2                                          : Adept's Fisherman Cap
4387: T4_HEAD_GATHERER_FISH@3                                          : Adept's Fisherman Cap
4388: T5_HEAD_GATHERER_FISH                                            : Expert's Fisherman Cap
4389: T5_HEAD_GATHERER_FISH@1                                          : Expert's Fisherman Cap
4390: T5_HEAD_GATHERER_FISH@2                                          : Expert's Fisherman Cap
4391: T5_HEAD_GATHERER_FISH@3                                          : Expert's Fisherman Cap
4392: T6_HEAD_GATHERER_FISH                                            : Master's Fisherman Cap
4393: T6_HEAD_GATHERER_FISH@1                                          : Master's Fisherman Cap
4394: T6_HEAD_GATHERER_FISH@2                                          : Master's Fisherman Cap
4395: T6_HEAD_GATHERER_FISH@3                                          : Master's Fisherman Cap
4396: T7_HEAD_GATHERER_FISH                                            : Grandmaster's Fisherman Cap
4397: T7_HEAD_GATHERER_FISH@1                                          : Grandmaster's Fisherman Cap
4398: T7_HEAD_GATHERER_FISH@2                                          : Grandmaster's Fisherman Cap
4399: T7_HEAD_GATHERER_FISH@3                                          : Grandmaster's Fisherman Cap
4400: T8_HEAD_GATHERER_FISH                                            : Elder's Fisherman Cap
4401: T8_HEAD_GATHERER_FISH@1                                          : Elder's Fisherman Cap
4402: T8_HEAD_GATHERER_FISH@2                                          : Elder's Fisherman Cap
4403: T8_HEAD_GATHERER_FISH@3                                          : Elder's Fisherman Cap
4404: T4_ARMOR_GATHERER_FISH                                           : Adept's Fisherman Garb
4405: T4_ARMOR_GATHERER_FISH@1                                         : Adept's Fisherman Garb
4406: T4_ARMOR_GATHERER_FISH@2                                         : Adept's Fisherman Garb
4407: T4_ARMOR_GATHERER_FISH@3                                         : Adept's Fisherman Garb
4408: T5_ARMOR_GATHERER_FISH                                           : Expert's Fisherman Garb
4409: T5_ARMOR_GATHERER_FISH@1                                         : Expert's Fisherman Garb
4410: T5_ARMOR_GATHERER_FISH@2                                         : Expert's Fisherman Garb
4411: T5_ARMOR_GATHERER_FISH@3                                         : Expert's Fisherman Garb
4412: T6_ARMOR_GATHERER_FISH                                           : Master's Fisherman Garb
4413: T6_ARMOR_GATHERER_FISH@1                                         : Master's Fisherman Garb
4414: T6_ARMOR_GATHERER_FISH@2                                         : Master's Fisherman Garb
4415: T6_ARMOR_GATHERER_FISH@3                                         : Master's Fisherman Garb
4416: T7_ARMOR_GATHERER_FISH                                           : Grandmaster's Fisherman Garb
4417: T7_ARMOR_GATHERER_FISH@1                                         : Grandmaster's Fisherman Garb
4418: T7_ARMOR_GATHERER_FISH@2                                         : Grandmaster's Fisherman Garb
4419: T7_ARMOR_GATHERER_FISH@3                                         : Grandmaster's Fisherman Garb
4420: T8_ARMOR_GATHERER_FISH                                           : Elder's Fisherman Garb
4421: T8_ARMOR_GATHERER_FISH@1                                         : Elder's Fisherman Garb
4422: T8_ARMOR_GATHERER_FISH@2                                         : Elder's Fisherman Garb
4423: T8_ARMOR_GATHERER_FISH@3                                         : Elder's Fisherman Garb
4424: T4_SHOES_GATHERER_FISH                                           : Adept's Fisherman Workboots
4425: T4_SHOES_GATHERER_FISH@1                                         : Adept's Fisherman Workboots
4426: T4_SHOES_GATHERER_FISH@2                                         : Adept's Fisherman Workboots
4427: T4_SHOES_GATHERER_FISH@3                                         : Adept's Fisherman Workboots
4428: T5_SHOES_GATHERER_FISH                                           : Expert's Fisherman Workboots
4429: T5_SHOES_GATHERER_FISH@1                                         : Expert's Fisherman Workboots
4430: T5_SHOES_GATHERER_FISH@2                                         : Expert's Fisherman Workboots
4431: T5_SHOES_GATHERER_FISH@3                                         : Expert's Fisherman Workboots
4432: T6_SHOES_GATHERER_FISH                                           : Master's Fisherman Workboots
4433: T6_SHOES_GATHERER_FISH@1                                         : Master's Fisherman Workboots
4434: T6_SHOES_GATHERER_FISH@2                                         : Master's Fisherman Workboots
4435: T6_SHOES_GATHERER_FISH@3                                         : Master's Fisherman Workboots
4436: T7_SHOES_GATHERER_FISH                                           : Grandmaster's Fisherman Workboots
4437: T7_SHOES_GATHERER_FISH@1                                         : Grandmaster's Fisherman Workboots
4438: T7_SHOES_GATHERER_FISH@2                                         : Grandmaster's Fisherman Workboots
4439: T7_SHOES_GATHERER_FISH@3                                         : Grandmaster's Fisherman Workboots
4440: T8_SHOES_GATHERER_FISH                                           : Elder's Fisherman Workboots
4441: T8_SHOES_GATHERER_FISH@1                                         : Elder's Fisherman Workboots
4442: T8_SHOES_GATHERER_FISH@2                                         : Elder's Fisherman Workboots
4443: T8_SHOES_GATHERER_FISH@3                                         : Elder's Fisherman Workboots
4444: T4_BACKPACK_GATHERER_FISH                                        : Adept's Fisherman Backpack
4445: T4_BACKPACK_GATHERER_FISH@1                                      : Adept's Fisherman Backpack
4446: T4_BACKPACK_GATHERER_FISH@2                                      : Adept's Fisherman Backpack
4447: T4_BACKPACK_GATHERER_FISH@3                                      : Adept's Fisherman Backpack
4448: T5_BACKPACK_GATHERER_FISH                                        : Expert's Fisherman Backpack
4449: T5_BACKPACK_GATHERER_FISH@1                                      : Expert's Fisherman Backpack
4450: T5_BACKPACK_GATHERER_FISH@2                                      : Expert's Fisherman Backpack
4451: T5_BACKPACK_GATHERER_FISH@3                                      : Expert's Fisherman Backpack
4452: T6_BACKPACK_GATHERER_FISH                                        : Master's Fisherman Backpack
4453: T6_BACKPACK_GATHERER_FISH@1                                      : Master's Fisherman Backpack
4454: T6_BACKPACK_GATHERER_FISH@2                                      : Master's Fisherman Backpack
4455: T6_BACKPACK_GATHERER_FISH@3                                      : Master's Fisherman Backpack
4456: T7_BACKPACK_GATHERER_FISH                                        : Grandmaster's Fisherman Backpack
4457: T7_BACKPACK_GATHERER_FISH@1                                      : Grandmaster's Fisherman Backpack
4458: T7_BACKPACK_GATHERER_FISH@2                                      : Grandmaster's Fisherman Backpack
4459: T7_BACKPACK_GATHERER_FISH@3                                      : Grandmaster's Fisherman Backpack
4460: T8_BACKPACK_GATHERER_FISH                                        : Elder's Fisherman Backpack
4461: T8_BACKPACK_GATHERER_FISH@1                                      : Elder's Fisherman Backpack
4462: T8_BACKPACK_GATHERER_FISH@2                                      : Elder's Fisherman Backpack
4463: T8_BACKPACK_GATHERER_FISH@3                                      : Elder's Fisherman Backpack
4464: T2_JOURNAL_WOOD                                                  : Novice Lumberjack's Journal (Partially Full)
4465: T3_JOURNAL_WOOD                                                  : Journeyman Lumberjack's Journal (Partially Full)
4466: T4_JOURNAL_WOOD                                                  : Adept Lumberjack's Journal (Partially Full)
4467: T5_JOURNAL_WOOD                                                  : Expert Lumberjack's Journal (Partially Full)
4468: T6_JOURNAL_WOOD                                                  : Master Lumberjack's Journal (Partially Full)
4469: T7_JOURNAL_WOOD                                                  : Grandmaster Lumberjack's Journal (Partially Full)
4470: T8_JOURNAL_WOOD                                                  : Elder Lumberjack's Journal (Partially Full)
4471: T2_JOURNAL_STONE                                                 : Novice Stonecutter's Journal (Partially Full)
4472: T3_JOURNAL_STONE                                                 : Journeyman Stonecutter's Journal (Partially Full)
4473: T4_JOURNAL_STONE                                                 : Adept Stonecutter's Journal (Partially Full)
4474: T5_JOURNAL_STONE                                                 : Expert Stonecutter's Journal (Partially Full)
4475: T6_JOURNAL_STONE                                                 : Master Stonecutter's Journal (Partially Full)
4476: T7_JOURNAL_STONE                                                 : Grandmaster Stonecutter's Journal (Partially Full)
4477: T8_JOURNAL_STONE                                                 : Elder Stonecutter's Journal (Partially Full)
4478: T2_JOURNAL_ORE                                                   : Novice Prospector's Journal (Partially Full)
4479: T3_JOURNAL_ORE                                                   : Journeyman Prospector's Journal (Partially Full)
4480: T4_JOURNAL_ORE                                                   : Adept Prospector's Journal (Partially Full)
4481: T5_JOURNAL_ORE                                                   : Expert Prospector's Journal (Partially Full)
4482: T6_JOURNAL_ORE                                                   : Master Prospector's Journal (Partially Full)
4483: T7_JOURNAL_ORE                                                   : Grandmaster Prospector's Journal (Partially Full)
4484: T8_JOURNAL_ORE                                                   : Elder Prospector's Journal (Partially Full)
4485: T2_JOURNAL_FIBER                                                 : Novice Cropper's Journal (Partially Full)
4486: T3_JOURNAL_FIBER                                                 : Journeyman Cropper's Journal (Partially Full)
4487: T4_JOURNAL_FIBER                                                 : Adept Cropper's Journal (Partially Full)
4488: T5_JOURNAL_FIBER                                                 : Expert Cropper's Journal (Partially Full)
4489: T6_JOURNAL_FIBER                                                 : Master Cropper's Journal (Partially Full)
4490: T7_JOURNAL_FIBER                                                 : Grandmaster Cropper's Journal (Partially Full)
4491: T8_JOURNAL_FIBER                                                 : Elder Cropper's Journal (Partially Full)
4492: T2_JOURNAL_HIDE                                                  : Novice Gamekeeper's Journal (Partially Full)
4493: T3_JOURNAL_HIDE                                                  : Journeyman Gamekeeper's Journal (Partially Full)
4494: T4_JOURNAL_HIDE                                                  : Adept Gamekeeper's Journal (Partially Full)
4495: T5_JOURNAL_HIDE                                                  : Expert Gamekeeper's Journal (Partially Full)
4496: T6_JOURNAL_HIDE                                                  : Master Gamekeeper's Journal (Partially Full)
4497: T7_JOURNAL_HIDE                                                  : Grandmaster Gamekeeper's Journal (Partially Full)
4498: T8_JOURNAL_HIDE                                                  : Elder Gamekeeper's Journal (Partially Full)
4499: T2_JOURNAL_WARRIOR                                               : Novice Blacksmith's Journal (Partially Full)
4500: T3_JOURNAL_WARRIOR                                               : Journeyman Blacksmith's Journal (Partially Full)
4501: T4_JOURNAL_WARRIOR                                               : Adept Blacksmith's Journal (Partially Full)
4502: T5_JOURNAL_WARRIOR                                               : Expert Blacksmith's Journal (Partially Full)
4503: T6_JOURNAL_WARRIOR                                               : Master Blacksmith's Journal (Partially Full)
4504: T7_JOURNAL_WARRIOR                                               : Grandmaster Blacksmith's Journal (Partially Full)
4505: T8_JOURNAL_WARRIOR                                               : Elder Blacksmith's Journal (Partially Full)
4506: T2_JOURNAL_HUNTER                                                : Novice Fletcher's Journal (Partially Full)
4507: T3_JOURNAL_HUNTER                                                : Journeyman Fletcher's Journal (Partially Full)
4508: T4_JOURNAL_HUNTER                                                : Adept Fletcher's Journal (Partially Full)
4509: T5_JOURNAL_HUNTER                                                : Expert Fletcher's Journal (Partially Full)
4510: T6_JOURNAL_HUNTER                                                : Master Fletcher's Journal (Partially Full)
4511: T7_JOURNAL_HUNTER                                                : Grandmaster Fletcher's Journal (Partially Full)
4512: T8_JOURNAL_HUNTER                                                : Elder Fletcher's Journal (Partially Full)
4513: T2_JOURNAL_MAGE                                                  : Novice Imbuer's Journal (Partially Full)
4514: T3_JOURNAL_MAGE                                                  : Journeyman Imbuer's Journal (Partially Full)
4515: T4_JOURNAL_MAGE                                                  : Adept Imbuer's Journal (Partially Full)
4516: T5_JOURNAL_MAGE                                                  : Expert Imbuer's Journal (Partially Full)
4517: T6_JOURNAL_MAGE                                                  : Master Imbuer's Journal (Partially Full)
4518: T7_JOURNAL_MAGE                                                  : Grandmaster Imbuer's Journal (Partially Full)
4519: T8_JOURNAL_MAGE                                                  : Elder Imbuer's Journal (Partially Full)
4520: T2_JOURNAL_TOOLMAKER                                             : Novice Tinker's Journal (Partially Full)
4521: T3_JOURNAL_TOOLMAKER                                             : Journeyman Tinker's Journal (Partially Full)
4522: T4_JOURNAL_TOOLMAKER                                             : Adept Tinker's Journal (Partially Full)
4523: T5_JOURNAL_TOOLMAKER                                             : Expert Tinker's Journal (Partially Full)
4524: T6_JOURNAL_TOOLMAKER                                             : Master Tinker's Journal (Partially Full)
4525: T7_JOURNAL_TOOLMAKER                                             : Grandmaster Tinker's Journal (Partially Full)
4526: T8_JOURNAL_TOOLMAKER                                             : Elder Tinker's Journal (Partially Full)
4527: T2_JOURNAL_MERCENARY                                             : Novice Mercenary's Journal (Partially Full)
4528: T3_JOURNAL_MERCENARY                                             : Journeyman Mercenary's Journal (Partially Full)
4529: T4_JOURNAL_MERCENARY                                             : Adept Mercenary's Journal (Partially Full)
4530: T5_JOURNAL_MERCENARY                                             : Expert Mercenary's Journal (Partially Full)
4531: T6_JOURNAL_MERCENARY                                             : Master Mercenary's Journal (Partially Full)
4532: T7_JOURNAL_MERCENARY                                             : Grandmaster Mercenary's Journal (Partially Full)
4533: T8_JOURNAL_MERCENARY                                             : Elder Mercenary's Journal (Partially Full)
4534: T2_JOURNAL_TROPHY_GENERAL                                        : Novice's Generalist Trophy Journal (Partially Full)
4535: T3_JOURNAL_TROPHY_GENERAL                                        : Journeyman's Generalist Trophy Journal (Partially Full)
4536: T4_JOURNAL_TROPHY_GENERAL                                        : Adept's Generalist Trophy Journal (Partially Full)
4537: T5_JOURNAL_TROPHY_GENERAL                                        : Expert's Generalist Trophy Journal (Partially Full)
4538: T6_JOURNAL_TROPHY_GENERAL                                        : Master's Generalist Trophy Journal (Partially Full)
4539: T7_JOURNAL_TROPHY_GENERAL                                        : Grandmaster's Generalist Trophy Journal (Partially Full)
4540: T8_JOURNAL_TROPHY_GENERAL                                        : Elder's Generalist Trophy Journal (Partially Full)
4541: T2_JOURNAL_TROPHY_MERCENARY                                      : Novice Mercenary's Trophy Journal (Partially Full)
4542: T3_JOURNAL_TROPHY_MERCENARY                                      : Journeyman Mercenary's Trophy Journal (Partially Full)
4543: T4_JOURNAL_TROPHY_MERCENARY                                      : Adept Mercenary's Trophy Journal (Partially Full)
4544: T5_JOURNAL_TROPHY_MERCENARY                                      : Expert Mercenary's Trophy Journal (Partially Full)
4545: T6_JOURNAL_TROPHY_MERCENARY                                      : Master Mercenary's Trophy Journal (Partially Full)
4546: T7_JOURNAL_TROPHY_MERCENARY                                      : Grandmaster Mercenary's Trophy Journal (Partially Full)
4547: T8_JOURNAL_TROPHY_MERCENARY                                      : Elder Mercenary's Trophy Journal (Partially Full)
4548: T2_JOURNAL_TROPHY_HIDE                                           : Novice Gamekeeper's Trophy Journal (Partially Full)
4549: T3_JOURNAL_TROPHY_HIDE                                           : Journeyman Gamekeeper's Trophy Journal (Partially Full)
4550: T4_JOURNAL_TROPHY_HIDE                                           : Adept Gamekeeper's Trophy Journal (Partially Full)
4551: T5_JOURNAL_TROPHY_HIDE                                           : Expert Gamekeeper's Trophy Journal (Partially Full)
4552: T6_JOURNAL_TROPHY_HIDE                                           : Master Gamekeeper's Trophy Journal (Partially Full)
4553: T7_JOURNAL_TROPHY_HIDE                                           : Grandmaster Gamekeeper's Trophy Journal (Partially Full)
4554: T8_JOURNAL_TROPHY_HIDE                                           : Elder Gamekeeper's Trophy Journal (Partially Full)
4555: T2_JOURNAL_TROPHY_WOOD                                           : Novice Lumberjack's Trophy Journal (Partially Full)
4556: T3_JOURNAL_TROPHY_WOOD                                           : Journeyman Lumberjack's Trophy Journal (Partially Full)
4557: T4_JOURNAL_TROPHY_WOOD                                           : Adept Lumberjack's Trophy Journal (Partially Full)
4558: T5_JOURNAL_TROPHY_WOOD                                           : Expert Lumberjack's Trophy Journal (Partially Full)
4559: T6_JOURNAL_TROPHY_WOOD                                           : Master Lumberjack's Trophy Journal (Partially Full)
4560: T7_JOURNAL_TROPHY_WOOD                                           : Grandmaster Lumberjack's Trophy Journal (Partially Full)
4561: T8_JOURNAL_TROPHY_WOOD                                           : Elder Lumberjack's Trophy Journal (Partially Full)
4562: T2_JOURNAL_TROPHY_STONE                                          : Novice Stonecutter's Trophy Journal (Partially Full)
4563: T3_JOURNAL_TROPHY_STONE                                          : Journeyman Stonecutter's Trophy Journal (Partially Full)
4564: T4_JOURNAL_TROPHY_STONE                                          : Adept Stonecutter's Trophy Journal (Partially Full)
4565: T5_JOURNAL_TROPHY_STONE                                          : Expert Stonecutter's Trophy Journal (Partially Full)
4566: T6_JOURNAL_TROPHY_STONE                                          : Master Stonecutter's Trophy Journal (Partially Full)
4567: T7_JOURNAL_TROPHY_STONE                                          : Grandmaster Stonecutter's Trophy Journal (Partially Full)
4568: T8_JOURNAL_TROPHY_STONE                                          : Elder Stonecutter's Trophy Journal (Partially Full)
4569: T2_JOURNAL_TROPHY_ORE                                            : Novice Prospector's Trophy Journal (Partially Full)
4570: T3_JOURNAL_TROPHY_ORE                                            : Journeyman Prospector's Trophy Journal (Partially Full)
4571: T4_JOURNAL_TROPHY_ORE                                            : Adept Prospector's Trophy Journal (Partially Full)
4572: T5_JOURNAL_TROPHY_ORE                                            : Expert Prospector's Trophy Journal (Partially Full)
4573: T6_JOURNAL_TROPHY_ORE                                            : Master Prospector's Trophy Journal (Partially Full)
4574: T7_JOURNAL_TROPHY_ORE                                            : Grandmaster Prospector's Trophy Journal (Partially Full)
4575: T8_JOURNAL_TROPHY_ORE                                            : Elder Prospector's Trophy Journal (Partially Full)
4576: T2_JOURNAL_TROPHY_FIBER                                          : Novice Cropper's Trophy Journal (Partially Full)
4577: T3_JOURNAL_TROPHY_FIBER                                          : Journeyman Cropper's Trophy Journal (Partially Full)
4578: T4_JOURNAL_TROPHY_FIBER                                          : Adept Cropper's Trophy Journal (Partially Full)
4579: T5_JOURNAL_TROPHY_FIBER                                          : Expert Cropper's Trophy Journal (Partially Full)
4580: T6_JOURNAL_TROPHY_FIBER                                          : Master Cropper's Trophy Journal (Partially Full)
4581: T7_JOURNAL_TROPHY_FIBER                                          : Grandmaster Cropper's Trophy Journal (Partially Full)
4582: T8_JOURNAL_TROPHY_FIBER                                          : Elder Cropper's Trophy Journal (Partially Full)
4583: T2_JOURNAL_TROPHY_FISHING                                        : Novice Fisherman's Trophy Journal (Partially Full)
4584: T3_JOURNAL_TROPHY_FISHING                                        : Journeyman Fisherman's Trophy Journal (Partially Full)
4585: T4_JOURNAL_TROPHY_FISHING                                        : Adept Fisherman's Trophy Journal (Partially Full)
4586: T5_JOURNAL_TROPHY_FISHING                                        : Expert Fisherman's Trophy Journal (Partially Full)
4587: T6_JOURNAL_TROPHY_FISHING                                        : Master Fisherman's Trophy Journal (Partially Full)
4588: T7_JOURNAL_TROPHY_FISHING                                        : Grandmaster Fisherman's Trophy Journal (Partially Full)
4589: T8_JOURNAL_TROPHY_FISHING                                        : Elder Fisherman's Trophy Journal (Partially Full)
4590: T2_JOURNAL_FISHING                                               : Novice Fisherman's Journal (Partially Full)
4591: T3_JOURNAL_FISHING                                               : Journeyman Fisherman's Journal (Partially Full)
4592: T4_JOURNAL_FISHING                                               : Adept Fisherman's Journal (Partially Full)
4593: T5_JOURNAL_FISHING                                               : Expert Fisherman's Journal (Partially Full)
4594: T6_JOURNAL_FISHING                                               : Master Fisherman's Journal (Partially Full)
4595: T7_JOURNAL_FISHING                                               : Grandmaster Fisherman's Journal (Partially Full)
4596: T8_JOURNAL_FISHING                                               : Elder Fisherman's Journal (Partially Full)
4597: T2_LABOURER_CONTRACT_WOOD                                        : Novice Lumberjack Contract
4598: T3_LABOURER_CONTRACT_WOOD                                        : Journeyman Lumberjack Contract
4599: T4_LABOURER_CONTRACT_WOOD                                        : Adept Lumberjack Contract
4600: T5_LABOURER_CONTRACT_WOOD                                        : Expert Lumberjack Contract
4601: T6_LABOURER_CONTRACT_WOOD                                        : Master Lumberjack Contract
4602: T7_LABOURER_CONTRACT_WOOD                                        : Grandmaster Lumberjack Contract
4603: T8_LABOURER_CONTRACT_WOOD                                        : Elder Lumberjack Contract
4604: T2_LABOURER_CONTRACT_STONE                                       : Novice Stonecutter Contract
4605: T3_LABOURER_CONTRACT_STONE                                       : Journeyman Stonecutter Contract
4606: T4_LABOURER_CONTRACT_STONE                                       : Adept Stonecutter Contract
4607: T5_LABOURER_CONTRACT_STONE                                       : Expert Stonecutter Contract
4608: T6_LABOURER_CONTRACT_STONE                                       : Master Stonecutter Contract
4609: T7_LABOURER_CONTRACT_STONE                                       : Grandmaster Stonecutter Contract
4610: T8_LABOURER_CONTRACT_STONE                                       : Elder Stonecutter Contract
4611: T2_LABOURER_CONTRACT_FIBER                                       : Novice Cropper Contract
4612: T3_LABOURER_CONTRACT_FIBER                                       : Journeyman Cropper Contract
4613: T4_LABOURER_CONTRACT_FIBER                                       : Adept Cropper Contract
4614: T5_LABOURER_CONTRACT_FIBER                                       : Expert Cropper Contract
4615: T6_LABOURER_CONTRACT_FIBER                                       : Master Cropper Contract
4616: T7_LABOURER_CONTRACT_FIBER                                       : Grandmaster Cropper Contract
4617: T8_LABOURER_CONTRACT_FIBER                                       : Elder Cropper Contract
4618: T2_LABOURER_CONTRACT_HIDE                                        : Novice Gamekeeper Contract
4619: T3_LABOURER_CONTRACT_HIDE                                        : Journeyman Gamekeeper Contract
4620: T4_LABOURER_CONTRACT_HIDE                                        : Adept Gamekeeper Contract
4621: T5_LABOURER_CONTRACT_HIDE                                        : Expert Gamekeeper Contract
4622: T6_LABOURER_CONTRACT_HIDE                                        : Master Gamekeeper Contract
4623: T7_LABOURER_CONTRACT_HIDE                                        : Grandmaster Gamekeeper Contract
4624: T8_LABOURER_CONTRACT_HIDE                                        : Elder Gamekeeper Contract
4625: T2_LABOURER_CONTRACT_ORE                                         : Novice Prospector Contract
4626: T3_LABOURER_CONTRACT_ORE                                         : Journeyman Prospector Contract
4627: T4_LABOURER_CONTRACT_ORE                                         : Adept Prospector Contract
4628: T5_LABOURER_CONTRACT_ORE                                         : Expert Prospector Contract
4629: T6_LABOURER_CONTRACT_ORE                                         : Master Prospector Contract
4630: T7_LABOURER_CONTRACT_ORE                                         : Grandmaster Prospector Contract
4631: T8_LABOURER_CONTRACT_ORE                                         : Elder Prospector Contract
4632: T2_LABOURER_CONTRACT_MERCENARY                                   : Novice Mercenary Contract
4633: T3_LABOURER_CONTRACT_MERCENARY                                   : Journeyman Mercenary Contract
4634: T4_LABOURER_CONTRACT_MERCENARY                                   : Adept Mercenary Contract
4635: T5_LABOURER_CONTRACT_MERCENARY                                   : Expert Mercenary Contract
4636: T6_LABOURER_CONTRACT_MERCENARY                                   : Master Mercenary Contract
4637: T7_LABOURER_CONTRACT_MERCENARY                                   : Grandmaster Mercenary Contract
4638: T8_LABOURER_CONTRACT_MERCENARY                                   : Elder Mercenary Contract
4639: T2_LABOURER_CONTRACT_FISHERMAN                                   : Novice Fisherman Contract
4640: T3_LABOURER_CONTRACT_FISHERMAN                                   : Journeyman Fisherman Contract
4641: T4_LABOURER_CONTRACT_FISHERMAN                                   : Adept Fisherman Contract
4642: T5_LABOURER_CONTRACT_FISHERMAN                                   : Expert Fisherman Contract
4643: T6_LABOURER_CONTRACT_FISHERMAN                                   : Master Fisherman Contract
4644: T7_LABOURER_CONTRACT_FISHERMAN                                   : Grandmaster Fisherman Contract
4645: T8_LABOURER_CONTRACT_FISHERMAN                                   : Elder Fisherman Contract
4646: T2_LABOURER_CONTRACT_HUNTER                                      : Novice Fletcher Contract
4647: T3_LABOURER_CONTRACT_HUNTER                                      : Journeyman Fletcher Contract
4648: T4_LABOURER_CONTRACT_HUNTER                                      : Adept Fletcher Contract
4649: T5_LABOURER_CONTRACT_HUNTER                                      : Expert Fletcher Contract
4650: T6_LABOURER_CONTRACT_HUNTER                                      : Master Fletcher Contract
4651: T7_LABOURER_CONTRACT_HUNTER                                      : Grandmaster Fletcher Contract
4652: T8_LABOURER_CONTRACT_HUNTER                                      : Elder Fletcher Contract
4653: T2_LABOURER_CONTRACT_MAGE                                        : Novice Imbuer Contract
4654: T3_LABOURER_CONTRACT_MAGE                                        : Journeyman Imbuer Contract
4655: T4_LABOURER_CONTRACT_MAGE                                        : Adept Imbuer Contract
4656: T5_LABOURER_CONTRACT_MAGE                                        : Expert Imbuer Contract
4657: T6_LABOURER_CONTRACT_MAGE                                        : Master Imbuer Contract
4658: T7_LABOURER_CONTRACT_MAGE                                        : Grandmaster Imbuer Contract
4659: T8_LABOURER_CONTRACT_MAGE                                        : Elder Imbuer Contract
4660: T2_LABOURER_CONTRACT_WARRIOR                                     : Novice Blacksmith Contract
4661: T3_LABOURER_CONTRACT_WARRIOR                                     : Journeyman Blacksmith Contract
4662: T4_LABOURER_CONTRACT_WARRIOR                                     : Adept Blacksmith Contract
4663: T5_LABOURER_CONTRACT_WARRIOR                                     : Expert Blacksmith Contract
4664: T6_LABOURER_CONTRACT_WARRIOR                                     : Master Blacksmith Contract
4665: T7_LABOURER_CONTRACT_WARRIOR                                     : Grandmaster Blacksmith Contract
4666: T8_LABOURER_CONTRACT_WARRIOR                                     : Elder Blacksmith Contract
4667: T2_LABOURER_CONTRACT_TOOLMAKER                                   : Novice Tinker Contract
4668: T3_LABOURER_CONTRACT_TOOLMAKER                                   : Journeyman Tinker Contract
4669: T4_LABOURER_CONTRACT_TOOLMAKER                                   : Adept Tinker Contract
4670: T5_LABOURER_CONTRACT_TOOLMAKER                                   : Expert Tinker Contract
4671: T6_LABOURER_CONTRACT_TOOLMAKER                                   : Master Tinker Contract
4672: T7_LABOURER_CONTRACT_TOOLMAKER                                   : Grandmaster Tinker Contract
4673: T8_LABOURER_CONTRACT_TOOLMAKER                                   : Elder Tinker Contract
4674: T2_2H_BOW                                                        : Novice's Bow
4675: T3_2H_BOW                                                        : Journeyman's Bow
4676: T4_2H_BOW                                                        : Adept's Bow
4677: T4_2H_BOW@1                                                      : Adept's Bow
4678: T4_2H_BOW@2                                                      : Adept's Bow
4679: T4_2H_BOW@3                                                      : Adept's Bow
4680: T5_2H_BOW                                                        : Expert's Bow
4681: T5_2H_BOW@1                                                      : Expert's Bow
4682: T5_2H_BOW@2                                                      : Expert's Bow
4683: T5_2H_BOW@3                                                      : Expert's Bow
4684: T6_2H_BOW                                                        : Master's Bow
4685: T6_2H_BOW@1                                                      : Master's Bow
4686: T6_2H_BOW@2                                                      : Master's Bow
4687: T6_2H_BOW@3                                                      : Master's Bow
4688: T7_2H_BOW                                                        : Grandmaster's Bow
4689: T7_2H_BOW@1                                                      : Grandmaster's Bow
4690: T7_2H_BOW@2                                                      : Grandmaster's Bow
4691: T7_2H_BOW@3                                                      : Grandmaster's Bow
4692: T8_2H_BOW                                                        : Elder's Bow
4693: T8_2H_BOW@1                                                      : Elder's Bow
4694: T8_2H_BOW@2                                                      : Elder's Bow
4695: T8_2H_BOW@3                                                      : Elder's Bow
4696: T4_2H_WARBOW                                                     : Adept's Warbow
4697: T4_2H_WARBOW@1                                                   : Adept's Warbow
4698: T4_2H_WARBOW@2                                                   : Adept's Warbow
4699: T4_2H_WARBOW@3                                                   : Adept's Warbow
4700: T5_2H_WARBOW                                                     : Expert's Warbow
4701: T5_2H_WARBOW@1                                                   : Expert's Warbow
4702: T5_2H_WARBOW@2                                                   : Expert's Warbow
4703: T5_2H_WARBOW@3                                                   : Expert's Warbow
4704: T6_2H_WARBOW                                                     : Master's Warbow
4705: T6_2H_WARBOW@1                                                   : Master's Warbow
4706: T6_2H_WARBOW@2                                                   : Master's Warbow
4707: T6_2H_WARBOW@3                                                   : Master's Warbow
4708: T7_2H_WARBOW                                                     : Grandmaster's Warbow
4709: T7_2H_WARBOW@1                                                   : Grandmaster's Warbow
4710: T7_2H_WARBOW@2                                                   : Grandmaster's Warbow
4711: T7_2H_WARBOW@3                                                   : Grandmaster's Warbow
4712: T8_2H_WARBOW                                                     : Elder's Warbow
4713: T8_2H_WARBOW@1                                                   : Elder's Warbow
4714: T8_2H_WARBOW@2                                                   : Elder's Warbow
4715: T8_2H_WARBOW@3                                                   : Elder's Warbow
4716: T4_2H_LONGBOW                                                    : Adept's Longbow
4717: T4_2H_LONGBOW@1                                                  : Adept's Longbow
4718: T4_2H_LONGBOW@2                                                  : Adept's Longbow
4719: T4_2H_LONGBOW@3                                                  : Adept's Longbow
4720: T5_2H_LONGBOW                                                    : Expert's Longbow
4721: T5_2H_LONGBOW@1                                                  : Expert's Longbow
4722: T5_2H_LONGBOW@2                                                  : Expert's Longbow
4723: T5_2H_LONGBOW@3                                                  : Expert's Longbow
4724: T6_2H_LONGBOW                                                    : Master's Longbow
4725: T6_2H_LONGBOW@1                                                  : Master's Longbow
4726: T6_2H_LONGBOW@2                                                  : Master's Longbow
4727: T6_2H_LONGBOW@3                                                  : Master's Longbow
4728: T7_2H_LONGBOW                                                    : Grandmaster's Longbow
4729: T7_2H_LONGBOW@1                                                  : Grandmaster's Longbow
4730: T7_2H_LONGBOW@2                                                  : Grandmaster's Longbow
4731: T7_2H_LONGBOW@3                                                  : Grandmaster's Longbow
4732: T8_2H_LONGBOW                                                    : Elder's Longbow
4733: T8_2H_LONGBOW@1                                                  : Elder's Longbow
4734: T8_2H_LONGBOW@2                                                  : Elder's Longbow
4735: T8_2H_LONGBOW@3                                                  : Elder's Longbow
4736: T4_2H_LONGBOW_UNDEAD                                             : Adept's Whispering Bow
4737: T4_2H_LONGBOW_UNDEAD@1                                           : Adept's Whispering Bow
4738: T4_2H_LONGBOW_UNDEAD@2                                           : Adept's Whispering Bow
4739: T4_2H_LONGBOW_UNDEAD@3                                           : Adept's Whispering Bow
4740: T5_2H_LONGBOW_UNDEAD                                             : Expert's Whispering Bow
4741: T5_2H_LONGBOW_UNDEAD@1                                           : Expert's Whispering Bow
4742: T5_2H_LONGBOW_UNDEAD@2                                           : Expert's Whispering Bow
4743: T5_2H_LONGBOW_UNDEAD@3                                           : Expert's Whispering Bow
4744: T6_2H_LONGBOW_UNDEAD                                             : Master's Whispering Bow
4745: T6_2H_LONGBOW_UNDEAD@1                                           : Master's Whispering Bow
4746: T6_2H_LONGBOW_UNDEAD@2                                           : Master's Whispering Bow
4747: T6_2H_LONGBOW_UNDEAD@3                                           : Master's Whispering Bow
4748: T7_2H_LONGBOW_UNDEAD                                             : Grandmaster's Whispering Bow
4749: T7_2H_LONGBOW_UNDEAD@1                                           : Grandmaster's Whispering Bow
4750: T7_2H_LONGBOW_UNDEAD@2                                           : Grandmaster's Whispering Bow
4751: T7_2H_LONGBOW_UNDEAD@3                                           : Grandmaster's Whispering Bow
4752: T8_2H_LONGBOW_UNDEAD                                             : Elder's Whispering Bow
4753: T8_2H_LONGBOW_UNDEAD@1                                           : Elder's Whispering Bow
4754: T8_2H_LONGBOW_UNDEAD@2                                           : Elder's Whispering Bow
4755: T8_2H_LONGBOW_UNDEAD@3                                           : Elder's Whispering Bow
4756: T4_2H_BOW_HELL                                                   : Adept's Wailing Bow
4757: T4_2H_BOW_HELL@1                                                 : Adept's Wailing Bow
4758: T4_2H_BOW_HELL@2                                                 : Adept's Wailing Bow
4759: T4_2H_BOW_HELL@3                                                 : Adept's Wailing Bow
4760: T5_2H_BOW_HELL                                                   : Expert's Wailing Bow
4761: T5_2H_BOW_HELL@1                                                 : Expert's Wailing Bow
4762: T5_2H_BOW_HELL@2                                                 : Expert's Wailing Bow
4763: T5_2H_BOW_HELL@3                                                 : Expert's Wailing Bow
4764: T6_2H_BOW_HELL                                                   : Master's Wailing Bow
4765: T6_2H_BOW_HELL@1                                                 : Master's Wailing Bow
4766: T6_2H_BOW_HELL@2                                                 : Master's Wailing Bow
4767: T6_2H_BOW_HELL@3                                                 : Master's Wailing Bow
4768: T7_2H_BOW_HELL                                                   : Grandmaster's Wailing Bow
4769: T7_2H_BOW_HELL@1                                                 : Grandmaster's Wailing Bow
4770: T7_2H_BOW_HELL@2                                                 : Grandmaster's Wailing Bow
4771: T7_2H_BOW_HELL@3                                                 : Grandmaster's Wailing Bow
4772: T8_2H_BOW_HELL                                                   : Elder's Wailing Bow
4773: T8_2H_BOW_HELL@1                                                 : Elder's Wailing Bow
4774: T8_2H_BOW_HELL@2                                                 : Elder's Wailing Bow
4775: T8_2H_BOW_HELL@3                                                 : Elder's Wailing Bow
4776: T4_2H_BOW_KEEPER                                                 : Adept's Bow of Badon
4777: T4_2H_BOW_KEEPER@1                                               : Adept's Bow of Badon
4778: T4_2H_BOW_KEEPER@2                                               : Adept's Bow of Badon
4779: T4_2H_BOW_KEEPER@3                                               : Adept's Bow of Badon
4780: T5_2H_BOW_KEEPER                                                 : Expert's Bow of Badon
4781: T5_2H_BOW_KEEPER@1                                               : Expert's Bow of Badon
4782: T5_2H_BOW_KEEPER@2                                               : Expert's Bow of Badon
4783: T5_2H_BOW_KEEPER@3                                               : Expert's Bow of Badon
4784: T6_2H_BOW_KEEPER                                                 : Master's Bow of Badon
4785: T6_2H_BOW_KEEPER@1                                               : Master's Bow of Badon
4786: T6_2H_BOW_KEEPER@2                                               : Master's Bow of Badon
4787: T6_2H_BOW_KEEPER@3                                               : Master's Bow of Badon
4788: T7_2H_BOW_KEEPER                                                 : Grandmaster's Bow of Badon
4789: T7_2H_BOW_KEEPER@1                                               : Grandmaster's Bow of Badon
4790: T7_2H_BOW_KEEPER@2                                               : Grandmaster's Bow of Badon
4791: T7_2H_BOW_KEEPER@3                                               : Grandmaster's Bow of Badon
4792: T8_2H_BOW_KEEPER                                                 : Elder's Bow of Badon
4793: T8_2H_BOW_KEEPER@1                                               : Elder's Bow of Badon
4794: T8_2H_BOW_KEEPER@2                                               : Elder's Bow of Badon
4795: T8_2H_BOW_KEEPER@3                                               : Elder's Bow of Badon
4796: T4_2H_BOW_AVALON                                                 : Adept's Mistpiercer
4797: T4_2H_BOW_AVALON@1                                               : Adept's Mistpiercer
4798: T4_2H_BOW_AVALON@2                                               : Adept's Mistpiercer
4799: T4_2H_BOW_AVALON@3                                               : Adept's Mistpiercer
4800: T5_2H_BOW_AVALON                                                 : Expert's Mistpiercer
4801: T5_2H_BOW_AVALON@1                                               : Expert's Mistpiercer
4802: T5_2H_BOW_AVALON@2                                               : Expert's Mistpiercer
4803: T5_2H_BOW_AVALON@3                                               : Expert's Mistpiercer
4804: T6_2H_BOW_AVALON                                                 : Master's Mistpiercer
4805: T6_2H_BOW_AVALON@1                                               : Master's Mistpiercer
4806: T6_2H_BOW_AVALON@2                                               : Master's Mistpiercer
4807: T6_2H_BOW_AVALON@3                                               : Master's Mistpiercer
4808: T7_2H_BOW_AVALON                                                 : Grandmaster's Mistpiercer
4809: T7_2H_BOW_AVALON@1                                               : Grandmaster's Mistpiercer
4810: T7_2H_BOW_AVALON@2                                               : Grandmaster's Mistpiercer
4811: T7_2H_BOW_AVALON@3                                               : Grandmaster's Mistpiercer
4812: T8_2H_BOW_AVALON                                                 : Elder's Mistpiercer
4813: T8_2H_BOW_AVALON@1                                               : Elder's Mistpiercer
4814: T8_2H_BOW_AVALON@2                                               : Elder's Mistpiercer
4815: T8_2H_BOW_AVALON@3                                               : Elder's Mistpiercer
4816: T3_2H_CROSSBOW                                                   : Journeyman's Crossbow
4817: T4_2H_CROSSBOW                                                   : Adept's Crossbow
4818: T4_2H_CROSSBOW@1                                                 : Adept's Crossbow
4819: T4_2H_CROSSBOW@2                                                 : Adept's Crossbow
4820: T4_2H_CROSSBOW@3                                                 : Adept's Crossbow
4821: T5_2H_CROSSBOW                                                   : Expert's Crossbow
4822: T5_2H_CROSSBOW@1                                                 : Expert's Crossbow
4823: T5_2H_CROSSBOW@2                                                 : Expert's Crossbow
4824: T5_2H_CROSSBOW@3                                                 : Expert's Crossbow
4825: T6_2H_CROSSBOW                                                   : Master's Crossbow
4826: T6_2H_CROSSBOW@1                                                 : Master's Crossbow
4827: T6_2H_CROSSBOW@2                                                 : Master's Crossbow
4828: T6_2H_CROSSBOW@3                                                 : Master's Crossbow
4829: T7_2H_CROSSBOW                                                   : Grandmaster's Crossbow
4830: T7_2H_CROSSBOW@1                                                 : Grandmaster's Crossbow
4831: T7_2H_CROSSBOW@2                                                 : Grandmaster's Crossbow
4832: T7_2H_CROSSBOW@3                                                 : Grandmaster's Crossbow
4833: T8_2H_CROSSBOW                                                   : Elder's Crossbow
4834: T8_2H_CROSSBOW@1                                                 : Elder's Crossbow
4835: T8_2H_CROSSBOW@2                                                 : Elder's Crossbow
4836: T8_2H_CROSSBOW@3                                                 : Elder's Crossbow
4837: T4_2H_CROSSBOWLARGE                                              : Adept's Heavy Crossbow
4838: T4_2H_CROSSBOWLARGE@1                                            : Adept's Heavy Crossbow
4839: T4_2H_CROSSBOWLARGE@2                                            : Adept's Heavy Crossbow
4840: T4_2H_CROSSBOWLARGE@3                                            : Adept's Heavy Crossbow
4841: T5_2H_CROSSBOWLARGE                                              : Expert's Heavy Crossbow
4842: T5_2H_CROSSBOWLARGE@1                                            : Expert's Heavy Crossbow
4843: T5_2H_CROSSBOWLARGE@2                                            : Expert's Heavy Crossbow
4844: T5_2H_CROSSBOWLARGE@3                                            : Expert's Heavy Crossbow
4845: T6_2H_CROSSBOWLARGE                                              : Master's Heavy Crossbow
4846: T6_2H_CROSSBOWLARGE@1                                            : Master's Heavy Crossbow
4847: T6_2H_CROSSBOWLARGE@2                                            : Master's Heavy Crossbow
4848: T6_2H_CROSSBOWLARGE@3                                            : Master's Heavy Crossbow
4849: T7_2H_CROSSBOWLARGE                                              : Grandmaster's Heavy Crossbow
4850: T7_2H_CROSSBOWLARGE@1                                            : Grandmaster's Heavy Crossbow
4851: T7_2H_CROSSBOWLARGE@2                                            : Grandmaster's Heavy Crossbow
4852: T7_2H_CROSSBOWLARGE@3                                            : Grandmaster's Heavy Crossbow
4853: T8_2H_CROSSBOWLARGE                                              : Elder's Heavy Crossbow
4854: T8_2H_CROSSBOWLARGE@1                                            : Elder's Heavy Crossbow
4855: T8_2H_CROSSBOWLARGE@2                                            : Elder's Heavy Crossbow
4856: T8_2H_CROSSBOWLARGE@3                                            : Elder's Heavy Crossbow
4857: T4_MAIN_1HCROSSBOW                                               : Adept's Light Crossbow
4858: T4_MAIN_1HCROSSBOW@1                                             : Adept's Light Crossbow
4859: T4_MAIN_1HCROSSBOW@2                                             : Adept's Light Crossbow
4860: T4_MAIN_1HCROSSBOW@3                                             : Adept's Light Crossbow
4861: T5_MAIN_1HCROSSBOW                                               : Expert's Light Crossbow
4862: T5_MAIN_1HCROSSBOW@1                                             : Expert's Light Crossbow
4863: T5_MAIN_1HCROSSBOW@2                                             : Expert's Light Crossbow
4864: T5_MAIN_1HCROSSBOW@3                                             : Expert's Light Crossbow
4865: T6_MAIN_1HCROSSBOW                                               : Master's Light Crossbow
4866: T6_MAIN_1HCROSSBOW@1                                             : Master's Light Crossbow
4867: T6_MAIN_1HCROSSBOW@2                                             : Master's Light Crossbow
4868: T6_MAIN_1HCROSSBOW@3                                             : Master's Light Crossbow
4869: T7_MAIN_1HCROSSBOW                                               : Grandmaster's Light Crossbow
4870: T7_MAIN_1HCROSSBOW@1                                             : Grandmaster's Light Crossbow
4871: T7_MAIN_1HCROSSBOW@2                                             : Grandmaster's Light Crossbow
4872: T7_MAIN_1HCROSSBOW@3                                             : Grandmaster's Light Crossbow
4873: T8_MAIN_1HCROSSBOW                                               : Elder's Light Crossbow
4874: T8_MAIN_1HCROSSBOW@1                                             : Elder's Light Crossbow
4875: T8_MAIN_1HCROSSBOW@2                                             : Elder's Light Crossbow
4876: T8_MAIN_1HCROSSBOW@3                                             : Elder's Light Crossbow
4877: T4_2H_REPEATINGCROSSBOW_UNDEAD                                   : Adept's Weeping Repeater
4878: T4_2H_REPEATINGCROSSBOW_UNDEAD@1                                 : Adept's Weeping Repeater
4879: T4_2H_REPEATINGCROSSBOW_UNDEAD@2                                 : Adept's Weeping Repeater
4880: T4_2H_REPEATINGCROSSBOW_UNDEAD@3                                 : Adept's Weeping Repeater
4881: T5_2H_REPEATINGCROSSBOW_UNDEAD                                   : Expert's Weeping Repeater
4882: T5_2H_REPEATINGCROSSBOW_UNDEAD@1                                 : Expert's Weeping Repeater
4883: T5_2H_REPEATINGCROSSBOW_UNDEAD@2                                 : Expert's Weeping Repeater
4884: T5_2H_REPEATINGCROSSBOW_UNDEAD@3                                 : Expert's Weeping Repeater
4885: T6_2H_REPEATINGCROSSBOW_UNDEAD                                   : Master's Weeping Repeater
4886: T6_2H_REPEATINGCROSSBOW_UNDEAD@1                                 : Master's Weeping Repeater
4887: T6_2H_REPEATINGCROSSBOW_UNDEAD@2                                 : Master's Weeping Repeater
4888: T6_2H_REPEATINGCROSSBOW_UNDEAD@3                                 : Master's Weeping Repeater
4889: T7_2H_REPEATINGCROSSBOW_UNDEAD                                   : Grandmaster's Weeping Repeater
4890: T7_2H_REPEATINGCROSSBOW_UNDEAD@1                                 : Grandmaster's Weeping Repeater
4891: T7_2H_REPEATINGCROSSBOW_UNDEAD@2                                 : Grandmaster's Weeping Repeater
4892: T7_2H_REPEATINGCROSSBOW_UNDEAD@3                                 : Grandmaster's Weeping Repeater
4893: T8_2H_REPEATINGCROSSBOW_UNDEAD                                   : Elder's Weeping Repeater
4894: T8_2H_REPEATINGCROSSBOW_UNDEAD@1                                 : Elder's Weeping Repeater
4895: T8_2H_REPEATINGCROSSBOW_UNDEAD@2                                 : Elder's Weeping Repeater
4896: T8_2H_REPEATINGCROSSBOW_UNDEAD@3                                 : Elder's Weeping Repeater
4897: T4_2H_DUALCROSSBOW_HELL                                          : Adept's Boltcasters
4898: T4_2H_DUALCROSSBOW_HELL@1                                        : Adept's Boltcasters
4899: T4_2H_DUALCROSSBOW_HELL@2                                        : Adept's Boltcasters
4900: T4_2H_DUALCROSSBOW_HELL@3                                        : Adept's Boltcasters
4901: T5_2H_DUALCROSSBOW_HELL                                          : Expert's Boltcasters
4902: T5_2H_DUALCROSSBOW_HELL@1                                        : Expert's Boltcasters
4903: T5_2H_DUALCROSSBOW_HELL@2                                        : Expert's Boltcasters
4904: T5_2H_DUALCROSSBOW_HELL@3                                        : Expert's Boltcasters
4905: T6_2H_DUALCROSSBOW_HELL                                          : Master's Boltcasters
4906: T6_2H_DUALCROSSBOW_HELL@1                                        : Master's Boltcasters
4907: T6_2H_DUALCROSSBOW_HELL@2                                        : Master's Boltcasters
4908: T6_2H_DUALCROSSBOW_HELL@3                                        : Master's Boltcasters
4909: T7_2H_DUALCROSSBOW_HELL                                          : Grandmaster's Boltcasters
4910: T7_2H_DUALCROSSBOW_HELL@1                                        : Grandmaster's Boltcasters
4911: T7_2H_DUALCROSSBOW_HELL@2                                        : Grandmaster's Boltcasters
4912: T7_2H_DUALCROSSBOW_HELL@3                                        : Grandmaster's Boltcasters
4913: T8_2H_DUALCROSSBOW_HELL                                          : Elder's Boltcasters
4914: T8_2H_DUALCROSSBOW_HELL@1                                        : Elder's Boltcasters
4915: T8_2H_DUALCROSSBOW_HELL@2                                        : Elder's Boltcasters
4916: T8_2H_DUALCROSSBOW_HELL@3                                        : Elder's Boltcasters
4917: T4_2H_CROSSBOWLARGE_MORGANA                                      : Adept's Siegebow
4918: T4_2H_CROSSBOWLARGE_MORGANA@1                                    : Adept's Siegebow
4919: T4_2H_CROSSBOWLARGE_MORGANA@2                                    : Adept's Siegebow
4920: T4_2H_CROSSBOWLARGE_MORGANA@3                                    : Adept's Siegebow
4921: T5_2H_CROSSBOWLARGE_MORGANA                                      : Expert's Siegebow
4922: T5_2H_CROSSBOWLARGE_MORGANA@1                                    : Expert's Siegebow
4923: T5_2H_CROSSBOWLARGE_MORGANA@2                                    : Expert's Siegebow
4924: T5_2H_CROSSBOWLARGE_MORGANA@3                                    : Expert's Siegebow
4925: T6_2H_CROSSBOWLARGE_MORGANA                                      : Master's Siegebow
4926: T6_2H_CROSSBOWLARGE_MORGANA@1                                    : Master's Siegebow
4927: T6_2H_CROSSBOWLARGE_MORGANA@2                                    : Master's Siegebow
4928: T6_2H_CROSSBOWLARGE_MORGANA@3                                    : Master's Siegebow
4929: T7_2H_CROSSBOWLARGE_MORGANA                                      : Grandmaster's Siegebow
4930: T7_2H_CROSSBOWLARGE_MORGANA@1                                    : Grandmaster's Siegebow
4931: T7_2H_CROSSBOWLARGE_MORGANA@2                                    : Grandmaster's Siegebow
4932: T7_2H_CROSSBOWLARGE_MORGANA@3                                    : Grandmaster's Siegebow
4933: T8_2H_CROSSBOWLARGE_MORGANA                                      : Elder's Siegebow
4934: T8_2H_CROSSBOWLARGE_MORGANA@1                                    : Elder's Siegebow
4935: T8_2H_CROSSBOWLARGE_MORGANA@2                                    : Elder's Siegebow
4936: T8_2H_CROSSBOWLARGE_MORGANA@3                                    : Elder's Siegebow
4937: T4_2H_CROSSBOW_CANNON_AVALON                                     : Adept's Energy Shaper
4938: T4_2H_CROSSBOW_CANNON_AVALON@1                                   : Adept's Energy Shaper
4939: T4_2H_CROSSBOW_CANNON_AVALON@2                                   : Adept's Energy Shaper
4940: T4_2H_CROSSBOW_CANNON_AVALON@3                                   : Adept's Energy Shaper
4941: T5_2H_CROSSBOW_CANNON_AVALON                                     : Expert's Energy Shaper
4942: T5_2H_CROSSBOW_CANNON_AVALON@1                                   : Expert's Energy Shaper
4943: T5_2H_CROSSBOW_CANNON_AVALON@2                                   : Expert's Energy Shaper
4944: T5_2H_CROSSBOW_CANNON_AVALON@3                                   : Expert's Energy Shaper
4945: T6_2H_CROSSBOW_CANNON_AVALON                                     : Master's Energy Shaper
4946: T6_2H_CROSSBOW_CANNON_AVALON@1                                   : Master's Energy Shaper
4947: T6_2H_CROSSBOW_CANNON_AVALON@2                                   : Master's Energy Shaper
4948: T6_2H_CROSSBOW_CANNON_AVALON@3                                   : Master's Energy Shaper
4949: T7_2H_CROSSBOW_CANNON_AVALON                                     : Grandmaster's Energy Shaper
4950: T7_2H_CROSSBOW_CANNON_AVALON@1                                   : Grandmaster's Energy Shaper
4951: T7_2H_CROSSBOW_CANNON_AVALON@2                                   : Grandmaster's Energy Shaper
4952: T7_2H_CROSSBOW_CANNON_AVALON@3                                   : Grandmaster's Energy Shaper
4953: T8_2H_CROSSBOW_CANNON_AVALON                                     : Elder's Energy Shaper
4954: T8_2H_CROSSBOW_CANNON_AVALON@1                                   : Elder's Energy Shaper
4955: T8_2H_CROSSBOW_CANNON_AVALON@2                                   : Elder's Energy Shaper
4956: T8_2H_CROSSBOW_CANNON_AVALON@3                                   : Elder's Energy Shaper
4957: T3_MAIN_CURSEDSTAFF                                              : Journeyman's Cursed Staff
4958: T4_MAIN_CURSEDSTAFF                                              : Adept's Cursed Staff
4959: T4_MAIN_CURSEDSTAFF@1                                            : Adept's Cursed Staff
4960: T4_MAIN_CURSEDSTAFF@2                                            : Adept's Cursed Staff
4961: T4_MAIN_CURSEDSTAFF@3                                            : Adept's Cursed Staff
4962: T5_MAIN_CURSEDSTAFF                                              : Expert's Cursed Staff
4963: T5_MAIN_CURSEDSTAFF@1                                            : Expert's Cursed Staff
4964: T5_MAIN_CURSEDSTAFF@2                                            : Expert's Cursed Staff
4965: T5_MAIN_CURSEDSTAFF@3                                            : Expert's Cursed Staff
4966: T6_MAIN_CURSEDSTAFF                                              : Master's Cursed Staff
4967: T6_MAIN_CURSEDSTAFF@1                                            : Master's Cursed Staff
4968: T6_MAIN_CURSEDSTAFF@2                                            : Master's Cursed Staff
4969: T6_MAIN_CURSEDSTAFF@3                                            : Master's Cursed Staff
4970: T7_MAIN_CURSEDSTAFF                                              : Grandmaster's Cursed Staff
4971: T7_MAIN_CURSEDSTAFF@1                                            : Grandmaster's Cursed Staff
4972: T7_MAIN_CURSEDSTAFF@2                                            : Grandmaster's Cursed Staff
4973: T7_MAIN_CURSEDSTAFF@3                                            : Grandmaster's Cursed Staff
4974: T8_MAIN_CURSEDSTAFF                                              : Elder's Cursed Staff
4975: T8_MAIN_CURSEDSTAFF@1                                            : Elder's Cursed Staff
4976: T8_MAIN_CURSEDSTAFF@2                                            : Elder's Cursed Staff
4977: T8_MAIN_CURSEDSTAFF@3                                            : Elder's Cursed Staff
4978: T4_2H_CURSEDSTAFF                                                : Adept's Great Cursed Staff
4979: T4_2H_CURSEDSTAFF@1                                              : Adept's Great Cursed Staff
4980: T4_2H_CURSEDSTAFF@2                                              : Adept's Great Cursed Staff
4981: T4_2H_CURSEDSTAFF@3                                              : Adept's Great Cursed Staff
4982: T5_2H_CURSEDSTAFF                                                : Expert's Great Cursed Staff
4983: T5_2H_CURSEDSTAFF@1                                              : Expert's Great Cursed Staff
4984: T5_2H_CURSEDSTAFF@2                                              : Expert's Great Cursed Staff
4985: T5_2H_CURSEDSTAFF@3                                              : Expert's Great Cursed Staff
4986: T6_2H_CURSEDSTAFF                                                : Master's Great Cursed Staff
4987: T6_2H_CURSEDSTAFF@1                                              : Master's Great Cursed Staff
4988: T6_2H_CURSEDSTAFF@2                                              : Master's Great Cursed Staff
4989: T6_2H_CURSEDSTAFF@3                                              : Master's Great Cursed Staff
4990: T7_2H_CURSEDSTAFF                                                : Grandmaster's Great Cursed Staff
4991: T7_2H_CURSEDSTAFF@1                                              : Grandmaster's Great Cursed Staff
4992: T7_2H_CURSEDSTAFF@2                                              : Grandmaster's Great Cursed Staff
4993: T7_2H_CURSEDSTAFF@3                                              : Grandmaster's Great Cursed Staff
4994: T8_2H_CURSEDSTAFF                                                : Elder's Great Cursed Staff
4995: T8_2H_CURSEDSTAFF@1                                              : Elder's Great Cursed Staff
4996: T8_2H_CURSEDSTAFF@2                                              : Elder's Great Cursed Staff
4997: T8_2H_CURSEDSTAFF@3                                              : Elder's Great Cursed Staff
4998: T4_2H_DEMONICSTAFF                                               : Adept's Demonic Staff
4999: T4_2H_DEMONICSTAFF@1                                             : Adept's Demonic Staff
5000: T4_2H_DEMONICSTAFF@2                                             : Adept's Demonic Staff
5001: T4_2H_DEMONICSTAFF@3                                             : Adept's Demonic Staff
5002: T5_2H_DEMONICSTAFF                                               : Expert's Demonic Staff
5003: T5_2H_DEMONICSTAFF@1                                             : Expert's Demonic Staff
5004: T5_2H_DEMONICSTAFF@2                                             : Expert's Demonic Staff
5005: T5_2H_DEMONICSTAFF@3                                             : Expert's Demonic Staff
5006: T6_2H_DEMONICSTAFF                                               : Master's Demonic Staff
5007: T6_2H_DEMONICSTAFF@1                                             : Master's Demonic Staff
5008: T6_2H_DEMONICSTAFF@2                                             : Master's Demonic Staff
5009: T6_2H_DEMONICSTAFF@3                                             : Master's Demonic Staff
5010: T7_2H_DEMONICSTAFF                                               : Grandmaster's Demonic Staff
5011: T7_2H_DEMONICSTAFF@1                                             : Grandmaster's Demonic Staff
5012: T7_2H_DEMONICSTAFF@2                                             : Grandmaster's Demonic Staff
5013: T7_2H_DEMONICSTAFF@3                                             : Grandmaster's Demonic Staff
5014: T8_2H_DEMONICSTAFF                                               : Elder's Demonic Staff
5015: T8_2H_DEMONICSTAFF@1                                             : Elder's Demonic Staff
5016: T8_2H_DEMONICSTAFF@2                                             : Elder's Demonic Staff
5017: T8_2H_DEMONICSTAFF@3                                             : Elder's Demonic Staff
5018: T4_MAIN_CURSEDSTAFF_UNDEAD                                       : Adept's Lifecurse Staff
5019: T4_MAIN_CURSEDSTAFF_UNDEAD@1                                     : Adept's Lifecurse Staff
5020: T4_MAIN_CURSEDSTAFF_UNDEAD@2                                     : Adept's Lifecurse Staff
5021: T4_MAIN_CURSEDSTAFF_UNDEAD@3                                     : Adept's Lifecurse Staff
5022: T5_MAIN_CURSEDSTAFF_UNDEAD                                       : Expert's Lifecurse Staff
5023: T5_MAIN_CURSEDSTAFF_UNDEAD@1                                     : Expert's Lifecurse Staff
5024: T5_MAIN_CURSEDSTAFF_UNDEAD@2                                     : Expert's Lifecurse Staff
5025: T5_MAIN_CURSEDSTAFF_UNDEAD@3                                     : Expert's Lifecurse Staff
5026: T6_MAIN_CURSEDSTAFF_UNDEAD                                       : Master's Lifecurse Staff
5027: T6_MAIN_CURSEDSTAFF_UNDEAD@1                                     : Master's Lifecurse Staff
5028: T6_MAIN_CURSEDSTAFF_UNDEAD@2                                     : Master's Lifecurse Staff
5029: T6_MAIN_CURSEDSTAFF_UNDEAD@3                                     : Master's Lifecurse Staff
5030: T7_MAIN_CURSEDSTAFF_UNDEAD                                       : Grandmaster's Lifecurse Staff
5031: T7_MAIN_CURSEDSTAFF_UNDEAD@1                                     : Grandmaster's Lifecurse Staff
5032: T7_MAIN_CURSEDSTAFF_UNDEAD@2                                     : Grandmaster's Lifecurse Staff
5033: T7_MAIN_CURSEDSTAFF_UNDEAD@3                                     : Grandmaster's Lifecurse Staff
5034: T8_MAIN_CURSEDSTAFF_UNDEAD                                       : Elder's Lifecurse Staff
5035: T8_MAIN_CURSEDSTAFF_UNDEAD@1                                     : Elder's Lifecurse Staff
5036: T8_MAIN_CURSEDSTAFF_UNDEAD@2                                     : Elder's Lifecurse Staff
5037: T8_MAIN_CURSEDSTAFF_UNDEAD@3                                     : Elder's Lifecurse Staff
5038: T4_2H_SKULLORB_HELL                                              : Adept's Cursed Skull
5039: T4_2H_SKULLORB_HELL@1                                            : Adept's Cursed Skull
5040: T4_2H_SKULLORB_HELL@2                                            : Adept's Cursed Skull
5041: T4_2H_SKULLORB_HELL@3                                            : Adept's Cursed Skull
5042: T5_2H_SKULLORB_HELL                                              : Expert's Cursed Skull
5043: T5_2H_SKULLORB_HELL@1                                            : Expert's Cursed Skull
5044: T5_2H_SKULLORB_HELL@2                                            : Expert's Cursed Skull
5045: T5_2H_SKULLORB_HELL@3                                            : Expert's Cursed Skull
5046: T6_2H_SKULLORB_HELL                                              : Master's Cursed Skull
5047: T6_2H_SKULLORB_HELL@1                                            : Master's Cursed Skull
5048: T6_2H_SKULLORB_HELL@2                                            : Master's Cursed Skull
5049: T6_2H_SKULLORB_HELL@3                                            : Master's Cursed Skull
5050: T7_2H_SKULLORB_HELL                                              : Grandmaster's Cursed Skull
5051: T7_2H_SKULLORB_HELL@1                                            : Grandmaster's Cursed Skull
5052: T7_2H_SKULLORB_HELL@2                                            : Grandmaster's Cursed Skull
5053: T7_2H_SKULLORB_HELL@3                                            : Grandmaster's Cursed Skull
5054: T8_2H_SKULLORB_HELL                                              : Elder's Cursed Skull
5055: T8_2H_SKULLORB_HELL@1                                            : Elder's Cursed Skull
5056: T8_2H_SKULLORB_HELL@2                                            : Elder's Cursed Skull
5057: T8_2H_SKULLORB_HELL@3                                            : Elder's Cursed Skull
5058: T4_2H_CURSEDSTAFF_MORGANA                                        : Adept's Damnation Staff
5059: T4_2H_CURSEDSTAFF_MORGANA@1                                      : Adept's Damnation Staff
5060: T4_2H_CURSEDSTAFF_MORGANA@2                                      : Adept's Damnation Staff
5061: T4_2H_CURSEDSTAFF_MORGANA@3                                      : Adept's Damnation Staff
5062: T5_2H_CURSEDSTAFF_MORGANA                                        : Expert's Damnation Staff
5063: T5_2H_CURSEDSTAFF_MORGANA@1                                      : Expert's Damnation Staff
5064: T5_2H_CURSEDSTAFF_MORGANA@2                                      : Expert's Damnation Staff
5065: T5_2H_CURSEDSTAFF_MORGANA@3                                      : Expert's Damnation Staff
5066: T6_2H_CURSEDSTAFF_MORGANA                                        : Master's Damnation Staff
5067: T6_2H_CURSEDSTAFF_MORGANA@1                                      : Master's Damnation Staff
5068: T6_2H_CURSEDSTAFF_MORGANA@2                                      : Master's Damnation Staff
5069: T6_2H_CURSEDSTAFF_MORGANA@3                                      : Master's Damnation Staff
5070: T7_2H_CURSEDSTAFF_MORGANA                                        : Grandmaster's Damnation Staff
5071: T7_2H_CURSEDSTAFF_MORGANA@1                                      : Grandmaster's Damnation Staff
5072: T7_2H_CURSEDSTAFF_MORGANA@2                                      : Grandmaster's Damnation Staff
5073: T7_2H_CURSEDSTAFF_MORGANA@3                                      : Grandmaster's Damnation Staff
5074: T8_2H_CURSEDSTAFF_MORGANA                                        : Elder's Damnation Staff
5075: T8_2H_CURSEDSTAFF_MORGANA@1                                      : Elder's Damnation Staff
5076: T8_2H_CURSEDSTAFF_MORGANA@2                                      : Elder's Damnation Staff
5077: T8_2H_CURSEDSTAFF_MORGANA@3                                      : Elder's Damnation Staff
5078: T4_MAIN_CURSEDSTAFF_AVALON                                       : Adept's Shadowcaller
5079: T4_MAIN_CURSEDSTAFF_AVALON@1                                     : Adept's Shadowcaller
5080: T4_MAIN_CURSEDSTAFF_AVALON@2                                     : Adept's Shadowcaller
5081: T4_MAIN_CURSEDSTAFF_AVALON@3                                     : Adept's Shadowcaller
5082: T5_MAIN_CURSEDSTAFF_AVALON                                       : Expert's Shadowcaller
5083: T5_MAIN_CURSEDSTAFF_AVALON@1                                     : Expert's Shadowcaller
5084: T5_MAIN_CURSEDSTAFF_AVALON@2                                     : Expert's Shadowcaller
5085: T5_MAIN_CURSEDSTAFF_AVALON@3                                     : Expert's Shadowcaller
5086: T6_MAIN_CURSEDSTAFF_AVALON                                       : Master's Shadowcaller
5087: T6_MAIN_CURSEDSTAFF_AVALON@1                                     : Master's Shadowcaller
5088: T6_MAIN_CURSEDSTAFF_AVALON@2                                     : Master's Shadowcaller
5089: T6_MAIN_CURSEDSTAFF_AVALON@3                                     : Master's Shadowcaller
5090: T7_MAIN_CURSEDSTAFF_AVALON                                       : Grandmaster's Shadowcaller
5091: T7_MAIN_CURSEDSTAFF_AVALON@1                                     : Grandmaster's Shadowcaller
5092: T7_MAIN_CURSEDSTAFF_AVALON@2                                     : Grandmaster's Shadowcaller
5093: T7_MAIN_CURSEDSTAFF_AVALON@3                                     : Grandmaster's Shadowcaller
5094: T8_MAIN_CURSEDSTAFF_AVALON                                       : Elder's Shadowcaller
5095: T8_MAIN_CURSEDSTAFF_AVALON@1                                     : Elder's Shadowcaller
5096: T8_MAIN_CURSEDSTAFF_AVALON@2                                     : Elder's Shadowcaller
5097: T8_MAIN_CURSEDSTAFF_AVALON@3                                     : Elder's Shadowcaller
5098: T2_MAIN_FIRESTAFF                                                : Novice's Fire Staff
5099: T3_MAIN_FIRESTAFF                                                : Journeyman's Fire Staff
5100: T4_MAIN_FIRESTAFF                                                : Adept's Fire Staff
5101: T4_MAIN_FIRESTAFF@1                                              : Adept's Fire Staff
5102: T4_MAIN_FIRESTAFF@2                                              : Adept's Fire Staff
5103: T4_MAIN_FIRESTAFF@3                                              : Adept's Fire Staff
5104: T5_MAIN_FIRESTAFF                                                : Expert's Fire Staff
5105: T5_MAIN_FIRESTAFF@1                                              : Expert's Fire Staff
5106: T5_MAIN_FIRESTAFF@2                                              : Expert's Fire Staff
5107: T5_MAIN_FIRESTAFF@3                                              : Expert's Fire Staff
5108: T6_MAIN_FIRESTAFF                                                : Master's Fire Staff
5109: T6_MAIN_FIRESTAFF@1                                              : Master's Fire Staff
5110: T6_MAIN_FIRESTAFF@2                                              : Master's Fire Staff
5111: T6_MAIN_FIRESTAFF@3                                              : Master's Fire Staff
5112: T7_MAIN_FIRESTAFF                                                : Grandmaster's Fire Staff
5113: T7_MAIN_FIRESTAFF@1                                              : Grandmaster's Fire Staff
5114: T7_MAIN_FIRESTAFF@2                                              : Grandmaster's Fire Staff
5115: T7_MAIN_FIRESTAFF@3                                              : Grandmaster's Fire Staff
5116: T8_MAIN_FIRESTAFF                                                : Elder's Fire Staff
5117: T8_MAIN_FIRESTAFF@1                                              : Elder's Fire Staff
5118: T8_MAIN_FIRESTAFF@2                                              : Elder's Fire Staff
5119: T8_MAIN_FIRESTAFF@3                                              : Elder's Fire Staff
5120: T4_2H_FIRESTAFF                                                  : Adept's Great Fire Staff
5121: T4_2H_FIRESTAFF@1                                                : Adept's Great Fire Staff
5122: T4_2H_FIRESTAFF@2                                                : Adept's Great Fire Staff
5123: T4_2H_FIRESTAFF@3                                                : Adept's Great Fire Staff
5124: T5_2H_FIRESTAFF                                                  : Expert's Great Fire Staff
5125: T5_2H_FIRESTAFF@1                                                : Expert's Great Fire Staff
5126: T5_2H_FIRESTAFF@2                                                : Expert's Great Fire Staff
5127: T5_2H_FIRESTAFF@3                                                : Expert's Great Fire Staff
5128: T6_2H_FIRESTAFF                                                  : Master's Great Fire Staff
5129: T6_2H_FIRESTAFF@1                                                : Master's Great Fire Staff
5130: T6_2H_FIRESTAFF@2                                                : Master's Great Fire Staff
5131: T6_2H_FIRESTAFF@3                                                : Master's Great Fire Staff
5132: T7_2H_FIRESTAFF                                                  : Grandmaster's Great Fire Staff
5133: T7_2H_FIRESTAFF@1                                                : Grandmaster's Great Fire Staff
5134: T7_2H_FIRESTAFF@2                                                : Grandmaster's Great Fire Staff
5135: T7_2H_FIRESTAFF@3                                                : Grandmaster's Great Fire Staff
5136: T8_2H_FIRESTAFF                                                  : Vendetta's Wrath
5137: T8_2H_FIRESTAFF@1                                                : Vendetta's Wrath
5138: T8_2H_FIRESTAFF@2                                                : Vendetta's Wrath
5139: T8_2H_FIRESTAFF@3                                                : Vendetta's Wrath
5140: T4_2H_INFERNOSTAFF                                               : Adept's Infernal Staff
5141: T4_2H_INFERNOSTAFF@1                                             : Adept's Infernal Staff
5142: T4_2H_INFERNOSTAFF@2                                             : Adept's Infernal Staff
5143: T4_2H_INFERNOSTAFF@3                                             : Adept's Infernal Staff
5144: T5_2H_INFERNOSTAFF                                               : Expert's Infernal Staff
5145: T5_2H_INFERNOSTAFF@1                                             : Expert's Infernal Staff
5146: T5_2H_INFERNOSTAFF@2                                             : Expert's Infernal Staff
5147: T5_2H_INFERNOSTAFF@3                                             : Expert's Infernal Staff
5148: T6_2H_INFERNOSTAFF                                               : Master's Infernal Staff
5149: T6_2H_INFERNOSTAFF@1                                             : Master's Infernal Staff
5150: T6_2H_INFERNOSTAFF@2                                             : Master's Infernal Staff
5151: T6_2H_INFERNOSTAFF@3                                             : Master's Infernal Staff
5152: T7_2H_INFERNOSTAFF                                               : Grandmaster's Infernal Staff
5153: T7_2H_INFERNOSTAFF@1                                             : Grandmaster's Infernal Staff
5154: T7_2H_INFERNOSTAFF@2                                             : Grandmaster's Infernal Staff
5155: T7_2H_INFERNOSTAFF@3                                             : Grandmaster's Infernal Staff
5156: T8_2H_INFERNOSTAFF                                               : Elder's Infernal Staff
5157: T8_2H_INFERNOSTAFF@1                                             : Elder's Infernal Staff
5158: T8_2H_INFERNOSTAFF@2                                             : Elder's Infernal Staff
5159: T8_2H_INFERNOSTAFF@3                                             : Elder's Infernal Staff
5160: T4_MAIN_FIRESTAFF_KEEPER                                         : Adept's Wildfire Staff
5161: T4_MAIN_FIRESTAFF_KEEPER@1                                       : Adept's Wildfire Staff
5162: T4_MAIN_FIRESTAFF_KEEPER@2                                       : Adept's Wildfire Staff
5163: T4_MAIN_FIRESTAFF_KEEPER@3                                       : Adept's Wildfire Staff
5164: T5_MAIN_FIRESTAFF_KEEPER                                         : Expert's Wildfire Staff
5165: T5_MAIN_FIRESTAFF_KEEPER@1                                       : Expert's Wildfire Staff
5166: T5_MAIN_FIRESTAFF_KEEPER@2                                       : Expert's Wildfire Staff
5167: T5_MAIN_FIRESTAFF_KEEPER@3                                       : Expert's Wildfire Staff
5168: T6_MAIN_FIRESTAFF_KEEPER                                         : Master's Wildfire Staff
5169: T6_MAIN_FIRESTAFF_KEEPER@1                                       : Master's Wildfire Staff
5170: T6_MAIN_FIRESTAFF_KEEPER@2                                       : Master's Wildfire Staff
5171: T6_MAIN_FIRESTAFF_KEEPER@3                                       : Master's Wildfire Staff
5172: T7_MAIN_FIRESTAFF_KEEPER                                         : Grandmaster's Wildfire Staff
5173: T7_MAIN_FIRESTAFF_KEEPER@1                                       : Grandmaster's Wildfire Staff
5174: T7_MAIN_FIRESTAFF_KEEPER@2                                       : Grandmaster's Wildfire Staff
5175: T7_MAIN_FIRESTAFF_KEEPER@3                                       : Grandmaster's Wildfire Staff
5176: T8_MAIN_FIRESTAFF_KEEPER                                         : Elder's Wildfire Staff
5177: T8_MAIN_FIRESTAFF_KEEPER@1                                       : Elder's Wildfire Staff
5178: T8_MAIN_FIRESTAFF_KEEPER@2                                       : Elder's Wildfire Staff
5179: T8_MAIN_FIRESTAFF_KEEPER@3                                       : Elder's Wildfire Staff
5180: T4_2H_FIRESTAFF_HELL                                             : Adept's Brimstone Staff
5181: T4_2H_FIRESTAFF_HELL@1                                           : Adept's Brimstone Staff
5182: T4_2H_FIRESTAFF_HELL@2                                           : Adept's Brimstone Staff
5183: T4_2H_FIRESTAFF_HELL@3                                           : Adept's Brimstone Staff
5184: T5_2H_FIRESTAFF_HELL                                             : Expert's Brimstone Staff
5185: T5_2H_FIRESTAFF_HELL@1                                           : Expert's Brimstone Staff
5186: T5_2H_FIRESTAFF_HELL@2                                           : Expert's Brimstone Staff
5187: T5_2H_FIRESTAFF_HELL@3                                           : Expert's Brimstone Staff
5188: T6_2H_FIRESTAFF_HELL                                             : Master's Brimstone Staff
5189: T6_2H_FIRESTAFF_HELL@1                                           : Master's Brimstone Staff
5190: T6_2H_FIRESTAFF_HELL@2                                           : Master's Brimstone Staff
5191: T6_2H_FIRESTAFF_HELL@3                                           : Master's Brimstone Staff
5192: T7_2H_FIRESTAFF_HELL                                             : Grandmaster's Brimstone Staff
5193: T7_2H_FIRESTAFF_HELL@1                                           : Grandmaster's Brimstone Staff
5194: T7_2H_FIRESTAFF_HELL@2                                           : Grandmaster's Brimstone Staff
5195: T7_2H_FIRESTAFF_HELL@3                                           : Grandmaster's Brimstone Staff
5196: T8_2H_FIRESTAFF_HELL                                             : Elder's Brimstone Staff
5197: T8_2H_FIRESTAFF_HELL@1                                           : Elder's Brimstone Staff
5198: T8_2H_FIRESTAFF_HELL@2                                           : Elder's Brimstone Staff
5199: T8_2H_FIRESTAFF_HELL@3                                           : Elder's Brimstone Staff
5200: T4_2H_INFERNOSTAFF_MORGANA                                       : Adept's Blazing Staff
5201: T4_2H_INFERNOSTAFF_MORGANA@1                                     : Adept's Blazing Staff
5202: T4_2H_INFERNOSTAFF_MORGANA@2                                     : Adept's Blazing Staff
5203: T4_2H_INFERNOSTAFF_MORGANA@3                                     : Adept's Blazing Staff
5204: T5_2H_INFERNOSTAFF_MORGANA                                       : Expert's Blazing Staff
5205: T5_2H_INFERNOSTAFF_MORGANA@1                                     : Expert's Blazing Staff
5206: T5_2H_INFERNOSTAFF_MORGANA@2                                     : Expert's Blazing Staff
5207: T5_2H_INFERNOSTAFF_MORGANA@3                                     : Expert's Blazing Staff
5208: T6_2H_INFERNOSTAFF_MORGANA                                       : Master's Blazing Staff
5209: T6_2H_INFERNOSTAFF_MORGANA@1                                     : Master's Blazing Staff
5210: T6_2H_INFERNOSTAFF_MORGANA@2                                     : Master's Blazing Staff
5211: T6_2H_INFERNOSTAFF_MORGANA@3                                     : Master's Blazing Staff
5212: T7_2H_INFERNOSTAFF_MORGANA                                       : Grandmaster's Blazing Staff
5213: T7_2H_INFERNOSTAFF_MORGANA@1                                     : Grandmaster's Blazing Staff
5214: T7_2H_INFERNOSTAFF_MORGANA@2                                     : Grandmaster's Blazing Staff
5215: T7_2H_INFERNOSTAFF_MORGANA@3                                     : Grandmaster's Blazing Staff
5216: T8_2H_INFERNOSTAFF_MORGANA                                       : Elder's Blazing Staff
5217: T8_2H_INFERNOSTAFF_MORGANA@1                                     : Elder's Blazing Staff
5218: T8_2H_INFERNOSTAFF_MORGANA@2                                     : Elder's Blazing Staff
5219: T8_2H_INFERNOSTAFF_MORGANA@3                                     : Elder's Blazing Staff
5220: T4_2H_FIRE_RINGPAIR_AVALON                                       : Adept's Dawnsong
5221: T4_2H_FIRE_RINGPAIR_AVALON@1                                     : Adept's Dawnsong
5222: T4_2H_FIRE_RINGPAIR_AVALON@2                                     : Adept's Dawnsong
5223: T4_2H_FIRE_RINGPAIR_AVALON@3                                     : Adept's Dawnsong
5224: T5_2H_FIRE_RINGPAIR_AVALON                                       : Expert's Dawnsong
5225: T5_2H_FIRE_RINGPAIR_AVALON@1                                     : Expert's Dawnsong
5226: T5_2H_FIRE_RINGPAIR_AVALON@2                                     : Expert's Dawnsong
5227: T5_2H_FIRE_RINGPAIR_AVALON@3                                     : Expert's Dawnsong
5228: T6_2H_FIRE_RINGPAIR_AVALON                                       : Master's Dawnsong
5229: T6_2H_FIRE_RINGPAIR_AVALON@1                                     : Master's Dawnsong
5230: T6_2H_FIRE_RINGPAIR_AVALON@2                                     : Master's Dawnsong
5231: T6_2H_FIRE_RINGPAIR_AVALON@3                                     : Master's Dawnsong
5232: T7_2H_FIRE_RINGPAIR_AVALON                                       : Grandmaster's Dawnsong
5233: T7_2H_FIRE_RINGPAIR_AVALON@1                                     : Grandmaster's Dawnsong
5234: T7_2H_FIRE_RINGPAIR_AVALON@2                                     : Grandmaster's Dawnsong
5235: T7_2H_FIRE_RINGPAIR_AVALON@3                                     : Grandmaster's Dawnsong
5236: T8_2H_FIRE_RINGPAIR_AVALON                                       : Elder's Dawnsong
5237: T8_2H_FIRE_RINGPAIR_AVALON@1                                     : Elder's Dawnsong
5238: T8_2H_FIRE_RINGPAIR_AVALON@2                                     : Elder's Dawnsong
5239: T8_2H_FIRE_RINGPAIR_AVALON@3                                     : Elder's Dawnsong
5240: T3_MAIN_FROSTSTAFF                                               : Journeyman's Frost Staff
5241: T4_MAIN_FROSTSTAFF                                               : Adept's Frost Staff
5242: T4_MAIN_FROSTSTAFF@1                                             : Adept's Frost Staff
5243: T4_MAIN_FROSTSTAFF@2                                             : Adept's Frost Staff
5244: T4_MAIN_FROSTSTAFF@3                                             : Adept's Frost Staff
5245: T5_MAIN_FROSTSTAFF                                               : Expert's Frost Staff
5246: T5_MAIN_FROSTSTAFF@1                                             : Expert's Frost Staff
5247: T5_MAIN_FROSTSTAFF@2                                             : Expert's Frost Staff
5248: T5_MAIN_FROSTSTAFF@3                                             : Expert's Frost Staff
5249: T6_MAIN_FROSTSTAFF                                               : Master's Frost Staff
5250: T6_MAIN_FROSTSTAFF@1                                             : Master's Frost Staff
5251: T6_MAIN_FROSTSTAFF@2                                             : Master's Frost Staff
5252: T6_MAIN_FROSTSTAFF@3                                             : Master's Frost Staff
5253: T7_MAIN_FROSTSTAFF                                               : Grandmaster's Frost Staff
5254: T7_MAIN_FROSTSTAFF@1                                             : Grandmaster's Frost Staff
5255: T7_MAIN_FROSTSTAFF@2                                             : Grandmaster's Frost Staff
5256: T7_MAIN_FROSTSTAFF@3                                             : Grandmaster's Frost Staff
5257: T8_MAIN_FROSTSTAFF                                               : Elder's Frost Staff
5258: T8_MAIN_FROSTSTAFF@1                                             : Elder's Frost Staff
5259: T8_MAIN_FROSTSTAFF@2                                             : Elder's Frost Staff
5260: T8_MAIN_FROSTSTAFF@3                                             : Elder's Frost Staff
5261: T4_2H_FROSTSTAFF                                                 : Adept's Great Frost Staff
5262: T4_2H_FROSTSTAFF@1                                               : Adept's Great Frost Staff
5263: T4_2H_FROSTSTAFF@2                                               : Adept's Great Frost Staff
5264: T4_2H_FROSTSTAFF@3                                               : Adept's Great Frost Staff
5265: T5_2H_FROSTSTAFF                                                 : Expert's Great Frost Staff
5266: T5_2H_FROSTSTAFF@1                                               : Expert's Great Frost Staff
5267: T5_2H_FROSTSTAFF@2                                               : Expert's Great Frost Staff
5268: T5_2H_FROSTSTAFF@3                                               : Expert's Great Frost Staff
5269: T6_2H_FROSTSTAFF                                                 : Master's Great Frost Staff
5270: T6_2H_FROSTSTAFF@1                                               : Master's Great Frost Staff
5271: T6_2H_FROSTSTAFF@2                                               : Master's Great Frost Staff
5272: T6_2H_FROSTSTAFF@3                                               : Master's Great Frost Staff
5273: T7_2H_FROSTSTAFF                                                 : Grandmaster's Great Frost Staff
5274: T7_2H_FROSTSTAFF@1                                               : Grandmaster's Great Frost Staff
5275: T7_2H_FROSTSTAFF@2                                               : Grandmaster's Great Frost Staff
5276: T7_2H_FROSTSTAFF@3                                               : Grandmaster's Great Frost Staff
5277: T8_2H_FROSTSTAFF                                                 : Elder's Great Frost Staff
5278: T8_2H_FROSTSTAFF@1                                               : Elder's Great Frost Staff
5279: T8_2H_FROSTSTAFF@2                                               : Elder's Great Frost Staff
5280: T8_2H_FROSTSTAFF@3                                               : Elder's Great Frost Staff
5281: T4_2H_GLACIALSTAFF                                               : Adept's Glacial Staff
5282: T4_2H_GLACIALSTAFF@1                                             : Adept's Glacial Staff
5283: T4_2H_GLACIALSTAFF@2                                             : Adept's Glacial Staff
5284: T4_2H_GLACIALSTAFF@3                                             : Adept's Glacial Staff
5285: T5_2H_GLACIALSTAFF                                               : Expert's Glacial Staff
5286: T5_2H_GLACIALSTAFF@1                                             : Expert's Glacial Staff
5287: T5_2H_GLACIALSTAFF@2                                             : Expert's Glacial Staff
5288: T5_2H_GLACIALSTAFF@3                                             : Expert's Glacial Staff
5289: T6_2H_GLACIALSTAFF                                               : Master's Glacial Staff
5290: T6_2H_GLACIALSTAFF@1                                             : Master's Glacial Staff
5291: T6_2H_GLACIALSTAFF@2                                             : Master's Glacial Staff
5292: T6_2H_GLACIALSTAFF@3                                             : Master's Glacial Staff
5293: T7_2H_GLACIALSTAFF                                               : Grandmaster's Glacial Staff
5294: T7_2H_GLACIALSTAFF@1                                             : Grandmaster's Glacial Staff
5295: T7_2H_GLACIALSTAFF@2                                             : Grandmaster's Glacial Staff
5296: T7_2H_GLACIALSTAFF@3                                             : Grandmaster's Glacial Staff
5297: T8_2H_GLACIALSTAFF                                               : Elder's Glacial Staff
5298: T8_2H_GLACIALSTAFF@1                                             : Elder's Glacial Staff
5299: T8_2H_GLACIALSTAFF@2                                             : Elder's Glacial Staff
5300: T8_2H_GLACIALSTAFF@3                                             : Elder's Glacial Staff
5301: T4_MAIN_FROSTSTAFF_KEEPER                                        : Adept's Hoarfrost Staff
5302: T4_MAIN_FROSTSTAFF_KEEPER@1                                      : Adept's Hoarfrost Staff
5303: T4_MAIN_FROSTSTAFF_KEEPER@2                                      : Adept's Hoarfrost Staff
5304: T4_MAIN_FROSTSTAFF_KEEPER@3                                      : Adept's Hoarfrost Staff
5305: T5_MAIN_FROSTSTAFF_KEEPER                                        : Expert's Hoarfrost Staff
5306: T5_MAIN_FROSTSTAFF_KEEPER@1                                      : Expert's Hoarfrost Staff
5307: T5_MAIN_FROSTSTAFF_KEEPER@2                                      : Expert's Hoarfrost Staff
5308: T5_MAIN_FROSTSTAFF_KEEPER@3                                      : Expert's Hoarfrost Staff
5309: T6_MAIN_FROSTSTAFF_KEEPER                                        : Master's Hoarfrost Staff
5310: T6_MAIN_FROSTSTAFF_KEEPER@1                                      : Master's Hoarfrost Staff
5311: T6_MAIN_FROSTSTAFF_KEEPER@2                                      : Master's Hoarfrost Staff
5312: T6_MAIN_FROSTSTAFF_KEEPER@3                                      : Master's Hoarfrost Staff
5313: T7_MAIN_FROSTSTAFF_KEEPER                                        : Grandmaster's Hoarfrost Staff
5314: T7_MAIN_FROSTSTAFF_KEEPER@1                                      : Grandmaster's Hoarfrost Staff
5315: T7_MAIN_FROSTSTAFF_KEEPER@2                                      : Grandmaster's Hoarfrost Staff
5316: T7_MAIN_FROSTSTAFF_KEEPER@3                                      : Grandmaster's Hoarfrost Staff
5317: T8_MAIN_FROSTSTAFF_KEEPER                                        : Elder's Hoarfrost Staff
5318: T8_MAIN_FROSTSTAFF_KEEPER@1                                      : Elder's Hoarfrost Staff
5319: T8_MAIN_FROSTSTAFF_KEEPER@2                                      : Elder's Hoarfrost Staff
5320: T8_MAIN_FROSTSTAFF_KEEPER@3                                      : Elder's Hoarfrost Staff
5321: T4_2H_ICEGAUNTLETS_HELL                                          : Adept's Icicle Staff
5322: T4_2H_ICEGAUNTLETS_HELL@1                                        : Adept's Icicle Staff
5323: T4_2H_ICEGAUNTLETS_HELL@2                                        : Adept's Icicle Staff
5324: T4_2H_ICEGAUNTLETS_HELL@3                                        : Adept's Icicle Staff
5325: T5_2H_ICEGAUNTLETS_HELL                                          : Expert's Icicle Staff
5326: T5_2H_ICEGAUNTLETS_HELL@1                                        : Expert's Icicle Staff
5327: T5_2H_ICEGAUNTLETS_HELL@2                                        : Expert's Icicle Staff
5328: T5_2H_ICEGAUNTLETS_HELL@3                                        : Expert's Icicle Staff
5329: T6_2H_ICEGAUNTLETS_HELL                                          : Master's Icicle Staff
5330: T6_2H_ICEGAUNTLETS_HELL@1                                        : Master's Icicle Staff
5331: T6_2H_ICEGAUNTLETS_HELL@2                                        : Master's Icicle Staff
5332: T6_2H_ICEGAUNTLETS_HELL@3                                        : Master's Icicle Staff
5333: T7_2H_ICEGAUNTLETS_HELL                                          : Grandmaster's Icicle Staff
5334: T7_2H_ICEGAUNTLETS_HELL@1                                        : Grandmaster's Icicle Staff
5335: T7_2H_ICEGAUNTLETS_HELL@2                                        : Grandmaster's Icicle Staff
5336: T7_2H_ICEGAUNTLETS_HELL@3                                        : Grandmaster's Icicle Staff
5337: T8_2H_ICEGAUNTLETS_HELL                                          : Elder's Icicle Staff
5338: T8_2H_ICEGAUNTLETS_HELL@1                                        : Elder's Icicle Staff
5339: T8_2H_ICEGAUNTLETS_HELL@2                                        : Elder's Icicle Staff
5340: T8_2H_ICEGAUNTLETS_HELL@3                                        : Elder's Icicle Staff
5341: T4_2H_ICECRYSTAL_UNDEAD                                          : Adept's Permafrost Prism
5342: T4_2H_ICECRYSTAL_UNDEAD@1                                        : Adept's Permafrost Prism
5343: T4_2H_ICECRYSTAL_UNDEAD@2                                        : Adept's Permafrost Prism
5344: T4_2H_ICECRYSTAL_UNDEAD@3                                        : Adept's Permafrost Prism
5345: T5_2H_ICECRYSTAL_UNDEAD                                          : Expert's Permafrost Prism
5346: T5_2H_ICECRYSTAL_UNDEAD@1                                        : Expert's Permafrost Prism
5347: T5_2H_ICECRYSTAL_UNDEAD@2                                        : Expert's Permafrost Prism
5348: T5_2H_ICECRYSTAL_UNDEAD@3                                        : Expert's Permafrost Prism
5349: T6_2H_ICECRYSTAL_UNDEAD                                          : Master's Permafrost Prism
5350: T6_2H_ICECRYSTAL_UNDEAD@1                                        : Master's Permafrost Prism
5351: T6_2H_ICECRYSTAL_UNDEAD@2                                        : Master's Permafrost Prism
5352: T6_2H_ICECRYSTAL_UNDEAD@3                                        : Master's Permafrost Prism
5353: T7_2H_ICECRYSTAL_UNDEAD                                          : Grandmaster's Permafrost Prism
5354: T7_2H_ICECRYSTAL_UNDEAD@1                                        : Grandmaster's Permafrost Prism
5355: T7_2H_ICECRYSTAL_UNDEAD@2                                        : Grandmaster's Permafrost Prism
5356: T7_2H_ICECRYSTAL_UNDEAD@3                                        : Grandmaster's Permafrost Prism
5357: T8_2H_ICECRYSTAL_UNDEAD                                          : Elder's Permafrost Prism
5358: T8_2H_ICECRYSTAL_UNDEAD@1                                        : Elder's Permafrost Prism
5359: T8_2H_ICECRYSTAL_UNDEAD@2                                        : Elder's Permafrost Prism
5360: T8_2H_ICECRYSTAL_UNDEAD@3                                        : Elder's Permafrost Prism
5361: T4_MAIN_FROSTSTAFF_AVALON                                        : Adept's Chillhowl
5362: T4_MAIN_FROSTSTAFF_AVALON@1                                      : Adept's Chillhowl
5363: T4_MAIN_FROSTSTAFF_AVALON@2                                      : Adept's Chillhowl
5364: T4_MAIN_FROSTSTAFF_AVALON@3                                      : Adept's Chillhowl
5365: T5_MAIN_FROSTSTAFF_AVALON                                        : Expert's Chillhowl
5366: T5_MAIN_FROSTSTAFF_AVALON@1                                      : Expert's Chillhowl
5367: T5_MAIN_FROSTSTAFF_AVALON@2                                      : Expert's Chillhowl
5368: T5_MAIN_FROSTSTAFF_AVALON@3                                      : Expert's Chillhowl
5369: T6_MAIN_FROSTSTAFF_AVALON                                        : Master's Chillhowl
5370: T6_MAIN_FROSTSTAFF_AVALON@1                                      : Master's Chillhowl
5371: T6_MAIN_FROSTSTAFF_AVALON@2                                      : Master's Chillhowl
5372: T6_MAIN_FROSTSTAFF_AVALON@3                                      : Master's Chillhowl
5373: T7_MAIN_FROSTSTAFF_AVALON                                        : Grandmaster's Chillhowl
5374: T7_MAIN_FROSTSTAFF_AVALON@1                                      : Grandmaster's Chillhowl
5375: T7_MAIN_FROSTSTAFF_AVALON@2                                      : Grandmaster's Chillhowl
5376: T7_MAIN_FROSTSTAFF_AVALON@3                                      : Grandmaster's Chillhowl
5377: T8_MAIN_FROSTSTAFF_AVALON                                        : Elder's Chillhowl
5378: T8_MAIN_FROSTSTAFF_AVALON@1                                      : Elder's Chillhowl
5379: T8_MAIN_FROSTSTAFF_AVALON@2                                      : Elder's Chillhowl
5380: T8_MAIN_FROSTSTAFF_AVALON@3                                      : Elder's Chillhowl
5381: T3_MAIN_ARCANESTAFF                                              : Journeyman's Arcane Staff
5382: T4_MAIN_ARCANESTAFF                                              : Adept's Arcane Staff
5383: T4_MAIN_ARCANESTAFF@1                                            : Adept's Arcane Staff
5384: T4_MAIN_ARCANESTAFF@2                                            : Adept's Arcane Staff
5385: T4_MAIN_ARCANESTAFF@3                                            : Adept's Arcane Staff
5386: T5_MAIN_ARCANESTAFF                                              : Expert's Arcane Staff
5387: T5_MAIN_ARCANESTAFF@1                                            : Expert's Arcane Staff
5388: T5_MAIN_ARCANESTAFF@2                                            : Expert's Arcane Staff
5389: T5_MAIN_ARCANESTAFF@3                                            : Expert's Arcane Staff
5390: T6_MAIN_ARCANESTAFF                                              : Master's Arcane Staff
5391: T6_MAIN_ARCANESTAFF@1                                            : Master's Arcane Staff
5392: T6_MAIN_ARCANESTAFF@2                                            : Master's Arcane Staff
5393: T6_MAIN_ARCANESTAFF@3                                            : Master's Arcane Staff
5394: T7_MAIN_ARCANESTAFF                                              : Grandmaster's Arcane Staff
5395: T7_MAIN_ARCANESTAFF@1                                            : Grandmaster's Arcane Staff
5396: T7_MAIN_ARCANESTAFF@2                                            : Grandmaster's Arcane Staff
5397: T7_MAIN_ARCANESTAFF@3                                            : Grandmaster's Arcane Staff
5398: T8_MAIN_ARCANESTAFF                                              : Elder's Arcane Staff
5399: T8_MAIN_ARCANESTAFF@1                                            : Elder's Arcane Staff
5400: T8_MAIN_ARCANESTAFF@2                                            : Elder's Arcane Staff
5401: T8_MAIN_ARCANESTAFF@3                                            : Elder's Arcane Staff
5402: T4_2H_ARCANESTAFF                                                : Adept's Great Arcane Staff
5403: T4_2H_ARCANESTAFF@1                                              : Adept's Great Arcane Staff
5404: T4_2H_ARCANESTAFF@2                                              : Adept's Great Arcane Staff
5405: T4_2H_ARCANESTAFF@3                                              : Adept's Great Arcane Staff
5406: T5_2H_ARCANESTAFF                                                : Expert's Great Arcane Staff
5407: T5_2H_ARCANESTAFF@1                                              : Expert's Great Arcane Staff
5408: T5_2H_ARCANESTAFF@2                                              : Expert's Great Arcane Staff
5409: T5_2H_ARCANESTAFF@3                                              : Expert's Great Arcane Staff
5410: T6_2H_ARCANESTAFF                                                : Master's Great Arcane Staff
5411: T6_2H_ARCANESTAFF@1                                              : Master's Great Arcane Staff
5412: T6_2H_ARCANESTAFF@2                                              : Master's Great Arcane Staff
5413: T6_2H_ARCANESTAFF@3                                              : Master's Great Arcane Staff
5414: T7_2H_ARCANESTAFF                                                : Grandmaster's Great Arcane Staff
5415: T7_2H_ARCANESTAFF@1                                              : Grandmaster's Great Arcane Staff
5416: T7_2H_ARCANESTAFF@2                                              : Grandmaster's Great Arcane Staff
5417: T7_2H_ARCANESTAFF@3                                              : Grandmaster's Great Arcane Staff
5418: T8_2H_ARCANESTAFF                                                : Elder's Great Arcane Staff
5419: T8_2H_ARCANESTAFF@1                                              : Elder's Great Arcane Staff
5420: T8_2H_ARCANESTAFF@2                                              : Elder's Great Arcane Staff
5421: T8_2H_ARCANESTAFF@3                                              : Elder's Great Arcane Staff
5422: T4_2H_ENIGMATICSTAFF                                             : Adept's Enigmatic Staff
5423: T4_2H_ENIGMATICSTAFF@1                                           : Adept's Enigmatic Staff
5424: T4_2H_ENIGMATICSTAFF@2                                           : Adept's Enigmatic Staff
5425: T4_2H_ENIGMATICSTAFF@3                                           : Adept's Enigmatic Staff
5426: T5_2H_ENIGMATICSTAFF                                             : Expert's Enigmatic Staff
5427: T5_2H_ENIGMATICSTAFF@1                                           : Expert's Enigmatic Staff
5428: T5_2H_ENIGMATICSTAFF@2                                           : Expert's Enigmatic Staff
5429: T5_2H_ENIGMATICSTAFF@3                                           : Expert's Enigmatic Staff
5430: T6_2H_ENIGMATICSTAFF                                             : Master's Enigmatic Staff
5431: T6_2H_ENIGMATICSTAFF@1                                           : Master's Enigmatic Staff
5432: T6_2H_ENIGMATICSTAFF@2                                           : Master's Enigmatic Staff
5433: T6_2H_ENIGMATICSTAFF@3                                           : Master's Enigmatic Staff
5434: T7_2H_ENIGMATICSTAFF                                             : Grandmaster's Enigmatic Staff
5435: T7_2H_ENIGMATICSTAFF@1                                           : Grandmaster's Enigmatic Staff
5436: T7_2H_ENIGMATICSTAFF@2                                           : Grandmaster's Enigmatic Staff
5437: T7_2H_ENIGMATICSTAFF@3                                           : Grandmaster's Enigmatic Staff
5438: T8_2H_ENIGMATICSTAFF                                             : Elder's Enigmatic Staff
5439: T8_2H_ENIGMATICSTAFF@1                                           : Elder's Enigmatic Staff
5440: T8_2H_ENIGMATICSTAFF@2                                           : Elder's Enigmatic Staff
5441: T8_2H_ENIGMATICSTAFF@3                                           : Elder's Enigmatic Staff
5442: T4_MAIN_ARCANESTAFF_UNDEAD                                       : Adept's Witchwork Staff
5443: T4_MAIN_ARCANESTAFF_UNDEAD@1                                     : Adept's Witchwork Staff
5444: T4_MAIN_ARCANESTAFF_UNDEAD@2                                     : Adept's Witchwork Staff
5445: T4_MAIN_ARCANESTAFF_UNDEAD@3                                     : Adept's Witchwork Staff
5446: T5_MAIN_ARCANESTAFF_UNDEAD                                       : Expert's Witchwork Staff
5447: T5_MAIN_ARCANESTAFF_UNDEAD@1                                     : Expert's Witchwork Staff
5448: T5_MAIN_ARCANESTAFF_UNDEAD@2                                     : Expert's Witchwork Staff
5449: T5_MAIN_ARCANESTAFF_UNDEAD@3                                     : Expert's Witchwork Staff
5450: T6_MAIN_ARCANESTAFF_UNDEAD                                       : Master's Witchwork Staff
5451: T6_MAIN_ARCANESTAFF_UNDEAD@1                                     : Master's Witchwork Staff
5452: T6_MAIN_ARCANESTAFF_UNDEAD@2                                     : Master's Witchwork Staff
5453: T6_MAIN_ARCANESTAFF_UNDEAD@3                                     : Master's Witchwork Staff
5454: T7_MAIN_ARCANESTAFF_UNDEAD                                       : Grandmaster's Witchwork Staff
5455: T7_MAIN_ARCANESTAFF_UNDEAD@1                                     : Grandmaster's Witchwork Staff
5456: T7_MAIN_ARCANESTAFF_UNDEAD@2                                     : Grandmaster's Witchwork Staff
5457: T7_MAIN_ARCANESTAFF_UNDEAD@3                                     : Grandmaster's Witchwork Staff
5458: T8_MAIN_ARCANESTAFF_UNDEAD                                       : Elder's Witchwork Staff
5459: T8_MAIN_ARCANESTAFF_UNDEAD@1                                     : Elder's Witchwork Staff
5460: T8_MAIN_ARCANESTAFF_UNDEAD@2                                     : Elder's Witchwork Staff
5461: T8_MAIN_ARCANESTAFF_UNDEAD@3                                     : Elder's Witchwork Staff
5462: T4_2H_ARCANESTAFF_HELL                                           : Adept's Occult Staff
5463: T4_2H_ARCANESTAFF_HELL@1                                         : Adept's Occult Staff
5464: T4_2H_ARCANESTAFF_HELL@2                                         : Adept's Occult Staff
5465: T4_2H_ARCANESTAFF_HELL@3                                         : Adept's Occult Staff
5466: T5_2H_ARCANESTAFF_HELL                                           : Expert's Occult Staff
5467: T5_2H_ARCANESTAFF_HELL@1                                         : Expert's Occult Staff
5468: T5_2H_ARCANESTAFF_HELL@2                                         : Expert's Occult Staff
5469: T5_2H_ARCANESTAFF_HELL@3                                         : Expert's Occult Staff
5470: T6_2H_ARCANESTAFF_HELL                                           : Master's Occult Staff
5471: T6_2H_ARCANESTAFF_HELL@1                                         : Master's Occult Staff
5472: T6_2H_ARCANESTAFF_HELL@2                                         : Master's Occult Staff
5473: T6_2H_ARCANESTAFF_HELL@3                                         : Master's Occult Staff
5474: T7_2H_ARCANESTAFF_HELL                                           : Grandmaster's Occult Staff
5475: T7_2H_ARCANESTAFF_HELL@1                                         : Grandmaster's Occult Staff
5476: T7_2H_ARCANESTAFF_HELL@2                                         : Grandmaster's Occult Staff
5477: T7_2H_ARCANESTAFF_HELL@3                                         : Grandmaster's Occult Staff
5478: T8_2H_ARCANESTAFF_HELL                                           : Elder's Occult Staff
5479: T8_2H_ARCANESTAFF_HELL@1                                         : Elder's Occult Staff
5480: T8_2H_ARCANESTAFF_HELL@2                                         : Elder's Occult Staff
5481: T8_2H_ARCANESTAFF_HELL@3                                         : Elder's Occult Staff
5482: T4_2H_ENIGMATICORB_MORGANA                                       : Adept's Malevolent Locus
5483: T4_2H_ENIGMATICORB_MORGANA@1                                     : Adept's Malevolent Locus
5484: T4_2H_ENIGMATICORB_MORGANA@2                                     : Adept's Malevolent Locus
5485: T4_2H_ENIGMATICORB_MORGANA@3                                     : Adept's Malevolent Locus
5486: T5_2H_ENIGMATICORB_MORGANA                                       : Expert's Malevolent Locus
5487: T5_2H_ENIGMATICORB_MORGANA@1                                     : Expert's Malevolent Locus
5488: T5_2H_ENIGMATICORB_MORGANA@2                                     : Expert's Malevolent Locus
5489: T5_2H_ENIGMATICORB_MORGANA@3                                     : Expert's Malevolent Locus
5490: T6_2H_ENIGMATICORB_MORGANA                                       : Master's Malevolent Locus
5491: T6_2H_ENIGMATICORB_MORGANA@1                                     : Master's Malevolent Locus
5492: T6_2H_ENIGMATICORB_MORGANA@2                                     : Master's Malevolent Locus
5493: T6_2H_ENIGMATICORB_MORGANA@3                                     : Master's Malevolent Locus
5494: T7_2H_ENIGMATICORB_MORGANA                                       : Grandmaster's Malevolent Locus
5495: T7_2H_ENIGMATICORB_MORGANA@1                                     : Grandmaster's Malevolent Locus
5496: T7_2H_ENIGMATICORB_MORGANA@2                                     : Grandmaster's Malevolent Locus
5497: T7_2H_ENIGMATICORB_MORGANA@3                                     : Grandmaster's Malevolent Locus
5498: T8_2H_ENIGMATICORB_MORGANA                                       : Elder's Malevolent Locus
5499: T8_2H_ENIGMATICORB_MORGANA@1                                     : Elder's Malevolent Locus
5500: T8_2H_ENIGMATICORB_MORGANA@2                                     : Elder's Malevolent Locus
5501: T8_2H_ENIGMATICORB_MORGANA@3                                     : Elder's Malevolent Locus
5502: T4_2H_ARCANE_RINGPAIR_AVALON                                     : Adept's Evensong
5503: T4_2H_ARCANE_RINGPAIR_AVALON@1                                   : Adept's Evensong
5504: T4_2H_ARCANE_RINGPAIR_AVALON@2                                   : Adept's Evensong
5505: T4_2H_ARCANE_RINGPAIR_AVALON@3                                   : Adept's Evensong
5506: T5_2H_ARCANE_RINGPAIR_AVALON                                     : Expert's Evensong
5507: T5_2H_ARCANE_RINGPAIR_AVALON@1                                   : Expert's Evensong
5508: T5_2H_ARCANE_RINGPAIR_AVALON@2                                   : Expert's Evensong
5509: T5_2H_ARCANE_RINGPAIR_AVALON@3                                   : Expert's Evensong
5510: T6_2H_ARCANE_RINGPAIR_AVALON                                     : Master's Evensong
5511: T6_2H_ARCANE_RINGPAIR_AVALON@1                                   : Master's Evensong
5512: T6_2H_ARCANE_RINGPAIR_AVALON@2                                   : Master's Evensong
5513: T6_2H_ARCANE_RINGPAIR_AVALON@3                                   : Master's Evensong
5514: T7_2H_ARCANE_RINGPAIR_AVALON                                     : Grandmaster's Evensong
5515: T7_2H_ARCANE_RINGPAIR_AVALON@1                                   : Grandmaster's Evensong
5516: T7_2H_ARCANE_RINGPAIR_AVALON@2                                   : Grandmaster's Evensong
5517: T7_2H_ARCANE_RINGPAIR_AVALON@3                                   : Grandmaster's Evensong
5518: T8_2H_ARCANE_RINGPAIR_AVALON                                     : Elder's Evensong
5519: T8_2H_ARCANE_RINGPAIR_AVALON@1                                   : Elder's Evensong
5520: T8_2H_ARCANE_RINGPAIR_AVALON@2                                   : Elder's Evensong
5521: T8_2H_ARCANE_RINGPAIR_AVALON@3                                   : Elder's Evensong
5522: T3_MAIN_HOLYSTAFF                                                : Journeyman's Holy Staff
5523: T4_MAIN_HOLYSTAFF                                                : Adept's Holy Staff
5524: T4_MAIN_HOLYSTAFF@1                                              : Adept's Holy Staff
5525: T4_MAIN_HOLYSTAFF@2                                              : Adept's Holy Staff
5526: T4_MAIN_HOLYSTAFF@3                                              : Adept's Holy Staff
5527: T5_MAIN_HOLYSTAFF                                                : Expert's Holy Staff
5528: T5_MAIN_HOLYSTAFF@1                                              : Expert's Holy Staff
5529: T5_MAIN_HOLYSTAFF@2                                              : Expert's Holy Staff
5530: T5_MAIN_HOLYSTAFF@3                                              : Expert's Holy Staff
5531: T6_MAIN_HOLYSTAFF                                                : Master's Holy Staff
5532: T6_MAIN_HOLYSTAFF@1                                              : Master's Holy Staff
5533: T6_MAIN_HOLYSTAFF@2                                              : Master's Holy Staff
5534: T6_MAIN_HOLYSTAFF@3                                              : Master's Holy Staff
5535: T7_MAIN_HOLYSTAFF                                                : Grandmaster's Holy Staff
5536: T7_MAIN_HOLYSTAFF@1                                              : Grandmaster's Holy Staff
5537: T7_MAIN_HOLYSTAFF@2                                              : Grandmaster's Holy Staff
5538: T7_MAIN_HOLYSTAFF@3                                              : Grandmaster's Holy Staff
5539: T8_MAIN_HOLYSTAFF                                                : Elder's Holy Staff
5540: T8_MAIN_HOLYSTAFF@1                                              : Elder's Holy Staff
5541: T8_MAIN_HOLYSTAFF@2                                              : Elder's Holy Staff
5542: T8_MAIN_HOLYSTAFF@3                                              : Elder's Holy Staff
5543: T4_2H_HOLYSTAFF                                                  : Adept's Great Holy Staff
5544: T4_2H_HOLYSTAFF@1                                                : Adept's Great Holy Staff
5545: T4_2H_HOLYSTAFF@2                                                : Adept's Great Holy Staff
5546: T4_2H_HOLYSTAFF@3                                                : Adept's Great Holy Staff
5547: T5_2H_HOLYSTAFF                                                  : Expert's Great Holy Staff
5548: T5_2H_HOLYSTAFF@1                                                : Expert's Great Holy Staff
5549: T5_2H_HOLYSTAFF@2                                                : Expert's Great Holy Staff
5550: T5_2H_HOLYSTAFF@3                                                : Expert's Great Holy Staff
5551: T6_2H_HOLYSTAFF                                                  : Master's Great Holy Staff
5552: T6_2H_HOLYSTAFF@1                                                : Master's Great Holy Staff
5553: T6_2H_HOLYSTAFF@2                                                : Master's Great Holy Staff
5554: T6_2H_HOLYSTAFF@3                                                : Master's Great Holy Staff
5555: T7_2H_HOLYSTAFF                                                  : Grandmaster's Great Holy Staff
5556: T7_2H_HOLYSTAFF@1                                                : Grandmaster's Great Holy Staff
5557: T7_2H_HOLYSTAFF@2                                                : Grandmaster's Great Holy Staff
5558: T7_2H_HOLYSTAFF@3                                                : Grandmaster's Great Holy Staff
5559: T8_2H_HOLYSTAFF                                                  : Elder's Great Holy Staff
5560: T8_2H_HOLYSTAFF@1                                                : Elder's Great Holy Staff
5561: T8_2H_HOLYSTAFF@2                                                : Elder's Great Holy Staff
5562: T8_2H_HOLYSTAFF@3                                                : Elder's Great Holy Staff
5563: T4_2H_DIVINESTAFF                                                : Adept's Divine Staff
5564: T4_2H_DIVINESTAFF@1                                              : Adept's Divine Staff
5565: T4_2H_DIVINESTAFF@2                                              : Adept's Divine Staff
5566: T4_2H_DIVINESTAFF@3                                              : Adept's Divine Staff
5567: T5_2H_DIVINESTAFF                                                : Expert's Divine Staff
5568: T5_2H_DIVINESTAFF@1                                              : Expert's Divine Staff
5569: T5_2H_DIVINESTAFF@2                                              : Expert's Divine Staff
5570: T5_2H_DIVINESTAFF@3                                              : Expert's Divine Staff
5571: T6_2H_DIVINESTAFF                                                : Master's Divine Staff
5572: T6_2H_DIVINESTAFF@1                                              : Master's Divine Staff
5573: T6_2H_DIVINESTAFF@2                                              : Master's Divine Staff
5574: T6_2H_DIVINESTAFF@3                                              : Master's Divine Staff
5575: T7_2H_DIVINESTAFF                                                : Grandmaster's Divine Staff
5576: T7_2H_DIVINESTAFF@1                                              : Grandmaster's Divine Staff
5577: T7_2H_DIVINESTAFF@2                                              : Grandmaster's Divine Staff
5578: T7_2H_DIVINESTAFF@3                                              : Grandmaster's Divine Staff
5579: T8_2H_DIVINESTAFF                                                : Elder's Divine Staff
5580: T8_2H_DIVINESTAFF@1                                              : Elder's Divine Staff
5581: T8_2H_DIVINESTAFF@2                                              : Elder's Divine Staff
5582: T8_2H_DIVINESTAFF@3                                              : Elder's Divine Staff
5583: T4_MAIN_HOLYSTAFF_MORGANA                                        : Adept's Lifetouch Staff
5584: T4_MAIN_HOLYSTAFF_MORGANA@1                                      : Adept's Lifetouch Staff
5585: T4_MAIN_HOLYSTAFF_MORGANA@2                                      : Adept's Lifetouch Staff
5586: T4_MAIN_HOLYSTAFF_MORGANA@3                                      : Adept's Lifetouch Staff
5587: T5_MAIN_HOLYSTAFF_MORGANA                                        : Expert's Lifetouch Staff
5588: T5_MAIN_HOLYSTAFF_MORGANA@1                                      : Expert's Lifetouch Staff
5589: T5_MAIN_HOLYSTAFF_MORGANA@2                                      : Expert's Lifetouch Staff
5590: T5_MAIN_HOLYSTAFF_MORGANA@3                                      : Expert's Lifetouch Staff
5591: T6_MAIN_HOLYSTAFF_MORGANA                                        : Master's Lifetouch Staff
5592: T6_MAIN_HOLYSTAFF_MORGANA@1                                      : Master's Lifetouch Staff
5593: T6_MAIN_HOLYSTAFF_MORGANA@2                                      : Master's Lifetouch Staff
5594: T6_MAIN_HOLYSTAFF_MORGANA@3                                      : Master's Lifetouch Staff
5595: T7_MAIN_HOLYSTAFF_MORGANA                                        : Grandmaster's Lifetouch Staff
5596: T7_MAIN_HOLYSTAFF_MORGANA@1                                      : Grandmaster's Lifetouch Staff
5597: T7_MAIN_HOLYSTAFF_MORGANA@2                                      : Grandmaster's Lifetouch Staff
5598: T7_MAIN_HOLYSTAFF_MORGANA@3                                      : Grandmaster's Lifetouch Staff
5599: T8_MAIN_HOLYSTAFF_MORGANA                                        : Elder's Lifetouch Staff
5600: T8_MAIN_HOLYSTAFF_MORGANA@1                                      : Elder's Lifetouch Staff
5601: T8_MAIN_HOLYSTAFF_MORGANA@2                                      : Elder's Lifetouch Staff
5602: T8_MAIN_HOLYSTAFF_MORGANA@3                                      : Elder's Lifetouch Staff
5603: T4_2H_HOLYSTAFF_HELL                                             : Adept's Fallen Staff
5604: T4_2H_HOLYSTAFF_HELL@1                                           : Adept's Fallen Staff
5605: T4_2H_HOLYSTAFF_HELL@2                                           : Adept's Fallen Staff
5606: T4_2H_HOLYSTAFF_HELL@3                                           : Adept's Fallen Staff
5607: T5_2H_HOLYSTAFF_HELL                                             : Expert's Fallen Staff
5608: T5_2H_HOLYSTAFF_HELL@1                                           : Expert's Fallen Staff
5609: T5_2H_HOLYSTAFF_HELL@2                                           : Expert's Fallen Staff
5610: T5_2H_HOLYSTAFF_HELL@3                                           : Expert's Fallen Staff
5611: T6_2H_HOLYSTAFF_HELL                                             : Master's Fallen Staff
5612: T6_2H_HOLYSTAFF_HELL@1                                           : Master's Fallen Staff
5613: T6_2H_HOLYSTAFF_HELL@2                                           : Master's Fallen Staff
5614: T6_2H_HOLYSTAFF_HELL@3                                           : Master's Fallen Staff
5615: T7_2H_HOLYSTAFF_HELL                                             : Grandmaster's Fallen Staff
5616: T7_2H_HOLYSTAFF_HELL@1                                           : Grandmaster's Fallen Staff
5617: T7_2H_HOLYSTAFF_HELL@2                                           : Grandmaster's Fallen Staff
5618: T7_2H_HOLYSTAFF_HELL@3                                           : Grandmaster's Fallen Staff
5619: T8_2H_HOLYSTAFF_HELL                                             : Elder's Fallen Staff
5620: T8_2H_HOLYSTAFF_HELL@1                                           : Elder's Fallen Staff
5621: T8_2H_HOLYSTAFF_HELL@2                                           : Elder's Fallen Staff
5622: T8_2H_HOLYSTAFF_HELL@3                                           : Elder's Fallen Staff
5623: T4_2H_HOLYSTAFF_UNDEAD                                           : Adept's Redemption Staff
5624: T4_2H_HOLYSTAFF_UNDEAD@1                                         : Adept's Redemption Staff
5625: T4_2H_HOLYSTAFF_UNDEAD@2                                         : Adept's Redemption Staff
5626: T4_2H_HOLYSTAFF_UNDEAD@3                                         : Adept's Redemption Staff
5627: T5_2H_HOLYSTAFF_UNDEAD                                           : Expert's Redemption Staff
5628: T5_2H_HOLYSTAFF_UNDEAD@1                                         : Expert's Redemption Staff
5629: T5_2H_HOLYSTAFF_UNDEAD@2                                         : Expert's Redemption Staff
5630: T5_2H_HOLYSTAFF_UNDEAD@3                                         : Expert's Redemption Staff
5631: T6_2H_HOLYSTAFF_UNDEAD                                           : Master's Redemption Staff
5632: T6_2H_HOLYSTAFF_UNDEAD@1                                         : Master's Redemption Staff
5633: T6_2H_HOLYSTAFF_UNDEAD@2                                         : Master's Redemption Staff
5634: T6_2H_HOLYSTAFF_UNDEAD@3                                         : Master's Redemption Staff
5635: T7_2H_HOLYSTAFF_UNDEAD                                           : Grandmaster's Redemption Staff
5636: T7_2H_HOLYSTAFF_UNDEAD@1                                         : Grandmaster's Redemption Staff
5637: T7_2H_HOLYSTAFF_UNDEAD@2                                         : Grandmaster's Redemption Staff
5638: T7_2H_HOLYSTAFF_UNDEAD@3                                         : Grandmaster's Redemption Staff
5639: T8_2H_HOLYSTAFF_UNDEAD                                           : Elder's Redemption Staff
5640: T8_2H_HOLYSTAFF_UNDEAD@1                                         : Elder's Redemption Staff
5641: T8_2H_HOLYSTAFF_UNDEAD@2                                         : Elder's Redemption Staff
5642: T8_2H_HOLYSTAFF_UNDEAD@3                                         : Elder's Redemption Staff
5643: T4_MAIN_HOLYSTAFF_AVALON                                         : Adept's Hallowfall
5644: T4_MAIN_HOLYSTAFF_AVALON@1                                       : Adept's Hallowfall
5645: T4_MAIN_HOLYSTAFF_AVALON@2                                       : Adept's Hallowfall
5646: T4_MAIN_HOLYSTAFF_AVALON@3                                       : Adept's Hallowfall
5647: T5_MAIN_HOLYSTAFF_AVALON                                         : Expert's Hallowfall
5648: T5_MAIN_HOLYSTAFF_AVALON@1                                       : Expert's Hallowfall
5649: T5_MAIN_HOLYSTAFF_AVALON@2                                       : Expert's Hallowfall
5650: T5_MAIN_HOLYSTAFF_AVALON@3                                       : Expert's Hallowfall
5651: T6_MAIN_HOLYSTAFF_AVALON                                         : Master's Hallowfall
5652: T6_MAIN_HOLYSTAFF_AVALON@1                                       : Master's Hallowfall
5653: T6_MAIN_HOLYSTAFF_AVALON@2                                       : Master's Hallowfall
5654: T6_MAIN_HOLYSTAFF_AVALON@3                                       : Master's Hallowfall
5655: T7_MAIN_HOLYSTAFF_AVALON                                         : Grandmaster's Hallowfall
5656: T7_MAIN_HOLYSTAFF_AVALON@1                                       : Grandmaster's Hallowfall
5657: T7_MAIN_HOLYSTAFF_AVALON@2                                       : Grandmaster's Hallowfall
5658: T7_MAIN_HOLYSTAFF_AVALON@3                                       : Grandmaster's Hallowfall
5659: T8_MAIN_HOLYSTAFF_AVALON                                         : Elder's Hallowfall
5660: T8_MAIN_HOLYSTAFF_AVALON@1                                       : Elder's Hallowfall
5661: T8_MAIN_HOLYSTAFF_AVALON@2                                       : Elder's Hallowfall
5662: T8_MAIN_HOLYSTAFF_AVALON@3                                       : Elder's Hallowfall
5663: T3_MAIN_NATURESTAFF                                              : Journeyman's Nature Staff
5664: T4_MAIN_NATURESTAFF                                              : Adept's Nature Staff
5665: T4_MAIN_NATURESTAFF@1                                            : Adept's Nature Staff
5666: T4_MAIN_NATURESTAFF@2                                            : Adept's Nature Staff
5667: T4_MAIN_NATURESTAFF@3                                            : Adept's Nature Staff
5668: T5_MAIN_NATURESTAFF                                              : Expert's Nature Staff
5669: T5_MAIN_NATURESTAFF@1                                            : Expert's Nature Staff
5670: T5_MAIN_NATURESTAFF@2                                            : Expert's Nature Staff
5671: T5_MAIN_NATURESTAFF@3                                            : Expert's Nature Staff
5672: T6_MAIN_NATURESTAFF                                              : Master's Nature Staff
5673: T6_MAIN_NATURESTAFF@1                                            : Master's Nature Staff
5674: T6_MAIN_NATURESTAFF@2                                            : Master's Nature Staff
5675: T6_MAIN_NATURESTAFF@3                                            : Master's Nature Staff
5676: T7_MAIN_NATURESTAFF                                              : Grandmaster's Nature Staff
5677: T7_MAIN_NATURESTAFF@1                                            : Grandmaster's Nature Staff
5678: T7_MAIN_NATURESTAFF@2                                            : Grandmaster's Nature Staff
5679: T7_MAIN_NATURESTAFF@3                                            : Grandmaster's Nature Staff
5680: T8_MAIN_NATURESTAFF                                              : Elder's Nature Staff
5681: T8_MAIN_NATURESTAFF@1                                            : Elder's Nature Staff
5682: T8_MAIN_NATURESTAFF@2                                            : Elder's Nature Staff
5683: T8_MAIN_NATURESTAFF@3                                            : Elder's Nature Staff
5684: T4_2H_NATURESTAFF                                                : Adept's Great Nature Staff
5685: T4_2H_NATURESTAFF@1                                              : Adept's Great Nature Staff
5686: T4_2H_NATURESTAFF@2                                              : Adept's Great Nature Staff
5687: T4_2H_NATURESTAFF@3                                              : Adept's Great Nature Staff
5688: T5_2H_NATURESTAFF                                                : Expert's Great Nature Staff
5689: T5_2H_NATURESTAFF@1                                              : Expert's Great Nature Staff
5690: T5_2H_NATURESTAFF@2                                              : Expert's Great Nature Staff
5691: T5_2H_NATURESTAFF@3                                              : Expert's Great Nature Staff
5692: T6_2H_NATURESTAFF                                                : Master's Great Nature Staff
5693: T6_2H_NATURESTAFF@1                                              : Master's Great Nature Staff
5694: T6_2H_NATURESTAFF@2                                              : Master's Great Nature Staff
5695: T6_2H_NATURESTAFF@3                                              : Master's Great Nature Staff
5696: T7_2H_NATURESTAFF                                                : Grandmaster's Great Nature Staff
5697: T7_2H_NATURESTAFF@1                                              : Grandmaster's Great Nature Staff
5698: T7_2H_NATURESTAFF@2                                              : Grandmaster's Great Nature Staff
5699: T7_2H_NATURESTAFF@3                                              : Grandmaster's Great Nature Staff
5700: T8_2H_NATURESTAFF                                                : Elder's Great Nature Staff
5701: T8_2H_NATURESTAFF@1                                              : Elder's Great Nature Staff
5702: T8_2H_NATURESTAFF@2                                              : Elder's Great Nature Staff
5703: T8_2H_NATURESTAFF@3                                              : Elder's Great Nature Staff
5704: T4_2H_WILDSTAFF                                                  : Adept's Wild Staff
5705: T4_2H_WILDSTAFF@1                                                : Adept's Wild Staff
5706: T4_2H_WILDSTAFF@2                                                : Adept's Wild Staff
5707: T4_2H_WILDSTAFF@3                                                : Adept's Wild Staff
5708: T5_2H_WILDSTAFF                                                  : Expert's Wild Staff
5709: T5_2H_WILDSTAFF@1                                                : Expert's Wild Staff
5710: T5_2H_WILDSTAFF@2                                                : Expert's Wild Staff
5711: T5_2H_WILDSTAFF@3                                                : Expert's Wild Staff
5712: T6_2H_WILDSTAFF                                                  : Master's Wild Staff
5713: T6_2H_WILDSTAFF@1                                                : Master's Wild Staff
5714: T6_2H_WILDSTAFF@2                                                : Master's Wild Staff
5715: T6_2H_WILDSTAFF@3                                                : Master's Wild Staff
5716: T7_2H_WILDSTAFF                                                  : Grandmaster's Wild Staff
5717: T7_2H_WILDSTAFF@1                                                : Grandmaster's Wild Staff
5718: T7_2H_WILDSTAFF@2                                                : Grandmaster's Wild Staff
5719: T7_2H_WILDSTAFF@3                                                : Grandmaster's Wild Staff
5720: T8_2H_WILDSTAFF                                                  : Elder's Wild Staff
5721: T8_2H_WILDSTAFF@1                                                : Elder's Wild Staff
5722: T8_2H_WILDSTAFF@2                                                : Elder's Wild Staff
5723: T8_2H_WILDSTAFF@3                                                : Elder's Wild Staff
5724: T4_MAIN_NATURESTAFF_KEEPER                                       : Adept's Druidic Staff
5725: T4_MAIN_NATURESTAFF_KEEPER@1                                     : Adept's Druidic Staff
5726: T4_MAIN_NATURESTAFF_KEEPER@2                                     : Adept's Druidic Staff
5727: T4_MAIN_NATURESTAFF_KEEPER@3                                     : Adept's Druidic Staff
5728: T5_MAIN_NATURESTAFF_KEEPER                                       : Expert's Druidic Staff
5729: T5_MAIN_NATURESTAFF_KEEPER@1                                     : Expert's Druidic Staff
5730: T5_MAIN_NATURESTAFF_KEEPER@2                                     : Expert's Druidic Staff
5731: T5_MAIN_NATURESTAFF_KEEPER@3                                     : Expert's Druidic Staff
5732: T6_MAIN_NATURESTAFF_KEEPER                                       : Master's Druidic Staff
5733: T6_MAIN_NATURESTAFF_KEEPER@1                                     : Master's Druidic Staff
5734: T6_MAIN_NATURESTAFF_KEEPER@2                                     : Master's Druidic Staff
5735: T6_MAIN_NATURESTAFF_KEEPER@3                                     : Master's Druidic Staff
5736: T7_MAIN_NATURESTAFF_KEEPER                                       : Grandmaster's Druidic Staff
5737: T7_MAIN_NATURESTAFF_KEEPER@1                                     : Grandmaster's Druidic Staff
5738: T7_MAIN_NATURESTAFF_KEEPER@2                                     : Grandmaster's Druidic Staff
5739: T7_MAIN_NATURESTAFF_KEEPER@3                                     : Grandmaster's Druidic Staff
5740: T8_MAIN_NATURESTAFF_KEEPER                                       : Elder's Druidic Staff
5741: T8_MAIN_NATURESTAFF_KEEPER@1                                     : Elder's Druidic Staff
5742: T8_MAIN_NATURESTAFF_KEEPER@2                                     : Elder's Druidic Staff
5743: T8_MAIN_NATURESTAFF_KEEPER@3                                     : Elder's Druidic Staff
5744: T4_2H_NATURESTAFF_HELL                                           : Adept's Blight Staff
5745: T4_2H_NATURESTAFF_HELL@1                                         : Adept's Blight Staff
5746: T4_2H_NATURESTAFF_HELL@2                                         : Adept's Blight Staff
5747: T4_2H_NATURESTAFF_HELL@3                                         : Adept's Blight Staff
5748: T5_2H_NATURESTAFF_HELL                                           : Expert's Blight Staff
5749: T5_2H_NATURESTAFF_HELL@1                                         : Expert's Blight Staff
5750: T5_2H_NATURESTAFF_HELL@2                                         : Expert's Blight Staff
5751: T5_2H_NATURESTAFF_HELL@3                                         : Expert's Blight Staff
5752: T6_2H_NATURESTAFF_HELL                                           : Master's Blight Staff
5753: T6_2H_NATURESTAFF_HELL@1                                         : Master's Blight Staff
5754: T6_2H_NATURESTAFF_HELL@2                                         : Master's Blight Staff
5755: T6_2H_NATURESTAFF_HELL@3                                         : Master's Blight Staff
5756: T7_2H_NATURESTAFF_HELL                                           : Grandmaster's Blight Staff
5757: T7_2H_NATURESTAFF_HELL@1                                         : Grandmaster's Blight Staff
5758: T7_2H_NATURESTAFF_HELL@2                                         : Grandmaster's Blight Staff
5759: T7_2H_NATURESTAFF_HELL@3                                         : Grandmaster's Blight Staff
5760: T8_2H_NATURESTAFF_HELL                                           : Elder's Blight Staff
5761: T8_2H_NATURESTAFF_HELL@1                                         : Elder's Blight Staff
5762: T8_2H_NATURESTAFF_HELL@2                                         : Elder's Blight Staff
5763: T8_2H_NATURESTAFF_HELL@3                                         : Elder's Blight Staff
5764: T4_2H_NATURESTAFF_KEEPER                                         : Adept's Rampant Staff
5765: T4_2H_NATURESTAFF_KEEPER@1                                       : Adept's Rampant Staff
5766: T4_2H_NATURESTAFF_KEEPER@2                                       : Adept's Rampant Staff
5767: T4_2H_NATURESTAFF_KEEPER@3                                       : Adept's Rampant Staff
5768: T5_2H_NATURESTAFF_KEEPER                                         : Expert's Rampant Staff
5769: T5_2H_NATURESTAFF_KEEPER@1                                       : Expert's Rampant Staff
5770: T5_2H_NATURESTAFF_KEEPER@2                                       : Expert's Rampant Staff
5771: T5_2H_NATURESTAFF_KEEPER@3                                       : Expert's Rampant Staff
5772: T6_2H_NATURESTAFF_KEEPER                                         : Master's Rampant Staff
5773: T6_2H_NATURESTAFF_KEEPER@1                                       : Master's Rampant Staff
5774: T6_2H_NATURESTAFF_KEEPER@2                                       : Master's Rampant Staff
5775: T6_2H_NATURESTAFF_KEEPER@3                                       : Master's Rampant Staff
5776: T7_2H_NATURESTAFF_KEEPER                                         : Grandmaster's Rampant Staff
5777: T7_2H_NATURESTAFF_KEEPER@1                                       : Grandmaster's Rampant Staff
5778: T7_2H_NATURESTAFF_KEEPER@2                                       : Grandmaster's Rampant Staff
5779: T7_2H_NATURESTAFF_KEEPER@3                                       : Grandmaster's Rampant Staff
5780: T8_2H_NATURESTAFF_KEEPER                                         : Elder's Rampant Staff
5781: T8_2H_NATURESTAFF_KEEPER@1                                       : Elder's Rampant Staff
5782: T8_2H_NATURESTAFF_KEEPER@2                                       : Elder's Rampant Staff
5783: T8_2H_NATURESTAFF_KEEPER@3                                       : Elder's Rampant Staff
5784: T4_MAIN_NATURESTAFF_AVALON                                       : Adept's Ironroot Staff
5785: T4_MAIN_NATURESTAFF_AVALON@1                                     : Adept's Ironroot Staff
5786: T4_MAIN_NATURESTAFF_AVALON@2                                     : Adept's Ironroot Staff
5787: T4_MAIN_NATURESTAFF_AVALON@3                                     : Adept's Ironroot Staff
5788: T5_MAIN_NATURESTAFF_AVALON                                       : Expert's Ironroot Staff
5789: T5_MAIN_NATURESTAFF_AVALON@1                                     : Expert's Ironroot Staff
5790: T5_MAIN_NATURESTAFF_AVALON@2                                     : Expert's Ironroot Staff
5791: T5_MAIN_NATURESTAFF_AVALON@3                                     : Expert's Ironroot Staff
5792: T6_MAIN_NATURESTAFF_AVALON                                       : Master's Ironroot Staff
5793: T6_MAIN_NATURESTAFF_AVALON@1                                     : Master's Ironroot Staff
5794: T6_MAIN_NATURESTAFF_AVALON@2                                     : Master's Ironroot Staff
5795: T6_MAIN_NATURESTAFF_AVALON@3                                     : Master's Ironroot Staff
5796: T7_MAIN_NATURESTAFF_AVALON                                       : Grandmaster's Ironroot Staff
5797: T7_MAIN_NATURESTAFF_AVALON@1                                     : Grandmaster's Ironroot Staff
5798: T7_MAIN_NATURESTAFF_AVALON@2                                     : Grandmaster's Ironroot Staff
5799: T7_MAIN_NATURESTAFF_AVALON@3                                     : Grandmaster's Ironroot Staff
5800: T8_MAIN_NATURESTAFF_AVALON                                       : Elder's Ironroot Staff
5801: T8_MAIN_NATURESTAFF_AVALON@1                                     : Elder's Ironroot Staff
5802: T8_MAIN_NATURESTAFF_AVALON@2                                     : Elder's Ironroot Staff
5803: T8_MAIN_NATURESTAFF_AVALON@3                                     : Elder's Ironroot Staff
5804: T3_MAIN_DAGGER                                                   : Journeyman's Dagger
5805: T4_MAIN_DAGGER                                                   : Adept's Dagger
5806: T4_MAIN_DAGGER@1                                                 : Adept's Dagger
5807: T4_MAIN_DAGGER@2                                                 : Adept's Dagger
5808: T4_MAIN_DAGGER@3                                                 : Adept's Dagger
5809: T5_MAIN_DAGGER                                                   : Expert's Dagger
5810: T5_MAIN_DAGGER@1                                                 : Expert's Dagger
5811: T5_MAIN_DAGGER@2                                                 : Expert's Dagger
5812: T5_MAIN_DAGGER@3                                                 : Expert's Dagger
5813: T6_MAIN_DAGGER                                                   : Master's Dagger
5814: T6_MAIN_DAGGER@1                                                 : Master's Dagger
5815: T6_MAIN_DAGGER@2                                                 : Master's Dagger
5816: T6_MAIN_DAGGER@3                                                 : Master's Dagger
5817: T7_MAIN_DAGGER                                                   : Grandmaster's Dagger
5818: T7_MAIN_DAGGER@1                                                 : Grandmaster's Dagger
5819: T7_MAIN_DAGGER@2                                                 : Grandmaster's Dagger
5820: T7_MAIN_DAGGER@3                                                 : Grandmaster's Dagger
5821: T8_MAIN_DAGGER                                                   : Elder's Dagger
5822: T8_MAIN_DAGGER@1                                                 : Elder's Dagger
5823: T8_MAIN_DAGGER@2                                                 : Elder's Dagger
5824: T8_MAIN_DAGGER@3                                                 : Elder's Dagger
5825: T4_2H_DAGGERPAIR                                                 : Adept's Dagger Pair
5826: T4_2H_DAGGERPAIR@1                                               : Adept's Dagger Pair
5827: T4_2H_DAGGERPAIR@2                                               : Adept's Dagger Pair
5828: T4_2H_DAGGERPAIR@3                                               : Adept's Dagger Pair
5829: T5_2H_DAGGERPAIR                                                 : Expert's Dagger Pair
5830: T5_2H_DAGGERPAIR@1                                               : Expert's Dagger Pair
5831: T5_2H_DAGGERPAIR@2                                               : Expert's Dagger Pair
5832: T5_2H_DAGGERPAIR@3                                               : Expert's Dagger Pair
5833: T6_2H_DAGGERPAIR                                                 : Master's Dagger Pair
5834: T6_2H_DAGGERPAIR@1                                               : Master's Dagger Pair
5835: T6_2H_DAGGERPAIR@2                                               : Master's Dagger Pair
5836: T6_2H_DAGGERPAIR@3                                               : Master's Dagger Pair
5837: T7_2H_DAGGERPAIR                                                 : Grandmaster's Dagger Pair
5838: T7_2H_DAGGERPAIR@1                                               : Grandmaster's Dagger Pair
5839: T7_2H_DAGGERPAIR@2                                               : Grandmaster's Dagger Pair
5840: T7_2H_DAGGERPAIR@3                                               : Grandmaster's Dagger Pair
5841: T8_2H_DAGGERPAIR                                                 : Elder's Dagger Pair
5842: T8_2H_DAGGERPAIR@1                                               : Elder's Dagger Pair
5843: T8_2H_DAGGERPAIR@2                                               : Elder's Dagger Pair
5844: T8_2H_DAGGERPAIR@3                                               : Elder's Dagger Pair
5845: T4_2H_CLAWPAIR                                                   : Adept's Claws
5846: T4_2H_CLAWPAIR@1                                                 : Adept's Claws
5847: T4_2H_CLAWPAIR@2                                                 : Adept's Claws
5848: T4_2H_CLAWPAIR@3                                                 : Adept's Claws
5849: T5_2H_CLAWPAIR                                                   : Expert's Claws
5850: T5_2H_CLAWPAIR@1                                                 : Expert's Claws
5851: T5_2H_CLAWPAIR@2                                                 : Expert's Claws
5852: T5_2H_CLAWPAIR@3                                                 : Expert's Claws
5853: T6_2H_CLAWPAIR                                                   : Master's Claws
5854: T6_2H_CLAWPAIR@1                                                 : Master's Claws
5855: T6_2H_CLAWPAIR@2                                                 : Master's Claws
5856: T6_2H_CLAWPAIR@3                                                 : Master's Claws
5857: T7_2H_CLAWPAIR                                                   : Grandmaster's Claws
5858: T7_2H_CLAWPAIR@1                                                 : Grandmaster's Claws
5859: T7_2H_CLAWPAIR@2                                                 : Grandmaster's Claws
5860: T7_2H_CLAWPAIR@3                                                 : Grandmaster's Claws
5861: T8_2H_CLAWPAIR                                                   : Elder's Claws
5862: T8_2H_CLAWPAIR@1                                                 : Elder's Claws
5863: T8_2H_CLAWPAIR@2                                                 : Elder's Claws
5864: T8_2H_CLAWPAIR@3                                                 : Elder's Claws
5865: T4_MAIN_RAPIER_MORGANA                                           : Adept's Bloodletter
5866: T4_MAIN_RAPIER_MORGANA@1                                         : Adept's Bloodletter
5867: T4_MAIN_RAPIER_MORGANA@2                                         : Adept's Bloodletter
5868: T4_MAIN_RAPIER_MORGANA@3                                         : Adept's Bloodletter
5869: T5_MAIN_RAPIER_MORGANA                                           : Expert's Bloodletter
5870: T5_MAIN_RAPIER_MORGANA@1                                         : Expert's Bloodletter
5871: T5_MAIN_RAPIER_MORGANA@2                                         : Expert's Bloodletter
5872: T5_MAIN_RAPIER_MORGANA@3                                         : Expert's Bloodletter
5873: T6_MAIN_RAPIER_MORGANA                                           : Master's Bloodletter
5874: T6_MAIN_RAPIER_MORGANA@1                                         : Master's Bloodletter
5875: T6_MAIN_RAPIER_MORGANA@2                                         : Master's Bloodletter
5876: T6_MAIN_RAPIER_MORGANA@3                                         : Master's Bloodletter
5877: T7_MAIN_RAPIER_MORGANA                                           : Grandmaster's Bloodletter
5878: T7_MAIN_RAPIER_MORGANA@1                                         : Grandmaster's Bloodletter
5879: T7_MAIN_RAPIER_MORGANA@2                                         : Grandmaster's Bloodletter
5880: T7_MAIN_RAPIER_MORGANA@3                                         : Grandmaster's Bloodletter
5881: T8_MAIN_RAPIER_MORGANA                                           : Elder's Bloodletter
5882: T8_MAIN_RAPIER_MORGANA@1                                         : Elder's Bloodletter
5883: T8_MAIN_RAPIER_MORGANA@2                                         : Elder's Bloodletter
5884: T8_MAIN_RAPIER_MORGANA@3                                         : Elder's Bloodletter
5885: T4_MAIN_DAGGER_HELL                                              : Adept's Demonfang
5886: T4_MAIN_DAGGER_HELL@1                                            : Adept's Demonfang
5887: T4_MAIN_DAGGER_HELL@2                                            : Adept's Demonfang
5888: T4_MAIN_DAGGER_HELL@3                                            : Adept's Demonfang
5889: T5_MAIN_DAGGER_HELL                                              : Expert's Demonfang
5890: T5_MAIN_DAGGER_HELL@1                                            : Expert's Demonfang
5891: T5_MAIN_DAGGER_HELL@2                                            : Expert's Demonfang
5892: T5_MAIN_DAGGER_HELL@3                                            : Expert's Demonfang
5893: T6_MAIN_DAGGER_HELL                                              : Master's Demonfang
5894: T6_MAIN_DAGGER_HELL@1                                            : Master's Demonfang
5895: T6_MAIN_DAGGER_HELL@2                                            : Master's Demonfang
5896: T6_MAIN_DAGGER_HELL@3                                            : Master's Demonfang
5897: T7_MAIN_DAGGER_HELL                                              : Grandmaster's Demonfang
5898: T7_MAIN_DAGGER_HELL@1                                            : Grandmaster's Demonfang
5899: T7_MAIN_DAGGER_HELL@2                                            : Grandmaster's Demonfang
5900: T7_MAIN_DAGGER_HELL@3                                            : Grandmaster's Demonfang
5901: T8_MAIN_DAGGER_HELL                                              : Elder's Demonfang
5902: T8_MAIN_DAGGER_HELL@1                                            : Elder's Demonfang
5903: T8_MAIN_DAGGER_HELL@2                                            : Elder's Demonfang
5904: T8_MAIN_DAGGER_HELL@3                                            : Elder's Demonfang
5905: T4_2H_IRONGAUNTLETS_HELL                                         : Adept's Black Hands
5906: T4_2H_IRONGAUNTLETS_HELL@1                                       : Adept's Black Hands
5907: T4_2H_IRONGAUNTLETS_HELL@2                                       : Adept's Black Hands
5908: T4_2H_IRONGAUNTLETS_HELL@3                                       : Adept's Black Hands
5909: T5_2H_IRONGAUNTLETS_HELL                                         : Expert's Black Hands
5910: T5_2H_IRONGAUNTLETS_HELL@1                                       : Expert's Black Hands
5911: T5_2H_IRONGAUNTLETS_HELL@2                                       : Expert's Black Hands
5912: T5_2H_IRONGAUNTLETS_HELL@3                                       : Expert's Black Hands
5913: T6_2H_IRONGAUNTLETS_HELL                                         : Master's Black Hands
5914: T6_2H_IRONGAUNTLETS_HELL@1                                       : Master's Black Hands
5915: T6_2H_IRONGAUNTLETS_HELL@2                                       : Master's Black Hands
5916: T6_2H_IRONGAUNTLETS_HELL@3                                       : Master's Black Hands
5917: T7_2H_IRONGAUNTLETS_HELL                                         : Grandmaster's Black Hands
5918: T7_2H_IRONGAUNTLETS_HELL@1                                       : Grandmaster's Black Hands
5919: T7_2H_IRONGAUNTLETS_HELL@2                                       : Grandmaster's Black Hands
5920: T7_2H_IRONGAUNTLETS_HELL@3                                       : Grandmaster's Black Hands
5921: T8_2H_IRONGAUNTLETS_HELL                                         : Elder's Black Hands
5922: T8_2H_IRONGAUNTLETS_HELL@1                                       : Elder's Black Hands
5923: T8_2H_IRONGAUNTLETS_HELL@2                                       : Elder's Black Hands
5924: T8_2H_IRONGAUNTLETS_HELL@3                                       : Elder's Black Hands
5925: T4_2H_DUALSICKLE_UNDEAD                                          : Adept's Deathgivers
5926: T4_2H_DUALSICKLE_UNDEAD@1                                        : Adept's Deathgivers
5927: T4_2H_DUALSICKLE_UNDEAD@2                                        : Adept's Deathgivers
5928: T4_2H_DUALSICKLE_UNDEAD@3                                        : Adept's Deathgivers
5929: T5_2H_DUALSICKLE_UNDEAD                                          : Expert's Deathgivers
5930: T5_2H_DUALSICKLE_UNDEAD@1                                        : Expert's Deathgivers
5931: T5_2H_DUALSICKLE_UNDEAD@2                                        : Expert's Deathgivers
5932: T5_2H_DUALSICKLE_UNDEAD@3                                        : Expert's Deathgivers
5933: T6_2H_DUALSICKLE_UNDEAD                                          : Master's Deathgivers
5934: T6_2H_DUALSICKLE_UNDEAD@1                                        : Master's Deathgivers
5935: T6_2H_DUALSICKLE_UNDEAD@2                                        : Master's Deathgivers
5936: T6_2H_DUALSICKLE_UNDEAD@3                                        : Master's Deathgivers
5937: T7_2H_DUALSICKLE_UNDEAD                                          : Grandmaster's Deathgivers
5938: T7_2H_DUALSICKLE_UNDEAD@1                                        : Grandmaster's Deathgivers
5939: T7_2H_DUALSICKLE_UNDEAD@2                                        : Grandmaster's Deathgivers
5940: T7_2H_DUALSICKLE_UNDEAD@3                                        : Grandmaster's Deathgivers
5941: T8_2H_DUALSICKLE_UNDEAD                                          : Elder's Deathgivers
5942: T8_2H_DUALSICKLE_UNDEAD@1                                        : Elder's Deathgivers
5943: T8_2H_DUALSICKLE_UNDEAD@2                                        : Elder's Deathgivers
5944: T8_2H_DUALSICKLE_UNDEAD@3                                        : Elder's Deathgivers
5945: T4_2H_DAGGER_KATAR_AVALON                                        : Adept's Bridled Fury
5946: T4_2H_DAGGER_KATAR_AVALON@1                                      : Adept's Bridled Fury
5947: T4_2H_DAGGER_KATAR_AVALON@2                                      : Adept's Bridled Fury
5948: T4_2H_DAGGER_KATAR_AVALON@3                                      : Adept's Bridled Fury
5949: T5_2H_DAGGER_KATAR_AVALON                                        : Expert's Bridled Fury
5950: T5_2H_DAGGER_KATAR_AVALON@1                                      : Expert's Bridled Fury
5951: T5_2H_DAGGER_KATAR_AVALON@2                                      : Expert's Bridled Fury
5952: T5_2H_DAGGER_KATAR_AVALON@3                                      : Expert's Bridled Fury
5953: T6_2H_DAGGER_KATAR_AVALON                                        : Master's Bridled Fury
5954: T6_2H_DAGGER_KATAR_AVALON@1                                      : Master's Bridled Fury
5955: T6_2H_DAGGER_KATAR_AVALON@2                                      : Master's Bridled Fury
5956: T6_2H_DAGGER_KATAR_AVALON@3                                      : Master's Bridled Fury
5957: T7_2H_DAGGER_KATAR_AVALON                                        : Grandmaster's Bridled Fury
5958: T7_2H_DAGGER_KATAR_AVALON@1                                      : Grandmaster's Bridled Fury
5959: T7_2H_DAGGER_KATAR_AVALON@2                                      : Grandmaster's Bridled Fury
5960: T7_2H_DAGGER_KATAR_AVALON@3                                      : Grandmaster's Bridled Fury
5961: T8_2H_DAGGER_KATAR_AVALON                                        : Elder's Bridled Fury
5962: T8_2H_DAGGER_KATAR_AVALON@1                                      : Elder's Bridled Fury
5963: T8_2H_DAGGER_KATAR_AVALON@2                                      : Elder's Bridled Fury
5964: T8_2H_DAGGER_KATAR_AVALON@3                                      : Elder's Bridled Fury
5965: T3_MAIN_SPEAR                                                    : Journeyman's Spear
5966: T4_MAIN_SPEAR                                                    : Adept's Spear
5967: T4_MAIN_SPEAR@1                                                  : Adept's Spear
5968: T4_MAIN_SPEAR@2                                                  : Adept's Spear
5969: T4_MAIN_SPEAR@3                                                  : Adept's Spear
5970: T5_MAIN_SPEAR                                                    : Expert's Spear
5971: T5_MAIN_SPEAR@1                                                  : Expert's Spear
5972: T5_MAIN_SPEAR@2                                                  : Expert's Spear
5973: T5_MAIN_SPEAR@3                                                  : Expert's Spear
5974: T6_MAIN_SPEAR                                                    : Master's Spear
5975: T6_MAIN_SPEAR@1                                                  : Master's Spear
5976: T6_MAIN_SPEAR@2                                                  : Master's Spear
5977: T6_MAIN_SPEAR@3                                                  : Master's Spear
5978: T7_MAIN_SPEAR                                                    : Grandmaster's Spear
5979: T7_MAIN_SPEAR@1                                                  : Grandmaster's Spear
5980: T7_MAIN_SPEAR@2                                                  : Grandmaster's Spear
5981: T7_MAIN_SPEAR@3                                                  : Grandmaster's Spear
5982: T8_MAIN_SPEAR                                                    : Elder's Spear
5983: T8_MAIN_SPEAR@1                                                  : Elder's Spear
5984: T8_MAIN_SPEAR@2                                                  : Elder's Spear
5985: T8_MAIN_SPEAR@3                                                  : Elder's Spear
5986: T4_2H_SPEAR                                                      : Adept's Pike
5987: T4_2H_SPEAR@1                                                    : Adept's Pike
5988: T4_2H_SPEAR@2                                                    : Adept's Pike
5989: T4_2H_SPEAR@3                                                    : Adept's Pike
5990: T5_2H_SPEAR                                                      : Expert's Pike
5991: T5_2H_SPEAR@1                                                    : Expert's Pike
5992: T5_2H_SPEAR@2                                                    : Expert's Pike
5993: T5_2H_SPEAR@3                                                    : Expert's Pike
5994: T6_2H_SPEAR                                                      : Master's Pike
5995: T6_2H_SPEAR@1                                                    : Master's Pike
5996: T6_2H_SPEAR@2                                                    : Master's Pike
5997: T6_2H_SPEAR@3                                                    : Master's Pike
5998: T7_2H_SPEAR                                                      : Grandmaster's Pike
5999: T7_2H_SPEAR@1                                                    : Grandmaster's Pike
6000: T7_2H_SPEAR@2                                                    : Grandmaster's Pike
6001: T7_2H_SPEAR@3                                                    : Grandmaster's Pike
6002: T8_2H_SPEAR                                                      : Elder's Pike
6003: T8_2H_SPEAR@1                                                    : Elder's Pike
6004: T8_2H_SPEAR@2                                                    : Elder's Pike
6005: T8_2H_SPEAR@3                                                    : Elder's Pike
6006: T4_2H_GLAIVE                                                     : Adept's Glaive
6007: T4_2H_GLAIVE@1                                                   : Adept's Glaive
6008: T4_2H_GLAIVE@2                                                   : Adept's Glaive
6009: T4_2H_GLAIVE@3                                                   : Adept's Glaive
6010: T5_2H_GLAIVE                                                     : Expert's Glaive
6011: T5_2H_GLAIVE@1                                                   : Expert's Glaive
6012: T5_2H_GLAIVE@2                                                   : Expert's Glaive
6013: T5_2H_GLAIVE@3                                                   : Expert's Glaive
6014: T6_2H_GLAIVE                                                     : Master's Glaive
6015: T6_2H_GLAIVE@1                                                   : Master's Glaive
6016: T6_2H_GLAIVE@2                                                   : Master's Glaive
6017: T6_2H_GLAIVE@3                                                   : Master's Glaive
6018: T7_2H_GLAIVE                                                     : Grandmaster's Glaive
6019: T7_2H_GLAIVE@1                                                   : Grandmaster's Glaive
6020: T7_2H_GLAIVE@2                                                   : Grandmaster's Glaive
6021: T7_2H_GLAIVE@3                                                   : Grandmaster's Glaive
6022: T8_2H_GLAIVE                                                     : Elder's Glaive
6023: T8_2H_GLAIVE@1                                                   : Elder's Glaive
6024: T8_2H_GLAIVE@2                                                   : Elder's Glaive
6025: T8_2H_GLAIVE@3                                                   : Elder's Glaive
6026: T4_MAIN_SPEAR_KEEPER                                             : Adept's Heron Spear
6027: T4_MAIN_SPEAR_KEEPER@1                                           : Adept's Heron Spear
6028: T4_MAIN_SPEAR_KEEPER@2                                           : Adept's Heron Spear
6029: T4_MAIN_SPEAR_KEEPER@3                                           : Adept's Heron Spear
6030: T5_MAIN_SPEAR_KEEPER                                             : Expert's Heron Spear
6031: T5_MAIN_SPEAR_KEEPER@1                                           : Expert's Heron Spear
6032: T5_MAIN_SPEAR_KEEPER@2                                           : Expert's Heron Spear
6033: T5_MAIN_SPEAR_KEEPER@3                                           : Expert's Heron Spear
6034: T6_MAIN_SPEAR_KEEPER                                             : Master's Heron Spear
6035: T6_MAIN_SPEAR_KEEPER@1                                           : Master's Heron Spear
6036: T6_MAIN_SPEAR_KEEPER@2                                           : Master's Heron Spear
6037: T6_MAIN_SPEAR_KEEPER@3                                           : Master's Heron Spear
6038: T7_MAIN_SPEAR_KEEPER                                             : Grandmaster's Heron Spear
6039: T7_MAIN_SPEAR_KEEPER@1                                           : Grandmaster's Heron Spear
6040: T7_MAIN_SPEAR_KEEPER@2                                           : Grandmaster's Heron Spear
6041: T7_MAIN_SPEAR_KEEPER@3                                           : Grandmaster's Heron Spear
6042: T8_MAIN_SPEAR_KEEPER                                             : Elder's Heron Spear
6043: T8_MAIN_SPEAR_KEEPER@1                                           : Elder's Heron Spear
6044: T8_MAIN_SPEAR_KEEPER@2                                           : Elder's Heron Spear
6045: T8_MAIN_SPEAR_KEEPER@3                                           : Elder's Heron Spear
6046: T4_2H_HARPOON_HELL                                               : Adept's Spirithunter
6047: T4_2H_HARPOON_HELL@1                                             : Adept's Spirithunter
6048: T4_2H_HARPOON_HELL@2                                             : Adept's Spirithunter
6049: T4_2H_HARPOON_HELL@3                                             : Adept's Spirithunter
6050: T5_2H_HARPOON_HELL                                               : Expert's Spirithunter
6051: T5_2H_HARPOON_HELL@1                                             : Expert's Spirithunter
6052: T5_2H_HARPOON_HELL@2                                             : Expert's Spirithunter
6053: T5_2H_HARPOON_HELL@3                                             : Expert's Spirithunter
6054: T6_2H_HARPOON_HELL                                               : Master's Spirithunter
6055: T6_2H_HARPOON_HELL@1                                             : Master's Spirithunter
6056: T6_2H_HARPOON_HELL@2                                             : Master's Spirithunter
6057: T6_2H_HARPOON_HELL@3                                             : Master's Spirithunter
6058: T7_2H_HARPOON_HELL                                               : Grandmaster's Spirithunter
6059: T7_2H_HARPOON_HELL@1                                             : Grandmaster's Spirithunter
6060: T7_2H_HARPOON_HELL@2                                             : Grandmaster's Spirithunter
6061: T7_2H_HARPOON_HELL@3                                             : Grandmaster's Spirithunter
6062: T8_2H_HARPOON_HELL                                               : Elder's Spirithunter
6063: T8_2H_HARPOON_HELL@1                                             : Elder's Spirithunter
6064: T8_2H_HARPOON_HELL@2                                             : Elder's Spirithunter
6065: T8_2H_HARPOON_HELL@3                                             : Elder's Spirithunter
6066: T4_2H_TRIDENT_UNDEAD                                             : Adept's Trinity Spear
6067: T4_2H_TRIDENT_UNDEAD@1                                           : Adept's Trinity Spear
6068: T4_2H_TRIDENT_UNDEAD@2                                           : Adept's Trinity Spear
6069: T4_2H_TRIDENT_UNDEAD@3                                           : Adept's Trinity Spear
6070: T5_2H_TRIDENT_UNDEAD                                             : Expert's Trinity Spear
6071: T5_2H_TRIDENT_UNDEAD@1                                           : Expert's Trinity Spear
6072: T5_2H_TRIDENT_UNDEAD@2                                           : Expert's Trinity Spear
6073: T5_2H_TRIDENT_UNDEAD@3                                           : Expert's Trinity Spear
6074: T6_2H_TRIDENT_UNDEAD                                             : Master's Trinity Spear
6075: T6_2H_TRIDENT_UNDEAD@1                                           : Master's Trinity Spear
6076: T6_2H_TRIDENT_UNDEAD@2                                           : Master's Trinity Spear
6077: T6_2H_TRIDENT_UNDEAD@3                                           : Master's Trinity Spear
6078: T7_2H_TRIDENT_UNDEAD                                             : Grandmaster's Trinity Spear
6079: T7_2H_TRIDENT_UNDEAD@1                                           : Grandmaster's Trinity Spear
6080: T7_2H_TRIDENT_UNDEAD@2                                           : Grandmaster's Trinity Spear
6081: T7_2H_TRIDENT_UNDEAD@3                                           : Grandmaster's Trinity Spear
6082: T8_2H_TRIDENT_UNDEAD                                             : Elder's Trinity Spear
6083: T8_2H_TRIDENT_UNDEAD@1                                           : Elder's Trinity Spear
6084: T8_2H_TRIDENT_UNDEAD@2                                           : Elder's Trinity Spear
6085: T8_2H_TRIDENT_UNDEAD@3                                           : Elder's Trinity Spear
6086: T4_MAIN_SPEAR_LANCE_AVALON                                       : Adept's Daybreaker
6087: T4_MAIN_SPEAR_LANCE_AVALON@1                                     : Adept's Daybreaker
6088: T4_MAIN_SPEAR_LANCE_AVALON@2                                     : Adept's Daybreaker
6089: T4_MAIN_SPEAR_LANCE_AVALON@3                                     : Adept's Daybreaker
6090: T5_MAIN_SPEAR_LANCE_AVALON                                       : Expert's Daybreaker
6091: T5_MAIN_SPEAR_LANCE_AVALON@1                                     : Expert's Daybreaker
6092: T5_MAIN_SPEAR_LANCE_AVALON@2                                     : Expert's Daybreaker
6093: T5_MAIN_SPEAR_LANCE_AVALON@3                                     : Expert's Daybreaker
6094: T6_MAIN_SPEAR_LANCE_AVALON                                       : Master's Daybreaker
6095: T6_MAIN_SPEAR_LANCE_AVALON@1                                     : Master's Daybreaker
6096: T6_MAIN_SPEAR_LANCE_AVALON@2                                     : Master's Daybreaker
6097: T6_MAIN_SPEAR_LANCE_AVALON@3                                     : Master's Daybreaker
6098: T7_MAIN_SPEAR_LANCE_AVALON                                       : Grandmaster's Daybreaker
6099: T7_MAIN_SPEAR_LANCE_AVALON@1                                     : Grandmaster's Daybreaker
6100: T7_MAIN_SPEAR_LANCE_AVALON@2                                     : Grandmaster's Daybreaker
6101: T7_MAIN_SPEAR_LANCE_AVALON@3                                     : Grandmaster's Daybreaker
6102: T8_MAIN_SPEAR_LANCE_AVALON                                       : Elder's Daybreaker
6103: T8_MAIN_SPEAR_LANCE_AVALON@1                                     : Elder's Daybreaker
6104: T8_MAIN_SPEAR_LANCE_AVALON@2                                     : Elder's Daybreaker
6105: T8_MAIN_SPEAR_LANCE_AVALON@3                                     : Elder's Daybreaker
6106: T3_MAIN_AXE                                                      : Journeyman's Battleaxe
6107: T4_MAIN_AXE                                                      : Adept's Battleaxe
6108: T4_MAIN_AXE@1                                                    : Adept's Battleaxe
6109: T4_MAIN_AXE@2                                                    : Adept's Battleaxe
6110: T4_MAIN_AXE@3                                                    : Adept's Battleaxe
6111: T5_MAIN_AXE                                                      : Expert's Battleaxe
6112: T5_MAIN_AXE@1                                                    : Expert's Battleaxe
6113: T5_MAIN_AXE@2                                                    : Expert's Battleaxe
6114: T5_MAIN_AXE@3                                                    : Expert's Battleaxe
6115: T6_MAIN_AXE                                                      : Master's Battleaxe
6116: T6_MAIN_AXE@1                                                    : Master's Battleaxe
6117: T6_MAIN_AXE@2                                                    : Master's Battleaxe
6118: T6_MAIN_AXE@3                                                    : Master's Battleaxe
6119: T7_MAIN_AXE                                                      : Grandmaster's Battleaxe
6120: T7_MAIN_AXE@1                                                    : Grandmaster's Battleaxe
6121: T7_MAIN_AXE@2                                                    : Grandmaster's Battleaxe
6122: T7_MAIN_AXE@3                                                    : Grandmaster's Battleaxe
6123: T8_MAIN_AXE                                                      : Elder's Battleaxe
6124: T8_MAIN_AXE@1                                                    : Elder's Battleaxe
6125: T8_MAIN_AXE@2                                                    : Elder's Battleaxe
6126: T8_MAIN_AXE@3                                                    : Elder's Battleaxe
6127: T4_2H_AXE                                                        : Adept's Greataxe
6128: T4_2H_AXE@1                                                      : Adept's Greataxe
6129: T4_2H_AXE@2                                                      : Adept's Greataxe
6130: T4_2H_AXE@3                                                      : Adept's Greataxe
6131: T5_2H_AXE                                                        : Expert's Greataxe
6132: T5_2H_AXE@1                                                      : Expert's Greataxe
6133: T5_2H_AXE@2                                                      : Expert's Greataxe
6134: T5_2H_AXE@3                                                      : Expert's Greataxe
6135: T6_2H_AXE                                                        : Master's Greataxe
6136: T6_2H_AXE@1                                                      : Master's Greataxe
6137: T6_2H_AXE@2                                                      : Master's Greataxe
6138: T6_2H_AXE@3                                                      : Master's Greataxe
6139: T7_2H_AXE                                                        : Grandmaster's Greataxe
6140: T7_2H_AXE@1                                                      : Grandmaster's Greataxe
6141: T7_2H_AXE@2                                                      : Grandmaster's Greataxe
6142: T7_2H_AXE@3                                                      : Grandmaster's Greataxe
6143: T8_2H_AXE                                                        : The Hand of Khor
6144: T8_2H_AXE@1                                                      : The Hand of Khor
6145: T8_2H_AXE@2                                                      : The Hand of Khor
6146: T8_2H_AXE@3                                                      : The Hand of Khor
6147: T4_2H_HALBERD                                                    : Adept's Halberd
6148: T4_2H_HALBERD@1                                                  : Adept's Halberd
6149: T4_2H_HALBERD@2                                                  : Adept's Halberd
6150: T4_2H_HALBERD@3                                                  : Adept's Halberd
6151: T5_2H_HALBERD                                                    : Expert's Halberd
6152: T5_2H_HALBERD@1                                                  : Expert's Halberd
6153: T5_2H_HALBERD@2                                                  : Expert's Halberd
6154: T5_2H_HALBERD@3                                                  : Expert's Halberd
6155: T6_2H_HALBERD                                                    : Master's Halberd
6156: T6_2H_HALBERD@1                                                  : Master's Halberd
6157: T6_2H_HALBERD@2                                                  : Master's Halberd
6158: T6_2H_HALBERD@3                                                  : Master's Halberd
6159: T7_2H_HALBERD                                                    : Grandmaster's Halberd
6160: T7_2H_HALBERD@1                                                  : Grandmaster's Halberd
6161: T7_2H_HALBERD@2                                                  : Grandmaster's Halberd
6162: T7_2H_HALBERD@3                                                  : Grandmaster's Halberd
6163: T8_2H_HALBERD                                                    : Elder's Halberd
6164: T8_2H_HALBERD@1                                                  : Elder's Halberd
6165: T8_2H_HALBERD@2                                                  : Elder's Halberd
6166: T8_2H_HALBERD@3                                                  : Elder's Halberd
6167: T4_2H_HALBERD_MORGANA                                            : Adept's Carrioncaller
6168: T4_2H_HALBERD_MORGANA@1                                          : Adept's Carrioncaller
6169: T4_2H_HALBERD_MORGANA@2                                          : Adept's Carrioncaller
6170: T4_2H_HALBERD_MORGANA@3                                          : Adept's Carrioncaller
6171: T5_2H_HALBERD_MORGANA                                            : Expert's Carrioncaller
6172: T5_2H_HALBERD_MORGANA@1                                          : Expert's Carrioncaller
6173: T5_2H_HALBERD_MORGANA@2                                          : Expert's Carrioncaller
6174: T5_2H_HALBERD_MORGANA@3                                          : Expert's Carrioncaller
6175: T6_2H_HALBERD_MORGANA                                            : Master's Carrioncaller
6176: T6_2H_HALBERD_MORGANA@1                                          : Master's Carrioncaller
6177: T6_2H_HALBERD_MORGANA@2                                          : Master's Carrioncaller
6178: T6_2H_HALBERD_MORGANA@3                                          : Master's Carrioncaller
6179: T7_2H_HALBERD_MORGANA                                            : Grandmaster's Carrioncaller
6180: T7_2H_HALBERD_MORGANA@1                                          : Grandmaster's Carrioncaller
6181: T7_2H_HALBERD_MORGANA@2                                          : Grandmaster's Carrioncaller
6182: T7_2H_HALBERD_MORGANA@3                                          : Grandmaster's Carrioncaller
6183: T8_2H_HALBERD_MORGANA                                            : Elder's Carrioncaller
6184: T8_2H_HALBERD_MORGANA@1                                          : Elder's Carrioncaller
6185: T8_2H_HALBERD_MORGANA@2                                          : Elder's Carrioncaller
6186: T8_2H_HALBERD_MORGANA@3                                          : Elder's Carrioncaller
6187: T4_2H_SCYTHE_HELL                                                : Adept's Infernal Scythe
6188: T4_2H_SCYTHE_HELL@1                                              : Adept's Infernal Scythe
6189: T4_2H_SCYTHE_HELL@2                                              : Adept's Infernal Scythe
6190: T4_2H_SCYTHE_HELL@3                                              : Adept's Infernal Scythe
6191: T5_2H_SCYTHE_HELL                                                : Expert's Infernal Scythe
6192: T5_2H_SCYTHE_HELL@1                                              : Expert's Infernal Scythe
6193: T5_2H_SCYTHE_HELL@2                                              : Expert's Infernal Scythe
6194: T5_2H_SCYTHE_HELL@3                                              : Expert's Infernal Scythe
6195: T6_2H_SCYTHE_HELL                                                : Master's Infernal Scythe
6196: T6_2H_SCYTHE_HELL@1                                              : Master's Infernal Scythe
6197: T6_2H_SCYTHE_HELL@2                                              : Master's Infernal Scythe
6198: T6_2H_SCYTHE_HELL@3                                              : Master's Infernal Scythe
6199: T7_2H_SCYTHE_HELL                                                : Grandmaster's Infernal Scythe
6200: T7_2H_SCYTHE_HELL@1                                              : Grandmaster's Infernal Scythe
6201: T7_2H_SCYTHE_HELL@2                                              : Grandmaster's Infernal Scythe
6202: T7_2H_SCYTHE_HELL@3                                              : Grandmaster's Infernal Scythe
6203: T8_2H_SCYTHE_HELL                                                : Elder's Infernal Scythe
6204: T8_2H_SCYTHE_HELL@1                                              : Elder's Infernal Scythe
6205: T8_2H_SCYTHE_HELL@2                                              : Elder's Infernal Scythe
6206: T8_2H_SCYTHE_HELL@3                                              : Elder's Infernal Scythe
6207: T4_2H_DUALAXE_KEEPER                                             : Adept's Bear Paws
6208: T4_2H_DUALAXE_KEEPER@1                                           : Adept's Bear Paws
6209: T4_2H_DUALAXE_KEEPER@2                                           : Adept's Bear Paws
6210: T4_2H_DUALAXE_KEEPER@3                                           : Adept's Bear Paws
6211: T5_2H_DUALAXE_KEEPER                                             : Expert's Bear Paws
6212: T5_2H_DUALAXE_KEEPER@1                                           : Expert's Bear Paws
6213: T5_2H_DUALAXE_KEEPER@2                                           : Expert's Bear Paws
6214: T5_2H_DUALAXE_KEEPER@3                                           : Expert's Bear Paws
6215: T6_2H_DUALAXE_KEEPER                                             : Master's Bear Paws
6216: T6_2H_DUALAXE_KEEPER@1                                           : Master's Bear Paws
6217: T6_2H_DUALAXE_KEEPER@2                                           : Master's Bear Paws
6218: T6_2H_DUALAXE_KEEPER@3                                           : Master's Bear Paws
6219: T7_2H_DUALAXE_KEEPER                                             : Grandmaster's Bear Paws
6220: T7_2H_DUALAXE_KEEPER@1                                           : Grandmaster's Bear Paws
6221: T7_2H_DUALAXE_KEEPER@2                                           : Grandmaster's Bear Paws
6222: T7_2H_DUALAXE_KEEPER@3                                           : Grandmaster's Bear Paws
6223: T8_2H_DUALAXE_KEEPER                                             : Elder's Bear Paws
6224: T8_2H_DUALAXE_KEEPER@1                                           : Elder's Bear Paws
6225: T8_2H_DUALAXE_KEEPER@2                                           : Elder's Bear Paws
6226: T8_2H_DUALAXE_KEEPER@3                                           : Elder's Bear Paws
6227: T4_2H_AXE_AVALON                                                 : Adept's Realmbreaker
6228: T4_2H_AXE_AVALON@1                                               : Adept's Realmbreaker
6229: T4_2H_AXE_AVALON@2                                               : Adept's Realmbreaker
6230: T4_2H_AXE_AVALON@3                                               : Adept's Realmbreaker
6231: T5_2H_AXE_AVALON                                                 : Expert's Realmbreaker
6232: T5_2H_AXE_AVALON@1                                               : Expert's Realmbreaker
6233: T5_2H_AXE_AVALON@2                                               : Expert's Realmbreaker
6234: T5_2H_AXE_AVALON@3                                               : Expert's Realmbreaker
6235: T6_2H_AXE_AVALON                                                 : Master's Realmbreaker
6236: T6_2H_AXE_AVALON@1                                               : Master's Realmbreaker
6237: T6_2H_AXE_AVALON@2                                               : Master's Realmbreaker
6238: T6_2H_AXE_AVALON@3                                               : Master's Realmbreaker
6239: T7_2H_AXE_AVALON                                                 : Grandmaster's Realmbreaker
6240: T7_2H_AXE_AVALON@1                                               : Grandmaster's Realmbreaker
6241: T7_2H_AXE_AVALON@2                                               : Grandmaster's Realmbreaker
6242: T7_2H_AXE_AVALON@3                                               : Grandmaster's Realmbreaker
6243: T8_2H_AXE_AVALON                                                 : Elder's Realmbreaker
6244: T8_2H_AXE_AVALON@1                                               : Elder's Realmbreaker
6245: T8_2H_AXE_AVALON@2                                               : Elder's Realmbreaker
6246: T8_2H_AXE_AVALON@3                                               : Elder's Realmbreaker
6247: T1_MAIN_SWORD                                                    : Beginner's Broadsword
6248: T2_MAIN_SWORD                                                    : Novice's Broadsword
6249: T3_MAIN_SWORD                                                    : Journeyman's Broadsword
6250: T4_MAIN_SWORD                                                    : Adept's Broadsword
6251: T4_MAIN_SWORD@1                                                  : Adept's Broadsword
6252: T4_MAIN_SWORD@2                                                  : Adept's Broadsword
6253: T4_MAIN_SWORD@3                                                  : Adept's Broadsword
6254: T5_MAIN_SWORD                                                    : Expert's Broadsword
6255: T5_MAIN_SWORD@1                                                  : Expert's Broadsword
6256: T5_MAIN_SWORD@2                                                  : Expert's Broadsword
6257: T5_MAIN_SWORD@3                                                  : Expert's Broadsword
6258: T6_MAIN_SWORD                                                    : Master's Broadsword
6259: T6_MAIN_SWORD@1                                                  : Master's Broadsword
6260: T6_MAIN_SWORD@2                                                  : Master's Broadsword
6261: T6_MAIN_SWORD@3                                                  : Master's Broadsword
6262: T7_MAIN_SWORD                                                    : Grandmaster's Broadsword
6263: T7_MAIN_SWORD@1                                                  : Grandmaster's Broadsword
6264: T7_MAIN_SWORD@2                                                  : Grandmaster's Broadsword
6265: T7_MAIN_SWORD@3                                                  : Grandmaster's Broadsword
6266: T8_MAIN_SWORD                                                    : Elder's Broadsword
6267: T8_MAIN_SWORD@1                                                  : Elder's Broadsword
6268: T8_MAIN_SWORD@2                                                  : Elder's Broadsword
6269: T8_MAIN_SWORD@3                                                  : Elder's Broadsword
6270: T4_2H_CLAYMORE                                                   : Adept's Claymore
6271: T4_2H_CLAYMORE@1                                                 : Adept's Claymore
6272: T4_2H_CLAYMORE@2                                                 : Adept's Claymore
6273: T4_2H_CLAYMORE@3                                                 : Adept's Claymore
6274: T5_2H_CLAYMORE                                                   : Expert's Claymore
6275: T5_2H_CLAYMORE@1                                                 : Expert's Claymore
6276: T5_2H_CLAYMORE@2                                                 : Expert's Claymore
6277: T5_2H_CLAYMORE@3                                                 : Expert's Claymore
6278: T6_2H_CLAYMORE                                                   : Master's Claymore
6279: T6_2H_CLAYMORE@1                                                 : Master's Claymore
6280: T6_2H_CLAYMORE@2                                                 : Master's Claymore
6281: T6_2H_CLAYMORE@3                                                 : Master's Claymore
6282: T7_2H_CLAYMORE                                                   : Grandmaster's Claymore
6283: T7_2H_CLAYMORE@1                                                 : Grandmaster's Claymore
6284: T7_2H_CLAYMORE@2                                                 : Grandmaster's Claymore
6285: T7_2H_CLAYMORE@3                                                 : Grandmaster's Claymore
6286: T8_2H_CLAYMORE                                                   : Elder's Claymore
6287: T8_2H_CLAYMORE@1                                                 : Elder's Claymore
6288: T8_2H_CLAYMORE@2                                                 : Elder's Claymore
6289: T8_2H_CLAYMORE@3                                                 : Elder's Claymore
6290: T4_2H_DUALSWORD                                                  : Adept's Dual Swords
6291: T4_2H_DUALSWORD@1                                                : Adept's Dual Swords
6292: T4_2H_DUALSWORD@2                                                : Adept's Dual Swords
6293: T4_2H_DUALSWORD@3                                                : Adept's Dual Swords
6294: T5_2H_DUALSWORD                                                  : Expert's Dual Swords
6295: T5_2H_DUALSWORD@1                                                : Expert's Dual Swords
6296: T5_2H_DUALSWORD@2                                                : Expert's Dual Swords
6297: T5_2H_DUALSWORD@3                                                : Expert's Dual Swords
6298: T6_2H_DUALSWORD                                                  : Master's Dual Swords
6299: T6_2H_DUALSWORD@1                                                : Master's Dual Swords
6300: T6_2H_DUALSWORD@2                                                : Master's Dual Swords
6301: T6_2H_DUALSWORD@3                                                : Master's Dual Swords
6302: T7_2H_DUALSWORD                                                  : Grandmaster's Dual Swords
6303: T7_2H_DUALSWORD@1                                                : Grandmaster's Dual Swords
6304: T7_2H_DUALSWORD@2                                                : Grandmaster's Dual Swords
6305: T7_2H_DUALSWORD@3                                                : Grandmaster's Dual Swords
6306: T8_2H_DUALSWORD                                                  : Elder's Dual Swords
6307: T8_2H_DUALSWORD@1                                                : Elder's Dual Swords
6308: T8_2H_DUALSWORD@2                                                : Elder's Dual Swords
6309: T8_2H_DUALSWORD@3                                                : Elder's Dual Swords
6310: T4_MAIN_SCIMITAR_MORGANA                                         : Adept's Clarent Blade
6311: T4_MAIN_SCIMITAR_MORGANA@1                                       : Adept's Clarent Blade
6312: T4_MAIN_SCIMITAR_MORGANA@2                                       : Adept's Clarent Blade
6313: T4_MAIN_SCIMITAR_MORGANA@3                                       : Adept's Clarent Blade
6314: T5_MAIN_SCIMITAR_MORGANA                                         : Expert's Clarent Blade
6315: T5_MAIN_SCIMITAR_MORGANA@1                                       : Expert's Clarent Blade
6316: T5_MAIN_SCIMITAR_MORGANA@2                                       : Expert's Clarent Blade
6317: T5_MAIN_SCIMITAR_MORGANA@3                                       : Expert's Clarent Blade
6318: T6_MAIN_SCIMITAR_MORGANA                                         : Master's Clarent Blade
6319: T6_MAIN_SCIMITAR_MORGANA@1                                       : Master's Clarent Blade
6320: T6_MAIN_SCIMITAR_MORGANA@2                                       : Master's Clarent Blade
6321: T6_MAIN_SCIMITAR_MORGANA@3                                       : Master's Clarent Blade
6322: T7_MAIN_SCIMITAR_MORGANA                                         : Grandmaster's Clarent Blade
6323: T7_MAIN_SCIMITAR_MORGANA@1                                       : Grandmaster's Clarent Blade
6324: T7_MAIN_SCIMITAR_MORGANA@2                                       : Grandmaster's Clarent Blade
6325: T7_MAIN_SCIMITAR_MORGANA@3                                       : Grandmaster's Clarent Blade
6326: T8_MAIN_SCIMITAR_MORGANA                                         : Elder's Clarent Blade
6327: T8_MAIN_SCIMITAR_MORGANA@1                                       : Elder's Clarent Blade
6328: T8_MAIN_SCIMITAR_MORGANA@2                                       : Elder's Clarent Blade
6329: T8_MAIN_SCIMITAR_MORGANA@3                                       : Elder's Clarent Blade
6330: T4_2H_CLEAVER_HELL                                               : Adept's Carving Sword
6331: T4_2H_CLEAVER_HELL@1                                             : Adept's Carving Sword
6332: T4_2H_CLEAVER_HELL@2                                             : Adept's Carving Sword
6333: T4_2H_CLEAVER_HELL@3                                             : Adept's Carving Sword
6334: T5_2H_CLEAVER_HELL                                               : Expert's Carving Sword
6335: T5_2H_CLEAVER_HELL@1                                             : Expert's Carving Sword
6336: T5_2H_CLEAVER_HELL@2                                             : Expert's Carving Sword
6337: T5_2H_CLEAVER_HELL@3                                             : Expert's Carving Sword
6338: T6_2H_CLEAVER_HELL                                               : Master's Carving Sword
6339: T6_2H_CLEAVER_HELL@1                                             : Master's Carving Sword
6340: T6_2H_CLEAVER_HELL@2                                             : Master's Carving Sword
6341: T6_2H_CLEAVER_HELL@3                                             : Master's Carving Sword
6342: T7_2H_CLEAVER_HELL                                               : Grandmaster's Carving Sword
6343: T7_2H_CLEAVER_HELL@1                                             : Grandmaster's Carving Sword
6344: T7_2H_CLEAVER_HELL@2                                             : Grandmaster's Carving Sword
6345: T7_2H_CLEAVER_HELL@3                                             : Grandmaster's Carving Sword
6346: T8_2H_CLEAVER_HELL                                               : Elder's Carving Sword
6347: T8_2H_CLEAVER_HELL@1                                             : Elder's Carving Sword
6348: T8_2H_CLEAVER_HELL@2                                             : Elder's Carving Sword
6349: T8_2H_CLEAVER_HELL@3                                             : Elder's Carving Sword
6350: T4_2H_DUALSCIMITAR_UNDEAD                                        : Adept's Galatine Pair
6351: T4_2H_DUALSCIMITAR_UNDEAD@1                                      : Adept's Galatine Pair
6352: T4_2H_DUALSCIMITAR_UNDEAD@2                                      : Adept's Galatine Pair
6353: T4_2H_DUALSCIMITAR_UNDEAD@3                                      : Adept's Galatine Pair
6354: T5_2H_DUALSCIMITAR_UNDEAD                                        : Expert's Galatine Pair
6355: T5_2H_DUALSCIMITAR_UNDEAD@1                                      : Expert's Galatine Pair
6356: T5_2H_DUALSCIMITAR_UNDEAD@2                                      : Expert's Galatine Pair
6357: T5_2H_DUALSCIMITAR_UNDEAD@3                                      : Expert's Galatine Pair
6358: T6_2H_DUALSCIMITAR_UNDEAD                                        : Master's Galatine Pair
6359: T6_2H_DUALSCIMITAR_UNDEAD@1                                      : Master's Galatine Pair
6360: T6_2H_DUALSCIMITAR_UNDEAD@2                                      : Master's Galatine Pair
6361: T6_2H_DUALSCIMITAR_UNDEAD@3                                      : Master's Galatine Pair
6362: T7_2H_DUALSCIMITAR_UNDEAD                                        : Grandmaster's Galatine Pair
6363: T7_2H_DUALSCIMITAR_UNDEAD@1                                      : Grandmaster's Galatine Pair
6364: T7_2H_DUALSCIMITAR_UNDEAD@2                                      : Grandmaster's Galatine Pair
6365: T7_2H_DUALSCIMITAR_UNDEAD@3                                      : Grandmaster's Galatine Pair
6366: T8_2H_DUALSCIMITAR_UNDEAD                                        : Elder's Galatine Pair
6367: T8_2H_DUALSCIMITAR_UNDEAD@1                                      : Elder's Galatine Pair
6368: T8_2H_DUALSCIMITAR_UNDEAD@2                                      : Elder's Galatine Pair
6369: T8_2H_DUALSCIMITAR_UNDEAD@3                                      : Elder's Galatine Pair
6370: T4_2H_CLAYMORE_AVALON                                            : Adept's Kingmaker
6371: T4_2H_CLAYMORE_AVALON@1                                          : Adept's Kingmaker
6372: T4_2H_CLAYMORE_AVALON@2                                          : Adept's Kingmaker
6373: T4_2H_CLAYMORE_AVALON@3                                          : Adept's Kingmaker
6374: T5_2H_CLAYMORE_AVALON                                            : Expert's Kingmaker
6375: T5_2H_CLAYMORE_AVALON@1                                          : Expert's Kingmaker
6376: T5_2H_CLAYMORE_AVALON@2                                          : Expert's Kingmaker
6377: T5_2H_CLAYMORE_AVALON@3                                          : Expert's Kingmaker
6378: T6_2H_CLAYMORE_AVALON                                            : Master's Kingmaker
6379: T6_2H_CLAYMORE_AVALON@1                                          : Master's Kingmaker
6380: T6_2H_CLAYMORE_AVALON@2                                          : Master's Kingmaker
6381: T6_2H_CLAYMORE_AVALON@3                                          : Master's Kingmaker
6382: T7_2H_CLAYMORE_AVALON                                            : Grandmaster's Kingmaker
6383: T7_2H_CLAYMORE_AVALON@1                                          : Grandmaster's Kingmaker
6384: T7_2H_CLAYMORE_AVALON@2                                          : Grandmaster's Kingmaker
6385: T7_2H_CLAYMORE_AVALON@3                                          : Grandmaster's Kingmaker
6386: T8_2H_CLAYMORE_AVALON                                            : Elder's Kingmaker
6387: T8_2H_CLAYMORE_AVALON@1                                          : Elder's Kingmaker
6388: T8_2H_CLAYMORE_AVALON@2                                          : Elder's Kingmaker
6389: T8_2H_CLAYMORE_AVALON@3                                          : Elder's Kingmaker
6390: T3_2H_QUARTERSTAFF                                               : Journeyman's Quarterstaff
6391: T4_2H_QUARTERSTAFF                                               : Adept's Quarterstaff
6392: T4_2H_QUARTERSTAFF@1                                             : Adept's Quarterstaff
6393: T4_2H_QUARTERSTAFF@2                                             : Adept's Quarterstaff
6394: T4_2H_QUARTERSTAFF@3                                             : Adept's Quarterstaff
6395: T5_2H_QUARTERSTAFF                                               : Expert's Quarterstaff
6396: T5_2H_QUARTERSTAFF@1                                             : Expert's Quarterstaff
6397: T5_2H_QUARTERSTAFF@2                                             : Expert's Quarterstaff
6398: T5_2H_QUARTERSTAFF@3                                             : Expert's Quarterstaff
6399: T6_2H_QUARTERSTAFF                                               : Master's Quarterstaff
6400: T6_2H_QUARTERSTAFF@1                                             : Master's Quarterstaff
6401: T6_2H_QUARTERSTAFF@2                                             : Master's Quarterstaff
6402: T6_2H_QUARTERSTAFF@3                                             : Master's Quarterstaff
6403: T7_2H_QUARTERSTAFF                                               : Grandmaster's Quarterstaff
6404: T7_2H_QUARTERSTAFF@1                                             : Grandmaster's Quarterstaff
6405: T7_2H_QUARTERSTAFF@2                                             : Grandmaster's Quarterstaff
6406: T7_2H_QUARTERSTAFF@3                                             : Grandmaster's Quarterstaff
6407: T8_2H_QUARTERSTAFF                                               : Elder's Quarterstaff
6408: T8_2H_QUARTERSTAFF@1                                             : Elder's Quarterstaff
6409: T8_2H_QUARTERSTAFF@2                                             : Elder's Quarterstaff
6410: T8_2H_QUARTERSTAFF@3                                             : Elder's Quarterstaff
6411: T4_2H_IRONCLADEDSTAFF                                            : Adept's Iron-clad Staff
6412: T4_2H_IRONCLADEDSTAFF@1                                          : Adept's Iron-clad Staff
6413: T4_2H_IRONCLADEDSTAFF@2                                          : Adept's Iron-clad Staff
6414: T4_2H_IRONCLADEDSTAFF@3                                          : Adept's Iron-clad Staff
6415: T5_2H_IRONCLADEDSTAFF                                            : Expert's Iron-clad Staff
6416: T5_2H_IRONCLADEDSTAFF@1                                          : Expert's Iron-clad Staff
6417: T5_2H_IRONCLADEDSTAFF@2                                          : Expert's Iron-clad Staff
6418: T5_2H_IRONCLADEDSTAFF@3                                          : Expert's Iron-clad Staff
6419: T6_2H_IRONCLADEDSTAFF                                            : Master's Iron-clad Staff
6420: T6_2H_IRONCLADEDSTAFF@1                                          : Master's Iron-clad Staff
6421: T6_2H_IRONCLADEDSTAFF@2                                          : Master's Iron-clad Staff
6422: T6_2H_IRONCLADEDSTAFF@3                                          : Master's Iron-clad Staff
6423: T7_2H_IRONCLADEDSTAFF                                            : Grandmaster's Iron-clad Staff
6424: T7_2H_IRONCLADEDSTAFF@1                                          : Grandmaster's Iron-clad Staff
6425: T7_2H_IRONCLADEDSTAFF@2                                          : Grandmaster's Iron-clad Staff
6426: T7_2H_IRONCLADEDSTAFF@3                                          : Grandmaster's Iron-clad Staff
6427: T8_2H_IRONCLADEDSTAFF                                            : Elder's Iron-clad Staff
6428: T8_2H_IRONCLADEDSTAFF@1                                          : Elder's Iron-clad Staff
6429: T8_2H_IRONCLADEDSTAFF@2                                          : Elder's Iron-clad Staff
6430: T8_2H_IRONCLADEDSTAFF@3                                          : Elder's Iron-clad Staff
6431: T4_2H_DOUBLEBLADEDSTAFF                                          : Adept's Double Bladed Staff
6432: T4_2H_DOUBLEBLADEDSTAFF@1                                        : Adept's Double Bladed Staff
6433: T4_2H_DOUBLEBLADEDSTAFF@2                                        : Adept's Double Bladed Staff
6434: T4_2H_DOUBLEBLADEDSTAFF@3                                        : Adept's Double Bladed Staff
6435: T5_2H_DOUBLEBLADEDSTAFF                                          : Expert's Double Bladed Staff
6436: T5_2H_DOUBLEBLADEDSTAFF@1                                        : Expert's Double Bladed Staff
6437: T5_2H_DOUBLEBLADEDSTAFF@2                                        : Expert's Double Bladed Staff
6438: T5_2H_DOUBLEBLADEDSTAFF@3                                        : Expert's Double Bladed Staff
6439: T6_2H_DOUBLEBLADEDSTAFF                                          : Master's Double Bladed Staff
6440: T6_2H_DOUBLEBLADEDSTAFF@1                                        : Master's Double Bladed Staff
6441: T6_2H_DOUBLEBLADEDSTAFF@2                                        : Master's Double Bladed Staff
6442: T6_2H_DOUBLEBLADEDSTAFF@3                                        : Master's Double Bladed Staff
6443: T7_2H_DOUBLEBLADEDSTAFF                                          : Grandmaster's Double Bladed Staff
6444: T7_2H_DOUBLEBLADEDSTAFF@1                                        : Grandmaster's Double Bladed Staff
6445: T7_2H_DOUBLEBLADEDSTAFF@2                                        : Grandmaster's Double Bladed Staff
6446: T7_2H_DOUBLEBLADEDSTAFF@3                                        : Grandmaster's Double Bladed Staff
6447: T8_2H_DOUBLEBLADEDSTAFF                                          : Elder's Double Bladed Staff
6448: T8_2H_DOUBLEBLADEDSTAFF@1                                        : Elder's Double Bladed Staff
6449: T8_2H_DOUBLEBLADEDSTAFF@2                                        : Elder's Double Bladed Staff
6450: T8_2H_DOUBLEBLADEDSTAFF@3                                        : Elder's Double Bladed Staff
6451: T4_2H_COMBATSTAFF_MORGANA                                        : Adept's Black Monk Stave
6452: T4_2H_COMBATSTAFF_MORGANA@1                                      : Adept's Black Monk Stave
6453: T4_2H_COMBATSTAFF_MORGANA@2                                      : Adept's Black Monk Stave
6454: T4_2H_COMBATSTAFF_MORGANA@3                                      : Adept's Black Monk Stave
6455: T5_2H_COMBATSTAFF_MORGANA                                        : Expert's Black Monk Stave
6456: T5_2H_COMBATSTAFF_MORGANA@1                                      : Expert's Black Monk Stave
6457: T5_2H_COMBATSTAFF_MORGANA@2                                      : Expert's Black Monk Stave
6458: T5_2H_COMBATSTAFF_MORGANA@3                                      : Expert's Black Monk Stave
6459: T6_2H_COMBATSTAFF_MORGANA                                        : Master's Black Monk Stave
6460: T6_2H_COMBATSTAFF_MORGANA@1                                      : Master's Black Monk Stave
6461: T6_2H_COMBATSTAFF_MORGANA@2                                      : Master's Black Monk Stave
6462: T6_2H_COMBATSTAFF_MORGANA@3                                      : Master's Black Monk Stave
6463: T7_2H_COMBATSTAFF_MORGANA                                        : Grandmaster's Black Monk Stave
6464: T7_2H_COMBATSTAFF_MORGANA@1                                      : Grandmaster's Black Monk Stave
6465: T7_2H_COMBATSTAFF_MORGANA@2                                      : Grandmaster's Black Monk Stave
6466: T7_2H_COMBATSTAFF_MORGANA@3                                      : Grandmaster's Black Monk Stave
6467: T8_2H_COMBATSTAFF_MORGANA                                        : Elder's Black Monk Stave
6468: T8_2H_COMBATSTAFF_MORGANA@1                                      : Elder's Black Monk Stave
6469: T8_2H_COMBATSTAFF_MORGANA@2                                      : Elder's Black Monk Stave
6470: T8_2H_COMBATSTAFF_MORGANA@3                                      : Elder's Black Monk Stave
6471: T4_2H_TWINSCYTHE_HELL                                            : Adept's Soulscythe
6472: T4_2H_TWINSCYTHE_HELL@1                                          : Adept's Soulscythe
6473: T4_2H_TWINSCYTHE_HELL@2                                          : Adept's Soulscythe
6474: T4_2H_TWINSCYTHE_HELL@3                                          : Adept's Soulscythe
6475: T5_2H_TWINSCYTHE_HELL                                            : Expert's Soulscythe
6476: T5_2H_TWINSCYTHE_HELL@1                                          : Expert's Soulscythe
6477: T5_2H_TWINSCYTHE_HELL@2                                          : Expert's Soulscythe
6478: T5_2H_TWINSCYTHE_HELL@3                                          : Expert's Soulscythe
6479: T6_2H_TWINSCYTHE_HELL                                            : Master's Soulscythe
6480: T6_2H_TWINSCYTHE_HELL@1                                          : Master's Soulscythe
6481: T6_2H_TWINSCYTHE_HELL@2                                          : Master's Soulscythe
6482: T6_2H_TWINSCYTHE_HELL@3                                          : Master's Soulscythe
6483: T7_2H_TWINSCYTHE_HELL                                            : Grandmaster's Soulscythe
6484: T7_2H_TWINSCYTHE_HELL@1                                          : Grandmaster's Soulscythe
6485: T7_2H_TWINSCYTHE_HELL@2                                          : Grandmaster's Soulscythe
6486: T7_2H_TWINSCYTHE_HELL@3                                          : Grandmaster's Soulscythe
6487: T8_2H_TWINSCYTHE_HELL                                            : Elder's Soulscythe
6488: T8_2H_TWINSCYTHE_HELL@1                                          : Elder's Soulscythe
6489: T8_2H_TWINSCYTHE_HELL@2                                          : Elder's Soulscythe
6490: T8_2H_TWINSCYTHE_HELL@3                                          : Elder's Soulscythe
6491: T4_2H_ROCKSTAFF_KEEPER                                           : Adept's Staff of Balance
6492: T4_2H_ROCKSTAFF_KEEPER@1                                         : Adept's Staff of Balance
6493: T4_2H_ROCKSTAFF_KEEPER@2                                         : Adept's Staff of Balance
6494: T4_2H_ROCKSTAFF_KEEPER@3                                         : Adept's Staff of Balance
6495: T5_2H_ROCKSTAFF_KEEPER                                           : Expert's Staff of Balance
6496: T5_2H_ROCKSTAFF_KEEPER@1                                         : Expert's Staff of Balance
6497: T5_2H_ROCKSTAFF_KEEPER@2                                         : Expert's Staff of Balance
6498: T5_2H_ROCKSTAFF_KEEPER@3                                         : Expert's Staff of Balance
6499: T6_2H_ROCKSTAFF_KEEPER                                           : Master's Staff of Balance
6500: T6_2H_ROCKSTAFF_KEEPER@1                                         : Master's Staff of Balance
6501: T6_2H_ROCKSTAFF_KEEPER@2                                         : Master's Staff of Balance
6502: T6_2H_ROCKSTAFF_KEEPER@3                                         : Master's Staff of Balance
6503: T7_2H_ROCKSTAFF_KEEPER                                           : Grandmaster's Staff of Balance
6504: T7_2H_ROCKSTAFF_KEEPER@1                                         : Grandmaster's Staff of Balance
6505: T7_2H_ROCKSTAFF_KEEPER@2                                         : Grandmaster's Staff of Balance
6506: T7_2H_ROCKSTAFF_KEEPER@3                                         : Grandmaster's Staff of Balance
6507: T8_2H_ROCKSTAFF_KEEPER                                           : Elder's Staff of Balance
6508: T8_2H_ROCKSTAFF_KEEPER@1                                         : Elder's Staff of Balance
6509: T8_2H_ROCKSTAFF_KEEPER@2                                         : Elder's Staff of Balance
6510: T8_2H_ROCKSTAFF_KEEPER@3                                         : Elder's Staff of Balance
6511: T4_2H_QUARTERSTAFF_AVALON                                        : Adept's Grailseeker
6512: T4_2H_QUARTERSTAFF_AVALON@1                                      : Adept's Grailseeker
6513: T4_2H_QUARTERSTAFF_AVALON@2                                      : Adept's Grailseeker
6514: T4_2H_QUARTERSTAFF_AVALON@3                                      : Adept's Grailseeker
6515: T5_2H_QUARTERSTAFF_AVALON                                        : Expert's Grailseeker
6516: T5_2H_QUARTERSTAFF_AVALON@1                                      : Expert's Grailseeker
6517: T5_2H_QUARTERSTAFF_AVALON@2                                      : Expert's Grailseeker
6518: T5_2H_QUARTERSTAFF_AVALON@3                                      : Expert's Grailseeker
6519: T6_2H_QUARTERSTAFF_AVALON                                        : Master's Grailseeker
6520: T6_2H_QUARTERSTAFF_AVALON@1                                      : Master's Grailseeker
6521: T6_2H_QUARTERSTAFF_AVALON@2                                      : Master's Grailseeker
6522: T6_2H_QUARTERSTAFF_AVALON@3                                      : Master's Grailseeker
6523: T7_2H_QUARTERSTAFF_AVALON                                        : Grandmaster's Grailseeker
6524: T7_2H_QUARTERSTAFF_AVALON@1                                      : Grandmaster's Grailseeker
6525: T7_2H_QUARTERSTAFF_AVALON@2                                      : Grandmaster's Grailseeker
6526: T7_2H_QUARTERSTAFF_AVALON@3                                      : Grandmaster's Grailseeker
6527: T8_2H_QUARTERSTAFF_AVALON                                        : Elder's Grailseeker
6528: T8_2H_QUARTERSTAFF_AVALON@1                                      : Elder's Grailseeker
6529: T8_2H_QUARTERSTAFF_AVALON@2                                      : Elder's Grailseeker
6530: T8_2H_QUARTERSTAFF_AVALON@3                                      : Elder's Grailseeker
6531: T3_MAIN_HAMMER                                                   : Journeyman's Hammer
6532: T4_MAIN_HAMMER                                                   : Adept's Hammer
6533: T4_MAIN_HAMMER@1                                                 : Adept's Hammer
6534: T4_MAIN_HAMMER@2                                                 : Adept's Hammer
6535: T4_MAIN_HAMMER@3                                                 : Adept's Hammer
6536: T5_MAIN_HAMMER                                                   : Expert's Hammer
6537: T5_MAIN_HAMMER@1                                                 : Expert's Hammer
6538: T5_MAIN_HAMMER@2                                                 : Expert's Hammer
6539: T5_MAIN_HAMMER@3                                                 : Expert's Hammer
6540: T6_MAIN_HAMMER                                                   : Master's Hammer
6541: T6_MAIN_HAMMER@1                                                 : Master's Hammer
6542: T6_MAIN_HAMMER@2                                                 : Master's Hammer
6543: T6_MAIN_HAMMER@3                                                 : Master's Hammer
6544: T7_MAIN_HAMMER                                                   : Grandmaster's Hammer
6545: T7_MAIN_HAMMER@1                                                 : Grandmaster's Hammer
6546: T7_MAIN_HAMMER@2                                                 : Grandmaster's Hammer
6547: T7_MAIN_HAMMER@3                                                 : Grandmaster's Hammer
6548: T8_MAIN_HAMMER                                                   : Elder's Hammer
6549: T8_MAIN_HAMMER@1                                                 : Elder's Hammer
6550: T8_MAIN_HAMMER@2                                                 : Elder's Hammer
6551: T8_MAIN_HAMMER@3                                                 : Elder's Hammer
6552: T4_2H_POLEHAMMER                                                 : Adept's Polehammer
6553: T4_2H_POLEHAMMER@1                                               : Adept's Polehammer
6554: T4_2H_POLEHAMMER@2                                               : Adept's Polehammer
6555: T4_2H_POLEHAMMER@3                                               : Adept's Polehammer
6556: T5_2H_POLEHAMMER                                                 : Expert's Polehammer
6557: T5_2H_POLEHAMMER@1                                               : Expert's Polehammer
6558: T5_2H_POLEHAMMER@2                                               : Expert's Polehammer
6559: T5_2H_POLEHAMMER@3                                               : Expert's Polehammer
6560: T6_2H_POLEHAMMER                                                 : Master's Polehammer
6561: T6_2H_POLEHAMMER@1                                               : Master's Polehammer
6562: T6_2H_POLEHAMMER@2                                               : Master's Polehammer
6563: T6_2H_POLEHAMMER@3                                               : Master's Polehammer
6564: T7_2H_POLEHAMMER                                                 : Grandmaster's Polehammer
6565: T7_2H_POLEHAMMER@1                                               : Grandmaster's Polehammer
6566: T7_2H_POLEHAMMER@2                                               : Grandmaster's Polehammer
6567: T7_2H_POLEHAMMER@3                                               : Grandmaster's Polehammer
6568: T8_2H_POLEHAMMER                                                 : Elder's Polehammer
6569: T8_2H_POLEHAMMER@1                                               : Elder's Polehammer
6570: T8_2H_POLEHAMMER@2                                               : Elder's Polehammer
6571: T8_2H_POLEHAMMER@3                                               : Elder's Polehammer
6572: T4_2H_HAMMER                                                     : Adept's Great Hammer
6573: T4_2H_HAMMER@1                                                   : Adept's Great Hammer
6574: T4_2H_HAMMER@2                                                   : Adept's Great Hammer
6575: T4_2H_HAMMER@3                                                   : Adept's Great Hammer
6576: T5_2H_HAMMER                                                     : Expert's Great Hammer
6577: T5_2H_HAMMER@1                                                   : Expert's Great Hammer
6578: T5_2H_HAMMER@2                                                   : Expert's Great Hammer
6579: T5_2H_HAMMER@3                                                   : Expert's Great Hammer
6580: T6_2H_HAMMER                                                     : Master's Great Hammer
6581: T6_2H_HAMMER@1                                                   : Master's Great Hammer
6582: T6_2H_HAMMER@2                                                   : Master's Great Hammer
6583: T6_2H_HAMMER@3                                                   : Master's Great Hammer
6584: T7_2H_HAMMER                                                     : Grandmaster's Great Hammer
6585: T7_2H_HAMMER@1                                                   : Grandmaster's Great Hammer
6586: T7_2H_HAMMER@2                                                   : Grandmaster's Great Hammer
6587: T7_2H_HAMMER@3                                                   : Grandmaster's Great Hammer
6588: T8_2H_HAMMER                                                     : Elder's Great Hammer
6589: T8_2H_HAMMER@1                                                   : Elder's Great Hammer
6590: T8_2H_HAMMER@2                                                   : Elder's Great Hammer
6591: T8_2H_HAMMER@3                                                   : Elder's Great Hammer
6592: T4_2H_HAMMER_UNDEAD                                              : Adept's Tombhammer
6593: T4_2H_HAMMER_UNDEAD@1                                            : Adept's Tombhammer
6594: T4_2H_HAMMER_UNDEAD@2                                            : Adept's Tombhammer
6595: T4_2H_HAMMER_UNDEAD@3                                            : Adept's Tombhammer
6596: T5_2H_HAMMER_UNDEAD                                              : Expert's Tombhammer
6597: T5_2H_HAMMER_UNDEAD@1                                            : Expert's Tombhammer
6598: T5_2H_HAMMER_UNDEAD@2                                            : Expert's Tombhammer
6599: T5_2H_HAMMER_UNDEAD@3                                            : Expert's Tombhammer
6600: T6_2H_HAMMER_UNDEAD                                              : Master's Tombhammer
6601: T6_2H_HAMMER_UNDEAD@1                                            : Master's Tombhammer
6602: T6_2H_HAMMER_UNDEAD@2                                            : Master's Tombhammer
6603: T6_2H_HAMMER_UNDEAD@3                                            : Master's Tombhammer
6604: T7_2H_HAMMER_UNDEAD                                              : Grandmaster's Tombhammer
6605: T7_2H_HAMMER_UNDEAD@1                                            : Grandmaster's Tombhammer
6606: T7_2H_HAMMER_UNDEAD@2                                            : Grandmaster's Tombhammer
6607: T7_2H_HAMMER_UNDEAD@3                                            : Grandmaster's Tombhammer
6608: T8_2H_HAMMER_UNDEAD                                              : Elder's Tombhammer
6609: T8_2H_HAMMER_UNDEAD@1                                            : Elder's Tombhammer
6610: T8_2H_HAMMER_UNDEAD@2                                            : Elder's Tombhammer
6611: T8_2H_HAMMER_UNDEAD@3                                            : Elder's Tombhammer
6612: T4_2H_DUALHAMMER_HELL                                            : Adept's Forge Hammers
6613: T4_2H_DUALHAMMER_HELL@1                                          : Adept's Forge Hammers
6614: T4_2H_DUALHAMMER_HELL@2                                          : Adept's Forge Hammers
6615: T4_2H_DUALHAMMER_HELL@3                                          : Adept's Forge Hammers
6616: T5_2H_DUALHAMMER_HELL                                            : Expert's Forge Hammers
6617: T5_2H_DUALHAMMER_HELL@1                                          : Expert's Forge Hammers
6618: T5_2H_DUALHAMMER_HELL@2                                          : Expert's Forge Hammers
6619: T5_2H_DUALHAMMER_HELL@3                                          : Expert's Forge Hammers
6620: T6_2H_DUALHAMMER_HELL                                            : Master's Forge Hammers
6621: T6_2H_DUALHAMMER_HELL@1                                          : Master's Forge Hammers
6622: T6_2H_DUALHAMMER_HELL@2                                          : Master's Forge Hammers
6623: T6_2H_DUALHAMMER_HELL@3                                          : Master's Forge Hammers
6624: T7_2H_DUALHAMMER_HELL                                            : Grandmaster's Forge Hammers
6625: T7_2H_DUALHAMMER_HELL@1                                          : Grandmaster's Forge Hammers
6626: T7_2H_DUALHAMMER_HELL@2                                          : Grandmaster's Forge Hammers
6627: T7_2H_DUALHAMMER_HELL@3                                          : Grandmaster's Forge Hammers
6628: T8_2H_DUALHAMMER_HELL                                            : Elder's Forge Hammers
6629: T8_2H_DUALHAMMER_HELL@1                                          : Elder's Forge Hammers
6630: T8_2H_DUALHAMMER_HELL@2                                          : Elder's Forge Hammers
6631: T8_2H_DUALHAMMER_HELL@3                                          : Elder's Forge Hammers
6632: T4_2H_RAM_KEEPER                                                 : Adept's Grovekeeper
6633: T4_2H_RAM_KEEPER@1                                               : Adept's Grovekeeper
6634: T4_2H_RAM_KEEPER@2                                               : Adept's Grovekeeper
6635: T4_2H_RAM_KEEPER@3                                               : Adept's Grovekeeper
6636: T5_2H_RAM_KEEPER                                                 : Expert's Grovekeeper
6637: T5_2H_RAM_KEEPER@1                                               : Expert's Grovekeeper
6638: T5_2H_RAM_KEEPER@2                                               : Expert's Grovekeeper
6639: T5_2H_RAM_KEEPER@3                                               : Expert's Grovekeeper
6640: T6_2H_RAM_KEEPER                                                 : Master's Grovekeeper
6641: T6_2H_RAM_KEEPER@1                                               : Master's Grovekeeper
6642: T6_2H_RAM_KEEPER@2                                               : Master's Grovekeeper
6643: T6_2H_RAM_KEEPER@3                                               : Master's Grovekeeper
6644: T7_2H_RAM_KEEPER                                                 : Grandmaster's Grovekeeper
6645: T7_2H_RAM_KEEPER@1                                               : Grandmaster's Grovekeeper
6646: T7_2H_RAM_KEEPER@2                                               : Grandmaster's Grovekeeper
6647: T7_2H_RAM_KEEPER@3                                               : Grandmaster's Grovekeeper
6648: T8_2H_RAM_KEEPER                                                 : Elder's Grovekeeper
6649: T8_2H_RAM_KEEPER@1                                               : Elder's Grovekeeper
6650: T8_2H_RAM_KEEPER@2                                               : Elder's Grovekeeper
6651: T8_2H_RAM_KEEPER@3                                               : Elder's Grovekeeper
6652: T4_2H_HAMMER_AVALON                                              : Adept's Hand of Justice
6653: T4_2H_HAMMER_AVALON@1                                            : Adept's Hand of Justice
6654: T4_2H_HAMMER_AVALON@2                                            : Adept's Hand of Justice
6655: T4_2H_HAMMER_AVALON@3                                            : Adept's Hand of Justice
6656: T5_2H_HAMMER_AVALON                                              : Expert's Hand of Justice
6657: T5_2H_HAMMER_AVALON@1                                            : Expert's Hand of Justice
6658: T5_2H_HAMMER_AVALON@2                                            : Expert's Hand of Justice
6659: T5_2H_HAMMER_AVALON@3                                            : Expert's Hand of Justice
6660: T6_2H_HAMMER_AVALON                                              : Master's Hand of Justice
6661: T6_2H_HAMMER_AVALON@1                                            : Master's Hand of Justice
6662: T6_2H_HAMMER_AVALON@2                                            : Master's Hand of Justice
6663: T6_2H_HAMMER_AVALON@3                                            : Master's Hand of Justice
6664: T7_2H_HAMMER_AVALON                                              : Grandmaster's Hand of Justice
6665: T7_2H_HAMMER_AVALON@1                                            : Grandmaster's Hand of Justice
6666: T7_2H_HAMMER_AVALON@2                                            : Grandmaster's Hand of Justice
6667: T7_2H_HAMMER_AVALON@3                                            : Grandmaster's Hand of Justice
6668: T8_2H_HAMMER_AVALON                                              : Elder's Hand of Justice
6669: T8_2H_HAMMER_AVALON@1                                            : Elder's Hand of Justice
6670: T8_2H_HAMMER_AVALON@2                                            : Elder's Hand of Justice
6671: T8_2H_HAMMER_AVALON@3                                            : Elder's Hand of Justice
6672: T3_MAIN_MACE                                                     : Journeyman's Mace
6673: T4_MAIN_MACE                                                     : Adept's Mace
6674: T4_MAIN_MACE@1                                                   : Adept's Mace
6675: T4_MAIN_MACE@2                                                   : Adept's Mace
6676: T4_MAIN_MACE@3                                                   : Adept's Mace
6677: T5_MAIN_MACE                                                     : Expert's Mace
6678: T5_MAIN_MACE@1                                                   : Expert's Mace
6679: T5_MAIN_MACE@2                                                   : Expert's Mace
6680: T5_MAIN_MACE@3                                                   : Expert's Mace
6681: T6_MAIN_MACE                                                     : Master's Mace
6682: T6_MAIN_MACE@1                                                   : Master's Mace
6683: T6_MAIN_MACE@2                                                   : Master's Mace
6684: T6_MAIN_MACE@3                                                   : Master's Mace
6685: T7_MAIN_MACE                                                     : Grandmaster's Mace
6686: T7_MAIN_MACE@1                                                   : Grandmaster's Mace
6687: T7_MAIN_MACE@2                                                   : Grandmaster's Mace
6688: T7_MAIN_MACE@3                                                   : Grandmaster's Mace
6689: T8_MAIN_MACE                                                     : Elder's Mace
6690: T8_MAIN_MACE@1                                                   : Elder's Mace
6691: T8_MAIN_MACE@2                                                   : Elder's Mace
6692: T8_MAIN_MACE@3                                                   : Elder's Mace
6693: T4_2H_MACE                                                       : Adept's Heavy Mace
6694: T4_2H_MACE@1                                                     : Adept's Heavy Mace
6695: T4_2H_MACE@2                                                     : Adept's Heavy Mace
6696: T4_2H_MACE@3                                                     : Adept's Heavy Mace
6697: T5_2H_MACE                                                       : Expert's Heavy Mace
6698: T5_2H_MACE@1                                                     : Expert's Heavy Mace
6699: T5_2H_MACE@2                                                     : Expert's Heavy Mace
6700: T5_2H_MACE@3                                                     : Expert's Heavy Mace
6701: T6_2H_MACE                                                       : Master's Heavy Mace
6702: T6_2H_MACE@1                                                     : Master's Heavy Mace
6703: T6_2H_MACE@2                                                     : Master's Heavy Mace
6704: T6_2H_MACE@3                                                     : Master's Heavy Mace
6705: T7_2H_MACE                                                       : Grandmaster's Heavy Mace
6706: T7_2H_MACE@1                                                     : Grandmaster's Heavy Mace
6707: T7_2H_MACE@2                                                     : Grandmaster's Heavy Mace
6708: T7_2H_MACE@3                                                     : Grandmaster's Heavy Mace
6709: T8_2H_MACE                                                       : Elder's Heavy Mace
6710: T8_2H_MACE@1                                                     : Elder's Heavy Mace
6711: T8_2H_MACE@2                                                     : Elder's Heavy Mace
6712: T8_2H_MACE@3                                                     : Elder's Heavy Mace
6713: T4_2H_FLAIL                                                      : Adept's Morning Star
6714: T4_2H_FLAIL@1                                                    : Adept's Morning Star
6715: T4_2H_FLAIL@2                                                    : Adept's Morning Star
6716: T4_2H_FLAIL@3                                                    : Adept's Morning Star
6717: T5_2H_FLAIL                                                      : Expert's Morning Star
6718: T5_2H_FLAIL@1                                                    : Expert's Morning Star
6719: T5_2H_FLAIL@2                                                    : Expert's Morning Star
6720: T5_2H_FLAIL@3                                                    : Expert's Morning Star
6721: T6_2H_FLAIL                                                      : Master's Morning Star
6722: T6_2H_FLAIL@1                                                    : Master's Morning Star
6723: T6_2H_FLAIL@2                                                    : Master's Morning Star
6724: T6_2H_FLAIL@3                                                    : Master's Morning Star
6725: T7_2H_FLAIL                                                      : Grandmaster's Morning Star
6726: T7_2H_FLAIL@1                                                    : Grandmaster's Morning Star
6727: T7_2H_FLAIL@2                                                    : Grandmaster's Morning Star
6728: T7_2H_FLAIL@3                                                    : Grandmaster's Morning Star
6729: T8_2H_FLAIL                                                      : Elder's Morning Star
6730: T8_2H_FLAIL@1                                                    : Elder's Morning Star
6731: T8_2H_FLAIL@2                                                    : Elder's Morning Star
6732: T8_2H_FLAIL@3                                                    : Elder's Morning Star
6733: T4_MAIN_ROCKMACE_KEEPER                                          : Adept's Bedrock Mace
6734: T4_MAIN_ROCKMACE_KEEPER@1                                        : Adept's Bedrock Mace
6735: T4_MAIN_ROCKMACE_KEEPER@2                                        : Adept's Bedrock Mace
6736: T4_MAIN_ROCKMACE_KEEPER@3                                        : Adept's Bedrock Mace
6737: T5_MAIN_ROCKMACE_KEEPER                                          : Expert's Bedrock Mace
6738: T5_MAIN_ROCKMACE_KEEPER@1                                        : Expert's Bedrock Mace
6739: T5_MAIN_ROCKMACE_KEEPER@2                                        : Expert's Bedrock Mace
6740: T5_MAIN_ROCKMACE_KEEPER@3                                        : Expert's Bedrock Mace
6741: T6_MAIN_ROCKMACE_KEEPER                                          : Master's Bedrock Mace
6742: T6_MAIN_ROCKMACE_KEEPER@1                                        : Master's Bedrock Mace
6743: T6_MAIN_ROCKMACE_KEEPER@2                                        : Master's Bedrock Mace
6744: T6_MAIN_ROCKMACE_KEEPER@3                                        : Master's Bedrock Mace
6745: T7_MAIN_ROCKMACE_KEEPER                                          : Grandmaster's Bedrock Mace
6746: T7_MAIN_ROCKMACE_KEEPER@1                                        : Grandmaster's Bedrock Mace
6747: T7_MAIN_ROCKMACE_KEEPER@2                                        : Grandmaster's Bedrock Mace
6748: T7_MAIN_ROCKMACE_KEEPER@3                                        : Grandmaster's Bedrock Mace
6749: T8_MAIN_ROCKMACE_KEEPER                                          : Elder's Bedrock Mace
6750: T8_MAIN_ROCKMACE_KEEPER@1                                        : Elder's Bedrock Mace
6751: T8_MAIN_ROCKMACE_KEEPER@2                                        : Elder's Bedrock Mace
6752: T8_MAIN_ROCKMACE_KEEPER@3                                        : Elder's Bedrock Mace
6753: T4_MAIN_MACE_HELL                                                : Adept's Incubus Mace
6754: T4_MAIN_MACE_HELL@1                                              : Adept's Incubus Mace
6755: T4_MAIN_MACE_HELL@2                                              : Adept's Incubus Mace
6756: T4_MAIN_MACE_HELL@3                                              : Adept's Incubus Mace
6757: T5_MAIN_MACE_HELL                                                : Expert's Incubus Mace
6758: T5_MAIN_MACE_HELL@1                                              : Expert's Incubus Mace
6759: T5_MAIN_MACE_HELL@2                                              : Expert's Incubus Mace
6760: T5_MAIN_MACE_HELL@3                                              : Expert's Incubus Mace
6761: T6_MAIN_MACE_HELL                                                : Master's Incubus Mace
6762: T6_MAIN_MACE_HELL@1                                              : Master's Incubus Mace
6763: T6_MAIN_MACE_HELL@2                                              : Master's Incubus Mace
6764: T6_MAIN_MACE_HELL@3                                              : Master's Incubus Mace
6765: T7_MAIN_MACE_HELL                                                : Grandmaster's Incubus Mace
6766: T7_MAIN_MACE_HELL@1                                              : Grandmaster's Incubus Mace
6767: T7_MAIN_MACE_HELL@2                                              : Grandmaster's Incubus Mace
6768: T7_MAIN_MACE_HELL@3                                              : Grandmaster's Incubus Mace
6769: T8_MAIN_MACE_HELL                                                : Elder's Incubus Mace
6770: T8_MAIN_MACE_HELL@1                                              : Elder's Incubus Mace
6771: T8_MAIN_MACE_HELL@2                                              : Elder's Incubus Mace
6772: T8_MAIN_MACE_HELL@3                                              : Elder's Incubus Mace
6773: T4_2H_MACE_MORGANA                                               : Adept's Camlann Mace
6774: T4_2H_MACE_MORGANA@1                                             : Adept's Camlann Mace
6775: T4_2H_MACE_MORGANA@2                                             : Adept's Camlann Mace
6776: T4_2H_MACE_MORGANA@3                                             : Adept's Camlann Mace
6777: T5_2H_MACE_MORGANA                                               : Expert's Camlann Mace
6778: T5_2H_MACE_MORGANA@1                                             : Expert's Camlann Mace
6779: T5_2H_MACE_MORGANA@2                                             : Expert's Camlann Mace
6780: T5_2H_MACE_MORGANA@3                                             : Expert's Camlann Mace
6781: T6_2H_MACE_MORGANA                                               : Master's Camlann Mace
6782: T6_2H_MACE_MORGANA@1                                             : Master's Camlann Mace
6783: T6_2H_MACE_MORGANA@2                                             : Master's Camlann Mace
6784: T6_2H_MACE_MORGANA@3                                             : Master's Camlann Mace
6785: T7_2H_MACE_MORGANA                                               : Grandmaster's Camlann Mace
6786: T7_2H_MACE_MORGANA@1                                             : Grandmaster's Camlann Mace
6787: T7_2H_MACE_MORGANA@2                                             : Grandmaster's Camlann Mace
6788: T7_2H_MACE_MORGANA@3                                             : Grandmaster's Camlann Mace
6789: T8_2H_MACE_MORGANA                                               : Elder's Camlann Mace
6790: T8_2H_MACE_MORGANA@1                                             : Elder's Camlann Mace
6791: T8_2H_MACE_MORGANA@2                                             : Elder's Camlann Mace
6792: T8_2H_MACE_MORGANA@3                                             : Elder's Camlann Mace
6793: T4_2H_DUALMACE_AVALON                                            : Adept's Oathkeepers
6794: T4_2H_DUALMACE_AVALON@1                                          : Adept's Oathkeepers
6795: T4_2H_DUALMACE_AVALON@2                                          : Adept's Oathkeepers
6796: T4_2H_DUALMACE_AVALON@3                                          : Adept's Oathkeepers
6797: T5_2H_DUALMACE_AVALON                                            : Expert's Oathkeepers
6798: T5_2H_DUALMACE_AVALON@1                                          : Expert's Oathkeepers
6799: T5_2H_DUALMACE_AVALON@2                                          : Expert's Oathkeepers
6800: T5_2H_DUALMACE_AVALON@3                                          : Expert's Oathkeepers
6801: T6_2H_DUALMACE_AVALON                                            : Master's Oathkeepers
6802: T6_2H_DUALMACE_AVALON@1                                          : Master's Oathkeepers
6803: T6_2H_DUALMACE_AVALON@2                                          : Master's Oathkeepers
6804: T6_2H_DUALMACE_AVALON@3                                          : Master's Oathkeepers
6805: T7_2H_DUALMACE_AVALON                                            : Grandmaster's Oathkeepers
6806: T7_2H_DUALMACE_AVALON@1                                          : Grandmaster's Oathkeepers
6807: T7_2H_DUALMACE_AVALON@2                                          : Grandmaster's Oathkeepers
6808: T7_2H_DUALMACE_AVALON@3                                          : Grandmaster's Oathkeepers
6809: T8_2H_DUALMACE_AVALON                                            : Elder's Oathkeepers
6810: T8_2H_DUALMACE_AVALON@1                                          : Elder's Oathkeepers
6811: T8_2H_DUALMACE_AVALON@2                                          : Elder's Oathkeepers
6812: T8_2H_DUALMACE_AVALON@3                                          : Elder's Oathkeepers
6813: T3_2H_KNUCKLES_SET1                                              : Journeyman's Brawler Gloves
6814: T4_2H_KNUCKLES_SET1                                              : Adept's Brawler Gloves
6815: T4_2H_KNUCKLES_SET1@1                                            : Adept's Brawler Gloves
6816: T4_2H_KNUCKLES_SET1@2                                            : Adept's Brawler Gloves
6817: T4_2H_KNUCKLES_SET1@3                                            : Adept's Brawler Gloves
6818: T5_2H_KNUCKLES_SET1                                              : Expert's Brawler Gloves
6819: T5_2H_KNUCKLES_SET1@1                                            : Expert's Brawler Gloves
6820: T5_2H_KNUCKLES_SET1@2                                            : Expert's Brawler Gloves
6821: T5_2H_KNUCKLES_SET1@3                                            : Expert's Brawler Gloves
6822: T6_2H_KNUCKLES_SET1                                              : Master's Brawler Gloves
6823: T6_2H_KNUCKLES_SET1@1                                            : Master's Brawler Gloves
6824: T6_2H_KNUCKLES_SET1@2                                            : Master's Brawler Gloves
6825: T6_2H_KNUCKLES_SET1@3                                            : Master's Brawler Gloves
6826: T7_2H_KNUCKLES_SET1                                              : Grandmaster's Brawler Gloves
6827: T7_2H_KNUCKLES_SET1@1                                            : Grandmaster's Brawler Gloves
6828: T7_2H_KNUCKLES_SET1@2                                            : Grandmaster's Brawler Gloves
6829: T7_2H_KNUCKLES_SET1@3                                            : Grandmaster's Brawler Gloves
6830: T8_2H_KNUCKLES_SET1                                              : Elder's Brawler Gloves
6831: T8_2H_KNUCKLES_SET1@1                                            : Elder's Brawler Gloves
6832: T8_2H_KNUCKLES_SET1@2                                            : Elder's Brawler Gloves
6833: T8_2H_KNUCKLES_SET1@3                                            : Elder's Brawler Gloves
6834: T4_2H_KNUCKLES_SET2                                              : Adept's Battle Bracers
6835: T4_2H_KNUCKLES_SET2@1                                            : Adept's Battle Bracers
6836: T4_2H_KNUCKLES_SET2@2                                            : Adept's Battle Bracers
6837: T4_2H_KNUCKLES_SET2@3                                            : Adept's Battle Bracers
6838: T5_2H_KNUCKLES_SET2                                              : Expert's Battle Bracers
6839: T5_2H_KNUCKLES_SET2@1                                            : Expert's Battle Bracers
6840: T5_2H_KNUCKLES_SET2@2                                            : Expert's Battle Bracers
6841: T5_2H_KNUCKLES_SET2@3                                            : Expert's Battle Bracers
6842: T6_2H_KNUCKLES_SET2                                              : Master's Battle Bracers
6843: T6_2H_KNUCKLES_SET2@1                                            : Master's Battle Bracers
6844: T6_2H_KNUCKLES_SET2@2                                            : Master's Battle Bracers
6845: T6_2H_KNUCKLES_SET2@3                                            : Master's Battle Bracers
6846: T7_2H_KNUCKLES_SET2                                              : Grandmaster's Battle Bracers
6847: T7_2H_KNUCKLES_SET2@1                                            : Grandmaster's Battle Bracers
6848: T7_2H_KNUCKLES_SET2@2                                            : Grandmaster's Battle Bracers
6849: T7_2H_KNUCKLES_SET2@3                                            : Grandmaster's Battle Bracers
6850: T8_2H_KNUCKLES_SET2                                              : Elder's Battle Bracers
6851: T8_2H_KNUCKLES_SET2@1                                            : Elder's Battle Bracers
6852: T8_2H_KNUCKLES_SET2@2                                            : Elder's Battle Bracers
6853: T8_2H_KNUCKLES_SET2@3                                            : Elder's Battle Bracers
6854: T4_2H_KNUCKLES_SET3                                              : Adept's Spiked Gauntlets
6855: T4_2H_KNUCKLES_SET3@1                                            : Adept's Spiked Gauntlets
6856: T4_2H_KNUCKLES_SET3@2                                            : Adept's Spiked Gauntlets
6857: T4_2H_KNUCKLES_SET3@3                                            : Adept's Spiked Gauntlets
6858: T5_2H_KNUCKLES_SET3                                              : Expert's Spiked Gauntlets
6859: T5_2H_KNUCKLES_SET3@1                                            : Expert's Spiked Gauntlets
6860: T5_2H_KNUCKLES_SET3@2                                            : Expert's Spiked Gauntlets
6861: T5_2H_KNUCKLES_SET3@3                                            : Expert's Spiked Gauntlets
6862: T6_2H_KNUCKLES_SET3                                              : Master's Spiked Gauntlets
6863: T6_2H_KNUCKLES_SET3@1                                            : Master's Spiked Gauntlets
6864: T6_2H_KNUCKLES_SET3@2                                            : Master's Spiked Gauntlets
6865: T6_2H_KNUCKLES_SET3@3                                            : Master's Spiked Gauntlets
6866: T7_2H_KNUCKLES_SET3                                              : Grandmaster's Spiked Gauntlets
6867: T7_2H_KNUCKLES_SET3@1                                            : Grandmaster's Spiked Gauntlets
6868: T7_2H_KNUCKLES_SET3@2                                            : Grandmaster's Spiked Gauntlets
6869: T7_2H_KNUCKLES_SET3@3                                            : Grandmaster's Spiked Gauntlets
6870: T8_2H_KNUCKLES_SET3                                              : Elder's Spiked Gauntlets
6871: T8_2H_KNUCKLES_SET3@1                                            : Elder's Spiked Gauntlets
6872: T8_2H_KNUCKLES_SET3@2                                            : Elder's Spiked Gauntlets
6873: T8_2H_KNUCKLES_SET3@3                                            : Elder's Spiked Gauntlets
6874: T4_2H_KNUCKLES_KEEPER                                            : Adept's Ursine Maulers
6875: T4_2H_KNUCKLES_KEEPER@1                                          : Adept's Ursine Maulers
6876: T4_2H_KNUCKLES_KEEPER@2                                          : Adept's Ursine Maulers
6877: T4_2H_KNUCKLES_KEEPER@3                                          : Adept's Ursine Maulers
6878: T5_2H_KNUCKLES_KEEPER                                            : Expert's Ursine Maulers
6879: T5_2H_KNUCKLES_KEEPER@1                                          : Expert's Ursine Maulers
6880: T5_2H_KNUCKLES_KEEPER@2                                          : Expert's Ursine Maulers
6881: T5_2H_KNUCKLES_KEEPER@3                                          : Expert's Ursine Maulers
6882: T6_2H_KNUCKLES_KEEPER                                            : Master's Ursine Maulers
6883: T6_2H_KNUCKLES_KEEPER@1                                          : Master's Ursine Maulers
6884: T6_2H_KNUCKLES_KEEPER@2                                          : Master's Ursine Maulers
6885: T6_2H_KNUCKLES_KEEPER@3                                          : Master's Ursine Maulers
6886: T7_2H_KNUCKLES_KEEPER                                            : Grandmaster's Ursine Maulers
6887: T7_2H_KNUCKLES_KEEPER@1                                          : Grandmaster's Ursine Maulers
6888: T7_2H_KNUCKLES_KEEPER@2                                          : Grandmaster's Ursine Maulers
6889: T7_2H_KNUCKLES_KEEPER@3                                          : Grandmaster's Ursine Maulers
6890: T8_2H_KNUCKLES_KEEPER                                            : Elder's Ursine Maulers
6891: T8_2H_KNUCKLES_KEEPER@1                                          : Elder's Ursine Maulers
6892: T8_2H_KNUCKLES_KEEPER@2                                          : Elder's Ursine Maulers
6893: T8_2H_KNUCKLES_KEEPER@3                                          : Elder's Ursine Maulers
6894: T4_2H_KNUCKLES_HELL                                              : Adept's Hellfire Hands
6895: T4_2H_KNUCKLES_HELL@1                                            : Adept's Hellfire Hands
6896: T4_2H_KNUCKLES_HELL@2                                            : Adept's Hellfire Hands
6897: T4_2H_KNUCKLES_HELL@3                                            : Adept's Hellfire Hands
6898: T5_2H_KNUCKLES_HELL                                              : Expert's Hellfire Hands
6899: T5_2H_KNUCKLES_HELL@1                                            : Expert's Hellfire Hands
6900: T5_2H_KNUCKLES_HELL@2                                            : Expert's Hellfire Hands
6901: T5_2H_KNUCKLES_HELL@3                                            : Expert's Hellfire Hands
6902: T6_2H_KNUCKLES_HELL                                              : Master's Hellfire Hands
6903: T6_2H_KNUCKLES_HELL@1                                            : Master's Hellfire Hands
6904: T6_2H_KNUCKLES_HELL@2                                            : Master's Hellfire Hands
6905: T6_2H_KNUCKLES_HELL@3                                            : Master's Hellfire Hands
6906: T7_2H_KNUCKLES_HELL                                              : Grandmaster's Hellfire Hands
6907: T7_2H_KNUCKLES_HELL@1                                            : Grandmaster's Hellfire Hands
6908: T7_2H_KNUCKLES_HELL@2                                            : Grandmaster's Hellfire Hands
6909: T7_2H_KNUCKLES_HELL@3                                            : Grandmaster's Hellfire Hands
6910: T8_2H_KNUCKLES_HELL                                              : Elder's Hellfire Hands
6911: T8_2H_KNUCKLES_HELL@1                                            : Elder's Hellfire Hands
6912: T8_2H_KNUCKLES_HELL@2                                            : Elder's Hellfire Hands
6913: T8_2H_KNUCKLES_HELL@3                                            : Elder's Hellfire Hands
6914: T4_2H_KNUCKLES_MORGANA                                           : Adept's Ravenstrike Cestus
6915: T4_2H_KNUCKLES_MORGANA@1                                         : Adept's Ravenstrike Cestus
6916: T4_2H_KNUCKLES_MORGANA@2                                         : Adept's Ravenstrike Cestus
6917: T4_2H_KNUCKLES_MORGANA@3                                         : Adept's Ravenstrike Cestus
6918: T5_2H_KNUCKLES_MORGANA                                           : Expert's Ravenstrike Cestus
6919: T5_2H_KNUCKLES_MORGANA@1                                         : Expert's Ravenstrike Cestus
6920: T5_2H_KNUCKLES_MORGANA@2                                         : Expert's Ravenstrike Cestus
6921: T5_2H_KNUCKLES_MORGANA@3                                         : Expert's Ravenstrike Cestus
6922: T6_2H_KNUCKLES_MORGANA                                           : Master's Ravenstrike Cestus
6923: T6_2H_KNUCKLES_MORGANA@1                                         : Master's Ravenstrike Cestus
6924: T6_2H_KNUCKLES_MORGANA@2                                         : Master's Ravenstrike Cestus
6925: T6_2H_KNUCKLES_MORGANA@3                                         : Master's Ravenstrike Cestus
6926: T7_2H_KNUCKLES_MORGANA                                           : Grandmaster's Ravenstrike Cestus
6927: T7_2H_KNUCKLES_MORGANA@1                                         : Grandmaster's Ravenstrike Cestus
6928: T7_2H_KNUCKLES_MORGANA@2                                         : Grandmaster's Ravenstrike Cestus
6929: T7_2H_KNUCKLES_MORGANA@3                                         : Grandmaster's Ravenstrike Cestus
6930: T8_2H_KNUCKLES_MORGANA                                           : Elder's Ravenstrike Cestus
6931: T8_2H_KNUCKLES_MORGANA@1                                         : Elder's Ravenstrike Cestus
6932: T8_2H_KNUCKLES_MORGANA@2                                         : Elder's Ravenstrike Cestus
6933: T8_2H_KNUCKLES_MORGANA@3                                         : Elder's Ravenstrike Cestus
6934: T4_2H_KNUCKLES_AVALON                                            : Adept's Fists of Avalon
6935: T4_2H_KNUCKLES_AVALON@1                                          : Adept's Fists of Avalon
6936: T4_2H_KNUCKLES_AVALON@2                                          : Adept's Fists of Avalon
6937: T4_2H_KNUCKLES_AVALON@3                                          : Adept's Fists of Avalon
6938: T5_2H_KNUCKLES_AVALON                                            : Expert's Fists of Avalon
6939: T5_2H_KNUCKLES_AVALON@1                                          : Expert's Fists of Avalon
6940: T5_2H_KNUCKLES_AVALON@2                                          : Expert's Fists of Avalon
6941: T5_2H_KNUCKLES_AVALON@3                                          : Expert's Fists of Avalon
6942: T6_2H_KNUCKLES_AVALON                                            : Master's Fists of Avalon
6943: T6_2H_KNUCKLES_AVALON@1                                          : Master's Fists of Avalon
6944: T6_2H_KNUCKLES_AVALON@2                                          : Master's Fists of Avalon
6945: T6_2H_KNUCKLES_AVALON@3                                          : Master's Fists of Avalon
6946: T7_2H_KNUCKLES_AVALON                                            : Grandmaster's Fists of Avalon
6947: T7_2H_KNUCKLES_AVALON@1                                          : Grandmaster's Fists of Avalon
6948: T7_2H_KNUCKLES_AVALON@2                                          : Grandmaster's Fists of Avalon
6949: T7_2H_KNUCKLES_AVALON@3                                          : Grandmaster's Fists of Avalon
6950: T8_2H_KNUCKLES_AVALON                                            : Elder's Fists of Avalon
6951: T8_2H_KNUCKLES_AVALON@1                                          : Elder's Fists of Avalon
6952: T8_2H_KNUCKLES_AVALON@2                                          : Elder's Fists of Avalon
6953: T8_2H_KNUCKLES_AVALON@3                                          : Elder's Fists of Avalon
6954: T2_FURNITUREITEM_TROPHY_GENERAL                                  : Adventurer's Handbook
6955: T3_FURNITUREITEM_TROPHY_GENERAL                                  : Magical Tome
6956: T4_FURNITUREITEM_TROPHY_GENERAL                                  : Ancient Scripture
6957: T5_FURNITUREITEM_TROPHY_GENERAL                                  : Tome of Knowledge
6958: T6_FURNITUREITEM_TROPHY_GENERAL                                  : Encyclopedia of Power
6959: T7_FURNITUREITEM_TROPHY_GENERAL                                  : Occult Octavo
6960: T8_FURNITUREITEM_TROPHY_GENERAL                                  : Ledger of Truths
6961: T8_FURNITUREITEM_TROPHY_FISHING_BOSS                             : Trophy Shark
6962: T2_FURNITUREITEM_TROPHY_MERCENARY                                : Novice Mercenary's Trophy
6963: T3_FURNITUREITEM_TROPHY_MERCENARY                                : Journeyman Mercenary's Trophy
6964: T4_FURNITUREITEM_TROPHY_MERCENARY                                : Adept Mercenary's Trophy
6965: T5_FURNITUREITEM_TROPHY_MERCENARY                                : Expert Mercenary's Trophy
6966: T6_FURNITUREITEM_TROPHY_MERCENARY                                : Master Mercenary's Trophy
6967: T7_FURNITUREITEM_TROPHY_MERCENARY                                : Grandmaster Mercenary's Trophy
6968: T8_FURNITUREITEM_TROPHY_MERCENARY                                : Elder Mercenary's Trophy
6969: T2_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Fox Head
6970: T3_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Wolf Head
6971: T4_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Boar Head
6972: T5_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Bear Head
6973: T6_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Direwolf Head
6974: T7_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Direboar Head
6975: T8_FURNITUREITEM_TROPHY_HIDE                                     : Stuffed Direbear Head
6976: T2_FURNITUREITEM_TROPHY_ORE                                      : Copper Ore Sample
6977: T3_FURNITUREITEM_TROPHY_ORE                                      : Tin Ore Sample
6978: T4_FURNITUREITEM_TROPHY_ORE                                      : Iron Ore Sample
6979: T5_FURNITUREITEM_TROPHY_ORE                                      : Titanium Ore Sample
6980: T6_FURNITUREITEM_TROPHY_ORE                                      : Runite Ore Sample
6981: T7_FURNITUREITEM_TROPHY_ORE                                      : Meteorite Ore Sample
6982: T8_FURNITUREITEM_TROPHY_ORE                                      : Adamantium Ore Sample
6983: T2_FURNITUREITEM_TROPHY_FIBER                                    : Comfy Cotton Trophy
6984: T3_FURNITUREITEM_TROPHY_FIBER                                    : Fine Flax Trophy
6985: T4_FURNITUREITEM_TROPHY_FIBER                                    : Exquisite Hemp Trophy
6986: T5_FURNITUREITEM_TROPHY_FIBER                                    : Soft Skyflower Trophy
6987: T6_FURNITUREITEM_TROPHY_FIBER                                    : Comfy Amberleaf Cotton Trophy
6988: T7_FURNITUREITEM_TROPHY_FIBER                                    : Fine Sunflax Trophy
6989: T8_FURNITUREITEM_TROPHY_FIBER                                    : Exquisite Ghost Hemp Trophy
6990: T2_FURNITUREITEM_TROPHY_ROCK                                     : Limestone Fragment
6991: T3_FURNITUREITEM_TROPHY_ROCK                                     : Sandstone Fragment
6992: T4_FURNITUREITEM_TROPHY_ROCK                                     : Travertine Fragment
6993: T5_FURNITUREITEM_TROPHY_ROCK                                     : Granite Fragment
6994: T6_FURNITUREITEM_TROPHY_ROCK                                     : Slate Fragment
6995: T7_FURNITUREITEM_TROPHY_ROCK                                     : Basalt Fragment
6996: T8_FURNITUREITEM_TROPHY_ROCK                                     : Marble Fragment
6997: T2_FURNITUREITEM_TROPHY_WOOD                                     : Birch Bonsai
6998: T3_FURNITUREITEM_TROPHY_WOOD                                     : Chestnut Bonsai
6999: T4_FURNITUREITEM_TROPHY_WOOD                                     : Pine Bonsai
7000: T5_FURNITUREITEM_TROPHY_WOOD                                     : Cedar Bonsai
7001: T6_FURNITUREITEM_TROPHY_WOOD                                     : Bloodoak Bonsai
7002: T7_FURNITUREITEM_TROPHY_WOOD                                     : Ashenbark Bonsai
7003: T8_FURNITUREITEM_TROPHY_WOOD                                     : Whitewood Bonsai
7004: T2_FURNITUREITEM_TROPHY_FISH                                     : Carp Trophy
7005: T3_FURNITUREITEM_TROPHY_FISH                                     : Perch Trophy
7006: T4_FURNITUREITEM_TROPHY_FISH                                     : Pike Trophy
7007: T5_FURNITUREITEM_TROPHY_FISH                                     : Trout Trophy
7008: T6_FURNITUREITEM_TROPHY_FISH                                     : Zander Trophy
7009: T7_FURNITUREITEM_TROPHY_FISH                                     : Catfish Trophy
7010: T8_FURNITUREITEM_TROPHY_FISH                                     : Swordfish Trophy
7011: UNIQUE_WEAPONMASTER_HEAD_PROTOTYPE                               
7012: UNIQUE_WEAPONMASTER_ARMOR_PROTOTYPE                              
7013: UNIQUE_WEAPONMASTER_SHOES_PROTOTYPE                              
7014: UNIQUE_WEAPONMASTER_POTION_PROTOTYPE                             
7015: UNIQUE_WEAPONMASTER_IDLE_PROTOTYPE                               
7016: UNIQUE_GVGTOKEN_GENERIC                                          : Siphoned Energy
7017: T4_CAPEITEM_FW_BRIDGEWATCH_BP                                    : Adept's Bridgewatch Crest
7018: T5_CAPEITEM_FW_BRIDGEWATCH_BP                                    : Expert's Bridgewatch Crest
7019: T6_CAPEITEM_FW_BRIDGEWATCH_BP                                    : Master's Bridgewatch Crest
7020: T7_CAPEITEM_FW_BRIDGEWATCH_BP                                    : Grandmaster's Bridgewatch Crest
7021: T8_CAPEITEM_FW_BRIDGEWATCH_BP                                    : Elder's Bridgewatch Crest
7022: T4_CAPEITEM_FW_FORTSTERLING_BP                                   : Adept's Fort Sterling Crest
7023: T5_CAPEITEM_FW_FORTSTERLING_BP                                   : Expert's Fort Sterling Crest
7024: T6_CAPEITEM_FW_FORTSTERLING_BP                                   : Master's Fort Sterling Crest
7025: T7_CAPEITEM_FW_FORTSTERLING_BP                                   : Grandmaster's Fort Sterling Crest
7026: T8_CAPEITEM_FW_FORTSTERLING_BP                                   : Elder's Fort Sterling Crest
7027: T4_CAPEITEM_FW_LYMHURST_BP                                       : Adept's Lymhurst Crest
7028: T5_CAPEITEM_FW_LYMHURST_BP                                       : Expert's Lymhurst Crest
7029: T6_CAPEITEM_FW_LYMHURST_BP                                       : Master's Lymhurst Crest
7030: T7_CAPEITEM_FW_LYMHURST_BP                                       : Grandmaster's Lymhurst Crest
7031: T8_CAPEITEM_FW_LYMHURST_BP                                       : Elder's Lymhurst Crest
7032: T4_CAPEITEM_FW_MARTLOCK_BP                                       : Adept's Martlock Crest
7033: T5_CAPEITEM_FW_MARTLOCK_BP                                       : Expert's Martlock Crest
7034: T6_CAPEITEM_FW_MARTLOCK_BP                                       : Master's Martlock Crest
7035: T7_CAPEITEM_FW_MARTLOCK_BP                                       : Grandmaster's Martlock Crest
7036: T8_CAPEITEM_FW_MARTLOCK_BP                                       : Elder's Martlock Crest
7037: T4_CAPEITEM_FW_THETFORD_BP                                       : Adept's Thetford Crest
7038: T5_CAPEITEM_FW_THETFORD_BP                                       : Expert's Thetford Crest
7039: T6_CAPEITEM_FW_THETFORD_BP                                       : Master's Thetford Crest
7040: T7_CAPEITEM_FW_THETFORD_BP                                       : Grandmaster's Thetford Crest
7041: T8_CAPEITEM_FW_THETFORD_BP                                       : Elder's Thetford Crest
7042: T4_CAPEITEM_FW_CAERLEON_BP                                       : Adept's Caerleon Crest
7043: T5_CAPEITEM_FW_CAERLEON_BP                                       : Expert's Caerleon Crest
7044: T6_CAPEITEM_FW_CAERLEON_BP                                       : Master's Caerleon Crest
7045: T7_CAPEITEM_FW_CAERLEON_BP                                       : Grandmaster's Caerleon Crest
7046: T8_CAPEITEM_FW_CAERLEON_BP                                       : Elder's Caerleon Crest
7047: T4_CAPEITEM_HERETIC_BP                                           : Adept's Heretic Crest
7048: T5_CAPEITEM_HERETIC_BP                                           : Expert's Heretic Crest
7049: T6_CAPEITEM_HERETIC_BP                                           : Master's Heretic Crest
7050: T7_CAPEITEM_HERETIC_BP                                           : Grandmaster's Heretic Crest
7051: T8_CAPEITEM_HERETIC_BP                                           : Elder's Heretic Crest
7052: T4_CAPEITEM_UNDEAD_BP                                            : Adept's Undead Crest
7053: T5_CAPEITEM_UNDEAD_BP                                            : Expert's Undead Crest
7054: T6_CAPEITEM_UNDEAD_BP                                            : Master's Undead Crest
7055: T7_CAPEITEM_UNDEAD_BP                                            : Grandmaster's Undead Crest
7056: T8_CAPEITEM_UNDEAD_BP                                            : Elder's Undead Crest
7057: T4_CAPEITEM_KEEPER_BP                                            : Adept's Keeper Crest
7058: T5_CAPEITEM_KEEPER_BP                                            : Expert's Keeper Crest
7059: T6_CAPEITEM_KEEPER_BP                                            : Master's Keeper Crest
7060: T7_CAPEITEM_KEEPER_BP                                            : Grandmaster's Keeper Crest
7061: T8_CAPEITEM_KEEPER_BP                                            : Elder's Keeper Crest
7062: T4_CAPEITEM_MORGANA_BP                                           : Adept's Morgana Crest
7063: T5_CAPEITEM_MORGANA_BP                                           : Expert's Morgana Crest
7064: T6_CAPEITEM_MORGANA_BP                                           : Master's Morgana Crest
7065: T7_CAPEITEM_MORGANA_BP                                           : Grandmaster's Morgana Crest
7066: T8_CAPEITEM_MORGANA_BP                                           : Elder's Morgana Crest
7067: T4_CAPEITEM_DEMON_BP                                             : Adept's Demon Crest
7068: T5_CAPEITEM_DEMON_BP                                             : Expert's Demon Crest
7069: T6_CAPEITEM_DEMON_BP                                             : Master's Demon Crest
7070: T7_CAPEITEM_DEMON_BP                                             : Grandmaster's Demon Crest
7071: T8_CAPEITEM_DEMON_BP                                             : Elder's Demon Crest
7072: T1_FACTION_FOREST_TOKEN_1                                        : Treeheart
7073: T1_FACTION_HIGHLAND_TOKEN_1                                      : Rockheart
7074: T1_FACTION_STEPPE_TOKEN_1                                        : Beastheart
7075: T1_FACTION_MOUNTAIN_TOKEN_1                                      : Mountainheart
7076: T1_FACTION_SWAMP_TOKEN_1                                         : Vineheart
7077: T1_FACTION_CAERLEON_TOKEN_1                                      : Shadowheart
7078: T4_LOOTCHEST_CRYSTAL_LEAGUE                                      : Adept's Crystal League Chest
7079: T5_LOOTCHEST_CRYSTAL_LEAGUE                                      : Expert's Crystal League Chest
7080: T6_LOOTCHEST_CRYSTAL_LEAGUE                                      : Master's Crystal League Chest
7081: T7_LOOTCHEST_CRYSTAL_LEAGUE                                      : Grandmaster's Crystal League Chest
7082: T8_LOOTCHEST_CRYSTAL_LEAGUE                                      : Elder's Crystal League Chest
7083: UNIQUE_SKILLBOOK_ADC_GENERAL_01                                  : Adventurer's Tome
7084: UNIQUE_SILVERBAG_ADC_GENERAL_01                                  : Bag of Silver
7085: UNIQUE_REPAIRPOWDER_ADC_GENERAL_01                               : Scroll of Repair
7086: UNIQUE_FOCUSPOTION_ADC_GENERAL_01                                : Focus Restoration Potion
7087: UNIQUE_FOCUSPOTION_ADC_NONTRADABLE_01                            : Focus Restoration Potion
7088: UNIQUE_FOCUSPOTION_TUTORIAL_01                                   : Diluted Focus Restoration Potion
7089: UNIQUE_LOOTCHEST_ADC_OCT2018_01                                  : Harvest Challenge Chest
7090: UNIQUE_LOOTCHEST_ADC_NOV2018                                     : Grim Challenge Chest
7091: UNIQUE_LOOTCHEST_ADC_DEC2018                                     : Yuletide Challenge Chest
7092: UNIQUE_LOOTCHEST_ADC_JAN2019                                     : Frost Challenge Chest
7093: UNIQUE_LOOTCHEST_ADC_FEB2019                                     : Carnival Challenge Chest
7094: UNIQUE_LOOTCHEST_ADC_MAR2019                                     : Keeper Challenge Chest
7095: UNIQUE_LOOTCHEST_ADC_APR2019                                     : Hunter Challenge Chest
7096: UNIQUE_LOOTCHEST_ADC_MAY2019                                     : Morgana Challenge Chest
7097: UNIQUE_LOOTCHEST_ADC_JUN2019                                     : Knight Challenge Chest
7098: UNIQUE_LOOTCHEST_ADC_JUL2019                                     : Undead Challenge Chest
7099: UNIQUE_LOOTCHEST_ADC_AUG2019                                     : Divine Challenge Chest
7100: UNIQUE_LOOTCHEST_ADC_SEP2019                                     : Heretic Challenge Chest
7101: UNIQUE_LOOTCHEST_ADC_OCT2019                                     : Harvest Challenge Chest
7102: UNIQUE_AVATARRING_ADC_NOV2018                                    : Avatar Ring: Grim Challenge
7103: UNIQUE_AVATARRING_ADC_DEC2018                                    : Avatar Ring: Yuletide Challenge
7104: UNIQUE_AVATARRING_ADC_JAN2019                                    : Avatar Ring: Frost Challenge
7105: UNIQUE_AVATARRING_ADC_FEB2019                                    : Avatar Ring: Carnival Challenge
7106: UNIQUE_AVATARRING_ADC_MAR2019                                    : Avatar Ring: Keeper Challenge
7107: UNIQUE_AVATARRING_ADC_APR2019                                    : Avatar Ring: Hunter Challenge
7108: UNIQUE_AVATARRING_ADC_MAY2019                                    : Avatar Ring: Morgana Challenge
7109: UNIQUE_AVATARRING_ADC_JUN2019                                    : Avatar Ring: Knight Challenge
7110: UNIQUE_AVATARRING_ADC_JUL2019                                    : Avatar Ring: Undead Challenge
7111: UNIQUE_AVATARRING_ADC_AUG2019                                    : Avatar Ring: Divine Challenge
7112: UNIQUE_AVATARRING_ADC_SEP2019                                    : Avatar Ring: Heretic Challenge
7113: UNIQUE_AVATARRING_ADC_OCT2019                                    : Avatar Ring: Harvest Challenge
7114: UNIQUE_AVATARRING_CHARITY_MARCH2020                              : Avatar Ring: Staff of Hermes
7115: UNIQUE_AVATARRING_ADC_TOKENLOCKED_01                             : Avatar Ring: Adventurer
7116: UNIQUE_AVATARRING_ADC_TOKENLOCKED_NATURE                         : Avatar Ring: Nature Spirit
7117: UNIQUE_AVATARRING_ADC_TOKENLOCKED_FIRE                           : Avatar Ring: Inferno
7118: UNIQUE_AVATARRING_ADC_TOKENLOCKED_ARCANE                         : Avatar Ring: Enigma
7119: UNIQUE_AVATARRING_ADC_TOKENLOCKED_SWORDS                         : Avatar Ring: Crossed Blades
7120: UNIQUE_AVATARRING_ADC_TOKENLOCKED_FARMING                        : Avatar Ring: Farmer
7121: UNIQUE_AVATARRING_ADC_TOKENLOCKED_AXES                           : Avatar Ring: Crossed Axes
7122: UNIQUE_AVATARRING_ADC_TOKENLOCKED_FISHING                        : Avatar Ring: Fisherman
7123: UNIQUE_AVATARRING_ADC_TOKENLOCKED_NECROMANCER                    : Avatar Ring: Necromancer
7124: UNIQUE_AVATAR_ADC_TOKENLOCKED_01                                 : Avatar: Adventurer
7125: T8_GVGSEASONREWARD_FAMEBUFF                                      : Elder's Knight's Vow
7126: T7_GVGSEASONREWARD_FAMEBUFF                                      : Grandmaster's Knight's Vow
7127: T6_GVGSEASONREWARD_FAMEBUFF                                      : Master's Knight's Vow
7128: T5_GVGSEASONREWARD_FAMEBUFF                                      : Expert's Knight's Vow
7129: T4_GVGSEASONREWARD_FAMEBUFF                                      : Adept's Knight's Vow
7130: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_NEUTRAL                  
7131: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_01                 : Iron Campaign Chest: Thetford
7132: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_02                 : Bronze Campaign Chest: Thetford
7133: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_03                 : Silver Campaign Chest: Thetford
7134: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_04                 : Gold Campaign Chest: Thetford
7135: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_01              : Iron Campaign Chest: Fort Sterling
7136: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_02              : Bronze Campaign Chest: Fort Sterling
7137: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_03              : Silver Campaign Chest: Fort Sterling
7138: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_04              : Gold Campaign Chest: Fort Sterling
7139: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_01                : Iron Campaign Chest: Lymhurst
7140: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_02                : Bronze Campaign Chest: Lymhurst
7141: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_03                : Silver Campaign Chest: Lymhurst
7142: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_04                : Gold Campaign Chest: Lymhurst
7143: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_01                : Iron Campaign Chest: Bridgewatch
7144: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_02                : Bronze Campaign Chest: Bridgewatch
7145: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_03                : Silver Campaign Chest: Bridgewatch
7146: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_04                : Gold Campaign Chest: Bridgewatch
7147: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_01              : Iron Campaign Chest: Martlock
7148: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_02              : Bronze Campaign Chest: Martlock
7149: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_03              : Silver Campaign Chest: Martlock
7150: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_04              : Gold Campaign Chest: Martlock
7151: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_01              : Iron Campaign Chest: Caerleon
7152: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_02              : Bronze Campaign Chest: Caerleon
7153: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_03              : Silver Campaign Chest: Caerleon
7154: UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_04              : Gold Campaign Chest: Caerleon
7155: UNIQUE_LOOTCHEST_CONQUEROR_WEEKLY_REWARD                         : Grand Conqueror's Chest
7156: UNIQUE_LOOTCHEST_CONQUEROR_FAVOR_PURCHASE                        : Conqueror's Chest
7157: UNIQUE_LOOTCHEST_BATTLEMOUNT_CRYSTAL                             : Crystal Battle Mount Chest
7158: UNIQUE_LOOTCHEST_BATTLEMOUNT_GOLD                                : Gold Battle Mount Chest
7159: UNIQUE_LOOTCHEST_BATTLEMOUNT_SILVER                              : Silver Battle Mount Chest
7160: UNIQUE_LOOTCHEST_BATTLEMOUNT_BRONZE                              : Bronze Battle Mount Chest
7161: UNIQUE_FURNITUREITEM_GVG_SEASON_09_1ST                           : 1st Place Statue - Season 9
7162: UNIQUE_FURNITUREITEM_GVG_SEASON_09_2ND                           : 2nd Place Statue - Season 9
7163: UNIQUE_FURNITUREITEM_GVG_SEASON_09_3RD                           : 3rd Place Statue - Season 9
7164: UNIQUE_FURNITUREITEM_GVG_SEASON_10_1ST                           : 1st Place Statue - Season 10
7165: UNIQUE_FURNITUREITEM_GVG_SEASON_10_2ND                           : 2nd Place Statue - Season 10
7166: UNIQUE_FURNITUREITEM_GVG_SEASON_10_3RD                           : 3rd Place Statue - Season 10
7167: UNIQUE_FURNITUREITEM_GVG_SEASON_11_1ST                           : 1st Place Statue - Season 11
7168: UNIQUE_FURNITUREITEM_GVG_SEASON_11_2ND                           : 2nd Place Statue - Season 11
7169: UNIQUE_FURNITUREITEM_GVG_SEASON_11_3RD                           : 3rd Place Statue - Season 11
7170: UNIQUE_FURNITUREITEM_GVG_SEASON_12_1ST                           : 1st Place Statue - Season 12
7171: UNIQUE_FURNITUREITEM_GVG_SEASON_12_2ND                           : 2nd Place Statue - Season 12
7172: UNIQUE_FURNITUREITEM_GVG_SEASON_12_3RD                           : 3rd Place Statue - Season 12
7173: UNIQUE_FURNITUREITEM_GVG_SEASON_13_1ST                           : 1st Place Statue - Season 13
7174: UNIQUE_FURNITUREITEM_GVG_SEASON_13_2ND                           : 2nd Place Statue - Season 13
7175: UNIQUE_FURNITUREITEM_GVG_SEASON_13_3RD                           : 3rd Place Statue - Season 13
7176: UNIQUE_FURNITUREITEM_GVG_SEASON_ENERGY_RUSH_1ST                  : 1st Place Statue - Energy Surge Season
7177: UNIQUE_FURNITUREITEM_GVG_SEASON_ENERGY_RUSH_2ND                  : 2nd Place Statue - Energy Surge Season
7178: UNIQUE_FURNITUREITEM_GVG_SEASON_ENERGY_RUSH_3RD                  : 3rd Place Statue - Energy Surge Season
7179: UNIQUE_FURNITUREITEM_GVG_SEASON_14_1ST                           : 1st Place Statue - Season 14
7180: UNIQUE_FURNITUREITEM_GVG_SEASON_14_2ND                           : 2nd Place Statue - Season 14
7181: UNIQUE_FURNITUREITEM_GVG_SEASON_14_3RD                           : 3rd Place Statue - Season 14
7182: UNIQUE_AVATARRING_GVGSEASONREWARD_1ST                            : Avatar Ring: Season 1st Place
7183: UNIQUE_AVATARRING_GVGSEASONREWARD_2ND                            : Avatar Ring: Season 2nd Place
7184: UNIQUE_AVATARRING_GVGSEASONREWARD_3RD                            : Avatar Ring: Season 3rd Place
7185: UNIQUE_AVATARRING_GVGSEASONREWARD_CRYSTAL                        : Avatar Ring Set: Season Crystal Rank
7186: UNIQUE_AVATARRING_GVGSEASONREWARD_GOLD                           : Avatar Ring Set: Season Gold Rank
7187: UNIQUE_AVATARRING_GVGSEASONREWARD_SILVER                         : Avatar Ring Set: Season Silver Rank
7188: UNIQUE_AVATARRING_GVGSEASONREWARD_BRONZE                         : Avatar Ring Set: Season Bronze Rank
7189: UNIQUE_AVATARRING_GVGSEASONREWARD_IRON                           : Avatar Ring: Season Iron Rank
7190: UNIQUE_AVATARRING_GVGSEASONREWARD_AVALON_INVASION                : Avatar Ring: Avalonian Invasion
7191: UNIQUE_AVATARRING_TELLAFRIEND                                    : Avatar Ring: Recruiter
7192: UNIQUE_AVATARRING_ORIGINAL_PLAYER                                : Avatar Ring: Seasoned Adventurer
7193: UNIQUE_AVATAR_GVGSEASON_04                                       : Avatar: Guild Season 4
7194: UNIQUE_AVATAR_GVGSEASON_05                                       : Avatar: Guild Season 5
7195: UNIQUE_AVATAR_GVGSEASON_06                                       : Avatar: Guild Season 6
7196: UNIQUE_AVATAR_GVGSEASON_07                                       : Avatar: Guild Season 7
7197: UNIQUE_AVATAR_GVGSEASON_AVALON_INVASION                          : Avatar: Avalonian Invasion
7198: UNIQUE_AVATAR_GVGSEASON_08                                       : Avatar: Guild Season 8
7199: UNIQUE_AVATAR_GVGSEASON_09                                       : Avatar: Guild Season 9
7200: UNIQUE_AVATAR_GVGSEASON_10                                       : Avatar: Guild Season 10
7201: UNIQUE_AVATAR_GVGSEASON_11                                       : Avatar: Guild Season 11
7202: UNIQUE_AVATAR_GVGSEASON_12                                       : Avatar: Guild Season 12
7203: UNIQUE_AVATAR_GVGSEASON_13                                       : Avatar: Guild Season 13
7204: UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_CRYSTAL                      : Avatar Set: Energy Surge Crystal Rank
7205: UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_GOLD                         : Avatar Set: Energy Surge Gold Rank
7206: UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_SILVER                       : Avatar Set: Energy Surge Silver Rank
7207: UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_BRONZE                       : Avatar: Energy Surge Bronze Rank
7208: UNIQUE_AVATAR_GVGSEASON_14_CRYSTAL                               : Avatar Set: Season 14 Crystal Rank
7209: UNIQUE_AVATAR_GVGSEASON_14_GOLD                                  : Avatar Set: Season 14 Gold Rank
7210: UNIQUE_AVATAR_GVGSEASON_14_SILVER                                : Avatar Set: Season 14 Silver Rank
7211: UNIQUE_AVATAR_GVGSEASON_14_BRONZE                                : Avatar: Season 14 Bronze Rank
7212: T6_HELLGATE_2V2_LETHAL_1_MAP                                     : Master's Hellgate Ritual (2v2 - Lethal)
7213: T7_HELLGATE_5V5_LETHAL_1_MAP                                     : Grandmaster's Hellgate Ritual (5v5 - Lethal)
7214: T8_HELLGATE_10V10_LETHAL_1_MAP                                   : Elder's Hellgate Ritual (10v10 - Lethal)
7215: T5_HELLGATE_2V2_NON_LETHAL_1_MAP                                 : Expert's Hellgate Ritual (2v2 - Nonlethal)
7216: T5_HELLGATE_5V5_NON_LETHAL_1_MAP                                 : Expert's Hellgate Ritual (5v5 - Nonlethal)
7217: T5_HELLGATE_10V10_NON_LETHAL_1_MAP                               : Expert's Hellgate Ritual (10v10 - Nonlethal)
7218: T6_RANDOM_DUNGEON_ELITE_TOKEN_1                                  : Master's Dungeon Map (Large Group)
7219: T7_RANDOM_DUNGEON_ELITE_TOKEN_1                                  : Grandmaster's Dungeon Map (Large Group)
7220: T8_RANDOM_DUNGEON_ELITE_TOKEN_1                                  : Elder's Dungeon Map (Large Group)
7221: T6_RANDOM_DUNGEON_ELITE_TOKEN_2@1                                : Uncommon Master's Dungeon Map (Large Group)
7222: T7_RANDOM_DUNGEON_ELITE_TOKEN_2@1                                : Uncommon Grandmaster's Dungeon Map (Large Group)
7223: T8_RANDOM_DUNGEON_ELITE_TOKEN_2@1                                : Uncommon Elder's Dungeon Map (Large Group)
7224: T6_RANDOM_DUNGEON_ELITE_TOKEN_3@2                                : Rare Master's Dungeon Map (Large Group)
7225: T7_RANDOM_DUNGEON_ELITE_TOKEN_3@2                                : Rare Grandmaster's Dungeon Map (Large Group)
7226: T8_RANDOM_DUNGEON_ELITE_TOKEN_3@2                                : Rare Elder's Dungeon Map (Large Group)
7227: T6_RANDOM_DUNGEON_ELITE_TOKEN_4@3                                : Exceptional Master's Dungeon Map (Large Group)
7228: T7_RANDOM_DUNGEON_ELITE_TOKEN_4@3                                : Exceptional Grandmaster's Dungeon Map (Large Group)
7229: T8_RANDOM_DUNGEON_ELITE_TOKEN_4@3                                : Exceptional Elder's Dungeon Map (Large Group)
7230: T2_RANDOM_DUNGEON_SOLO_TOKEN_1                                   
7231: T3_RANDOM_DUNGEON_SOLO_TOKEN_1                                   : Journeyman's Dungeon Map (Solo)
7232: T4_RANDOM_DUNGEON_SOLO_TOKEN_1                                   : Adept's Dungeon Map (Solo)
7233: T5_RANDOM_DUNGEON_SOLO_TOKEN_1                                   : Expert's Dungeon Map (Solo)
7234: T6_RANDOM_DUNGEON_SOLO_TOKEN_1                                   : Master's Dungeon Map (Solo)
7235: T7_RANDOM_DUNGEON_SOLO_TOKEN_1                                   : Grandmaster's Dungeon Map (Solo)
7236: T8_RANDOM_DUNGEON_SOLO_TOKEN_1                                   : Elder's Dungeon Map (Solo)
7237: T4_RANDOM_DUNGEON_SOLO_TOKEN_2@1                                 : Uncommon Adept's Dungeon Map (Solo)
7238: T5_RANDOM_DUNGEON_SOLO_TOKEN_2@1                                 : Uncommon Expert's Dungeon Map (Solo)
7239: T6_RANDOM_DUNGEON_SOLO_TOKEN_2@1                                 : Uncommon Master's Dungeon Map (Solo)
7240: T7_RANDOM_DUNGEON_SOLO_TOKEN_2@1                                 : Uncommon Grandmaster's Dungeon Map (Solo)
7241: T8_RANDOM_DUNGEON_SOLO_TOKEN_2@1                                 : Uncommon Elder's Dungeon Map (Solo)
7242: T4_RANDOM_DUNGEON_SOLO_TOKEN_3@2                                 : Rare Adept's Dungeon Map (Solo)
7243: T5_RANDOM_DUNGEON_SOLO_TOKEN_3@2                                 : Rare Expert's Dungeon Map (Solo)
7244: T6_RANDOM_DUNGEON_SOLO_TOKEN_3@2                                 : Rare Master's Dungeon Map (Solo)
7245: T7_RANDOM_DUNGEON_SOLO_TOKEN_3@2                                 : Rare Grandmaster's Dungeon Map (Solo)
7246: T8_RANDOM_DUNGEON_SOLO_TOKEN_3@2                                 : Rare Elder's Dungeon Map (Solo)
7247: T4_RANDOM_DUNGEON_SOLO_TOKEN_4@3                                 : Exceptional Adept's Dungeon Map (Solo)
7248: T5_RANDOM_DUNGEON_SOLO_TOKEN_4@3                                 : Exceptional Expert's Dungeon Map (Solo)
7249: T6_RANDOM_DUNGEON_SOLO_TOKEN_4@3                                 : Exceptional Master's Dungeon Map (Solo)
7250: T7_RANDOM_DUNGEON_SOLO_TOKEN_4@3                                 : Exceptional Grandmaster's Dungeon Map (Solo)
7251: T8_RANDOM_DUNGEON_SOLO_TOKEN_4@3                                 : Exceptional Elder's Dungeon Map (Solo)
7252: T4_RANDOM_DUNGEON_TOKEN_1                                        : Adept's Dungeon Map (Group)
7253: T5_RANDOM_DUNGEON_TOKEN_1                                        : Expert's Dungeon Map (Group)
7254: T6_RANDOM_DUNGEON_TOKEN_1                                        : Master's Dungeon Map (Group)
7255: T7_RANDOM_DUNGEON_TOKEN_1                                        : Grandmaster's Dungeon Map (Group)
7256: T8_RANDOM_DUNGEON_TOKEN_1                                        : Elder's Dungeon Map (Group)
7257: T4_RANDOM_DUNGEON_TOKEN_2@1                                      : Uncommon Adept's Dungeon Map (Group)
7258: T5_RANDOM_DUNGEON_TOKEN_2@1                                      : Uncommon Expert's Dungeon Map (Group)
7259: T6_RANDOM_DUNGEON_TOKEN_2@1                                      : Uncommon Master's Dungeon Map (Group)
7260: T7_RANDOM_DUNGEON_TOKEN_2@1                                      : Uncommon Grandmaster's Dungeon Map (Group)
7261: T8_RANDOM_DUNGEON_TOKEN_2@1                                      : Uncommon Elder's Dungeon Map (Group)
7262: T4_RANDOM_DUNGEON_TOKEN_3@2                                      : Rare Adept's Dungeon Map (Group)
7263: T5_RANDOM_DUNGEON_TOKEN_3@2                                      : Rare Expert's Dungeon Map (Group)
7264: T6_RANDOM_DUNGEON_TOKEN_3@2                                      : Rare Master's Dungeon Map (Group)
7265: T7_RANDOM_DUNGEON_TOKEN_3@2                                      : Rare Grandmaster's Dungeon Map (Group)
7266: T8_RANDOM_DUNGEON_TOKEN_3@2                                      : Rare Elder's Dungeon Map (Group)
7267: T4_RANDOM_DUNGEON_TOKEN_4@3                                      : Exceptional Adept's Dungeon Map (Group)
7268: T5_RANDOM_DUNGEON_TOKEN_4@3                                      : Exceptional Expert's Dungeon Map (Group)
7269: T6_RANDOM_DUNGEON_TOKEN_4@3                                      : Exceptional Master's Dungeon Map (Group)
7270: T7_RANDOM_DUNGEON_TOKEN_4@3                                      : Exceptional Grandmaster's Dungeon Map (Group)
7271: T8_RANDOM_DUNGEON_TOKEN_4@3                                      : Exceptional Elder's Dungeon Map (Group)
7272: SKIN_HORSE_FOUNDER_LEGENDARY                                     : Legendary Explorer's Horse
7273: UNIQUE_UNLOCK_SKIN_HORSE_FOUNDER_LEGENDARY                       : Riding Horse Skin: Legendary Explorer
7274: SKIN_HORSE_STARTERPACK                                           : Legendary Adventurer's Horse
7275: UNIQUE_UNLOCK_SKIN_HORSE_STARTERPACK                             : Riding Horse Skin: Legendary Adventurer
7276: SKIN_HORSE_TELLAFRIEND                                           : Recruiter's Horse
7277: UNIQUE_UNLOCK_SKIN_HORSE_TELLAFRIEND                             : Riding Horse Skin: Recruiter
7278: SKIN_HORSE_PONY_TELLAFRIEND                                      : Recruiter's Pony
7279: UNIQUE_UNLOCK_SKIN_HORSE_PONY_TELLAFRIEND                        : Riding Horse Skin: Recruiter's Pony
7280: SKIN_HORSE_UNDEAD                                                : Bonehorse
7281: UNIQUE_UNLOCK_SKIN_HORSE_UNDEAD                                  : Riding Horse Skin: Bonehorse
7282: SKIN_HORSE_UNDEAD_HALLOWEEN                                      : Horse Macabre
7283: UNIQUE_UNLOCK_SKIN_HORSE_UNDEAD_HALLOWEEN                        : Riding Horse Skin: Horse Macabre
7284: SKIN_HORSE_BROWN                                                 : Brown Mare
7285: SKIN_HORSE_KEEPER                                                : Keeper Horse
7286: SKIN_HORSE_UNICORN                                               : Nightshade Unicorn
7287: SKIN_HORSE_GUILDBANNER                                           : Jousting Horse
7288: UNIQUE_UNLOCK_SKIN_HORSE_GUILDBANNER                             : Riding Horse Skin: Jousting Horse
7289: SKIN_HORSE_UNICORN_WHITE_TELLAFRIEND                             : Unicorn
7290: UNIQUE_UNLOCK_SKIN_HORSE_UNICORN_WHITE_TELLAFRIEND               : Riding Horse Skin: Unicorn
7291: SKIN_HORSE_JESTER_TELLAFRIEND                                    : Jester Horse
7292: UNIQUE_UNLOCK_SKIN_HORSE_JESTER_TELLAFRIEND                      : Riding Horse Skin: Jester Horse
7293: SKIN_HORSE_QUESTING_BEAST                                        : Chimera
7294: UNIQUE_UNLOCK_SKIN_HORSE_QUESTING_BEAST                          : Riding Horse Skin: Chimera
7295: SKIN_ARMORED_HORSE_ARENA                                         : Arena Veteran's Armored Horse
7296: UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_ARENA                           : Armored Horse Skin: Arena Veteran
7297: SKIN_ARMORED_HORSE_MORGANA                                       : Morgana Mare
7298: UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_MORGANA                         : Armored Horse Skin: Morgana Mare
7299: SKIN_ARMORED_HORSE_UNDEAD                                        : Armored Bonehorse
7300: UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_UNDEAD                          : Armored Horse Skin: Armored Bonehorse
7301: SKIN_ARMORED_HORSE_T5_MOUNT_GUILD                                : Expert's Guild Warhorse
7302: SKIN_ARMORED_HORSE_T6_MOUNT_GUILD                                : Master's Guild Warhorse
7303: SKIN_ARMORED_HORSE_T7_MOUNT_GUILD                                : Grandmaster's Guild Warhorse
7304: SKIN_ARMORED_HORSE_T8_MOUNT_GUILD                                : Elder's Guild Warhorse
7305: SKIN_ARMORED_HORSE_PONY_NATIVE_CLIENT                            : Armored Pony
7306: SKIN_ARMORED_HORSE_GREEN_TELLAFRIEND                             
7307: UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_GREEN_TELLAFRIEND               
7308: SKIN_OX_FOUNDER_LEGENDARY                                        : Legendary Explorer's Ox
7309: UNIQUE_UNLOCK_SKIN_OX_FOUNDER_LEGENDARY                          : Transport Ox Skin: Legendary Explorer
7310: SKIN_OX_CART_STARTERPACK                                         : Legendary Adventurer's Cart
7311: UNIQUE_UNLOCK_SKIN_OX_CART_STARTERPACK                           : Transport Ox Skin: Legendary Adventurer's Cart
7312: SKIN_OX_YAK_TELLAFRIEND                                          : Recruiter's Yak
7313: UNIQUE_UNLOCK_SKIN_OX_YAK_TELLAFRIEND                            : Transport Ox Skin: Recruiter's Yak
7314: SKIN_OX_TRANSPORT_RAM_TELLAFRIEND                                : Recruiter's Bighorn Ram
7315: UNIQUE_UNLOCK_SKIN_OX_TRANSPORT_RAM_TELLAFRIEND                  : Transport Ox Skin: Recruiter's Bighorn Ram
7316: SKIN_OX_BLACKMARKET                                              : Black Market Ox
7317: SKIN_OX_BISON_AH                                                 : Auction House Ox
7318: SKIN_OX_BISON_ROYAL                                              : Royal Ox
7319: SKIN_OX_CART_HERETIC                                             : Heretic Cart
7320: UNIQUE_UNLOCK_SKIN_OX_CART_HERETIC                               : Transport Ox Skin: Heretic Cart
7321: SKIN_OX_CART_LUXUS_TELLAFRIEND                                   : Luxury Cart
7322: UNIQUE_UNLOCK_SKIN_OX_CART_LUXUS_TELLAFRIEND                     : Transport Ox Skin: Luxury Cart
7323: SKIN_DIREWOLF_WHITE                                              : Ghostwolf
7324: UNIQUE_UNLOCK_SKIN_DIREWOLF_WHITE                                : Direwolf Skin: Ghostwolf
7325: SKIN_DIREWOLF_SPECTER                                            : Specter Wolf
7326: UNIQUE_UNLOCK_SKIN_DIREWOLF_SPECTER                              : Direwolf Skin: Specter Wolf
7327: SKIN_DIREWOLF_GREY_TELLAFRIEND                                   : Recruiter's Grey Wolf
7328: UNIQUE_UNLOCK_SKIN_DIREWOLF_GREY_TELLAFRIEND                     : Direwolf Skin: Recruiter's Grey Wolf
7329: SKIN_DIREWOLF_BLOODHOUND_TELLAFRIEND                             : Recruiter's Rottweiler
7330: UNIQUE_UNLOCK_SKIN_DIREWOLF_BLOODHOUND_TELLAFRIEND               : Direwolf Skin: Recruiter's Rottweiler
7331: SKIN_DIREWOLF_BERNARD_TELLAFRIEND                                : Recruiter's Saint Bernard
7332: UNIQUE_UNLOCK_SKIN_DIREWOLF_BERNARD_TELLAFRIEND                  : Direwolf Skin: Recruiter's Saint Bernard
7333: SKIN_DIREWOLF_HUSKYSLEIGH_TELLAFRIEND                            : Recruiter's Husky Sled
7334: UNIQUE_UNLOCK_SKIN_DIREWOLF_HUSKYSLEIGH_TELLAFRIEND              : Direwolf Skin: Recruiter's Husky Sled
7335: SKIN_DIREWOLF_DIREFOX_TELLAFRIEND                                : Recruiter's Dire Fox
7336: UNIQUE_UNLOCK_SKIN_DIREWOLF_DIREFOX_TELLAFRIEND                  : Direwolf Skin: Recruiter's Dire Fox
7337: SKIN_DIREWOLF_BOBTAIL                                            : Sheepdog
7338: UNIQUE_UNLOCK_SKIN_DIREWOLF_BOBTAIL                              : Direwolf Skin: Sheepdog
7339: SKIN_DIREWOLF_HYENA_TELLAFRIEND                                  : Ironjaw Hyena
7340: UNIQUE_UNLOCK_SKIN_DIREWOLF_HYENA_TELLAFRIEND                    : Direwolf Skin: Ironjaw Hyena
7341: SKIN_DIREWOLF_SHEPHERD_TELLAFRIEND                               : Shepherd
7342: UNIQUE_UNLOCK_SKIN_DIREWOLF_SHEPHERD_TELLAFRIEND                 : Direwolf Skin: Shepherd
7343: SKIN_DIREWOLF_SNOWFOX_TELLAFRIEND                                : Snow Fox
7344: UNIQUE_UNLOCK_SKIN_DIREWOLF_SNOWFOX_TELLAFRIEND                  : Direwolf Skin: Snow Fox
7345: SKIN_GIANTSTAG_WHITE                                             : Master's Giant Stag
7346: UNIQUE_UNLOCK_SKIN_GIANTSTAG_WHITE                               : Stag Skin: Master's Giant Stag
7347: SKIN_GIANTSTAG_TELLAFRIEND                                       : Recruiter's Giant Stag
7348: UNIQUE_UNLOCK_SKIN_GIANTSTAG_TELLAFRIEND                         : Stag Skin: Recruiter's Giant Stag
7349: SKIN_GIANTSTAG_XMAS                                              : Yule Stag
7350: UNIQUE_UNLOCK_SKIN_GIANTSTAG_XMAS                                : Stag Skin: Yule Stag
7351: SKIN_GIANTSTAG_IMPALA_TELLAFRIEND                                : Recruiter's Impala
7352: UNIQUE_UNLOCK_SKIN_GIANTSTAG_IMPALA_TELLAFRIEND                  : Stag Skin: Recruiter's Impala
7353: SKIN_GIANTSTAG_DIVINE                                            : Divine Stag
7354: UNIQUE_UNLOCK_SKIN_GIANTSTAG_DIVINE                              : Stag Skin: Divine Stag
7355: SKIN_GIANTSTAG_ALPACA                                            : Stag Skin: Alpaca
7356: UNIQUE_UNLOCK_SKIN_GIANTSTAG_ALPACA                              : Stag Skin: Alpaca
7357: SKIN_GIANTSTAG_REINDEER_TELLAFRIEND                              : Festive Reindeer
7358: UNIQUE_UNLOCK_SKIN_GIANTSTAG_REINDEER_TELLAFRIEND                : Stag Skin: Festive Reindeer
7359: SKIN_COUGAR_TIGER_WHITE_TELLAFRIEND                              : Recruiter's White Tiger
7360: UNIQUE_UNLOCK_SKIN_COUGAR_TIGER_WHITE_TELLAFRIEND                : Swiftclaw Skin: Recruiter's White Tiger
7361: SKIN_COUGAR_TIGER_TELLAFRIEND                                    : Recruiter's Tiger
7362: UNIQUE_UNLOCK_SKIN_COUGAR_TIGER_TELLAFRIEND                      : Swiftclaw Skin: Recruiter's Tiger
7363: SKIN_COUGAR_LYNX_TELLAFRIEND                                     : Lynx
7364: UNIQUE_UNLOCK_SKIN_COUGAR_LYNX_TELLAFRIEND                       : Swiftclaw Skin: Lynx
7365: SKIN_COUGAR_ARENA                                                : Arena Veteran's Armored Sabertooth
7366: UNIQUE_UNLOCK_SKIN_COUGAR_ARENA                                  : Swiftclaw Skin: Arena Veteran's Armored Sabertooth
7367: SKIN_COUGAR_TOURNAMENT                                           : Sabertooth Rex
7368: UNIQUE_UNLOCK_SKIN_COUGAR_TOURNAMENT                             : Swiftclaw Skin: Sabertooth Rex
7369: SKIN_COUGAR_TOURNAMENT_02                                        : Saber Tiger Rex
7370: UNIQUE_UNLOCK_SKIN_COUGAR_TOURNAMENT_02                          : Swiftclaw Skin: Saber Tiger Rex
7371: SKIN_COUGAR_OCCULT                                               : Occult Cougar
7372: UNIQUE_UNLOCK_SKIN_COUGAR_OCCULT                                 : Swiftclaw Skin: Occult Cougar
7373: SKIN_COUGAR_ARMORED_GREY                                         : Steelplate Cougar
7374: UNIQUE_UNLOCK_SKIN_COUGAR_ARMORED_GREY                           : Swiftclaw Skin: Steelplate Cougar
7375: SKIN_COUGAR_SNOWLEOPARD_TELLAFRIEND                              : Snow Leopard
7376: UNIQUE_UNLOCK_SKIN_COUGAR_SNOWLEOPARD_TELLAFRIEND                : Swiftclaw Skin: Snow Leopard
7377: SKIN_DIREBOAR_HOUSEPIG                                           : Domesticated Hog
7378: UNIQUE_UNLOCK_SKIN_DIREBOAR_HOUSEPIG                             : Direboar Skin: Domesticated Hog
7379: SKIN_DIREBOAR_PIG_TELLAFRIEND                                    : Recruiter's Pig
7380: UNIQUE_UNLOCK_SKIN_DIREBOAR_PIG_TELLAFRIEND                      : Direboar Skin: Recruiter's Pig
7381: SKIN_DIREBOAR_WHITE_TELLAFRIEND                                  : White Direboar
7382: UNIQUE_UNLOCK_SKIN_DIREBOAR_WHITE_TELLAFRIEND                    : Direboar Skin: White Direboar
7383: SKIN_DIREBEAR_PANDA_TELLAFRIEND                                  : Panda
7384: UNIQUE_UNLOCK_SKIN_DIREBEAR_PANDA_TELLAFRIEND                    : Direbear Skin: Panda
7385: SKIN_LIZARD_SAND_SALAMANDER_TELLAFRIEND                          : Recruiter's Sand Salamander
7386: UNIQUE_UNLOCK_SKIN_LIZARD_SAND_SALAMANDER_TELLAFRIEND            : Swamp Dragon Skin: Recruiter's Sand Salamander
7387: SKIN_DONKEY_HALLOWEEN                                            : Jack o' Donkey
7388: UNIQUE_UNLOCK_SKIN_DONKEY_HALLOWEEN                              : Mule Skin: Jack o' Donkey
7389: SKIN_DONKEY_UNIQUE_TELLAFRIEND                                   : Recruiter's Donkey
7390: UNIQUE_UNLOCK_SKIN_DONKEY_UNIQUE_TELLAFRIEND                     : Mule Skin: Recruiter's Donkey
7391: UNIQUE_HEAD_VANITY_NO_HELMET                                     : Hide Helmet
7392: UNIQUE_HEAD_VANITY_NO_CAPE                                       : Hide Cape
7393: UNIQUE_HEAD_VANITY_NO_MAIN_HAND                                  : Hide Main Hand
7394: UNIQUE_HEAD_VANITY_NO_OFF_HAND                                   : Hide Off-Hand
7395: UNIQUE_HEAD_VANITY_JESTER                                        : Jester Mask
7396: UNIQUE_UNLOCK_HEAD_VANITY_JESTER                                 : Wardrobe Skin: Jester Mask
7397: UNIQUE_ARMOR_VANITY_JESTER                                       : Jester Costume
7398: UNIQUE_UNLOCK_ARMOR_VANITY_JESTER                                : Wardrobe Skin: Jester Costume
7399: UNIQUE_SHOES_VANITY_JESTER                                       : Jester Shoes
7400: UNIQUE_UNLOCK_SHOES_VANITY_JESTER                                : Wardrobe Skin: Jester Shoes
7401: UNIQUE_HEAD_VANITY_DRESS_RED                                     : Red Tulip Hat
7402: UNIQUE_UNLOCK_HEAD_VANITY_DRESS_RED                              : Wardrobe Skin: Red Tulip Hat
7403: UNIQUE_ARMOR_VANITY_DRESS_RED                                    : Red Tulip Dress
7404: UNIQUE_UNLOCK_ARMOR_VANITY_DRESS_RED                             : Wardrobe Skin: Red Tulip Dress
7405: UNIQUE_SHOES_VANITY_DRESS_RED                                    : Red Tulip Shoes
7406: UNIQUE_UNLOCK_SHOES_VANITY_DRESS_RED                             : Wardrobe Skin: Red Tulip Shoes
7407: UNIQUE_HEAD_VANITY_DRESS_BLACK                                   : Noblewoman's Jewelry
7408: UNIQUE_ARMOR_VANITY_DRESS_BLACK                                  : Noblewoman's Dress
7409: UNIQUE_SHOES_VANITY_DRESS_BLACK                                  : Noblewoman's Shoes
7410: UNIQUE_HEAD_VANITY_DRESS_BLUE                                    : Blue Princess Hat
7411: UNIQUE_ARMOR_VANITY_DRESS_BLUE                                   : Blue Princess Dress
7412: UNIQUE_SHOES_VANITY_DRESS_BLUE                                   : Blue Princess Shoes
7413: UNIQUE_HEAD_VANITY_RICH_NOBLE                                    : Rich Noble's Hat
7414: UNIQUE_UNLOCK_HEAD_VANITY_RICH_NOBLE                             : Wardrobe Skin: Rich Noble's Hat
7415: UNIQUE_ARMOR_VANITY_RICH_NOBLE                                   : Rich Noble's Doublet
7416: UNIQUE_UNLOCK_ARMOR_VANITY_RICH_NOBLE                            : Wardrobe Skin: Rich Noble's Doublet
7417: UNIQUE_SHOES_VANITY_RICH_NOBLE                                   : Rich Noble's Footwear
7418: UNIQUE_UNLOCK_SHOES_VANITY_RICH_NOBLE                            : Wardrobe Skin: Rich Noble's Footwear
7419: UNIQUE_HEAD_VANITY_SANTACLAUS                                    : Yule Hat
7420: UNIQUE_UNLOCK_HEAD_VANITY_SANTACLAUS                             : Wardrobe Skin: Yule Hat
7421: UNIQUE_ARMOR_VANITY_SANTACLAUS                                   : Yule Coat
7422: UNIQUE_UNLOCK_ARMOR_VANITY_SANTACLAUS                            : Wardrobe Skin: Yule Coat
7423: UNIQUE_SHOES_VANITY_SANTACLAUS                                   : Yule Shoes
7424: UNIQUE_UNLOCK_SHOES_VANITY_SANTACLAUS                            : Wardrobe Skin: Yule Shoes
7425: UNIQUE_BACKPACK_VANITY_SANTACLAUS                                : Yule Backpack
7426: UNIQUE_UNLOCK_BACKPACK_VANITY_SANTACLAUS                         : Wardrobe Skin: Yule Backpack
7427: UNIQUE_HEAD_VANITY_WEDDING_DRESS                                 : Bridal Veil
7428: UNIQUE_UNLOCK_HEAD_VANITY_WEDDING_DRESS                          : Wardrobe Skin: Bridal Veil
7429: UNIQUE_ARMOR_VANITY_WEDDING_DRESS                                : Bridal Dress
7430: UNIQUE_UNLOCK_ARMOR_VANITY_WEDDING_DRESS                         : Wardrobe Skin: Bridal Dress
7431: UNIQUE_SHOES_VANITY_WEDDING_DRESS                                : Bridal Shoes
7432: UNIQUE_UNLOCK_SHOES_VANITY_WEDDING_DRESS                         : Wardrobe Skin: Bridal Shoes
7433: UNIQUE_OFF_VANITY_WEDDING_DRESS                                  : Bridal Bouquet
7434: UNIQUE_UNLOCK_OFF_VANITY_WEDDING_DRESS                           : Wardrobe Skin: Bridal Bouquet
7435: UNIQUE_HEAD_VANITY_WEDDING_TUXEDO                                : Groom Hat
7436: UNIQUE_UNLOCK_HEAD_VANITY_WEDDING_TUXEDO                         : Wardrobe Skin: Groom Hat
7437: UNIQUE_ARMOR_VANITY_WEDDING_TUXEDO                               : Groom Suit
7438: UNIQUE_UNLOCK_ARMOR_VANITY_WEDDING_TUXEDO                        : Wardrobe Skin: Groom Suit
7439: UNIQUE_SHOES_VANITY_WEDDING_TUXEDO                               : Groom Shoes
7440: UNIQUE_UNLOCK_SHOES_VANITY_WEDDING_TUXEDO                        : Wardrobe Skin: Groom Shoes
7441: UNIQUE_CAPE_VANITY_WEDDING_TUXEDO                                : Groom Cape
7442: UNIQUE_UNLOCK_CAPE_VANITY_WEDDING_TUXEDO                         : Wardrobe Skin: Groom Cape
7443: UNIQUE_OFF_VANITY_WEDDING_TUXEDO                                 : Wedding Ring
7444: UNIQUE_UNLOCK_OFF_VANITY_WEDDING_TUXEDO                          : Wardrobe Skin: Wedding Ring
7445: UNIQUE_HEAD_VANITY_BARD                                          : Bard's Hat
7446: UNIQUE_ARMOR_VANITY_BARD                                         : Bard's Suit
7447: UNIQUE_SHOES_VANITY_BARD                                         : Bard's Shoes
7448: UNIQUE_HEAD_VANITY_PRIEST                                        : Monk's Hood
7449: UNIQUE_ARMOR_VANITY_PRIEST                                       : Monk's Robe
7450: UNIQUE_SHOES_VANITY_PRIEST                                       : Monk's Sandals
7451: UNIQUE_OFF_VANITY_PRIEST                                         : Monk's Walking Staff
7452: UNIQUE_HEAD_VANITY_INNKEEPER                                     : Innkeeper's Hat
7453: UNIQUE_ARMOR_VANITY_INNKEEPER                                    : Innkeeper's Shirt
7454: UNIQUE_SHOES_VANITY_INNKEEPER                                    : Innkeeper's Shoes
7455: UNIQUE_OFF_VANITY_INNKEEPER                                      : Innkeeper's Beer Mug
7456: UNIQUE_HEAD_VANITY_PIRATE                                        : Navigator's Hat
7457: UNIQUE_ARMOR_VANITY_PIRATE                                       : Navigator's Coat
7458: UNIQUE_SHOES_VANITY_PIRATE                                       : Navigator's Boots
7459: UNIQUE_OFF_VANITY_PIRATE                                         : Navigator's Parrot Cage
7460: UNIQUE_OFF_VANITY_CHARITY_MARCH2020                              : Staff of Hermes
7461: UNIQUE_UNLOCK_OFF_VANITY_CHARITY_MARCH2020                       : Wardrobe Skin: Staff of Hermes
7462: UNIQUE_VANITY_2H_FW_BRIDGEWATCH_BANNER                           
7463: UNIQUE_UNLOCK_VANITY_2H_FW_BRIDGEWATCH_BANNER                    : Bridgewatch Warbanner
7464: UNIQUE_VANITY_2H_FW_THETFORD_BANNER                              
7465: UNIQUE_UNLOCK_VANITY_2H_FW_THETFORD_BANNER                       : Thetford Warbanner
7466: UNIQUE_VANITY_2H_FW_FORTSTERLING_BANNER                          
7467: UNIQUE_UNLOCK_VANITY_2H_FW_FORTSTERLING_BANNER                   : Fort Sterling Warbanner
7468: UNIQUE_VANITY_2H_FW_MARTLOCK_BANNER                              
7469: UNIQUE_UNLOCK_VANITY_2H_FW_MARTLOCK_BANNER                       : Martlock Warbanner
7470: UNIQUE_VANITY_2H_FW_LYMHURST_BANNER                              
7471: UNIQUE_UNLOCK_VANITY_2H_FW_LYMHURST_BANNER                       : Lymhurst Warbanner
7472: UNIQUE_VANITY_2H_FW_CAERLEON_BANNER                              
7473: UNIQUE_UNLOCK_VANITY_2H_FW_CAERLEON_BANNER                       : Caerleon Warbanner
7474: UNIQUE_HEAD_VANITY_ARENA_SET_01                                  : Arena Veteran's Circlet
7475: UNIQUE_UNLOCK_HEAD_VANITY_ARENA_SET_01                           : Wardrobe Skin: Arena Veteran's Circlet
7476: UNIQUE_ARMOR_VANITY_ARENA_SET_01                                 : Arena Veteran's Cloak
7477: UNIQUE_UNLOCK_ARMOR_VANITY_ARENA_SET_01                          : Wardrobe Skin: Arena Veteran's Cloak
7478: UNIQUE_SHOES_VANITY_ARENA_SET_01                                 : Arena Veteran's Boots
7479: UNIQUE_UNLOCK_SHOES_VANITY_ARENA_SET_01                          : Wardrobe Skin: Arena Veteran's Boots
7480: UNIQUE_CAPE_VANITY_ARENA_SET_01                                  : Arena Veteran's Cape
7481: UNIQUE_UNLOCK_CAPE_VANITY_ARENA_SET_01                           : Wardrobe Skin: Arena Veteran's Cape
7482: UNIQUE_HEAD_VANITY_ARENA_EYEPATCH                                : Arena Veteran's Eyepatch
7483: UNIQUE_UNLOCK_HEAD_VANITY_ARENA_EYEPATCH                         : Wardrobe Skin: Arena Veteran's Eyepatch
7484: T4_CAPE_ARENA_BANNER                                             : Arena Veteran's Small Banner
7485: UNIQUE_UNLOCK_T4_CAPE_ARENA_BANNER                               : Wardrobe Skin: Arena Veteran's Small Banner
7486: T6_CAPE_ARENA_BANNER                                             : Arena Veteran's Medium Banner
7487: UNIQUE_UNLOCK_T6_CAPE_ARENA_BANNER                               : Wardrobe Skin: Arena Veteran's Medium Banner
7488: T8_CAPE_ARENA_BANNER                                             : Arena Veteran's Large Banner
7489: UNIQUE_UNLOCK_T8_CAPE_ARENA_BANNER                               : Wardrobe Skin: Arena Veteran's Large Banner
7490: UNIQUE_HEAD_TELLAFRIEND_BATRIDER                                 : Master of Bats Helmet
7491: UNIQUE_UNLOCK_HEAD_TELLAFRIEND_BATRIDER                          : Wardrobe Skin: Master of Bats Helmet
7492: UNIQUE_HEAD_VANITY_EASTER_WHITE                                  : Snow Bunny Stalker Hat
7493: UNIQUE_UNLOCK_HEAD_VANITY_EASTER_WHITE                           : Wardrobe Skin: Snow Bunny Stalker Hat
7494: UNIQUE_HEAD_VANITY_EASTER_BROWN                                  : Bunny Stalker Hat
7495: UNIQUE_UNLOCK_HEAD_VANITY_EASTER_BROWN                           : Wardrobe Skin: Bunny Stalker Hat
7496: UNIQUE_ARMOR_VANITY_EASTER                                       : Bunny Stalker Overalls
7497: UNIQUE_UNLOCK_ARMOR_VANITY_EASTER                                : Wardrobe Skin: Bunny Stalker Overalls
7498: UNIQUE_SHOES_VANITY_EASTER                                       : Bunny Stalker Shoes
7499: UNIQUE_UNLOCK_SHOES_VANITY_EASTER                                : Wardrobe Skin: Bunny Stalker Shoes
7500: UNIQUE_BACKPACK_VANITY_EASTER                                    : Bunny Stalker Basket
7501: UNIQUE_UNLOCK_BACKPACK_VANITY_EASTER                             : Wardrobe Skin: Bunny Stalker Basket
7502: UNIQUE_HEAD_VANITY_PLAGUEDOC                                     : Hygienic Mask
7503: UNIQUE_UNLOCK_HEAD_VANITY_PLAGUEDOC                              : Wardrobe Skin: Hygienic Mask
7504: UNIQUE_ARMOR_VANITY_PLAGUEDOC                                    : Hygienic Coat
7505: UNIQUE_UNLOCK_ARMOR_VANITY_PLAGUEDOC                             : Wardrobe Skin: Hygienic Coat
7506: UNIQUE_SHOES_VANITY_PLAGUEDOC                                    : Hygienic Boots
7507: UNIQUE_UNLOCK_SHOES_VANITY_PLAGUEDOC                             : Wardrobe Skin: Hygienic Boots
7508: UNIQUE_HEAD_VANITY_SKELETON                                      : Laughing Skull
7509: UNIQUE_UNLOCK_HEAD_VANITY_SKELETON                               : Wardrobe Skin: Laughing Skull
7510: UNIQUE_ARMOR_VANITY_SKELETON                                     : Ribcage
7511: UNIQUE_UNLOCK_ARMOR_VANITY_SKELETON                              : Wardrobe Skin: Ribcage
7512: UNIQUE_SHOES_VANITY_SKELETON                                     : Legbones
7513: UNIQUE_UNLOCK_SHOES_VANITY_SKELETON                              : Wardrobe Skin: Legbones
7514: UNIQUE_CAPE_VANITY_SKELETON                                      : Ragged Cape
7515: UNIQUE_UNLOCK_CAPE_VANITY_SKELETON                               : Wardrobe Skin: Ragged Cape
7516: UNIQUE_HEAD_VANITY_PUMPKIN_01                                    : Grinning Pumpkin Head
7517: UNIQUE_UNLOCK_HEAD_VANITY_PUMPKIN_01                             : Wardrobe Skin: Grinning Pumpkin Head
7518: UNIQUE_HEAD_VANITY_PUMPKIN_02                                    : Sad Pumpkin Head
7519: UNIQUE_UNLOCK_HEAD_VANITY_PUMPKIN_02                             : Wardrobe Skin: Sad Pumpkin Head
7520: UNIQUE_HEAD_VANITY_PUMPKIN_03                                    : Angry Pumpkin Head
7521: UNIQUE_UNLOCK_HEAD_VANITY_PUMPKIN_03                             : Wardrobe Skin: Angry Pumpkin Head
7522: UNIQUE_HEAD_XMAS                                                 : Uncle Frost's Hat
7523: UNIQUE_UNLOCK_HEAD_XMAS                                          : Wardrobe Skin: Uncle Frost's Hat
7524: UNIQUE_VANITY_2H_PORTALGUN_TELLAFRIEND                           : Recruiter's Portal Cannon
7525: UNIQUE_UNLOCK_VANITY_2H_PORTALGUN_TELLAFRIEND                    : Wardrobe Skin: Recruiter's Portal Cannon
7526: UNIQUE_VANITY_2H_CHICKENGUN_EASTER                               : The Eggsecutioner
7527: UNIQUE_UNLOCK_UNIQUE_VANITY_2H_CHICKENGUN_EASTER                 : Wardrobe Skin: The Eggsecutioner
7528: UNIQUE_VANITY_MAIN_BEERMUG_TELLAFRIEND                           : Recruiter's Beer Mug
7529: UNIQUE_UNLOCK_VANITY_MAIN_BEERMUG_TELLAFRIEND                    : Wardrobe Skin: Recruiter's Beer Mug
7530: UNIQUE_VANITY_MAIN_HORN_TELLAFRIEND                              : Recruiter's Hunter Horn
7531: UNIQUE_UNLOCK_VANITY_MAIN_HORN_TELLAFRIEND                       : Wardrobe Skin: Recruiter's Hunter Horn
7532: UNIQUE_VANITY_MAIN_FOXCROP_TELLAFRIEND                           : Recruiter's Fox Crop
7533: UNIQUE_UNLOCK_VANITY_MAIN_FOXCROP_TELLAFRIEND                    : Wardrobe Skin: Recruiter's Fox Crop
7534: UNIQUE_VANITY_MAIN_TRUMPET_TELLAFRIEND                           : Recruiter's Trumpet
7535: UNIQUE_UNLOCK_VANITY_MAIN_TRUMPET_TELLAFRIEND                    : Wardrobe Skin: Recruiter's Trumpet
7536: UNIQUE_VANITY_MAIN_BEERMUG_02_TELLAFRIEND                        : Recruiter's Ale Mug
7537: UNIQUE_UNLOCK_VANITY_MAIN_BEERMUG_02_TELLAFRIEND                 : Wardrobe Skin: Recruiter's Ale Mug
7538: UNIQUE_CAPE_FOUNDER_LEGENDARY                                    : Legendary Explorer's Cloak
7539: UNIQUE_UNLOCK_CAPE_FOUNDER_LEGENDARY                             : Wardrobe Skin: Legendary Explorer's Cloak
7540: UNIQUE_HEAD_FOUNDER_LEGENDARY                                    : Legendary Explorer's Hat
7541: UNIQUE_UNLOCK_HEAD_FOUNDER_LEGENDARY                             : Wardrobe Skin: Legendary Explorer's Hat
7542: UNIQUE_ARMOR_FOUNDER_LEGENDARY                                   : Legendary Explorer's Armor
7543: UNIQUE_UNLOCK_ARMOR_FOUNDER_LEGENDARY                            : Wardrobe Skin: Legendary Explorer's Armor
7544: UNIQUE_SHOES_FOUNDER_LEGENDARY                                   : Legendary Explorer's Boots
7545: UNIQUE_UNLOCK_SHOES_FOUNDER_LEGENDARY                            : Wardrobe Skin: Legendary Explorer's Boots
7546: UNIQUE_HEAD_FOUNDER_ELITE                                        : Explorer's Hat
7547: UNIQUE_UNLOCK_HEAD_FOUNDER_ELITE                                 : Wardrobe Skin: Explorer's Hat
7548: UNIQUE_ARMOR_FOUNDER_ELITE                                       : Explorer's Armor
7549: UNIQUE_UNLOCK_ARMOR_FOUNDER_ELITE                                : Wardrobe Skin: Explorer's Armor
7550: UNIQUE_SHOES_FOUNDER_ELITE                                       : Explorer's Boots
7551: UNIQUE_UNLOCK_SHOES_FOUNDER_ELITE                                : Wardrobe Skin: Explorer's Boots
7552: UNIQUE_CAPE_STARTERPACK_LEGENDARY                                : Legendary Adventurer's Cloak
7553: UNIQUE_UNLOCK_CAPE_STARTERPACK_LEGENDARY                         : Wardrobe Skin: Legendary Adventurer's Cloak
7554: UNIQUE_HEAD_STARTERPACK_LEGENDARY                                : Legendary Adventurer's Hat
7555: UNIQUE_UNLOCK_HEAD_STARTERPACK_LEGENDARY                         : Wardrobe Skin: Legendary Adventurer's Hat
7556: UNIQUE_ARMOR_STARTERPACK_LEGENDARY                               : Legendary Adventurer's Armor
7557: UNIQUE_UNLOCK_ARMOR_STARTERPACK_LEGENDARY                        : Wardrobe Skin: Legendary Adventurer's Armor
7558: UNIQUE_SHOES_STARTERPACK_LEGENDARY                               : Legendary Adventurer's Boots
7559: UNIQUE_UNLOCK_SHOES_STARTERPACK_LEGENDARY                        : Wardrobe Skin: Legendary Adventurer's Boots
7560: UNIQUE_HEAD_STARTERPACK_ELITE                                    : Adventurer's Helmet
7561: UNIQUE_UNLOCK_HEAD_STARTERPACK_ELITE                             : Wardrobe Skin: Adventurer's Helmet
7562: UNIQUE_ARMOR_STARTERPACK_ELITE                                   : Adventurer's Jacket
7563: UNIQUE_UNLOCK_ARMOR_STARTERPACK_ELITE                            : Wardrobe Skin: Adventurer's Jacket
7564: UNIQUE_SHOES_STARTERPACK_ELITE                                   : Adventurer's Shoes
7565: UNIQUE_UNLOCK_SHOES_STARTERPACK_ELITE                            : Wardrobe Skin: Adventurer's Shoes
7566: UNIQUE_HEAD_VANITY_SKELETON_UNDEAD                               : Undead Skull
7567: UNIQUE_UNLOCK_HEAD_VANITY_SKELETON_UNDEAD                        : Wardrobe Skin: Undead Skull
7568: UNIQUE_ARMOR_VANITY_SKELETON_UNDEAD                              : Undead Ribcage
7569: UNIQUE_UNLOCK_ARMOR_VANITY_SKELETON_UNDEAD                       : Wardrobe Skin: Undead Ribcage
7570: UNIQUE_SHOES_VANITY_SKELETON_UNDEAD                              : Undead Legs
7571: UNIQUE_UNLOCK_SHOES_VANITY_SKELETON_UNDEAD                       : Wardrobe Skin: Undead Legs
7572: UNIQUE_CAPE_VANITY_SKELETON_UNDEAD                               : Ragged Undead Cape
7573: UNIQUE_UNLOCK_CAPE_VANITY_SKELETON_UNDEAD                        : Wardrobe Skin: Ragged Undead Cape
7574: UNIQUE_CAPE_TELLAFRIEND                                          : Recruiter's Cape
7575: UNIQUE_UNLOCK_CAPE_TELLAFRIEND                                   : Wardrobe Skin: Recruiter's Cape
7576: UNIQUE_CAPE_TELLAFRIEND_02                                       : Riuros Cape
7577: UNIQUE_UNLOCK_CAPE_TELLAFRIEND_02                                : Wardrobe Skin: Riuros Cape
7578: UNIQUE_CAPE_TELLAFRIEND_BATRIDER                                 : Master of Bats Cape
7579: UNIQUE_UNLOCK_CAPE_TELLAFRIEND_BATRIDER                          : Wardrobe Skin: Master of Bats Cape
7580: UNIQUE_CAPE_TELLAFRIEND_BANNER                                   : Recruiter's Banner
7581: UNIQUE_UNLOCK_CAPE_TELLAFRIEND_BANNER                            : Wardrobe Skin: Recruiter's Banner
7582: UNIQUE_CAPE_TELLAFRIEND_BANNER_02                                : Ogronios Banner
7583: UNIQUE_UNLOCK_CAPE_TELLAFRIEND_BANNER_02                         : Wardrobe Skin: Ogronios Banner
7584: UNIQUE_CAPE_TOAD_TELLAFRIEND                                     : Recruiter's Cape - Toad
7585: UNIQUE_UNLOCK_CAPE_TOAD_TELLAFRIEND                              : Wardrobe Skin: Recruiter's Cape - Toad
7586: UNIQUE_CAPE_BLOODHOUND_TELLAFRIEND                               : Recruiter's Cape - Rottweiler
7587: UNIQUE_UNLOCK_CAPE_BLOODHOUND_TELLAFRIEND                        : Wardrobe Skin: Recruiter's Cape - Rottweiler
7588: UNIQUE_CAPE_TIGER_TELLAFRIEND                                    : Recruiter's Tiger Cape
7589: UNIQUE_UNLOCK_CAPE_TIGER_TELLAFRIEND                             : Wardrobe Skin: Recruiter's Tiger Cape
7590: UNIQUE_CAPE_RAM_TELLAFRIEND                                      : Recruiter's Fur Cape
7591: UNIQUE_UNLOCK_CAPE_RAM_TELLAFRIEND                               : Wardrobe Skin: Recruiter's Fur Cape
7592: UNIQUE_CAPE_WOLF_GREY_TELLAFRIEND                                : Recruiter's Grey Wolf Cape
7593: UNIQUE_UNLOCK_CAPE_WOLF_GREY_TELLAFRIEND                         : Wardrobe Skin: Recruiter's Grey Wolf Cape
7594: T6_CAPE_PLATE_UNDEAD                                             : Decorative Undead Platemail Cape
7595: UNIQUE_UNLOCK_T6_CAPE_PLATE_UNDEAD                               : Wardrobe Skin: Decorative Undead Platemail Cape
7596: T6_CAPE_LEATHER_UNDEAD                                           : Decorative Undead Leather Cape
7597: UNIQUE_UNLOCK_T6_CAPE_LEATHER_UNDEAD                             : Wardrobe Skin: Decorative Undead Leather Cape
7598: T6_CAPE_CLOTH_UNDEAD                                             : Decorative Undead Cloth Cape
7599: UNIQUE_UNLOCK_T6_CAPE_CLOTH_UNDEAD                               : Wardrobe Skin: Decorative Undead Cloth Cape
7600: T6_CAPE_PLATE_KEEPER                                             : Decorative Keeper Platemail Cape
7601: UNIQUE_UNLOCK_T6_CAPE_PLATE_KEEPER                               : Wardrobe Skin: Decorative Keeper Platemail Cape
7602: T6_CAPE_LEATHER_KEEPER                                           : Decorative Keeper Leather Cape
7603: UNIQUE_UNLOCK_T6_CAPE_LEATHER_KEEPER                             : Wardrobe Skin: Decorative Keeper Leather Cape
7604: T6_CAPE_CLOTH_KEEPER                                             : Decorative Keeper Cloth Cape
7605: UNIQUE_UNLOCK_T6_CAPE_CLOTH_KEEPER                               : Wardrobe Skin: Decorative Keeper Cloth Cape
7606: T6_CAPE_PLATE_MORGANA                                            : Decorative Morgana Platemail Cape
7607: UNIQUE_UNLOCK_T6_CAPE_PLATE_MORGANA                              : Wardrobe Skin: Decorative Morgana Platemail Cape
7608: T6_CAPE_LEATHER_MORGANA                                          : Decorative Morgana Leather Cape
7609: UNIQUE_UNLOCK_T6_CAPE_LEATHER_MORGANA                            : Wardrobe Skin: Decorative Morgana Leather Cape
7610: T6_CAPE_CLOTH_MORGANA                                            : Decorative Morgana Cloth Cape
7611: UNIQUE_UNLOCK_T6_CAPE_CLOTH_MORGANA                              : Wardrobe Skin: Decorative Morgana Cloth Cape
7612: UNIQUE_HEAD_VANITY_ROGUE                                         : Rogue Adventurer's Hood
7613: UNIQUE_ARMOR_VANITY_ROGUE                                        : Rogue Adventurer's Armor
7614: UNIQUE_SHOES_VANITY_ROGUE                                        : Rogue Adventurer's Boots
7615: UNIQUE_CAPE_VANITY_ROGUE                                         : Rogue Adventurer's Cape
7616: UNIQUE_VANITY_MAIN_POISONBOTTLE_ROGUE                            : Rogue Adventurer's Poison Bottle
7617: SKIN_ARMORED_HORSE_ROGUE                                         : Rogue Adventurer's Armored Horse
7618: UNIQUE_ARMOR_VANITY_ROGUE_GUILD_COLORED                          : Rogue Adventurer's Guild Armor
7619: UNIQUE_CAPE_VANITY_ROGUE_GUILD_COLORED                           : Rogue Adventurer's Guild Cape
7620: SKIN_ARMORED_HORSE_ROGUE_GUILD_COLORED                           : Rogue Adventurer's Guild Armored Horse
7621: UNIQUE_HEAD_VANITY_KNIGHT                                        : Knight Adventurer's Helmet
7622: UNIQUE_ARMOR_VANITY_KNIGHT                                       : Knight Adventurer's Armor
7623: UNIQUE_SHOES_VANITY_KNIGHT                                       : Knight Adventurer's Boots
7624: UNIQUE_CAPE_VANITY_KNIGHT                                        : Knight Adventurer's Cape
7625: UNIQUE_VANITY_2H_BANNER_KNIGHT_GUILD_COLORED                     : Knight Adventurer's Warbanner
7626: SKIN_ARMORED_HORSE_KNIGHT                                        : Knight Adventurer's Armored Horse
7627: UNIQUE_HEAD_VANITY_KNIGHT_GUILD_COLORED                          : Knight Adventurer's Guild Helmet
7628: UNIQUE_ARMOR_VANITY_KNIGHT_GUILD_COLORED                         : Knight Adventurer's Guild Armor
7629: UNIQUE_CAPE_VANITY_KNIGHT_GUILD_COLORED                          : Knight Adventurer's Guild Cape
7630: SKIN_ARMORED_HORSE_KNIGHT_GUILD_COLORED                          : Knight Adventurer's Guild Armored Horse
7631: UNIQUE_HEAD_VANITY_MAGE                                          : Mage Adventurer's Hat
7632: UNIQUE_ARMOR_VANITY_MAGE                                         : Mage Adventurer's Armor
7633: UNIQUE_SHOES_VANITY_MAGE                                         : Mage Adventurer's Boots
7634: UNIQUE_CAPE_VANITY_MAGE                                          : Mage Adventurer's Cape
7635: UNIQUE_VANITY_2H_SPELLBOOK_MAGE                                  : Mage Adventurer's Spellbook
7636: SKIN_ARMORED_HORSE_MAGE                                          : Mage Adventurer's Armored Horse
7637: UNIQUE_HEAD_VANITY_MAGE_GUILD_COLORED                            : Mage Adventurer's Guild Hat
7638: UNIQUE_ARMOR_VANITY_MAGE_GUILD_COLORED                           : Mage Adventurer's Guild Armor
7639: UNIQUE_CAPE_VANITY_MAGE_GUILD_COLORED                            : Mage Adventurer's Guild Cape
7640: SKIN_ARMORED_HORSE_MAGE_GUILD_COLORED                            : Mage Adventurer's Guild Armored Horse
7641: SKIN_COUGAR_MIST                                                 : Miststalker
7642: UNIQUE_HEAD_VANITY_BARBARIAN                                     : Barbarian's Helmet
7643: UNIQUE_ARMOR_VANITY_BARBARIAN                                    : Barbarian's Harness
7644: UNIQUE_SHOES_VANITY_BARBARIAN                                    : Barbarian's Boots
7645: UNIQUE_CAPE_VANITY_BARBARIAN                                     : Barbarian's Cape
7646: SKIN_DIREWOLF_BARBARIAN                                          : War Beast
7647: UNIQUE_HEAD_VANITY_SOULKEEPER                                    : Keeper of Souls Cowl
7648: UNIQUE_ARMOR_VANITY_SOULKEEPER                                   : Keeper of Souls Armor
7649: UNIQUE_SHOES_VANITY_SOULKEEPER                                   : Keeper of Souls Boots
7650: UNIQUE_CAPE_VANITY_SOULKEEPER                                    : Keeper of Souls Cape
7651: UNIQUE_VANITY_2H_PHYLACTERY_SOULKEEPER                           : Phylactery of Souls
7652: SKIN_STAG_SOULKEEPER                                             : Keeper of Souls Stag
7653: SKIN_HORSE_HELL                                                  : Hell Mare
7654: SKIN_COUGAR_DARK                                                 : Darkfang
7655: UNIQUE_HEAD_VANITY_PALADIN                                       : Paladin's Helmet
7656: UNIQUE_ARMOR_VANITY_PALADIN                                      : Paladin's Armor
7657: UNIQUE_SHOES_VANITY_PALADIN                                      : Paladin's Boots
7658: UNIQUE_CAPE_VANITY_PALADIN                                       : Paladin's Cape
7659: SKIN_ARMORED_HORSE_PALADIN                                       : Paladin's Warhorse
7660: UNIQUE_ARMOR_VANITY_PALADIN_GUILD_COLORED                        : Paladin's Guild Armor
7661: UNIQUE_CAPE_VANITY_PALADIN_GUILD_COLORED                         : Paladin's Guild Cape
7662: SKIN_ARMORED_HORSE_PALADIN_GUILD_COLORED                         : Paladin's Guild Warhorse
7663: SKIN_OX_MIST                                                     : Mistbison
7664: UNIQUE_HEAD_VANITY_DEMONHUNTER                                   : Demon Hunter's Hat
7665: UNIQUE_ARMOR_VANITY_DEMONHUNTER                                  : Demon Hunter's Coat
7666: UNIQUE_SHOES_VANITY_DEMONHUNTER                                  : Demon Hunter's Boots
7667: UNIQUE_CAPE_VANITY_DEMONHUNTER                                   : Demon Hunter's Cape
7668: SKIN_HORSE_DEMONHUNTER                                           : Demon Hunter's Horse
7669: SKIN_DIREWOLF_MIST                                               : Mistwolf
7670: UNIQUE_HEAD_VANITY_DRUID                                         : Druid's Horns
7671: UNIQUE_ARMOR_VANITY_DRUID                                        : Druid's Vestments
7672: UNIQUE_SHOES_VANITY_DRUID                                        : Druid's Shoes
7673: UNIQUE_CAPE_VANITY_DRUID                                         : Druid's Cape
7674: SKIN_STAG_DRUID                                                  : Druid's Stag
7675: SKIN_COUGAR_SHADOWCAT                                            : Shadowcat
7676: UNIQUE_HEAD_VANITY_DEMONICWARRIOR                                : Demonic Warrior's Helmet
7677: UNIQUE_ARMOR_VANITY_DEMONICWARRIOR                               : Demonic Warrior's Armor
7678: UNIQUE_SHOES_VANITY_DEMONICWARRIOR                               : Demonic Warrior's Boots
7679: UNIQUE_CAPE_VANITY_DEMONICWARRIOR                                : Demonic Warrior's Cape
7680: SKIN_DIREWOLF_DEMONICWARRIOR                                     : Saddled Hellhound
7681: T7_MAIN_SUMMONERSTAFF_PROTOTYPE                                  
7682: T7_MAIN_SUMMONERSTAFF_PROTOTYPE@1                                
7683: T7_MAIN_SUMMONERSTAFF_PROTOTYPE@2                                
7684: T7_MAIN_SUMMONERSTAFF_PROTOTYPE@3                                
7685: UNIQUE_TEST_DUNGEONMAP_PROTOTYPE                                 
7686: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_01_TEMPLATE                      
7687: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_02_TEMPLATE                      
7688: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_03_S11_TEMPLATE                  
7689: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_03_TEMPLATE                      
7690: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_04_TEMPLATE                      
7691: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_05_TEMPLATE                      
7692: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_06_TEMPLATE                      
7693: T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_07_TEMPLATE                      
7694: T4_TOKEN_CRYSTALLEAGUE_LVL_01_TEMPLATE                           
7695: T4_TOKEN_CRYSTALLEAGUE_LVL_02_TEMPLATE                           
7696: T4_TOKEN_CRYSTALLEAGUE_LVL_03_TEMPLATE                           
7697: T4_TOKEN_CRYSTALLEAGUE_LVL_04_TEMPLATE                           
7698: T4_TOKEN_CRYSTALLEAGUE_LVL_05_TEMPLATE                           
7699: T4_TOKEN_CRYSTALLEAGUE_LVL_06_TEMPLATE                           
7700: T4_TOKEN_CRYSTALLEAGUE_LVL_07_TEMPLATE                           
7701: T4_TOKEN_CRYSTALLEAGUE_LVL_08_TEMPLATE                           
7702: T4_TOKEN_CRYSTALLEAGUE_LVL_09_TEMPLATE                           
7703: T4_DEBUG_HEAD_HIDDEN                                             
7704: T4_DEBUG_ARMOR_HIDDEN                                            
7705: T4_DEBUG_CAPE_HIDDEN                                             
7706: T4_DEBUG_SHOES_HIDDEN                                            
7707: T4_DEBUG_MAINHAND_HIDDEN                                         
7708: T4_DEBUG_OFFHAND_HIDDEN                                          
7709: T2_JOURNAL_WOOD_EMPTY                                            : Novice Lumberjack's Journal (Empty)
7710: T2_JOURNAL_WOOD_FULL                                             : Novice Lumberjack's Journal (Full)
7711: T3_JOURNAL_WOOD_EMPTY                                            : Journeyman Lumberjack's Journal (Empty)
7712: T3_JOURNAL_WOOD_FULL                                             : Journeyman Lumberjack's Journal (Full)
7713: T4_JOURNAL_WOOD_EMPTY                                            : Adept Lumberjack's Journal (Empty)
7714: T4_JOURNAL_WOOD_FULL                                             : Adept Lumberjack's Journal (Full)
7715: T5_JOURNAL_WOOD_EMPTY                                            : Expert Lumberjack's Journal (Empty)
7716: T5_JOURNAL_WOOD_FULL                                             : Expert Lumberjack's Journal (Full)
7717: T6_JOURNAL_WOOD_EMPTY                                            : Master Lumberjack's Journal (Empty)
7718: T6_JOURNAL_WOOD_FULL                                             : Master Lumberjack's Journal (Full)
7719: T7_JOURNAL_WOOD_EMPTY                                            : Grandmaster Lumberjack's Journal (Empty)
7720: T7_JOURNAL_WOOD_FULL                                             : Grandmaster Lumberjack's Journal (Full)
7721: T8_JOURNAL_WOOD_EMPTY                                            : Elder Lumberjack's Journal (Empty)
7722: T8_JOURNAL_WOOD_FULL                                             : Elder Lumberjack's Journal (Full)
7723: T2_JOURNAL_STONE_EMPTY                                           : Novice Stonecutter's Journal (Empty)
7724: T2_JOURNAL_STONE_FULL                                            : Novice Stonecutter's Journal (Full)
7725: T3_JOURNAL_STONE_EMPTY                                           : Journeyman Stonecutter's Journal (Empty)
7726: T3_JOURNAL_STONE_FULL                                            : Journeyman Stonecutter's Journal (Full)
7727: T4_JOURNAL_STONE_EMPTY                                           : Adept Stonecutter's Journal (Empty)
7728: T4_JOURNAL_STONE_FULL                                            : Adept Stonecutter's Journal (Full)
7729: T5_JOURNAL_STONE_EMPTY                                           : Expert Stonecutter's Journal (Empty)
7730: T5_JOURNAL_STONE_FULL                                            : Expert Stonecutter's Journal (Full)
7731: T6_JOURNAL_STONE_EMPTY                                           : Master Stonecutter's Journal (Empty)
7732: T6_JOURNAL_STONE_FULL                                            : Master Stonecutter's Journal (Full)
7733: T7_JOURNAL_STONE_EMPTY                                           : Grandmaster Stonecutter's Journal (Empty)
7734: T7_JOURNAL_STONE_FULL                                            : Grandmaster Stonecutter's Journal (Full)
7735: T8_JOURNAL_STONE_EMPTY                                           : Elder Stonecutter's Journal (Empty)
7736: T8_JOURNAL_STONE_FULL                                            : Elder Stonecutter's Journal (Full)
7737: T2_JOURNAL_ORE_EMPTY                                             : Novice Prospector's Journal (Empty)
7738: T2_JOURNAL_ORE_FULL                                              : Novice Prospector's Journal (Full)
7739: T3_JOURNAL_ORE_EMPTY                                             : Journeyman Prospector's Journal (Empty)
7740: T3_JOURNAL_ORE_FULL                                              : Journeyman Prospector's Journal (Full)
7741: T4_JOURNAL_ORE_EMPTY                                             : Adept Prospector's Journal (Empty)
7742: T4_JOURNAL_ORE_FULL                                              : Adept Prospector's Journal (Full)
7743: T5_JOURNAL_ORE_EMPTY                                             : Expert Prospector's Journal (Empty)
7744: T5_JOURNAL_ORE_FULL                                              : Expert Prospector's Journal (Full)
7745: T6_JOURNAL_ORE_EMPTY                                             : Master Prospector's Journal (Empty)
7746: T6_JOURNAL_ORE_FULL                                              : Master Prospector's Journal (Full)
7747: T7_JOURNAL_ORE_EMPTY                                             : Grandmaster Prospector's Journal (Empty)
7748: T7_JOURNAL_ORE_FULL                                              : Grandmaster Prospector's Journal (Full)
7749: T8_JOURNAL_ORE_EMPTY                                             : Elder Prospector's Journal (Empty)
7750: T8_JOURNAL_ORE_FULL                                              : Elder Prospector's Journal (Full)
7751: T2_JOURNAL_FIBER_EMPTY                                           : Novice Cropper's Journal (Empty)
7752: T2_JOURNAL_FIBER_FULL                                            : Novice Cropper's Journal (Full)
7753: T3_JOURNAL_FIBER_EMPTY                                           : Journeyman Cropper's Journal (Empty)
7754: T3_JOURNAL_FIBER_FULL                                            : Journeyman Cropper's Journal (Full)
7755: T4_JOURNAL_FIBER_EMPTY                                           : Adept Cropper's Journal (Empty)
7756: T4_JOURNAL_FIBER_FULL                                            : Adept Cropper's Journal (Full)
7757: T5_JOURNAL_FIBER_EMPTY                                           : Expert Cropper's Journal (Empty)
7758: T5_JOURNAL_FIBER_FULL                                            : Expert Cropper's Journal (Full)
7759: T6_JOURNAL_FIBER_EMPTY                                           : Master Cropper's Journal (Empty)
7760: T6_JOURNAL_FIBER_FULL                                            : Master Cropper's Journal (Full)
7761: T7_JOURNAL_FIBER_EMPTY                                           : Grandmaster Cropper's Journal (Empty)
7762: T7_JOURNAL_FIBER_FULL                                            : Grandmaster Cropper's Journal (Full)
7763: T8_JOURNAL_FIBER_EMPTY                                           : Elder Cropper's Journal (Empty)
7764: T8_JOURNAL_FIBER_FULL                                            : Elder Cropper's Journal (Full)
7765: T2_JOURNAL_HIDE_EMPTY                                            : Novice Gamekeeper's Journal (Empty)
7766: T2_JOURNAL_HIDE_FULL                                             : Novice Gamekeeper's Journal (Full)
7767: T3_JOURNAL_HIDE_EMPTY                                            : Journeyman Gamekeeper's Journal (Empty)
7768: T3_JOURNAL_HIDE_FULL                                             : Journeyman Gamekeeper's Journal (Full)
7769: T4_JOURNAL_HIDE_EMPTY                                            : Adept Gamekeeper's Journal (Empty)
7770: T4_JOURNAL_HIDE_FULL                                             : Adept Gamekeeper's Journal (Full)
7771: T5_JOURNAL_HIDE_EMPTY                                            : Expert Gamekeeper's Journal (Empty)
7772: T5_JOURNAL_HIDE_FULL                                             : Expert Gamekeeper's Journal (Full)
7773: T6_JOURNAL_HIDE_EMPTY                                            : Master Gamekeeper's Journal (Empty)
7774: T6_JOURNAL_HIDE_FULL                                             : Master Gamekeeper's Journal (Full)
7775: T7_JOURNAL_HIDE_EMPTY                                            : Grandmaster Gamekeeper's Journal (Empty)
7776: T7_JOURNAL_HIDE_FULL                                             : Grandmaster Gamekeeper's Journal (Full)
7777: T8_JOURNAL_HIDE_EMPTY                                            : Elder Gamekeeper's Journal (Empty)
7778: T8_JOURNAL_HIDE_FULL                                             : Elder Gamekeeper's Journal (Full)
7779: T2_JOURNAL_WARRIOR_EMPTY                                         : Novice Blacksmith's Journal (Empty)
7780: T2_JOURNAL_WARRIOR_FULL                                          : Novice Blacksmith's Journal (Full)
7781: T3_JOURNAL_WARRIOR_EMPTY                                         : Journeyman Blacksmith's Journal (Empty)
7782: T3_JOURNAL_WARRIOR_FULL                                          : Journeyman Blacksmith's Journal (Full)
7783: T4_JOURNAL_WARRIOR_EMPTY                                         : Adept Blacksmith's Journal (Empty)
7784: T4_JOURNAL_WARRIOR_FULL                                          : Adept Blacksmith's Journal (Full)
7785: T5_JOURNAL_WARRIOR_EMPTY                                         : Expert Blacksmith's Journal (Empty)
7786: T5_JOURNAL_WARRIOR_FULL                                          : Expert Blacksmith's Journal (Full)
7787: T6_JOURNAL_WARRIOR_EMPTY                                         : Master Blacksmith's Journal (Empty)
7788: T6_JOURNAL_WARRIOR_FULL                                          : Master Blacksmith's Journal (Full)
7789: T7_JOURNAL_WARRIOR_EMPTY                                         : Grandmaster Blacksmith's Journal (Empty)
7790: T7_JOURNAL_WARRIOR_FULL                                          : Grandmaster Blacksmith's Journal (Full)
7791: T8_JOURNAL_WARRIOR_EMPTY                                         : Elder Blacksmith's Journal (Empty)
7792: T8_JOURNAL_WARRIOR_FULL                                          : Elder Blacksmith's Journal (Full)
7793: T2_JOURNAL_HUNTER_EMPTY                                          : Novice Fletcher's Journal (Empty)
7794: T2_JOURNAL_HUNTER_FULL                                           : Novice Fletcher's Journal (Full)
7795: T3_JOURNAL_HUNTER_EMPTY                                          : Journeyman Fletcher's Journal (Empty)
7796: T3_JOURNAL_HUNTER_FULL                                           : Journeyman Fletcher's Journal (Full)
7797: T4_JOURNAL_HUNTER_EMPTY                                          : Adept Fletcher's Journal (Empty)
7798: T4_JOURNAL_HUNTER_FULL                                           : Adept Fletcher's Journal (Full)
7799: T5_JOURNAL_HUNTER_EMPTY                                          : Expert Fletcher's Journal (Empty)
7800: T5_JOURNAL_HUNTER_FULL                                           : Expert Fletcher's Journal (Full)
7801: T6_JOURNAL_HUNTER_EMPTY                                          : Master Fletcher's Journal (Empty)
7802: T6_JOURNAL_HUNTER_FULL                                           : Master Fletcher's Journal (Full)
7803: T7_JOURNAL_HUNTER_EMPTY                                          : Grandmaster Fletcher's Journal (Empty)
7804: T7_JOURNAL_HUNTER_FULL                                           : Grandmaster Fletcher's Journal (Full)
7805: T8_JOURNAL_HUNTER_EMPTY                                          : Elder Fletcher's Journal (Empty)
7806: T8_JOURNAL_HUNTER_FULL                                           : Elder Fletcher's Journal (Full)
7807: T2_JOURNAL_MAGE_EMPTY                                            : Novice Imbuer's Journal (Empty)
7808: T2_JOURNAL_MAGE_FULL                                             : Novice Imbuer's Journal (Full)
7809: T3_JOURNAL_MAGE_EMPTY                                            : Journeyman Imbuer's Journal (Empty)
7810: T3_JOURNAL_MAGE_FULL                                             : Journeyman Imbuer's Journal (Full)
7811: T4_JOURNAL_MAGE_EMPTY                                            : Adept Imbuer's Journal (Empty)
7812: T4_JOURNAL_MAGE_FULL                                             : Adept Imbuer's Journal (Full)
7813: T5_JOURNAL_MAGE_EMPTY                                            : Expert Imbuer's Journal (Empty)
7814: T5_JOURNAL_MAGE_FULL                                             : Expert Imbuer's Journal (Full)
7815: T6_JOURNAL_MAGE_EMPTY                                            : Master Imbuer's Journal (Empty)
7816: T6_JOURNAL_MAGE_FULL                                             : Master Imbuer's Journal (Full)
7817: T7_JOURNAL_MAGE_EMPTY                                            : Grandmaster Imbuer's Journal (Empty)
7818: T7_JOURNAL_MAGE_FULL                                             : Grandmaster Imbuer's Journal (Full)
7819: T8_JOURNAL_MAGE_EMPTY                                            : Elder Imbuer's Journal (Empty)
7820: T8_JOURNAL_MAGE_FULL                                             : Elder Imbuer's Journal (Full)
7821: T2_JOURNAL_TOOLMAKER_EMPTY                                       : Novice Tinker's Journal (Empty)
7822: T2_JOURNAL_TOOLMAKER_FULL                                        : Novice Tinker's Journal (Full)
7823: T3_JOURNAL_TOOLMAKER_EMPTY                                       : Journeyman Tinker's Journal (Empty)
7824: T3_JOURNAL_TOOLMAKER_FULL                                        : Journeyman Tinker's Journal (Full)
7825: T4_JOURNAL_TOOLMAKER_EMPTY                                       : Adept Tinker's Journal (Empty)
7826: T4_JOURNAL_TOOLMAKER_FULL                                        : Adept Tinker's Journal (Full)
7827: T5_JOURNAL_TOOLMAKER_EMPTY                                       : Expert Tinker's Journal (Empty)
7828: T5_JOURNAL_TOOLMAKER_FULL                                        : Expert Tinker's Journal (Full)
7829: T6_JOURNAL_TOOLMAKER_EMPTY                                       : Master Tinker's Journal (Empty)
7830: T6_JOURNAL_TOOLMAKER_FULL                                        : Master Tinker's Journal (Full)
7831: T7_JOURNAL_TOOLMAKER_EMPTY                                       : Grandmaster Tinker's Journal (Empty)
7832: T7_JOURNAL_TOOLMAKER_FULL                                        : Grandmaster Tinker's Journal (Full)
7833: T8_JOURNAL_TOOLMAKER_EMPTY                                       : Elder Tinker's Journal (Empty)
7834: T8_JOURNAL_TOOLMAKER_FULL                                        : Elder Tinker's Journal (Full)
7835: T2_JOURNAL_MERCENARY_EMPTY                                       : Novice Mercenary's Journal (Empty)
7836: T2_JOURNAL_MERCENARY_FULL                                        : Novice Mercenary's Journal (Full)
7837: T3_JOURNAL_MERCENARY_EMPTY                                       : Journeyman Mercenary's Journal (Empty)
7838: T3_JOURNAL_MERCENARY_FULL                                        : Journeyman Mercenary's Journal (Full)
7839: T4_JOURNAL_MERCENARY_EMPTY                                       : Adept Mercenary's Journal (Empty)
7840: T4_JOURNAL_MERCENARY_FULL                                        : Adept Mercenary's Journal (Full)
7841: T5_JOURNAL_MERCENARY_EMPTY                                       : Expert Mercenary's Journal (Empty)
7842: T5_JOURNAL_MERCENARY_FULL                                        : Expert Mercenary's Journal (Full)
7843: T6_JOURNAL_MERCENARY_EMPTY                                       : Master Mercenary's Journal (Empty)
7844: T6_JOURNAL_MERCENARY_FULL                                        : Master Mercenary's Journal (Full)
7845: T7_JOURNAL_MERCENARY_EMPTY                                       : Grandmaster Mercenary's Journal (Empty)
7846: T7_JOURNAL_MERCENARY_FULL                                        : Grandmaster Mercenary's Journal (Full)
7847: T8_JOURNAL_MERCENARY_EMPTY                                       : Elder Mercenary's Journal (Empty)
7848: T8_JOURNAL_MERCENARY_FULL                                        : Elder Mercenary's Journal (Full)
7849: T2_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Novice's Generalist Trophy Journal (Empty)
7850: T2_JOURNAL_TROPHY_GENERAL_FULL                                   : Novice's Generalist Trophy Journal (Full)
7851: T3_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Journeyman's Generalist Trophy Journal (Empty)
7852: T3_JOURNAL_TROPHY_GENERAL_FULL                                   : Journeyman's Generalist Trophy Journal (Full)
7853: T4_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Adept's Generalist Trophy Journal (Empty)
7854: T4_JOURNAL_TROPHY_GENERAL_FULL                                   : Adept's Generalist Trophy Journal (Full)
7855: T5_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Expert's Generalist Trophy Journal (Empty)
7856: T5_JOURNAL_TROPHY_GENERAL_FULL                                   : Expert's Generalist Trophy Journal (Full)
7857: T6_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Master's Generalist Trophy Journal (Empty)
7858: T6_JOURNAL_TROPHY_GENERAL_FULL                                   : Master's Generalist Trophy Journal (Full)
7859: T7_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Grandmaster's Generalist Trophy Journal (Empty)
7860: T7_JOURNAL_TROPHY_GENERAL_FULL                                   : Grandmaster's Generalist Trophy Journal (Full)
7861: T8_JOURNAL_TROPHY_GENERAL_EMPTY                                  : Elder's Generalist Trophy Journal (Empty)
7862: T8_JOURNAL_TROPHY_GENERAL_FULL                                   : Elder's Generalist Trophy Journal (Full)
7863: T2_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Novice Mercenary's Trophy Journal (Empty)
7864: T2_JOURNAL_TROPHY_MERCENARY_FULL                                 : Novice Mercenary's Trophy Journal (Full)
7865: T3_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Journeyman Mercenary's Trophy Journal (Empty)
7866: T3_JOURNAL_TROPHY_MERCENARY_FULL                                 : Journeyman Mercenary's Trophy Journal (Full)
7867: T4_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Adept Mercenary's Trophy Journal (Empty)
7868: T4_JOURNAL_TROPHY_MERCENARY_FULL                                 : Adept Mercenary's Trophy Journal (Full)
7869: T5_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Expert Mercenary's Trophy Journal (Empty)
7870: T5_JOURNAL_TROPHY_MERCENARY_FULL                                 : Expert Mercenary's Trophy Journal (Full)
7871: T6_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Master Mercenary's Trophy Journal (Empty)
7872: T6_JOURNAL_TROPHY_MERCENARY_FULL                                 : Master Mercenary's Trophy Journal (Full)
7873: T7_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Grandmaster Mercenary's Trophy Journal (Empty)
7874: T7_JOURNAL_TROPHY_MERCENARY_FULL                                 : Grandmaster Mercenary's Trophy Journal (Full)
7875: T8_JOURNAL_TROPHY_MERCENARY_EMPTY                                : Elder Mercenary's Trophy Journal (Empty)
7876: T8_JOURNAL_TROPHY_MERCENARY_FULL                                 : Elder Mercenary's Trophy Journal (Full)
7877: T2_JOURNAL_TROPHY_HIDE_EMPTY                                     : Novice Gamekeeper's Trophy Journal (Empty)
7878: T2_JOURNAL_TROPHY_HIDE_FULL                                      : Novice Gamekeeper's Trophy Journal (Full)
7879: T3_JOURNAL_TROPHY_HIDE_EMPTY                                     : Journeyman Gamekeeper's Trophy Journal (Empty)
7880: T3_JOURNAL_TROPHY_HIDE_FULL                                      : Journeyman Gamekeeper's Trophy Journal (Full)
7881: T4_JOURNAL_TROPHY_HIDE_EMPTY                                     : Adept Gamekeeper's Trophy Journal (Empty)
7882: T4_JOURNAL_TROPHY_HIDE_FULL                                      : Adept Gamekeeper's Trophy Journal (Full)
7883: T5_JOURNAL_TROPHY_HIDE_EMPTY                                     : Expert Gamekeeper's Trophy Journal (Empty)
7884: T5_JOURNAL_TROPHY_HIDE_FULL                                      : Expert Gamekeeper's Trophy Journal (Full)
7885: T6_JOURNAL_TROPHY_HIDE_EMPTY                                     : Master Gamekeeper's Trophy Journal (Empty)
7886: T6_JOURNAL_TROPHY_HIDE_FULL                                      : Master Gamekeeper's Trophy Journal (Full)
7887: T7_JOURNAL_TROPHY_HIDE_EMPTY                                     : Grandmaster Gamekeeper's Trophy Journal (Empty)
7888: T7_JOURNAL_TROPHY_HIDE_FULL                                      : Grandmaster Gamekeeper's Trophy Journal (Full)
7889: T8_JOURNAL_TROPHY_HIDE_EMPTY                                     : Elder Gamekeeper's Trophy Journal (Empty)
7890: T8_JOURNAL_TROPHY_HIDE_FULL                                      : Elder Gamekeeper's Trophy Journal (Full)
7891: T2_JOURNAL_TROPHY_WOOD_EMPTY                                     : Novice Lumberjack's Trophy Journal (Empty)
7892: T2_JOURNAL_TROPHY_WOOD_FULL                                      : Novice Lumberjack's Trophy Journal (Full)
7893: T3_JOURNAL_TROPHY_WOOD_EMPTY                                     : Journeyman Lumberjack's Trophy Journal (Empty)
7894: T3_JOURNAL_TROPHY_WOOD_FULL                                      : Journeyman Lumberjack's Trophy Journal (Full)
7895: T4_JOURNAL_TROPHY_WOOD_EMPTY                                     : Adept Lumberjack's Trophy Journal (Empty)
7896: T4_JOURNAL_TROPHY_WOOD_FULL                                      : Adept Lumberjack's Trophy Journal (Full)
7897: T5_JOURNAL_TROPHY_WOOD_EMPTY                                     : Expert Lumberjack's Trophy Journal (Empty)
7898: T5_JOURNAL_TROPHY_WOOD_FULL                                      : Expert Lumberjack's Trophy Journal (Full)
7899: T6_JOURNAL_TROPHY_WOOD_EMPTY                                     : Master Lumberjack's Trophy Journal (Empty)
7900: T6_JOURNAL_TROPHY_WOOD_FULL                                      : Master Lumberjack's Trophy Journal (Full)
7901: T7_JOURNAL_TROPHY_WOOD_EMPTY                                     : Grandmaster Lumberjack's Trophy Journal (Empty)
7902: T7_JOURNAL_TROPHY_WOOD_FULL                                      : Grandmaster Lumberjack's Trophy Journal (Full)
7903: T8_JOURNAL_TROPHY_WOOD_EMPTY                                     : Elder Lumberjack's Trophy Journal (Empty)
7904: T8_JOURNAL_TROPHY_WOOD_FULL                                      : Elder Lumberjack's Trophy Journal (Full)
7905: T2_JOURNAL_TROPHY_STONE_EMPTY                                    : Novice Stonecutter's Trophy Journal (Empty)
7906: T2_JOURNAL_TROPHY_STONE_FULL                                     : Novice Stonecutter's Trophy Journal (Full)
7907: T3_JOURNAL_TROPHY_STONE_EMPTY                                    : Journeyman Stonecutter's Trophy Journal (Empty)
7908: T3_JOURNAL_TROPHY_STONE_FULL                                     : Journeyman Stonecutter's Trophy Journal (Full)
7909: T4_JOURNAL_TROPHY_STONE_EMPTY                                    : Adept Stonecutter's Trophy Journal (Empty)
7910: T4_JOURNAL_TROPHY_STONE_FULL                                     : Adept Stonecutter's Trophy Journal (Full)
7911: T5_JOURNAL_TROPHY_STONE_EMPTY                                    : Expert Stonecutter's Trophy Journal (Empty)
7912: T5_JOURNAL_TROPHY_STONE_FULL                                     : Expert Stonecutter's Trophy Journal (Full)
7913: T6_JOURNAL_TROPHY_STONE_EMPTY                                    : Master Stonecutter's Trophy Journal (Empty)
7914: T6_JOURNAL_TROPHY_STONE_FULL                                     : Master Stonecutter's Trophy Journal (Full)
7915: T7_JOURNAL_TROPHY_STONE_EMPTY                                    : Grandmaster Stonecutter's Trophy Journal (Empty)
7916: T7_JOURNAL_TROPHY_STONE_FULL                                     : Grandmaster Stonecutter's Trophy Journal (Full)
7917: T8_JOURNAL_TROPHY_STONE_EMPTY                                    : Elder Stonecutter's Trophy Journal (Empty)
7918: T8_JOURNAL_TROPHY_STONE_FULL                                     : Elder Stonecutter's Trophy Journal (Full)
7919: T2_JOURNAL_TROPHY_ORE_EMPTY                                      : Novice Prospector's Trophy Journal (Empty)
7920: T2_JOURNAL_TROPHY_ORE_FULL                                       : Novice Prospector's Trophy Journal (Full)
7921: T3_JOURNAL_TROPHY_ORE_EMPTY                                      : Journeyman Prospector's Trophy Journal (Empty)
7922: T3_JOURNAL_TROPHY_ORE_FULL                                       : Journeyman Prospector's Trophy Journal (Full)
7923: T4_JOURNAL_TROPHY_ORE_EMPTY                                      : Adept Prospector's Trophy Journal (Empty)
7924: T4_JOURNAL_TROPHY_ORE_FULL                                       : Adept Prospector's Trophy Journal (Full)
7925: T5_JOURNAL_TROPHY_ORE_EMPTY                                      : Expert Prospector's Trophy Journal (Empty)
7926: T5_JOURNAL_TROPHY_ORE_FULL                                       : Expert Prospector's Trophy Journal (Full)
7927: T6_JOURNAL_TROPHY_ORE_EMPTY                                      : Master Prospector's Trophy Journal (Empty)
7928: T6_JOURNAL_TROPHY_ORE_FULL                                       : Master Prospector's Trophy Journal (Full)
7929: T7_JOURNAL_TROPHY_ORE_EMPTY                                      : Grandmaster Prospector's Trophy Journal (Empty)
7930: T7_JOURNAL_TROPHY_ORE_FULL                                       : Grandmaster Prospector's Trophy Journal (Full)
7931: T8_JOURNAL_TROPHY_ORE_EMPTY                                      : Elder Prospector's Trophy Journal (Empty)
7932: T8_JOURNAL_TROPHY_ORE_FULL                                       : Elder Prospector's Trophy Journal (Full)
7933: T2_JOURNAL_TROPHY_FIBER_EMPTY                                    : Novice Cropper's Trophy Journal (Empty)
7934: T2_JOURNAL_TROPHY_FIBER_FULL                                     : Novice Cropper's Trophy Journal (Full)
7935: T3_JOURNAL_TROPHY_FIBER_EMPTY                                    : Journeyman Cropper's Trophy Journal (Empty)
7936: T3_JOURNAL_TROPHY_FIBER_FULL                                     : Journeyman Cropper's Trophy Journal (Full)
7937: T4_JOURNAL_TROPHY_FIBER_EMPTY                                    : Adept Cropper's Trophy Journal (Empty)
7938: T4_JOURNAL_TROPHY_FIBER_FULL                                     : Adept Cropper's Trophy Journal (Full)
7939: T5_JOURNAL_TROPHY_FIBER_EMPTY                                    : Expert Cropper's Trophy Journal (Empty)
7940: T5_JOURNAL_TROPHY_FIBER_FULL                                     : Expert Cropper's Trophy Journal (Full)
7941: T6_JOURNAL_TROPHY_FIBER_EMPTY                                    : Master Cropper's Trophy Journal (Empty)
7942: T6_JOURNAL_TROPHY_FIBER_FULL                                     : Master Cropper's Trophy Journal (Full)
7943: T7_JOURNAL_TROPHY_FIBER_EMPTY                                    : Grandmaster Cropper's Trophy Journal (Empty)
7944: T7_JOURNAL_TROPHY_FIBER_FULL                                     : Grandmaster Cropper's Trophy Journal (Full)
7945: T8_JOURNAL_TROPHY_FIBER_EMPTY                                    : Elder Cropper's Trophy Journal (Empty)
7946: T8_JOURNAL_TROPHY_FIBER_FULL                                     : Elder Cropper's Trophy Journal (Full)
7947: T2_JOURNAL_TROPHY_FISHING_EMPTY                                  : Novice Fisherman's Trophy Journal (Empty)
7948: T2_JOURNAL_TROPHY_FISHING_FULL                                   : Novice Fisherman's Trophy Journal (Full)
7949: T3_JOURNAL_TROPHY_FISHING_EMPTY                                  : Journeyman Fisherman's Trophy Journal (Empty)
7950: T3_JOURNAL_TROPHY_FISHING_FULL                                   : Journeyman Fisherman's Trophy Journal (Full)
7951: T4_JOURNAL_TROPHY_FISHING_EMPTY                                  : Adept Fisherman's Trophy Journal (Empty)
7952: T4_JOURNAL_TROPHY_FISHING_FULL                                   : Adept Fisherman's Trophy Journal (Full)
7953: T5_JOURNAL_TROPHY_FISHING_EMPTY                                  : Expert Fisherman's Trophy Journal (Empty)
7954: T5_JOURNAL_TROPHY_FISHING_FULL                                   : Expert Fisherman's Trophy Journal (Full)
7955: T6_JOURNAL_TROPHY_FISHING_EMPTY                                  : Master Fisherman's Trophy Journal (Empty)
7956: T6_JOURNAL_TROPHY_FISHING_FULL                                   : Master Fisherman's Trophy Journal (Full)
7957: T7_JOURNAL_TROPHY_FISHING_EMPTY                                  : Grandmaster Fisherman's Trophy Journal (Empty)
7958: T7_JOURNAL_TROPHY_FISHING_FULL                                   : Grandmaster Fisherman's Trophy Journal (Full)
7959: T8_JOURNAL_TROPHY_FISHING_EMPTY                                  : Elder Fisherman's Trophy Journal (Empty)
7960: T8_JOURNAL_TROPHY_FISHING_FULL                                   : Elder Fisherman's Trophy Journal (Full)
7961: T2_JOURNAL_FISHING_EMPTY                                         : Novice Fisherman's Journal (Empty)
7962: T2_JOURNAL_FISHING_FULL                                          : Novice Fisherman's Journal (Full)
7963: T3_JOURNAL_FISHING_EMPTY                                         : Journeyman Fisherman's Journal (Empty)
7964: T3_JOURNAL_FISHING_FULL                                          : Journeyman Fisherman's Journal (Full)
7965: T4_JOURNAL_FISHING_EMPTY                                         : Adept Fisherman's Journal (Empty)
7966: T4_JOURNAL_FISHING_FULL                                          : Adept Fisherman's Journal (Full)
7967: T5_JOURNAL_FISHING_EMPTY                                         : Expert Fisherman's Journal (Empty)
7968: T5_JOURNAL_FISHING_FULL                                          : Expert Fisherman's Journal (Full)
7969: T6_JOURNAL_FISHING_EMPTY                                         : Master Fisherman's Journal (Empty)
7970: T6_JOURNAL_FISHING_FULL                                          : Master Fisherman's Journal (Full)
7971: T7_JOURNAL_FISHING_EMPTY                                         : Grandmaster Fisherman's Journal (Empty)
7972: T7_JOURNAL_FISHING_FULL                                          : Grandmaster Fisherman's Journal (Full)
7973: T8_JOURNAL_FISHING_EMPTY                                         : Elder Fisherman's Journal (Empty)
7974: T8_JOURNAL_FISHING_FULL                                          : Elder Fisherman's Journal (Full)
`;

const listItem: { item_id: string, item_name: string }[] = [];

let item_id: string = '';
let item_name: string = '';
let item_id_init: boolean = false;
let item_name_init: boolean = false;

let thereIsSpace = false;

function isValidLetter(letter: string): boolean {
  return !(letter == ' ' || letter == ":");
}

for (let i: number = 0; i < str.length; i++) {
  let l: string = str.charAt(i);

  if (str.charCodeAt(i) == 10) {
    listItem.push({item_id: item_id, item_name: item_name});
      item_id = '';
      item_name = '';
      item_id_init = false;
      item_name_init = false;
  }

  else if (l == ':') {
    if (str.charAt(i -1) == ' ') {i++; item_name_init = true;}
    else if(str.charAt(i -1).toUpperCase() == str.charAt(i -1).toLowerCase()) {i++; item_id_init = true;}
    else 
    item_name += l;
  }

  else {
    if (item_id_init) {
      if (isValidLetter(l)) item_id += l;
      else item_id_init = false;
    }
    else if (item_name_init) {
      if (l != ' ') {thereIsSpace = false; item_name += l;}
      else {
        if (!thereIsSpace) { thereIsSpace = true; item_name += l; }
        else item_name_init = false;
      }
    }
  }
}

console.log(Math.random() ,listItem);