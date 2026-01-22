<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$historyFile = __DIR__ . '/history.json';

// Initialize history file if it doesn't exist
if (!file_exists($historyFile)) {
    file_put_contents($historyFile, json_encode([]));
}

$action = $_GET['action'] ?? $_POST['action'] ?? null;

switch ($action) {
    case 'save':
        saveCalculation();
        break;
    case 'get':
        getHistory();
        break;
    case 'clear':
        clearHistory();
        break;
    case 'delete':
        deleteCalculation();
        break;
    default:
        http_response_code(400);
        echo json_encode(['error' => 'Invalid action']);
}

function saveCalculation() {
    global $historyFile;
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['expression']) || !isset($input['result'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing expression or result']);
        return;
    }
    
    $history = json_decode(file_get_contents($historyFile), true);
    
    $calculation = [
        'id' => uniqid(),
        'expression' => htmlspecialchars($input['expression']),
        'result' => htmlspecialchars($input['result']),
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    // Keep only last 50 calculations
    array_unshift($history, $calculation);
    if (count($history) > 50) {
        $history = array_slice($history, 0, 50);
    }
    
    file_put_contents($historyFile, json_encode($history, JSON_PRETTY_PRINT));
    
    http_response_code(200);
    echo json_encode(['success' => true, 'calculation' => $calculation]);
}

function getHistory() {
    global $historyFile;
    
    $history = json_decode(file_get_contents($historyFile), true);
    
    http_response_code(200);
    echo json_encode(['history' => $history]);
}

function clearHistory() {
    global $historyFile;
    
    file_put_contents($historyFile, json_encode([]));
    
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'History cleared']);
}

function deleteCalculation() {
    global $historyFile;
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['id'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing calculation id']);
        return;
    }
    
    $history = json_decode(file_get_contents($historyFile), true);
    
    $history = array_filter($history, function($item) use ($input) {
        return $item['id'] !== $input['id'];
    });
    
    file_put_contents($historyFile, json_encode(array_values($history), JSON_PRETTY_PRINT));
    
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Calculation deleted']);
}
?>
