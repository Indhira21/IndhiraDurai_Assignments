let browser = "Chrome";
function checkBrowserVersion(callbackfunction){
   setTimeout(() => {
    callbackfunction(browser);
    console.log("Browser version is:", browser);
   }, 2000);
}
function getBrowserVersion(){
   console.log("please wait for 2 seconds to get the browser version");
}
checkBrowserVersion(getBrowserVersion);