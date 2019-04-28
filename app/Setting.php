<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Setting extends Model
{
    public const default_settings = [
        'font-family' => 'monospace',
        'font-size' => 'regular',
        'char-count' => '1',
        'autosave' => '1',
        'color-mode' => 'white',
        'primary-color' => 'default',
        'opening-position' => 'top'
    ];

    protected $fillable = ['user_id', 'app'];

    public $timestamps = false;

    public const font_families = [
        'monospace',
        'sans-serif',
        'serif'
    ];

    public const font_sizes = [
        'small',
        'regular',
        'large'
    ];

    public const color_modes = [
        'white',
        'dark'
    ];

    public const primary_colors = [
        'default',
        'blue',
        'red',
        'green'
    ];

    /**
     * Setting relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Returns the setting value given the key
     *
     * @param $key
     * @return mixed
     */
    public function getValueByKey($key)
    {
        $setting = $this->app;

        return json_decode(optional($setting))->{$key};
    }

    /**
     * Set value given the key
     *
     * @param $key
     * @return mixed
     */
    public function setValue($key, $value)
    {
        $setting = json_decode($this->app);
        $setting->{$key} = $value;

        $this->update([
            'app' => json_encode($setting)
        ]);

        return $setting;
    }

    /**
     * Returns the object as an array
     *
     * @return mixed
     */
    public function getSettings()
    {
        return json_decode($this->app);
    }

    /**
     * Get the different selectable setting values
     */
    public static function getAllPossibleSettings()
    {
        return [
            'font-families' => self::font_families,
            'font-sizes' => self::font_sizes,
            'color-modes' => self::color_modes,
            'primary-colors' => self::primary_colors
        ];
    }

    /**
     * Reset the setttings to initial values
     *
     * @return array|mixed
     */
    public function reset()
    {
        $this->app = json_encode(self::default_settings);

        $this->save();

        return json_decode($this->app);
    }
}
