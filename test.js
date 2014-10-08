//var arr = new Array();
var y = x.split("");
var z = new Array();
alert(y)
var g = z.push("y");
alert(g);
count = 0
$.each([9,7,8,0,1,4,3,0,0,7,2,3 ], function( index, value ) {
    //alert(index+":"+ value);
    if(index%2 == 0)
    {
       count = count+value*1
    }
    else
    {
        count = count+value*3
    }
    alert(count)
});
alert(count);
mod_val = count%10
alert(mod_val);
  c = 10 - mod_val
  alert("final value"+c);
