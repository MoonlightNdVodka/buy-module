//foreach ($_GET as $key => $value) {
//    echo "Cost ".$key." is: ".htmlspecialchars($value).'$'."<br>";
//    $summ +=$value;
//    foreach ($_GET as $key => $col){
//        if ($col < '3') {
//            echo 'Buy 3 or more';
//        } else {
//            echo 'You get discount';
//        }
//    }
//}
//
//$price1 = ($_POST['val1']);
//$price2 = ($_POST['val2']);
//$price3 = ($_POST['val3']);
//
//
//if ($price1 < $price2 && $price1 < $price3 && $price1 != 0) {
//    $discount = $price1;
//} elseif ($price2 < $price3 && $price2 < $price1 && $price2 != 0) {
//    $discount = $price2;
//} else {
//    if ($price3 < $price1 && $price3 < $price2 && $price3 != 0) {
//        $discount = $price3;
//    }
//}
//
//$summary = $price1 + $price2 + $price3;
//$total = '';
//
//if ($summary > '100' && $price1 !== 0 && $price2 !==0 && $price3 !==0) {
//    $total = $summary - $discount;
//    echo 'Total price: '.$total.'$'.'<br/>';
//    echo 'You have ' . $discount .'$ discount!';
//
//}   elseif ($price1 == 0 || $price2 ==0 || $price3 ==0) {
//      echo 'Total price:' .$summary.'$ <br/>';
//    $total = $summary - '101';
//    echo $total. '<br/>';
//    echo 'You need buy three or more items for the price ' .abs($total).'$ or more, to get discount!';
//
//} else {
//    echo 'Total price:' .$summary.'$ <br/>';
//    $total = $summary - '101';
//    echo $total. '<br/>';
//    echo 'You need ' .abs($total).'$ or more, to get discount!';
//}


//if (array_filter($arrValue, array(), ARRAY_FILTER_USE_BOTH ))
//if (in_array(0 && null, $arrValue) === true){
//    echo 'Error! <br> That price 0/empty - is not exist';
//    exit();
//} else {


// <!--<form action="action.php" name="form" method="post" >
//     <label>Enter First item's price
//         <input name="val1" type="number"><br>
//     </label>
//     <label>Enter Second item's price
//         <input name="val2" type="number"><br>
//     </label>
//     <label>Enter Third item's price
//         <input name="val3" type="number"><br>
//     </label>
//     <input name="Submit" type=submit value="Check discount">
// </form> -->
