const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-Memory Data Store (Or PostgreSQL via Supabase)
let activities = [];

const EMISSION_FACTORS = {
    transportation: 0.21,
    energy: 0.475,
    diet: 3.5,
    waste: 0.5
};

// GET /api/activities - Retrieve all activities
app.get('/api/activities', (req, res) => {
    res.json({ success: true, count: activities.length, data: activities });
});

// POST /api/activities - Add new activity entry
app.post('/api/activities', (req, res) => {
    const { category, typeName, quantity, unit, date } = req.body;
    
    if (!category || !quantity) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const factor = EMISSION_FACTORS[category] || 0.2;
    const co2 = parseFloat((quantity * factor).toFixed(2));

    const newActivity = {
        id: Date.now().toString(),
        category,
        typeName: typeName || category,
        quantity: parseFloat(quantity),
        unit: unit || 'units',
        co2,
        date: date || new Date().toISOString().split('T')[0]
    };

    activities.unshift(newActivity);
    res.status(201).json({ success: true, data: newActivity });
});

// GET /api/summary - Aggregate metrics for grading scripts
app.get('/api/summary', (req, res) => {
    const totalCO2 = activities.reduce((sum, a) => sum + a.co2, 0);
    const totalTrees = (totalCO2 / 21.7).toFixed(1);

    res.json({
        success: true,
        summary: {
            total_co2_kg: parseFloat(totalCO2.toFixed(2)),
            trees_equivalent: parseFloat(totalTrees),
            total_entries: activities.length
        }
    });
});

// DELETE /api/activities - Clear history
app.delete('/api/activities', (req, res) => {
    activities = [];
    res.json({ success: true, message: 'All activity records cleared' });
});

app.listen(PORT, () => {
    console.log(`EcoPulse Server running on port ${PORT}`);
});
