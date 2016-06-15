CompileServiceConfig.$inject = ['$compileProvider','DEBUG_INFO_ENABLED'];

export function CompileServiceConfig($compileProvider,DEBUG_INFO_ENABLED) {
    // disable debug data on prod profile to improve performance
    $compileProvider.debugInfoEnabled(DEBUG_INFO_ENABLED);

    /*
    If you wish to debug an application with this information
    then you should open up a debug console in the browser
    then call this method directly in this console:

	angular.reloadWithDebugInfo();
	*/
}
