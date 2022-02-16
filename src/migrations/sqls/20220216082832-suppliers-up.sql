CREATE TABLE "suppliers"(
    "id" BigInt NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at"  Timestamp( 0 ) Without Time Zone,
    "updated_at"  Timestamp( 0 ) Without Time Zone,
    PRIMARY KEY ( "id" )
);

ALTER TABLE "expenses"
	ADD CONSTRAINT "expenses_supplier_id_foreign" FOREIGN KEY ( "supplier_id" )
	REFERENCES "suppliers" ( "id" ) MATCH SIMPLE
	ON DELETE Cascade
	ON UPDATE No Action;