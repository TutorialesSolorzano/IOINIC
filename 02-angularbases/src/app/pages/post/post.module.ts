import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';


@NgModule({
  declarations: [PostComponent, SinglepostComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
