const { processDataArray } = require('../utils/dataProcessor');
const userInfo = require('../config/userConfig');

const processBfhlData = async (req, res) => {
    try {
        const { data } = req.body;
        
        const result = processDataArray(data);
        
        const response = {
            is_success: true,
            user_id: userInfo.getUserId(),
            email: userInfo.email,
            roll_number: userInfo.rollNumber,
            odd_numbers: result.oddNumbers,
            even_numbers: result.evenNumbers,
            alphabets: result.alphabets,
            special_characters: result.specialCharacters,
            sum: result.sum,
            concat_string: result.concatString
        };
        
        res.status(200).json(response);
        
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
};

const getOperationCode = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};

const healthCheck = (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running'
    });
};

const getApiInfo = (req, res) => {
    res.json({
        message: 'BFHL API is running',
        endpoints: {
            'POST /bfhl': 'Main API endpoint',
            'GET /bfhl': 'Get operation code',
            'GET /health': 'Health check'
        }
    });
};

module.exports = {
    processBfhlData,
    getOperationCode,
    healthCheck,
    getApiInfo
};
