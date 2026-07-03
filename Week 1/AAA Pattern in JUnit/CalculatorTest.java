import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int firstNumber = 15;
        int secondNumber = 25;

        // Act
        int result = calculator.add(firstNumber, secondNumber);

        // Assert
        assertEquals(40, result);
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown completed");
    }
}
