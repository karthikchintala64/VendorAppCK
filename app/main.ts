import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component/app.component';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router'
import {HTTP_PROVIDERS } from 'angular2/http'

bootstrap(AppComponent,[ROUTER_BINDINGS,HTTP_PROVIDERS ]);
