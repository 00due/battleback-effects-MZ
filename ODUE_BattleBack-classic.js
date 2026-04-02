/*:
 * @plugindesc (classic ver1.2) Battle Background effects plugin
 * @author ODUE
 * @url https://github.com/00due/battleback-effects-MZ
 * @target MZ
 * 
 * @help
 * This plugin allows you to add effects to the battle background.
 * 
 * Using the plugin:
 * - You can use the plugin commands to add effects to the battle background.
 * - It is possible to add effects both during and outside a battle.
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
 * @command setScroll
 * @text Set scroll for BBG 1
 * @desc Set the scroll speed for the battle background 1.
 * 
 * @arg horizontalScroll
 * @text Horizontal Scroll Speed
 * @desc Speed of horizontal scrolling for the battle background.
 * @type number
 * @default 0.00
 * @decimals 2
 * 
 * @arg verticalScroll
 * @text Vertical Scroll Speed
 * @desc Speed of vertical scrolling for the battle background.
 * @type number
 * @default 0.00
 * @decimals 2
 * 
 * @command setScroll2
 * @text Set scroll for BBG 2
 * @desc Set the scroll speed for the battle background 2.
 * 
 * @arg horizontalScroll
 * @text Horizontal Scroll Speed
 * @desc Speed of horizontal scrolling for the battle background.
 * @type number
 * @default 0.00
 * @decimals 2
 * 
 * @arg verticalScroll
 * @text Vertical Scroll Speed
 * @desc Speed of vertical scrolling for the battle background.
 * @type number
 * @default 0.00
 * @decimals 2
 * 
 * @command setWave
 * @text Set wave
 * @desc Make background wavy
 * 
 * @arg bgid
 * @text background ID
 * @desc Which background to apply the wave effect to?
 * @type select
 * @option Lower Background
 * @value 0
 * @option Upper Background
 * @value 1
 * @default 0
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
 * @type select
 * @option Lower Background
 * @value 0
 * @option Upper Background
 * @value 1
 * @default 0
 * 
 * @arg radius
 * @desc How much of screen should twist?
 * @type number
 * @min 0
 * max 1920
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
 * @type select
 * @option Lower Background
 * @value 0
 * @option Upper Background
 * @value 1
 * @default 0
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
 * @desc Example for 60: will hue shift in range of 0 and 60. Use 360 for full range.
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
 * @command refreshBg
 * @text Refresh Background
 * @desc Refresh the battle background (for changing bg in-battle).
 * 
 * @command removeFilters
 * @text remove effects
 * @desc Remove all effects from the battle background (not including scroll).
 * 
 */

(() => {
    let lowerScroll = [0, 0];
    let upperScroll = [0, 0];

    // Filter arrays for battlebacks
    let bbg1Filters = [];
    let bbg2Filters = [];

    let waveSpd1 = 0.1;
    let waveSpd2 = 0.1;
    let upperTwistAngle = 0;
    let lowerTwistAngle = 0;
    let lowerTwistTime = 0;
    let upperTwistTime = 0;
    let upperTwistSpeed = 0.1;
    let lowerTwistSpeed = 0.1;
    let lowerHue = 0;
    let upperHue = 0;
    let lowerHueSpeed = 0;
    let upperHueSpeed = 0;
    let lowerHueSineWave = false;
    let upperHueSineWave = false;
    let lowerHueSineTime = 0;
    let upperHueSineTime = 0;
    let lowerHueRange = 0;
    let upperHueRange = 0;
    let lowerHueRangeReverse = false;
    let upperHueRangeReverse = false;
    let lowerBrightness = 1;
    let upperBrightness = 1;
    let lowerBrightnessSpeed = 0;
    let upperBrightnessSpeed = 0;
    let lowerBrightnessRange = [1, 1];
    let upperBrightnessRange = [1, 1];

    PluginManager.registerCommand("ODUE_BattleBack", "setScroll", args => {
        lowerScroll = [Number(args.horizontalScroll) || 0, Number(args.verticalScroll) || 0];
    });

    PluginManager.registerCommand("ODUE_BattleBack", "setScroll2", args => {
        upperScroll = [Number(args.horizontalScroll) || 0, Number(args.verticalScroll) || 0];
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
        if (Number(args.bgid == 0)) {
            bbg1Filters.push(filter);
            waveSpd1 = Number(args.speed) / 10;
        }
        else {
            bbg2Filters.push(filter);
            waveSpd2 = Number(args.speed) / 10;
        }
    });

    PluginManager.registerCommand("ODUE_BattleBack", "twist", args => {
        const filterSetting = {
            angle: 0,
            radius: Number(args.radius),
            offset: new PIXI.Point(Graphics.width / 2, Graphics.height / 2)
        };
        const filter = new PIXI.filters.TwistFilter(filterSetting);
        if (Number(args.bgid == 0)) {
            bbg1Filters.push(filter);
            lowerTwistAngle = Number(args.angle);
            lowerTwistSpeed = Number(args.speed);
        }
        else {
            bbg2Filters.push(filter);
            upperTwistAngle = Number(args.angle);
            upperTwistSpeed = Number(args.speed);
        }
    });

    //Hue + brightness
    PluginManager.registerCommand("ODUE_BattleBack", "hue", args => {
        const filter = new PIXI.filters.ColorMatrixFilter();
        if (Number(args.bgid == 0)) {
            lowerHueSineWave = (Number(args.type) == 1);
            bbg1Filters.push(filter);
            lowerHueSpeed = Number(args.speed);
            lowerHueRange = Number(args.range);

            lowerBrightnessRange = [Number(args.minimumBrightness), Number(args.maximumBrightness)];
            lowerBrightnessSpeed = Number(args.brightnessSpeed);
        }
        else {
            upperHueSineWave = (Number(args.type) == 1);
            bbg2Filters.push(filter);
            upperHueSpeed = Number(args.speed);
            upperHueRange = Number(args.range);

            upperBrightnessRange = [Number(args.minimumBrightness), Number(args.maximumBrightness)];
            upperBrightnessSpeed = Number(args.brightnessSpeed);
        }
    })

    PluginManager.registerCommand("ODUE_BattleBack", "refreshBg", args => {
        SceneManager._scene._spriteset.refreshBbg();
    });

    PluginManager.registerCommand("ODUE_BattleBack", "removeFilters", args => {
        bbg1Filters = [];
        bbg2Filters = [];
        lowerScroll = [0, 0];
        upperScroll = [0, 0];
    });

    updateLowerTwistAngle = function(lowerFilter) {
        lowerFilter.angle = Math.sin(lowerTwistTime * lowerTwistSpeed / 100) / 6.283185 * lowerTwistAngle;
        lowerTwistTime += 1;

    };

    updateUpperTwistAngle = function(upperFilter) {
        upperFilter.angle = Math.sin(upperTwistTime * upperTwistSpeed / 100) / 6.283185 * upperTwistAngle;
        upperTwistTime += 1;
    };

    Spriteset_Battle.prototype.refreshBbg = function() {
        this._back1Sprite.bitmap = this._back1Sprite.battleback1Bitmap();
        this._back2Sprite.bitmap = this._back1Sprite.battleback2Bitmap();
        this._back1Sprite.origin.x = 0;
        this._back2Sprite.origin.x = 0;
        this._back1Sprite.origin.y = 0;
        this._back2Sprite.origin.y = 0;
    };

    const Spriteset_Battle_createBattleback = Spriteset_Battle.prototype.createBattleback;
    Spriteset_Battle.prototype.createBattleback = function() {
        Spriteset_Battle_createBattleback.call(this);
        this._back1Sprite.filters = bbg1Filters;
        this._back2Sprite.filters = bbg2Filters;
    };

    const Spriteset_Battle_update = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function() {
        Spriteset_Battle_update.call(this);
        
        //TODO: Add these to another function
        this._back1Sprite.origin.x += lowerScroll[0] || 0;
        this._back1Sprite.origin.y += lowerScroll[1] || 0;
        this._back2Sprite.origin.x += upperScroll[0] || 0;
        this._back2Sprite.origin.y += upperScroll[1] || 0;

        for (let i = 0; i < bbg1Filters.length; i++) {
            if (bbg1Filters[i] instanceof PIXI.filters.ReflectionFilter) {
                bbg1Filters[i].time += waveSpd1;
            }
            if (bbg1Filters[i] instanceof PIXI.filters.TwistFilter) {
                updateLowerTwistAngle(bbg1Filters[i]);
            }
            if (bbg1Filters[i] instanceof PIXI.filters.ColorMatrixFilter) {
                if (!lowerHueSineWave) {
                    if (lowerHueRange >= 360) {
                        if (lowerHue > 360) lowerHue = 0;
                        else lowerHue += lowerHueSpeed / 10;
                    }
                    else {
                        if (!lowerHueRangeReverse) {
                            if (lowerHue > lowerHueRange) lowerHueRangeReverse = true;
                            else lowerHue += lowerHueSpeed / 10;
                        }
                        else {
                            if (lowerHue <= 0) lowerHueRangeReverse = false;
                            else lowerHue -= lowerHueSpeed / 10;
                        }
                    }
                }
                else {
                    lowerHue = (Math.sin(lowerHueSineTime * lowerHueSpeed / 1000) + 1) / 2 * (lowerHueRange);
                }

                if (lowerBrightnessSpeed != 0) {
                    lowerBrightness = (Math.sin(lowerHueSineTime * lowerBrightnessSpeed / 1000) + 1) / 2 * (lowerBrightnessRange[1] - lowerBrightnessRange[0]) + lowerBrightnessRange[0];
                }

                if (lowerHueSineWave || lowerBrightnessSpeed != 0) lowerHueSineTime += 1;

                bbg1Filters[i].hue(lowerHue, false);
                if (lowerBrightnessSpeed != 0) bbg1Filters[i].brightness(lowerBrightness, true);
            }
            
        }
        for (let i = 0; i < bbg2Filters.length; i++) {
            if (bbg2Filters[i] instanceof PIXI.filters.ReflectionFilter) {
                bbg2Filters[i].time += waveSpd2;
            }
            if (bbg2Filters[i] instanceof PIXI.filters.TwistFilter) {
                updateUpperTwistAngle(bbg2Filters[i]);
            }
            if (bbg2Filters[i] instanceof PIXI.filters.ColorMatrixFilter) {
                if (!upperHueSineWave) {
                    if (upperHueRange >= 360) {
                        if (upperHue > 360) upperHue = 0;
                        else upperHue += upperHueSpeed / 10;
                    }
                    else {
                        if (!upperHueRangeReverse) {
                            if (upperHue > upperHueRange) upperHueRangeReverse = true;
                            else upperHue += upperHueSpeed / 10;
                        }
                        else {
                            if (upperHue <= 0) upperHueRangeReverse = false;
                            else upperHue -= upperHueSpeed / 10;
                        }
                    }
                }
                else {
                    upperHue = (Math.sin(upperHueSineTime * upperHueSpeed / 1000) + 1) / 2 * (upperHueRange);
                }

                if (upperBrightnessSpeed != 0) {
                    upperBrightness = (Math.sin(upperHueSineTime * upperBrightnessSpeed / 1000) + 1) / 2 * (upperBrightnessRange[1] - upperBrightnessRange[0]) + upperBrightnessRange[0];
                }

                if (upperHueSineWave || upperBrightnessSpeed != 0) upperHueSineTime += 1;

                bbg2Filters[i].hue(upperHue, false);
                if (upperBrightnessSpeed != 0) bbg2Filters[i].brightness(upperBrightness, true);
            }
        }
    };
})();
