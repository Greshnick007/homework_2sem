<!DOCTYPE html>
<html>
<head>
<title>Category</title>
<style>
table {
	margin : 15px;
	background-color : #ccc;
}

td {
	border : 1px solid #000;
}
</style>
</head>
<body>
<table>
<?php 
require_once("../config.php");
require_once("lib.php");

$category = $DB->get_records_sql("SELECT course.id, course.fullname, course.shortname, course_category.name AS category FROM mdl_course AS course LEFT JOIN mdl_course_categories AS course_category ON course_category.id = course.category");

foreach ($category as $course)
{
	echo "<tr><td>".$course->id."</td>";
	echo "<td>".$course->shortname."</td>";
	echo "<td>".$course->fullname."</td>";
	echo "<td>".$course->category."</td></tr>";
}
?>
</table>
</body>
</html>