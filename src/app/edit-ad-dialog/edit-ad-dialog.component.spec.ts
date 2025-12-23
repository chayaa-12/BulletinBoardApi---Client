import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ad } from '../../../src/models/ad';

@Component({
  selector: 'app-edit-ad-dialog',
  templateUrl: './edit-ad-dialog.component.html'
})
export class EditAdDialogComponent {
  ad: Ad;
  isEditMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<EditAdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ad | null
  ) {
    if (data) {
      // מצב עריכה
      this.ad = { ...data };
      this.isEditMode = true;
    } else {
      // מצב הוספה
      this.ad = { 
        title: '', 
        description: '', 
        price: 0, 
        category: '', 
        location: '', 
        contactName: '', 
        phone: '' 
      };
      this.isEditMode = false;
    }
  }

  save(): void {
    this.dialogRef.close(this.ad);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
