<?php
$num1 = $num2 = ""; // Initialize variables to store input values
$result = ""; // Initialize result variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the Clear button was clicked
    if (isset($_POST["clear"])) {
        $num1 = $num2 = ""; // Reset both input values
        $result = ""; // Clear the result
    } else {
        // Check if both inputs are set and numeric
        if (isset($_POST["num1"]) && isset($_POST["num2"]) && is_numeric($_POST["num1"]) && is_numeric($_POST["num2"])) {
            $num1 = (float) $_POST["num1"]; // Ensure decimal handling
            $num2 = (float) $_POST["num2"]; // Ensure decimal handling
            $operation = $_POST["operation"];

            // Perform the selected operation
            switch ($operation) {
                case "add":
                    $result = $num1 + $num2;
                    break;
                case "subtract":
                    $result = $num1 - $num2;
                    break;
                case "multiply":
                    $result = $num1 * $num2;
                    break;
                case "divide":
                    $result = $num2 != 0 ? $num1 / $num2 : "Cannot divide by zero";
                    break;
                default:
                    $result = "Invalid operation.";
                    break;
            }
        } else {
            $result = "Please enter valid numbers.";
        }
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Calculator</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <main>
        <div>
            <form method="POST" action="calculator.php">
                <div class="input-container">
                    <!-- Set step="any" to allow decimal input -->
                    <input type="number" name="num1" placeholder="Enter first number" step="any" value="<?php echo htmlspecialchars($num1); ?>" required>
                    <input type="number" name="num2" placeholder="Enter second number" step="any" value="<?php echo htmlspecialchars($num2); ?>" required>
                </div>
                <div>
                    <button type="submit" name="operation" value="add" class="operation">+</button>
                    <button type="submit" name="operation" value="subtract" class="operation">-</button>
                    <button type="submit" name="operation" value="multiply" class="operation">×</button>
                    <button type="submit" name="operation" value="divide" class="operation">÷</button>
                </div>
                <button type="submit" name="clear" id="clear">Clear</button> <!-- Clear button -->
            </form>
            <div id="result">Result: <?php echo htmlspecialchars($result); ?></div>
        </div>
    </main>
</body>
</html>
