// Just one CheckBox
$("input:checkbox").on('click', function () {
    
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });




// Options for dropdowns
var objGraphics = ["nVidia +2Gb","nVidia -2Gb", "AMD +2Gb", "AMD -2Gb"]
var subjectObject = {
    "Intel": {
      "i3": objGraphics,
      "i5": objGraphics,
      "i7": objGraphics,    
    },
    "AMD": {
      "Ryzen 3": objGraphics,
      "Ryzen 5": objGraphics,
      "Ryzen 7": objGraphics,
      "Ryzen 9": objGraphics,
    }
  }
// Conditional DropDown
  window.onload = function() {
    // Getting Value Field and stablishing onchange
    var subjectSel = document.getElementById("brand");
    var topicSel = document.getElementById("gene");
    var chapterSel = document.getElementById("memo");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      chapterSel.length = 1;
      topicSel.length = 1;
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      chapterSel.length = 1;
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }




