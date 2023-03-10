import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/appointment.service';
import { PatientDataService } from 'src/app/Services/patient-data.service';

@Component({
  selector: 'app-patientcard',
  templateUrl: './patientcard.component.html',
  styleUrls: ['./patientcard.component.css'],
})
export class PatientcardComponent implements OnInit {
  @Input() appointmentId = '';
  allIds: any;
  patientId: any;
  picturePlaceholder =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';

  constructor(
    private data: PatientDataService,
    private _service: AppointmentService,
    private http: HttpClient
  ) {}
  patientdata: any;
  ngOnInit(): void {
    this.data.getAllIds(this.appointmentId).subscribe({
      next: (response) => {
        this.allIds = response;
        this.patientId = this.allIds['PatientId'];
      },
      complete: () =>
        this.data.getAllData(this.patientId).subscribe({
          next: (response) => (this.patientdata = response),
        }),
    });
  }
}
