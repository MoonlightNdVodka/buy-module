<?php
$alert = false;
$nullFilter = array_filter($_GET);
$getPrice = array_values($nullFilter);
$summary = array_sum($getPrice);

//1)This method calculated discount
if (count($getPrice) >= 3 && $summary > '100') {
    $summary -= min($getPrice);
    $alert = true;
}
//2)This method check discount availability and get message
echo "Total price: " . $summary . '$' . '<br>';
if ($alert) {
    echo 'You have discount:' . min($getPrice) . '$' . '<br>';
} else {
    echo 'Buy 3 items or more, more than 100$ in total - And you get discount! ';
}
