$(document).ready(function () {
  $("#colpick").spectrum({
    color: "#4772d9",
    showPalette: true,
    showButtons: true,
    change: function (color) {
      $("#colpick").text("change called: " + color.toHexString());
    },
    palette: [
      ["#85B200", "#66B032"],
      ["#A7194B", "#FE2712"],
      ["#FF007F", "#FF55AA"],
      ["#0391CE", "#4772d9"],
      ["#3D01A4", "#8601AF"],
      ["#FD5308", "#FB9902"],
    ],
  });
  $("#colpick").change(function () {
    var color_scheme = jQuery("#colpick").val();
    document.documentElement.style.setProperty("--color1", color_scheme);
    $(".headlogo").html(
      '<p><a href="#">Nama Tokomu</a><span class="medium">Slogan Toko Online Kamu, Gokil!</span></p>'
    );
  });
  $("#layout").change(function () {
    var wide = jQuery("#layout :selected").val();
    if ($("#layout :selected").val() == "box") {
      $("body").css({ padding: "20px", background: "#F9F9F9" });
      $("#slider img").css("max-width", "1090px");
      $(".mainwrap").css({
        "max-width": "1110px",
        margin: "0 auto",
        "box-shadow": "0px 0px 12px 0px rgba(0,0,0,0.15)",
        padding: "10px",
      });
      $("#slider").trigger("owl.next");
    } else {
      $("body").css({ padding: "0", background: "#FFF" });
      $("#slider img").css("max-width", "100%");
      $(".mainwrap").css({
        "max-width": "100%",
        margin: "0",
        "box-shadow": "none",
        padding: "0",
      });
      $("#slider").trigger("owl.next");
    }
  });
  $("#fontz").change(function () {
    var font = jQuery("#fontz :selected").val();
    $("body").css("font-family", font);
    $(".demo-contain").css("font-family", "'Lato', sans-serif");
  });
  $(".opendemo").click(function () {
    $(".demo").animate({ right: "0" });
    $(".opendemo").hide();
    $(".closedemo").show();
  });
  $(".closedemo").click(function () {
    $(".demo").animate({ right: "-251px" });
    $(".opendemo").show();
    $(".closedemo").hide();
  });
  $("#sortable").sortable({
    start: function (event, ui) {
      $(ui.item).addClass("indrag");
    },
    stop: function (event, ui) {
      $(ui.item).removeClass("indrag");
    },
    placeholder: "ui-state-highlight",
    handle: ".dragme",
  });
  $("#sortable").disableSelection();
//   $(".sorter").append(
//     "<div class='dragme'><b>DRAG & DROP</b><br/><span>atur urutan section</span></div>"
//   );
  $(".grider").append(
    "<div class='gridlist'><b>PRODUCT VIEW</b><span class='info gridx grider-active'><i class='glyphicon glyphicon-th-large'></i> Grid</span> <span class='info listx'><i class='glyphicon glyphicon-menu-hamburger'></i> List</span></div>"
  );
  $(".gridx").click(function () {
    $(".productfeed .gridpad").removeClass("listview");
    $(this).addClass("grider-active");
    $(".listx").removeClass("grider-active");
  });
  $(".listx").click(function () {
    $(".productfeed .gridpad").addClass("listview");
    $(this).addClass("grider-active");
    $(".gridx").removeClass("grider-active");
  });
  $(".testier").append(
    "<div class='testitype'><b>TESTI TYPE</b><select class='testix'><option value='' selected='selected'>Type 1</option><option value='testi2'>Type 2</option><option value='testi3'>Type 3</option></select></div>"
  );
  var testiClass = "";
  $(".testix").change(function () {
    $(".testi").removeClass(testiClass).addClass($(this).val());
    testiClass = $(this).val();
    $("#testi").trigger("owl.next");
  });
  $(".gridbloger").append(
    "<div class='gridlist'><b>BLOG VIEW</b><span class='info gridb grider-active'><i class='glyphicon glyphicon-th-large'></i> Grid</span> <span class='info listb'><i class='glyphicon glyphicon-menu-hamburger'></i> List</span></div>"
  );
  $(".gridb").click(function () {
    $(".blogfeed .gridpad").removeClass("listview");
    $(this).addClass("grider-active");
    $(".listb").removeClass("grider-active");
  });
  $(".listb").click(function () {
    $(".blogfeed .gridpad").addClass("listview");
    $(this).addClass("grider-active");
    $(".gridb").removeClass("grider-active");
  });
});
