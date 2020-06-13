var vm = new Vue({
  el: '#app',
  data: {
    selecting_pallet: 0,
    nurie: {
      layer: null,
      layer_ctx: null,
      original_layer: null,
      original_layer_ctx: null,
      original_img: null
    },
    pen: {
      is_down: false,
      width: 10,
      name: '',
      color: '',
      circle: null,
      point: null
    },
    cursor: {
      before_x: 0,
      before_y: 0
    },
    ui: {
      color_list_panel: null,
      about_panel: null,
    },
    color_history: [
      { name: 'RV55', color: 'rgb(233,165,202)' },
      { name: 'R14',  color: 'rgb(245,155,146)' },
      { name: 'R56',  color: 'rgb(210,124,149)' },
      { name: 'YR68', color: 'rgb(243,112,34)'  },
      { name: 'Y19',  color: 'rgb(255,233,62)'  },
      { name: 'Y28',  color: 'rgb(202,168,105)' },
      { name: 'G19',  color: 'rgb(45,185,138)'  },
      { name: 'G85',  color: 'rgb(157,195,170)' },
      { name: 'B18',  color: 'rgb(29,138,203)'  },
      { name: 'B63',  color: 'rgb(167,187,224)' },
      { name: 'BV17', color: 'rgb(110,132,189)' },
      { name: 'V28',  color: 'rgb(107,102,142)' }
    ],
    color_list: [
      { name: 'RV55', color: 'rgb(233,165,202)' },
      { name: 'R14', color: 'rgb(245,155,146)' },
      { name: 'R56', color: 'rgb(210,124,149)' },
      { name: 'YR68', color: 'rgb(243,112,34)' },
      { name: 'Y19', color: 'rgb(255,233,62)' },
      { name: 'Y28', color: 'rgb(202,168,105)' },
      { name: 'G19', color: 'rgb(45,185,138)' },
      { name: 'G85', color: 'rgb(157,195,170)' },
      { name: 'B18', color: 'rgb(29,138,203)' },
      { name: 'B63', color: 'rgb(167,187,224)' },
      { name: 'BV17', color: 'rgb(110,132,189)' },
      { name: 'V28', color: 'rgb(107,102,142)' },
      { name: 'E07', color: 'rgb(204,129,106)' },
      { name: 'E18', color: 'rgb(136,83,77)' },
      { name: 'E74', color: 'rgb(161,132,124)' },
      { name: '100', color: 'rgb(49,43,43)' },
      { name: 'C-7', color: 'rgb(99,112,121)' },
      { name: 'W-7', color: 'rgb(119,120,115)' },
      { name: 'RV21', color: 'rgb(253,232,231)' },
      { name: 'R02', color: 'rgb(253,211,199)' },
      { name: 'R46', color: 'rgb(224,77,105)' },
      { name: 'YR24', color: 'rgb(240,207,100)' },
      { name: 'Y08', color: 'rgb(254,242,0)' },
      { name: 'YG95', color: 'rgb(203,198,94)' },
      { name: 'G14', color: 'rgb(151,207,144)' },
      { name: 'G43', color: 'rgb(215,231,168)' },
      { name: 'B16', color: 'rgb(0,188,234)' },
      { name: 'B24', color: 'rgb(138,206,243)' },
      { name: 'BV13', color: 'rgb(132,145,200)' },
      { name: 'V05', color: 'rgb(226,166,202)' },
      { name: 'E04', color: 'rgb(228,188,196)' },
      { name: 'E15', color: 'rgb(251,187,141)' },
      { name: 'E44', color: 'rgb(138,110,89)' },
      { name: '0', color: 'rgb(255,255,255)' },
      { name: 'C-4', color: 'rgb(146,160,171)' },
      { name: 'W-4', color: 'rgb(188,189,183)' },
      { name: 'RV02', color: 'rgb(250,213,230)' },
      { name: 'RV32', color: 'rgb(250,211,206)' },
      { name: 'R43', color: 'rgb(238,132,142)' },
      { name: 'YR65', color: 'rgb(250,174,96)' },
      { name: 'Y02', color: 'rgb(246,243,150)' },
      { name: 'YG21', color: 'rgb(247,246,190)' },
      { name: 'G02', color: 'rgb(207,232,211)' },
      { name: 'BG72', color: 'rgb(116,184,187)' },
      { name: 'B12', color: 'rgb(200,230,240)' },
      { name: 'B95', color: 'rgb(96,197,207)' },
      { name: 'BV11', color: 'rgb(212,210,232)' },
      { name: 'V12', color: 'rgb(238,215,233)' },
      { name: 'E00', color: 'rgb(253,243,234)' },
      { name: 'E33', color: 'rgb(243,210,177)' },
      { name: 'E70', color: 'rgb(239,234,230)' },
      { name: 'E84', color: 'rgb(174,159,128)' },
      { name: 'C-1', color: 'rgb(218,227,232)' },
      { name: 'W-1', color: 'rgb(231,231,223)' },
      { name: 'RV00', color: 'rgb(241,218,234)' },
      { name: 'R21', color: 'rgb(250,193,182)' },
      { name: 'YR000', color: 'rgb(254,236,216)' },
      { name: 'YR61', color: 'rgb(253,218,196)' },
      { name: 'Y00', color: 'rgb(254,253,223)' },
      { name: 'YG11', color: 'rgb(229,240,208)' },
      { name: 'G000', color: 'rgb(234,245,237)' },
      { name: 'BG23', color: 'rgb(189,229,221)' },
      { name: 'B000', color: 'rgb(230,244,245)' },
      { name: 'B91', color: 'rgb(213,226,235)' },
      { name: 'BV000', color: 'rgb(234,231,242)' },
      { name: 'V000', color: 'rgb(233,229,243)' },
      { name: 'E000', color: 'rgb(254,245,238)' },
      { name: 'E11', color: 'rgb(254,233,214)' },
      { name: 'E50', color: 'rgb(244,235,240)' },
      { name: 'E81', color: 'rgb(240,230,194)' },
      { name: 'C-00', color: 'rgb(224,231,237)' },
      { name: 'W-00', color: 'rgb(243,243,235)' },
    ]
  },
  mounted: function() {
    // カラーリストのパネルの表示位置を設定。
    this.ui.color_list_panel = document.getElementById('color_list_panel');
    this.ui.color_list_panel.style.left = `10px`;
    this.ui.color_list_panel.style.top  = `10px`;

    this.ui.about_panel = document.getElementById('about_panel');
    this.ui.about_panel.style.left = `10px`;
    this.ui.about_panel.style.top  = `10px`;

    this.nurie.layer = document.getElementById('layer');
    this.nurie.layer_ctx = this.nurie.layer.getContext('2d');

    this.nurie.original_layer = document.getElementById('original_layer');
    this.nurie.original_layer_ctx = this.nurie.original_layer.getContext('2d');
    this.nurie.original_img = new Image();

    this.pen.point = document.getElementById('penpoint');
    this.pen.is_down = false;

    this.nurie.original_img.onload = function() {
      var w = vm.nurie.original_img.width;
      var h = vm.nurie.original_img.height;

      vm.nurie.layer.width = w;
      vm.nurie.layer.height = h;
      vm.nurie.original_layer.width = w;
      vm.nurie.original_layer.height = h;

      vm.nurie.layer_ctx.drawImage(vm.nurie.original_img, 0, 0);
      vm.nurie.original_layer_ctx.drawImage(vm.nurie.original_img, 0, 0);

      vm.blend();
    };
    this.nurie.original_img.src = '../../iwate_vtuber_02.jpg';

    this.nurie_mousedown = function(ev) {
      vm.pen.is_down = true;
    };

    this.nurie_mouseup = function(ev) {
      vm.pen.is_down = false;
      vm.cursor.before_x = 0;
      vm.cursor.before_y = 0;
    };

    this.nurie_mousemove = function(ev, from_mousemove) {
      var cr = vm.nurie.layer.getBoundingClientRect();
      var x = ev.x - (cr.left + window.pageYOffset) + window.scrollY;
      var y = ev.y - (cr.top  + window.pageXOffset) + window.scrollX;

      var rect = this.nurie.layer.getBoundingClientRect();
      var xx = x + rect.left - 20 + 4 + window.scrollX;
      var yy = y + rect.top - 20 + 4 + window.scrollY;

      var xx = x + this.nurie.layer.getBoundingClientRect().left - 20 + 4 + window.scrollX;
      var yy = y + this.nurie.layer.getBoundingClientRect().top - 20 + 4 + window.scrollY;

      this.pen.point.style.left = `${xx}px`;
      this.pen.point.style.top  = `${yy}px`;

      if ((ev.x < rect.left || ev.x > (rect.left + rect.width)) || (ev.y < rect.top || ev.y > (rect.top + rect.height))) {
        this.pen.point.style.visibility = "hidden";
        this.pen.point.style.display = "none";
        return;
      }
      this.pen.point.style.visibility = "visible";
      this.pen.point.style.display = "block";

      if (vm.pen.is_down == false && from_mousemove == true) {
        return;
      }

      var before_x = vm.cursor.before_x;
      var before_y = vm.cursor.before_y;
      vm.cursor.before_x = x;
      vm.cursor.before_y = y;
      if (before_x == 0 && before_y == 0 && from_mousemove == true) {
        return;
      }
 
      vm.pen.circle.moveTo(x, y);
      vm.pen.circle.arc(x, y, vm.pen.width, 0, 6.283185307179586); // 2 * Math.PI);
      vm.nurie.layer_ctx.fillStyle = vm.pen.color;
      vm.nurie.layer_ctx.fill(vm.pen.circle);

      vm.blend();
    };

    this.nurie.layer.addEventListener('mousedown', function(ev) { vm.nurie_mousedown(ev); });
    this.nurie.layer.addEventListener('mouseup', function(ev) { vm.nurie_mouseup(ev); });
    this.nurie.layer.addEventListener('mousemove', function(ev) { vm.nurie_mousemove(ev, true); });
    this.nurie.layer.addEventListener('click', function(ev) { vm.nurie_mousemove(ev, false); });

    this.pen.point.addEventListener('mousedown', function(ev) { vm.nurie_mousedown(ev); });
    this.pen.point.addEventListener('mouseup', function(ev) { vm.nurie_mouseup(ev); });
    this.pen.point.addEventListener('mousemove', function(ev) { vm.nurie_mousemove(ev, true); });
    this.pen.point.addEventListener('click', function(ev) { vm.nurie_mousemove(ev, false); });

    this.pen.name = this.color_history[0].name;
    this.pen.color = this.color_history[0].color;
    this.pen.circle = new Path2D();
  },
  methods: {
    blend: function() {
      var w = this.nurie.original_img.width;
      var h = this.nurie.original_img.height;
      var image_data = this.nurie.layer_ctx.getImageData(0, 0, w, h);
      var data = image_data.data;
      var original_image_data = this.nurie.original_layer_ctx.getImageData(0, 0, w, h);
      var original_data = original_image_data.data;

      for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        var or = original_data[i];
        var og = original_data[i + 1];
        var ob = original_data[i + 2];

        //console.log(`r,g,b= ${r},${g},${b}`);
        var threshold = 210; //209
        if (or <= threshold && og <= threshold && ob <= threshold) {
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = 0;
        } else {
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
        }
      }

      this.nurie.layer_ctx.putImageData(image_data, 0, 0);
    },
    open_color_dialog: function(index) {
      this.selecting_pallet = index;

      this.ui.color_list_panel.style.visibility = "visible";
      this.ui.color_list_panel.style.display = "block";
    },
    close_color_dialog: function(index) {
      this.ui.color_list_panel.style.visibility = "hidden";
      this.ui.color_list_panel.style.display = "none";
    },
    open_about_dialog: function(index) {
      this.ui.about_panel.style.visibility = "visible";
      this.ui.about_panel.style.display = "block";
    },
    close_about_dialog: function(index) {
      this.ui.about_panel.style.visibility = "hidden";
      this.ui.about_panel.style.display = "none";
    },
    download_nurie: function() {
      var link = document.createElement("a");
      try {
        if (this.nurie.layer.msToBlob) {
          blob = this.nurie.layer.msToBlob();
          window.navigator.msSaveBlob(blob, 'nurie.png');
        } else {
          link.href = this.nurie.layer.toDataURL("image/png");
          link.download = "nurie.png";
          link.click();
        }
      } catch(e) {
        console.log(e);
        alert('(T_T) ダウンロード時にエラーが発生しました。');
      }
    },
    choice_color: function(index, adj) {
      var choice = this.color_list[6 * index + adj];
      var pallet_index = index;

      this.setcolor(choice.color, choice.name);

      this.color_history.splice(this.color_history.length-1, 1);
      this.color_history = [{
        name: choice.name,
        color: choice.color
      }].concat(this.color_history);

      this.ui.color_list_panel.style.visibility = "hidden";
      this.ui.color_list_panel.style.display = "none";

      this.blend();
    },
    bgcolor: function(rgb_str) {
      return `background: ${rgb_str}`;
    },
    get_color_name: function(index, adj) {
      return this.color_list[6 * index + adj].name;
    },
    get_color_code: function(index, adj) {
      return `background: ${this.color_list[6 * index + adj].color}`
    },
    setcolor: function(rgb_str, color_name) {
      this.pen.name = color_name;
      this.pen.color = rgb_str;

      this.pen.circle = null;
      this.pen.circle = new Path2D();
    }
  }
})

