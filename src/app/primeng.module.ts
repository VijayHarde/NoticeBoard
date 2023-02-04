import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StepsModule } from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'primeng/blockui';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import {CalendarModule} from 'primeng/calendar';


const PrimeComponents = [
  ButtonModule,
  SplitButtonModule,
  PasswordModule,
  ToolbarModule,
  MenubarModule,
  PanelMenuModule,
  SidebarModule,
  ListboxModule,
  InputTextModule,
  CheckboxModule,
  TableModule,
  PaginatorModule,
  StepsModule,
  ToastModule,
  ProgressSpinnerModule,
  TooltipModule,
  BreadcrumbModule,
  MessagesModule,
  MessageModule,
  BlockUIModule,
  CardModule,
  ConfirmDialogModule,
  RadioButtonModule,
  FileUploadModule,
  DropdownModule,
  MultiSelectModule,
  TabViewModule,
  CalendarModule
]

@NgModule({
  imports: [PrimeComponents],
  exports: [PrimeComponents],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class PrimengModule { }
