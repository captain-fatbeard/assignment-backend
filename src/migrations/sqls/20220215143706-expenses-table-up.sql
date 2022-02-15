CREATE TABLE expenses(
    id SERIAL PRIMARY KEY,
    supplier_id INT,
    name VARCHAR(50) NOT NULL,
    value INT NOT NULL,
    is_paid BOOLEAN DEFAULT false,
    paid_at TIMESTAMP,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
)



