CREATE DATABASE IF NOT EXISTS net_nut_db;

USE net_nut_db;

CREATE TABLE IF NOT EXISTS plans (
    plan_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    type ENUM('Monthly', 'Yearly') NOT NULL,
    cost DECIMAL(6, 2) NOT NULL,
    details VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS add_ons (
    add_on_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    monthly_price DECIMAL(6, 2) NOT NULL,
    yearly_price DECIMAL(6, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_submissions (
    submission_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15),
    plan_id INT NOT NULL,
    FOREIGN KEY (plan_id) REFERENCES plans(plan_id),
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_submission_add_ons (
    submission_id INT,
    add_on_id INT,
    PRIMARY KEY (submission_id, add_on_id),
    FOREIGN KEY (submission_id) REFERENCES user_submissions(submission_id),
    FOREIGN KEY (add_on_id) REFERENCES add_ons(add_on_id)
);

INSERT INTO plans (name, type, cost, details) VALUES
('Arcade', 'Monthly', 9.00, NULL),
('Advanced', 'Monthly', 12.00, NULL),
('Pro', 'Monthly', 15.00, NULL),
('Arcade', 'Yearly', 90.00, '2 months free'),
('Advanced', 'Yearly', 120.00, '2 months free'),
('Pro', 'Yearly', 150.00, '2 months free');

INSERT INTO add_ons (title, description, monthly_price, yearly_price) VALUES
('Online Service', 'Access to multiplayer games', 1.00, 10.00),
('Large Storage', 'Extra 1TB of cloud save', 2.00, 20.00),
('Customizable Profile', 'Custom theme on your profile', 2.00, 20.00);