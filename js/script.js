// selectChange is used to change the label and also to initiate the calculate function by calling it
function num1selectChange() {
  let selectedUnit = document.querySelector("#num1Select").value;
  document.querySelector("#num1Label").innerHTML = "From " + selectedUnit;
  calculate();
}

function num2selectChange() {
  let selectedUnit = document.querySelector("#num2Select").value;
  document.querySelector("#num2Label").innerHTML = "To " + selectedUnit;
  calculate();
}

// resets the label
function resetLabel() {
  document.querySelector("#num1Label").innerHTML = "From ";
  document.querySelector("#num2Label").innerHTML = "To ";
}

// just multiplied the inputvalue from num1 to a possible unit selected by the user, was able to do it by declaring the values of each possible units that the user will be selecting and doing their own different formulas.

function calculate() {
  let num1SelectedUnit = document.querySelector("#num1Select").value;
  let num2SelectedUnit = document.querySelector("#num2Select").value;
  let inputValue = document.querySelector("#num1").value;

  // Kilogram to
  let KilogramToKilogram = inputValue * 1;
  let KilogramToGram = inputValue * 1000;
  let KilogramToMilligram = inputValue * 1000000;
  let KilogramToMetricton = inputValue * 0.001;
  let KilogramToLongton = inputValue * 0.0009842073;
  let KilogramToShortton = inputValue * 0.0011023122;
  let KilogramToPound = inputValue * 2.2046244202;
  let KilogramToOunce = inputValue * 35.273990723;
  let KilogramToCarrat = inputValue * 5000;
  let KilogramToAmu = inputValue * 6.022136652e26;

  // gram to
  let gramToKilogram = inputValue * 0.001;
  let gramToGram = inputValue * 1;
  let gramToMilligram = inputValue * 1000;
  let gramToMetricton = inputValue * 0.000001;
  let gramToLongton = inputValue * 9.842073304e-7;
  let gramToShortton = inputValue * 0.0000011023;
  let gramToPound = inputValue * 0.0022046244;
  let gramToOunce = inputValue * 0.0352739907;
  let gramToCarrat = inputValue * 5;
  let gramToAmu = inputValue * 6.022136652e23;

  // milligram to
  let milligramToKilogram = inputValue * 0.000001;
  let milligramToGram = inputValue * 0.001;
  let milligramToMilligram = inputValue * 1;
  let milligramToMetricton = inputValue * 9.999999999e-10;
  let milligramToLongton = inputValue * 9.842073304e-10;
  let milligramToShortton = inputValue * 1.10231221e-9;
  let milligramToPound = inputValue * 0.0000022046;
  let milligramToOunce = inputValue * 0.000035274;
  let milligramToCarrat = inputValue * 0.005;
  let milligramToAmu = inputValue * 602213665200000000000;

  // metric ton to
  let metrictonToKilogram = inputValue * 1000;
  let metrictonToGram = inputValue * 1000000;
  let metrictonToMilligram = inputValue * 1000000000;
  let metrictonToMetricton = inputValue * 1;
  let metrictonToLongton = inputValue * 0.9842073304;
  let metrictonToShortton = inputValue * 1.1023122101;
  let metrictonToPound = inputValue * 2204.6244202;
  let metrictonToOunce = inputValue * 35273.990723;
  let metrictonToCarrat = inputValue * 5000000;
  let metrictonToAmu = inputValue * 6.022136652e29;

  // long ton to
  let longtonToKilogram = inputValue * 1016.04608;
  let longtonToGram = inputValue * 1016046.08;
  let longtonToMilligram = inputValue * 1016046080;
  let longtonToMetricton = inputValue * 1.01604608;
  let longtonToLongton = inputValue * 1;
  let longtonToShortton = inputValue * 1.12;
  let longtonToPound = inputValue * 2240;
  let longtonToOunce = inputValue * 35840;
  let longtonToCarrat = inputValue * 5080230.4;
  let longtonToAmu = inputValue * 6.118768338e29;

  // short ton to
  let shorttonToKilogram = inputValue * 907.184;
  let shorttonToGram = inputValue * 907184;
  let shorttonToMilligram = inputValue * 907184000;
  let shorttonToMetricton = inputValue * 0.907184;
  let shorttonToLongton = inputValue * 0.8928571429;
  let shorttonToShortton = inputValue * 1;
  let shorttonToPound = inputValue * 2000;
  let shorttonToOunce = inputValue * 32000;
  let shorttonToCarrat = inputValue * 4535920;
  let shorttonToAmu = inputValue * 5.463186016e29;

  // pound to
  let poundToKilogram = inputValue * 0.453592;
  let poundToGram = inputValue * 453.592;
  let poundToMilligram = inputValue * 453592;
  let poundToMetricton = inputValue * 0.000453592;
  let poundToLongton = inputValue * 0.0004464286;
  let poundToShortton = inputValue * 0.0005;
  let poundToPound = inputValue * 1;
  let poundToOunce = inputValue * 16;
  let poundToCarrat = inputValue * 2267.96;
  let poundToAmu = inputValue * 2.731593008e26;

  // ounce to
  let ounceToKilogram = inputValue * 0.0283495;
  let ounceToGram = inputValue * 28.3495;
  let ounceToMilligram = inputValue * 28349.5;
  let ounceToMetricton = inputValue * 0.0000283495;
  let ounceToLongton = inputValue * 0.0000279018;
  let ounceToShortton = inputValue * 0.00003125;
  let ounceToPound = inputValue * 0.0625;
  let ounceToOunce = inputValue * 1;
  let ounceToCarrat = inputValue * 141.7475;
  let ounceToAmu = inputValue * 1.70724563e25;

  // carrat to
  let carratToKilogram = inputValue * 0.0002;
  let carratToGram = inputValue * 0.2;
  let carratToMilligram = inputValue * 200;
  let carratToMetricton = inputValue * 2e-7;
  let carratToLongton = inputValue * 1.96841466e-7;
  let carratToShortton = inputValue * 2.20462442e-7;
  let carratToPound = inputValue * 0.0004409249;
  let carratToOunce = inputValue * 0.0070547981;
  let carratToCarrat = inputValue * 1;
  let carratToAmu = inputValue * 1.20442733e23;

  // amu to
  let amuToKilogram = inputValue * 1.660540199e-27;
  let amuToGram = inputValue * 1.660540199e-24;
  let amuToMilligram = inputValue * 1.660540199e-21;
  let amuToMetricton = inputValue * 1.660540199e-30;
  let amuToLongton = inputValue * 1.634315837e-30;
  let amuToShortton = inputValue * 1.830433737e-30;
  let amuToPound = inputValue * 3.660867475e-27;
  let amuToOunce = inputValue * 5.85738796e-26;
  let amuToCarrat = inputValue * 8.302700999e-24;
  let amuToAmu = inputValue * 1;

  // for it to be able to know what the units that the user selected, the concatenated value of num1selectedunit and num2selectedunit is being checked uisng switch method, all the possible combination of concatenated units are in the case, which makes the program knows what specific formula it will use

  switch (num1SelectedUnit + num2SelectedUnit) {
    // Kilogram to
    case "KilogramKilogram":
      document.querySelector("#num2").value = KilogramToKilogram;
      break;
    case "KilogramGram":
      document.querySelector("#num2").value = KilogramToGram;
      break;
    case "KilogramMilligram":
      document.querySelector("#num2").value = KilogramToMilligram;
      break;
    case "KilogramMetric Ton":
      document.querySelector("#num2").value = KilogramToMetricton;
      break;
    case "KilogramLong Ton":
      document.querySelector("#num2").value = KilogramToLongton;
      break;
    case "KilogramShort Ton":
      document.querySelector("#num2").value = KilogramToShortton;
      break;
    case "KilogramPound":
      document.querySelector("#num2").value = KilogramToPound;
      break;
    case "KilogramOunce":
      document.querySelector("#num2").value = KilogramToOunce;
      break;
    case "KilogramCarrat":
      document.querySelector("#num2").value = KilogramToCarrat;
      break;
    case "KilogramAtomic Mass Unit":
      document.querySelector("#num2").value = KilogramToAmu;
      break;

    // gram to
    case "GramKilogram":
      document.querySelector("#num2").value = gramToKilogram;
      break;
    case "GramGram":
      document.querySelector("#num2").value = gramToGram;
      break;
    case "GramMilligram":
      document.querySelector("#num2").value = gramToMilligram;
      break;
    case "GramMetric Ton":
      document.querySelector("#num2").value = gramToMetricton;
      break;
    case "GramLong Ton":
      document.querySelector("#num2").value = gramToLongton;
      break;
    case "GramShort Ton":
      document.querySelector("#num2").value = gramToShortton;
      break;
    case "GramPound":
      document.querySelector("#num2").value = gramToPound;
      break;
    case "GramOunce":
      document.querySelector("#num2").value = gramToOunce;
      break;
    case "GramCarrat":
      document.querySelector("#num2").value = gramToCarrat;
      break;
    case "GramAtomic Mass Unit":
      document.querySelector("#num2").value = gramToAmu;
      break;

    // Milligram to
    case "MilligramKilogram":
      document.querySelector("#num2").value = milligramToKilogram;
      break;
    case "MilligramGram":
      document.querySelector("#num2").value = milligramToGram;
      break;
    case "MilligramMilligram":
      document.querySelector("#num2").value = milligramToMilligram;
      break;
    case "MilligramMetric Ton":
      document.querySelector("#num2").value = milligramToMetricton;
      break;
    case "MilligramLong Ton":
      document.querySelector("#num2").value = milligramToLongton;
      break;
    case "MilligramShort Ton":
      document.querySelector("#num2").value = milligramToShortton;
      break;
    case "MilligramPound":
      document.querySelector("#num2").value = milligramToPound;
      break;
    case "MilligramOunce":
      document.querySelector("#num2").value = milligramToOunce;
      break;
    case "MilligramCarrat":
      document.querySelector("#num2").value = milligramToCarrat;
      break;
    case "MilligramAtomic Mass Unit":
      document.querySelector("#num2").value = milligramToAmu;
      break;

    // Metric Ton to
    case "Metric TonKilogram":
      document.querySelector("#num2").value = metrictonToKilogram;
      break;
    case "Metric TonGram":
      document.querySelector("#num2").value = metrictonToGram;
      break;
    case "Metric TonMilligram":
      document.querySelector("#num2").value = metrictonToMilligram;
      break;
    case "Metric TonMetric Ton":
      document.querySelector("#num2").value = metrictonToMetricton;
      break;
    case "Metric TonLong Ton":
      document.querySelector("#num2").value = metrictonToLongton;
      break;
    case "Metric TonShort Ton":
      document.querySelector("#num2").value = metrictonToShortton;
      break;
    case "Metric TonPound":
      document.querySelector("#num2").value = metrictonToPound;
      break;
    case "Metric TonOunce":
      document.querySelector("#num2").value = metrictonToOunce;
      break;
    case "Metric TonCarrat":
      document.querySelector("#num2").value = metrictonToCarrat;
      break;
    case "Metric TonAtomic Mass Unit":
      document.querySelector("#num2").value = metrictonToAmu;
      break;

    // Long Ton to
    case "Long TonKilogram":
      document.querySelector("#num2").value = longtonToKilogram;
      break;
    case "Long TonGram":
      document.querySelector("#num2").value = longtonToGram;
      break;
    case "Long TonMilligram":
      document.querySelector("#num2").value = longtonToMilligram;
      break;
    case "Long TonMetric Ton":
      document.querySelector("#num2").value = longtonToMetricton;
      break;
    case "Long TonLong Ton":
      document.querySelector("#num2").value = longtonToLongton;
      break;
    case "Long TonShort Ton":
      document.querySelector("#num2").value = longtonToShortton;
      break;
    case "Long TonPound":
      document.querySelector("#num2").value = longtonToPound;
      break;
    case "Long TonOunce":
      document.querySelector("#num2").value = longtonToOunce;
      break;
    case "Long TonCarrat":
      document.querySelector("#num2").value = longtonToCarrat;
      break;
    case "Long TonAtomic Mass Unit":
      document.querySelector("#num2").value = longtonToAmu;
      break;

    // Short Ton to
    case "Short TonKilogram":
      document.querySelector("#num2").value = shorttonToKilogram;
      break;
    case "Short TonGram":
      document.querySelector("#num2").value = shorttonToGram;
      break;
    case "Short TonMilligram":
      document.querySelector("#num2").value = shorttonToMilligram;
      break;
    case "Short TonMetric Ton":
      document.querySelector("#num2").value = shorttonToMetricton;
      break;
    case "Short TonLong Ton":
      document.querySelector("#num2").value = shorttonToLongton;
      break;
    case "Short TonShort Ton":
      document.querySelector("#num2").value = shorttonToShortton;
      break;
    case "Short TonPound":
      document.querySelector("#num2").value = shorttonToPound;
      break;
    case "Short TonOunce":
      document.querySelector("#num2").value = shorttonToOunce;
      break;
    case "Short TonCarrat":
      document.querySelector("#num2").value = shorttonToCarrat;
      break;
    case "Short TonAtomic Mass Unit":
      document.querySelector("#num2").value = shorttonToAmu;
      break;

    // Pound to
    case "PoundKilogram":
      document.querySelector("#num2").value = poundToKilogram;
      break;
    case "PoundGram":
      document.querySelector("#num2").value = poundToGram;
      break;
    case "PoundMilligram":
      document.querySelector("#num2").value = poundToMilligram;
      break;
    case "PoundMetric Ton":
      document.querySelector("#num2").value = poundToMetricton;
      break;
    case "PoundLong Ton":
      document.querySelector("#num2").value = poundToLongton;
      break;
    case "PoundShort Ton":
      document.querySelector("#num2").value = poundToShortton;
      break;
    case "PoundPound":
      document.querySelector("#num2").value = poundToPound;
      break;
    case "PoundOunce":
      document.querySelector("#num2").value = poundToOunce;
      break;
    case "PoundCarrat":
      document.querySelector("#num2").value = poundToCarrat;
      break;
    case "PoundAtomic Mass Unit":
      document.querySelector("#num2").value = poundToAmu;
      break;

    // Ounce to
    case "OunceKilogram":
      document.querySelector("#num2").value = ounceToKilogram;
      break;
    case "OunceGram":
      document.querySelector("#num2").value = ounceToGram;
      break;
    case "OunceMilligram":
      document.querySelector("#num2").value = ounceToMilligram;
      break;
    case "OunceMetric Ton":
      document.querySelector("#num2").value = ounceToMetricton;
      break;
    case "OunceLong Ton":
      document.querySelector("#num2").value = ounceToLongton;
      break;
    case "OunceShort Ton":
      document.querySelector("#num2").value = ounceToShortton;
      break;
    case "OuncePound":
      document.querySelector("#num2").value = ounceToPound;
      break;
    case "OunceOunce":
      document.querySelector("#num2").value = ounceToOunce;
      break;
    case "OunceCarrat":
      document.querySelector("#num2").value = ounceToCarrat;
      break;
    case "OunceAtomic Mass Unit":
      document.querySelector("#num2").value = ounceToAmu;
      break;

    // Carrat to
    case "CarratKilogram":
      document.querySelector("#num2").value = carratToKilogram;
      break;
    case "CarratGram":
      document.querySelector("#num2").value = carratToGram;
      break;
    case "CarratMilligram":
      document.querySelector("#num2").value = carratToMilligram;
      break;
    case "CarratMetric Ton":
      document.querySelector("#num2").value = carratToMetricton;
      break;
    case "CarratLong Ton":
      document.querySelector("#num2").value = carratToLongton;
      break;
    case "CarratShort Ton":
      document.querySelector("#num2").value = carratToShortton;
      break;
    case "CarratPound":
      document.querySelector("#num2").value = carratToPound;
      break;
    case "CarratOunce":
      document.querySelector("#num2").value = carratToOunce;
      break;
    case "CarratCarrat":
      document.querySelector("#num2").value = carratToCarrat;
      break;
    case "CarratAtomic Mass Unit":
      document.querySelector("#num2").value = carratToAmu;
      break;

    // Atomic Mass Unit to
    case "Atomic Mass UnitKilogram":
      document.querySelector("#num2").value = amuToKilogram;
      break;
    case "Atomic Mass UnitGram":
      document.querySelector("#num2").value = amuToGram;
      break;
    case "Atomic Mass UnitMilligram":
      document.querySelector("#num2").value = amuToMilligram;
      break;
    case "Atomic Mass UnitMetric Ton":
      document.querySelector("#num2").value = amuToMetricton;
      break;
    case "Atomic Mass UnitLong Ton":
      document.querySelector("#num2").value = amuToLongton;
      break;
    case "Atomic Mass UnitShort Ton":
      document.querySelector("#num2").value = amuToShortton;
      break;
    case "Atomic Mass UnitPound":
      document.querySelector("#num2").value = amuToPound;
      break;
    case "Atomic Mass UnitOunce":
      document.querySelector("#num2").value = amuToOunce;
      break;
    case "Atomic Mass UnitCarrat":
      document.querySelector("#num2").value = amuToCarrat;
      break;
    case "Atomic Mass UnitAtomic Mass Unit":
      document.querySelector("#num2").value = amuToAmu;
      break;

    default:
  }
}
