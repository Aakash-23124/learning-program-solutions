import java.util.*;

public class FinancialForecast {

    // Method to predict future value using recursion
    public static double getPrediction(double[] data, int yearsAhead) {
        double[] diff = new double[data.length - 1];

        // Calculate step differences
        for (int i = 0; i < data.length - 1; i++) {
            diff[i] = data[i + 1] - data[i];
        }

        // Check if all differences are equal
        boolean isSame = true;
        for (int i = 1; i < diff.length; i++) {
            if (diff[i] != diff[0]) {
                isSame = false;
                break;
            }
        }

        double step;
        if (isSame) {
            step = diff[0];
        } else {
            // Use most frequent difference
            Map<Double, Integer> map = new HashMap<>();
            for (double d : diff) {
                map.put(d, map.getOrDefault(d, 0) + 1);
            }
            step = diff[0];
            int max = 0;
            for (Map.Entry<Double, Integer> entry : map.entrySet()) {
                if (entry.getValue() > max) {
                    max = entry.getValue();
                    step = entry.getKey();
                }
            }
        }

        // Call recursive forecast method
        return forecastNext(data[data.length - 1], step, yearsAhead);
    }

    // Recursive helper function
    private static double forecastNext(double current, double step, int left) {
        if (left == 0)
            return current;
        return forecastNext(current + step, step, left - 1);
    }

    // Main method
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many past financial values? ");
        int count = sc.nextInt();

        double[] values = new double[count];
        System.out.println("Enter those values:");
        for (int i = 0; i < count; i++) {
            values[i] = sc.nextDouble();
        }

        System.out.print("Enter how many years ahead to forecast: ");
        int ahead = sc.nextInt();

        double result = getPrediction(values, ahead);
        System.out.printf("Forecasted value after %d years: %.2f%n", ahead, result);
        sc.close();
    }
}
