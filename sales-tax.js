var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function getTaxRate(province){
  // grabs appropriate Sales Tax Rate
  return salesTaxRates[province];
}

function getSales(sales){
  // calculates total sales in province
  var income = 0;
  for (i = 0; i < sales.length; i++) {
    income += sales[i];
  };
  return income;
}

function getTaxes(sales, taxRate){
  //calculates tax rate on sales
  return sales * taxRate;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var create = function(business){
    totals[business.name] = {
      totalSales: getSales(business.sales),
      totalTaxes: getTaxes(getSales(business.sales), getTaxRate(business.province))
    };
  };
  var totals = {};
  var i = 0;
  for (name in companySalesData){
    
    if (!totals[companySalesData[name].name]) {
      create(companySalesData[name]); 
    } else {
      totals[companySalesData[name].name].totalSales += getSales(companySalesData[name].sales);
      totals[companySalesData[name].name].totalTaxes += getTaxes(getSales(companySalesData[name].sales), getTaxRate(companySalesData[name].province));

    }
  };
  console.log(totals);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/