itemNames = [
"FlawedRubyGemstone_6",
"FlawedRubyGemstone_12",
"FlawedRubyGemstone_24",
"FlawedRubyGemstone_40",
"FineRubyGemstone_1",
"FlawlessRubyGemstone_1",
"FlawedAmethystGemstone_6",
"FlawedAmethystGemstone_12",
"FlawedAmethystGemstone_24",
"FlawedAmethystGemstone_40",
"FineAmethystGemstone_1",
"FlawlessAmethystGemstone_1",
"FlawedJadeGemstone_6",
"FlawedJadeGemstone_12",
"FlawedJadeGemstone_24",
"FlawedJadeGemstone_40",
"FineJadeGemstone_1",
"FlawlessJadeGemstone_1",
"FlawedAmberGemstone_6",
"FlawedAmberGemstone_12",
"FlawedAmberGemstone_24",
"FlawedAmberGemstone_40",
"FineAmberGemstone_1",
"FlawlessAmberGemstone_1",
"FlawedSapphireGemstone_6",
"FlawedSapphireGemstone_12",
"FlawedSapphireGemstone_24",
"FlawedSapphireGemstone_40",
"FineSapphireGemstone_1",
"FlawlessSapphireGemstone_1",
"FlawedTopazGemstone_6",
"FlawedTopazGemstone_12",
"FlawedTopazGemstone_24",
"FlawedTopazGemstone_40",
"FineTopazGemstone_1",
"FlawlessTopazGemstone_1",
"FlawedJasperGemstone_6",
"FlawedJasperGemstone_12",
"FlawedJasperGemstone_24",
"FlawedJasperGemstone_32",
"FineJasperGemstone_1",
"FlawlessJasperGemstone_1",
"DivanFragment_1",
"PrehistoricEgg_1",
"OilBarrel_1",
"Helix_1",
"RubyCrystal_1",
"JasperCrystal_1",
"Pickonimbus2000_1",
"Bob_omb_16",
"Jaderald_1",
"WhishingCompass_1",
"Treasureite_5",
"Treasureite_10",
"RecallPotion_1",
"GemstoneMixture_1",
"Fortune4Book_1",
"QuickClaw_1",
"PreciousPearl_1",
"DivanAlloy_1"];

itemWeights = [
65898.944,
32949.472,
16474.739,
6589.8944,
2965.898944,
49.4242,
65898.944,
32949.472,
16474.739,
6589.8944,
2965.898944,
49.4242,
65898.944,
32949.472,
16474.739,
6589.8944,
2965.898944,
49.4242,
65898.944,
32949.472,
16474.739,
6589.8944,
2965.898944,
49.4242,
65898.944,
32949.472,
16474.739,
6589.8944,
2965.898944,
49.4242,
65898.944,
32949.472,
16474.739,
6589.8944,
2965.898944,
49.4242,
32949.472,
16474.736,
6589.8944,
2306.463,
658.9894,
16.4747,
19769.6832,
16474.736,
32949.472,
13179.7888,
8237.368,
8237.368,
32949.472,
39539.3664,
4777.6734,
1647.4736,
6589.8944,
659.5327,
823.7368,
2306.463,
164.7474,
823.7368,
1.25];

var totaltimesrolled = 0;

function WeightedRandom(itemNames, weights) {
  var i;
  temp_weight = [];

  for (i = 0; i < weights.length; i++) {
    temp_weight[i] = weights[i];
  } 
  for (i = 0; i < temp_weight.length; i++)
    temp_weight[i] += (temp_weight[i - 1] || 0);
  var random = Math.random() * temp_weight[temp_weight.length - 1];
  
  for(i = 0; i < temp_weight.length; i++) {
    if (temp_weight[i] > random)
      break;
    }
  return itemNames[i];
}

$(function () {
  $("#mainbuttonid").on('click', function(event) {
    timesrolled = Math.random() * (20 - 14) + 14;
    timesrolled = Math.round(timesrolled);
    console.log(timesrolled);
    while (timesrolled > 0) {
      var finalresults = WeightedRandom(itemNames, itemWeights);
      console.log(finalresults);
      timesrolled --;
    }
    console.log("1 Fine Ruby")
    console.log("1 Fine Amethyst")
    console.log("1 Fine Jade")
    console.log("1 Fine Amber")
    console.log("1 Fine Topaz")
    console.log("1 Fine Jasper")
    console.log("1 Fine Opal")
    totaltimesrolled ++;
    alert(totaltimesrolled);
  });
});

//FlawedRubyGemstone_6 = 6.5898944
//FlawedRubyGemstone_12 = 3.2949472
//FlawedRubyGemstone_24 = 1.6474739
//FlawedRubyGemstone_40 = 0.65898944
//FineRubyGemstone_1 = 0.2965898944
//FlawlessRubyGemstone_1 = 0.00494242
//FlawedAmethystGemstone_6 = 6.5898944
//FlawedAmethystGemstone_12 = 3.2949472
//FlawedAmethystGemstone_24 = 1.6474739
//FlawedAmethystGemstone_40 = 0.65898944
//FineAmethystGemstone_1 = 0.2965898944
//FlawlessAmethystGemstone_1 = 0.00494242
//FlawedJadeGemstone_6 = 6.5898944
//FlawedJadeGemstone_12 = 3.2949472
//FlawedJadeGemstone_24 = 1.6474739
//FlawedJadeGemstone_40 = 0.65898944
//FineJadeGemstone_1 = 0.2965898944
//FlawlessJadeGemstone_1 = 0.00494242
//FlawedAmberGemstone_6 = 6.5898944
//FlawedAmberGemstone_12 = 3.2949472
//FlawedAmberGemstone_24 = 1.6474739
//FlawedAmberGemstone_40 = 0.65898944
//FineAmberGemstone_1 = 0.2965898944
//FlawlessAmberGemstone_1 = 0.00494242
//FlawedSapphireGemstone_6 = 6.5898944
//FlawedSapphireGemstone_12 = 3.2949472
//FlawedSapphireGemstone_24 = 1.6474739
//FlawedSapphireGemstone_40 = 0.65898944
//FineSapphireGemstone_1 = 0.2965898944
//FlawlessSapphireGemstone_1 = 0.00494242
//FlawedTopazGemstone_6 = 6.5898944
//FlawedTopazGemstone_12 = 3.2949472
//FlawedTopazGemstone_24 = 1.6474739
//FlawedTopazGemstone_40 = 0.65898944
//FineTopazGemstone_1 = 0.2965898944
//FlawlessTopazGemstone_1 = 0.00494242
//FlawedJasperGemstone_6 = 3.2949472
//FlawedJasperGemstone_12 = 1.6474736
//FlawedJasperGemstone_24 = 0.65898944
//FlawedJasperGemstone_32 = 0.2306463
//FineJasperGemstone_1 = 0.06589894
//FlawlessJasperGemstone_1 = 0.00164747
//DivanFragment_1 = 1.97696832
//PrehistoricEgg_1 = 1.6474736
//OilBarrel_1 = 3.2949472
//Helix_1 = 1.31797888
//RubyCrystal_1 = 0.8237368
//JasperCrystal_1 = 0.8237368
//Pickonimbus2000_1 = 3.2949472
//Bob_omb_16 = 3.95393664
//Jaderald_1 = 0.47776734
//WhishingCompass_1 = 0.16474736
//Treasureite_5 = 0.65898944
//Treasureite_10 = 0.06595327
//RecallPotion_1 = 0.08237368
//GemstoneMixture_1 = 0.2306463
//Fortune4Book_1 = 0.2306463
//QuickClaw_1 = 0.01647474
//PreciousPearl_1 = 0.08237368
//DivanAlloy_1 = 0.000125