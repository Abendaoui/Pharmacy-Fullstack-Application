<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Order;
use App\Models\Medecine;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\MedecinesCollection;
use App\Http\Resources\Orders\OrderCollection;

class DashboardController extends Controller
{


    protected function medecineCardStatic()
    {
        $currentWeek = Carbon::now()->weekOfYear;
        $prevWeek = $currentWeek - 1;

        // Get count of new medicines added in current week
        $currentWeekMedicines = Medecine::whereBetween('created_at', [
            Carbon::now()->startOfWeek(),
            Carbon::now()->endOfWeek(),
        ])->count();

        // Get count of new medicines added in previous week
        $prevWeekMedicines = Medecine::whereBetween('created_at', [
            Carbon::now()->startOfWeek()->subWeek(),
            Carbon::now()->endOfWeek()->subWeek(),
        ])->count();

        // Calculate percentage change
        $medicinePercentage = $prevWeekMedicines > 0
            ? round(($currentWeekMedicines - $prevWeekMedicines) / $prevWeekMedicines * 100, 2)
            : 0;
        return [
            'medecinesCount' => $currentWeekMedicines,
            'medicinesPercentage' => $medicinePercentage,
        ];
    }
    protected function customersCardStatic()
    {
        $currentWeek = Carbon::now()->weekOfYear;
        $prevWeek = $currentWeek - 1;

        // Get count of new customers signed up in current week
        $currentWeekCustomers = User::where('role', 'customer')
            ->whereBetween('created_at', [
                Carbon::now()->startOfWeek(),
                Carbon::now()->endOfWeek(),
            ])
            ->count();

        // Get count of new customers signed up in previous week
        $prevWeekCustomers = User::where('role', 'customer')
            ->whereBetween('created_at', [
                Carbon::now()->startOfWeek()->subWeek(),
                Carbon::now()->endOfWeek()->subWeek(),
            ])
            ->count();

        // Calculate percentage change
        $customerPercentage = $prevWeekCustomers > 0
            ? round(($currentWeekCustomers - $prevWeekCustomers) / $prevWeekCustomers * 100, 2)
            : 0;

        return [
            'customersCount' => $currentWeekCustomers,
            'customersPercentage' => $customerPercentage,
        ];
    }

    // Data Cards
    public function cardsData()
    {
        return response()->json([
            ...$this->medecineCardStatic(),
            ...$this->customersCardStatic()
        ]);
    }

    // Sales Chart
    public function getLatestSales()
    {
        $salesData = [];

        // Get paid orders from the last 10 weeks
        $orders = Order::where('order_date', '>=', now()->subWeeks(10))
            ->where('order_status', 'paid')
            ->get();

        // Group orders by week
        $orders->each(function ($order) use (&$salesData) {
            $week = $order->order_date->format('W'); // Get the week number (1-52)
            $salesData[$week][] = $order->total_price; // Assuming `total_price` is the sales amount column
        });

        // Calculate the total sales for each week
        foreach ($salesData as &$weekSales) {
            $weekSales = array_sum($weekSales);
        }

        // Return the sales data in a format suitable for React Chart
        return response()->json([
            'labels' => array_keys($salesData),
            'datasets' => [[
                'label' => 'Sales',
                'data' => array_values($salesData),
                'backgroundColor' => 'rgba(255, 99, 132, 0.2)',
                'borderColor' => 'rgba(255, 99, 132, 1)',
                'borderWidth' => 1,
            ]],
        ]);
    }

    // Latest Transactions
    public function latestPaidOrders()
    {
        $orders = Order::where('order_status', 'delivered')
            ->with('user')
            ->latest()
            ->take(6)
            ->get();



        return new OrderCollection($orders);
    }

    // Latest Customers
    public function latestCustomers()
    {
        $users = User::select('fullname', 'email', 'created_at')
            ->whereHas('orders', function ($query) {
                $query->where('order_status', 'delivered');
            })
            ->latest()
            ->take(6)
            ->get();

        return response()->json([
            'data' => $users
        ]);
    }

    // Latest Medecines
    public function latestMedecinesAdded()
    {
        $medecines = Medecine::latest()
            ->take(8)
            ->with('brand')
            ->get();

        return new MedecinesCollection($medecines);
    }
}
