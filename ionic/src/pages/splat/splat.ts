import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser'
import { IonicPage, NavController } from 'ionic-angular';

//onst request = require('superagent/superagent');
var redirectLocation;

@IonicPage()
@Component({
  selector: 'page-splat',
  templateUrl: 'splat.html'
})
export class Splat {


  options : InAppBrowserOptions = {
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
  }
  

  buildURL(user:string="jackdewinter") {
    console.log(`Beginning Authentication for ${user}`);
    redirectLocation = window.location.origin + "/#/auth";
    // request.get('https://accounts.spotify.com/authorize')
    // .set("Access-Control-Allow-Origin",window.location.origin)
    // .query({client_id:"c73a5b77da704447ada1a72732822e8f", response_type: "token", redirect_uri:redirectLocation, scope:"user-read-private", state: 123})
    // .set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Origin, Accept")
    // .then(res => { 
    //   let browser = this.iab.create(res.req.url)
    //   browser.show()
    //   console.log("NOW");
    // }).catch(function(error){

    //   console.log("FAIL");
    // });
  
    let browser = this.iab.create("https://accounts.spotify.com/en/authorize?client_id=c73a5b77da704447ada1a72732822e8f&response_type=token&redirect_uri=http:%2F%2Flocalhost:8100/auth&scope=user-read-private&state=123", "_self", this.options)
    browser.show()
    browser.on('loadstop').subscribe(
      data => {
          let url = data.url;
          if(url.includes("localhost:8100/auth"))
         {
            let result = url.slice(url.indexOf("auth") + 5);
            this.options.closebuttoncaption = result.slice(result.indexOf("access_token") + 13, result.indexOf("&token"))
            console.log(this.options.closebuttoncaption)
            browser.close();     
          }
    });

  }

  splat(){
    console.log('Beginning Splat procedure!');
    
    console.log(`Your access token is: ${this.options.closebuttoncaption}`)
  }

}
