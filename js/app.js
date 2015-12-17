var data;
var allProducts =[];
var productNames= ['bag','banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass']
function Product (imgName, path){
  this.imgName = imgName;
  this.path=path;
  this.tally=0;
  this.views=0;
  data.labels.push(imgName);
  data.datasets[0].data.push(0);
  allProducts.push(this);
}
function buildAlbum(){
  for (var i=0; i< productNames.length; i++){
    new Product(productNames[i], 'images/' + productNames[i] + '.jpg')
  }
  localStorage.setItem('allProducts',JSON.stringify(allProducts));
};
var productRank = {
  totalClicks:0,
  leftObj:null,
  midObj:null,
  rightObj:null,
  barChart:null,

  leftEl:document.getElementById('img1'),
  midEl:document.getElementById('img2') ,
  rightEl:document.getElementById('img3'),
  resultsEl: document.getElementById('results'),

  getRandomIndex: function(){
    return Math.floor(Math.random() * productNames.length);
  },

  displayImages: function(){
    productRank.leftObj = allProducts[productRank.getRandomIndex()];
    productRank.midObj = allProducts[productRank.getRandomIndex()];
    productRank.rightObj = allProducts[productRank.getRandomIndex()];
    if (productRank.leftObj === productRank.midObj || productRank.leftObj === productRank.rightObj || productRank.rightObj === productRank.midObj) {
      productRank.displayImages();
    }
    productRank.leftEl.src = productRank.leftObj.path;
    productRank.leftEl.id = productRank.leftObj.imgName;

    productRank.midEl.src = productRank.midObj.path;
    productRank.midEl.id = productRank.midObj.imgName;

    productRank.rightEl.src = productRank.rightObj.path;
    productRank.rightEl.id = productRank.rightObj.imgName;
  },
  tallyClicks: function(elId) {
    for (var i in allProducts){
      if (allProducts[i].imgName === elId) {
        allProducts[i].tally +=1;
        this.totalClicks +=1;
        data.datasets[0].data[i] = allProducts[i].tally;
      }
    }
    localStorage.setItem('allProducts',JSON.stringify(allProducts));
    localStorage.setItem('data',JSON.stringify(data));
  },
  showResults: function(){
    if (this.totalClicks % 15 === 0){
      this.resultsEl.hidden= false;
    }
    else {
      this.resultsEl.hidden=true;
    }
  }
};
if (localStorage.data && localStorage.allProducts){
  allProducts = JSON.parse(localStorage.getItem('allProducts'));
  data = JSON.parse(localStorage.getItem('data'));
} else {
   data = {
      labels: [],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "#021F59",
              strokeColor: "#A0529F",
              highlightFill: "#400D23",
              highlightStroke: "#B83848",
              data: []
          }
      ]
  };
  buildAlbum();
};
productRank.leftEl.addEventListener('click', function(event){
  productRank.tallyClicks(productRank.leftEl.id);
  productRank.showResults();
  productRank.displayImages();
});
productRank.midEl.addEventListener('click', function(event){
  productRank.tallyClicks(productRank.midEl.id);
  productRank.showResults();
  productRank.displayImages();
});
productRank.rightEl.addEventListener('click', function(event){
  productRank.tallyClicks(productRank.rightEl.id);
  productRank.showResults();
  productRank.displayImages();
});
productRank.displayImages();

results.addEventListener('click',function(){
  refresh.hidden= false;
  renderTotals();
})

refresh.addEventListener('click',function(){
  window.location.reload()
})

function renderTotals (){
  var context = document.getElementById('resultsChart').getContext('2d');
  var myBarChart = new Chart(context).Bar(data);
};










// function createChart (){
//   produceChart.hidden=false;
//   for (var i=0; i < allProducts.length; i++){
//   data.datasets[0].data[i]=allProducts[i].tally;
// };
// new Chart (context).Bar(data);
// }


// for (var i=0; i < productNames.length; i++){
//   var trEl = document.createElement('tr');
//   tblEl.appendChild(trEl);
//
//   var tdEl = document.createElement('td');
//   tdEl.textContent=productNames[i];
//   trEl.appendChild(tdEl);
//
//   var taEl = document.createElement('td');
//   taEl.textContent=allProducts[i].tally;
//   trEl.appendChild(taEl);
//   };
//   tblEl.appendChild(trEl);



























  // resultsEl.addEventListener('click', function (event) {
  //   for (var i=0; i< productNames.length; i++){
  //
  // tblEl.id='table';
  //   var trEl = document.createElement('tr');
  //     var thEl = document.createElement('th');
  //     thEl.textContent = allProducts[i].imgName;
  //     trEl.appendChild(thEl);
  //   }
  // tblEl.appendChild(trEl);
  //   var taEl = document.createElement('tr');
  //   var tgEl = document.createElement('th');
  //   tgEl.textContent = allProducts[i].tally;
  //   taEl.appendChild(tgEl);
  //     var tdEl = document.createElement('td');
  //     tdEl.textContent = allProducts[i].views;
  //     taEl.appendChild(tdEl);
  //   tblEl.appendChild(taEl);
  //   resultsEl.appendChild(tblEl);
  // })











// function randomImage (){
//   return Math.floor(Math.random() * img.length);
// }
// document.getElementById('image1').appendChild('img');

// var bag = new Product('bag','images/bag.jpg');
// var banana = new Product('banana','images/banana.jpg');
// var boots = new Product ('boots','images/boots.jpg');
// var chair = new Product ('chair','images/chair.jpg');
// var cthulhu = new Product ('cthulhu','images/cthulhu.jpg');
// var dragon = new Product ('dragon','images/dragon.jpg');
// var pen = new Product ('pen','images/pen.jpg');
// var scissors = new Product ('scissors','images/scissors.jpg');
// var shark = new Product ('shark','images/shark.jpg');
// var sweep = new Product ('sweep','sweep.jpg');
// var unicorn = new Product ('unicorn','images/unicorn.jpg');
// var usb =new Product ('usb', 'images/usb.jpg');
// var waterCan = new Product ('water_can','images/water_can.jpg');
// var wineGlass = new Product ('wine_glass','images/wine_glass.jpg');

// for (var i=0; i < img.length; i++){
//   if imgDisplay= createElement('img');
//   image1= document.getElementById('image1');
//   image1=document.appendchild('img')
// }



// var imgEl = document.getElementById('image1');
// var randImgEl= document.createElement(img);


// var img = [
//   "images/bag.jpg",
//   "images/banana.jpg",
//   "images/boots.jpg",
//   "images/chair.jpg",
//   "images/cthulhu.jpg",
//   "images/dragon.jpg",
//   "images/pen.jpg",
//   "images/scissors.jpg",
//   "images/shark.jpg",
//   "images/sweep.jpg",
//   "images/unicorn.jpg",
//   "images/usb.gif",
//   "images/water_can.jpg",
//   "images/wine_glass.jpg"
// ]
