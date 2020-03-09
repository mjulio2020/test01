(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQkAAQAAGYk3EgQk3Ehm2AAQm1AAk3khQk3kgAAmYQAAmXE3kgQE3khG1AAQG2AAE3EhQE3EgAAGXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("ArsK4Qk2kgAAmYQAAmWE2khQE3kgG1AAQG3AAE2EgQE2EhAAGWQAAGYk2EgQk2Egm3ABQm1gBk3kgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-99.5,214,199);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQkAAQAAB7k3BXQk3BYm2AAQm1AAk3hYQk3hXAAh7QAAh7E3hWQE3hYG1AAQG2AAE3BYQE3BWAAB7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("ArsDTQk2hYAAh7QAAh7E2hWQE3hYG1AAQG3AAE2BYQE2BWAAB7QAAB7k2BYQk2BXm3AAQm1AAk3hXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-30.8,214,61.7);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQkAAQAAGYk3EgQk3Ehm2AAQm1AAk3khQk3kgAAmYQAAmXE3kgQE3khG1AAQG2AAE3EhQE3EgAAGXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("ArsK4Qk2kgAAmYQAAmWE2khQE3kgG1AAQG3AAE2EgQE2EhAAGWQAAGYk2EgQk2Egm3ABQm1gBk3kgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-99.5,214,199);


// stage content:
(lib.test_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(300,176.5);

	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.setTransform(300,176.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolación3("synched",0);
	this.instance_2.setTransform(300,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(468,277,214,199);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;