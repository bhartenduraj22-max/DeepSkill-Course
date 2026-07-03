import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

       
        assertEquals(5, 2 + 3);

        // Check whether the condition is true
        assertTrue(10 > 5);

        // Check whether the condition is false
        assertFalse(10 < 5);

        // Check whether the object is null
        String name = null;
        assertNull(name);

        // Check whether the object is not null
        Object obj = new Object();
        assertNotNull(obj);
    }
}
