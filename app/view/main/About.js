Ext.define('Rambox.view.main.About', {
	 extend: 'Ext.window.Window'
	,xtype: 'about'
	,title: 'About ${appname}'
	,autoShow: true
	,modal: true
	,resizable: false
	,constrain: true
	,width: 300
	,height: 385
	,bodyPadding: 10
	,data: {
		 version: require('electron').remote.app.getVersion()
		,platform: process.platform
		,arch: process.arch
		,electron: process.versions.electron
		,chromium: process.versions.chrome
		,node: process.versions.node
	}
	,tpl: [
		 '<div style="text-align:center;"><img src="resources/Icon.png" width="256" /></div>'
		,'<h3>.</h3>'
		,'<div><b>Version:</b> {version}</div>'
		,'<div><b>Platform:</b> {platform} ({arch})</div>'
		,'<div><b>Electron:</b> {electron}</div>'
		,'<div><b>Chromium:</b> {chromium}</div>'
		,'<div><b>Node:</b> {node}</div>'
		,'<br />'
	]
});
