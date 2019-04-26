<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    public const default_settings = [
        'font-family' => 'monospace',
        'font-size' => 'regular',
        'char-count' => '1',
        'autosave' => '1',
        'color-mode' => 'white',
        'primary-color' => 'default'
    ];

    protected $fillable = ['user_id', 'app'];

    public $timestamps = false;

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
            'app' => $setting
        ]);

        return $setting->{$key};
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
}
