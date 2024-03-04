<?php
// Get the JSON data sent from the client
$json_data = file_get_contents("php://input");

// Check if data is not empty
if (!empty($json_data)) {
    // Create a unique filename based on timestamp
    $filename = 'data/' . time() . '.json';

    // Write the JSON data to a new file
    if (file_put_contents($filename, $json_data) !== false) {
        // Return success message
        echo json_encode(array('status' => 'success', 'message' => 'Data saved successfully.'));
    } else {
        // Return error message if failed to write data
        echo json_encode(array('status' => 'error', 'message' => 'Failed to save data.'));
    }
} else {
    // Return error message if no data received
    echo json_encode(array('status' => 'error', 'message' => 'No data received.'));
}
?>
