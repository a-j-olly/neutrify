import { Injectable } from '@angular/core';
import { DelayedScriptLoader } from './lib/delayed-script-loader';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  	private scriptLoader: DelayedScriptLoader;

	constructor() { 
		this.scriptLoader = new DelayedScriptLoader( `https://www.googletagmanager.com/gtag/js?${environment.gaTrackingId}`, ( 10 * 1000 ) );
	}
  
  public eventEmitter(
    eventAction: string,
    eventCategory: string = null,
    eventLabel: string = null,
	eventValue: number = null ) {
      this.run((analytics: Function) => {

        analytics('event', eventAction, {
          event_category: eventCategory,
          event_label: eventLabel,
          event_value: eventValue
        });
      });
  	}

  public configEmitter(urlAfterRedirects) {
    this.run((analytics: Function) => {

		analytics('config', environment.gaTrackingId, {
			page_path: urlAfterRedirects
		});

    });
  }

	// ---
	// PRIVATE METHODS.
	// ---
 
	// I return a Promise that resolves with the 3rd-party Analytics Script.
	private async getScript() : Promise<any> {
 
		// CAUTION: For the sake of simplicity, I am not going to worry about the case in
		// which the analytics scripts fails to load. Ideally, I might create some sort
		// of "Null Object" version of the analytics API such that the rest of the code
		// can run as expected with various no-op method implementations.
		await this.scriptLoader.load();
		// NOTE: Since I don't have an installed Type for this service, I'm just casting
		// Window to ANY and then re-casting the global service that we know was just
		// injected into the document HEAD.

		return function gtag() {(window as any).dataLayer.push(arguments);}
	}
 
 
	// I run the given callback after the remote analytics library has been loaded.
	private run( callback: ( analytics: any ) => void ) : void {
 
		this.getScript()
			.then( callback )
			.catch(
				( error ) => {
					// Swallow underlying analytics error - they are not important.
				});
	}

}
