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
        Schema::create('shippings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('address_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->string('shipping_method', 20);
            $table->enum('shipping_status', ['pending','accepted', 'canceled', 'returned', 'delivered'])->default('pending');
            $table->dateTime('shipping_date')->nullable();
            $table->boolean('deleted')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shippings');
    }
};
