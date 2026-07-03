CREATE OR REPLACE PROCEDURE TransferFunds(

    fromAccount IN NUMBER,
    toAccount IN NUMBER,
    amount IN NUMBER

)
AS

    currentBalance NUMBER;

BEGIN

    SELECT Balance
    INTO currentBalance
    FROM Accounts
    WHERE AccountID = fromAccount;

    IF currentBalance >= amount THEN

        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = fromAccount;

        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Amount transferred successfully.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;

END;
/
