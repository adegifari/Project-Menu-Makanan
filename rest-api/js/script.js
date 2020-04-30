function tampilkanSemuaMenu(){
    $.getJSON("data/menu.json", function(result){
        var menu = result.menu;
        $.each(menu,function(i, data){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>');
        });
    });
}

tampilkanSemuaMenu();

$('.nav-item').on('click', function (){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $('button').text("Sesuaikan ");
    $('.dropdown-item').removeClass('active');
    var kategori = $.trim($(this).text());
    $('h1').html(kategori);
    if (kategori == "All Menu"){
        tampilkanSemuaMenu();
    }
    $.getJSON("data/menu.json",function(result){
        var menu = result.menu;
        var content = '';
        $.each(menu, function(i, data){
            if (data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>';
            }else if (kategori == "All Menu"){
                $.getJSON("data/menu.json", function(result){
                    var menu = result.menu;
                    $.each(menu,function(i, data){
                        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>');
                    });
                });
                return false;
            }
        });
        $('#daftar-menu').html(content);
    });
});

function SortAlphabet(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function SortAlphatbetBack(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a > b) ? 1 : (a < b) ? -1 : 0;
}

$('#sortaz').on('click', function (){

    let kategori = $(this).html();
    $('button').html('Nama A-Z');

    $.getJSON('data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return SortAlphabet(a.nama, b.nama);
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

$('#sortza').on('click', function (){

    let kategori = $(this).html();  
    $('button').html('Nama Z-A');
    
    $.getJSON('data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return SortAlphatbetBack(b.nama, a.nama);
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });
});

$('#sortrendah').on('click', function (){

    let kategori = $(this).html();
    $('button').html('Harga Termurah');
   
    $.getJSON('data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return a.harga - b.harga
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

$('#sorttinggi').on('click', function (){

    let kategori = $(this).html();
    $('button').html('Harga Terendah');
   
    $.getJSON('data/menu.json', function (data){
        let menu = data.menu;
        let content = '';
        menu.sort(function(a, b){
            return b.harga - a.harga
        });

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});
// $('.dropdown-menu a').on('click', function(){
//     // var tempmenu = [];
//     // var content = "";
//     $('button').text($(this).text());
//     $('.dropdown-item').removeClass('active');
//     $(this).addClass('active');
//     var kategori =$("h1").text();

//     $.getJSON('data/menu.json', function (data){
//         let menu = data.menu;
//         let content = '';
//         menu.sort(function(a, b){
//             return sortalphabet(a.nama, b.nama);
//             return a.harga - b.harga;
//         });

//         $.each(menu, function (i, data){
//             if (sort == 'Nama A-Z') {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>'
//             }
//         });

//         $('#daftar-menu').html(content);
//     });

// });

// function SortMenu(command="asc"){
//     return function MenuSort(a,b){
//         var nameA = a.name.toLowerCase();
//         var nameB = b.name.toLowerCase();
//         var compare = 0;
//         if (nameA > nameB){
//             compare = 1;
//         } else if (nameA < nameB){
//             compare = -1;
//         }
//         return (command == "desc" ? compare * -1 : compare);
//     }
// }

// function SortPrice(command="asc"){
//     return function PriceSort(a,b){
//         var priceA = a.price;
//         var priceB = b.price;
//         var compare = 0;
//         if (priceA > priceB){
//             compare = 1;
//         }else if(priceA < priceB){
//             compare = -1;
//         }
//         return (command == "desc" ? compare * -1 : compare);
//     }
// }
// var menus = [];

// $('.dropdown-menu a').on('click', function(){
//     var tempmenu = [];
//     var content = "";
//     $('button').text($(this).text());
//     $('.dropdown-item').removeClass('active');
//     $(this).addClass('active');
//     var kategori =$("h1").text();

//     for (var x = 0; x < menus.length; x ++){
//         if (menus[x].kategori == kategori.toLowerCase()){
//             tempmenu.push(menus[x]);
//         }else if(category == "All Menu"){
//             tempmenu.push(menus[i]);
//         }
//     }
//     var sort = $(this).text().toLowerCase();
//     if (sort == "nama a-z"){
//         tempmenu = tempmenu.sort(SortMenu("asc"));
//         $.each(tempmenu, function(z, tempmenus){
//             content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/warteg/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang !</a></div></div></div></div>';
//         })
//     }
//     $('#daftar-menu').html(content);
// });