
var lar=850;
var al=600;
var x = 0;
var vp = 20;
var y = al / 2;
var Slider;
var omega ;
var back = 51;
var Vslider , y0 , FSlider,Sfase,fase;
var frequenza = 100;
var time=1;
var time_div=lar/10;

function setup() {
	
createCanvas(lar,al);
	
	background(back);
	line(0,al/2,lar,al/2);
	 Slider = createSlider(0, 255, 200); //tensione
  			Slider.position(20, 20);
	 Slider2 = createSlider(0,500,5);  //frequenza
		Slider2.position(170,20);
	 Slider3 = createSlider(0,400,394);  //fase
		Slider3.position(320,20);

} 

function draw() {
	
	


onda();	

}
function onda()
{
	stroke(255);
strokeWeight(1.5);
FSlider=Slider2.value();
Sfase=Slider3.value();
omega=(frequenza*6.28)*time;
	var tempo=(6.28/omega)
	Vslider = Slider.value();
	if ((x) == lar||Vslider != vp ||FSlider!=frequenza||fase!=Sfase) //resetto quando arriva alla fine o 
					//quando cambio la tesione o frequeza
		{
			x = 0;
			background(back);
			stroke(0);
			strokeWeight(1);
			line(0,al/2,lar,al/2);
		}
	fase=Sfase;
	vp=Vslider;
	frequenza=FSlider;
	y=(vp * (sin(omega*(x+fase))) +al / 2 ) ;
	//point (x,y);
	line (x,y,x - 1, y0)
	x=x+ 1;

	y0 = y; //fine disegno sinusoide
	text("Il valore di picco è:" + vp,lar-170,40);	
	text("la tensione efficace è:"+(vp*1.41),lar-170,60)
	text("La frequenza è: "+frequenza,lar-170,80)
	
}