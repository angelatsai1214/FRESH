<?php
//Connecting to sql db.
$connect = mysqli_connect("my host","my user","my passwrod","my db");
//Sending form data to sql db.
mysqli_query($connect,"INSERT INTO posts (itemname, quantity, expdate, itemtype)
VALUES ('$_POST[post_itemname]', '$_POST[post_quantity]', '$_POST[post_expdate]', '$_POST[post_itemtype]')";
?>