<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('medecines', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->nullable(false);
            $table->string('slug', 100)->nullable(false);
            $table->foreignId('category_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('brand_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->longText('description')->nullable(false);
            $table->decimal('price', 10, 2)->nullable(false);
            $table->string('medecine_image', 55)->nullable(false);
            $table->integer('quantity')->nullable();
            $table->boolean('deleted')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medecines');
    }
};
