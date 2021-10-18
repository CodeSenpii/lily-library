
var setUpToolTip = function(){
  var tooltip = "";
   var toolTipDiv = document.querySelector(".tool-tip");
   var  toolTipElements = Array.from(document.querySelectorAll("span"));
   var timer;

  var ondisplayTooltip = function(e, obj){
    tooltip = obj.dataset.content;
    toolTipDiv.innerHTML = tooltip;

    toolTipDiv.style.top = e.pageY + "px";
    toolTipDiv.style.left = 1.1 * e.pageX + "px";
    // toolTipDiv.style.opacity = 1;
    fadeIn(toolTipDiv);
  };

  var fadeOut = function(elm){
    var op = 1;
    if(!timer){
    timer = setInterval(function(){

      if(op <= 0.1){
        clearInterval(timer);
        timer = null;
        elm.style.opacity = 0;
        elm.style.display ='none';
      }

      elm.style.opacity = op;
      op -= op * 0.1;
    }, 10);
  }
  };

  var fadeIn = function(elm){
    var op = 0.1;
    var timer = setInterval(function(){

      if(op >= 1){
        clearInterval(timer);
        elm.style.display ='inline-block';
      }

      elm.style.opacity = op;
      op += op * 0.1;
    }, 10);
  };

  var offdisplayTooltip = function(e, obj){
    fadeOut(toolTipDiv);

    // toolTipDiv.style.opacity = 0;
  };
   // turn on the tooltip display with a delay
  toolTipElements.forEach(function(elm){
    var timeout; // give it function scope closure
    elm.addEventListener('mouseover', function(e){
      var that = this;
      timeout = setTimeout(function(){
        ondisplayTooltip(e, that);
      }, 400);

    });

    elm.addEventListener('mouseout', function(e){
      offdisplayTooltip(e, this);
      clearTimeout(timeout);
    });

  });
};

setUpToolTip();
