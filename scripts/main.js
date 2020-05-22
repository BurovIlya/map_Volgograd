const choosingMap = document.getElementById('choosingMap');
const myMap = document.querySelector('svg.map');
const mapLegend = document.querySelector('ul.caption-list');

let currentDataset;
let tooltip;
let currentLocality = null;

function removeChildren(elem) {
  while (elem.lastElementChild) {
    elem.removeChild(elem.lastElementChild);
  }
}


function showTooltip(anchorElem, elemName, elemValue) {
      let tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = elemName + ':<br />' + '<strong>' + elemValue + '</strong>';
      document.body.append(tooltipElem);

      let coords = anchorElem.getBoundingClientRect();
      let anchorElemWidth = coords.right - coords.left;
      let anchorElemHeight = coords.bottom - coords.top;
      
      let left = coords.left + (anchorElemWidth - tooltipElem.offsetWidth) / 2;

      if (left < 0) left = 0;
            
      let right = left + anchorElemWidth;

      if (right > document.body.clientWidth) { left = document.body.clientWidth - anchorElemWidth - 10; }

      let top = coords.top - tooltipElem.offsetHeight;
      
      if (top < 0) {
        top = coords.top + tooltipElem.offsetHeight + 5;

      }
       
      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';

      return tooltipElem;
}

function initMap(myDataset, myLegend) {
    
    document.querySelector('div.legend h4').innerHTML = myLegend[0]["podzag"];
    currentDataset = myDataset;
    
    for( let locality of myDataset ) {
        let locality_id = locality["raion_id"];
        let locality_group = locality["raion_group"];
        let locality_style = 'style' + locality_group;
        myMap.querySelector('path[data-id=' + '"' + locality_id + '"' + ']').setAttribute('class', locality_style);
                
    }
    
    if ( mapLegend.children.length > 0 ) {
            removeChildren(mapLegend);
    }
    
    for ( let i = 1; i < myLegend.length; i++ ) {
        
        let legendItem = document.createElement('LI');
        legendItem.classList.add('caption-item');
        let legendStyle = 'style' + i;
        legendItem.setAttribute('data-group', legendStyle);
        legendItem.innerHTML = myLegend[i]["min"] + ' &mdash; ' + myLegend[i]["max"];
        mapLegend.appendChild(legendItem); 
        
    }
    
}

myMap.addEventListener('mouseover', function(event) {
  
  if (currentLocality) { return; }
  let target = event.target;

  while (target != myMap) {
    if (target.tagName == 'path') {
       break; 
    }
    else{
      target = target.previousElementSibling;  
    }
    
  }
  if (target == myMap) {return;}
  
  currentLocality = target;
  target.classList.add('active');
  
  let pathId = target.getAttribute('data-id');
  let ind = Number(pathId) - 1;
  let name = currentDataset[ind]["raion_name"];
  
  if ( ind <= 5 ) {
    name = 'Городской округ ' + name;
  }
  
  if ( ind > 5 ) {
    name = name + ' муниципальный район';
  }
  
  let value = currentDataset[ind]["raion_value"];
  tooltip = showTooltip(target, name, value);
  
});

myMap.addEventListener('mouseout', function(event) {
  
  if (!currentLocality) { return; }

  let relatedTarget = event.relatedTarget;
  
  if (relatedTarget == currentLocality || relatedTarget.tagName == 'TEXT') { 
       return; 
  }
  
   if (tooltip) {
        tooltip.remove();
        tooltip = false;
      }
      
  currentLocality.classList.remove('active');
  currentLocality = null;
  
});    

 mapLegend.addEventListener('mouseover', function(event) {
           
   let target = event.target;
   
   if (target.tagName != 'LI') { return; }
            
      let captionItemGroupName = target.getAttribute('data-group');
      let pathGroup = myMap.querySelectorAll('.' + captionItemGroupName);
            
        for ( let path of pathGroup ) {
          path.classList.add('active');
        }
 });
        
 mapLegend.addEventListener('mouseout', function() {
            
   let activePaths = myMap.querySelectorAll('.active');
            
     for ( let activePath of activePaths ) {
       activePath.classList.remove('active');
     }
     
 });  



choosingMap.addEventListener('change', function() {
    let selectedOptionVal = choosingMap.options[choosingMap.selectedIndex].value;
    
    switch (selectedOptionVal) {
        
        case '1':
           initMap(dataset1, legend1);
           break;
        case '2':
           initMap(dataset2, legend2);
           break; 
        case '3':
           initMap(dataset3, legend3);
           break; 
    } 
    
});

document.addEventListener('DOMContentLoaded', function() {
    choosingMap.options[0].selected = true;
    initMap(dataset1, legend1);
});
