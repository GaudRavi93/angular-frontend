import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })

export class ToastsService {

    constructor(private messageService: MessageService) {}

    success(message: string){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
    }

    info(message: string){
        this.messageService.add({ severity: 'info', summary: 'Information', detail: message });
    }

    warn(message: string){
        this.messageService.add({ severity: 'warn', summary: 'Warning', detail: message });
    }

    error(message: string){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }

}
