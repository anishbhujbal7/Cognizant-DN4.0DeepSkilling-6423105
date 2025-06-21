public class TestLogger {
    
    public static void main(String[] args) {
        
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        
        logger1.log("Message from logger1");
        logger2.log("Message from logger2");

        if (logger1 == logger2) {
            System.out.println("Singleton pattern working correctly - same instance used");
        } else{
            System.out.println("Different instances created. Singleton failed.");
        }
    }
}