var following = document.getElementsByClassName('_4gt3b')[0];

function scroll(isStart) {
	if (!isStart)
		return;	

	following.scrollTop = following.scrollHeight;

	window.setTimeout(function(){
		scroll(following.querySelectorAll('ul li').length < parseInt(document.querySelectorAll('main article header ._de9bg ._9o0bc ._218yx ._bkw5z')[2].innerText));
	}, 500);
}

scroll(true);

following.querySelectorAll('ul li').forEach(function(entry) {
	entry.getElementsByTagName('button')[0].click();
});
