
/*
function box1() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x =100;
    var y = 20;
    var width = 300;
    var height = 280;
    var imageObj = new Image();
    imageObj.onload = function() {
      context.drawImage(imageObj, x, y, width, height);
    };
    imageObj.src = 'assets/ikea.png';
}

*/
window.onload = function () {
    var canvas = new fabric.Canvas('c', {
        selection: false,
    });
  
    var grid = 50;

    //GENERATE VISUAL GRID
    for (var i = 0; i < (1400 / grid); i++) {
        canvas.add(new fabric.Line([i * grid, 0, i * grid, 1400], {
            stroke: '#ccc',
            selectable: false
        }));
        canvas.add(new fabric.Line([0, i * grid, 1400, i * grid], {
            stroke: '#ccc',
            selectable: false
        }))
    }
    

//SNAPPING SYSTEM
    canvas.on('object:moving', function (options) {
        options.target.set({
            left: Math.round(options.target.left / grid) * grid,
            top: Math.round(options.target.top / grid) * grid
        });
    });

//ADD IMAGE

document.getElementById('box1').addEventListener('click', function (e) {
    //alert(event.target);
    fabric.Image.fromURL('assets/wall.png', function (myImg) {
        var img = myImg.set({ left: 0, top: 0, width: 100, height: 50, snapAngle: 90, });
        canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
              });     
    });
});


document.getElementById('box2').addEventListener('click', function (e) {
    //alert(event.target);
    fabric.Image.fromURL('assets/door.png', function (myImg) {
        var img = myImg.set({ left: 0, top: 0, width: 100, height: 100, snapAngle: 90,  });
        canvas.add(img);
        img.setControlsVisibility({
            mt: false, 
            mb: false, 
            mr: false,
            ml: false,
            bl: false,
            br: false, 
            tl: false, 
            tr: false,
            
          });     
    });
});

document.getElementById('box3').addEventListener('click', function (e) {
    //alert(event.target);
    fabric.Image.fromURL('assets/window.png', function (myImg) {
        var img = myImg.set({ left: 0, top: 0, width: 100, height: 50, snapAngle: 90, });
        canvas.add(img);
        img.setControlsVisibility({
            mt: false, 
            mb: false, 
            mr: false,
            ml: false,
            bl: false,
            br: false, 
            tl: false, 
            tr: false,
            
          });     
    });
});


   

    document.getElementById('box4').addEventListener('click', function (e) {
        //alert(event.target);
        fabric.Image.fromURL('assets/cabin.png', function (myImg) {
            var img = myImg.set({ left: 0, top: 0, width: 100, height: 150, snapAngle: 90, });
            canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                mr: false,
                ml: false,
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
                
              });   
        });
    });
    document.getElementById('box5').addEventListener('click', function (e) {
        //alert(event.target);
        fabric.Image.fromURL('assets/island.png', function (myImg) {
            var img = myImg.set({ left: 0, top: 0, width: 200, height: 250, snapAngle: 90, });
            canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                mr: false,
                ml: false,
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
                
              });   
        });
    });


    document.getElementById('box6').addEventListener('click', function (e) {
        //alert(event.target);
        fabric.Image.fromURL('assets/stove.png', function (myImg) {
            var img = myImg.set({ left: 0, top: 0, width: 100, height: 150, snapAngle: 90, });
            canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                mr: false,
                ml: false,
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
                
              });   
        });
    });
 
    document.getElementById('box7').addEventListener('click', function (e) {
        //alert(event.target);
        fabric.Image.fromURL('assets/fridge.png', function (myImg) {
            var img = myImg.set({ left: 0, top: 0, width: 100, height: 150, snapAngle: 90, });
            canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                mr: false,
                ml: false,
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
                
              });   
        });
    });

    document.getElementById('box8').addEventListener('click', function (e) {
        //alert(event.target);
        fabric.Image.fromURL('assets/dishwasher.png', function (myImg) {
            var img = myImg.set({ left: 0, top: 0, width: 100, height: 150, snapAngle: 90, });
            canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                mr: false,
                ml: false,
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
                
              });   
        });
    });



    document.getElementById('box9').addEventListener('click', function (e) {
        //alert(event.target);
        fabric.Image.fromURL('assets/hood.png', function (myImg) {
            var img = myImg.set({ left: 0, top: 0, width: 100, height: 50, snapAngle: 90, });
            canvas.add(img);
            img.setControlsVisibility({
                mt: false, 
                mb: false, 
                mr: false,
                ml: false,
                bl: false,
                br: false, 
                tl: false, 
                tr: false,
                
              });   
        });
    });


   
 

//DELETE OBJECT IN CANVAS
    document.getElementById('dlt').addEventListener('click', function (e) {
        var activeObject = canvas.getActiveObject()
        if (activeObject) {
            if (confirm('Are you sure?')) {
                canvas.remove(activeObject);
            }
        }
    });
//DELETE OBJECT IN CANVAS BY USING THE DELETE KEY
    document.onkeydown = function (e) {
        var keyCode = e.keyCode;
        var activeObject = canvas.getActiveObject()
        if(keyCode == 46) {
            if (activeObject) {
                if (confirm('Are you sure?')) {
                    canvas.remove(activeObject);
                }
            }
        }
    };

    //OUTPUTS JSON BLOB 
    document.getElementById('save').addEventListener('click', function (e) {
        var json = JSON.stringify(canvas);
        var blob = new Blob([json], {type: "application/json"});
        var url  = URL.createObjectURL(blob);
        window.location=url;
    });
    
}//]]> 

