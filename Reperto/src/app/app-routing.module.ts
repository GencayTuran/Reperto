import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordComponent } from './chord/chord.component';

const routes: Routes = [
  { path: '', component: ChordComponent },
  { path: 'chord', component: ChordComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
