


function GetDayofWeek(giorno, mese, anno)
{

giorno = parseInt(giorno, 10);
if (isNaN(giorno))
giorno = 0; 

mese = parseInt(mese, 10);
if (isNaN(mese))
mese = 0; 

anno = parseInt(anno, 10);
if (isNaN(anno))
anno = 0; 


if (((giorno > 31) || (giorno < 1)) && ((mese == 1) || (mese == 3) || (mese == 5) || (mese == 7) || (mese == 8) || (mese == 10) || (mese == 12)))
alert ("giorno inesistente!");

else
{

if (((giorno > 30) || (giorno < 1)) && ((mese == 4) || (mese == 6) || (mese == 9) || (mese == 11)))
alert ("giorno inesistente!");

else
{

if (((((giorno > 28) || (giorno < 1)) && (anno > 1582)) && ((mese == 2) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))) || (((giorno > 28) || (giorno < 1)) && (anno < 1582) && (mese == 2) && ((anno % 4) != 0)))
alert ("giorno inesistente!");

else
{

if (((giorno > 29) || (giorno < 1)) && (mese == 2))
alert ("giorno inesistente!");

else
{

if ((anno == 1582) && (mese == 10) && (giorno > 4) && (giorno < 15))
alert ("giorno soppresso dalla riforma gregoriana del 1582");

else
{

if (mese <= 0)
alert ("mese inesistente!");

else
{

if (anno <= 0)
alert ("scegli un anno tra 1 e 4099");

else
{

if ((anno < 1582) || ((anno == 1582) && (mese < 10)) || ((anno == 1582) && (mese == 10) && (giorno < 5)))

{
var s;
var w;
var p;

s = parseInt(s, 10);
if (isNaN(s))
s = 0; 

w = parseInt(w, 10);
if (isNaN(w))
w = 0;

p = parseInt(p, 10);
if (isNaN(p))
p = 0;

if (mese == 1)
s = 0;

if (mese == 2)
s = 31;

if ((mese == 3) && ((anno % 4) != 0))
s = 59;

if ((mese == 3) && ((anno % 4) == 0))
s = 60;

if ((mese == 4) && ((anno % 4) != 0))
s = 90;

if ((mese == 4) && ((anno % 4) == 0))
s = 91;

if ((mese == 5) && ((anno % 4) != 0))
s = 120;

if ((mese == 5) && ((anno % 4) == 0))
s = 121;

if ((mese == 6) && ((anno % 4) != 0))
s = 151;

if ((mese == 6) && ((anno % 4) == 0))
s = 152;

if ((mese == 7) && ((anno % 4) != 0))
s = 181;

if ((mese == 7) && ((anno % 4) == 0))
s = 182;

if ((mese == 8) && ((anno % 4) != 0))
s = 212;

if ((mese == 8) && ((anno % 4) == 0))
s = 213;

if ((mese == 9) && ((anno % 4) != 0))
s = 243;

if ((mese == 9) && ((anno % 4) == 0))
s = 244;

if ((mese == 10) && ((anno % 4) != 0))
s = 273;

if ((mese == 10) && ((anno % 4) == 0))
s = 274;

if ((mese == 11) && ((anno % 4) != 0))
s = 304;

if ((mese == 11) && ((anno % 4) == 0))
s = 305;

if ((mese == 12) && ((anno % 4) != 0))
s = 334;

if ((mese == 12) && ((anno % 4) == 0))
s = 335;

w = (anno + Math.floor((anno - 1) / 4) + s - 2 + giorno);

p = (w % 7);

if (p == 0)
return "SABATO";

if (p == 1)
return "DOMENICA";

if (p == 2)
return "LUNEDI";

if (p == 3)
return "MARTEDI";

if (p == 4)
return "MERCOLEDI";

if (p == 5)
return "GIOVEDI";

if (p == 6)
return "VENERDI";
}

else
{

var t;
var x;
var r;

t = parseInt(t, 10);
if (isNaN(t))
t = 0; 

x = parseInt(x, 10);
if (isNaN(x))
x = 0;

r = parseInt(r, 10);
if (isNaN(r))
r = 0;

if (mese == 1)
t = 0;

if (mese == 2)
t = 31;

if ((mese == 3) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 59;

if ((mese == 3) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 60;

if ((mese == 4) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 90;

if ((mese == 4) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 91;

if ((mese == 5) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 120;

if ((mese == 5) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 121;

if ((mese == 6) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 151;

if ((mese == 6) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 152;

if ((mese == 7) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 181;

if ((mese == 7) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 182;

if ((mese == 8) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 212;

if ((mese == 8) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 213;

if ((mese == 9) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 243;

if ((mese == 9) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 244;

if ((mese == 10) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 273;

if ((mese == 10) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 274;

if ((mese == 11) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 304;

if ((mese == 11) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 305;

if ((mese == 12) && ((((anno % 4) != 0) || (((anno % 100) == 0) && ((anno % 400) != 0)))))
t = 334;

if ((mese == 12) && ((((anno % 4) == 0) && (! (((anno % 100) == 0) && ((anno % 400) != 0))))))
t = 335;


x = (anno + Math.floor((anno - 1) / 4) - Math.floor((anno - 1) / 100) + Math.floor((anno - 1) / 400) + t + giorno);

r = (x % 7);

if (r == 0)
return "SABATO";

if (r == 1)
return "DOMENICA";

if (r == 2)
return "LUNEDI";

if (r == 3)
return "MARTEDI";

if (r == 4)
return "MERCOLEDI";

if (r == 5)
return "GIOVEDI";

if (r == 6)
return "VENERDI";

}
}
}
}
}
}
}
}
}