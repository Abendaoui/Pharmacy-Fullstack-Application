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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('address_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->dateTime('order_date');
            $table->decimal('total_price', 10, 2);
            $table->enum('order_status', ['pending', 'accepted', 'shipped', 'canceled', 'returned', 'delivered', 'paid'])->default('pending');
            $table->string('payment_method', 20)->nullable(false);
            $table->boolean('deleted')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
