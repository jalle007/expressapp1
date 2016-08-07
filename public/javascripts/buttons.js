var removeItem = function () {
  var x = document.getElementById("lstSelect");
  x.remove(x.selectedIndex);
}
var clearAll = function () {
  document.getElementById("lstSelect").innerHTML = "";
   
}

var editItem = function () {
  var btEdit = document.getElementById("btEdit");
    var list = document.getElementById("lstSelect");
    var txt1 = document.getElementById("txt1");

  if (btEdit.innerHTML == "Edit") {
    var index = list.selectedIndex;

    var item = list.options[index].text;
    txt1.value = item;

    btEdit.innerHTML = 'Save';
    btEdit.value = index;
  } else //Save
  {
    btEdit.innerHTML = 'Edit';
    list.options[btEdit.value].text = txt1.value;;
    return;
    list.remove(btEdit.value);
    //now add
    var option = document.createElement("option");
    option.text = txt1.value;
    list.add(option);
    txt1.value = '';
  }
 
}


var add = function () {
  var x = document.getElementById("lstSelect");
  var option = document.createElement("option");
  var txt1 = document.getElementById("txt1");
  option.text = txt1.value;
  x.add(option);

  txt1.value = '';
}