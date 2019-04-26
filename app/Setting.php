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
}
