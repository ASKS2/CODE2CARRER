-- EcoPulse Enterprise Database Schema (PostgreSQL / Supabase)

CREATE TABLE IF NOT EXISTS activities (
    id VARCHAR(64) PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    type_name VARCHAR(100) NOT NULL,
    quantity NUMERIC(10, 2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    co2_kg NUMERIC(10, 2) NOT NULL,
    activity_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_settings (
    user_id VARCHAR(64) PRIMARY KEY DEFAULT 'default_user',
    weekly_target NUMERIC(10, 2) DEFAULT 100.00,
    week_mode VARCHAR(20) DEFAULT 'rolling',
    nudge_mode VARCHAR(20) DEFAULT 'constructive'
);

-- Index for optimized date range queries
CREATE INDEX IF NOT EXISTS idx_activities_date ON activities(activity_date);
