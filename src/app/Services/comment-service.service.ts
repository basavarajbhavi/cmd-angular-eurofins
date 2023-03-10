import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommentserviceService {
  appointmentDomain = environment.appointmentURL;

  constructor(private http: HttpClient) {}

  getAllData(AppointmentID) {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/comment/${AppointmentID}`
    );
  }

  editcomments(AppointmentID, Comments: any) {
    return this.http.put(
      `${this.appointmentDomain}/api/appointments/comment/${AppointmentID}`,
      Comments
    );
  }
}
