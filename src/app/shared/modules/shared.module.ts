import { CommonModule } from '@angular/common';
import { PrimeNgFormsModules } from './primeng-forms-module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ApiInterceptor } from '../interceptors/api.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

const Modules = [
    FormsModule,
    ReactiveFormsModule,
    PrimeNgFormsModules
];
  
const Components = [
    // add components which are used in multiple places
];

export const InterceptorProviders = [
    
    /**
     * In environment file we have below line of code 
     * hosts: [{ prefix: '/api', target: 'https://jsonplaceholder.typicode.com' }]
     * By using interceptor it will replace "/api" to "https://jsonplaceholder.typicode.com"
    */
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptor,
        multi: true,
    },
    /**
     * In localStorage we are storing idToken.
     * By using interceptor we will pass auth token to all api.
    */
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
    }
  ]
  
@NgModule({
    declarations: [], // add "[Components]" when shared components are available
    imports: [
      Modules,
      CommonModule,
      HttpClientModule
    ],
    providers: [InterceptorProviders],
    exports: [Modules], // add "[Modules, Components]" when shared components are available
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }