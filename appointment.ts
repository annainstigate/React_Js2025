type BookAppointment = {
  appointmentId: number;
  appointmentType: string;
  patientData: PatientDemographic;
  patientContacts: ContactInformation;
  paymentMethod: Insurance | number;
  appointmentReason: string;
  appointmentDate: number | string;
  doctor: DoctorData;
  isExistingPatient: boolean;
  appoinetmentStatus: string;
  durationInMins: number;
  languagePreference: string;
  confirmationSent: boolean;
  canBeCancelledByPatient: boolean;
  paymentStatus: string;
  bookedBy?: string;
  notes?: string;
  attachedFiles?: string[];
};

type PatientDemographic = {
  id: string | number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

type ContactInformation = {
  phone: number;
  email: string;
};

type Insurance = {
  providerId: number;
  providerName: string;
};

type DoctorData = {
  id: number | string;
  fullName: string;
  speciality: string;
  raiting?: number;
};

const virtualAppointemnt: BookAppointment = {
  appointmentId: 1225,
  appointmentType: "virtual",
  patientData: {
    id: 125,
    firstName: "Nune",
    lastName: "Hayrapetyan",
    dateOfBirth: "2000-02-15",
  },
  patientContacts: {
    phone: 55152455412,
    email: "nune_h@gmail.com",
  },
  paymentMethod: {
    providerId: 986,
    providerName: "Davit",
  },
  appointmentReason: "headache",
  appointmentDate: "2025-04-15",
  doctor: {
    id: 6555,
    fullName: "Petros Petrosyan",
    speciality: "family medicine",
  },
  isExistingPatient: false,
  appoinetmentStatus: "scheduled",
  durationInMins: 45,
  languagePreference: "Armenian",
  bookedBy: "someone else",
  confirmationSent: true,
  canBeCancelledByPatient: true,
  paymentStatus: "paid",
};

console.log(virtualAppointemnt);


const appointments: BookAppointment[] = [virtualAppointemnt];  // Create an array with one item of [virtualAppointment] 

// Function overloading
function getAppointmentInfo(id: number): BookAppointment | undefined;
function getAppointmentInfo(name: string): string;
function getAppointmentInfo(data: BookAppointment): string;

function getAppointmentInfo(
  input: number | string | BookAppointment
): BookAppointment | string | undefined {
  if (typeof input == "number") {
    return appointments.find((appt) => appt.appointmentId == input);
  } else if (typeof input == "string") {
    return `This appointment was scheduled for ${input} patient`;
  } else {
    return `Appointment ${input.appointmentId} with Dr. ${input.doctor.fullName} was in ${input.appointmentDate}`;
  }
}

console.log(getAppointmentInfo(1225));
console.log(getAppointmentInfo("Nune"));
console.log(getAppointmentInfo(virtualAppointemnt));


// Generics
function formatAppointmentDetails<T extends BookAppointment>(  // T can get an object of type BookAppoinment or object that extends it
  appointment: T
): string {
  return `Patient ${appointment.patientData.firstName} ${appointment.patientData.lastName} has an appointment with Dr. ${appointment.doctor.fullName} on ${appointment.appointmentDate}.`;
}

console.log(formatAppointmentDetails(appointments[0]));

