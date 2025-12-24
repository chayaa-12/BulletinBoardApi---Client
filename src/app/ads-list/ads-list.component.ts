import { Component, OnInit } from '@angular/core';
import { Ad } from '../../../src/models/ad';
import { AdsService } from '../services/ads.service';
import { EditAdDialogComponent } from '../edit-ad-dialog/edit-ad-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  searchText: string = '';
  ads: Ad[] = [];
  filteredAds: Ad[] = [];

  constructor(private adsService: AdsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAds();
  }

  loadAds() {
    this.adsService.getAds().subscribe({
      next: data => {
        this.ads = data;
        this.filteredAds = data;
      },
      error: err => console.error(err)
    });
  }

  deleteAd(id: number): void {
    this.adsService.delete(id).subscribe({
      next: () => this.loadAds(), 
      error: (err) => console.error(err)
    });
  }

  addAd(): void {
    this.openDialog(undefined);
}

  editAd(ad: Ad): void {
    this.openDialog(ad);
  }

  openDialog(adToEdit?: Ad) {
    if (this.dialog.openDialogs.length > 0) {
     return; 
   }
    const dialogRef = this.dialog.open(EditAdDialogComponent, {
      direction: 'rtl',
      width: '500px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      disableClose: false,
      autoFocus: true,
      data: adToEdit ?? null
    });

    dialogRef.afterClosed().subscribe((result: Ad | undefined) => {
      if (!result) return;

      if (adToEdit) {
        this.adsService.update(result).subscribe(updated => {
          const index = this.ads.findIndex(a => a.id === updated.id);
          if (index > -1) this.ads[index] = updated;
          this.loadAds();
        });
      } else {
        this.adsService.create(result).subscribe(created => {
          this.ads.push(created);
          this.loadAds();
        });
      }
    });
  }

  filterAds(): void {
  const text = this.searchText.toLowerCase();

  this.filteredAds = this.ads.filter(ad =>
    ad.title.toLowerCase().includes(text) ||
    ad.description.toLowerCase().includes(text)
  );
}



}
