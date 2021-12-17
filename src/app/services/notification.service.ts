import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastService: ToastrService) { }

  showSuccess(message: string, title: string) {
    this.toastService.success(message, title);
  }

  showError(message: string, title: string) {
    this.toastService.error(message, title);
  }
}
