CREATE TABLE admins (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    username CHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    registrant_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (registrant_id) REFERENCES admins(admin_id)
);

CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE competitors (
    competitor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    member_id INT,
    skill_id INT,
    created_at VARCHAR(100) DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);

CREATE TABLE results (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    competitor_id INT,
    score DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (competitor_id) REFERENCES competitors(competitor_id)
);
