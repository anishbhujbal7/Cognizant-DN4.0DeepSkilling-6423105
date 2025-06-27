import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAddWithAAAPattern() {
        int firstNumber = 10;
        int secondNumber = 20;
        int expectedResult = 30;

        int actualResult = calculator.add(firstNumber, secondNumber);

        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testSubtractWithAAAPattern() {
        int firstNumber = 50;
        int secondNumber = 30;
        int expectedResult = 20;

        int actualResult = calculator.subtract(firstNumber, secondNumber);

        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testMultiplyWithAAAPattern() {
        int firstNumber = 6;
        int secondNumber = 7;
        int expectedResult = 42;

        int actualResult = calculator.multiply(firstNumber, secondNumber);

        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testDivideWithAAAPattern() {
        int dividend = 100;
        int divisor = 5;
        int expectedResult = 20;

        int actualResult = calculator.divide(dividend, divisor);

        assertEquals(expectedResult, actualResult);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calculator.divide(5, 0);
    }
    
}