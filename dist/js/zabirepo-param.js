var baseURL = '//usiusi360.ddns.net/zabbix';
var graphURL = baseURL + '/chart.php';
var apiURL = baseURL + '/api_jsonrpc.php';

// ================//
var options = {};
options.url = apiURL;

var groupNames = [];
var itemNamesUniqArray = [];
var resultObj = [];
var graphLabel;
var lastPeriod;

var zabirepo = {
	VERSION : "Version 0.1.0 Beta",
	GRAPH_TYPE : 0, // 0:line,1:stack
	GRAPH_HEIGHT : 300,
	GRAPH_WIDTH : 800,
	GRAPH_CELL_LIMIT : 40,
	GRAPH_ITEM_LIMIT : 40,
	reloadId : null
};

var demo = [ {
	key : 'beforeDay',
	value : '"180"'
}, {
	key : 'groupNamesArray',
	value : '[{"groupid":"9","groupName":"DB Servers"},{"groupid":"8","groupName":"Web Servers"},{"groupid":"4","groupName":"Zabbix servers"}]'
}, {
	key : 'keyNamesArray',
	value : '[{"search_key":"system.cpu.load[percpu,avg1]","split_flag":0},{"search_key":"system.cpu.util*","split_flag":1},{"search_key":"vm.memory.size[available]","split_flag":1},{"search_key":"vfs.fs.size[*,pfree]","split_flag":1},{"search_key":"zabbix[process,*]","split_flag":0},{"search_key":"zabbix[*cache,*]","split_flag":0},{"search_key":"zabbix[queue*]","split_flag":0}]'
} ];
