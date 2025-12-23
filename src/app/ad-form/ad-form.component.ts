import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Ad } from 'src/models/ad';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdFormComponent {
  @Input() ad!: Ad;
  @Output() save = new EventEmitter<Ad>();
  @Output() cancel = new EventEmitter<void>();
  imageName: string | null = null;

  onSave() {
    if (this.ad) this.save.emit(this.ad);
  }

  onCancel() {
    this.cancel.emit();
  }

  onImageSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;

  const file = input.files[0];
  this.imageName = file.name; 
  const reader = new FileReader();

  reader.onload = () => {
    this.ad.imageBase64 = reader.result as string;
  };

  reader.readAsDataURL(file);
  }

  removeImage() {
  this.ad.imageBase64 = null as any;
  }
}
