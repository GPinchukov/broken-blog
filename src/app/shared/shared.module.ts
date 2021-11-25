import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    MatCardModule
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})
export class SharedModule {

}
