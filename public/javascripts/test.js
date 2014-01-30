CloudFlare.define(
	'cfsampleapp',
	['cloudflare/dom', 'cfsampleapp/config', 'cloudflare/jquery1.9'],
	function(dom){

		dom.onLoad.then(
			function(){
				alert('sample app');
			}
		);

	}
);
