/*:
 * @plugindesc (ver1.3) Battle Background effects plugin
 * @author ODUE
 * @url https://github.com/00due/battleback-effects-MZ
 * @target MZ
 * 
 * @help
 * This plugin allows you to add effects to the battle background, as well as have multiple
 * layers of backgrounds.
 * 
 * Using the plugin:
 * - You can use the plugin commands to add effects to the battle background.
 * - It is possible to add effects both during and outside a battle.
 * - With this version, you have to set the battle backgrounds using the plugin command.
 *   Database or default "Change battle background" won't work with this version.
 *   You can for example use an autorun event to set the battle backgrounds at the start of the
 *   game or before a battle, or set them in the battle event itself.
 * 
 * 
 * ###########
 * # WARNING #
 * ###########
 * 
 * This version of the plugin has made major changes to the way battle backgrounds work.
 * The plugin adds a new multi-layer battle background system, which allows you to add
 * more than just 2 backgrounds. However, this means that the older system is no longer
 * compatible with this plugin. If you or your other plugins heavily rely on the default
 * way of handling battle backgrounds, please download the "classic version" of this plugin,
 * found from the GitHub page!
 * 
 * 
 * Plugin commands info:
 * 
 * --- Scroll ---
 * 
 * Does what you expect it to do: it will continuously move the battle background in the
 * chosen direction.
 * 
 * 
 * --- Wave ---
 * 
 * This will make the battle background wavy, similar to the style of older RPG Makers.
 * Amplitude: the size of the waves. Higher value = longer waves in the horizontal direction.
 * Wavelength: how much space between the waves. Higher value = more waves in the vertical direction.
 * Speed: how quickly the waves should move. Higher value = faster.
 * 
 * 
 * * --- Twist ---
 * 
 * This will twist the battle background around a point in the middle of the screen.
 * Radius: how much of the screen should be affected by the twist. Higher value = more of the
 * screen is twisted.
 * Angle: how much the background should be twisted. Higher value = more twist.
 * Speed: how quickly the background should be twisted. Higher value = faster.
 * 
 * 
 * * --- Hue shift / brightness ---
 * 
 * This will continuously shift the hue and/or brightness of the battle background.
 * This effect is not entirely accurate, but more a psychedelic / trippy effect.
 * Use hue and brightness together for most interesting results.
 * Hue shift can be done in two ways: linear or sine wave. Linear will shift the hue in a constant
 * speed, while sine wave will shift the hue in a sine wave pattern. Sine wave looks smoother,
 * while linear has sharper changes.
 * 
 * 
 * --- Blend mode ---
 * 
 * This can be used to change how the background blends with the layers below it.
 * For example, additive blend mode will make the background add its colors to the layers below it,
 * while multiply will make the background multiply its colors with the layers below it.
 * -
 * Due to the way RPG Maker system works, adding the blend modes for specific layers can be a bit tricky.
 * You have to apply the blend modes in the same order as your backgrounds are.
 * For example, if you have 3 battle backgrounds, and you want to set the blend mode for the second
 * but want to leave the first one as normal, you have to set the first blend mode to "normal",
 * and then add another one and set that to whatever you want.
 * By default, all blend modes are set to normal, even if no value is given.
 * 
 * 
 * Terms of use:
 *
 * 1. You must give credit to ODUE
 * 2. You can freely edit this plugin to your needs. However, you must still credit me.
 * 3. This plugin is free for commercial and non-commercial projects.
 * 4. This plugin is provided as is. I'm not responsible for anything you make with this plugin.
 * 5. You can send feature requests to me on platforms such as Reddit (to u/SanttuPOIKA----).
 *    However, I have no obligation to fulfill your requests.
 * 
 * PLEASE SEND YOUR ISSUES / IDEAS TO THE GITHUB 'ISSUES' PAGE!!!
 * 
 * 
 * @command setBackgrounds
 * @text Set battle backgrounds
 * @desc Set the battle backgrounds.
 * 
 * @arg battlebacks
 * @text Battle Backgrounds
 * @desc A list of battle backgrounds to choose from.
 * @type file[]
 * @dir img
 * @default []
 *
 * @command setScroll
 * @text Set scroll for battle background
 * @desc Set the scroll speed for the battle background.
 * 
 * @arg bgid
 * @text background ID
 * @desc Which background to apply the scroll to?
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg horizontalScroll
 * @text Horizontal Scroll Speed
 * @desc Speed of horizontal scrolling for the battle background.
 * @type number
 * @default 0.00
 * @min -100
 * @decimals 2
 * 
 * @arg verticalScroll
 * @text Vertical Scroll Speed
 * @desc Speed of vertical scrolling for the battle background.
 * @type number
 * @default 0.00
 * @min -100
 * @decimals 2
 * 
 * @command setWave
 * @text Set wave
 * @desc Make background wavy
 * 
 * @arg bgid
 * @text background ID
 * @desc Which background to apply the wave effect to?
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg amplitude
 * @desc How much does it wave?
 * @type number
 * @min 0
 * @max 50
 * @default 15
 * 
 * @arg wavelength
 * @desc How big are the waves?
 * @type number
 * @min 10
 * @max 200
 * @default 130
 * 
 * @arg speed
 * @desc How quickly should it wave?
 * @type number
 * @min 0.01
 * @max 20
 * @default 0.1
 * @decimals 2
 * 
 * @command twist
 * @desc Twist the battle background.
 * 
 * @arg bgid
 * @text background ID
 * @desc Which background to apply the twist effect to?
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg radius
 * @desc How much of screen should twist?
 * @type number
 * @min 0
 * @max 1920
 * @default 1000
 * 
 * @arg angle
 * @desc How much should it twist?
 * @type number
 * @min 0
 * @max 100
 * @default 1.00
 * @decimals 2
 * 
 * @arg speed
 * @desc How quickly should it twist?
 * @type number
 * @min 0.1
 * @max 20
 * @default 1.0
 * @decimals 1
 * 
 * @command hue
 * @text Hue shift / brightness
 * @desc Continuous hue shifting of battle background.
 * 
 * @arg bgid
 * @text background ID
 * @desc Which background to apply the twist effect to?
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg type
 * @text hue shift easing
 * @type select
 * @option Linear
 * @value 0
 * @option Sine
 * @value 1
 * @default 0
 * 
 * @arg speed
 * @desc How quickly should it shift?
 * @type number
 * @min 1
 * @max 1000
 * @default 50
 * 
 * @arg range
 * @desc Example for 60: will hue shift in range of 0 and 60 deg. Use 360 for full range.
 * @type number
 * @min 0
 * @max 360
 * @default 360
 * 
 * @arg minimumBrightness
 * @text minimum brightness
 * @desc Minimum brightness of brightness shifting
 * @type number
 * @min 0.00
 * @max 10.00
 * @default 1.00
 * @decimals 2
 * 
 * @arg maximumBrightness
 * @text maximum brightness
 * @desc Maximum brightness of brightness shifting
 * @type number
 * @min 0.00
 * @max 10.00
 * @default 1.00
 * @decimals 2
 * 
 * @arg brightnessSpeed
 * @text brightness speed
 * @desc How quickly should it shift? Use 0 for no brightness shift.
 * @type number
 * @min 0
 * @max 1000
 * @default 0
 * 
 * @command setBlendMode
 * @text Set blend mode
 * @desc Set the blend mode for the battlebacks in the added order.
 * 
 * @arg blendModes
 * @text Blend modes
 * @desc Blend modes to set for the battle backgrounds in the added order.
 * @type select[]
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * 
 * @command removeFilters
 * @text remove effects
 * @desc Remove all effects from the battle background (not including scroll).
 * 
 */

(() => {
    let battlebacks = [];

    let bbgFilters = [];
    const initializeBbgFilters = (count) => {
        bbgFilters = [];
        for (let i = 0; i < count; i++) {
            bbgFilters.push([]);
        }
    };

    let effectSettings = [];
    const initializeEffectSettings = (count) => {
        effectSettings = [];
        for (let i = 0; i < count; i++) {
            effectSettings.push({
                scroll: [0, 0],
                filters: [],
                waveSpeed: 0.1,
                twistAngle: 0,
                twistTime: 0,
                twistSpeed: 0.1,
                hue: 0,
                hueSpeed: 0,
                hueSineWave: false,
                hueSineTime: 0,
                hueRange: 0,
                hueRangeReverse: false,
                brightness: 1,
                brightnessSpeed: 0,
                brightnessRange: [1, 1],
                blendMode: 0
            });
        }
    };

    const initializeSettings = (count) => {
        initializeBbgFilters(count);
        initializeEffectSettings(count);
    };

    // Reworked Spriteset_Battle:

    ImageManager.loadBattleback = function(filename) {
        return this.loadBitmap("img/", filename);
    };

    Sprite_Battleback.prototype.initialize = function(type, battlebackName = null) {
        TilingSprite.prototype.initialize.call(this);
        if (type === 0) {
            this.bitmap = this.battleback1Bitmap();
        } else if (type === 1) {
            this.bitmap = this.battleback2Bitmap();
        }
        else if (battlebackName != null) {
            this.bitmap = this.battlebackBitmap(battlebackName); // Type 3
        }
    };

    Sprite_Battleback.prototype.battlebackBitmap = function(filename) {
        return ImageManager.loadBattleback(filename);
    };

    ImageManager.loadBattleback = function(filename) {
        return this.loadBitmap("img/", filename);
    };

    // Plugin commands:
    PluginManager.registerCommand("ODUE_BattleBack", "setBackgrounds", args => {
        const backgrounds = JSON.parse(args.battlebacks);
        battlebacks = backgrounds;
        initializeSettings(battlebacks.length);
        requestBbgRefresh();
    });

    PluginManager.registerCommand("ODUE_BattleBack", "setScroll", args => {
        const scroll = [Number(args.horizontalScroll) || 0, Number(args.verticalScroll) || 0];

        const index = Number(args.bgid) - 1;
        if (!effectSettings[index]) return;
        effectSettings[index].scroll = scroll;
    });

    PluginManager.registerCommand("ODUE_BattleBack", "setWave", args => {
        const filterSetting = {
            alpha: [1, 1],
            amplitude: [Number(args.amplitude), Number(args.amplitude)],
            boundary: 0.0,
            mirror: false,
            waveLength: [Number(args.wavelength), Number(args.wavelength)],
            time: 0
        };
        const filter = new PIXI.filters.ReflectionFilter(filterSetting);

        const index = Number(args.bgid) - 1;
        if (!effectSettings[index]) return;
        bbgFilters[index].push(filter);
        effectSettings[index].waveSpeed = Number(args.speed) / 10;
        requestBbgRefresh();
    });

    PluginManager.registerCommand("ODUE_BattleBack", "twist", args => {
        const filter = new PIXI.filters.TwistFilter(Number(args.radius), 0, 20);
        filter.offset = new PIXI.Point(Graphics.width / 2, Graphics.height / 2);

        const index = Number(args.bgid) - 1;
        if (!effectSettings[index]) return;
        bbgFilters[index].push(filter);
        effectSettings[index].twistAngle = Number(args.angle);
        effectSettings[index].twistSpeed = Number(args.speed);
        requestBbgRefresh();
    });

    PluginManager.registerCommand("ODUE_BattleBack", "hue", args => {
        const filter = new PIXI.filters.ColorMatrixFilter();

        const index = Number(args.bgid) - 1;
        if (!effectSettings[index]) return;
        bbgFilters[index].push(filter);
        effectSettings[index].hueSineWave = (Number(args.type) == 1);
        effectSettings[index].hueSpeed = Number(args.speed);
        effectSettings[index].hueRange = Number(args.range);
        effectSettings[index].brightnessRange = [Number(args.minimumBrightness), Number(args.maximumBrightness)];
        effectSettings[index].brightnessSpeed = Number(args.brightnessSpeed);
        requestBbgRefresh();
    });

    PluginManager.registerCommand("ODUE_BattleBack", "setBlendMode", args => {
        const blendModes = JSON.parse(args.blendModes).map(mode => Number(mode));
        blendModes.forEach((mode, index) => {
            if (bbgFilters[index]) {
                bbgFilters[index].forEach(filter => {
                    filter.blendMode = mode;
                });
                effectSettings[index].blendMode = mode;
            }
        });
        requestBbgRefresh();
    });

    PluginManager.registerCommand("ODUE_BattleBack", "removeFilters", args => {
        initializeSettings(effectSettings.length);
        requestBbgRefresh();
    });

    const requestBbgRefresh = () => {
        if (SceneManager._scene instanceof Scene_Battle) {
            SceneManager._scene._spriteset.refreshBbg();
        }
    };

    Spriteset_Battle.prototype.refreshBbg = function() {
        this.createBattleback();
        this._battlebackLocated = false; // Force repositioning of battlebacks
    };

    Spriteset_Battle.prototype.createBattleback = function() {
        this.deleteBattleback();
        this._backSprites = battlebacks.map(bg => {
            return new Sprite_Battleback(3, bg);
        });
        
        let insertIndex = this._baseSprite.children.length;
        if (this._battleField && this._baseSprite.children.includes(this._battleField)) {
            insertIndex = this._baseSprite.getChildIndex(this._battleField);
        }

        this._backSprites.forEach((sprite, index) => {
            sprite.filters = bbgFilters[index];
            this._baseSprite.addChildAt(sprite, insertIndex);
            insertIndex++;
        });
    };

    Spriteset_Battle.prototype.deleteBattleback = function() {
        if (!this._backSprites) return;
        for (const sprite of this._backSprites) {
            this._baseSprite.removeChild(sprite);
            sprite.destroy();
        }
    };

    Spriteset_Battle.prototype.locateBattlebacks = function() {
        if (this._battlebackLocated) return;

        if (this._backSprites) {
            for (const sprite of this._backSprites) {
                if (sprite.bitmap && !sprite.bitmap.isReady()) {
                    return; // Wait until all bitmaps are fully loaded
                }
            }
        }

        this._back1Sprite?.adjustPosition();
        this._back2Sprite?.adjustPosition();
        for (const sprite of this._backSprites) {
            sprite.adjustPosition();
        }
        this._battlebackLocated = true;
    };

    Spriteset_Battle.prototype.updateEffects = function() {
        this._backSprites.forEach((sprite, index) => {
            sprite.origin.x += effectSettings[index]?.scroll[0] || 0;
            sprite.origin.y += effectSettings[index]?.scroll[1] || 0;

            for (const filter of bbgFilters[index]) {
                if (filter instanceof PIXI.filters.ReflectionFilter) {
                    this.updateReflectionFilter(filter, index);
                }
                if (filter instanceof PIXI.filters.TwistFilter) {
                    this.updateTwistFilter(filter, index);
                }
                if (filter instanceof PIXI.filters.ColorMatrixFilter) {
                    this.updateColorMatrixFilter(filter, index);
                }
            }
        });
    };

    Spriteset_Battle.prototype.updateReflectionFilter = function(filter, index) {
        filter.time += effectSettings[index].waveSpeed;
    };

    Spriteset_Battle.prototype.updateTwistFilter = function(filter, index) {
        filter.angle = Math.sin(effectSettings[index].twistTime * effectSettings[index].twistSpeed / 100) / 6.283185 * effectSettings[index].twistAngle;
        effectSettings[index].twistTime += 1;
    };

    Spriteset_Battle.prototype.updateColorMatrixFilter = function(filter, index) {
        if (!effectSettings[index].hueSineWave) {
            if (effectSettings[index].hueRange >= 360) {
                if (effectSettings[index].hue > 360) effectSettings[index].hue = 0;
                else effectSettings[index].hue += effectSettings[index].hueSpeed / 10;
            }
            else {
                if (!effectSettings[index].hueRangeReverse) {
                    if (effectSettings[index].hue > effectSettings[index].hueRange) effectSettings[index].hueRangeReverse = true;
                    else effectSettings[index].hue += effectSettings[index].hueSpeed / 10;
                }
                else {
                    if (effectSettings[index].hue <= 0) effectSettings[index].hueRangeReverse = false;
                    else effectSettings[index].hue -= effectSettings[index].hueSpeed / 10;
                }
            }
        }
        else {
            effectSettings[index].hue = (Math.sin(effectSettings[index].hueSineTime * effectSettings[index].hueSpeed / 1000) + 1) / 2 * (effectSettings[index].hueRange);
        }

        if (effectSettings[index].brightnessSpeed != 0) {
            effectSettings[index].brightness = (Math.sin(effectSettings[index].hueSineTime * effectSettings[index].brightnessSpeed / 1000) + 1) / 2 * (effectSettings[index].brightnessRange[1] - effectSettings[index].brightnessRange[0]) + effectSettings[index].brightnessRange[0];
        }

        if (effectSettings[index].hueSineWave || effectSettings[index].brightnessSpeed != 0) effectSettings[index].hueSineTime += 1;

        filter.hue(effectSettings[index].hue, false);
        if (effectSettings[index].brightnessSpeed != 0) filter.brightness(effectSettings[index].brightness, true);
    };

    Spriteset_Battle.prototype.updateBattleback = function() {
        this.locateBattlebacks();

        if (this._battlebackLocated) {
            this.updateEffects();
        }
    };
})();
