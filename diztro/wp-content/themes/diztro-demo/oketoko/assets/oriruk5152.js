// Load Provinsi
function loadProvinsi(e) {
	var propinsi		= $("#propinsi").val(),
		propinsi_code	= $("#propinsi_code").val();
		if (propinsi == '') {
			optionz		= '<option value="">Pilih Provinsi</option>';
		} else {
			optionz		= '<option value="'+ propinsi_code +'" selected hidden>'+ propinsi +'</option>';
		}
    $(e).html('<option value="">Sedang memproses...</option>'),
    $.ajax({
         url: templateDirectory + "/oketoko/inc/rajaongkir/ongkir.php?act=showprovince",
         dataType: "json",
         type: "GET",
         success: function(t) {
			$(e).html("");
			$(e).prepend(optionz),
			province = "",
			$.each(t.rajaongkir.results, function(t, i) {
			province = '<option value="' + i.province_id + '">' + i.province + '</option>',
			province += "",
			$(e).append(province)
			})
         },
         error: function() {
             $(e).html("ERROR")
         }
    });
}

// Load Kabupaten
function loadCity(e, t) {
	$(t).html('<option value="">Sedang memproses...</option>'),
	$.ajax({
		url: templateDirectory + "/oketoko/inc/rajaongkir/ongkir.php?act=showcity",
		dataType: "json",
		data: {
		 province: e
	},
	type: "GET",
	success: function(e) {
		$(t).html(""),
		$(t).prepend('<option value="">Pilih Kota/Kabupaten</option>'),
		city = "", $.each(e.rajaongkir.results, function(e, i) {
			city = '<option value="' + i.city_id + '">' + i.type.replace("Kabupaten","Kab.") + " " + i.city_name + "</option>", city += "", $(t).append(city)
		})
	},
	error: function() {
		$(t).html("ERROR")
	}
	})
}

// Load Kecamatan
function loadDistrict(e, t) {
	$(t).html('<option value="">Sedang memproses...</option>'),
	$.ajax({
		url: templateDirectory + "/oketoko/inc/rajaongkir/ongkir.php?act=showdistrict",
		dataType: "json",
		data: {
			city: e
		},
		type: "GET",
		success: function(e) {
			$(t).html(""),
			$(t).prepend('<option value="">Pilih Kecamatan</option>'),
			district = "", $.each(e.rajaongkir.results, function(e, i) {
				district = '<option value="' + i.subdistrict_id + '">Kec. ' + i.subdistrict_name + "</option>", district += "", $(t).append(district)
			})
		},
		error: function() {
			$(t).html("ERROR")
		}
	})
}

// Cek Ongkir Cart
function cekOngkirCart() {
	var e = $("#oricity").val(),
		t = $("#desdistrict").val(),
		i = $("#beratbelanja").val().replace(/\./g,""),
		a = $("#pilihankurir").val();
	$("#resultongkir").show().html("<center><img src='"+ templateDirectory + "/images/loading.gif'></center>");
	$.ajax({
		url: templateDirectory + "/oketoko/inc/rajaongkir/ongkir.php?act=alvincost",
		data: {
			origin: e,
			destination: t,
			weight: i,
			courier: a
		},
		type: "GET",
		success: function(e) {
			$("#resultongkir").html(e), getTotalHarga();
		},
		error: function() {
			alert("Maaf, sepertinya terjadi kesalahan.");
		}
	});
}

// Cek Ongkir Page
function cekOngkir() {
	var e = $("#oricity").val(),
		t = $("#desdistrict").val(),
		i = $("#cekberat").val(),
		a = $("#pilihankurir").val();
	if( !e || !t || !i || !a ){
		alert("Cek kembali, masih ada kolom yang belum diisi.")
	} else {
		$("#resultongkir").show().html("<center><img src='"+ templateDirectory + "/images/loading.gif'></center>");
		$.ajax({
			url: templateDirectory + "/oketoko/inc/rajaongkir/ongkir.php?act=alvincost",
			data: {
				origin: e,
				destination: t,
				weight: i,
				courier: a
			},
			type: "GET",
			success: function(e) {
				$("#resultongkir").html(e);
			},
			error: function() {
				alert("Maaf, sepertinya terjadi kesalahan.");
			}
		});
	}
}

// Cek Resi
function cekResi(){
	var noresi = document.getElementById('noresi').value;
	var pilihkurir = document.getElementById('pilihkurir').value;
	$("#resultresi").show().html("<center><img src='"+ templateDirectory + "/images/loading.gif'></center>");
	var data = {
		 'noresi': noresi,
		 'pilihkurir': pilihkurir
	};
	var ajaxurl = templateDirectory + '/oketoko/inc/rajaongkir/resi.php';
	jQuery.post(ajaxurl, data, function(response) {
	document.getElementById('resultresi').innerHTML=''+response;
	});
}

$(document).ready(function() {	
	// Load Province
	loadProvinsi("#desprovince");
});