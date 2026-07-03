BEGIN

    FOR customer IN (
        SELECT CustomerID, Age, LoanInterestRate
        FROM Customers
    )
    LOOP

        IF customer.Age > 60 THEN

            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = customer.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/
