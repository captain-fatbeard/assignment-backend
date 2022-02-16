CREATE TABLE "suppliers"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "created_at"  Timestamp( 0 ) Without Time Zone,
    "updated_at"  Timestamp( 0 ) Without Time Zone
);

CREATE TABLE "expenses"(
    "id" SERIAL PRIMARY KEY,
    "supplier_id" INT,
    "name" VARCHAR(50) NOT NULL,
    "value" INT NOT NULL,
    "is_paid" BOOLEAN DEFAULT false,
    "paid_at"  Timestamp( 0 ) Without Time Zone,
    "created_at"  Timestamp( 0 ) Without Time Zone,
    "updated_at"  Timestamp( 0 ) Without Time Zone
);

ALTER TABLE "expenses"
	ADD CONSTRAINT "expenses_supplier_id_foreign" FOREIGN KEY ( "supplier_id" )
	REFERENCES "suppliers" ( "id" ) MATCH SIMPLE
	ON DELETE Cascade
	ON UPDATE No Action;