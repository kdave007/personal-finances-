import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecordService } from './Services/record.service';
import { RecordResolver } from './Resolvers/record.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RecordService,
    RecordResolver
  ] // Register services here if needed
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}