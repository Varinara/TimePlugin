const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	
	let Time = vscode.commands.registerCommand('timeplugin.time', function () {
		var now = Date();
		console.log(now);
		vscode.window.showInformationMessage('Current Time from TimePlugin:\n', now);
	});
	context.subscriptions.push(Time);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
