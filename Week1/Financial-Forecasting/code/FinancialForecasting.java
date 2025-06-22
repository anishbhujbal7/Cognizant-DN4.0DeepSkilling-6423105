class FinancialForecasting {

    public static double predictNextValue(double[] pastValues) {
        if (pastValues.length < 2) {
            return pastValues[0];
        }

       
        double totalGrowth = 0.0;
        for (int i = 1; i < pastValues.length; i++) {
            totalGrowth += (pastValues[i] - pastValues[i - 1]) / pastValues[i - 1];
        }

        double averageGrowthRate = totalGrowth / (pastValues.length - 1);
        double lastValue = pastValues[pastValues.length - 1];

        
        double predictedValue = lastValue * (1 + averageGrowthRate);
        return predictedValue;
    }

    public static void main(String[] args) {
        double[] stockPrices = {100, 105, 110, 115};

        double nextPrice = predictNextValue(stockPrices);
        System.out.printf("Next predicted stock price: $%.2f%n", nextPrice);
    }
}
