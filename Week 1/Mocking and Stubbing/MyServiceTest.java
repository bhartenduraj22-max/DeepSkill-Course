import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testFetchData() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Define mock behavior
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service object
        MyService service = new MyService(mockApi);

        // Call the method
        String result = service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);
    }
}
