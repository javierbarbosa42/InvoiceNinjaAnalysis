var looper;
var degrees = 0;
var currentDegrees = 0;
var timeouts = [];
function rotateAnimation(el,speed,time,dir){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	
	
	if(dir == 0)
	{
		timeouts.push(setTimeout('rotateAnimation(\''+el+'\','+speed+','+time+','+dir+')',speed));
		degrees++;
		/*console.log(degrees);
		console.log(currentDegrees);*/
	}
	else
	{
		timeouts.push(setTimeout('rotateAnimation(\''+el+'\','+speed+','+time+','+dir+')',speed));
		degrees--;
		/*console.log(degrees);
		console.log(currentDegrees);*/
	}	
	
	if(degrees > 360)
	{
		degrees = 0;
	}
	
	if(degrees < 0)
	{
		degrees = 360;
	}
	
	if(currentDegrees > 359)
	{
		currentDegrees = 0;
	}
	
	if(currentDegrees < 0)
	{
		currentDegrees = 359;
	}
	
	if(currentDegrees == time && degrees == 1)
	{
		degrees = 360 - time;
		currentDegrees = 360;
	}
	
	if(degrees == currentDegrees+time || degrees == currentDegrees-time)
	{
		for (var i = 0; i < timeouts.length; i++)
		{
			clearTimeout(timeouts[i]);
		}
		
		currentDegrees = degrees;
		timeouts = [];
	}
}