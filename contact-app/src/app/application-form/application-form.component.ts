import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { ApplicationListComponent } from '../application-list/application-list.component'

import { IApplication } from '../model/application';
import { ApplicationService } from '../services/application.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  msg: string;
  indLoading = false;
  applicationFrm: FormGroup;  
  listFilter: string;
  selectedOption: string;  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _applicationService: ApplicationService,
    public dialogRef: MatDialogRef<ApplicationListComponent>) { }

  ngOnInit() {  
      this.applicationFrm = this.fb.group({
      id:[''] , 
      clientID: [''],
      clientName: ['', [Validators.required, Validators.maxLength(50)]],
      clientUri: ['', [Validators.required]],
      secret: ['', [Validators.required]],
      redirectUri: ['', [Validators.required]],
      postLogoutRedirectUri: ['', [Validators.required]]      
    });
 
    // subscribe on value changed event of form to show validation message
    this.applicationFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.applicationFrm.reset();
    } else {
      this.applicationFrm.setValue(this.data.application);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.applicationFrm) { return; }
    const form = this.applicationFrm;
    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      // setup custom validation message to form
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  // form errors model

  formErrors = {
    'clientID': '',
    'clientName': '',
    'clientUri': '',
    'secret': '',
    'redirectUri': '',
    'postLogoutRedirectUri': ''
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'clientID': {      
      'required': 'Client ID is required.'
    },
    'clientName': {
      'maxlength': 'Client Name cannot be more than 50 characters long.',
      'required': 'Client Name is required.'
    },
    'clientUri': {      
      'required': 'Client Uri is required.'
    },
    'secret': {
      'required': 'Secret is required.'
    },
    'redirectUri': {
      'required': 'redirectUri is required.'
    },
    'postLogoutRedirectUri': {
      'required': 'Post Logout Redirect Uri is required.'
    }

  };
  onSubmit(formData: any) {    
    const applicationData = this.mapDateData(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._applicationService.create(Global.BASE_APPLICATION_ENDPOINT + 'Create', applicationData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.update:
        this._applicationService.update(Global.BASE_APPLICATION_ENDPOINT + 'Update', applicationData.clientID, applicationData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.delete:
        this._applicationService.delete(Global.BASE_APPLICATION_ENDPOINT + 'Delete', applicationData.clientID).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
    }
  }
  SetControlsState(isEnable: boolean) {
    isEnable ? this.applicationFrm.enable() : this.applicationFrm.disable();
  }

  mapDateData(application: IApplication): IApplication {        
    if(!application.id)
      application.id=0
    return application;
  }
}