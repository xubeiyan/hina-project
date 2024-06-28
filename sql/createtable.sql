/* PostgreSQL */
CREATE TABLE sheet {
    id UUID PRIMARY KEY,
    end_time TIMESTAMP,
    get_result_limit_time TIMESTAMP,
    published INT,
    content TEXT,
    visit_code VARCHAR,
    create_time TIMESTAMP
}

CREATE TABLE result {
    id UUID PRIMARY KEY,
    sheet_id UUID REFERENCES sheet (id),
    result_json TEXT,
    create_time TIMESTAMP
}