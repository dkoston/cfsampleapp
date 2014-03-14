CloudFlare.define(
	'cfsampleapp',
	['cfsampleapp/config'],
	function(config){
		console.log('Domain ID: ' + config.domain_id);
	}
);
