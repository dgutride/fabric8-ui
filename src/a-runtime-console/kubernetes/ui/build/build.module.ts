import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-modal';
import { Fabric8CommonModule } from '../../../common/common.module';
import { KubernetesComponentsModule } from '../../components/components.module';
import { BuildDeleteDialog } from './delete-dialog/delete-dialog.build.component';
import { BuildEditPage } from './edit-page/edit-page.build.component';
import { BuildEditToolbarComponent } from './edit-toolbar/edit-toolbar.build.component';
import { BuildEditWrapperComponent } from './edit-wrapper/edit-wrapper.build.component';
import { BuildEditComponent } from './edit/edit.build.component';
import { BuildsListPage } from './list-page/list-page.build.component';
import { BuildsListToolbarComponent } from './list-toolbar/list-toolbar.build.component';
import { BuildsListComponent } from './list/list.build.component';
import { BuildViewPage } from './view-page/view-page.build.component';
import { BuildViewToolbarComponent } from './view-toolbar/view-toolbar.build.component';
import { BuildViewWrapperComponent } from './view-wrapper/view-wrapper.build.component';
import { BuildViewComponent } from './view/view.build.component';

const routes: Routes = [
  { path: '', component: BuildsListPage },
  { path: ':id', component: BuildViewPage },
  { path: ':id/edit', component: BuildEditPage }
];

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    ModalModule,
    MomentModule,
    RouterModule.forChild(routes),
    Fabric8CommonModule,
    KubernetesComponentsModule
  ],
  declarations: [
    BuildsListPage,
    BuildsListToolbarComponent,
    BuildsListComponent,
    BuildViewPage,
    BuildViewWrapperComponent,
    BuildViewToolbarComponent,
    BuildViewComponent,
    BuildEditPage,
    BuildEditWrapperComponent,
    BuildEditToolbarComponent,
    BuildEditComponent,
    BuildDeleteDialog
  ],
  entryComponents: [
    BuildDeleteDialog,
    BuildEditPage
  ],
  exports: [
    ModalModule
  ],
  providers: [
    BsDropdownConfig
  ]
})
export class BuildModule {
}
