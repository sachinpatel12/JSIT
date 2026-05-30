let threeDArr = [
  [
    [1,2],
    [3,4]
  ],
  [
    [5,6]
  ]
];
flatten3dArray(threeDArr)
function flatten3dArray(threeDArr){
 let result = [];

 for(level1 of threeDArr){
    for(level2 of level1){
        for(level3 of level2){
            result.push(level3);
        }
    }
 }
 console.log(result)
}