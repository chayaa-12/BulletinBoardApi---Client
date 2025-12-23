import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ad } from 'src/models/ad';

@Component({
  selector: 'app-edit-ad-dialog',
  templateUrl: './edit-ad-dialog.component.html',
  styleUrls: ['./edit-ad-dialog.component.css']
})
export class EditAdDialogComponent {
  ad: Ad;

  constructor(
    public dialogRef: MatDialogRef<EditAdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ad | null
  ) {
    this.ad = data ? { ...data } : {
      id: 0,
      title: '',
      description: '',
      phone: '',
      location: '',
      contactName: ''
    };
  }

  onSave(ad: Ad) {
    this.dialogRef.close(ad);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
