import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-header-products-card',
  templateUrl: './header-products-card.component.html',
  styleUrls: ['./header-products-card.component.css']
})
export class HeaderProductsCardComponent implements OnInit {
  categoryViseProducts: any;
  @ViewChild('sb') searchBox: ElementRef;
  constructor() {}

  ngOnInit() {
    this.initProducts();
  }

  focusOnSearchBox() {
    this.searchBox.nativeElement.focus();
  }

  initProducts() {
    this.categoryViseProducts = [{
      category: "Precision Machined",
      products: [{
        "product": "PP Medical Sleeve",
        "navigateTo": "http://www.saaskin.com/pp-medical-sleeve-2320864.html"
      }, {
        "product": "Vespel Rotor Seal",
        "navigateTo": "http://www.saaskin.com/vespel-rotor-seal-2320865.html"
      }, {
        "product": "Peek Ferrule",
        "navigateTo": "http://www.saaskin.com/peek-ferrule-2320866.html"
      }, {
        "product": "Magnesium Machined Part",
        "navigateTo": "http://www.saaskin.com/magnesium-machined-part-2320860.html"
      }, {
        "product": "Magnesium Antenna Part",
        "navigateTo": "http://www.saaskin.com/magnesium-antenna-part-2320861.html"
      }, {
        "product": "Delrin Aerospace Part",
        "navigateTo": "http://www.saaskin.com/delrin-aerospace-part-2403380.html"
      }, {
        "product": "Delrin Adapter",
        "navigateTo": "http://www.saaskin.com/delrin-adapter-2403383.html"
      }, {
        "product": "Aluminium TBM Ring",
        "navigateTo": "http://www.saaskin.com/aluminium-tbm-ring-2403462.html"
      }, {
        "product": "Peek Machined",
        "navigateTo": "http://www.saaskin.com/peek-machined-2403385.html"
      }, {
        "product": "Aerospace Aluminium Interlock",
        "navigateTo": "http://www.saaskin.com/aerospace-aluminium-interlock-2403472.html"
      }, {
        "product": "Aluminium Tyre Building Part",
        "navigateTo": "http://www.saaskin.com/aluminium-tyre-building-part-2811104.html"
      }, {
        "product": "G10 Defence Part",
        "navigateTo": "http://www.saaskin.com/g10-defence-part-3224826.html"
      }, {
        "product": "Brass Fittings",
        "navigateTo": "http://www.saaskin.com/brass-fittings-3224816.html"
      }, {
        "product": "Brass Turned Parts",
        "navigateTo": "http://www.saaskin.com/brass-turned-parts-3224819.html"
      }, {
        "product": "Peek Fitting",
        "navigateTo": "http://www.saaskin.com/peek-fitting-3224831.html"
      }, {
        "product": "CNC Defence Component",
        "navigateTo": "http://www.saaskin.com/cnc-defence-component-3224839.html"
      }, {
        "product": "MS Stud",
        "navigateTo": "http://www.saaskin.com/ms-stud-3224865.html"
      }, {
        "product": "Aerospace Shaft",
        "navigateTo": "http://www.saaskin.com/aerospace-shaft-3224867.html"
      }, {
        "product": "SS Medical Tube",
        "navigateTo": "http://www.saaskin.com/ss-medical-tube-3224897.html"
      }, {
        "product": "Hydrualic Manifold Assembly",
        "navigateTo": "http://www.saaskin.com/hydrualic-manifold-assembly-3439186.html"
      }, {
        "product": "SS Rings",
        "navigateTo": "http://www.saaskin.com/ss-rings-3224903.html"
      }, {
        "product": "Aerospace Assembly",
        "navigateTo": "http://www.saaskin.com/aerospace-assembly-3439190.html"
      }, {
        "product": "Aluminium Suspension Hook",
        "navigateTo": "http://www.saaskin.com/aluminium-suspension-hook-3224906.html"
      }, {
        "product": "Cashew  Machine Blade",
        "navigateTo": "http://www.saaskin.com/cashew-machine-blade-3224907.html"
      }, {
        "product": "Hydraulic Valve Manifold",
        "navigateTo": "http://www.saaskin.com/hydraulic-valve-manifold-3224914.html"
      }, {
        "product": "HPLC Analytical Seals",
        "navigateTo": "http://www.saaskin.com/hplc-analytical-seals-3224916.html"
      }, {
        "product": "SS Medical handle",
        "navigateTo": "http://www.saaskin.com/ss-medical-handle-3225065.html"
      }, {
        "product": "Aluminium Jaw",
        "navigateTo": "http://www.saaskin.com/aluminium-jaw-3225068.html"
      }, {
        "product": "Aluminium Medical Lever",
        "navigateTo": "http://www.saaskin.com/aluminium-medical-lever-3225071.html"
      }, {
        "product": "Machine Building Levers",
        "navigateTo": "http://www.saaskin.com/machine-building-levers-3225073.html"
      }, {
        "product": "Aluminium Manifold",
        "navigateTo": "http://www.saaskin.com/aluminium-manifold-3225075.html"
      }, {
        "product": "Aluminium Infusion Pump Part",
        "navigateTo": "http://www.saaskin.com/aluminium-infusion-pump-part-3225081.html"
      }, {
        "product": "Aluminium Medical Body",
        "navigateTo": "http://www.saaskin.com/aluminium-medical-body-3225088.html"
      }, {
        "product": "Aluminum Valve Block",
        "navigateTo": "http://www.saaskin.com/aluminum-valve-block-3225092.html"
      }, {
        "product": "Aluminum Housing Drum",
        "navigateTo": "http://www.saaskin.com/aluminum-housing-drum-3225096.html"
      }, {
        "product": "Aluminium Pole Clamp",
        "navigateTo": "http://www.saaskin.com/aluminium-pole-clamp-3225099.html"
      }, {
        "product": "Manifold Block",
        "navigateTo": "http://www.saaskin.com/manifold-block-3235860.html"
      }, {
        "product": "Aluminium Aerospace Component",
        "navigateTo": "http://www.saaskin.com/aluminium-aerospace-component-3235862.html"
      }, {
        "product": "Defence Aluminium Extrusion",
        "navigateTo": "http://www.saaskin.com/defence-aluminium-extrusion-3235864.html"
      }, {
        "product": "Aluminium Electronic Board",
        "navigateTo": "http://www.saaskin.com/aluminium-electronic-board-3235866.html"
      }, {
        "product": "Aluminium Fixture",
        "navigateTo": "http://www.saaskin.com/aluminium-fixture-3235871.html"
      }, {
        "product": "Aluminium Frame",
        "navigateTo": "http://www.saaskin.com/aluminium-frame-3235872.html"
      }, {
        "product": "Aluminium Masked Anodized Part",
        "navigateTo": "http://www.saaskin.com/aluminium-masked-anodized-part-3235874.html"
      }, {
        "product": "Aluminium Pulley",
        "navigateTo": "http://www.saaskin.com/aluminium-pulley-3235875.html"
      }, {
        "product": "Aerospace Milling Part",
        "navigateTo": "http://www.saaskin.com/aerospace-milling-part-3235877.html"
      }, {
        "product": "Aluminium Milling Component",
        "navigateTo": "http://www.saaskin.com/aluminium-milling-component-3235878.html"
      }, {
        "product": "Electronic Aluminium CNC Part",
        "navigateTo": "http://www.saaskin.com/electronic-aluminium-cnc-part-3235881.html"
      }, {
        "product": "Aluminium Side Cover",
        "navigateTo": "http://www.saaskin.com/aluminium-side-cover-3235884.html"
      }, {
        "product": "Aluminium Support Plate",
        "navigateTo": "http://www.saaskin.com/aluminium-support-plate-3235886.html"
      }, {
        "product": "Aluminium Top Plate",
        "navigateTo": "http://www.saaskin.com/aluminium-top-plate-3235888.html"
      }, {
        "product": "Aluminium Handle",
        "navigateTo": "http://www.saaskin.com/aluminium-handle-3438679.html"
      }, {
        "product": "Aluminium Timer Cam",
        "navigateTo": "http://www.saaskin.com/aluminium-timer-cam-3438987.html"
      }, {
        "product": "Aluminium Stepped Block",
        "navigateTo": "http://www.saaskin.com/aluminium-stepped-block-3438989.html"
      }, {
        "product": "Aluminium Rings",
        "navigateTo": "http://www.saaskin.com/aluminium-rings-3438990.html"
      }, {
        "product": "Aluminium Plasma Coated Tray",
        "navigateTo": "http://www.saaskin.com/aluminium-plasma-coated-tray-3438991.html"
      }, {
        "product": "Aluminium Medical Plate",
        "navigateTo": "http://www.saaskin.com/aluminium-medical-plate-3438993.html"
      }, {
        "product": "Aluminium Housing",
        "navigateTo": "http://www.saaskin.com/aluminium-housing-3438994.html"
      }, {
        "product": "Aluminium Helicoil Flange",
        "navigateTo": "http://www.saaskin.com/aluminium-helicoil-flange-3438995.html"
      }, {
        "product": "Aluminium Hammock Buckle",
        "navigateTo": "http://www.saaskin.com/aluminium-hammock-buckle-3438996.html"
      }, {
        "product": "Aluminium Flange",
        "navigateTo": "http://www.saaskin.com/aluminium-flange-3438997.html"
      }, {
        "product": "Aluminium Filter Blocks",
        "navigateTo": "http://www.saaskin.com/aluminium-filter-blocks-3438998.html"
      }, {
        "product": "Aluminium Engraved Part",
        "navigateTo": "http://www.saaskin.com/aluminium-engraved-part-3439000.html"
      }, {
        "product": "Aluminium Electronic Base Plate",
        "navigateTo": "http://www.saaskin.com/aluminium-electronic-base-plate-3439001.html"
      }, {
        "product": "Aluminium Electrical Parts",
        "navigateTo": "http://www.saaskin.com/aluminium-electrical-parts-3439002.html"
      }, {
        "product": "Aluminium Defence Part",
        "navigateTo": "http://www.saaskin.com/aluminium-defence-part-3439003.html"
      }, {
        "product": "Aluminium Clamp",
        "navigateTo": "http://www.saaskin.com/aluminium-clamp-3439005.html"
      }, {
        "product": "Aluminium Casing",
        "navigateTo": "http://www.saaskin.com/aluminium-casing-3439007.html"
      }, {
        "product": "Aluminium Bracket",
        "navigateTo": "http://www.saaskin.com/aluminium-bracket-3439008.html"
      }, {
        "product": "Aluminium Anodized Parts",
        "navigateTo": "http://www.saaskin.com/aluminium-anodized-parts-3439009.html"
      }, {
        "product": "Aluminium Analytical Cap",
        "navigateTo": "http://www.saaskin.com/aluminium-analytical-cap-3439010.html"
      }, {
        "product": "Aerospace Aluminium Frame",
        "navigateTo": "http://www.saaskin.com/aerospace-aluminium-frame-3439024.html"
      }, {
        "product": "Brass Gear",
        "navigateTo": "http://www.saaskin.com/brass-gear-3439039.html"
      }, {
        "product": "Brass Seat",
        "navigateTo": "http://www.saaskin.com/brass-seat-3439041.html"
      }, {
        "product": "Brass Shaft",
        "navigateTo": "http://www.saaskin.com/brass-shaft-3439042.html"
      }, {
        "product": "Brass Valve",
        "navigateTo": "http://www.saaskin.com/brass-valve-3439044.html"
      }, {
        "product": "Delrin Medical Knob",
        "navigateTo": "http://www.saaskin.com/delrin-medical-knob-3439045.html"
      }, {
        "product": "Band Saw Blade",
        "navigateTo": "http://www.saaskin.com/band-saw-blade-3439049.html"
      }, {
        "product": "Circualr Saw Blade",
        "navigateTo": "http://www.saaskin.com/circualr-saw-blade-3439053.html"
      }, {
        "product": "CNC Aerospace Turned Parts",
        "navigateTo": "http://www.saaskin.com/cnc-aerospace-turned-parts-3439055.html"
      }, {
        "product": "CNC Turned Part",
        "navigateTo": "http://www.saaskin.com/cnc-turned-part-3439060.html"
      }, {
        "product": "Collet",
        "navigateTo": "http://www.saaskin.com/collet-3439064.html"
      }, {
        "product": "Copper Gasket",
        "navigateTo": "http://www.saaskin.com/copper-gasket-3439075.html"
      }, {
        "product": "Copper Washer",
        "navigateTo": "http://www.saaskin.com/copper-washer-3439076.html"
      }, {
        "product": "Defence TItanium Shaft",
        "navigateTo": "http://www.saaskin.com/defence-titanium-shaft-3439078.html"
      }, {
        "product": "HSS Blades",
        "navigateTo": "http://www.saaskin.com/hss-blades-3439080.html"
      }, {
        "product": "Industrial Knives",
        "navigateTo": "http://www.saaskin.com/industrial-knives-3439081.html"
      }, {
        "product": "Magnetic Knife",
        "navigateTo": "http://www.saaskin.com/magnetic-knife-3439082.html"
      }, {
        "product": "MS Threaded Part",
        "navigateTo": "http://www.saaskin.com/ms-threaded-part-3439083.html"
      }, {
        "product": "Pin",
        "navigateTo": "http://www.saaskin.com/pin-3439085.html"
      }, {
        "product": "Precision Machined Parts",
        "navigateTo": "http://www.saaskin.com/precision-machined-parts-3439086.html"
      }, {
        "product": "Shearing Blades",
        "navigateTo": "http://www.saaskin.com/shearing-blades-3439094.html"
      }, {
        "product": "SS Analytical cylinder",
        "navigateTo": "http://www.saaskin.com/ss-analytical-cylinder-3439104.html"
      }, {
        "product": "SS HPLC Fittings",
        "navigateTo": "http://www.saaskin.com/ss-hplc-fittings-3439113.html"
      }, {
        "product": "SS Medical Part",
        "navigateTo": "http://www.saaskin.com/ss-medical-part-3439116.html"
      }, {
        "product": "SS Plunger Sleeve",
        "navigateTo": "http://www.saaskin.com/ss-plunger-sleeve-3439120.html"
      }, {
        "product": "Suspension Machined Parts",
        "navigateTo": "http://www.saaskin.com/suspension-machined-parts-3439126.html"
      }, {
        "product": "Terminal Swage Assembly",
        "navigateTo": "http://www.saaskin.com/terminal-swage-assembly-3439128.html"
      }, {
        "product": "Terminal Swage Stud",
        "navigateTo": "http://www.saaskin.com/terminal-swage-stud-3439131.html"
      }]
    }, {
      category: "Sheet Metal",
      products: [{
        "product": "Electronic Assembly",
        "navigateTo": "http://www.saaskin.com/electronic-assembly-2320869.html"
      }, {
        "product": "Control Panel",
        "navigateTo": "http://www.saaskin.com/control-panel-4056506.html"
      }, {
        "product": "Electrical Cabinet",
        "navigateTo": "http://www.saaskin.com/electrical-cabinet-4056510.html"
      }, {
        "product": "Electronic Cabinet",
        "navigateTo": "http://www.saaskin.com/electronic-cabinet-4056512.html"
      }, {
        "product": "Metal Box",
        "navigateTo": "http://www.saaskin.com/metal-box-4056513.html"
      }, {
        "product": "Metal Cabinet",
        "navigateTo": "http://www.saaskin.com/metal-cabinet-4056524.html"
      }, {
        "product": "Metal Enclosures",
        "navigateTo": "http://www.saaskin.com/metal-enclosures-4056525.html"
      }, {
        "product": "Metal Frame",
        "navigateTo": "http://www.saaskin.com/metal-frame-4056532.html"
      }, {
        "product": "Metal Panel",
        "navigateTo": "http://www.saaskin.com/metal-panel-4056565.html"
      }, {
        "product": "Metal Rack",
        "navigateTo": "http://www.saaskin.com/metal-rack-4056593.html"
      }, {
        "product": "Mounting Panel",
        "navigateTo": "http://www.saaskin.com/mounting-panel-4056613.html"
      }, {
        "product": "Sheet Metal Fabrication",
        "navigateTo": "http://www.saaskin.com/sheet-metal-fabrication-4056623.html"
      }, {
        "product": "Sheet Metal Tray",
        "navigateTo": "http://www.saaskin.com/sheet-metal-tray-4056630.html"
      }, {
        "product": "Stabilizer Cabinet",
        "navigateTo": "http://www.saaskin.com/stabilizer-cabinet-4056632.html"
      }, {
        "product": "System Enclosures",
        "navigateTo": "http://www.saaskin.com/system-enclosures-4056637.html"
      }, {
        "product": "Terminal Boxes",
        "navigateTo": "http://www.saaskin.com/terminal-boxes-4056643.html"
      }, {
        "product": "UPS Cabinet",
        "navigateTo": "http://www.saaskin.com/ups-cabinet-4056645.html"
      }]
    }, {
      category: "Dies and Molds",
      products: [{
        "product": "Aluminium Sleeve",
        "navigateTo": "http://www.saaskin.com/aluminium-sleeve-2320872.html"
      }, {
        "product": "Sheet Metal Part",
        "navigateTo": "http://www.saaskin.com/sheet-metal-part-2320875.html"
      }, {
        "product": "Rubber Bellow",
        "navigateTo": "http://www.saaskin.com/rubber-bellow-2320882.html"
      }, {
        "product": "Rubber Grommet",
        "navigateTo": "http://www.saaskin.com/rubber-grommet-2403334.html"
      }, {
        "product": "Rubber Washer",
        "navigateTo": "http://www.saaskin.com/rubber-washer-2403340.html"
      }, {
        "product": "Rubber Gaskets",
        "navigateTo": "http://www.saaskin.com/rubber-gaskets-2403341.html"
      }, {
        "product": "Rubber Pad Protomold",
        "navigateTo": "http://www.saaskin.com/rubber-pad-protomold-3224909.html"
      }, {
        "product": "Tranmission Gasket",
        "navigateTo": "http://www.saaskin.com/tranmission-gasket-3224912.html"
      }, {
        "product": "SS Name Plates",
        "navigateTo": "http://www.saaskin.com/ss-name-plates-3224891.html"
      }, {
        "product": "Cosmetic Caps",
        "navigateTo": "http://www.saaskin.com/cosmetic-caps-3409440.html"
      }, {
        "product": "Cosmetic Sleeve",
        "navigateTo": "http://www.saaskin.com/cosmetic-sleeve-3409442.html"
      }, {
        "product": "SS Deep Draw Shield",
        "navigateTo": "http://www.saaskin.com/ss-deep-draw-shield-3410480.html"
      }, {
        "product": "Sheet Metal Parts",
        "navigateTo": "http://www.saaskin.com/sheet-metal-parts-3410485.html"
      }, {
        "product": "Aluminium Caps",
        "navigateTo": "http://www.saaskin.com/aluminium-caps-3410580.html"
      }, {
        "product": "SS Deep Draw Components",
        "navigateTo": "http://www.saaskin.com/ss-deep-draw-components-3410606.html"
      }, {
        "product": "Brass Bush",
        "navigateTo": "http://www.saaskin.com/brass-bush-3439265.html"
      }, {
        "product": "Copper Annealed Washer",
        "navigateTo": "http://www.saaskin.com/copper-annealed-washer-3439266.html"
      }, {
        "product": "Copper Thin Washer",
        "navigateTo": "http://www.saaskin.com/copper-thin-washer-3439269.html"
      }, {
        "product": "Copper Washer",
        "navigateTo": "http://www.saaskin.com/copper-washer-3439268.html"
      }, {
        "product": "Copper Press Part",
        "navigateTo": "http://www.saaskin.com/copper-press-part-3439271.html"
      }, {
        "product": "Deep Draw Components",
        "navigateTo": "http://www.saaskin.com/deep-draw-components-3439291.html"
      }, {
        "product": "Deep Draw Die",
        "navigateTo": "http://www.saaskin.com/deep-draw-die-3439292.html"
      }, {
        "product": "Defence Lid Parts",
        "navigateTo": "http://www.saaskin.com/defence-lid-parts-3439293.html"
      }, {
        "product": "Medical Vial Tray",
        "navigateTo": "http://www.saaskin.com/medical-vial-tray-3439298.html"
      }, {
        "product": "MS Rings",
        "navigateTo": "http://www.saaskin.com/ms-rings-3439299.html"
      }, {
        "product": "Plastic Junction box Protomold",
        "navigateTo": "http://www.saaskin.com/plastic-junction-box-protomold-3439300.html"
      }, {
        "product": "Press Component",
        "navigateTo": "http://www.saaskin.com/press-component-3439301.html"
      }, {
        "product": "SS Cylinder Liner",
        "navigateTo": "http://www.saaskin.com/ss-cylinder-liner-3439304.html"
      }, {
        "product": "Stamped Part",
        "navigateTo": "http://www.saaskin.com/stamped-part-3439309.html"
      }, {
        "product": "Washing Machine Plastic Insert Mold",
        "navigateTo": "http://www.saaskin.com/washing-machine-plastic-insert-mold-3439312.html"
      }]
    }, {
      category: "Solenoid Products",
      products: [{
        "product": "Bobbin Parts",
        "navigateTo": "http://www.saaskin.com/bobbin-parts-2403449.html"
      }, {
        "product": "Bobbin Winding Parts",
        "navigateTo": "http://www.saaskin.com/bobbin-winding-parts-2403450.html"
      }, {
        "product": "Special Solenoid Accessories",
        "navigateTo": "http://www.saaskin.com/special-solenoid-accessories-2403457.html"
      }, {
        "product": "Push Solenoid",
        "navigateTo": "http://www.saaskin.com/push-solenoid-2436194.html"
      }, {
        "product": "Pull Type Solenoid",
        "navigateTo": "http://www.saaskin.com/pull-type-solenoid-2436228.html"
      }, {
        "product": "Solenoid Coils",
        "navigateTo": "http://www.saaskin.com/solenoid-coils-2979206.html"
      }, {
        "product": "Solenoid Coil",
        "navigateTo": "http://www.saaskin.com/solenoid-coil-2979221.html"
      }, {
        "product": "C Frame Solenoid",
        "navigateTo": "http://www.saaskin.com/c-frame-solenoid-2979225.html"
      }, {
        "product": "D Frame Solenoids",
        "navigateTo": "http://www.saaskin.com/d-frame-solenoids-2979228.html"
      }, {
        "product": "Linear Solenoid",
        "navigateTo": "http://www.saaskin.com/linear-solenoid-2979229.html"
      }, {
        "product": "Rotary Solenoid",
        "navigateTo": "http://www.saaskin.com/rotary-solenoid-2979231.html"
      }, {
        "product": "Tubular Solenoid",
        "navigateTo": "http://www.saaskin.com/tubular-solenoid-2979234.html"
      }, {
        "product": "Speed Governor Solenoids",
        "navigateTo": "http://www.saaskin.com/speed-governor-solenoids-2979237.html"
      }, {
        "product": "Latching Solenoid",
        "navigateTo": "http://www.saaskin.com/latching-solenoid-2979239.html"
      }, {
        "product": "Solenoid Actutator",
        "navigateTo": "http://www.saaskin.com/solenoid-actutator-2979240.html"
      }, {
        "product": "Cold Advanced Solenoid",
        "navigateTo": "http://www.saaskin.com/cold-advanced-solenoid-2979242.html"
      }, {
        "product": "Throttle Solenoid",
        "navigateTo": "http://www.saaskin.com/throttle-solenoid-2979252.html"
      }, {
        "product": "Customized Solenoid",
        "navigateTo": "http://www.saaskin.com/customized-solenoid-3439505.html"
      }, {
        "product": "Frame Type Solenoids",
        "navigateTo": "http://www.saaskin.com/frame-type-solenoids-3439507.html"
      }, {
        "product": "Solenoid Coil Plunger",
        "navigateTo": "http://www.saaskin.com/solenoid-coil-plunger-3439509.html"
      }, {
        "product": "EGR Solenoid Coil",
        "navigateTo": "http://www.saaskin.com/egr-solenoid-coil-3439511.html"
      }, {
        "product": "Speed Sensor",
        "navigateTo": "http://www.saaskin.com/speed-sensor-3439514.html"
      }, {
        "product": "Speed Solenoid",
        "navigateTo": "http://www.saaskin.com/speed-solenoid-3439517.html"
      }, {
        "product": "Speed Solenoids",
        "navigateTo": "http://www.saaskin.com/speed-solenoids-3439519.html"
      }, {
        "product": "Steering Solenoid",
        "navigateTo": "http://www.saaskin.com/steering-solenoid-3439523.html"
      }]
    }];
  }
}
