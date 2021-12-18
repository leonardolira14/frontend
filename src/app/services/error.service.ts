import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
@Injectable({
    providedIn: 'root',
})

export class ErrorService {
    constructor(private notificationService: NotificationService) {}
    public logSomeMessage(msg: any, objecterror: any, status: number) {

    }
}
