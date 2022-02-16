CREATE TABLE "expenses"(
    "id" BigInt NOT NULL,
    "supplier_id" INT,
    "name" VARCHAR(50) NOT NULL,
    "value" INT NOT NULL,
    "is_paid" BOOLEAN DEFAULT false,
    "paid_at"  Timestamp( 0 ) Without Time Zone,
    "created_at"  Timestamp( 0 ) Without Time Zone,
    "updated_at"  Timestamp( 0 ) Without Time Zone,
    PRIMARY KEY ( "id" )
);

