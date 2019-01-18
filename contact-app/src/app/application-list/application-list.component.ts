import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';

import { ApplicationService } from '../services/application.service';
import { IApplication } from '../model/application';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';
import { ApplicationFormComponent } from '../application-form/application-form.component';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit  {
  applications: IApplication[];
  application: IApplication;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table  
  displayedColumns = ['clientID','clientName', 'clientUri', 'redirectUri', 'postLogoutRedirectUri', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IApplication>();

  constructor(public snackBar: MatSnackBar, private _applicationService: ApplicationService, private dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {    
    this.loadingState = true;
    this.loadApplications();
    this.dataSource.sort = this.sort;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ApplicationFormComponent, {
      width: '700px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, application: this.application }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadApplications();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Data successfully added.');
            break;
          case DBOperation.update:
            this.showMessage('Data successfully updated.');
            break;
          case DBOperation.delete:
            this.showMessage('Data successfully deleted.');
            break;
        }
      } else if (result === 'error') {
        this.showMessage('There is some issue in saving records, please contact to system administrator!');
      } else {
       // this.showMessage('Please try again, something went wrong');
      }
    });
  }

  loadApplications(): void {
    this._applicationService.getAll(Global.BASE_APPLICATION_ENDPOINT + 'GetAll')
      .subscribe(applications=> {
        this.loadingState = false;
        this.dataSource.data = applications;
      });
  }
 
  addApplication() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Application';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editApplication(clientID: string) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Application';
    this.modalBtnTitle = 'Update';
    this.application = this.dataSource.data.filter(x => x.clientID === clientID)[0];
    this.openDialog();
  }
  deleteApplication(clientID: string) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.application = this.dataSource.data.filter(x => x.clientID === clientID)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

