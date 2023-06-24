import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <input type="file" (change)="handleImageInput($event)" accept="image/*" class="file-input">
      <div>
        <img [src]="imageSrc" *ngIf="imageSrc" alt="Selected Image">
      </div>
    </div>
  `,
   styles: [`
   .container {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     height: 100vh;
   }

   .file-input {
     margin-bottom: 16px;
   }
 `]
})
export class AppComponent {
  imageSrc: string | undefined;

  constructor(private http: HttpClient) {}

  handleImageInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;

      const formData = new FormData();
      formData.append('image', file);

      this.http.post<any>('http://localhost:8080/upload-image', formData).subscribe(
        (response) => {
          console.log('Image sent successfully', response);
        },
        (error) => {
          console.error('Error sending image', error);
        }
      );
    };
    reader.readAsDataURL(file);
  }
}
