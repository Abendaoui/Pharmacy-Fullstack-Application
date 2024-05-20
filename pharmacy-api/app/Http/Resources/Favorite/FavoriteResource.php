<?php

namespace App\Http\Resources\Favorite;

use App\Http\Resources\Medecine\MedecineResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FavoriteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'medecine' => new MedecineResource($this->medecine),
        ];
    }
}
