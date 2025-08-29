const validateDataArray = (req, res, next) => {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            error: "Invalid input: 'data' must be an array"
        });
    }
    
    next();
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: 'Something went wrong!'
    });
};

const notFoundHandler = (req, res) => {
    res.status(404).json({
        is_success: false,
        error: 'Endpoint not found'
    });
};

module.exports = {
    validateDataArray,
    errorHandler,
    notFoundHandler
};
